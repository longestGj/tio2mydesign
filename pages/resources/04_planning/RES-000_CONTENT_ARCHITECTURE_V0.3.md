# RES-000 Content Architecture V0.3 — Final Procurement Research Hub Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID / URL | `RES-000` / `/resources/` |
| Gate | Gate 2 — directed content revision |
| Date | 2026-08-31 |
| Status | `APPROVED_GATE_2_BASELINE` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Mapping / verification | `PLANNED_ARCHITECTURE / NO_DIRECT_KEYWORD_TARGET` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Revision authority | User authorization on 2026-08-31 + attached directed Resources brief |
| Replaces for current review | V0.1 body architecture only; V0.3 fixed-RFQ Global Chrome remains protected |
| Real Resource candidates | 1: `RES-ORIGIN`; design-eligible, not public/live |
| Public Resource inventory | 0 until child content, claim, route and publication gates pass |
| Prohibited | Code, CMS, tests, deployment, publication, Gate 7+, `D:\16Wordpress_nextjs` |

V0.3 retains the V0.4 visual structure and makes only final copy-density, Malaysia-origin entity and mobile-readability refinements. It does not add a module, route or Resource.

## 1. Required Deletions

- Delete the complete `Continue your procurement review` five-card module.
- Delete `Where details belong` and all copy that explains internal page ownership to buyers.
- Delete the Hero disclaimer paragraph.
- Delete navigation-style FAQ questions.
- Do not replace the removed modules with another sitemap or owner-card grid.

## 2. State and Inventory Contract

| State | Trigger | Buyer-facing behavior |
|---|---|---|
| `H0_NO_QUALIFIED_RESOURCE` | No child has passed content + claim + route + public eligibility | Featured and Latest headings, cards, dividers and spacing close to 0px; the Hub remains useful through paths, evidence and FAQ |
| `H1_ONE_FEATURED_CANDIDATE` | Current design-review state: RES-ORIGIN has a real Brief/content contract but is not live | Full visual may show the proposed card for review; formal delivery marks its route and ItemList as conditional |
| `H2_ONE_PUBLIC_RESOURCE` | RES-ORIGIN passes all gates and is live in `tio2-my` | Render one Featured card and one ItemList entry; do not duplicate it in Latest |
| `H3_MULTIPLE_PUBLIC_RESOURCES` | Two or more qualified public resources | Render up to three Featured cards and a non-duplicative Latest list ordered by real metadata |
| `H4_TRADE_ITEM` | Trade child passes official source, scope, source date, last review, status and route gates | Render its complete metadata atomically; never infer `CURRENT` |
| `H5_STALE_OR_REVOKED` | Any visible item loses freshness or route/public eligibility | Remove its card, metadata, link, ItemList and Schema relation together |

No state uses Coming soon, N/A, fake dates, disabled cards, cross-site fallback or invisible Schema items.

## 3. Final Module Order

| Order | Module ID | Visible label / heading | Buyer job | Current review state |
|---:|---|---|---|---|
| 0 | `GLOBAL_HEADER` | Approved shared Header | Navigate / RFQ | Protected; Resources current |
| 1 | `BREADCRUMB` | `Home / Resources` | Confirm location | Always |
| 2 | `HERO` | `Resources for Titanium Dioxide Procurement Decisions` | Understand what research is available | Always |
| 3 | `FEATURED_RESOURCES` | `Featured procurement resources` | Open the most relevant real guide | One RES-ORIGIN candidate in design; conditional in delivery |
| 4 | `THREE_DECISION_PATHS` | `Choose the right research path` | Select sourcing, technical or trade research | Always; direct guidance, not navigation cards |
| 5 | `LATEST_RESEARCH` | `Latest titanium dioxide research and procurement updates` | Scan additional real items and metadata | 0px with only one qualified item; no duplicate |
| 6 | `EVIDENCE_STANDARDS` | `How we use evidence` | Apply three concise safeguards | Always; compact |
| 7 | `BUYER_QUESTIONS` | `Buyer questions` | Extract direct procurement answers | Always |
| 8 | `GLOBAL_FOOTER` | Approved shared Footer | Navigate / RFQ | Protected; no page-local anchors |

## 4. Exact Buyer-facing Copy

### 4.1 Metadata

| Field | Exact direction |
|---|---|
| Title | `Titanium Dioxide Procurement Resources | TiO2 Malaysia` |
| Meta description | `Explore titanium dioxide buying guides, technical evaluation principles and dated market or trade updates for sourcing decisions across the EU, UK, India and Brazil.` |
| Canonical | `https://tio2malaysia.com/resources/` |
| H1 | `Resources for Titanium Dioxide Procurement Decisions` |
| Robots | Index intent remains subject to Gate 6/7 and external implementation acceptance |

### 4.2 Hero

