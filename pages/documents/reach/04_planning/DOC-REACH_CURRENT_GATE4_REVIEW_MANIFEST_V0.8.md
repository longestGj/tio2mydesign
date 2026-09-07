# DOC-REACH Current Gate 4 Review Manifest V0.8

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Page type | Regulatory document decision page |
| Version / date | V0.8 / 2026-09-05 |
| Supersedes | `DOC-REACH_CURRENT_GATE3_APPROVED_MANIFEST_V0.7.md` as the current-stage pointer; Gate 3 approval remains valid |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Gate 1–3 | `USER_APPROVED / CLOSED` |
| Gate 4 direction | `A / REGULATORY EVIDENCE LEDGER` |
| Gate 4 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 5–10 | `NOT_AUTHORIZED` |
| Current Review ID | `DOC-REACH-G4-PCR-01` |

This is the sole current DOC-REACH stage pointer. The user selected Direction A, and project control completed and passed its review package. Direction selection is not treated as Gate 4 closure; Gate 4 remains pending user approval.

## 1. Authority order

1. User direction selection `A`.
2. `DOC-REACH_GATE4_DIRECTION_A_SELECTION_RECORD_V0.1.md`.
3. This Manifest.
4. Gate 4 visual direction, validation, five raster assets and project-control submission.
5. Approved Gate 3 Manifest V0.7 and its complete responsive baseline.
6. Approved Gate 2 Full Buyer Clean Copy V0.1.
7. Gate 1 evidence package and shared project authorities.

## 2. Authoritative review package

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Approved upstream | `pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE3_APPROVED_MANIFEST_V0.7.md` | 4033 | `656536F7D0AA9BEF44CBE8BC75B65B1ACB243933C98C08A2E9405BC1CD865801` | `USER_APPROVED / CLOSED` |
| Direction selection | `pages/documents/reach/05_review/DOC-REACH_GATE4_DIRECTION_A_SELECTION_RECORD_V0.1.md` | 1239 | `7E70CB663C52F723108FAD5ED1820BB381FB9D4B675854D536D52EAD97E171A1` | `USER_SELECTED` |
| Visual direction | `pages/documents/reach/04_planning/gate4/DOC-REACH_GATE4_VISUAL_DIRECTION_A_V0.1.md` | 6034 | `4673B04795882B758AE4A84CAA8819582EA856EDC60F9D027AF5F2AE84A63570` | `PASS_PENDING_USER_APPROVAL` |
| Validation | `pages/documents/reach/04_planning/gate4/DOC-REACH_GATE4_VALIDATION_V0.1.md` | 4329 | `1AA4A72451580CA8EDB06E7CB6CEE0561E7149B9C402BD8AE9085234061A8C6E` | `PASS` |
| Project-control submission | `pages/documents/reach/05_review/DOC-REACH_GATE4_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3358 | `EF07ECAA71B1E1259F9C7394F5D81B8C80FB5EB4025026F1474C17595855A3B3` | `PASS_PENDING_USER_APPROVAL` |

## 3. Formal raster assets

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `gate4/assets/DOC-REACH_G4_DIRECTION_A_DESKTOP_1440_V0.1.png` | `1440×7591` | `13EDB73116AE11395BC68BD8AD3B4EA39E93D4B0ECB23554A345EFE3B5FC6117` |
| `gate4/assets/DOC-REACH_G4_DIRECTION_A_TABLET_768_V0.1.png` | `768×9981` | `257C4798BB1B2C82B945B0F376D51B1EC4029523428A11E95D50975AA6D64AE8` |
| `gate4/assets/DOC-REACH_G4_DIRECTION_A_MOBILE_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×26404` | `173EA48454E6B39E1E4F67334D7178A72287D3D383702DB0CA43E61A90DB4B64` |
| `gate4/assets/DOC-REACH_G4_DIRECTION_A_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×26404` | `20EB4010A8DE917E69234841E47601A79D8523734D1B347CD022B303F14764B6` |
| `gate4/assets/DOC-REACH_G4_DIRECTION_A_KEY_STATES_V0.1.png` | `1440×1000` | `BF4D9DB3AA78A00AEFEBCEEA7B6DFA69B850D759CDA2BAA5C58D7A47AFD5ED6F` |

## 4. Source and Superdesign parity

| Item | Value |
|---|---|
| Local candidate | `99_workspace/DOC-REACH/gate4/DOC-REACH_GATE4_DIRECTION_A_V0.1.html` |
| Local SHA-256 | `345664FB28EC3DD0B14EB2109FED5BF41D90F252C061A19D3B93716F13AAEA59` |
| Server-fetched copy | `.superdesign/tmp/doc-reach-gate4-direction-a-v0.1.html` |
| Server-fetched SHA-256 | `345664FB28EC3DD0B14EB2109FED5BF41D90F252C061A19D3B93716F13AAEA59` |
| Project | `ab00e0d4-ad19-44d1-8825-84dc020f3cb3` |
| Approved Gate 3 baseline draft | `b00e6533-fd00-4749-938e-7c604c653f71` |
| Active Gate 4 draft | `02c20623-7f87-4edf-b87e-24ef2137d028` / `v1` |
| Resume target | `/documents/reach/` in `.superdesign/resume.json` |

## 5. Review result

`DOC-REACH-G4-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

Validation result is `PASS` with P0/P1/P2=`0/0/0`. The user-selected direction is ready for a Gate 4 decision.

## 6. Frozen boundaries

- Gate 2 Buyer Clean copy and Gate 3 module order remain authoritative.
- Global Chrome remains owned by Home / Global Chrome V0.5.
- Exact production Logo assets remain in use.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` remains unchanged.
- Official-source date and route/form/Schema dependencies remain later release checks.
- No implementation, D16 modification, deployment, publication, DNS or indexing action is included.

## 7. Gate authority

| Item | State |
|---|---|
| Direction A production | `COMPLETE` |
| Gate 4 project-control review | `PASS` |
| Gate 4 user approval | `PENDING USER DECISION` |
| Gate 5–10 | `NOT_AUTHORIZED` |
| D16 development / deployment / publication | `OUT_OF_SCOPE / NOT_AUTHORIZED` |
