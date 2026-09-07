# MARKET-BR-PT Current Gate Baseline Manifest V0.3

## Current state

| Field | Value |
|---|---|
| Page / planning path | `MARKET-BR-PT` / `/pt-br/markets/brazil/` |
| Type / language | Localized market procurement landing page / `pt-BR` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 batch authority | `USER_AUTHORIZED_GATE2_SERIAL_FULL_COPY_BATCH` |
| Gate 2 Skeleton | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| Gate 2 Full Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Gate 2 | `OPEN / PENDING_BATCH_USER_APPROVAL` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Manifest status | `CURRENT_GATE2_WORKING_MANIFEST` |
| Previous current pointer | `D:\23MySec\pages\markets\brazil\MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |

The serial-batch authority permits Full Copy to be produced without a separate page-level Skeleton user stop. It does not make the Skeleton user-approved and does not approve or close Gate 2. `BR-PT-D03` approves the planning path only; this Manifest does not claim that the route, canonical or hreflang is implemented or live.

## Current authority combination

| Role | File | SHA-256 | State |
|---|---|---|---|
| Approved Gate 1 baseline | `D:\23MySec\pages\markets\brazil\MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` | `D920F23DA13DEC3F5C285EC167C2B89762A30FBA48474A82971A6E3D041AEA78` | `APPROVED / CLOSED` |
| A — Content Skeleton | `D:\23MySec\pages\markets\brazil\04_planning\MARKET-BR-PT_GATE2_CONTENT_SKELETON_V0.2.md` | `12ED2A57C781AA335CED3E181B136644AD678F03CDA2DA287C308CB620FBE573` | `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED` |
| B — Full Buyer Clean Copy | `D:\23MySec\pages\markets\brazil\04_planning\MARKET-BR-PT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `895054795F03B2587E8A49AB143CFB59C316CEEF9DF4D3A40269B8CB8BBED2CB` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| C — stable content contract | `D:\23MySec\pages\markets\brazil\04_planning\MARKET-BR-PT_GATE2_CONTENT_CONTRACT_V0.2.md` | `BB75A6CE6E1E21F7A892B4322878340762182D6C9390BE6F333F2C6EBA1A9D47` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |
| Execution and Buyer cold read | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_EXECUTION_AND_BUYER_COLD_READ_V0.1.md` | `510775C9A0135289ADF515CE41E23BAA8D10B01E1841864CE06A05B0496CF46C` | `EXECUTION_SELF_CHECK_COMPLETE` |
| Independent PT-BR naturalness review | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REVIEW_V0.1.md` | `C33C6357BD02AFDA4BA92E42BC5164E001817FF029A8EF2EC0442C2CEDD30AC6` | `PASS_WITH_MINOR_REVISIONS / PTBR-N01–N04` |
| PT-BR revision response | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REVISION_RESPONSE_V0.1.md` | `D7CB92D7FF93186B359B10C978EAE132448D992BA56BA4474402B72092AD0F30` | `PTBR-N01–N04 REVISION_COMPLETE` |
| Independent PT-BR naturalness rereview | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_PTBR_NATURALNESS_REREVIEW_V0.1.md` | `05E01CA6F3023146BE2DEE42D67F41D6704A66C5807CF28EF0F95C815D2EC9F0` | `READY_FOR_PROJECT_CONTROL_REVIEW / NO OPEN LANGUAGE FINDING` |
| Independent Gate 2 Buyer Review | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `BDD532DFB889E4A9C7475E8AF22D3C7745D8AE9D960584C97120EA1DB92A9722` | `READY_FOR_PROJECT_CONTROL_REVIEW / NO REQUIRED FINDING` |
| Project-control review | `D:\23MySec\pages\markets\brazil\05_review\MARKET-BR-PT_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md` | `55585531F2006ED7F6E669A68A7BD4DEAB9367C649FBE6CC7538B094BCC611CA` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL` |

V0.1 A/B/C remain preserved as the initial language-review combination and are not the current working pointers.

## Authority and consumption order

1. Current user decisions and root project rules, including `BR-PT-D01`, `BR-PT-D02`, `BR-PT-D03` and the 2026-09-07 serial Full Copy batch authority.
2. Approved Gate 1 Manifest V0.2 and the Brief, Gate 1 Research, Claim Register, keyword mapping, Market Playbook and decision-register entries it points to.
3. Current A/B/C V0.2 combination in this Manifest.
4. Independent PT-BR naturalness review/rereview for language evidence only; it is not the independent Gate 2 Buyer Review or project-control approval.
5. Execution record for self-check evidence only; it is not an independent review.
6. MARKET-BR-EN as shared fact/boundary reference only, never PT-BR wording authority.
7. Earlier Manifests and historical research for provenance only.

## Current content boundary

- The five-module order is Hero → Product/Application evaluation → Documents → dated Brazil foreign-trade handoff → Brazil RFQ preparation.
- Copy uses natural Brazilian Portuguese, the approved `para o Brasil` external-supply relationship, approved CTA labels and the exact COO sentence.
- A single visible notice tells readers that linked Product, Application, Documents, Trade and RFQ destinations are currently in English. English receiver labels are quoted only when needed to identify actual controls.
- Product/Application routes create no Brazil-specific Grade priority, ranking or suitability claim.
- Documents retains one structured Grade and one or more document types. Other Grades may be supplementary context only; independent Grade-to-document instructions require separate requests.
- The Trade section gives the `RES-TRADE-BR` date as `06/09/2026`, summarizes its dated-source/verification role and leaves shipment-specific assessment with the buyer. No measure, rate, scope conclusion, proceeding outcome, tariff, customs treatment or shipment result is stated.
- The RFQ accepts known or unknown Product/Grade and Application choices, required or estimated MT quantity, supplementary candidate Grades and a Brazil delivery location without adding fields or promising an outcome.
- Malaysia origin and `O Certificado de Origem está disponível mediante solicitação.` retain their approved scopes. Neither is expanded into every-shipment provision, customs acceptance, preferential treatment or tariff outcome.
- Primary action remains `Solicitar cotação`; secondary action remains `Conhecer os produtos`.

## Open items and stop

- Independent PT-BR naturalness review and rereview are complete; `PTBR-N01–N04` are resolved and no new language Finding remains.
- Independent Gate 2 Buyer Review and project-control review passed with no required Finding.
- Final batch user approval remains pending.
- Receiver/route implementation, `RES-TRADE-BR` freshness, canonical output, reciprocal hreflang, localized hub routing, sitemap/robots behavior, development, publication and indexing remain later authorized work.

This Manifest stops at `PROJECT_CONTROL_REVIEW_PASS_PENDING_BATCH_USER_APPROVAL`. Gate 2 remains open. Gate 3, development, deployment, publication and indexing are not authorized. Historical files remain unchanged.