- Eyebrow: `PROCUREMENT RESEARCH HUB`
- H1: `Resources for Titanium Dioxide Procurement Decisions`
- Supporting copy: `Explore technical guides, sourcing research and market updates created to support titanium dioxide procurement decisions across grades, applications and destination markets.`
- CTA: `Explore Procurement Resources` → local `#featured-resources` when a Featured item renders; otherwise `#research-paths`.
- Desktop diagram: `START → SOURCING / TECHNICAL EVALUATION / TRADE & MARKET`.
- Mobile: diagram is absent and consumes 0px.

### 4.3 Featured Resources

Only one real content candidate exists; do not add two decorative fillers.

| Field | Exact proposed value | Gate |
|---|---|---|
| Type | `PROCUREMENT GUIDE` | Safe content taxonomy |
| Title | `Non-China Titanium Dioxide Supply Guide` | Registered Page Name |
| Description | `Use a practical due-diligence framework to evaluate alternative-origin titanium dioxide supply, including Malaysia-origin sourcing, through origin evidence, grade-specific technical documentation, application requirements and destination-market context.` | One natural origin/sourcing relationship; no capability, superiority or trade-advantage claim |
| Context | `GLOBAL SOURCING` | Taxonomy only |
| Published / reviewed date | Hidden | No approved dates |
| Action | `Read the sourcing guide →` | Conditional on approved/live `RES-ORIGIN` route |

Right-side lightweight guide coverage:

- `What this guide covers`
- `Origin evidence and supplier identity`
- `Grade-specific technical documentation`
- `Application and processing requirements`
- `Destination-market context`

These four topics are taken from the RES-ORIGIN Brief and Gate 1 audit. The V0.5 full visual displays this one proposed card for review. Development delivery must not render or link it until the RES-ORIGIN atomic public gate passes.

### 4.4 Three Decision Paths

Section intro: `Choose the research path that matches the procurement question, then use a specific guide or update with the evidence and context needed for the decision.`

| Label | Heading | Exact body |
|---|---|---|
| `01 / SOURCING` | `Sourcing & market context` | `Use sourcing research to understand origin, supplier context, destination-market considerations and the trade environment surrounding a titanium dioxide purchasing decision.` |
| `02 / TECHNICAL EVALUATION` | `Technical evaluation` | `Use technical research to evaluate titanium dioxide grade characteristics, processing requirements and application context. Compare relevant technical documentation and application requirements using clearly defined evaluation criteria.` |
| `03 / TRADE & MARKET` | `Trade & market updates` | `Review time-sensitive trade, regulatory and market information relevant to titanium dioxide sourcing in the European Union, United Kingdom, India and Brazil. Use only updates with current official sources, defined scope and dates.` |

### 4.5 Latest Research

The section has no visible content in the one-item state because repeating RES-ORIGIN would create false volume and weak hierarchy. When at least two items qualify:

- show only actual, approved resources;
- order by real `published_at` or `last_reviewed_at`, never inferred file date;
- show only metadata that exists;
- Trade items require Market, Topic, official Source, Source date, Last reviewed and approved status copy;
- hide absent metadata fields rather than render N/A;
- never label an item Current without its child freshness gate.

### 4.6 Evidence Standards

- Eyebrow: `EVIDENCE STANDARDS`
- Heading: `How we use evidence`
- Intro: `Use these principles when applying research to a procurement decision.`

| Principle | Exact copy |
|---|---|
| Technical comparisons | `Comparisons describe defined technical criteria and should not be interpreted as automatic product equivalence.` |
| Application relevance | `Grade suitability depends on application and processing requirements and should be checked against the relevant technical documentation.` |
| Current trade information | `Time-sensitive trade information should identify its official source, applicable scope, source date and review date.` |

### 4.7 Buyer Questions

| ID | Question | Exact answer |
|---|---|---|
| BQ-01 | `What should buyers compare when evaluating titanium dioxide grades?` | `Buyers should compare the intended application, processing requirements, grade-specific technical data and relevant technical documentation. Performance values should be compared using compatible test methods and current documents. Final suitability should be validated in the buyer’s formulation or processing system.` |
| BQ-02 | `Does a technical comparison mean two titanium dioxide grades are equivalent?` | `No. A technical comparison can organize criteria such as documented properties, application requirements and process considerations, but it does not prove identical performance or interchangeability. Equivalence requires evidence for the specific grades and the buyer’s use conditions.` |
| BQ-03 | `How should application requirements affect titanium dioxide grade selection?` | `Application and processing requirements determine which technical criteria need to be checked. Coatings, plastics, masterbatch, printing inks and paper can place different demands on a titanium dioxide grade, so buyers should use the relevant technical documentation and application-specific validation rather than a generic recommendation.` |
| BQ-04 | `Why does the date of trade information matter?` | `Trade measures, investigations and regulatory requirements can change over time and may apply only to a defined product, origin, period or procedure. Procurement teams should check the current official source, applicable scope, source date and review date before relying on titanium dioxide trade information.` |
| BQ-05 | `Where can buyers find current titanium dioxide market information for the EU, UK, India or Brazil?` | `Use the relevant TiO2 Malaysia market page for destination-specific procurement context. Detailed trade information should be used only when a dedicated update identifies its official source, scope and dates; the Resources Hub does not infer a current policy outcome.` |

