import hashlib
import json
import struct
from pathlib import Path


ROOT = Path(r"D:\23MySec")
V1 = ROOT / "pages/markets/italy/04_planning/gate4-v0.1"
V2 = ROOT / "pages/markets/italy/04_planning/gate4-v0.2"
OUT = ROOT / "pages/markets/italy/05_review/gate4-directed-rereview-v0.2/identity-audit.json"


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def identity(path: Path):
    data = path.read_bytes()
    return {"bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()}


def png_size(path: Path):
    with path.open("rb") as f:
        header = f.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n" or header[12:16] != b"IHDR":
        raise ValueError(f"Not a PNG: {path}")
    return struct.unpack(">II", header[16:24])


def resolve(raw: str):
    return Path(raw)


input_path = V2 / "MARKET-EU-IT_GATE4_INPUT_INDEX_V0.2.json"
freeze_path = V2 / "MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json"
evidence_path = V2 / "MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json"
verify_path = V2 / "MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json"
runtime_path = V2 / "diagnostic_support/remediation-runtime.json"
old_evidence_path = V1 / "MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json"

input_index = read_json(input_path)
freeze = read_json(freeze_path)
evidence = read_json(evidence_path)
verification = read_json(verify_path)
runtime = read_json(runtime_path)
old_evidence = read_json(old_evidence_path)

input_results = []
for record in input_index["inputs"]:
    path = resolve(record["path"])
    actual = identity(path)
    input_results.append({
        "path": record["path"],
        "declared_bytes": record["bytes"],
        "actual_bytes": actual["bytes"],
        "declared_sha256": record["sha256"],
        "actual_sha256": actual["sha256"],
        "match": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"],
    })

freeze_input_results = []
input_by_path = {r["path"]: r for r in input_index["inputs"]}
for record in freeze["inputs"]:
    path = resolve(record["path"])
    actual = identity(path)
    same_as_input_index = input_by_path.get(record["path"]) == record
    freeze_input_results.append({
        "path": record["path"],
        "match": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"],
        "same_as_input_index": same_as_input_index,
    })

dependency_results = []
for record in freeze["dependencies"]:
    path = resolve(record["path"])
    actual = identity(path)
    dependency_results.append({
        "path": record["path"],
        "match": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"],
    })

binding_specs = [
    ("freeze.source", freeze["source"]),
    ("freeze.previous_freeze", freeze["previous_freeze"]),
    ("freeze.previous_evidence", freeze["previous_evidence"]),
    ("freeze.input_index", freeze["input_index"]),
    ("freeze.workset", freeze["workset"]),
    ("freeze.remediation_runtime", freeze["remediation_runtime"]),
    ("freeze.image_identity_verification", freeze["image_identity_verification"]),
    ("evidence.source", evidence["source"]),
    ("evidence.freeze", evidence["freeze"]),
    ("evidence.input_index", evidence["input_index"]),
    ("evidence.previous_evidence", evidence["previous_evidence"]),
    ("evidence.remediation_runtime", evidence["remediation_runtime"]),
    ("evidence.image_identity_verification", evidence["image_identity_verification"]),
    ("verification.source_evidence", verification["source_evidence"]),
]
binding_results = []
for name, record in binding_specs:
    path = resolve(record["path"])
    actual = identity(path)
    binding_results.append({
        "binding": name,
        "path": record["path"],
        "declared_bytes": record["bytes"],
        "actual_bytes": actual["bytes"],
        "declared_sha256": record["sha256"],
        "actual_sha256": actual["sha256"],
        "match": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"],
    })

image_results = []
for record in evidence["images"]:
    path = resolve(record["path"])
    actual = identity(path)
    width, height = png_size(path)
    complete = all(k in record for k in ("physical_width", "physical_height", "dpr"))
    metadata_match = complete and record["physical_width"] == width and record["physical_height"] == height and record["dpr"] == 1
    image_results.append({
        "path": record["path"],
        "bytes_match": record["bytes"] == actual["bytes"],
        "sha256_match": record["sha256"] == actual["sha256"],
        "declared_physical": [record.get("physical_width"), record.get("physical_height")],
        "decoded_physical": [width, height],
        "declared_dpr": record.get("dpr"),
        "metadata_complete": complete,
        "metadata_match": metadata_match,
        "pass": record["bytes"] == actual["bytes"] and record["sha256"] == actual["sha256"] and metadata_match,
    })

verification_image_results = []
evidence_by_path_for_verification = {r["path"]: r for r in evidence["images"]}
for record in verification["images"]:
    path = resolve(record["path"])
    actual = identity(path)
    width, height = png_size(path)
    evidence_record = evidence_by_path_for_verification.get(record["path"])
    pass_value = (
        record["bytes"] == actual["bytes"]
        and record["sha256"] == actual["sha256"]
        and record.get("physical_width") == width
        and record.get("physical_height") == height
        and record.get("dpr") == 1
        and record.get("metadata_complete") is True
        and record.get("identity_match_v0_1") is True
        and evidence_record is not None
        and all(record.get(k) == evidence_record.get(k) for k in ("path", "bytes", "sha256", "logical_width", "physical_width", "physical_height", "dpr"))
    )
    verification_image_results.append({"path": record["path"], "pass": pass_value})

old_by_path = {r["path"]: r for r in old_evidence["images"]}
new_by_path = {r["path"]: r for r in evidence["images"]}
metadata_differences = []
all_field_differences = []
for path, new in new_by_path.items():
    old = old_by_path[path]
    meta_delta = {}
    for key in ("physical_width", "physical_height", "dpr"):
        if old.get(key) != new.get(key):
            meta_delta[key] = {"old": old.get(key), "new": new.get(key)}
    if meta_delta:
        metadata_differences.append({"path": path, "changes": meta_delta})
    field_delta = {}
    for key in sorted(set(old) | set(new)):
        if old.get(key) != new.get(key):
            field_delta[key] = {"old": old.get(key), "new": new.get(key)}
    if field_delta:
        all_field_differences.append({"path": path, "changes": field_delta})

targeted = [r for r in metadata_differences if "direction-risk" in r["path"] or "focus-states" in r["path"]]
direction = next(r for r in image_results if "1440-direction-risk.png" in r["path"])
state_records = [r for r in image_results if "focus-states" in r["path"]]

regression_results = []
regression_evidence_by_width = {str(r["logical_width"]): r for r in evidence["remediation_regression_images"]}
for width, rec in runtime["widths"].items():
    p = resolve(rec["image"]["path"])
    actual = identity(p)
    dimensions = png_size(p)
    evidence_regression = regression_evidence_by_width.get(width)
    evidence_match = bool(evidence_regression) and (
        evidence_regression["bytes"] == actual["bytes"]
        and evidence_regression["sha256"] == actual["sha256"]
        and evidence_regression["physical_width"] == dimensions[0]
        and evidence_regression["physical_height"] == dimensions[1]
        and evidence_regression["dpr"] == 1
    )
    regression_results.append({
        "logical_width": int(width),
        "path": rec["image"]["path"],
        "bytes_match": rec["image"]["bytes"] == actual["bytes"],
        "sha256_match": rec["image"]["sha256"] == actual["sha256"],
        "decoded_physical": list(dimensions),
        "evidence_record_match": evidence_match,
        "runtime_checks": {
            "scroll_width_equals_client": rec["state"]["scrollWidth"] == rec["state"]["clientWidth"],
            "module_order": rec["state"]["modules"],
            "h1": rec["state"]["h1"],
            "body_links": rec["state"]["bodyLinks"],
            "below_44": rec["state"]["below44"],
            "coo_adjacent": rec["state"]["cooAdjacent"],
            "current_visible": rec["state"]["currentVisible"],
        },
        "pass": rec["image"]["bytes"] == actual["bytes"] and rec["image"]["sha256"] == actual["sha256"] and evidence_match,
    })

source_actual = identity(Path(freeze["source"]["path"]))
old_source = old_evidence["source"]

summary = {
    "frozen_inputs": len(input_results),
    "frozen_inputs_match": sum(r["match"] for r in input_results),
    "freeze_input_records": len(freeze_input_results),
    "freeze_input_records_match": sum(r["match"] and r["same_as_input_index"] for r in freeze_input_results),
    "dependencies": len(dependency_results),
    "dependencies_match": sum(r["match"] for r in dependency_results),
    "bindings": len(binding_results),
    "bindings_match": sum(r["match"] for r in binding_results),
    "images": len(image_results),
    "image_identity_match": sum(r["bytes_match"] and r["sha256_match"] for r in image_results),
    "image_metadata_complete": sum(r["metadata_complete"] for r in image_results),
    "image_metadata_match": sum(r["metadata_match"] for r in image_results),
    "verification_image_records": len(verification_image_results),
    "verification_image_records_match": sum(r["pass"] for r in verification_image_results),
    "metadata_differences_from_v0_1": len(metadata_differences),
    "all_field_differences_from_v0_1": len(all_field_differences),
    "targeted_metadata_differences": len(targeted),
    "state_records": len(state_records),
    "state_records_pass": sum(r["pass"] for r in state_records),
    "regression_images": len(regression_results),
    "regression_images_identity_match": sum(r["pass"] for r in regression_results),
    "runtime_checks": runtime["summary"],
    "source_byte_identical_to_v0_1": source_actual["bytes"] == old_source["bytes"] and source_actual["sha256"] == old_source["sha256"],
}

required_pass = (
    summary["frozen_inputs"] == 60
    and summary["frozen_inputs_match"] == 60
    and summary["freeze_input_records"] == 60
    and summary["freeze_input_records_match"] == 60
    and summary["dependencies"] == 2
    and summary["dependencies_match"] == 2
    and summary["bindings_match"] == summary["bindings"]
    and summary["images"] == 56
    and summary["image_identity_match"] == 56
    and summary["image_metadata_complete"] == 56
    and summary["image_metadata_match"] == 56
    and summary["verification_image_records"] == 56
    and summary["verification_image_records_match"] == 56
    and summary["metadata_differences_from_v0_1"] == 19
    and summary["all_field_differences_from_v0_1"] == 19
    and summary["targeted_metadata_differences"] == 19
    and summary["state_records"] == 18
    and summary["state_records_pass"] == 18
    and direction["decoded_physical"] == [1440, 436]
    and direction["declared_physical"] == [1440, 436]
    and direction["declared_dpr"] == 1
    and summary["regression_images_identity_match"] == 3
    and runtime["summary"]["passed"] == 20
    and runtime["summary"]["failed"] == 0
    and summary["source_byte_identical_to_v0_1"]
)

result = {
    "page_id": "MARKET-EU-IT",
    "review_id": "IT-G4-DIRECTED-REREVIEW-20260907-02",
    "workset_id": "IT-G4-COMPLETE-20260907-02",
    "freeze_id": "IT-G4-FREEZE-20260907-02",
    "status": "PASS" if required_pass else "FAIL",
    "summary": summary,
    "direction_1440": direction,
    "metadata_differences": metadata_differences,
    "input_results": input_results,
    "freeze_input_results": freeze_input_results,
    "dependency_results": dependency_results,
    "binding_results": binding_results,
    "image_results": image_results,
    "verification_image_results": verification_image_results,
    "regression_results": regression_results,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps({"status": result["status"], "summary": summary, "output": str(OUT)}, indent=2, ensure_ascii=False))
