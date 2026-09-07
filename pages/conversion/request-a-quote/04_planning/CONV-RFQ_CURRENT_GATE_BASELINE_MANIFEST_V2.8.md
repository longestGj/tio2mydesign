# CONV-RFQ Current Gate Baseline Manifest V2.8

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.8 |
| Current gate | Gate 5 — complete visual design |
| Review ID | `CONV-RFQ-G5-VIS-01` |
| Project-control decision | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 5 | `NOT_USER_APPROVED / NOT_CLOSED` |
| Gate 6 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. Project-control PASS is not user approval.

## 1. Current review authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `05_review/CONV-RFQ_GATE5_PROJECT_CONTROL_CLOSURE_V1.0.md` | 2,369 | `FC9CB0ECA013BD73AEE3BFD3BE42FE14289F73C4F1AD2BFAF248BD9BD1CEEC67` | G5-D01–D07 project-control PASS and stop boundary |
| `04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.7.md` | 5,343 | `6B7142D9E4E49C526B5CF8F497124B9D6216D20B7A53F79D21C4033889FFE8C5` | exact submitted document/asset set and all frozen SHA-256 values |
| `05_review/CONV-RFQ_GATE5_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | 4,195 | `CA398A1B1B8FD0DCDBC6EE425FBC80E07821D2A8BD09DA68E0542CE17774F3E0` | project-control review entry |
| `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_SPEC_V1.0.md` | 8,458 | `183799DFAA10000CFF95EED28D67392831D8DCEFDF6D752D937471FDA82EC0EE` | complete visual/state contract |
| `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_VALIDATION_V1.0.md` | 5,507 | `409B55BEC09DAB36C772D9979DB4D572AE9EDAD1E80601F678EDFB940C771639` | validation evidence |

## 2. Frozen visual set

The 12 files under `04_planning/visual-designs/gate5_v1.0/` are unchanged from Manifest V2.7:

- complete 1440 Desktop Buyer Clean PNG/SVG;
- complete 768 Tablet Buyer Clean PNG/SVG;
- complete 390 logical @2x Mobile Buyer Clean PNG/SVG;
- 390 logical @2x Mobile Menu open PNG/SVG;
- 1440 Desktop state proof PNG/SVG;
- 390 logical @2x Mobile state proof PNG/SVG.

Their dimensions, byte counts and SHA-256 values are authoritative in frozen Manifest V2.7 and validation V1.0. Project-control review passed that exact set; no asset was changed after review.

## 3. Passed project-control decisions

- G5-D01 complete responsive pages and no page-level horizontal overflow.
- G5-D02 one centred Desktop page flow; no page-level left/right split.
- G5-D03 inherited Global Chrome V0.5 and permanent RFQ continuity.
- G5-D04 original Hero and complete approved field/minimum-data boundary.
- G5-D05 all required interaction and restricted states.
- G5-D06 Buyer Clean with no internal governance/blocker/placeholder text.
- G5-D07 PRODUCT V0.3 neutral relationship boundary.

## 4. User decision now required

The user should review the complete Desktop, Tablet and Mobile visuals plus the key state proofs and decide whether to approve Gate 5.

Approval must be explicit. Until then:

- Gate 5 is not `APPROVED` or `CLOSED`;
- Gate 6 is locked;
- development, handoff, deployment, publication and indexing are unauthorized.

## 5. Historical disposition

`CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.7.md` is `HISTORICAL SUBMITTED REVIEW SET / FROZEN_BY_V2.8`; it remains the exact hash ledger for the reviewed assets. V2.6 and earlier Manifests and V0.x Gate 5 submissions remain historical and do not control current status. No history was deleted or rewritten.

