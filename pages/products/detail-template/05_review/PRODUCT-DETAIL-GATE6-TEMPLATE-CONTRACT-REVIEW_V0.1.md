# Product Detail Gate 6 Template Contract Review V0.1

## 1. Document control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G6-CONTRACT-REVIEW-01` |
| Review ID | `PRODUCT-DETAIL-G6-PCR-01` |
| Date | `2026-09-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Applies to | Unified template contract for the 14 approved Grade Detail Pages |
| Gate 5 baseline | `PRODUCT-DETAIL-G5-BASELINE-01 = APPROVED / CLOSED` |
| Gate 7 | `USER_AUTHORIZED / IN_PROGRESS` |
| Development | Not started or authorized by this package |

This is a planning and review contract. It does not create the 14 final bodies, approve grade-specific facts beyond existing evidence, implement CMS/API/components, or access `D:\16Wordpress_nextjs`.

## 2. Gate 6 review disposition

| Review area | Self-check disposition | Gate 6 conclusion |
|---|---|---|
| Fixed 14-page identity and exact-grade ownership | Complete | Ready for project-control review |
| Unified module and field contract | Complete | Ready for project-control review |
| PRODUCT V0.3 relationship synchronization | Complete | Ready for project-control review |
| M-350 Gate 5 visual/example synchronization | Complete | Ready for project-control review |
| Current Global Chrome synchronization | Complete | Ready for project-control review |
| SEO/GEO/Schema contract | Complete | Ready for project-control review |
| CMS/API/component mapping | Complete as implementation-neutral specification | Ready for project-control review |
| `site_scope=tio2-my` isolation | Complete as a mandatory contract | Ready for project-control review |
| Responsive and accessibility acceptance | Complete | Ready for project-control review |
| Route/form readiness | Deferred to Gate 8 implementation and Gate 9 read-only QA | Does not block Gate 6 |
| Final copy and individual TDS for 14 grades | Intentionally incomplete | Evidence-gated per grade; not a Gate 6 template blocker |

No Gate 6 approval is asserted by this self-check.

## 3. Fourteen-grade relationship review

The table records current neutral relationship candidates from PRODUCT V0.3. It does not approve final body copy, performance, ranking, recommendation, technical values or public routing.

| Grade | Process classification | Verified neutral Application mappings | Required page-specific control |
|---|---|---|---|
| M-350 | Chloride | Coatings, Plastics, Printing Inks, Paper | Gate 5 V0.5 visibly uses the five current TDS directions; Paper is not added merely from the relationship matrix |
| M-510 | Chloride | Coatings, Plastics, Masterbatch, Printing Inks | Current TDS and original grade copy required before render |
| M-896 | Chloride | Coatings | Current TDS and original grade copy required before render |
| M-996 | Sulfate | Coatings | Preserve M-996/M-2196 comparison hold |
| M-2196 | Sulfate | Coatings | Preserve M-996/M-2196 comparison hold |
| M-895 | Chloride | Coatings | Current TDS and original grade copy required before render |
| M-200 | Chloride | Plastics, Masterbatch | Current TDS and original grade copy required before render |
| M-108 | Sulfate | Plastics, Masterbatch | Current TDS and original grade copy required before render |
| M-210 | Chloride | Plastics, Masterbatch | Current TDS and original grade copy required before render |
| M-340 | Chloride | Plastics, Masterbatch | Current TDS and original grade copy required before render |
| M-886 | Chloride | Plastics, Masterbatch | Current TDS and original grade copy required before render |
| M-52 | Sulfate | Coatings, Printing Inks | Current TDS and original grade copy required before render |
| M-2377 | Sulfate | Coatings, Plastics, Masterbatch, Printing Inks, Paper | Specialty Materials hidden; Rubber evidence-only; recommendations/specifications separately gated |
| CR-901 | Vapor-phase oxidation | Specialty Materials | Do not force into Chloride/Sulfate or commodity-grade comparisons |

Global relationship controls:

- Consume exactly 30 verified, 0 conflict and 54 no-public Application rows.
- `NO_PUBLIC_MAPPING` means no approved positive public mapping; it never becomes Not Recommended or technical unsuitability.
- A verified relationship authorizes neutral context only, not a performance claim or route lifecycle change.
- M-996/M-2196 comparison rationale remains suppressed on visible and machine-readable surfaces.
- M-350 facts remain M-350-only and cannot seed another grade record.

## 4. Unified module and render contract

| Order | Module | Data group | Render condition | Fail-closed behavior |
|---:|---|---|---|---|
| 0 | Global Header | shared Global Chrome | Always | Shared component failure blocks public release |
| 1 | Breadcrumb | identity + products route | Always | No fabricated parent; visible and JSON-LD paths stay aligned |
| 2 | Product Hero | identity, hero, verified media, conversion route keys | Identity always; differentiators only when verified | Omit unverified badge/image claim/CTA; never invent a substitute |
| 3 | Product Positioning | positioning | `verified` with useful body or decision points | Omit separate module; preserve exact-grade identity in Hero |
| 4 | Main Applications | applications + PRODUCT V0.3 | Module `verified`, collection non-empty and claims evidence-aligned | Omit non-public/unverified items; unavailable route removes link, not the verified plain text |
| 5 | Evaluation Priorities | evaluation priorities / qualification | Render each verified claim group independently | Do not infer negative use or symmetrical Not Recommended content |
| 6 | Typical Technical Data | technical specifications | `verified` and at least one approved row | Omit heading, table, API values and Schema properties |
| 7 | Request Documents | documents + route key | Working approved receiver and eligible public request language | No button, Contact fallback, placeholder or document-availability promise |
| 8 | Malaysia-origin Support | origin support | Product-specific claim `verified`, or approved neutral site-level link | Omit product-specific origin/manufacturing/packing claim |
| 9 | Market Support | market support + route keys | Destination page approved and functional; no grade-specific compliance inference | Suppress unavailable destination card |
| 10 | Related Grades | related grades | Separately approved neutral relationship, useful target and live route | Omit unsupported reason or whole module when fewer than two useful targets remain |
| 11 | Request Sample | conversion.sample route key | Working receiver accepting grade/source prefill | Omit action; never fall back to Contact or promise free/dispatch timing |
| 12 | Global Footer | shared Global Chrome | Always | Shared component failure blocks public release |

Page ending remains `Sample → Global Footer`. The RFQ receiver is a standalone route; no RFQ section, form or footer-like prototype block is embedded after Sample.

## 5. Lean content and CMS field contract

The content model remains lean. Sources, owners, approval dates and review dates are governance records by field group, not repeated beside every content value.

| Group | Required/conditional fields | CMS control | Public projection |
|---|---|---|---|
| Record identity | `site_scope`, `page_id`, `template_version`, `grade_code`, `slug`, locale | Required, unique within `site_scope` | Required identity only |
| SEO | title, meta description, H1, canonical path, index state | Required before indexable release | Render exact approved values |
| Hero | summary, category/process labels, media key, primary/secondary action keys | Identity required; claims conditional | Only verified visible claims |
| Positioning | body, up to four decision points | Module status | Omit when not verified |
| Applications | approved items and route keys | Module status + PRODUCT V0.3 validation | Only verified items; links only when resolvable |
| Evaluation | performance review, qualification review, explicit negative-use collection if supported | Claim-group status | Independent rendering; no inferred negatives |
| Technical | property, standard, typical/value, unit, qualifier/test condition | Module status; ordered rows | Only approved rows; exact semantics retained |
| Documents | neutral request language, eligible types, receiver route key | Module status + route state | No availability claim unless separately verified |
| Origin | summary and About/Document route keys | Module status | Product-specific facts only when verified |
| Markets | destination route keys | Module status + route state | Only functional approved destinations |
| Related grades | grade ID, TDS-based summary if approved, route key | Separate relationship/content approval | No ranking/equivalence/substitution inference |
| Conversion | RFQ, Sample and Request Documents route keys; source/prefill contract | Receiver readiness | No unresolved action renders |
| Media | asset key, type, actual-subject description, ALT or decorative flag | Rights and evidence approval | No misleading product/factory/packaging depiction |
| Publishing status | one status per module/claim group | `verified`, `pending_verification`, `not_public` | Only `verified` enters public projection |

RFQ receiver fields include company, business email, destination, application, requirements and quantity context. `domain` may be collected as an optional field only; it is never required.

## 6. WordPress/API/component mapping contract

This mapping defines behavior, not a framework implementation.

| Data group | Public component responsibility |
|---|---|
| Shared Global Chrome | `GlobalHeader`, responsive `MobileMenu`, `GlobalFooter` |
| Identity/SEO | route resolver, metadata renderer, canonical and index-state controller |
| Breadcrumb | visible `Breadcrumb` + matching `BreadcrumbList` generator |
| Hero | `GradeHero` + controlled CTA resolver |
| Positioning | `GradePositioning` |
| Applications | `GradeApplications` + route-key link resolver |
| Evaluation | `EvaluationPriorities` with independent claim-group rendering |
| Technical | `TechnicalData` with desktop table and mobile semantic rows |
| Documents | `DocumentRequestEntry` |
| Origin | `OriginSupport` |
| Markets | `MarketSupport` |
| Related grades | `RelatedGrades` with non-ranking hierarchy |
| Sample | `SampleRequestEntry` |
| Structured data | `Product` and `BreadcrumbList` JSON-LD from the public projection |

Mandatory delivery behavior:

- WordPress stores Malaysia records under `site_scope=tio2-my` or an equivalent enforced scope field.
- Every public query includes the scope predicate before grade/slug resolution.
- The public API returns a filtered render projection; `pending_verification`, `not_public` and removed collection items never enter serialized public responses.
- Preview/admin access is authenticated and cannot be reused as a public fallback endpoint.
- Route keys resolve through one registry; CMS copy does not hard-code provisional destinations.
- Cache keys include `site_scope`, locale, route/grade identity and relevant content version.
- Media lookup, menus, SEO, Schema, forms and related-grade queries use the same scope.
- Missing Malaysia content returns the approved absence state. It never reads TIOVAR, another site, a frozen site or a generic cross-scope record as fallback.

## 7. SEO contract review

- Each of the 14 canonical grade pages owns only `{grade} titanium dioxide` exact-grade intent.
- Applications own broad coatings/plastics/masterbatch/inks/paper intent; Process pages own process intent; Markets own country supplier intent; Documents own generic document intent.
- Title begins with the approved primary keyword and uses at most one visible verified differentiator.
- H1 begins with the grade and does not need a broad Application phrase. M-350 Gate 5 H1 remains `M-350 Rutile Titanium Dioxide Pigment`.
- M-350 current Title remains `M-350 Rutile Titanium Dioxide Pigment | TiO2 Malaysia`.
- M-350 current canonical remains `https://tio2malaysia.com/products/m-350/`.
- Metadata claims must appear in visible verified copy; no application/process/origin term is injected from a hidden module.
- Breadcrumb remains `Home > Products > {Grade}` in visible and structured output.
- Images use subject-accurate ALT; decorative visuals use empty ALT.
- Internal links use route keys and do not create keyword-stuffed repeated anchors.
- No automatic final metadata is generated for the other 13 grades from M-350 wording.

