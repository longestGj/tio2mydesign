#!/usr/bin/env python3
"""Run read-only Gate 9 identity and runtime preflight checks."""

from __future__ import annotations

import argparse
import hashlib
import json
import socket
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

from validate_evidence_manifest import validate_manifest


def emit(result: dict[str, Any], output: Path | None) -> None:
    rendered = json.dumps(result, ensure_ascii=False, indent=2)
    if output:
        output.write_text(rendered + "\n", encoding="utf-8")
    else:
        print(rendered)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--rounds", type=int, default=1)
    parser.add_argument("--timeout", type=float, default=5.0)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    if args.rounds < 1:
        parser.error("--rounds must be at least 1")

    evidence_result = validate_manifest(args.manifest)
    if evidence_result["status"] != "PASS":
        result = {"status": "EVIDENCE_INCOMPLETE", "evidence_validation": evidence_result, "runtime": None}
        emit(result, args.output)
        return 2

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    runtime = manifest["runtime"]
    base_url = str(runtime.get("base_url", "")).rstrip("/")
    expected_scope = manifest.get("site_scope")
    static = manifest["schema_version"] == "gate8-evidence-manifest-v1.1"
    artifact_hashes = {x["path"]: x["sha256"] for x in manifest["build"].get("files", [])}
    build_id = manifest["build"].get("build_id")
    observations: list[dict[str, Any]] = []
    successful = 0
    environment_failure = False
    implementation_failure = False

    for round_number in range(1, args.rounds + 1):
        for check in runtime.get("checks", []):
            url = base_url + str(check["path"])
            observation: dict[str, Any] = {"round": round_number, "url": url}
            try:
                request = urllib.request.Request(url, headers={"User-Agent": "Gate9-ReadOnly-Preflight/1.0"})
                try:
                    host = urllib.parse.urlparse(url).hostname
                    if host in {"127.0.0.1", "localhost", "::1"}:
                        opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
                        response = opener.open(request, timeout=args.timeout)
                    else:
                        response = urllib.request.urlopen(request, timeout=args.timeout)
                except urllib.error.HTTPError as http_response:
                    response = http_response
                with response:
                    data = response.read()
                    text = data.decode(response.headers.get_content_charset() or "utf-8", errors="replace")
                    observation.update({"status": response.status, "bytes": len(data), "final_url": response.geturl()})
                    expected_status = int(check.get("expected_status", 200))
                    missing_markers = [marker for marker in check.get("contains", []) if str(marker) not in text]
                    scope_header = response.headers.get("X-Site-Scope")
                    scope_mismatch = not static and scope_header is not None and scope_header != expected_scope
                    require_build_marker = not static and bool(runtime.get("require_build_marker", True))
                    build_markers = (
                        f"/_next/static/{build_id}/",
                        f'\\"b\\":\\"{build_id}\\"',
                    )
                    build_marker_missing = require_build_marker and not any(
                        marker in text for marker in build_markers
                    )
                    artifact_mismatch = static and hashlib.sha256(data).hexdigest() != artifact_hashes.get(check.get("artifact_path"))
                    observation.update({
                        "artifact_mismatch": artifact_mismatch,
                        "missing_markers": missing_markers,
                        "scope_header": scope_header,
                        "scope_mismatch": scope_mismatch,
                        "build_marker_missing": build_marker_missing,
                    })
                    passed = response.status == expected_status and not missing_markers and not scope_mismatch and not build_marker_missing and not artifact_mismatch
                    observation["result"] = "PASS" if passed else "FAIL"
                    if passed:
                        successful += 1
                    else:
                        implementation_failure = True
            except (urllib.error.URLError, TimeoutError, socket.timeout, ConnectionError) as exc:
                observation.update({"result": "FAIL", "error": type(exc).__name__, "detail": str(exc)})
                environment_failure = True
            observations.append(observation)

    total = args.rounds * len(runtime.get("checks", []))
    if environment_failure:
        status, exit_code = "ENVIRONMENT_FAILURE", 3
    elif implementation_failure or successful != total:
        status, exit_code = "IMPLEMENTATION_FAILURE", 4
    else:
        status, exit_code = "PASS", 0
    result = {
        "status": status,
        "handoff_id": manifest["handoff_id"],
        "gate8_task_id": manifest["gate8_task_id"],
        "site_scope": expected_scope,
        "identity": {
            "implementation_commit": manifest["git"]["implementation_commit"],
            "evidence_head": manifest["git"]["evidence_head"],
            "build_id": build_id,
            "artifact_files": len(artifact_hashes) if static else None,
        },
        "runtime": {"base_url": base_url, "rounds": args.rounds, "requests": total, "successful_requests": successful, "observations": observations},
        "evidence_validation": {"status": evidence_result["status"]},
    }
    emit(result, args.output)
    return exit_code


if __name__ == "__main__":
    sys.exit(main())
