# HOME-001 Gate 7 Acceptance and Release-Blocker Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `HOME-001-G7-HANDOFF-01` |
| Status | `GATE7_HANDOFF_PACKAGE_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| User Gate 7 authorisation | 2026-08-31 |
| Scope | External-development acceptance requirements and unresolved boundaries |
| Implementation status | Not started |
| Release status | Not authorised |

Checks below are result requirements for the external development project and later read-only QA. They are not tests implemented by this planning task.

## 1. Acceptance matrix

### 1.1 Page identity and isolation

| ID | Requirement | Acceptance evidence expected from external development | Failure severity |
|---|---|---|---|
| HOME-G7-ID-01 | `/` resolves HOME-001 for `site_scope=tio2-my` | Route/page response and scoped content record | Blocking |
| HOME-G7-ID-02 | No other site scope is read as fallback | Query/log or fixture evidence covering missing Malaysia data | Blocking |
| HOME-G7-ID-03 | Menu, SEO, Schema, media, form and route caches include scope | External architecture/test evidence | Blocking |
| HOME-G7-ID-04 | No TIOVAR/frozen-site content, Logo, links or settings leak into Home | Rendered-page and data-source audit | Blocking |
| HOME-G7-ID-05 | Missing scoped content fails closed without buyer-facing internal labels | Empty/error-state evidence | Blocking |

### 1.2 Content and layout

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-CONT-01 | Buyer copy equals the handoff package | Normalised visible-text comparison | Blocking |
| HOME-G7-CONT-02 | One exact H1 | DOM/HTML inspection | Blocking |
| HOME-G7-CONT-03 | Module order matches Desktop/Tablet and Mobile contracts | 1440/1024/768/390 screenshots and DOM order | Blocking |
| HOME-G7-CONT-04 | Desktop/Tablet page RFQ renders; Mobile page RFQ does not | Breakpoint/state evidence | Blocking |
| HOME-G7-CONT-05 | No Sample CTA exists | Visible-text/link scan | Blocking |
| HOME-G7-CONT-06 | No internal page IDs, pending, evidence or release labels reach Buyer Clean | Visible-text/HTML scan | Blocking |
| HOME-G7-CONT-07 | Long company name and complete approved copy wrap without clipping | 1440/1024/768/390 and zoom evidence | Important |
| HOME-G7-CONT-08 | No content is shortened to satisfy fixed heights | Copy comparison and layout evidence | Blocking |

### 1.3 Products and evidence boundaries

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-PROD-01 | Four groups and counts are exactly 6/5/2/1 | Data/render audit | Blocking |
| HOME-G7-PROD-02 | All 14 IDs are present once; no omissions/duplicates | Data/DOM audit | Blocking |
| HOME-G7-PROD-03 | Desktop exposes all IDs; Mobile default is collapsed with accessible discovery | Desktop/Mobile state evidence | Blocking |
| HOME-G7-PROD-04 | M-2377 remains neutral; Specialty `NO_PUBLIC_MAPPING` is absent | Content/Schema scan | Blocking |
| HOME-G7-PROD-05 | No M-996/M-2196 comparison, ranking, equivalence or replacement claim | Visible/structured-data scan | Blocking |
| HOME-G7-PROD-06 | No factory, capacity, stock, certification, origin or file-availability implication is generated | Content/media/Schema audit | Blocking |

### 1.4 CTA, routes and form boundary

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-CTA-01 | Header, Hero, Mobile Menu and Footer RFQ remain visible | Required state screenshots and DOM scan | Blocking |
| HOME-G7-CTA-02 | Desktop page RFQ targets `/request-a-quote/`; Mobile has no page RFQ | Link/state audit | Blocking |
| HOME-G7-CTA-03 | `rfq_route_ready=false` blocks release but never hides/disables Global RFQ or replaces it with Contact | Failure-state evidence | Blocking |
| HOME-G7-CTA-04 | `/request-a-quote/` route, form, labels, validation, privacy, error, success and failure handling work | External functional/accessibility evidence | Release blocker |
| HOME-G7-CTA-05 | Planned/provisional destinations are resolved through approved scoped routing | Route-manifest audit | Release blocker |
| HOME-G7-CTA-06 | No guessed URL, cross-scope URL or external fallback is used | Link crawl and data-source evidence | Blocking |
| HOME-G7-CTA-07 | Form submission success does not imply a quotation has been approved | Success-state copy review | Blocking |
| HOME-G7-CTA-08 | PII is not exposed in URLs, HTML, logs or unapproved analytics payloads | External security/privacy evidence | Blocking |

### 1.5 SEO and GEO

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-SEO-01 | Exact Title, Meta, Canonical, robots, lang and H1 | Rendered HTML inspection | Blocking |
| HOME-G7-SEO-02 | Canonical is self-referencing `https://tio2malaysia.com/` | HTML inspection | Blocking |
| HOME-G7-SEO-03 | No other page's primary keyword is targeted in metadata/headings | SEO review | Blocking |
| HOME-G7-GEO-01 | JSON-LD parses and contains exactly five stable nodes | JSON-LD parser/validator evidence | Blocking |
| HOME-G7-GEO-02 | Five approved relation groups resolve to existing nodes | Graph assertion audit | Blocking |
| HOME-G7-GEO-03 | `Organization.brand` absent; manufacturer only on Product | Graph scan | Blocking |
| HOME-G7-GEO-04 | Prohibited Schema types/fields absent | Structured-data scan | Blocking |
| HOME-G7-GEO-05 | Every Schema fact has supporting Buyer Clean content | Visible-to-Schema mapping review | Blocking |
| HOME-G7-GEO-06 | No FAQPage is generated from Buyer Answers | Structured-data scan | Blocking |