## 8. GEO and machine-readable contract review

- The entity path is Grade → product type → verified process → visible neutral Applications → visible characteristics/technical data → Documents/Markets/Sample/Quote actions.
- Direct answers are concise, factual and visible; no new FAQ is required by the template.
- Each grade must have a distinct evidence-aligned answer to what it is, what directions are publicly mapped and what the buyer should validate.
- Product JSON-LD describes one visible grade only.
- Allowed properties are limited to visible verified values such as name, SKU, description, URL, approved image, category and visible technical `additionalProperty` rows.
- Omit `offers`, `review`, `aggregateRating`, GTIN/MPN, certification, manufacturer and country of origin unless their exact visible prerequisites are separately approved.
- `NO_PUBLIC_MAPPING`, hidden technical rows, comparison holds and unavailable documents never enter JSON-LD, Open Graph copy, preload payloads or public APIs.
- Machine-readable Breadcrumb matches the three visible levels exactly.

## 9. Route and form readiness staging

| Destination | Current planning state | Gate 6 treatment | Gate 8 requirement | Gate 9/release condition |
|---|---|---|---|---|
| Coatings Application | `PROVISIONAL_URL` | Route key retained; no live claim | Implement approved final resolution or keep link suppressed | Crawlable successful destination or no public link |
| Request Documents | `PLANNED_CONVERSION` | Receiver contract retained | Implement form, validation, consent, error/success and grade/source/type prefill | Submission and delivery path verified; otherwise CTA suppressed/release blocked where required |
| RFQ | `PLANNED_CONVERSION` | Fixed Global Chrome/action contract retained | Implement standalone form and prefill; optional domain field | All fixed RFQ surfaces resolve and submit correctly; no Contact fallback |
| Request Sample | `PLANNED_CONVERSION` | Receiver contract retained | Implement form and grade/source prefill | Submission path verified; no free/sample-time promise |
| Process pages | Approved architecture, runtime readiness unproven | Route keys retained | Implement/verify independently | Link only after functional destination check |
| Markets EU/UK/India/Brazil | Approved architecture, runtime readiness unproven | Route keys retained | Implement/verify independently | Cards render only for functional approved routes |
| Documents information pages | Planned/provisional evidence gates | Route keys retained | Implement/verify independently | No dead link or unsupported compliance/document claim |

