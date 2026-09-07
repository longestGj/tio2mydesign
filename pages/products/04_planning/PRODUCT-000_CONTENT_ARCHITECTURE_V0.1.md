# PRODUCT-000 Content Architecture V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page name | Titanium Dioxide Products |
| Page URL | `/products/` |
| Gate | Gate 2 — Content Architecture |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_GATE_2_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Governing Playbook | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` — `APPROVED_FOR_DESIGN` |
| Governing Brief | `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.1.md` — `DESIGN_IN_REVIEW` |
| Gate 1 evidence | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.1.md` |
| Route audit | `pages/products/02_analysis/PRODUCT-000_ROUTE_AUDIT_V0.1.md` |
| Excluded | Wireframe, visual design, code, CMS, testing, deployment and publishing |
| Approval record | 2026-08-29: project-control re-review PASS; user approved Gate 2 Content Architecture V0.1 and authorized Gate 3 only |

This document is the approved content, evidence and conditional-state baseline for Gate 3 wireframing. It does not approve Gate 3 output, Gate 4/5 visual work, development handoff or public release.

## 1. Page Narrative

The page uses three procurement paths in this order:

1. Start with the intended application and show only grades permitted by the Gate 1 relationship audit.
2. Use a process route when production-process classification is part of the buyer's specification.
3. Browse all 14 stable Grade pages when the buyer already knows a model or no selector result is available.

The page then explains how to evaluate a grade, routes buyers to the appropriate site owner for Applications, Documents and Markets, answers evidence-bounded questions, and ends with a standalone RFQ action.

The page never ranks grades, invents a product match, compares M-996 with M-2196, assigns M-2377 to an application/process, or claims manufacturing, origin, document availability, inventory, pricing or delivery performance.

## 2. SEO Copy Lock Candidates and Route Modes

| Field | Gate 2 candidate | Character count / rule | Render condition / evidence boundary |
|---|---|---|---|
| Title | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` | 47 characters | Generic Product Hub intent only |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` | 59 characters; one H1 | Does not claim suitability for every application |
| Full Meta Description | `Explore 14 titanium dioxide pigment grades by application, process, or model, then review product details or request a quote from TiO2 Malaysia.` | 144 characters | Render only when `FULL_ROUTE_COPY=true`; no supply or performance claim |
| Route-safe Meta Description | `Browse 14 titanium dioxide pigment grades and review model pages for product details and technical evaluation with TiO2 Malaysia.` | 129 characters | Render whenever `FULL_ROUTE_COPY=false`; does not claim a Process or RFQ path |
| Canonical | `https://tio2malaysia.com/products/` | Self-referencing | Approved page identity |
| Robots | `index,follow` | Reconfirm before release | Selector states do not create indexable URLs |
| Hreflang | `NOT_APPLICABLE` | Current EN-only page | Revisit only after approved localization architecture |

Route-mode definitions are inherited from the Route Audit:

- `PROCESS_AVAILABLE=true` when at least one Process Page ID is approved and verified live.
- `RFQ_AVAILABLE=true` only when `CONV-RFQ` is approved and verified live.
- `RFQ_FALLBACK_AVAILABLE=true` only when project control separately approves an exact alternative action, destination and buyer-facing copy. V0.1 has no approved fallback. A fallback does not authorize `Request a Quote` wording or full-route metadata.
- `FULL_ROUTE_COPY=true` only when both `PROCESS_AVAILABLE=true` and `RFQ_AVAILABLE=true`.
- Title and H1 are route-safe and unconditional. The full Meta and full Hero intro render only in full mode; all other states use their route-safe variants.

Primary keyword: `titanium dioxide pigment`.

The Title, H1 and opening copy must not make `chloride process titanium dioxide`, `sulfate process titanium dioxide`, exact grade terms, generic application terms or country-supplier terms the primary target.

## 3. Module Sequence and Copy Contract

