# APP-MB Gate 2 SEO, GEO and Schema Skeleton V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-MB` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate | Gate 2 content-skeleton checkpoint |
| Date | `2026-09-06` |
| URL status | `PROVISIONAL_URL` |
| Full metadata/Schema approval | `NOT_APPROVED` |

## 2. Proposed SEO surface

| Field | Proposed value / rule |
|---|---|
| Primary keyword | `titanium dioxide for masterbatch` |
| Secondary keywords | `tio2 for masterbatch`; `masterbatch grade titanium dioxide`; `titanium dioxide masterbatch pigment` |
| Title | `Titanium Dioxide for Masterbatch Evaluation | TiO2 Malaysia` |
| H1 | `Titanium Dioxide for Masterbatch: Evaluate Dispersion, Processing Stability and End-Use Performance` |
| Meta Description | `Evaluate titanium dioxide for masterbatch by separating concentrate processing from final-use evidence, reviewing documents, Grades and qualification steps.` |
| Registered slug | `titanium-dioxide-for-masterbatch` |
| Canonical candidate | `https://tio2malaysia.com/applications/titanium-dioxide-for-masterbatch/` |
| Canonical status | Candidate only; do not output as final until URL and route are approved |
| Robots intent | `index,follow` for the final approved public page; preview/non-production behavior follows environment controls and Gate 10 remains separate |
| Language | `en` |
| Hreflang | `NOT_APPLICABLE` |

The exact primary keyword has one current owner in the keyword master: APP-MB.

## 3. SEO intent and exclusions

The Title, H1, Hero and main decision modules serve one combined commercial/technical evaluation intent. The page may use exact Grade names only as neutral internal links and may not turn them into secondary acquisition headings.

Excluded acquisition clusters:

- exact Grade primary keywords;
- titanium dioxide supplier + country terms;
- chloride/sulfate process-category terms;
- generic plastics intent owned by APP-PLAS;
- TDS/SDS/CoA request intent owned by Documents/Conversion pages.

## 4. GEO entity model

### Primary entity

`Titanium dioxide for Masterbatch technical evaluation`

### Related entities and visible relationships

| Subject | Relationship | Object | Visible basis |
|---|---|---|---|
| APP-MB page | explains evaluation of | TiO2 pigment input for Masterbatch | Hero and evaluation-system module |
| Masterbatch evaluation | contains stage | Concentrate preparation | Two-stage module |
| Masterbatch evaluation | contains stage | Final let-down and final article | Two-stage module |
| Comparison result | depends on | Method, equipment, conditions, polymer, specimen, reference and endpoint | Comparison-basis module |
| Evidence observation | answers bounded question about | Process, spatial state or final-specimen endpoint | Evidence-interpretation module |
| TDS / SDS / lot CoA / application report | supports different decision role | Screening, safety, identified lot or tested application | Documents module |
| APP-MB | lists neutral Grade-to-Review relationships | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 | Visible Grade module and Product V0.3 authority |
| APP-MB | continues to | CONV-RFQ and CONV-DOC | Visible CTA modules when eligible |

No relationship may encode recommendation, equivalence, universal suitability, availability, supply, price advantage or completed qualification.

## 5. Answer-ready blocks

| Block | Proposed concise answer direction | Evidence boundary |
|---|---|---|
| What is being evaluated? | Separate pigment input, carrier-based concentrate and receiving-resin final article | LLDPE study illustrates the distinction; no universal formulation |
| What makes a fair comparison? | Match or disclose preparation, method, equipment, conditions, polymer, specimen, reference and endpoint | ISO public-preview boundary plus project synthesis; no procedure/threshold |
| Can one result prove dispersion or final fitness? | Flow, FPV, morphology and final-specimen tests answer different questions | No one-metric proof or mechanism conclusion |
| Does processing evidence qualify end use? | It may support the next trial but cannot close an unmeasured final-use requirement | System/resin/route/geometry/end-use context retained |
| Which document should be requested? | Use current TDS for screening, SDS for safety communication, lot CoA for an identified lot and application report for its tested system | No TiO2 Malaysia availability promise |
| When can economics be compared? | After candidates reach the same accepted functional endpoint and current comparable commercial/operating inputs exist | No savings estimate or winner |

## 6. Proposed Schema direction

### Baseline types

- `WebPage` for APP-MB.
- `BreadcrumbList` matching the visible Breadcrumb.

### Conditional type

- `ItemList` may represent the visible seven-Grade `Grades to Review` collection only if the collection and eligible target links are visibly rendered in the same order. `ItemList` membership must remain neutral.

### Not authorized by this skeleton

- `Article` or `TechArticle` merely because the source content is long-form;
- `FAQPage` or `QAPage` by default;
- `Product`, `Offer`, rating or review objects for the Grade cards;
- `recommendedFor`, `isSimilarTo`, equivalence, suitability or performance relationships;
- a Canonical or URL in Schema before the APP-MB route is approved.

## 7. Visible/machine-readable parity

- Schema names, Grade membership, order and links must match the visible module exactly.
- Omitted or ineligible links are omitted from Schema in the same operation.
- Source dates and publisher identities cannot be repaired in Schema when absent from the governed source record.
- The page cannot expose an internal Claim/Evidence status through metadata, JSON-LD, comments, ALT or hidden text.
- The word `Masterbatch` describes the application context, not a finished product sold by TiO2 Malaysia.

## 8. Social and citation direction

- OG title/description reuse the approved SEO/visible promise without adding supply, availability or recommendation language.
- Any future OG image must visualize the two-stage evaluation or material context without implying a specific factory, production capacity, inventory or test result.
- Inline article citations use accessible numeric links and the source list provides matching anchors/backlinks.
- Visible citation numbers are presentation order and must remain distinguishable from D22 internal Source IDs.

## 9. Freshness and later checks

| Item | Check point |
|---|---|
| ISO edition/current full protocol | Before any execution-ready method statement and again before Gate 9/publication |
| Manufacturer page identity/year/version | Before using any detail beyond the currently approved example role |
| Product Grade relationship set | Whenever Product relationship baseline changes and at Gate 7/9 |
| APP-MB/Grade/Documents/RFQ routes | Gate 7 dependency review and Gate 9 runtime QA |
| Canonical/robots/sitemap | Gate 7 contract, Gate 9 read-only QA and separate Gate 10 authorization |

## 10. Decision requested

Approve or revise the proposed Title, H1, Meta Description, entity relationships, answer-ready blocks, baseline `WebPage + BreadcrumbList` direction and conditional neutral `ItemList` rule.

Approval authorizes full Gate 2 copy and content-model drafting only. It does not authorize runtime Schema, development, publication or indexing.