Route incompleteness does not prevent Gate 6 review or later Gate 7 package creation. At Gate 8 and Gate 9 it is enforced through fail-closed rendering and release blocking, not through a Contact, placeholder or cross-scope fallback.

## 10. Responsive and accessibility acceptance

| Area | Acceptance contract |
|---|---|
| Breakpoint behavior | Desktop, tablet, 430px, 390px, narrow mobile and 200% zoom preserve reading order and meaning |
| Overflow | No horizontal page overflow; long grade names, values, units and CTA labels wrap safely |
| Touch/target size | Interactive targets at least 44 × 44px |
| Header semantics | One active accessible navigation surface; one current link for mapped Grade routes; hidden surface not focusable |
| Heading structure | One H1; logical H2/H3 order after conditional module removal |
| Technical data | Desktop table and mobile rows preserve Property–Standard–Typical relationships without clipping or meaning loss |
| Cards | Applications, Evaluation and Related Grades reflow without changing semantic order or suggesting ranking |
| Focus | Visible focus indicators; keyboard order follows the reading order |
| Contrast | Text, links, buttons, borders and states meet approved accessible contrast requirements |
| Images | Correct aspect ratio, accurate ALT/empty ALT and no misleading crop |
| Motion | Non-essential motion respects reduced-motion preference |
| Forms | Labels, instructions, field-level errors, consent, autofill and screen-reader names are complete at receiver pages |
| Conditional modules | Removed modules leave no empty heading, gap, anchor, navigation item or accessible hidden content |

