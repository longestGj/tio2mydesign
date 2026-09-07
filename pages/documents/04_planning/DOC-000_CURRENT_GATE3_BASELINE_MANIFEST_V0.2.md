# DOC-000 Current Gate 2/3 Reader Rework Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Rework ID | `DOC-000-G2-G3-READER-COPY-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Trigger | User-approved project-control directed reader rework |
| Previous Gate 3 | `DOC-000-G3-V11-WF-01 = REVISION_REQUIRED / SUPERSEDED_BY_USER_DIRECTED_READER_REWORK` |
| Gate 1 | Retained; not reopened |
| Gate 4 authorization | `NO` |
| Manifest date | 2026-09-01 |

This V0.2 Manifest is the sole current DOC-000 Gate 1–5 candidate package root. V0.1 and its payload remain preserved as historical/superseded. Project control passed V0.2 pending explicit user confirmation; V0.2 is not user-approved or closed.

## 1. Current payload

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Reader-focused Content Architecture | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.7.md` | 9839 | `9EE32E8D15DC07DCBC16963173F4DAA0FEE20F3799311167B15F0666BAB6CD7F` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| SEO/GEO/Schema impact contract | `pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.6.md` | 4751 | `2374A673C5335C5AE75EFFCFAD6AF4BF92111F782C5DB9C72FD178B022318364` | Same |
| Gate 3 Wireframe Specification | `pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.5.md` | 5309 | `BC8E029F00433ED6C377464EA419C047406590F932231B0D6781713CC05A28BA` | Same |
| Visual/copy Change Impact | `pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_CHANGE_IMPACT_V0.1.md` | 3476 | `D024A4F841D5D6FD22FF6FCF64D4A7E1258F7C0F3F3988C731AB2049457BD499` | Same |
| Validation record | `pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_VALIDATION_V0.1.md` | 3357 | `66121B3F78ACE762502AB7147CA76998E4C0E240DE397DBD2DD74E34F3F51B58` | Same |
| Project-control submission | `pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3012 | `92ECB13DD2728A4D69D5D918554D9720EBEA210B9EA9C164BDB8C4ED1069C1E7` | Same |
| Desktop 1440 grayscale asset | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_DESKTOP_1440_READER_WIREFRAME_V0.1.png` | 285244 | `32377EF7C00467BC20DEACF9D1350ED686C99439377A87000421B8DAF6B6542D` | Same |
| Tablet 768 grayscale asset | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_TABLET_768_READER_WIREFRAME_V0.1.png` | 287918 | `E4FD1C8BE942EB29FB5A5E45898867B4824238B5A16C0472137433888C0EE70F` | Same |
| Mobile 390 logical @2x grayscale asset | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png` | 860461 | `E3EA8889A97286E2D11F8C8B82D1F0FCB202D88AFC3EB4B904E2F9ADE410F4F6` | Same |
| Mobile Menu 390 logical @2x grayscale asset | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_MENU_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png` | 43939 | `F20ED9275D8BD6739B8A73E03FEB96B90DB897200B06839CAC3FD48B0752E7A8` | Same |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 2. Reader-focused copy lock candidate

- H1 remains `Documents for Product & Supplier Qualification`.
- Hero body names technical, safety, quality, COA, origin and supplier-qualification documentation for the evaluated Grade.
- Three steps now map review need → Grade → multi-document request submission.
- Three scenario and four category descriptions state their practical evaluation/purchasing use.
- Selector copy explains prefill and editability.
- Why on Request is one continuous full-width paragraph with the sole availability/scope sentence.
- Six FAQs answer types, Grade need, multi-select, editable prefill, request rationale and language.
- Closing CTA explains Grade carry-forward and document-type selection.

## 3. Gate 3 structural lock candidate

- Desktop 1440: approximately 1200px work area; Hero copy/action left and formal media/crop region right.
- How It Works: lightweight numbered line, not cards.
- Scenarios: exactly three cards; categories: readable 2 × 2.
- Selector: true two-column explanation/field structure.
- Request explanation: full-width information band.
- FAQ: full-width accordion, default collapsed with one expanded proof.
- Closing: compact horizontal band; Mobile reflows to one column.
- Tablet 768 and Mobile 390 are complete, use real copy and omit no approved module.
- Mobile Menu open consumes shared order/current-state/RFQ rules.

## 4. Validation snapshot

| Check | Result |
|---|---|
| Four required raster assets | PASS |
| Asset widths | `1440 / 768 / 780@2x / 780@2x` |
| Horizontal overflow | None at 1440/768/390/Menu 390 |
| Minimum primary target | Desktop `46.84px`; Tablet/Mobile/Menu `44px` |
| Structural counts | `3 scenarios / 4 categories / 6 FAQ` |
| Mobile current menu links | `1` |
| Payload hash freeze | `10 files / 10 hashes recorded` |

## 5. Frozen boundaries

| Boundary | State |
|---|---|
| Page ID/URL/type/keyword | Unchanged |
| Four categories / 14 Grades | Unchanged |
| Grade-only handoff; editable receiver | Unchanged |
| No Finder, inventory, file result, download or fifth category | Enforced |
| No universal applicability, availability, approval or timing promise | Enforced |
| Global Chrome, persistent RFQ and legal controls | Inherited |
| PRODUCT V0.3 and evidence rules | Unchanged |
| Gate 4/5, child pages and development | Not authorized |

## 6. Authority matrix

| Gate / package | Status |
|---|---|
| Gate 0 | Retained |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; not reopened |
| Gate 2 COPY-02 V0.6/V0.5 | `HISTORICAL_APPROVED_INPUT / TARGETED_REWORK_SUPERSEDED_AS_CURRENT` |
| Gate 3 WF-01 V0.1 package | `REVISION_REQUIRED / SUPERSEDED_BY_USER_DIRECTED_READER_REWORK` |
| Current Gate 2/3 rework | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 6+ | `NOT_AUTHORIZED` |

## 7. Open items

| ID | Item | State |
|---|---|---|
| DOC-RW-O01 | Project-control copy review | `PASS` |
| DOC-RW-O02 | Project-control responsive asset review | `PASS` |
| DOC-RW-O03 | User confirmation after project-control disposition | Awaiting explicit confirmation |
| DOC-RW-O04 | Final media asset/fact review | Not part of Gate 3 |
| DOC-RW-O05 | Gate 4 authorization | Not authorized |

## 8. Stop condition

This package is `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED`. It is not user-approved or closed and does not authorize Gate 4/5, child Document pages, development, D16 access, code, testing, deployment, publication, DNS or indexing.
