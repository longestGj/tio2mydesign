# APP-PLAS Current Gate Baseline Manifest V0.5

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | `APP-PLAS` / `/applications/titanium-dioxide-for-plastics/` (`PROVISIONAL_URL`) |
| Page type / language | Application landing page / EN |
| Site scope | `tio2-my` |
| Manifest date | 2026-09-07 |
| Manifest role | `UNIQUE_CURRENT_MANIFEST` |
| Lifecycle | `GATE3_PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 authorization | `CURRENT_USER_AUTHORIZED_THREE_PAGE_BATCH / IN_SCOPE` |
| Gate 3 candidate | `PREFLIGHT_PASS / FROZEN / EXECUTION_SELF_CHECK_PASS / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 3 independent review / user approval | `PASS / NOT_APPROVED / NOT_CLOSED` |
| Gate 4–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Previous Manifest | `APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md` / SHA-256 `35a08f0e639fdce57784ba414c01f981bd210ef2bda8f5c07843b90043fcd087` |

V0.5 is the single current pointer after Project Control independently reviewed the exact frozen Gate 3 V0.3 combination and passed it for user approval. V0.3 remains the approved Gate 2 rollback authority and V0.4 preserves the execution submission. Gate 3 remains open and Gate 4 remains unauthorized.

## 1. Approved upstream retained

| Role | File | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | `pages/applications/plastics/04_planning/APP-PLAS_GATE2_CONTENT_SKELETON_V0.2.md` | `370cefbd64f9146aaa5146989fad25312f7eb6ec0051c4a445ece74650365128` | `USER_APPROVED / CLOSED` |
| B — sole visible Buyer Copy | `pages/applications/plastics/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` | `8db6d6fa979831e1e5c5930bdfe3ec261bb74d252304658251a37932bbea4f92` | `USER_APPROVED / CLOSED / SOLE_VISIBLE_COPY_SOURCE` |
| C — Content Contract | `pages/applications/plastics/04_planning/APP-PLAS_GATE2_CONTENT_CONTRACT_V0.3.md` | `646cc89f7c331d22c77d1d71abf2f605c44d1cd2eb4fd633f8a0f72ded5aa204` | `USER_APPROVED / CLOSED` |
| Gate 2 approval | `docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md` | `8ed9810a96d1bde005f1d7e756995d494b13932fa386a79bbf177062997c3372` | `G2-7PAGE-APPROVAL-01 / USER_APPROVED` |

The approved 12-module order, content, actions, APP-MB boundary, eight neutral Grade relations, one/several/unknown-Grade paths, sources, SEO/GEO/Schema limits and owner boundaries remain unchanged.

## 2. Gate 3 method and shared source

