import hashlib
import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(r"D:/23MySec")
BASE = ROOT / "pages/applications/coatings/04_planning/gate4-v0.1"
REVIEW = ROOT / "pages/applications/coatings/05_review/gate4-complete-independent-v0.1"


def identity(path):
    p = Path(path)
    data = p.read_bytes()
    return {"path": p.as_posix(), "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()}


def compare(record):
    actual = identity(record["path"])
    return {
        "path": record["path"],
        "expectedBytes": record["bytes"],
        "actualBytes": actual["bytes"],
        "expectedSha256": record["sha256"],
        "actualSha256": actual["sha256"],
        "match": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"],
    }


freeze_path = BASE / "approval_core/source-freeze.json"
evidence_path = BASE / "evidence_index.json"
export_path = BASE / "approval_core/export-inventory.json"
asset_inventory_path = BASE / "approval_core/asset-inventory.json"
formal_runtime_path = BASE / "diagnostic_support/formal-runtime-checks.json"
independent_runtime_path = REVIEW / "independent-runtime.json"

freeze = json.loads(freeze_path.read_text(encoding="utf-8"))
evidence = json.loads(evidence_path.read_text(encoding="utf-8"))
export = json.loads(export_path.read_text(encoding="utf-8"))
independent = json.loads(independent_runtime_path.read_text(encoding="utf-8"))

inputs = [compare(x) for x in freeze["inputs"]]
dependencies = [compare(x) for x in freeze["dependencies"]]
bound = [compare(x) for x in freeze["bound"].values()]
formal_assets = [compare(x) for x in export["assets"]]

pointer_names = [
    "candidate", "visualLayer", "sourceFreeze", "inputIndex", "direction", "preflight",
    "formalRuntime", "exportInventory", "assetInventory", "formalVisualReadback", "report",
    "selfcheck", "candidateManifest", "independentReviewEntry",
]
evidence_pointers = []
for name in pointer_names:
    record = evidence.get(name)
    if isinstance(record, dict) and {"path", "bytes", "sha256"}.issubset(record):
        result = compare(record)
        result["name"] = name
        evidence_pointers.append(result)

official_hashes = Counter(x["sha256"] for x in export["assets"])
independent_hashes = Counter(x["sha256"] for x in independent["assets"])
matching_rerender_assets = sum((official_hashes & independent_hashes).values())

index_mismatch = next(x for x in inputs if x["path"].replace("\\", "/").endswith("/01_PROJECT_INDEX.md"))
index_mismatch["classification"] = "POST_FREEZE_UNRELATED_GOVERNANCE_NAVIGATION_DRIFT"
index_mismatch["impact"] = "No APP-COAT candidate, method, approved content, shared contract, dependency, bound record, or formal asset changed. The observed git diff updates the Poland task row and Applications article-navigation row after the Coatings freeze."

result = {
    "auditAt": datetime.now(timezone.utc).isoformat(),
    "role": "INDEPENDENT_GATE4_REVIEWER",
    "worksetId": freeze["workset_id"],
    "freezeId": freeze["freeze_id"],
    "identities": {
        "candidate": identity(BASE / "APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html"),
        "visualLayer": identity(BASE / "visual-direction.css"),
        "sourceFreeze": identity(freeze_path),
        "evidenceIndex": identity(evidence_path),
        "exportInventory": identity(export_path),
        "assetInventory": identity(asset_inventory_path),
        "formalRuntime": identity(formal_runtime_path),
        "independentRuntime": identity(independent_runtime_path),
    },
    "recomputation": {
        "frozenInputs": {"total": len(inputs), "matched": sum(x["match"] for x in inputs), "mismatches": [x for x in inputs if not x["match"]]},
        "dependencies": {"total": len(dependencies), "matched": sum(x["match"] for x in dependencies), "mismatches": [x for x in dependencies if not x["match"]]},
        "boundRecords": {"total": len(bound), "matched": sum(x["match"] for x in bound), "mismatches": [x for x in bound if not x["match"]]},
        "evidenceIndexPointers": {"total": len(evidence_pointers), "matched": sum(x["match"] for x in evidence_pointers), "mismatches": [x for x in evidence_pointers if not x["match"]]},
        "formalAssets": {"total": len(formal_assets), "matched": sum(x["match"] for x in formal_assets), "mismatches": [x for x in formal_assets if not x["match"]]},
        "independentRerender": {
            "total": len(independent["assets"]),
            "hashesMatchingFormalAssetMultiset": matching_rerender_assets,
            "checks": independent["summary"]["checks"],
            "passed": independent["summary"]["passed"],
            "failed": independent["summary"]["failed"],
        },
    },
    "contextualObservation": index_mismatch,
}

(REVIEW / "identity-audit.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
print(json.dumps(result["recomputation"], indent=2))