| Order | Module ID | Content job | Evidence ID / Claim | Route dependency |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | Global navigation and conditional RFQ entry | IA-001 / CL-009 | RFQ item requires `RFQ_AVAILABLE=true` |
| 1 | BREADCRUMB | Home > Products | IA-002 / CL-010 | Home route |
| 2 | HERO | Identify the product-selection task | SEO-001 / CL-011 | Local selector anchor; `CONV-RFQ` conditional |
| 3 | GRADE_SELECTOR | Show permitted application results | TECH-MAP / CL-004 | Grade routes; conditional RFQ/Application routes |
| 4 | PROCESS_ROUTES | Route process-led buyers | PROC-001 / CL-003 | `PRODUCT-PROC-CL`, `PRODUCT-PROC-SU` conditional |
| 5 | ALL_GRADES | Provide the complete 14-grade directory | PRODUCT-LIST / CL-017 | 14 approved Grade routes |
| 6 | EVALUATION_GUIDE | Explain procurement evaluation steps | GUIDE-001 / CL-012 | Optional live owner routes |
| 7 | SUPPORT_PATHS | Route Applications, Documents and Markets questions | ROUTE-001 / CL-013 | `APP-000`, `DOC-000`, `MARKET-000` conditional |
| 8 | BUYER_QUESTIONS | Supply concise GEO answer blocks | GEO-001 / CL-014 | Local directory anchor; conditional owner routes |
| 9 | FINAL_RFQ | Send qualified context to standalone RFQ | CONV-001 / CL-015 | Entire module requires `RFQ_AVAILABLE=true` |
| 10 | GLOBAL_FOOTER | Approved navigation and entity close | IA-003 / CL-016 | Only registered/live destinations |

## 4. Global Header and Breadcrumb

### GLOBAL_HEADER

Use the approved navigation order as the complete-state contract:

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

Products is the current section. Home remains a visible text link. The RFQ action resolves from `CONV-RFQ`; it does not hard-code a planned path and is absent when `RFQ_AVAILABLE=false`.

### BREADCRUMB

Visible text:

`Home > Products`

The visible breadcrumb and `BreadcrumbList` must match.

## 5. Hero Copy

| Element | English copy candidate | Evidence / behavior |
|---|---|---|
| Eyebrow | `Titanium Dioxide Products` | Page-family label; not a second H1 |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` | SEO candidate |
| Full intro | `Explore 14 titanium dioxide pigment grades by application, production process, or model. Use the guided paths to identify product pages for further technical evaluation.` | Render only when `FULL_ROUTE_COPY=true`; describes navigation, not product performance |
| Route-safe intro | `Explore 14 titanium dioxide pigment grades and open model pages for further technical evaluation.` | Render whenever `FULL_ROUTE_COPY=false`; does not promise Process or RFQ access |
| Qualification note | `A grade listing is an evaluation starting point, not a guarantee of suitability for a formulation or destination.` | Required evidence boundary |
| Primary CTA | `Find the Right Grade` | Local link to `#grade-selector` |
| Secondary CTA | `Request a Quote` | `CONV-RFQ`; render only when route is approved and live |

The Hero contains no Malaysia-origin, manufacturing, certification, stock, capacity, price, MOQ, delivery or document-availability statement. When `RFQ_AVAILABLE=false`, the secondary CTA and any RFQ-dependent sentence are absent; hiding only the button is not permitted.

## 6. Guided Grade Selector

### 6.1 Section introduction

| Element | English copy candidate |
|---|---|
| Kicker | `Application-first selection` |
| H2 | `Start with Your Application` |
| Intro | `Choose the closest application to see currently listed grades for technical evaluation. A listed result is a starting point for evaluation, not a guarantee of suitability.` |
| Step label | `Step 1 — Select an application` |
| Result label | `Step 2 — Grades to Review` |

Selector options:

- Coatings
- Plastics
- Masterbatch
- Printing Inks
- Paper
- Specialty Materials
- Not Sure

Options are buyer inputs, not application claims about every grade.

### 6.2 Default state

Public copy:

`Select an application to view available evaluation paths.`

No grade appears before a selection.

### 6.3 Coatings result

Result count: 1.

| Field | Public copy |
|---|---|
| Grade | `M-350` |
| Application direction | `Coatings` |
| Process | `Chloride process` |
| Note | `Review M-350 against your formulation and performance requirements.` |
| CTA | `View M-350` |

Evidence: SEL-COAT-M350 in the Gate 1 audit. The card does not say best, recommended, equivalent, proven, available or compliant.

