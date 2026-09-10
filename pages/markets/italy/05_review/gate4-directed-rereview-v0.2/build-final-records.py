import hashlib
import json
import struct
from pathlib import Path


ROOT = Path(r"D:\23MySec")
REVIEW = ROOT / "pages/markets/italy/05_review/gate4-directed-rereview-v0.2"
V1 = ROOT / "pages/markets/italy/04_planning/gate4-v0.1"
V2 = ROOT / "pages/markets/italy/04_planning/gate4-v0.2"


def ident(path: Path):
    data = path.read_bytes()
    return {"path": path.as_posix(), "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()}


def png_size(path: Path):
    data = path.read_bytes()[:24]
    return list(struct.unpack(">II", data[16:24]))


def visual(path: Path, logical_width: int, role: str, state: str, target=None):
    record = ident(path)
    record.update({
        "logical_width": logical_width,
        "physical_width": png_size(path)[0],
        "physical_height": png_size(path)[1],
        "dpr": 1,
        "role": role,
        "state": state,
        "target": target,
        "opened": True,
        "observation": "Complete and uncropped through Footer" if role == "independent_full_page" else "Target visible; geometry stable; state treatment uncropped",
    })
    return record


full_pages = [visual(REVIEW / f"independent-renders/{w}-full.png", w, "independent_full_page", "FULL") for w in (1440, 768, 390)]
states = []
for width in (1440, 768, 390):
    for key, target in (("request-documents", "Request Documents"), ("federchimica-source", "Federchimica AVISA — association sectors")):
        for state in ("normal", "hover", "focus"):
            states.append(visual(V1 / f"diagnostic_support/focus-states/{width}-{key}-{state}.png", width, "targeted_state_crop", state.upper(), target))

readback = {
    "page_id": "MARKET-EU-IT",
    "review_id": "IT-G4-DIRECTED-REREVIEW-20260907-02",
    "workset_id": "IT-G4-COMPLETE-20260907-02",
    "freeze_id": "IT-G4-FREEZE-20260907-02",
    "status": "PASS / 21 OF 21 TARGETED VISUALS OPENED",
    "counts": {"full_pages": 3, "state_crops": 18, "opened": 21, "findings": 0},
    "full_pages": full_pages,
    "state_crops": states,
    "observations": [
        "The 1440, 768 and 390 complete-page renders are continuous from shared Header to the final legal Footer, with no visible horizontal overflow, clipping, overlap or missing section.",
        "All Request Documents and Federchimica normal, hover and focus crops are readable and uncropped at all three widths.",
        "Every hover image differs from its corresponding normal image; every focus image shows the stable 3 px outline without collision or crop loss.",
        "No page or contract drift was observed; the candidate source is byte-identical to the previously reviewed V0.1 source.",
    ],
}
readback_path = REVIEW / "visual-readback.json"
readback_path.write_text(json.dumps(readback, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

evidence_sources = [
    V2 / "MARKET-EU-IT_GATE4_INPUT_INDEX_V0.2.json",
    V2 / "MARKET-EU-IT_GATE4_WORKSET_V0.2.json",
    V2 / "MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json",
    V2 / "MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json",
    V2 / "MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json",
    V2 / "diagnostic_support/remediation-runtime.json",
    V1 / "MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html",
    REVIEW / "identity-audit.py",
    REVIEW / "identity-audit.json",
    REVIEW / "independent-runtime.cjs",
    REVIEW / "independent-runtime.json",
    readback_path,
    REVIEW / "REVIEW.md",
]

index = {
    "page_id": "MARKET-EU-IT",
    "review_id": "IT-G4-DIRECTED-REREVIEW-20260907-02",
    "workset_id": "IT-G4-COMPLETE-20260907-02",
    "freeze_id": "IT-G4-FREEZE-20260907-02",
    "decision": "PROJECT_CONTROL_REVIEW_PASS",
    "finding_disposition": {"closed": ["IT-G4-PC-R01"], "required_open": 0, "new_findings": 0},
    "counts": {
        "frozen_inputs_recomputed": 60,
        "freeze_input_copies_recomputed": 60,
        "dependencies_recomputed": 2,
        "top_level_bindings_recomputed": 14,
        "executor_images_recomputed": 56,
        "corrected_metadata_records": 19,
        "executor_regression_images_recomputed": 3,
        "independent_full_pages": 3,
        "targeted_state_crops_opened": 18,
        "targeted_visuals_opened": 21,
        "independent_runtime_checks": 18,
        "required_findings": 0,
    },
    "files": [ident(p) for p in evidence_sources],
    "visuals": full_pages + states,
    "boundary": "Independent directed rereview only. Gate 4 closure and Gate 6 are not started by this record.",
}
(REVIEW / "review-evidence-index.json").write_text(json.dumps(index, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps({"visual_readback": ident(readback_path), "review_evidence_index": ident(REVIEW / 'review-evidence-index.json')}, indent=2, ensure_ascii=False))
