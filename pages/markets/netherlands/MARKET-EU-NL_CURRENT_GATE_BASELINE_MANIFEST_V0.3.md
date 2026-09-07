# MARKET-EU-NL Current Gate Baseline Manifest V0.3

## Current state

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-NL` / `/markets/netherlands/` |
| Type / language | Market procurement landing page / EN |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 batch authority | `USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH` |
| Gate 2 Skeleton | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| Gate 2 Full Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Gate 2 | `OPEN / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Manifest status | `CURRENT_GATE2_WORKING_MANIFEST` |
| Previous current pointer | `D:\23MySec\pages\markets\netherlands\MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |

The serial-batch authority permits Full Copy to be produced without a separate page-level Skeleton user stop. It does not make the Skeleton user-approved and does not approve or close Gate 2.

## Current authority combination

| Role | File | SHA-256 | State |
|---|---|---|---|
| Approved Gate 1 baseline | `D:\23MySec\pages\markets\netherlands\MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` | `56365B96E4205367D16BE449441378777EC78B87E249382A744A65AEF993B104` | `APPROVED / CLOSED` |
| A — Content Skeleton | `D:\23MySec\pages\markets\netherlands\04_planning\MARKET-EU-NL_GATE2_CONTENT_SKELETON_V0.1.md` | `76BEA448CD9D0B9F13992902182A62F46F9462644721AA74ADD0DEFDC8028CF0` | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\markets\netherlands\04_planning\MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `05945E5609FB12FFB04E791D4F4E2C2778B25158BB81F57D05E6D518503BFF72` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| C — stable content contract | `D:\23MySec\pages\markets\netherlands\04_planning\MARKET-EU-NL_GATE2_CONTENT_CONTRACT_V0.1.md` | `DCD67673CBB0142F5A1ED8D8EADD2A372D43EF5828472F986072CBA18347C351` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Execution and Buyer cold read | `D:\23MySec\pages\markets\netherlands\05_review\MARKET-EU-NL_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `D6C0B5E8311F07128C7C90000BAFC9C4629AF29371A966C32952D460C4D7E4E0` | `EXECUTION_SELF_CHECK_COMPLETE` |
| Independent Buyer Review | `D:\23MySec\pages\markets\netherlands\05_review\MARKET-EU-NL_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `E4C41750BF2EEAAFD432B291E19C692F4584302B5ACE09CF0A3F23E1A2FD79BF` | `REVISE_BEFORE_PROJECT_CONTROL_REVIEW / NL-G2-BR-01–03` |
| Revision Response | `D:\23MySec\pages\markets\netherlands\05_review\MARKET-EU-NL_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` | `4380E3EA46B8424303BC301886748D7F8BF857ACEDD74AB5FF090F41BD255789` | `NL-G2-BR-01–03 REVISION_COMPLETE / PENDING_INDEPENDENT_REREVIEW` |
| Independent Buyer Re-review | `D:\23MySec\pages\markets\netherlands\05_review\MARKET-EU-NL_GATE2_FULL_COPY_BUYER_REVIEW_V0.2.md` | `FB0F612C20100F56C3969FE97058AE2DEA1639A96EBF046AA6AD59E19AA978E4` | `READY_FOR_PROJECT_CONTROL_REVIEW / NL-G2-BR-01–03 CLOSED` |
| Project-control Review | `D:\23MySec\pages\markets\netherlands\05_review\MARKET-EU-NL_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `B36B3AC41DFD459FD04E4C623BDEF4906774D340D28CF2483505F65BD8AE38D2` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

## Authority and consumption order

1. Current user decisions and root project rules, including `NL-D01`, `NL-D02` and the 2026-09-07 serial Full Copy batch authority.
2. Approved Gate 1 Manifest V0.2 and the Brief, Gate 1 Research, Claim Register, keyword mapping, Market Playbook and decision-register entries it points to.
3. Current A/B/C combination in this Manifest.
4. Execution record for self-check evidence only; it is not an independent review.
5. Earlier Manifests and historical research for provenance only.

## Current content boundary

- The five-module order is Hero → application and evaluation requirements → product review → documents → RFQ.
- Coatings and printing inks receive first attention. Plastics and masterbatch remain supported without becoming the page's primary national distinction.
- The VVVF sector list is used only as buyer project-description context. It creates no market-share, demand, Grade-suitability or IKHLAS-capability claim.
- Malaysia origin and the exact sentence `A Certificate of Origin is available upon request.` inherit their approved scopes. Neither is expanded into a statement about every shipment, customs acceptance, preferential treatment or tariff outcome.
- Primary action remains `Request a Quote`; secondary Hero action remains `Explore Products`.

## Open items and stop

- `NL-G2-BR-01`, `NL-G2-BR-02` and `NL-G2-BR-03` are resolved in B V0.2 and independently closed; no required Finding remains.
- Independent Buyer Review and project-control review have passed for the current A/B/C combination.
- Final batch user approval remains pending.
- Receiver implementation, route readiness, canonical output, sitemap/robots behavior, development, publication and indexing remain later authorized work.

This Manifest stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open. Gate 3, development, deployment, publication and indexing are not authorized. Historical files remain unchanged.