| Item | Current identity |
|---|---|
| Gate 3 baseline | `docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md` |
| Standard | `PAGE_GATE_1_4_STANDARD_V2.1.md` §4.3 |
| Execution Agent | `agents/gate3-execution/agent.md` V0.3 |
| Responsive design | `skills/responsive-wireframe-design/SKILL.md` V0.3 |
| Verification | `skills/layout-interaction-verification/SKILL.md` V0.4 plus Gate 3 structure scope |
| Shared planning consumer | `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 / package SHA-256 `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50` |
| Navigation mapping | `APP-000` → Applications |
| Gate 3→4 contract | `2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md` |

`input-binding.json` records the actual input, shared package, Logo and durable font identities. The source embeds page-neutral shared output and has no page CSS/JS override of shared selectors. Shared complete behaviour is inherited only from the matching original V0.2 report; current page assembly and required menu/Cookie entry/exit were actually tested.

## 3. Frozen candidate

| Role | Path | Bytes | SHA-256 / state |
|---|---|---:|---|
| Task input card | `pages/applications/plastics/04_planning/gate3-v0.1/task-input-card.md` | 6,410 | `19882f47b3dac54d3683ebe328d6354a9b1708a43317dc4be4184f08471514ee` |
| Editable frozen source | `pages/applications/plastics/04_planning/gate3-v0.1/APP-PLAS_GATE3_WIREFRAME_V0.1.html` | 36,573 | `252bc39147933465c91ad9d506dabd8b57e99e8f9122198c9af0da0c733ec55e` |
| Input binding | `pages/applications/plastics/04_planning/gate3-v0.1/input-binding.json` | 17,587 | `6a225a56d3b34659fff49f64a4dfece158389fb2b9a8bb8300d9392ffbc2060b` |
| Hard preflight | `pages/applications/plastics/04_planning/gate3-v0.1/preflight-record.json` | 5,838 | `135b6e4837ddcbf09a4dc064c27d244610f08df6a8535db584e2cbd172491b00 / PASS_FOR_FORMAL_RENDER` |
| Freeze record | `pages/applications/plastics/04_planning/gate3-v0.1/freeze-record.json` | 2,474 | `b78ebcdef06038562f2f5d1e154ab7bba35a258533624576ace369561239116e` |
| Asset inventory | `pages/applications/plastics/04_planning/gate3-v0.1/asset-inventory.json` | 1,906 | `65f8b355f18887c5ed41185c8b62725aad65d9ef4195e487db1b859411da7d6d` |
| Design report | `pages/applications/plastics/04_planning/gate3-v0.1/design-report.md` | 4,876 | `b2f7759ead8ee15efd69712743b524e5096f3414546ba73ca5b3da40f86d8767 / CANDIDATE_REPORT` |
| Execution self-check | `pages/applications/plastics/05_review/APP-PLAS_GATE3_EXECUTION_SELF_CHECK_V0.1.md` | 5,689 | `5f3660fe91770ac1c754c0fc0db86167b60324d632cb950cf1d460740db81519 / SELF_CHECK_PASS / NOT_INDEPENDENT_REVIEW` |
| Execution submission | `pages/applications/plastics/05_review/APP-PLAS_GATE3_EXECUTION_SUBMISSION_V0.1.md` | 2,565 | `eba87fc3cef60a5b198bf01a168b7f4c141c49d2b52a8f78814115a7f7ec976e / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 3→4 handoff draft | `pages/applications/plastics/05_review/APP-PLAS_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md` | 5,259 | `2f55f67abdf39f70802a56cc11fcee83a3fdb84823aa01f5979f68a3d570e06c / DRAFT / NOT_READY_FOR_GATE4` |
| Project Control review | `pages/applications/plastics/05_review/APP-PLAS_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md` | 5,165 | `ec3997108b7f645389637e8196f02a2f1b8510511f2abf7e363951efa375eaf9 / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

Any source-byte change ends `APP-PLAS-G3-FREEZE-001` and requires a new freeze plus regeneration and recheck of affected evidence.

## 4. Approval-core formal assets

| View/state | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| 1440 full | 1440×8360 | 1,771,527 | `e3a880b5b038969688bc205b2602ed71d330913bb46a7516e9ea1306bd377d49` |
| 768 full | 768×9795 | 1,680,967 | `b9dba6d241642286458fdb677ef733a88b8ceb598606c13e4c9ba602ea8bff03` |
| 390 full | 390×14557 | 1,669,658 | `f6009e1b947a3714bcfc21ccfd6bf7f611b1c1fc3365fa42c3ff7f64935a0788` |
| 768 menu open | 768×900 | 82,589 | `00165630921e45d09ee291b3e8013da8e8b557d8cff97966eb235e968de6acfe` |
| 390 menu open | 390×900 | 50,717 | `2711b42d958d61dafc30f0bc0226ab82b1b3b01050f855afafaad27bad015190` |
| 390 Grade/action path | 390×3348 | 286,841 | `280fb2affc093a14fde5039c6e7b099d3ab1ab5283e131e7bee0c7d6240b374a` |

All six formal assets were opened after export. Diagnostic full pages, overlapping segments, the 390 Cookie state, runtime measurements and scripts remain under `diagnostic_support` and are referenced rather than duplicated into this Manifest.

## 5. Execution conclusion and review entry

- Required execution Findings: `0`.
- Fixed core invariants: all `PASS` for the frozen combination.
- APP-PLAS risks `PLAS-G3-R01` through `R07`: all `PASS` in execution self-check.
- Embedded form and media failure states: `NOT_APPLICABLE` by approved contract, with no invented state.
- Pure visual suggestion: refine section rhythm, table/card appearance and source typography in Gate 4 without changing frozen structural relationships.
- Independent Project Control review: `COMPLETE / PASS`; exact freeze and approved inputs recalculated, all six formal assets opened, shared inheritance and `PLAS-G3-R01`–`R07` independently checked, blocking Findings 0.

## 6. Authority order and stop boundary

1. Current user decisions and the exact Gate 2 approval record.
2. Approved APP-PLAS A/B/C and retained Gate 1 Brief/facts.
3. Current Gate workflow, Gate 3 standard/baseline and page-neutral shared owner contracts.
4. This V0.4 frozen candidate and its execution evidence.
5. Diagnostic support and historical files.

| Item | State |
|---|---|
| Project Control independent review | `COMPLETE / PASS` |
| Gate 3 user approval / closure | `NOT_APPROVED / NOT_CLOSED` |
| Gate 3→4 handoff | `DRAFT / NOT_READY_FOR_GATE4` |
| Production route/receiver/CMS/real-device/screen-reader checks | Later owner / Gate 8 or 9 |
| Gate 4–10 / development / publication | `NOT_AUTHORIZED / NOT_STARTED` |

This candidate stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`. Project Control PASS does not approve or close Gate 3. No file in `D:\16Wordpress_nextjs` was accessed or modified.

## 7. Version record

| Version | Date | Meaning |
|---|---|---|
| V0.3 | 2026-09-07 | User-approved Gate 2 A/B/C combination; Gate 2 closed |
| V0.4 | 2026-09-07 | Frozen Gate 3 V0.3 execution candidate submitted for independent Project Control review; Gate 3 remains open |
| V0.5 | 2026-09-07 | Project Control independently passed the exact frozen combination; user approval and closure remain pending |
