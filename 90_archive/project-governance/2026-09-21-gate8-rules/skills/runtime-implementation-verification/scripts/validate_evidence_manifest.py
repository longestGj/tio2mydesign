#!/usr/bin/env python3
"""Validate a Gate 8 evidence manifest against its Git repository."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Any


REQUIRED_TOP_LEVEL = {
    "schema_version",
    "handoff_id",
    "gate8_task_id",
    "site_scope",
    "receipt_path",
    "pages",
    "git",
    "build",
    "runtime",
    "evidence",
    "receipt_evidence_references",
    "known_open_items",
}
SECRET_PATTERNS = [
    re.compile(rb"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    re.compile(rb"(?i)(?:api[_-]?key|secret|password|token)\s*[:=]\s*['\"]?[A-Za-z0-9_\-]{16,}"),
]


def git(repo: Path, *args: str, check: bool = True) -> subprocess.CompletedProcess[bytes]:
    return subprocess.run(
        ["git", *args], cwd=repo, capture_output=True, check=check
    )


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def within_repo(repo: Path, relative: str) -> Path | None:
    candidate = (repo / relative).resolve()
    try:
        candidate.relative_to(repo.resolve())
    except ValueError:
        return None
    return candidate


def add(checks: list[dict[str, Any]], check_id: str, passed: bool, detail: Any) -> None:
    checks.append({"id": check_id, "result": "PASS" if passed else "FAIL", "detail": detail})


def validate_manifest(manifest_path: Path) -> dict[str, Any]:
    checks: list[dict[str, Any]] = []
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        return {"status": "EVIDENCE_INCOMPLETE", "checks": [{"id": "manifest_parse", "result": "FAIL", "detail": str(exc)}]}

    missing = sorted(REQUIRED_TOP_LEVEL - set(manifest))
    add(checks, "manifest_required_fields", not missing, {"missing": missing})
    if missing:
        return {"status": "EVIDENCE_INCOMPLETE", "checks": checks}

    add(checks, "schema_version", manifest["schema_version"] == "gate8-evidence-manifest-v1.0", manifest["schema_version"])
    add(checks, "identity_fields", all(str(manifest.get(k, "")).strip() for k in ("handoff_id", "gate8_task_id", "site_scope")), None)
    pages = manifest.get("pages")
    pages_ok = isinstance(pages, list) and bool(pages) and all(
        isinstance(p, dict)
        and str(p.get("page_id", "")).strip()
        and isinstance(p.get("acceptance_condition_ids"), list)
        and bool(p["acceptance_condition_ids"])
        and str(p.get("runtime_path", "")).startswith("/")
        for p in pages
    )
    add(checks, "page_scope", pages_ok, pages)

    repo = Path(str(manifest.get("git", {}).get("repository", ""))).resolve()
    repo_ok = repo.is_dir() and (repo / ".git").exists()
    add(checks, "repository_exists", repo_ok, str(repo))
    if not repo_ok:
        return {"status": "EVIDENCE_INCOMPLETE", "checks": checks}

    git_info = manifest["git"]
    required_git = ("branch", "baseline_commit", "implementation_commit", "evidence_head", "clean_checked_at")
    add(checks, "git_fields", all(str(git_info.get(k, "")).strip() for k in required_git), required_git)
    actual_branch = git(repo, "branch", "--show-current").stdout.decode().strip()
    actual_head = git(repo, "rev-parse", "HEAD").stdout.decode().strip()
    add(checks, "git_branch", actual_branch == git_info.get("branch"), {"expected": git_info.get("branch"), "actual": actual_branch})
    add(checks, "git_head", actual_head == git_info.get("evidence_head"), {"expected": git_info.get("evidence_head"), "actual": actual_head})
    for relation_id, older, newer in (
        ("baseline_to_implementation", git_info.get("baseline_commit"), git_info.get("implementation_commit")),
        ("implementation_to_evidence", git_info.get("implementation_commit"), git_info.get("evidence_head")),
    ):
        relation = git(repo, "merge-base", "--is-ancestor", str(older), str(newer), check=False).returncode == 0
        add(checks, relation_id, relation, {"ancestor": older, "descendant": newer})
    dirty = git(repo, "status", "--porcelain").stdout.decode().strip()
    add(checks, "git_clean", not dirty, {"porcelain": dirty})

    build = manifest["build"]
    build_dir = within_repo(repo, str(build.get("directory", "")))
    build_id_file = build_dir / "BUILD_ID" if build_dir else None
    build_id = build_id_file.read_text(encoding="utf-8").strip() if build_id_file and build_id_file.is_file() else None
    add(checks, "build_directory", bool(build_dir and build_dir.is_dir()), str(build_dir) if build_dir else None)
    add(checks, "build_id", build_id == build.get("build_id"), {"expected": build.get("build_id"), "actual": build_id})
    add(checks, "build_implementation_binding", build.get("implementation_commit") == git_info.get("implementation_commit"), {"build": build.get("implementation_commit"), "git": git_info.get("implementation_commit")})

    declared_paths: set[str] = set()
    for index, item in enumerate(manifest.get("evidence", [])):
        prefix = f"evidence_{index}"
        relative = str(item.get("path", "")).replace("\\", "/")
        declared_paths.add(relative)
        path = within_repo(repo, relative)
        exists = bool(path and path.is_file())
        add(checks, f"{prefix}_missing", exists, relative)
        metadata_ok = all(item.get(k) for k in ("sha256", "evidence_type", "proves", "command", "environment"))
        add(checks, f"{prefix}_metadata", metadata_ok, {k: item.get(k) for k in ("evidence_type", "proves", "command", "environment")})
        if not exists:
            continue
        current_data = path.read_bytes()
        expected_hash = str(item.get("sha256", "")).lower()
        add(checks, f"{prefix}_sha256", sha256(current_data) == expected_hash, {"expected": expected_hash, "actual": sha256(current_data)})
        committed = git(repo, "show", f"{git_info['evidence_head']}:{relative}", check=False)
        add(checks, f"{prefix}_committed", committed.returncode == 0, relative)
        if committed.returncode == 0:
            blob = git(repo, "rev-parse", f"{git_info['evidence_head']}:{relative}").stdout.decode().strip()
            checks.append({
                "id": f"{prefix}_committed_blob",
                "result": "PASS",
                "detail": {
                    "blob_oid": blob,
                    "blob_sha256": sha256(committed.stdout),
                    "note": "Git filters may make committed blob bytes differ from worktree bytes; the declared SHA-256 binds the delivered worktree file."
                }
            })
        secret_hits = [pattern.pattern.decode(errors="replace") for pattern in SECRET_PATTERNS if pattern.search(current_data)]
        add(checks, f"{prefix}_secret_scan", not secret_hits, {"hits": secret_hits, "personal_data_review": "MANUAL_REVIEW_STILL_REQUIRED"})

    references = {str(p).replace("\\", "/") for p in manifest.get("receipt_evidence_references", [])}
    undeclared = sorted(references - declared_paths)
    add(checks, "receipt_references_declared", not undeclared, {"undeclared": undeclared})
    receipt_relative = str(manifest.get("receipt_path", "")).replace("\\", "/")
    receipt_path = within_repo(repo, receipt_relative)
    receipt_exists = bool(receipt_path and receipt_path.is_file())
    add(checks, "receipt_exists", receipt_exists, receipt_relative)
    if receipt_exists:
        receipt_text = receipt_path.read_text(encoding="utf-8", errors="replace")
        actual_references = {
            match.replace("\\", "/")
            for match in re.findall(r"(?m)^EVIDENCE:\s*(\S+)\s*$", receipt_text)
        }
        add(checks, "receipt_actual_references", actual_references == references, {
            "declared": sorted(references),
            "actual": sorted(actual_references),
            "undeclared_in_receipt": sorted(actual_references - references),
            "missing_from_receipt": sorted(references - actual_references),
        })
        receipt_committed = git(repo, "cat-file", "-e", f"{git_info['evidence_head']}:{receipt_relative}", check=False).returncode == 0
        add(checks, "receipt_committed", receipt_committed, receipt_relative)
        receipt_secret_hits = [pattern.pattern.decode(errors="replace") for pattern in SECRET_PATTERNS if pattern.search(receipt_path.read_bytes())]
        add(checks, "receipt_secret_scan", not receipt_secret_hits, {"hits": receipt_secret_hits, "personal_data_review": "MANUAL_REVIEW_STILL_REQUIRED"})

    status = "PASS" if all(item["result"] == "PASS" for item in checks) else "EVIDENCE_INCOMPLETE"
    return {
        "status": status,
        "manifest": str(manifest_path.resolve()),
        "handoff_id": manifest.get("handoff_id"),
        "checks": checks,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    result = validate_manifest(args.manifest)
    rendered = json.dumps(result, ensure_ascii=False, indent=2)
    if args.output:
        args.output.write_text(rendered + "\n", encoding="utf-8")
    else:
        print(rendered)
    return 0 if result["status"] == "PASS" else 2


if __name__ == "__main__":
    sys.exit(main())