### 6.4 Printing Inks result

Result count: 1.

| Field | Public copy |
|---|---|
| Grade | `M-350` |
| Application direction | `Printing Inks` |
| Process | `Chloride process` |
| Note | `Review M-350 against your formulation and performance requirements.` |
| CTA | `View M-350` |

Evidence: SEL-INK-M350 in the Gate 1 audit.

### 6.5 No-listed-grade state

Used for Plastics, Masterbatch, Paper and Specialty Materials until a product-level relationship is approved.

Public copy:

Base copy, always visible:

`No grade is listed for this application. Browse all grades to continue your product review.`

Optional sentence only when `RFQ_AVAILABLE=true`:

`You can also share your requirements for technical review.`

Actions:

- `View All Grades` — local link to ALL_GRADES.
- `Request a Quote` — render only when `RFQ_AVAILABLE=true`; otherwise the optional sentence and CTA are both absent.
- A specific Application link may appear only after that Page ID is approved and live.

The state must not expose `pending_verification`, `restricted`, review-owner names, evidence IDs or internal workflow language.

### 6.6 Not Sure state

Public copy:

Base copy, always visible:

`Start with the full grade directory and open model pages for further technical evaluation.`

Optional sentence only when `RFQ_AVAILABLE=true`:

`You can also share your formulation, process, destination and document requirements for review.`

The local directory action always remains. The RFQ sentence and CTA render together only when `RFQ_AVAILABLE=true`.

### 6.7 Interaction failure / no-script state

Public copy:

`The guided selector is unavailable. Use the full grade directory below.`

All 14 Grade links and any independently live owner routes remain available without the selector.

### 6.8 Selector exclusions

- M-2377 never appears in a Selector result.
- M-996 and M-2196 never receive a difference, order or comparison reason.
- No PRD-only candidate is returned.
- No candidate result is prefilled as the buyer's selected grade.
- Selector state does not change the canonical or create an indexable URL.

## 7. Process Routes

| Element | English copy candidate |
|---|---|
| Kicker | `Process-led navigation` |
| H2 | `Browse by Production Process` |
| Intro | `Use these routes when a production-process classification is part of your sourcing specification. Process classification does not determine application fit on its own.` |

### Chloride card

- Title: `Chloride Process Titanium Dioxide`
- Body: `Browse grades classified under the chloride process and continue to the relevant product pages.`
- CTA: `Explore Chloride Grades`
- Route key: `PRODUCT-PROC-CL`

### Sulfate card

- Title: `Sulfate Process Titanium Dioxide`
- Body: `Browse grades classified under the sulfate process and continue to the relevant product pages.`
- CTA: `Explore Sulfate Grades`
- Route key: `PRODUCT-PROC-SU`

Each Process card is atomic: its title, body and CTA render together only after that Page ID resolves to an approved live route. If one route is live, render one complete card; if neither is live, do not render the heading, intro or any part of `PROCESS_ROUTES`. A content-only card is forbidden. The module does not compare process performance, cost, quality or general superiority. M-2377 and CR-901 are not forced into either route.

## 8. All 14 Grades

| Element | English copy candidate |
|---|---|
| Kicker | `Complete product directory` |
| H2 | `Browse All 14 Titanium Dioxide Grades` |
| Intro | `Already know the model? Open its product page directly. Portfolio sections are navigation aids, not suitability rankings.` |

Public directory groups:

### Coatings Grades — 6

- M-350 — `/products/m-350/`
- M-510 — `/products/m-510/`
- M-896 — `/products/m-896/`
- M-996 — `/products/m-996/`
- M-2196 — `/products/m-2196/`
- M-895 — `/products/m-895/`

### Plastics & Masterbatch Grades — 5

- M-200 — `/products/m-200/`
- M-108 — `/products/m-108/`
- M-210 — `/products/m-210/`
- M-340 — `/products/m-340/`
- M-886 — `/products/m-886/`

### Additional Grades — 2

- M-52 — `/products/m-52/`
- M-2377 — `/products/m-2377/`

### Specialty Grade — 1

- CR-901 — `/products/cr-901/`

Directory-card copy is limited to the exact grade name and `View Grade`. The group labels reflect the approved portfolio navigation architecture and do not independently authorize Selector results or suitability statements.

