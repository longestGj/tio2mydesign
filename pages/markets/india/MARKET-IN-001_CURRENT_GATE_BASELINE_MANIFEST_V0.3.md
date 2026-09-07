# MARKET-IN-001 Current Gate Baseline Manifest V0.3

## Current state

| Field | Value |
|---|---|
| Page / URL | `MARKET-IN-001` / `/markets/india/` |
| Type / language | Market procurement landing page / EN |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 batch authority | `USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH` |
| Gate 2 Skeleton | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| Gate 2 Full Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Gate 2 | `OPEN / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Manifest status | `CURRENT_GATE2_WORKING_MANIFEST` |
| Previous current pointer | `D:\23MySec\pages\markets\india\MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |

The serial-batch authority permits Full Copy to be produced without a separate page-level Skeleton user stop. It does not make the Skeleton user-approved and does not approve or close Gate 2.

## Current authority combination

| Role | File | SHA-256 | State |
|---|---|---|---|
| Approved Gate 1 baseline | `D:\23MySec\pages\markets\india\MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` | `0F74BA969648F4A5BC587D4C57C0EEBCE55E76637E799F4FBDA8307DB14323E5` | `APPROVED / CLOSED` |
| A — Content Skeleton | `D:\23MySec\pages\markets\india\04_planning\MARKET-IN-001_GATE2_CONTENT_SKELETON_V0.1.md` | `0346FB09BBB4B90DE4DC1AF89C2FB6AACB0B005885FA731641A90C8E006E4EC9` | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\markets\india\04_planning\MARKET-IN-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | `67B1C21FC2E209B4E40F28CCD3F7794EB9A33FCD84C3305A16438EC4DE74CEB0` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| C — stable content contract | `D:\23MySec\pages\markets\india\04_planning\MARKET-IN-001_GATE2_CONTENT_CONTRACT_V0.2.md` | `7C9BD74686E5B6672428CF20F8D83826E4739B3927B9F393AA3464208A53E5B7` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Execution and Buyer cold read | `D:\23MySec\pages\markets\india\05_review\MARKET-IN-001_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `4A0438F0839DA4094969B5C2D4F25176DFDF27AFB1B88F25696EAA0289E3E848` | `EXECUTION_SELF_CHECK_COMPLETE` |
| Independent Buyer Review | `D:\23MySec\pages\markets\india\05_review\MARKET-IN-001_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `79A8D8162A52D72335444E7CE53B800A4BC63D1916C6EEE64B2E67BB6690B5CC` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS / IN-G2-BR-01 OPEN` |
| Revision Response | `D:\23MySec\pages\markets\india\05_review\MARKET-IN-001_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `BC3459172C0062A3374F37FC1DF6609881418C35759C1101992C08C7ED996682` | `IN-G2-BR-01 REVISION_COMPLETE / PENDING_INDEPENDENT_REREVIEW` |
| Independent Buyer Re-review | `D:\23MySec\pages\markets\india\05_review\MARKET-IN-001_GATE2_FULL_COPY_BUYER_REVIEW_V0.2.md` | `5894EC1D0FA72A56451341037BDD591278F875D9F780A3E468E47901FE89249B` | `READY_FOR_PROJECT_CONTROL_REVIEW / IN-G2-BR-01 CLOSED` |
| Project-control Review | `D:\23MySec\pages\markets\india\05_review\MARKET-IN-001_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `E46BD65A1A917B71BD0032D8BDCB6774BC0CF45A74C662EB3E14FF91611DCCC6` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

## Authority and consumption order

1. Current user decisions and root project rules, including `IN-D01`, `IN-D02` and the 2026-09-07 serial Full Copy batch authority.
2. Approved Gate 1 Manifest V0.2 and the Brief, Gate 1 Research, Claim Register, keyword mapping, Market Playbook and decision-register entries it points to.
3. Current A/B/C combination in this Manifest.
4. Execution record for self-check evidence only; it is not an independent review.
5. Earlier Manifests and historical research for provenance only.

## Current content boundary

- The five-module order is Hero → buying-object qualification → application review → product/origin/import information → RFQ preparation.
- Coatings, plastics and masterbatch production are separate evaluation paths. The buying-object module distinguishes TiO2 pigment input from finished white masterbatch without adding a finished-masterbatch offer.
- India price intent is answered through a consistent material/specification, required or estimated MT quantity and destination basis. No price, MOQ, landed cost or quotation result is claimed.
- Detailed dated trade status remains with `RES-TRADE-IN`. The market page contains only an owner link and no current duty, rate, exemption, scope, tariff, customs-treatment or shipment conclusion.
- The Documents path retains one structured Grade and one or more document types. Other Grades may be supplementary context only; independent Grade-to-document instructions require separate requests.
- Malaysia origin and the exact sentence `A Certificate of Origin is available upon request.` inherit their approved scopes. Neither is expanded into a statement about every shipment, customs acceptance, preferential treatment or tariff outcome.
- Primary action remains `Request a Quote`; secondary Hero action remains `Explore Products`.

## Open items and stop

- `IN-G2-BR-01` is resolved in C V0.2 and independently closed; no required Finding remains.
- Independent Buyer Review and project-control review have passed; final batch user approval remains pending.
- Receiver implementation, route readiness, `RES-TRADE-IN` content freshness, canonical output, sitemap/robots behavior, development, publication and indexing remain later authorized work.

This Manifest stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open. Gate 3, development, deployment, publication and indexing are not authorized. Historical files remain unchanged.
