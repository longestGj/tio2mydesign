# APP-MB Gate 1 Keyword, Intent and Cannibalization Audit V0.1

## 1. Exact keyword-master record

| Field | Value |
|---|---|
| Page ID | `APP-MB` |
| Page name | `TiO2 for Masterbatch` |
| URL | `/applications/titanium-dioxide-for-masterbatch/` |
| Page type | `Application landing page` |
| Primary keyword | `titanium dioxide for masterbatch` |
| Secondary keywords | `tio2 for masterbatch`; `masterbatch grade titanium dioxide`; `titanium dioxide masterbatch pigment` |
| Intent | `C` |
| Buyer stage | `Technical Evaluation / Supplier Search` |
| Source cluster | `APP-03` |
| Excluded | exact Grade primary terms; country supplier primary terms; process-category primary terms |
| Cannibalization boundary | Application page owns generic use-case intent; Grade pages own exact model intent and link back for broader selection |
| Priority | `P1` |
| Mapping | `PROVISIONAL_URL` |
| Verification | `QUALITATIVE_KEYWORD_EVIDENCE` |

## 2. Ownership result

The current keyword master contains exactly one owner of the exact primary keyword: `APP-MB`. No duplicate primary-keyword owner was found.

## 3. Adjacent-page boundaries

| Neighbor | APP-MB may do | APP-MB must not do |
|---|---|---|
| `APP-000` | Receive navigation context and link back when eligible | Turn Hub navigation terms into duplicate acquisition copy |
| `APP-PLAS` | Explain that Masterbatch is a pigment-input/concentrate evaluation context | Absorb generic plastics formulation and processing intent |
| `GRADE-*` | Show neutral Grade names and eligible links | Use exact Grade phrases as section-level SEO targets or reproduce Grade specifications |
| `PRODUCT-PROC-*` | Mention that process classification belongs to product evidence when necessary | Target chloride/sulfate acquisition terms or claim process superiority |
| `MARKET-*` | Link to market support when relevant and eligible | Target country supplier, price, import or trade terms |
| `DOC-*` / `CONV-DOC` | Explain what evidence to request and continue to the request owner | Promise document availability or reproduce the document-management page |
| `CONV-RFQ` | Pass editable Masterbatch context | Embed/own the full RFQ workflow or promise an outcome |

## 4. Search-intent interpretation

The page should satisfy a buyer who is not merely asking for a TiO2 definition. The expected task is to evaluate how a pigment candidate should be screened and qualified for a declared Masterbatch system, identify candidate Grade paths, understand evidence limits and decide what to request next.

The page must therefore combine:

- technical evaluation guidance;
- neutral product discovery;
- document and application-input preparation;
- a qualified supplier-discussion path.

It must not become a laboratory standard, an application guarantee, a generic plastics encyclopedia or a thin product listing.

## 5. Proposed Gate 1 content direction

| Surface | Direction | Status |
|---|---|---|
| H1 | `Titanium Dioxide for Masterbatch: Evaluate Dispersion, Processing Stability and End-Use Performance` | Proposed for Gate 1 intent confirmation; final wording belongs to Gate 2 |
| Hero answer | Separate concentrate and final-article evidence, define a fair comparison, then progress only when the next stage's evidence is available | Proposed direction |
| Primary CTA | `Discuss Your Masterbatch Application` | Proposed; conditional CONV-RFQ route |
| Secondary CTA | `Request Technical Documents` | Proposed; conditional CONV-DOC route |

## 6. Wording conflict disposition

The keyword-master page-role text uses “recommend verified grades.” Current user-approved product relationship language permits only a neutral, unranked `Grades to Review` collection. On `2026-09-06`, the user approved the page direction that explicitly uses this neutral collection.

Public behavior for APP-MB is therefore:

- show the exact approved neutral set when relationship and routes qualify;
- do not label it Recommended, Best, Ideal, Preferred or Equivalent;
- do not infer fit, availability, supply, comparison or performance from membership.

The original CSV is not overwritten in this Gate 1 audit. The conflict remains traceable rather than silently edited.

## 7. Result

| Check | Result |
|---|---|
| Exact primary owner unique | `PASS` |
| Intent fits Application landing page | `PASS` |
| APP-PLAS boundary | `PASS_WITH_EXPLICIT_MASTERBATCH_INPUT_DEFINITION` |
| Grade-page boundary | `PASS_WITH_NEUTRAL_RELATION_ONLY` |
| Market/process/document/conversion boundaries | `PASS_WITH_CONDITIONAL_LINKS` |
| URL finality | `OPEN / PROVISIONAL_URL` |
| Quantitative keyword metrics | `NOT_CLAIMED` |