M-2377 public behavior is fixed: display only `M-2377` and its approved URL. Do not display application, process, recommendation, difference, internal status, badge, explanatory qualifier or empty metadata label.

M-996 and M-2196 are separate neutral links. Do not display or imply a difference between them.

## 9. Evaluation Guide

| Element | English copy candidate |
|---|---|
| Kicker | `Procurement checklist` |
| H2 | `How to Evaluate a Titanium Dioxide Grade` |
| Intro | `Use the product page and applicable technical information to check the following areas before qualification.` |

### Step 1 — Define the application

`Record the resin or material system, end use, processing conditions and performance targets that the grade must be evaluated against.`

### Step 2 — Confirm whether process matters

`Identify whether chloride or sulfate process classification is a required sourcing parameter. Process classification does not replace application testing.`

### Step 3 — Review applicable technical data

`Compare the product information supplied for the grade you are evaluating. Do not infer missing values from another grade or an older source.`

### Step 4 — Identify destination and document needs

`State the destination market and the technical, quality, compliance or origin documents you need. Scope and availability must be confirmed for the applicable request.`

### Step 5 — Validate in the buyer's system

`Confirm the candidate through the buyer's own formulation, processing and qualification process before making a purchase decision.`

Optional CTAs use `APP-000` and `DOC-000` only after route approval and live verification.

## 10. Procurement Support Paths

| Element | English copy candidate |
|---|---|
| Kicker | `Continue the review` |
| H2 | `Continue Your Procurement Review` |

### Applications

- Title: `Review by Application`
- Body: `Review selection factors by end use and continue to listed product evaluation paths.`
- CTA: `Explore Applications`
- Route key: `APP-000`

### Documents

- Title: `Identify Required Documents`
- Body: `Identify the technical, quality, compliance or origin document you need. Scope and availability are confirmed for the applicable request.`
- CTA: `Explore Documents`
- Route key: `DOC-000`

### Markets

- Title: `Review Destination Context`
- Body: `Review destination-market procurement context without assuming local availability, registration or regulatory acceptance for a grade.`
- CTA: `Explore Markets`
- Route key: `MARKET-000`

Each card renders only when its destination is approved and live. If none is live, the entire module is absent. No provisional path appears in public content or Schema.

## 11. Buyer Questions and GEO Answer Blocks

These are visible answer blocks, not automatic `FAQPage` or `QAPage` markup.

### BQ-01 — How do I choose a titanium dioxide pigment grade?

`Start with the intended application, then use process classification if it is a required sourcing parameter. Open the grade page to review the available product information and confirm fit against your formulation, processing conditions, destination and document needs. A directory listing is not a suitability guarantee.`

Evidence: GUIDE-001 / CL-012. No model recommendation is embedded in the answer.

### BQ-02 — Which grades are listed in this product center?

`The product center links to 14 grade pages: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.`

Evidence: PRODUCT-LIST / CL-017. M-2377 receives no additional descriptor.

### BQ-03 — What is the difference between application and process selection?

`Application selection starts with the intended end use. Process selection organizes grades by chloride or sulfate classification. They answer different procurement questions, and neither replaces formulation testing or review of the applicable product information.`

Evidence: page architecture and process contract. No process superiority claim.

### BQ-04 — What if no grade is shown for my application?

Base copy, always visible:

`If no grade appears, browse the full grade directory and review the relevant model pages. Do not treat an application category alone as a product recommendation.`

Optional sentence only when `RFQ_AVAILABLE=true`:

`You can also share your application requirements through Request a Quote.`

Evidence: Gate 1 relationship audit. No unavailable route or internal route state is mentioned to the buyer.

### BQ-05 — Does a listed grade guarantee suitability?

`No. A listed grade is a candidate for technical evaluation. The buyer should confirm product information, formulation fit, processing conditions, destination requirements and any required documents before qualification.`

Evidence: Selector qualification boundary. No supply or testing-service guarantee.

## 12. Final RFQ