FAQ answers remain visible text. No `FAQPage` or `QAPage` Schema is proposed for the Hub.

## 5. SEO / GEO / Schema Contract

| Surface | Contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD`; no invented commercial target |
| Secondary labels | `buying guides`; `technical guides`; `market trade updates` used naturally as content types |
| Intent | Navigation plus informational Hub utility; it does not become a Product, Application or Market landing page |
| Child-keyword boundary | Do not repeat `non china titanium dioxide` outside the single exact child title; do not surface candidate process/brand/trade primary phrases |
| Concrete entities | titanium dioxide procurement; titanium dioxide grades; application requirements; technical documentation; origin; destination markets; EU; UK; India; Brazil |
| Product relationship | PRODUCT V0.3 only; row-level renderer remains 0 |
| Collection Schema | `CollectionPage` + `BreadcrumbList` |
| ItemList | 0 in current public state; one item only after RES-ORIGIN is visible and route-live |
| Prohibited Schema | Product, Offer, Review, child Article/NewsArticle, FAQPage or any stale/hidden item from the Hub |

## 6. Internal Links

- Hero CTA is a local scroll action, not a substitute for the Header.
- The RES-ORIGIN card may use its descriptive route only after public eligibility.
- Buyer answers may link `EU titanium dioxide market`, `UK titanium dioxide market`, `India titanium dioxide market` and `Brazil titanium dioxide market` to approved/live Market pages.
- A future application resource may link to the matching Application page only when the relationship is supported.
- No `Learn more`, `Click here`, bulk owner grid, grade recommendation, hidden link or cross-site fallback.

## 7. PRODUCT V0.3 and Evidence Gates

- Canonical relationship source remains PRODUCT V0.3: 84 = 30 verified / 0 conflict / 54 no-public; 14 Process.
- Hub renders zero named grade/application/process rows.
- M-2377 approved neutral relations do not become a Hub recommendation; Specialty Materials remains non-public and Rubber evidence-only.
- M-996/M-2196 comparison hold remains.
- Trade pages remain excluded until their child official-source/scope/date/review/freshness/route gates pass.
- No manufacturing, origin, document, inventory, price, MOQ, lead-time, logistics or trade outcome claim is added.

## 8. Responsive and Accessibility Contract

- Desktop: 12-column, max 1200px; Featured uses a 2.15fr/0.85fr split, 36px gap and top-aligned compact coverage list; section padding is 84px top / 76px bottom.
- Mobile 390px: 16px body; 1.55–1.65 line height; all cards one column; 16px outer gutter; no side-scrolling card rail.
- Hide the Hero diagram at ≤900px with no reserved height.
- Accordion questions use real buttons, `aria-expanded`, ≥44px target and visible independent focus.
- Current navigation uses Resources Bold + structural Teal marker with no buyer-visible `CURRENT`, subject to the latest shared Global Chrome review.
- Fixed RFQ remains in Desktop Header, Mobile Header/Menu and Footer.
- Footer contains no page-local anchors or internal explanation.
- Removal of Featured/Latest closes section heading, padding and divider to 0px.

## 9. Open Review Items

| ID | Status | Meaning |
|---|---|---|
| RES-HUB-RESTRUCTURE-01 | `SUPERSEDED_BY_RES-HUB-FINAL-01` | V0.4 structural revision retained as parent history |
| RES-HUB-FINAL-01 | `APPROVED / CLOSED` | User-approved final copy, spacing, GEO and responsive closeout; approval date 2026-09-01 |
| RES-R002 | `OPEN / CHILD_STARTED_NOT_PUBLIC` | RES-ORIGIN now has a real Brief/evidence draft but no public/live approval |
| RES-R003–R007 | `OPEN` | Candidate, trade, route, equivalence and maintenance gates unchanged |
| RES-R008–R009 | `CONTROLLED_IN_DRAFT` | Accessible Teal and registered Footer boundary retained |
| RES-G2-01 | `APPROVED / CLOSED` | Current Gate 2 artifact approved as part of `RES-HUB-FINAL-01` on 2026-09-01 |

Gate 2 approval does not approve any child page, route, implementation or publication.

## 10. V0.3 Final-round Record

| Review ID | Change | Status |
|---|---|---|
| RES-HUB-FINAL-01 | Replaced Featured meta explanation with verified guide coverage; added one Malaysia-origin sourcing relationship; made Technical Evaluation positive; shortened FAQ 1; tightened Featured whitespace; verified 390px computed typography | `APPROVED / CLOSED`; user approval 2026-09-01 |