### 1.6 Responsive, visual and performance behaviour

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-RWD-01 | 1440, 1024, 768 and 390 layouts align with the Manifest visuals | Screenshot comparison | Blocking |
| HOME-G7-RWD-02 | No horizontal overflow or clipped content at required widths | Browser metrics and screenshots | Blocking |
| HOME-G7-RWD-03 | Mobile Menu closed/open states work; full order is keyboard accessible | Interaction/accessibility evidence | Blocking |
| HOME-G7-RWD-04 | Core routes do not depend on horizontal carousels | Interaction audit | Blocking |
| HOME-G7-RWD-05 | Buyer-visible Mobile text is at least 14px and controls at least 44px | Computed-style/geometry evidence | Blocking |
| HOME-G7-RWD-06 | Layout remains usable at 200% zoom and with long copy | Browser/assistive review | Important |
| HOME-G7-RWD-07 | Required content is not hidden merely to reduce page length | DOM/visual comparison | Blocking |
| HOME-G7-PERF-01 | Hero priority, responsive dimensions and lazy-loading roles avoid avoidable layout shift | External performance evidence | Important |
| HOME-G7-PERF-02 | No failed critical requests, severe console errors or broken internal links | External technical QA | Blocking |

### 1.7 Accessibility

| ID | Requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-A11Y-01 | Semantic heading order with one H1 | Accessibility-tree/DOM evidence | Blocking |
| HOME-G7-A11Y-02 | All links, buttons and menu actions keyboard operable | Keyboard test evidence | Blocking |
| HOME-G7-A11Y-03 | Focus is visible; menu focus entry/return and Escape behaviour work | Interaction evidence | Blocking |
| HOME-G7-A11Y-04 | Link/button names are understandable out of context | Accessibility-name audit | Important |
| HOME-G7-A11Y-05 | Contrast meets applicable requirements | Computed colour audit | Blocking |
| HOME-G7-A11Y-06 | Decorative Hero material visual uses empty alt; informative media has purpose-specific alt | HTML/accessibility audit | Blocking |
| HOME-G7-A11Y-07 | RFQ destination form has programmatic labels, required/error relationships and status announcements | External form accessibility evidence | Release blocker |
| HOME-G7-A11Y-08 | Motion respects reduced-motion preference if motion is introduced | Interaction evidence | Important |

## 2. Required empty, error and long-content states

