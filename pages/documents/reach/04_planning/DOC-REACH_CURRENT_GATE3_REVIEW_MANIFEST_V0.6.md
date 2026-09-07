# DOC-REACH Current Gate 3 Review Manifest V0.6

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Page type | Regulatory document decision page |
| Version / date | V0.6 / 2026-09-05 |
| Supersedes | `DOC-REACH_CURRENT_GATE2_APPROVED_MANIFEST_V0.5.md` as the page-level current pointer |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Gate 1 | `USER_APPROVED / CLOSED` |
| Gate 2 | `USER_APPROVED / CLOSED` |
| Gate 3 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| Current Review ID | `DOC-REACH-G3-PCR-01` |

This is the sole current DOC-REACH page pointer. It submits the complete Gate 3 responsive wireframe package for user approval; it does not close Gate 3.

## 1. Authority order

1. User Gate 2 approval and Gate 3 authorization recorded in the current Controller conversation.
2. This Manifest.
3. `DOC-REACH_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md`.
4. `DOC-REACH_GATE3_WIREFRAME_SPECIFICATION_V0.1.md` and its five raster assets.
5. `DOC-REACH_GATE3_VALIDATION_V0.1.md`.
6. Approved `DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.
7. Approved Gate 2 Skeleton and Gate 1 evidence package.
8. Shared Documents playbook, Global Chrome, Footer addendum and production Logo authorities.

## 2. Approved upstream

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Gate 2 Full Buyer Clean | `pages/documents/reach/04_planning/DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | 14612 | `CD18BA997EFE53BB5589F76D36453E62DFF6BE61A255D3224AB1D264624E8DCE` | `USER_APPROVED / CLOSED` |
| Gate 2 approval closure | `pages/documents/reach/05_review/DOC-REACH_GATE2_FULL_COPY_APPROVAL_AND_GATE3_ACTIVATION_V0.1.md` | 3057 | `A556A5946BEFA9406611BD0EEE601FDA2B1D7EB9E3DBC6C07971DC3DBB612C1C` | `USER_APPROVED / CLOSED` |
| Gate 2 approved pointer | `pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_APPROVED_MANIFEST_V0.5.md` | 2943 | `5458BF08B8083F7E394C7499B9C5C2F90525319C488495EE3990E9CFAD53FEDD` | `APPROVED UPSTREAM / SUPERSEDED AS PAGE POINTER` |

## 3. Gate 3 candidate documents

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Responsive wireframe specification | `pages/documents/reach/04_planning/gate3/DOC-REACH_GATE3_WIREFRAME_SPECIFICATION_V0.1.md` | 5853 | `BEB95CB09C62907FEED37303636AFDAF2CD5379C249EBE09B502833172A11B83` | `PROJECT_CONTROL PASS / PENDING USER APPROVAL` |
| Validation | `pages/documents/reach/04_planning/gate3/DOC-REACH_GATE3_VALIDATION_V0.1.md` | 3218 | `5C615658047686BA73FDCC7BA4EE1479586204C7AFC3265B6971C7E74317E1DB` | `PASS / NO P0 OR P1` |
| Project-control submission | `pages/documents/reach/05_review/DOC-REACH_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 4359 | `DD8D245465939BA7BD7A922B39E4A9D3874CBB699067A5A6A9D2E4401087C350` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

## 4. Raster assets

| Asset | Logical / physical size | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `pages/documents/reach/04_planning/gate3/assets/DOC-REACH_G3_DESKTOP_1440_WIREFRAME_V0.1.png` | 1440 × 7458 | 625294 | `CA6E463887727AEB730109E3981D23EECD7D3F9B20C518B12188DB27CB0309D8` | `PENDING USER APPROVAL` |
| `pages/documents/reach/04_planning/gate3/assets/DOC-REACH_G3_TABLET_768_WIREFRAME_V0.1.png` | 768 × 9607 | 566629 | `47CA2F2A2885113855BF9169B7975BD66E684CB9FDB64EAB1892B9B97DB4FDA6` | Same |
| `pages/documents/reach/04_planning/gate3/assets/DOC-REACH_G3_MOBILE_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 390 logical @2x / 780 × 25106 | 3383461 | `E26C6710AEDD67F1ACC9A877DE70C313D113AFA84F922C742F1B48806CF83993` | Same |
| `pages/documents/reach/04_planning/gate3/assets/DOC-REACH_G3_MOBILE_MENU_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 390 logical @2x / 780 × 25106 | 172702 | `6A8C87370850AC3B6D978A87915252A35E686109D107F85409B9DE587DA98E8F` | Same |
| `pages/documents/reach/04_planning/gate3/assets/DOC-REACH_G3_KEY_STATES_V0.1.png` | 1440 × 1000 | 60985 | `4708E106E3A5906D6FABC83CA64E2BDA54690FDB0AB95AB034BF68C6C5B95DFE` | Same |

## 5. Reproducible sources

| Role | Path | Bytes | SHA-256 |
|---|---|---:|---|
| Responsive HTML | `99_workspace/DOC-REACH/gate3/DOC-REACH_GATE3_WIREFRAME_V0.1.html` | 32693 | `9AE67E19F05072C6725251876B760C79444AF2DD11E6F46CD715637E721A14E0` |
| Structural/browser test | `99_workspace/DOC-REACH/gate3/test-doc-reach-gate3.mjs` | 4838 | `5DC80869119EC8577E9AEE2E5A5B20D98EF59E66E90EE695781F99400C2B79DE` |
| Renderer | `99_workspace/DOC-REACH/gate3/render-doc-reach-gate3.mjs` | 2086 | `86E6347D56D44D90A8FEAE0DE04D2780975628710E70177BC3A89C9D7A1B9E2C` |

## 6. Superdesign record

| Item | Value |
|---|---|
| Project ID | `ab00e0d4-ad19-44d1-8825-84dc020f3cb3` |
| Project URL | `https://superdesign.dev/teams/748bead0-f9b5-4101-ae48-150238cc276b/projects/ab00e0d4-ad19-44d1-8825-84dc020f3cb3` |
| Selected generation model | `gpt-5.6-terra` |
| AI generation | `BLOCKED BEFORE CREATION / OUT OF CREDITS` |
| Deterministic fallback import | `PASS` |
| Active draft ID | `b00e6533-fd00-4749-938e-7c604c653f71` |
| Preview URL | `https://p.superdesign.dev/draft/b00e6533-fd00-4749-938e-7c604c653f71` |
| Draft version | 1 |
| Production Logo postcondition | `PASS` |
| Resume target | `/documents/reach/` |

## 7. Gate authority

| Item | State |
|---|---|
| Gate 3 package | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 3 closure | `NOT YET AUTHORIZED` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| D16 development / deployment / publication | `OUT_OF_SCOPE / NOT_AUTHORIZED` |

