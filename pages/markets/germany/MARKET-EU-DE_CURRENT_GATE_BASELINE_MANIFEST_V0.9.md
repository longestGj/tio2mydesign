# MARKET-EU-DE Current Gate Baseline Manifest V0.9

## 0. Current state

| Field | Value |
|---|---|
| Page ID / URL | `MARKET-EU-DE` / `/markets/germany/` |
| Page type / language / scope | Market procurement landing page / EN / `tio2-my` |
| Manifest date | 2026-09-07 |
| Lifecycle | `GATE4_APPROVED_CLOSED` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 | `DE-G3-APPROVAL-01 / USER_APPROVED / CLOSED` |
| Gate 4 authorization | `USER_AUTHORIZED / G4-13PAGE-BATCH4-01` |
| Gate 4 execution | `4A CHECKED / 4B COMPLETE / FROZEN / EXECUTION_SELF_CHECK_PASS` |
| Gate 4 independent review | `PROJECT_CONTROL_REVIEW_PASS / REQUIRED_FINDING_0` |
| Gate 4 project-control review | `DE-G4-PC-20260907-01 / PROJECT_CONTROL_REVIEW_PASS` |
| Gate 4 approval and closure | `DE-G4-CLOSURE-20260907-01 / APPROVED / CLOSED` |
| Approval basis | `USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907` |
| Per-page user review | `NOT_REQUIRED_BY_STANDING_AUTHORITY` |
| Gate 4→6 | `READY_FOR_GATE6_WHEN_AUTHORIZED` |
| Gate 6–10 / development / release | `NOT_STARTED / NOT_AUTHORIZED` |
| Previous current Manifest | `MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` / `4f7bbbd0630dc7887cec21b7a5f269f8db09cd5a953ad4e726e23af954f964bd` |

V0.9 is the single current Germany pointer. It closes only the exact Gate 4 combination below under the active standing authority. It does not claim that the user personally reviewed this page and does not start Gate 6, development, deployment or publication.

## 1. Authority and approved upstream

The approval basis is `USER_STANDING_AUTHORITY` from `docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md`, decision `G346-DELEGATED-CLOSURE-20260907`. Gate 4 execution was separately authorized for Germany in batch `G4-13PAGE-BATCH4-01` and bound by `04_planning/gate4-v0.1/EXECUTION_AUTHORIZATION_AND_SCOPE_V0.1.md`.