| Element | English copy candidate |
|---|---|
| Kicker | `Share your requirements` |
| H2 | `Request a Quote for Your Requirements` |
| Body | `Share the application, destination, estimated quantity and any grade you are reviewing. The RFQ page may carry only the application or grade you explicitly selected.` |
| Qualification note | `Submitting a request starts a review. It does not confirm price, availability, documents, sample approval or delivery timing.` |
| CTA | `Request a Quote` |
| Route key | `CONV-RFQ` |

Prefill contract:

- Always: `source_page=PRODUCT-000`.
- Application: only the option the buyer selected.
- Grade: only after the buyer explicitly selects/confirms a grade; never from an automatically displayed result.

The entire module—including kicker, H2, body, qualification note and CTA—renders only when `RFQ_AVAILABLE=true`. If RFQ is unavailable, the module is absent. A separately approved fallback may render only in the exact surface and wording stated by that approval; it does not reuse this RFQ module. Hiding only the CTA is forbidden. No RFQ form is embedded on PRODUCT-000.

## 13. GEO Entity and Answer Contract

### 13.1 Visible entity relationships

- TiO2 Malaysia → PRODUCT-000 product collection.
- PRODUCT-000 → 14 exact Grade Page identities.
- PRODUCT-000 → two Process Page identities, linked only when live.
- PRODUCT-000 → M-350 application relationships for Coatings and Printing Inks only in Gate 1 V0.1.
- PRODUCT-000 → Applications, Documents, Markets and RFQ owner pages through conditional route keys.

### 13.2 Claim boundaries

GEO content may state:

- the product center contains 14 grade links;
- how to navigate by application, process or model;
- that M-350 appears as an evaluation result for Coatings and Printing Inks;
- that no result means the buyer should continue through the full directory without inferring a recommendation;
- how to continue to a grade page, and to RFQ only when that route is available.

GEO content may not state:

- that any grade is best, equivalent, guaranteed or suitable without qualification;
- a difference between M-996 and M-2196;
- any M-2377 application or process;
- Malaysia manufacturing/origin/traceability for a grade;
- document, compliance, stock, capacity, MOQ, price, packaging, shipping or delivery availability.

## 14. Schema and Machine-readable Content

Planned page-level types:

- `CollectionPage`
- `ItemList`
- `BreadcrumbList`

Rules:

1. `ItemList` contains the same 14 grade names and approved URLs visible in ALL_GRADES.
2. M-2377 has only its name and URL in the list; no application/process metadata.
3. Selector state is not represented as an indexable page, Offer, rating, review or Product recommendation.
4. PRODUCT-000 does not emit 14 Product rich-result blocks.
5. Buyer Questions do not emit `FAQPage` or `QAPage` by default.
6. Conditional owner links are absent from machine-readable content until their routes are approved and live.
7. All data is scoped to `site_scope=tio2-my`; no cross-scope fallback is allowed.

## 15. Content-state Matrix

| State | Visible content | Forbidden output |
|---|---|---|
| Selector default | Instructions and seven options | Default grade recommendation |
| Coatings selected | M-350 neutral result | Other PRD-only grades, ranking or guarantee |
| Printing Inks selected | M-350 neutral result | M-52 until evidence approval; ranking or guarantee |
| Plastics/Masterbatch/Paper/Specialty selected | Honest no-public-relation copy | Inferred grade result |
| Not Sure | Guidance to directory and conditional RFQ | Automatic grade choice |
| Selector unavailable | Direct directory fallback | Broken empty panel |
| M-2377 directory entry | `M-2377` + approved URL | Internal status, process, application, recommendation, difference or empty label |
| M-996/M-2196 directory entries | Names + approved URLs | Difference, ordering rationale or comparison |
| Both Process routes available | Two complete Process cards, each with CTA | Content-only cards or missing CTA |
| One Process route available | One complete Process card, with CTA | Card for unavailable route or content-only card |
| No Process route available | Entire `PROCESS_ROUTES` module absent | Stranded heading, intro, card body or process CTA |
| RFQ available | RFQ navigation/CTA and dependent sentences may render | Prefill inferred from an automatic result |
| RFQ unavailable; no fallback approved | Local directory and independently live routes only; Final RFQ absent | RFQ CTA, Final RFQ content or sentence promising the buyer can share requirements through RFQ |
| RFQ unavailable; exact fallback approved | Only the specifically approved fallback action, destination and copy | Reusing `Request a Quote`, the Final RFQ module or full-route metadata |
| `FULL_ROUTE_COPY=true` | Full Hero intro and full Meta candidate | Route-safe copy substituted while claiming full mode |
| `FULL_ROUTE_COPY=false` | Route-safe Hero intro and route-safe Meta candidate | Any claim to browse by process or request a quote |
| Other owner route unavailable | Suppress that complete route card or CTA as specified | Dead link, provisional hard-coded path, cross-scope fallback |
| Media unavailable | Content remains complete without image | Unverified product/factory image or layout gap |

