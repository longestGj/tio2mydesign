# RES-PROC Gate 2 SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` |
| Date | 2026-09-05 |
| Gate | Gate 2 — Step 1 |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Content authority | `RES-PROC_GATE2_CONTENT_ARCHITECTURE_V0.1.md` |
| Mapping | `APPROVED_USER_GATE_0_1 / QUALITATIVE_KEYWORD_EVIDENCE` |
| Public/index state | Not authorized |

## 1. SEO Identity

| Field | Gate 2 candidate |
|---|---|
| Primary keyword | `chloride vs sulfate titanium dioxide` |
| Secondary topics | high opacity; high hiding power; weather resistance; blue undertone — evaluation questions only |
| Search intent | Informational / Awareness–Technical Evaluation |
| H1 | `Chloride vs Sulfate Titanium Dioxide: A Buyer’s Evaluation Guide` |
| Title | `Chloride vs Sulfate Titanium Dioxide | Buyer Guide` |
| Meta description | `Compare chloride and sulfate titanium dioxide routes, learn what route labels can indicate, and identify the grade-level evidence buyers still need to check.` |
| Slug | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Canonical | `https://tio2malaysia.com/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Language | `en` |
| Hreflang | Not applicable under current page identity |
| Future robots intent | `index, follow` only after content, route, public eligibility and Gate 10 authorization |

No synonym or secondary phrase may be used to create a route-wide performance promise.

## 2. Heading and Intent Contract

| Level | Candidate heading | Intent role |
|---|---|---|
| H1 | Chloride vs Sulfate Titanium Dioxide: A Buyer’s Evaluation Guide | Own exact comparison/research intent |
| H2 | How the Chloride and Sulfate Routes Differ | Define route mechanics without taking single-process commercial intent |
| H2 | What the Route Can Indicate—and What the Label Cannot Prove Alone | State the controlling evidence boundary |
| H2 | Which Grade-Level Evidence Should Buyers Compare? | Convert performance queries into evaluation methodology |
| H2 | Can Both Routes Serve the Same Application Family? | Establish sourced overlap, not equivalence |
| H2 | A Five-Step Route-to-Grade Qualification Workflow | Provide actionable technical/procurement sequence |
| H2 | Buyer Questions | Resolve residual comparison questions |
| H2 | Sources and Review Basis | Establish source accountability |
| H2 | Continue Your Product Evaluation | Transfer the buyer to the Product owner |

Single-process phrases may appear in definitions and link labels. They must not become duplicate H1/Title targets for PRODUCT-PROC-CL or PRODUCT-PROC-SU.

## 3. Cannibalization Controls

| Protected owner | Protected target | RES-PROC behavior |
|---|---|---|
| PRODUCT-PROC-CL | `chloride process titanium dioxide` commercial/technical selection | Concise definition and conditional link only |
| PRODUCT-PROC-SU | `sulfate process titanium dioxide` / `sulphate process titanium dioxide` | Concise definition and conditional link only |
| PRODUCT-000 | Generic product selection | Receives primary CTA; RES-PROC has no catalogue/filter |
| GRADE-* | Exact grade performance and specification | No exact-grade target or TiO2 Malaysia spec claim |
| APP-* | Application selection | Application appears as evaluation/overlap context only |
| RES-CHEMOURS / RES-R706 | Alternative/equivalent research | No replacement or equivalence content |

## 4. GEO Answer Blocks

Every answer block must be visible, context-complete and consistent with the long-form copy.

### GEO-A1 — Direct answer

Use the exact three-sentence direct answer from the content architecture. It must include both halves of the control: possible route influence and label-only insufficiency.

### GEO-A2 — Chloride definition

Direction: a concise description of chlorination to TiCl4, purification and oxidation to TiO2, followed by finishing/treatment. No performance rank.

### GEO-A3 — Sulfate definition

Direction: a concise description of acid digestion/dissolution, titanyl sulfate, hydrolysis and calcination to TiO2, followed by finishing/treatment. No “old”, “cheap” or “inferior” characterization.

### GEO-A4 — Evidence-limit answer

Direction: route can indicate formation context; the label alone cannot establish grade-level optical, colour, durability, dispersion, processing, regulatory or equivalence conclusions.

### GEO-A5 — Qualification checklist

Direction: five numbered steps with an independent subject and outcome. Do not return an automatic grade/process recommendation.

### GEO-A6 — Application-overlap answer

Direction: both routes can serve overlapping application families; cited examples prove existence, not equivalence.

## 5. Entity and Relationship Contract

| Subject | Relation | Object | Public condition |
|---|---|---|---|
| RES-PROC article | discusses | Chloride process | Visible definition and source present |
| RES-PROC article | discusses | Sulfate process | Visible definition and source present |
| Chloride process | production route for | Pigmentary titanium dioxide | Only high-level sourced relation |
| Sulfate process | production route for | Pigmentary titanium dioxide | Only high-level sourced relation |
| RES-PROC article | isPartOf | TiO2 Malaysia Resources | Route and breadcrumb eligible |
| RES-PROC article | may link to | PRODUCT-000 | Same-scope route live |
| RES-PROC article | may link to | PRODUCT-PROC-CL / PRODUCT-PROC-SU | Each target independently approved/live |

No relationship states that either process causes a specific grade performance outcome. No hidden relation connects competitor examples to TiO2 Malaysia grades.

## 6. Schema Contract

### 6.1 Allowed after all conditions pass

- `WebPage` or the approved site-level page identity pattern.
- `Article`, only when real visible author/publisher and publication/modified/review fields exist.
- `BreadcrumbList`, only when the same breadcrumb is visible and every route resolves.

### 6.2 FAQ decision

Visible Buyer Questions are approved as a content candidate, but `FAQPage` Schema is `OFF` for Gate 2. It may not be emitted merely because Q&A content exists.

### 6.3 Prohibited

- `Product`, `Offer`, `Review`, `AggregateRating`;
- `HowTo` for the qualification workflow;
- hidden performance relationships;
- fake dates, author, reviewer or publisher;
- competitor-to-TiO2-Malaysia equivalence;
- environmental ratings or process rankings;
- route or product availability claims absent from visible approved copy.

## 7. Article Metadata Requirements

Before `Article` becomes eligible, all of the following must be real and visible or consistently represented through an approved pattern:

- headline;
- author/editor identity and role;
- publisher identity;
- `datePublished`;
- `dateModified` or a visible last-reviewed date;
- canonical URL;
- source/review basis;
- image only if an approved representative asset exists.

Missing fields must be omitted or the Article object suppressed according to the later implementation contract. Placeholder dates/people are prohibited.

## 8. Source and Citation Contract

- Official sources support process definitions and crystal-form/process scope.
- Manufacturer sources support only the named producer/grade examples.
- Source links appear near the relevant content or in a clearly mapped source module.
- A source list cannot be used to imply support for claims absent from that source.
- Public sources must not expose internal governance paths.
- Publication and review dates are distinct fields.

## 9. Internal-link Contract

| Target | Candidate anchor | Condition |
|---|---|---|
| PRODUCT-000 | `Compare Titanium Dioxide Products` | Primary final CTA; same-scope route live |
| PRODUCT-PROC-CL | `Explore Chloride-Process Titanium Dioxide` | Approved/live target and non-duplicative context |
| PRODUCT-PROC-SU | `Explore Sulfate-Process Titanium Dioxide` | Approved/live target and non-duplicative context |
| RES-000 | `Resources` | Visible breadcrumb/back relation |

No exact grade, market or application is preselected. No cross-site fallback is allowed.

## 10. Social Metadata Direction

| Field | Direction |
|---|---|
| OG title | Same intent as SEO Title; no “best process” promise |
| OG description | Same evidence-limit message as Meta description |
| OG type | `article` only when Article metadata is eligible; otherwise approved site pattern |
| OG image | Conditional on later approved asset; no process winner, factory, certification or performance badge |
| Image alt | Describe the actual diagram/visual, not SEO keywords or unsupported conclusions |

## 11. Freshness and Change Triggers

- Maximum content review interval: 180 days after publication.
- Immediate review on source withdrawal, official process-document replacement, product-matrix change, Process route change, new public grade relation, or change to the controlling thesis.
- Route chemistry may rely on dated authoritative sources with dates shown; current market share, costs, capacity and environmental performance remain excluded.

## 12. Gate 2 Step-1 Result

`RES-PROC-G2-SKELETON-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

This contract is ready for user review. It does not authorize full copy, Article emission, public inventory, route implementation, publication or indexing.

