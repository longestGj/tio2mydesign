# MARKET-EU-IT Gate 4 Project Control Review V0.1

Date: 2026-09-07. Decision ID: `IT-G4-PC-20260907-01`.

Status: **`PROJECT_CONTROL_REVIEW_FINDING_OPEN`**. Required Finding: **1**. Gate 4 remains open.

## Decision

Project Control does not close workset `IT-G4-COMPLETE-20260907-01` at freeze `IT-G4-FREEZE-20260907-01`. Execution, independent review and controller roles are separated; the independent report states `PROJECT_CONTROL_REVIEW_PASS` with Required Finding 0; all recalculated file byte/SHA identities match. A controller-level recomputation found that the frozen evidence index does not meet the current Gate 4 physical-asset identity contract. Required Finding `IT-G4-PC-R01` must be repaired and independently re-reviewed before `G346-DELEGATED-CLOSURE-20260907` can be used to approve and close this Gate.

No approval, closure or Gate 4→6 handoff is created. Current Manifest V0.9 remains the authority for the open Gate 4 submission.

## Recomputed identities and role separation

| Object | Recomputed result |
|---|---|
| Candidate source | 28,199 bytes / `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615` |
| Input index | 11,197 bytes / `91b5500232b45cd275548ed00b59544240999fcac15432c5cd18c74d8ea75eb9` |
| Workset | 1,750 bytes / `ffbd469edbab464eecfd4857b0b95713fd5100007bc9f873fa1a4c1e159e91e9` |
| Freeze | 4,106 bytes / `46f9177205856a282c58288754e3a893495971432b7ca96a1c25942bd2d14a64` |
| Executor evidence index | 33,541 bytes / `133b34f47946b0061ae0977854e1b1ec479c2e1dad4a5c09ae9f44f8bed86b82` |
| Independent review | 7,234 bytes / `09115c3897c1d5aa83907c0de7ba86bf769620ccb134697e29ec0f8dc9478cad` |
| Independent evidence index | 25,717 bytes / `9908e6ce8b3c20d88f78f74e5885fc3c447314c40eabb90cb6d7d25ef512c4ab` |

The controller audit recalculated:

- frozen inputs: `51/51 MATCH`;
- freeze components: `11/11 MATCH`;
- executor evidence top pointers: `3/3 MATCH`;
- executor images by bytes/SHA: `56/56 MATCH`;
- independent-review records: `8/8 MATCH`;
- independent rerender images: `52/52 MATCH`;
- independent contact sheets: `27/27 MATCH`.

The executor completed and froze the page. Reviewer `IT-G4-INDEPENDENT-REVIEW-20260907-01` states that the reviewer did not participate in Italy Gate 4 production. This controller did not produce or independently review the Italy candidate. The three roles are distinct.

## Required Finding IT-G4-PC-R01

**Level:** P1 / REQUIRED — frozen evidence identity integrity.

**Location:** `pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json`, within `images`.

**Expected:** every Gate 4 visual asset identity records its logical width, actual physical width and height, DPR, state, bytes and SHA-256. `physical_height` must equal the PNG pixel height rather than the pre-rounding CSS clip height.

**Observed:**

1. `diagnostic_support/direction-samples/1440-direction-risk.png` declares `physical_height: 436.625`, while direct PNG metadata is `1440×436`.
2. All 18 Request Documents and Federchimica normal/hover/focus records omit `physical_width`, `physical_height` and `dpr`. Direct PNG metadata is:

| Logical width | Request Documents N/H/F | Federchimica N/H/F |
|---:|---:|---:|
| 1440 | `980×120` | `1156×120` |
| 768 | `724×120` | `700×120` |
| 390 | `370×120` | `346×120` |

The other 37 image records that declare physical dimensions and DPR match direct PNG metadata exactly. The 56 image byte/SHA identities themselves remain exact, so this Finding concerns the frozen ledger rather than the visible page.

**Impact:** the sole evidence index is incomplete and contains one false physical-size claim. Project Control cannot certify an exact frozen evidence package or record `APPROVED / CLOSED` under the standing authority while that mismatch remains.

**Exact repair:**

1. Record the 1440 direction sample as `physical_width: 1440`, `physical_height: 436`, `dpr: 1`.
2. Add the physical dimensions shown above and `dpr: 1` to all 18 state-image records.
3. Correct the producing runtime/finalization logic so it records actual PNG metadata after capture, then regenerate the affected runtime/evidence records and all dependent byte/SHA pointers.
4. Issue a new freeze identity. The HTML and PNG bytes may be reused only if their recomputed identities remain unchanged.
5. Have a reviewer independent of the executor close `IT-G4-PC-R01` against the new freeze. If any source or PNG bytes change, repeat the affected visual/runtime regression as well as the identity check.

**Re-review acceptance condition:** all frozen inputs and bindings match; all 56 executor images have complete physical dimension and DPR fields; all declared dimensions equal direct PNG metadata; the new evidence and freeze identities are internally consistent; the independent re-review explicitly closes `IT-G4-PC-R01` and reports Required Finding 0.

Machine evidence: `pages/markets/italy/05_review/gate4-project-control-v0.1/identity-audit.json`.

## Accepted substantive scope and remaining boundary

The independent report remains valid evidence for the visual and runtime scope it actually checked: 56/56 executor images and 52/52 independent images were inspected; 35/35 independent runtime checks passed; seven modules, exact Buyer Clean B/link order, COO limitation adjacency, neutral Grade route, Italy destination fields, EU-owner exit, Documents/Sample/RFQ contexts, shared Chrome, Menu/Cookie, focus/hover, 44 px controls, overflow and clipping passed.

Later production routes and receivers, real devices, other browser engines, native zoom, screen-reader speech, live consent persistence, development, deployment and publication remain assigned to later stages. They do not replace `IT-G4-PC-R01` and are not started here.

`approval_basis=USER_STANDING_AUTHORITY` is available only after the required Finding is closed. This record does not claim page-specific user review, does not create an approval/closure record, does not advance the Manifest, and does not authorize or start Gate 6.