| Role | Current file | SHA-256 | State |
|---|---|---|---|
| A — Content Skeleton | `04_planning/MARKET-EU-DE_GATE2_CONTENT_SKELETON_V0.1.md` | `f42dc446fbe95be7728d55580fc4e5bc4b7e2c6a19e915ae81b32631e33579d0` | `USER_APPROVED / CLOSED` |
| B — sole visible Buyer Copy | `04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `f95f338b4b966d48e0a10c0ad81b6fd7ffd21e552cee780bc9597d2e67b6c4d8` | `SOLE_VISIBLE_COPY_SOURCE / USER_APPROVED / CLOSED` |
| C — stable content contract | `04_planning/MARKET-EU-DE_GATE2_CONTENT_CONTRACT_V0.2.md` | `a2a5d629258e1d24aff03d6a3b3a24f194d89c5c6c1f5e6b68bb8eaef5faa187` | `USER_APPROVED / CLOSED` |
| Gate 3 frozen source | `04_planning/gate3-v0.1/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html` | `355efe81188bc486825a2c97532fc63abb5912b089eab9671f930135449ab380` | `USER_APPROVED / CLOSED` |
| Gate 3→4 handoff | `05_review/MARKET-EU-DE_GATE3_TO_GATE4_HANDOFF_V0.1.md` | `debc00c8cfa96c146229292aaa4e2672e12b9a62d1c342402a797427faf3d58e` | consumed by Gate 4 |

The approved URL, primary keyword, seven modules, complete B, link order, source predicates, Grade neutrality, Germany destination/RFQ boundary and shared-owner exits are unchanged.

## 2. Approved Gate 4 combination

| Object | Path | Bytes | SHA-256 / state |
|---|---|---:|---|
| Workset | `04_planning/gate4-v0.1/workset.json` | 2,353 | `2987fc9d0f08cbb3007ae91d048883d8dbb11581c4b1206b755122cf345e0914` / `DE-G4-COMPLETE-20260907-01` |
| Complete visual source | `04_planning/gate4-v0.1/MARKET-EU-DE_GATE4_COMPLETE_VISUAL_V0.1.html` | 23,813 | `9f729196ea8135b7daa9aa83cc8e43768eafa27a35792605de67d125e0eccdbc` |
| Visual stylesheet | `04_planning/gate4-v0.1/visual-direction.css` | 3,977 | `d5723d30d33b265beb60d8afe5394621eb5c1ada23d2a89f56ad0d4d7f21b10d` |
| Source freeze | `04_planning/gate4-v0.1/approval_core/source-freeze.json` | 16,224 | `46c4f2dbc289861f9910b2cf27dc8ea5dc2ff8c6305a6ccfaf2512211fa4370c` / `DE-G4-COMPLETE-20260907-01-F01` |
| Formal runtime | `04_planning/gate4-v0.1/diagnostic_support/formal-r1-checks.json` | 216,406 | `4bd8bf564b612b08f9edeb2633c8b60b54b8bcbf828629ef43c834a44cbc30b5` / 237 passed, 0 failed |
| Evidence index | `04_planning/gate4-v0.1/evidence_index.json` | 45,754 | `dfffa0bb0e295837a27ec8405fcfdf3294e51b90bafae2bd18c8b7b37b5583c3` / 51 images |
| Execution self-check | `05_review/MARKET-EU-DE_GATE4_EXECUTION_SELF_CHECK_V0.1.md` | 2,958 | `b5357eb0ee3e0724489135dff2d8f07c1dd71f6d5f26d5157984a6408c8bc674` / Finding 0 |
| Independent review | `05_review/gate4-complete-independent-v0.1/MARKET-EU-DE_GATE4_INDEPENDENT_REVIEW_V0.1.md` | 5,528 | `22aa8598d9e246fcc57b5e63fcb4ae0c636063aeffe8838217cfc5b82cdd4975` / `PROJECT_CONTROL_REVIEW_PASS` |
| Project-control audit | `05_review/gate4-project-control-v0.1/identity-and-closure-audit.json` | 7,506 | `c76d65703746de5619e351e61450657510b24f1f290064385b471b67adeee2c4` |
| Project-control review | `05_review/MARKET-EU-DE_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md` | 4,149 | `f560d12ec445c664e0d706a8f2e85bcd8f49301553ce2c36881ce910a5937c7f` / `PROJECT_CONTROL_REVIEW_PASS` |
| Approval and closure | `05_review/MARKET-EU-DE_GATE4_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md` | 3,301 | `845b37c8ff07f7a1ba7837a3847a984c39ef52a19a434b2c690064586312a8aa` / `APPROVED / CLOSED` |

The submission-time `MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.9_DRAFT.md` remains historical evidence of the executor stop state. Its pending independent-review wording and `REVIEW.md` placeholder do not override the completed named independent report or this current Manifest.

## 3. Evidence, review and role separation

- Formal execution: 237/237 checks and 42 formal assets.
- Indexed visual evidence: 51/51 identities and dimensions exact; six complete pages, 25 continuous readable segments, six 4A samples, two Menu states, three Cookie states, six focus states and three hover states.
- Independent execution: 154/154 checks; 42 rerendered artifacts; three full pages pixel-exact to the formal 1440/768/390 pages.
- Evidence bindings: 22/22 exact.
- Required Finding: 0. Advisory Finding: 0.

The executor, independent reviewer and closing project controller are separate roles. The executor did not self-review or close. The independent reviewer did not create the candidate. Closing controller `/root/gate4_nl_control` did not create or independently review the Germany candidate.

The freeze contains 68 path identities. Sixty-seven current paths remain exact; the one mutable root Index path changed only in unrelated Poland Gate 9, Applications article-research and Gate 9 Agent/method navigation rows. Its frozen snapshot is exact; the live Index observed by the controller is preserved as `05_review/gate4-project-control-v0.1/01_PROJECT_INDEX.controller-snapshot.md` (22,311 bytes / `211d327518da32709dde51101d34f73193218c4c324c97eb7ee5d371f33b3cc2`). No Germany authority, content, method, shared contract, source, dependency or evidence identity changed.

## 4. Approved scope and retained boundaries

The approved visual preserves DE-01 through DE-07, the Coatings/Plastics/Masterbatch peer relationship, the separate destination and port/handover concepts, five request inputs, EU owner handoffs, RFQ context, source predicates and shared Global Chrome/Logo/CTA/legal/consent contracts. It adds no Grade ranking, Germany office/warehouse/inventory promise, duty/tax/customs result, route promise or delivery claim.

Later-owner items remain open without blocking Gate 4:

- EU Trade Update production route, content and freshness.
- RFQ, Documents and Sample production receivers, editable context and persistence.
- CMS/API/Schema and `site_scope=tio2-my` implementation isolation.
- Real devices, native zoom, other engines and assistive technology.
- Gate 6 cross-contract review, unique handoff and executable Gate 9 acceptance criteria when Gate 6 is authorized.

## 5. Handoff and stop boundary

`05_review/MARKET-EU-DE_GATE4_TO_GATE6_HANDOFF_V0.1.md` is the concise navigation entry. Status is `READY_FOR_GATE6_WHEN_AUTHORIZED`; Gate 6 remains `NOT_STARTED / NOT_AUTHORIZED`.

This Manifest does not authorize Gate 6, external handoff, development, deployment, publication, DNS or indexing. A change to the approved candidate, stylesheet, dependencies, approved A/B/C, shared contracts or evidence identities invalidates this Gate 4 review and requires affected re-freeze and independent re-review.

## 6. Version record

| Version | Date | Meaning |
|---|---|---|
| V0.8 | 2026-09-07 | Gate 3 user-approved/closed combination; Gate 3→4 ready when authorized |
| V0.9_DRAFT | 2026-09-07 | Gate 4 execution and freeze submission; independent review and controller closure pending |
| V0.9 | 2026-09-07 | Exact Gate 4 freeze independently reviewed and closed by Project Control under `USER_STANDING_AUTHORITY`; Gate 6 remains unauthorized |