Gate 5 evidence already confirms 1440px, 390px and 430px no-overflow behavior and minimum 44px controls for the M-350 example. Gate 8 must implement the shared behavior; Gate 9 must independently inspect the rendered result.

## 11. Gate 6 issue disposition

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| G6-01 | Important | V1.0 M-2377 clauses are historical | Resolved through PRODUCT V0.3 precedence; old files retained |
| G6-02 | Important | V1.0 M-350 example is older than the approved V0.5 visual/content example | Resolved through Gate 5 precedence; V1.0 remains template history |
| G6-03 | Important | Product-detail V0.2 chrome shows obsolete visible labels/assets | Resolved through current Global Chrome Addendum V0.5 |
| G6-04 | Deferred | Conversion/Application receivers are not runtime-ready | Gate 8 implementation + Gate 9 fail-closed/release acceptance |
| G6-05 | Deferred | Thirteen non-M-350 final bodies and individual TDS sets are not approved | Per-grade evidence/content work; do not copy M-350 |

No unresolved finding prevents submission of this Gate 6 package. Project control must decide Gate 6; this document does not self-approve it.

## 12. Hard stop

`PRODUCT-DETAIL-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

The user authorized Gate 7 specification preparation on 2026-09-01. Do not start Grade/Process implementation, write code, run implementation tests, mark `HANDED_OFF`, authorize Gate 8, deploy, publish or access `D:\16Wordpress_nextjs` from this review.
