from __future__ import annotations

import hashlib
import json
import subprocess
from pathlib import Path


ROOT = Path(r"D:\23MySec")
REPO = Path(r"D:\32NextJS\.worktrees\applications-child-5-gate8")
EVIDENCE = ROOT / "pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921"


def sha(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def git(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=REPO, text=True).strip()


def main() -> None:
    source_manifest_path = REPO / "docs/verification/applications-child-5-gate8/source-hashes.json"
    source_manifest = json.loads(source_manifest_path.read_text(encoding="utf-8"))
    source_checks = []
    for item in source_manifest:
        path = Path(item["path"])
        actual = sha(path) if path.exists() else None
        source_checks.append({**item, "actual_sha256": actual, "match": actual == item["sha256"]})

    out_dir = REPO / "out"
    out_files = []
    for path in sorted(p for p in out_dir.rglob("*") if p.is_file()):
        out_files.append({"path": path.relative_to(out_dir).as_posix(), "sha256": sha(path), "bytes": path.stat().st_size})

    results_path = REPO / "docs/verification/applications-child-5-gate8/RESULTS.md"
    package_path = ROOT / "pages/applications/06_handoff/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE6_HANDOFF_PACKAGE_V1.0.md"
    screenshot_dir = REPO / "docs/verification/applications-child-5-gate8/screenshots"
    evidence_manifest_hits = list(REPO.glob("**/gate8_evidence_manifest.json"))
    identity = {
        "repository": str(REPO),
        "branch": git("branch", "--show-current"),
        "head": git("rev-parse", "HEAD"),
        "tree": git("rev-parse", "HEAD^{tree}"),
        "parents": git("show", "-s", "--format=%P", "HEAD").split(),
        "worktree_porcelain": git("status", "--porcelain=v1"),
        "worktree_clean": git("status", "--porcelain=v1") == "",
        "gate6_package_sha256": sha(package_path),
        "gate8_results_sha256": sha(results_path),
        "gate8_source_hashes_sha256": sha(source_manifest_path),
        "source_checks": source_checks,
        "all_source_hashes_match": all(item["match"] for item in source_checks),
        "gate8_screenshot_count": len(list(screenshot_dir.glob("*.png"))),
        "gate8_evidence_manifest_candidates_in_worktree": [str(p) for p in evidence_manifest_hits],
        "standard_manifest_present": bool(evidence_manifest_hits),
        "out_file_count": len(out_files),
        "out_total_bytes": sum(item["bytes"] for item in out_files),
    }
    (EVIDENCE / "candidate-identity.json").write_text(json.dumps(identity, ensure_ascii=False, indent=2), encoding="utf-8")
    (EVIDENCE / "observed-artifact-inventory.json").write_text(json.dumps({"directory": str(out_dir), "files": out_files}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({k: identity[k] for k in ["head", "tree", "worktree_clean", "all_source_hashes_match", "gate8_screenshot_count", "standard_manifest_present", "out_file_count"]}, ensure_ascii=False))


if __name__ == "__main__":
    main()
