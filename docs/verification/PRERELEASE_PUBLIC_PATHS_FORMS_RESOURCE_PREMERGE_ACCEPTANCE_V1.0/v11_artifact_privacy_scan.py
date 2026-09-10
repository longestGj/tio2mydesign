import hashlib
import json
import re
import sys
from pathlib import Path


TEXT_SUFFIXES = {".json", ".txt", ".md", ".log"}
IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp"}

PROHIBITED_VALUE_PATTERNS = {
    "email_value": re.compile(r"(?i)\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"),
    "known_receiver": re.compile(r"(?i)mike\.longestgj\s*@\s*gmail\.com"),
    "synthetic_reply_or_buyer_sentinel": re.compile(
        r"(?i)local-prerelease-[a-z0-9-]+@example\.com|PRIVATE_BUYER_SENTINEL|secret@owned\.net"
    ),
    "access_key_value": re.compile(
        r"(?i)(?:access[_-]?key|NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY)\s*[=:]\s*[\"']?"
        r"(?!\s*(?:redacted|null|none|false|true|0)\b)[A-Za-z0-9_-]{8,}"
    ),
    "serialized_payload_or_raw_body": re.compile(
        r"(?i)[\"'](?:payload|postData|postDataJSON|rawBody|responseBody|providerBody)[\"']\s*:"
    ),
    "cookie_or_session_value": re.compile(
        r"(?i)[\"'](?:cookie|cookies|sessionStorage|localStorage|session_marker)[\"']\s*:\s*"
        r"(?!null\b|\[\s*\]|\{\s*\}|[\"']{2})"
    ),
}

PROHIBITED_CAPTURE_PATTERN = re.compile(
    r"(?i)(?:^|[/\\])(trace|traces|videos?|har|dom-snapshot)(?:[/\\.]|$)|\.(?:zip|har|webm|html?)$"
)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def main():
    manifest_path = Path(sys.argv[1])
    worktree = Path(sys.argv[2])
    output_path = Path(sys.argv[3])
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)

    missing = []
    hash_mismatches = []
    hits = {name: [] for name in PROHIBITED_VALUE_PATTERNS}
    prohibited_capture_paths = []
    suffix_counts = {}
    text_count = 0
    image_count = 0

    for evidence in manifest["evidence"]:
        relative = evidence["path"]
        path = worktree / relative
        suffix = path.suffix.lower()
        suffix_counts[suffix or "<none>"] = suffix_counts.get(suffix or "<none>", 0) + 1
        if PROHIBITED_CAPTURE_PATTERN.search(relative):
            prohibited_capture_paths.append(relative)
        if not path.is_file():
            missing.append(relative)
            continue
        data = path.read_bytes()
        if sha256(data).lower() != evidence["sha256"].lower():
            hash_mismatches.append(relative)
        if suffix in IMAGE_SUFFIXES:
            image_count += 1
        if suffix not in TEXT_SUFFIXES:
            continue
        text_count += 1
        artifact_text = data.decode("utf-8", errors="replace")
        for name, pattern in PROHIBITED_VALUE_PATTERNS.items():
            if pattern.search(artifact_text):
                hits[name].append(relative)

    hit_counts = {name: len(paths) for name, paths in hits.items()}
    nonpass = (
        len(missing)
        + len(hash_mismatches)
        + len(prohibited_capture_paths)
        + sum(hit_counts.values())
    )
    result = {
        "schema_version": "gate9-v11-artifact-privacy-scan/1.0",
        "candidate": manifest.get("handoff_id"),
        "manifest_path": str(manifest_path),
        "manifest_sha256": sha256(manifest_bytes),
        "worktree": str(worktree),
        "artifact_count": len(manifest["evidence"]),
        "text_artifact_count": text_count,
        "image_artifact_count": image_count,
        "suffix_counts": suffix_counts,
        "missing_count": len(missing),
        "hash_mismatch_count": len(hash_mismatches),
        "prohibited_capture_path_count": len(prohibited_capture_paths),
        "prohibited_value_hit_counts": hit_counts,
        "status": "PASS" if nonpass == 0 else "FAIL",
        "missing_paths": missing,
        "hash_mismatch_paths": hash_mismatches,
        "prohibited_capture_paths": prohibited_capture_paths,
        "prohibited_value_hit_paths": hits,
        "scope_note": (
            "Text artifacts were scanned without emitting matched values. Declared screenshots are empty-form, "
            "public-page, cookie-settings, or Thank You state captures and were covered by the independent "
            "visual review; no filled-form trace, video, HAR, DOM snapshot, HTML capture, or archive is declared."
        ),
    }
    output_path.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps({
        "status": result["status"],
        "artifact_count": result["artifact_count"],
        "text_artifact_count": text_count,
        "image_artifact_count": image_count,
        "missing_count": len(missing),
        "hash_mismatch_count": len(hash_mismatches),
        "prohibited_capture_path_count": len(prohibited_capture_paths),
        "prohibited_value_hit_counts": hit_counts,
    }, indent=2))
    return 0 if result["status"] == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(main())