## 16. Gate 2 Acceptance Checklist

- [x] Page sequence follows the approved Brief.
- [x] Title and H1 are route-safe; full and fallback Meta/Hero variants have deterministic render conditions.
- [x] Every module has English copy direction and an evidence boundary.
- [x] Selector has default, two verified result states, four no-result states, Not Sure and unavailable states.
- [x] Only M-350 appears in public Selector results.
- [x] Process copy does not compare or rank processes.
- [x] Each Process card renders only as a complete title/body/CTA unit when its route is approved and live; the entire module is absent when neither route is available.
- [x] All 14 approved Grade names and URLs are present.
- [x] M-2377 behavior is name and URL only.
- [x] M-996/M-2196 difference does not render.
- [x] Support and RFQ targets use Page ID/route key and conditional live behavior.
- [x] When RFQ is unavailable, every RFQ CTA, Final RFQ module and dependent action sentence is absent unless a specific fallback is separately approved.
- [x] Content-state Matrix defines Process 2/1/0 states, RFQ available/unavailable states and full/route-safe metadata states.
- [x] GEO answers are visible, concise and evidence bounded.
- [x] Schema mirrors visible content and creates no unsupported Product/FAQ claims.
- [x] No manufacturing, origin, document availability, stock, price or delivery claim is present.
- [x] No wireframe dimensions, visual composition or implementation code was created.

## 17. Open Gate Items

| Review ID | Level | Issue | Gate 2 behavior | Status |
|---|---|---|---|---|
| R-002 | IMPORTANT | Most application-to-grade relationships lack current public technical evidence | Only two M-350 relations render; all others stay absent | OPEN |
| R-003 | IMPORTANT | Owner and RFQ routes are not verified live; Application URLs are provisional | Use Page ID/route key and conditional render | OPEN |
| R-004 | IMPORTANT | M-2377 facts and M-996/M-2196 difference remain frozen | Frozen fields remain absent; neutral directory links remain | OPEN |
| G12-01 | IMPORTANT | Buyer-facing copy exposed internal evidence/approval/publication language | Rewritten as natural procurement guidance; Evidence IDs and statuses remain only in non-public annotations | CLOSED |
| G12-02 | IMPORTANT | Route-unavailable content and metadata degradation was not deterministic | Atomic Process cards/modules, RFQ-dependent sentence suppression and full/route-safe Hero/Meta modes added | CLOSED |

These open items do not block review of the content architecture. They remain hard gates for the affected public output and final handoff.

## 18. Next Gate

Gate 3 wireframing preserved this approved page identity, copy, evidence boundaries and route controls, passed project-control review and received user approval on 2026-08-29. Gate 4 visual-direction work is authorized. Gate 5 full visual design remains unauthorized until Gate 4 receives separate project-control and user approval.

## 19. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial complete PRODUCT-000 Gate 2 content architecture and English copy deck | Draft for project-control review |
| V0.1 review revision | 2026-08-29 | Resolved G12-01 buyer-language leakage and G12-02 route-safe Process/RFQ/metadata state ambiguity; Gate 2 remains unapproved and Gate 3 unstarted | Draft for Gate 2 project-control re-review |
| V0.1 approval record | 2026-08-29 | Project-control re-review PASS and user approval; G12-01/G12-02 closed; Gate 3 authorized; R-002/R-003/R-004 remain open hard gates | Approved Gate 2 baseline for Gate 3 only |
| V0.1 downstream gate record | 2026-08-29 | Gate 3 approved; Gate 4 visual-direction work authorized; Gate 5 not authorized; evidence and route gates unchanged | Gate 2 baseline remains approved |
