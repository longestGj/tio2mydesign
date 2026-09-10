import hashlib
import json
import struct
import sys
from pathlib import Path


d = Path(r"D:\23MySec\pages\markets\italy\05_review\gate4-directed-rereview-v0.2")
audit = json.loads((d / "identity-audit.json").read_text(encoding="utf-8"))
runtime = json.loads((d / "independent-runtime.json").read_text(encoding="utf-8"))
readback = json.loads((d / "visual-readback.json").read_text(encoding="utf-8"))
index = json.loads((d / "review-evidence-index.json").read_text(encoding="utf-8"))
review = (d / "REVIEW.md").read_text(encoding="utf-8")

checks = [("audit_pass", audit["status"] == "PASS")]
summary = audit["summary"]
expected_counts = {
    "frozen_inputs_match": 60,
    "freeze_input_records_match": 60,
    "dependencies_match": 2,
    "bindings_match": 14,
    "image_identity_match": 56,
    "image_metadata_complete": 56,
    "image_metadata_match": 56,
    "verification_image_records_match": 56,
    "metadata_differences_from_v0_1": 19,
    "all_field_differences_from_v0_1": 19,
    "targeted_metadata_differences": 19,
    "state_records_pass": 18,
    "regression_images_identity_match": 3,
}
checks.extend((key, summary[key] == value) for key, value in expected_counts.items())
checks.append(("source_stable", summary["source_byte_identical_to_v0_1"] is True))
checks.append(("runtime_18_18", runtime["summary"]["passed"] == 18 and runtime["summary"]["failed"] == 0))
checks.append(("readback_21_21", readback["counts"]["opened"] == 21 and readback["counts"]["findings"] == 0))
checks.append(("index_decision", index["decision"] == "PROJECT_CONTROL_REVIEW_PASS" and index["finding_disposition"] == {"closed": ["IT-G4-PC-R01"], "required_open": 0, "new_findings": 0}))

for record in index["files"]:
    path = Path(record["path"])
    data = path.read_bytes()
    checks.append(("file:" + path.name, len(data) == record["bytes"] and hashlib.sha256(data).hexdigest() == record["sha256"]))

for record in index["visuals"]:
    path = Path(record["path"])
    data = path.read_bytes()
    width, height = struct.unpack(">II", data[16:24])
    checks.append(("visual:" + path.name, len(data) == record["bytes"] and hashlib.sha256(data).hexdigest() == record["sha256"] and [width, height] == [record["physical_width"], record["physical_height"]] and record["dpr"] == 1 and record["opened"] is True))

for token in ("PROJECT_CONTROL_REVIEW_PASS", "Required Finding: **0**", "IT-G4-PC-R01` is CLOSED", "IT-G4-COMPLETE-20260907-02", "IT-G4-FREEZE-20260907-02"):
    checks.append(("review_token:" + token, token in review))

failures = [name for name, passed in checks if not passed]
for name in ("REVIEW.md", "review-evidence-index.json", "identity-audit.json", "independent-runtime.json", "visual-readback.json"):
    path = d / name
    data = path.read_bytes()
    print(name, len(data), hashlib.sha256(data).hexdigest())
print("CHECKS", len(checks), "PASSED", sum(passed for _, passed in checks), "FAILED", len(failures))
print("FAILED_IDS", failures)
print("DIR_FILES", sum(1 for p in d.rglob("*") if p.is_file()), "DIR_IMAGES", sum(1 for p in d.rglob("*.png")))
sys.exit(1 if failures else 0)
