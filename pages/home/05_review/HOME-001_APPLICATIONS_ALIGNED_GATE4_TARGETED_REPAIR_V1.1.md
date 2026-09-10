# HOME-001 Applications-Aligned Gate 4 Targeted Repair V1.1

## 0. Control

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Finding | `HOME-G5-VR-01` |
| Author | `/root/home_gate4_visual` |
| Frozen predecessor | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.0` |
| Replacement candidate | `HOME-001-G4-APP-ALIGN-BUNDLE-V1.1` |
| Status | `RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK` |

This is the Gate 4 author's repair record, not an independent review, approval or Gate closure.

## 1. Change inventory

Only the static shared Global Chrome rendering changed:

1. Footer now contains the four approved legal utilities in exact order; `Cookie Settings` is a semantic button without `href`.
2. Mobile Header now follows the current 64px `Logo | RFQ | Menu` composition at every width below 1101px; the visible RFQ label is compact and does not wrap.
3. Open Mobile Menu now follows the Deep Navy shared treatment, eight-item order, Teal Home marker, terminal Teal RFQ and isolated background.
4. Desktop Header remains 84px; Footer links and Footer RFQ now use the shared 44px / 48px minimum geometry.
5. Five default full-page images and both 390px state images were recaptured as V1.1.

## 2. Preservation evidence

- The V1.0 source, freeze record and seven PNG files are unchanged. Their identities are copied into the V1.1 freeze record and checked by the V1.1 verifier.
- The exact V1.0 and V1.1 `<main>...</main>` bytes share SHA-256 `A9CC17BA5C40D943949D56820F336CFFB384A61900B11791A31549E0866DC138`.
- All nine modules retain order and visibility rules. Hero image, Start Here, five-width overflow checks, page RFQ at 768/1024/1440 only, four Product disclosures and all fourteen ordered Grade IDs are rechecked.
- Visible Home copy and href parity is rechecked against the unchanged Home JSON source.

## 3. Visual inspection

The author opened all seven V1.1 PNGs at original detail. The five full pages retain the Applications-aligned Home hierarchy without clipping, collision, abnormal whitespace or horizontal overflow. The 390px Menu shows the required Global Chrome state, and the expanded Products image retains all four groups and fourteen Grade IDs.

## 4. Reproducible author verification

| Verification | Result |
|---|---|
| Runtime identities, shared-Chrome acceptance and body-adjacent regression | `88 PASS / 0 FAIL` |
| Frozen source, seven assets, dependencies, V1.0 immutability and body preservation | `197 PASS / 0 FAIL` |
| Formal assets opened at original detail | `7 / 7` |
| V1.0 files changed | `0` |

The machine results are:

- `99_workspace/HOME-001_applications_aligned_v1_1/runtime_observations_home_visual_bundle_v1_1.json`
- `99_workspace/HOME-001_applications_aligned_v1_1/verification_home_visual_bundle_v1_1.json`

## 5. Submission boundary

The repair has no unresolved Gate 4 author Finding and is ready only for the independent Gate 5 targeted recheck:

`HOME-G5-VR-01 = RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK`

No independent-review result, Gate approval, Gate closure, production implementation, D16 modification, deployment or release is claimed.
