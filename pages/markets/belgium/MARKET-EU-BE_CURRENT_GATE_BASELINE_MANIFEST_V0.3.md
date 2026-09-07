# MARKET-EU-BE Current Gate Baseline Manifest V0.3

## Current state

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-BE` / `/markets/belgium/` |
| Type / language | Market procurement landing page / EN |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 batch authority | `USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH` |
| Gate 2 Skeleton | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| Gate 2 Full Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Gate 2 | `OPEN / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Manifest status | `CURRENT_GATE2_WORKING_MANIFEST` |
| Previous current pointer | `D:\23MySec\pages\markets\belgium\MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |

The serial-batch authority permits Full Copy to be produced without a separate page-level Skeleton user stop. It does not make the Skeleton user-approved and does not approve or close Gate 2.

## Current authority combination

| Role | File | SHA-256 | State |
|---|---|---|---|
| Approved Gate 1 baseline | `D:\23MySec\pages\markets\belgium\MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` | `96C8ACB552A33C8F96F1B417CEB4FBDA14F1A3BF756F51D3C3F2465070E62539` | `APPROVED / CLOSED` |
| A — Content Skeleton | `D:\23MySec\pages\markets\belgium\04_planning\MARKET-EU-BE_GATE2_CONTENT_SKELETON_V0.1.md` | `E605B4B85EA42C561D0E1EA462DA51FCD5618DD35AB703B2AC14945AE8FE5C69` | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\markets\belgium\04_planning\MARKET-EU-BE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `8C4FAEB2815FD284A780EA03A082CB3FFD1FCB4CBEE45DBB937BE4B39B112C5F` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| C — stable content contract | `D:\23MySec\pages\markets\belgium\04_planning\MARKET-EU-BE_GATE2_CONTENT_CONTRACT_V0.1.md` | `FC96FD504A9F15EBCC006EEE250988A6DC707FC65896349F5F9C641843ABC9C6` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Execution and Buyer cold read | `D:\23MySec\pages\markets\belgium\05_review\MARKET-EU-BE_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `143BE1A72746838FF900F78C7869DEC57D94C7F73EC633BAE2BB29CFFE3BC058` | `EXECUTION_SELF_CHECK_COMPLETE` |
| Independent Buyer Review | `D:\23MySec\pages\markets\belgium\05_review\MARKET-EU-BE_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `ECC945E4A04C89C7CD25AA3E4743EBD5DF3A2AA140B9130EAFBD8218EC05EF1A` | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS / F01 OPEN` |
| Revision Response | `D:\23MySec\pages\markets\belgium\05_review\MARKET-EU-BE_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `B2948A40AD19769534BBCF4C6B38828BB6F258EC3A32E88A72D411E9E3B0656D` | `F01 REVISION_COMPLETE / PENDING_INDEPENDENT_REREVIEW` |
| Independent Buyer Re-review | `D:\23MySec\pages\markets\belgium\05_review\MARKET-EU-BE_GATE2_FULL_COPY_BUYER_REREVIEW_V0.1.md` | `59FFBDBBAACEA993CE8CCD66F165F9714381472F2AD0C2164180D4B20C34B96A` | `READY_FOR_PROJECT_CONTROL_REVIEW / F01 CLOSED` |
| Project-control Review | `D:\23MySec\pages\markets\belgium\05_review\MARKET-EU-BE_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `D671AA3F5F3174F1EBE9CFDECC26F64615C823FA4C6EE57601BDA72B6B050F73` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

## Authority and consumption order

1. Current user decisions and root project rules, including `BE-D01`, `BE-D02` and the 2026-09-07 serial Full Copy batch authority.
2. Approved Gate 1 Manifest V0.2 and the Brief, Gate 1 Research, Claim Register, keyword mapping, Market Playbook and decision-register entries it points to.
3. Current A/B/C combination in this Manifest.
4. Execution record for self-check evidence only; it is not an independent review.
5. Earlier Manifests and historical research for provenance only.

## Current content boundary

- The five-module order is Hero → product/origin/destination qualification → application and buyer context → Documents → RFQ.
- Coatings and plastics receive first attention. Import and distribution remain an approved secondary buyer context without becoming a market-size or customer-list claim.
- The product-form passage distinguishes industrial pigment listings from liquid dispersions, laboratory reagents and finished coatings for qualification purposes. It does not add those forms to the IKHLAS offer or make a new negative capability decision.
- Malaysia origin and the exact sentence `A Certificate of Origin is available upon request.` inherit their approved scopes. Neither is expanded into a statement about every shipment, customs acceptance, preferential treatment or tariff outcome.
- Primary action remains `Request a Quote`; secondary Hero action remains `Explore Products`.

## Open items and stop

- `MARKET-EU-BE-G2-BR-F01` is resolved in B V0.2 and independently closed; no required Finding remains.
- Independent Buyer Review and project-control review have passed for the current A/B/C combination.
- Final batch user approval remains pending.
- Receiver implementation, route readiness, canonical output, sitemap/robots behavior, development, publication and indexing remain later authorized work.

This Manifest stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open. Gate 3, development, deployment, publication and indexing are not authorized. Historical files remain unchanged.