| State | Required behaviour | Prohibited behaviour |
|---|---|---|
| Missing scoped page record | Internal error and block release | Other-site fallback or generic buyer-facing fake content |
| Missing required route | Mark route/release blocker | Guess URL, link another scope, link Contact or leave a dead button |
| RFQ route unavailable | Keep Global RFQ visible in design contract; block release | Hide/disable RFQ, empty slot or Contact fallback |
| Missing optional proof asset | Use approved text-led layout | Fake factory/proof image or buyer-facing pending label |
| Missing required atmosphere/Logo production clearance | Block production asset decision | Treat current reference PNG as final SVG/clearance proof |
| Provisional Application URL | Keep page ID; wait for approved scoped mapping | Hard-code provisional href as final |
| Candidate process Resource | Do not publish unapproved href | Automatically create or infer the page |
| Restricted fact empty | Do not render the fact | Placeholder claim, invented value or cross-scope value |
| Content request fails | Fail closed and retain safe shell only if semantically valid | Silent partial page with misleading claims |
| Long company/title text | Wrap and grow content-driven layout | Clip, ellipsis, font reduction below contract or fixed-height blank compensation |
| JSON-LD source missing/invalid | Block release | Generate inferred Schema from another site or unapproved fields |

## 3. Open blockers and responsibility stage

| Blocker ID | Open item | Current state | Responsible stage/owner | Closure evidence required |
|---|---|---|---|---|
| HOME-RB-01 | `/request-a-quote/` route and form readiness | `RELEASE_BLOCKER_OPEN` | Gate 7 project-control decision defines handoff; external development implements; Gate 9 read-only QA verifies | Route, form, labels, privacy, validation, error/success and failure evidence |
| HOME-RB-02 | Planned/provisional Applications/Documents/Resources/Conversion hrefs | `ROUTE_APPROVAL_REQUIRED` | Project control/PRD route governance before release; external development consumes approved map | Approved scoped route inventory and link crawl |
| HOME-RB-03 | `RES-PROC` remains new-page candidate | `PAGE_AND_ROUTE_NOT_APPROVED` | Project control/user content decision | Approved page/route or approved Home CTA retarget/removal change record |
| HOME-RB-04 | Production Logo/SVG and asset clearance | `PRODUCTION_ASSET_REQUIRED` | Brand owner/project control supplies; external development integrates | Approved production asset, usage record and rendered proof |
| HOME-RB-05 | Hero/visual asset production clearance | `ASSET_ROLE_AND_CLEARANCE_REQUIRED` | Brand/project control before release | Approved use record; atmosphere-only treatment retained |
| HOME-RB-06 | Factory, Malaysia manufacturing location, product origin, COO and traceability | `FACT_EVIDENCE_REQUIRED` | Business/legal/evidence owner; About/Documents page governance | Approved fact record; Home remains unchanged unless separate change approved |
| HOME-RB-07 | Document availability and REACH scope | `FACT_EVIDENCE_REQUIRED` | Documents/business/compliance owner | Approved document matrix and request rules; Home must not promise availability |
| HOME-RB-08 | M-996/M-2196 differentiation | `TECHNICAL_VERIFICATION_REQUIRED` | Product technical owner | Approved technical evidence; no Home comparison without change approval |
| HOME-RB-09 | Contact/legal/public company details | `CONTACT_DETAILS_REQUIRED` | Business/legal owner | Verified public values and approved route/content |
| HOME-RB-10 | External implementation behaviour | `NOT_IMPLEMENTED` | External WordPress/Next.js development project after authorised handoff | Accessible preview, technical QA and traceable build evidence |
| HOME-RB-11 | Deployment, DNS, index and publication | `NOT_AUTHORISED` | User + external development project at Gate 10 | Separate explicit user approval and release record |

Open blockers do not undo Gate 6 approval, but they must not be described as implemented or silently bypassed. Blocking release items must remain visible in delivery tracking until verified.

## 4. Gate progression boundary

- Current package state: `GATE7_HANDOFF_PACKAGE_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`.
- Project control must review the package before it can become `APPROVED_FOR_HANDOFF`.
- This planning task does not mark `APPROVED_FOR_HANDOFF` or `HANDED_OFF`.
- External development, tests, worktree/branch creation, deployment and publication are outside this task.
- After an authorised external implementation is available, this project performs read-only Gate 9 QA and submits issues back to the development project.
