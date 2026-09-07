# DOC-COO Current Gate Baseline Manifest V0.5

## Current state

| Field | Value |
|---|---|
| Page / URL | `DOC-COO` / `/documents/certificate-of-origin/` |
| Type / language | Document-compliance decision page / EN |
| Mapping / fact state | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 batch authority | `USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH` |
| Gate 2 Skeleton | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| Gate 2 Full Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Gate 2 | `OPEN / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Manifest status | `CURRENT_GATE2_WORKING_MANIFEST` |
| Previous current pointer | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md` |

The serial-batch authority skips per-page Skeleton user confirmation. It does not turn the Skeleton into a user-approved artifact and does not approve or close Gate 2.

## Current authority combination

| Role | File | SHA-256 | State |
|---|---|---|---|
| Approved Gate 1 pointer | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md` | `18BE4692584A1C2D2978AF5338ABF39671E8F8D71AD6115E59A6EE9841D4DEDF` | `APPROVED / CLOSED` |
| A — Content Skeleton | `D:\23MySec\pages\documents\certificate-of-origin\04_planning\DOC-COO_GATE2_CONTENT_SKELETON_V0.1.md` | `13AEC25060E64481DE057066A1587442DE2BF4D692BDC7013AFD91C71FFAE248` | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\documents\certificate-of-origin\04_planning\DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `29E3E9EDFCE861C880425FB2C460A540D78D6298B0373CF1E7F2A2F46E26DDBB` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| C — stable content contract | `D:\23MySec\pages\documents\certificate-of-origin\04_planning\DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md` | `BBDE79A023C994CCA422519D9ABF16CDC998E1399D849E618B78172B6B22F290` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Execution and Buyer cold read | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `8A1BB61A0A72DE51B19A408C331ADC65DCBCEA3BF5205AF0B5B3B794BCC3C5B7` | `EXECUTION_SELF_CHECK_COMPLETE` |
| Independent Buyer Review | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `C9A2386FEED7DF9D0A784150768ECEECA2A282A4D53D8970D761070548F09268` | `REVISE_BEFORE_PROJECT_CONTROL_REVIEW` |
| Revision Response | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `77934BA635933F9F7D4A274AB07E8959FB6E11F264E60CA53A5A320B9F9515EE` | `F01–F03 REVISION_COMPLETE / PENDING_REREVIEW` |
| Independent Buyer Re-review | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `B434220C1272EA1F1A8872AA57324305A5D28F528720FD1697851ECF4B5F3F45` | `READY_FOR_PROJECT_CONTROL_REVIEW / F01–F03 CLOSED` |
| Project-control Review | `D:\23MySec\pages\documents\certificate-of-origin\05_review\DOC-COO_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `F78A339CD1374DB8F38B6446989858C9E82E24B6A960ECC913588DF3FF58A033` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

## Authority and consumption order

1. Current user decisions and root project rules, including the 2026-09-05 site-wide Malaysia-origin authority and the 2026-09-07 serial Full Copy batch authority.
2. Approved Gate 1 pointer, Brief V0.3, Claim Register and Gate 1 closure.
3. Current A/B/C combination in this Manifest.
4. Execution record for self-check evidence only; it is not an independent review.
5. Earlier Gate 1 manifests and historical research for provenance only.

## Open items and stop

- `DOC-COO-G2-BR-F01`, `F02` and `F03` are resolved in B V0.2 and independently closed; no required Finding remains.
- Independent Buyer Review and project-control review have passed for the current A/B/C combination.
- Full Copy and the six-module order remain pending final batch user approval.
- URL mapping, canonical implementation, indexing, Request Documents release and publication remain separate decisions.
- The statement `A Certificate of Origin is available upon request` remains unapproved for DOC-COO and is absent from the current visible and machine-readable scope.

This Manifest stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open. Gate 3, development, deployment, publication and indexing are not authorized. Historical files remain unchanged.
