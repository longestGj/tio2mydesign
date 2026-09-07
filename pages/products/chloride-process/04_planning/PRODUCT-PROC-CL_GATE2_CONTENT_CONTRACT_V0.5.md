# PRODUCT-PROC-CL Gate 2 Complete Content and Operation Contract V0.5

## 0. Control

| Field | Value |
|---|---|
| Page ID / URL | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` |
| Page type | Process aggregation page |
| Language / site scope | EN / `tio2-my` |
| Gate / phase | Gate 2 / Step 2 Full Buyer Clean Copy |
| Version / date | V0.5 / 2026-09-06 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` |
| Buyer Copy source | `PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` between the Buyer Clean Copy markers |
| Confirmed Skeleton | `PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md` |
| Previous contract | `PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.4.md`; confirmed Skeleton-stage C and preserved unchanged |
| Authorization | `PRODUCT-PROC-CL_GATE2_SKELETON_USER_CONFIRMATION_V0.1.md` |

B is the only editable source for visible page copy. This C defines what that copy and its actions mean; it does not maintain a second prose deck. It is a content contract rather than layout, code, CMS, API, receiver, deployment or publication authority.

## 1. Identity, task and ownership

| Item | Contract |
|---|---|
| Primary keyword | `chloride process titanium dioxide` |
| Secondary terms | `chloride tio2`; `chloride process tio2 supplier` |
| Search task | Commercial investigation with a concise process-definition entry point |
| Buyer task | Understand the Process label, scan the current eight-Grade range, open Grade evidence and continue to Applications, Documents or RFQ as needed |
| Page responsibility | Explain the Chloride route at buyer-relevant depth and aggregate exactly eight current Chloride Grades |
| Excluded ownership | Full Chloride-versus-Sulfate comparison; individual Grade technical data; generic Application education; document-family education; form fields, validation and submission states |
| Current Grade set | M-350, M-510, M-896, M-895, M-200, M-210, M-340 and M-886, in that order |
| Current navigation key | `Products` |

## 2. B content map and buyer purpose

| Order | B locator / visible heading | Buyer purpose | Required content behavior |
|---:|---|---|---|
| 0 | B-00 / Breadcrumb | Confirm location and return to broader product navigation | Three levels only: Home, Products, current page |
| 1 | B-01 / `Chloride Process Titanium Dioxide` | Confirm category, origin context, application range and immediate actions | Preserve eight-Grade range-level wording and both actions |
| 2 | B-02 / `What the Chloride Process Tells You` | Understand the route label and what it cannot decide | Preserve the concise two-paragraph definition and separate comparison-guide handoff |
| 3 | B-03 / `Explore Chloride-Process Grades` | Scan the complete current set and open Grade evidence | Preserve one continuous eight-entry list, exact order, exact summaries and exact Grade URLs |
| 4 | B-04 / `How to Evaluate a Chloride-Process Grade` | Identify useful project context, check Grade information and collect documents | Preserve all three steps and the clearly illustrative five-Application context |
| 5 | B-05 / `Discuss Your Chloride-Process TiO2 Requirement` | Continue with a known Grade or an incomplete requirement | Preserve application, quantity, destination and `Not sure / Need help` guidance without adding fields or guarantees |

No FAQ, comparison table, application matrix, technical specification table, form, source list or new module is part of this page.

## 3. Actions, links and buyer context

### 3.1 Breadcrumb

| B location | Visible item | Target / behavior |
|---|---|---|
| B-00 | `Home` | `/` |
| B-00 | `Products` | `/products/` |
| B-00 | `Chloride Process Titanium Dioxide` | Current page; text only |

### 3.2 Page and downstream actions

The visible action wording is maintained only in B. The references below bind each B action to its exact behavior.

| B location | Target | Context transferred | Downstream owner and boundary |
|---|---|---|---|
| B-01 primary action | Same-page `#explore-chloride-process-grades` target at B-03 | None | The page must move focus/scroll to the visible B-03 heading; no selection or stored state |
| B-01 secondary action | CONV-RFQ `/request-a-quote/` | Internal `source_page_id=PRODUCT-PROC-CL` attribution only | CONV-RFQ owns all visible fields, editable values, validation, submission and response states; no Grade, Application, quantity or destination is prefilled |
| B-02 comparison link | RES-PROC `/resources/chloride-vs-sulfate-titanium-dioxide/` | None | RES-PROC owns the full comparison, sources and conclusions; this page imports none of that article |
| B-04 Applications link | APP-000 `/applications/` | None | APP-000 owns Application navigation; no filter, Grade recommendation or inferred relationship is passed |
| B-04 Documents link | CONV-DOC `/request-documents/` | Internal `source_page_id=PRODUCT-PROC-CL` attribution only | CONV-DOC owns the Grade selector, multi-document selection, validation, receiver and states; no Grade or document type is preselected |
| B-05 primary action | CONV-RFQ `/request-a-quote/` | Same source-only attribution as B-01 | The receiver retains the buyer-editable `Not sure / Need help` path and owns all later behavior |

### 3.3 Exact Grade links

| B order | Grade | Target |
|---:|---|---|
| 1 | M-350 | `/products/m-350/` |
| 2 | M-510 | `/products/m-510/` |
| 3 | M-896 | `/products/m-896/` |
| 4 | M-895 | `/products/m-895/` |
| 5 | M-200 | `/products/m-200/` |
| 6 | M-210 | `/products/m-210/` |
| 7 | M-340 | `/products/m-340/` |
| 8 | M-886 | `/products/m-886/` |

Each Grade action is ordinary navigation to the exact Grade owner. Reading or clicking an entry does not silently select a Grade for RFQ or Documents. Any future explicit selection control would require a separate reviewed contract change.

## 4. Content presentation and applicable states

| Situation | B source / buyer experience | Content and state rule | Later owner / verification |
|---|---|---|---|
| Normal page | B-00 through B-05 render in order with all eight Grade entries and all actions | This is the complete intended page experience | Gate 3–5 layout; Gate 7–9 implementation and QA |
| Primary same-page action | B-01 action reaches the B-03 visible heading | Focus/scroll target must work with keyboard and direct fragment navigation | Gate 3 interaction specification and Gate 8–9 verification |
| Buyer does not know a Grade | B-03, B-04 and B-05 remain available; RFQ supports `Not sure / Need help` | Do not require a Grade selection on this page | CONV-RFQ owner and Gate 9 verification |
| Buyer needs documents | B-04 explains the required next step and links to CONV-DOC | Do not present the action as a download, public inventory or automatic delivery | CONV-DOC owner and Gate 9 verification |
| Downstream same-scope route is not ready before release | No replacement Buyer Copy is defined in B | Treat the route as a release dependency; do not expose a dead link, disabled action, placeholder or internal readiness message | Gate 7 handoff, Gate 8 implementation and Gate 9 QA |
| JavaScript is unavailable | Breadcrumb and downstream actions remain ordinary links; B content remains readable | The same-page anchor must remain a usable document fragment | Gate 8 implementation |
| No approved page image | The complete B remains text-led | Do not insert a factory, mine, certificate, stock or generic industrial image that implies unapproved facts | Gate 4–5 media decision |

Page-owned empty, validation, loading, submission, success and failure states are `NOT_APPLICABLE`: this page has no form, filter, selector, local submission or dynamic recommendation. It does not copy downstream form states or shared error-page copy. Header, Mobile Menu, Footer, consent and legal states remain with their shared owners.

## 5. SEO, index, language and social contract

These are exact Full Copy candidate values. They remain unapproved until Full Copy review and user confirmation, and they remain unpublished until later release authorization.

| Field | Exact value / rule | Visible support |
|---|---|---|
| SEO title | `Chloride Process Titanium Dioxide | TiO2 Malaysia` | B-01 H1 and shared site brand |
| Meta description | `Explore eight Malaysia-origin chloride-process titanium dioxide grades, understand what the process label means, and review product information or request a quote.` | B-01 through B-05 |
| Canonical | `https://tio2malaysia.com/products/chloride-process-titanium-dioxide/` | Registered route and B-00 breadcrumb |
| HTML language | `en` | Entire B |
| Hreflang | None for this current English-only page | Approved Brief |
| Production robots direction | `index, follow` only after Gate 9 release QA and explicit publication/indexing authorization | Lifecycle contract |
| Preview/staging robots direction | Non-indexable | Lifecycle contract |
| Open Graph title | Same exact value as SEO title | Same source |
| Open Graph description | Same exact value as Meta description | Same source |
| Open Graph URL | Same exact value as Canonical | Clean route |
| Open Graph type | `website` | Process aggregation page |
| Open Graph image | Bind only an approved page-relevant asset selected at Gate 4–5; otherwise omit the image field | No asset is selected at Gate 2 |
| X/Twitter title and description | Same exact values as SEO title and Meta description | Same sources |
| X/Twitter card and image | Select the card type only with the actual approved asset treatment; never emit a placeholder or broken image | Gate 4–5 and implementation contract |

Query values, source attribution and fragments do not create Canonical, metadata, Schema, sitemap or indexable URL variants.

Cannibalization controls:

- keep `chloride process titanium dioxide` as the primary topic;
- keep full `chloride vs sulfate titanium dioxide` comparison content with RES-PROC;
- keep exact-model search ownership with the individual Grade pages;
- keep general Application education with APP-000 and its children; and
- do not introduce country-supplier keywords on this global Process page.

## 6. GEO answer and entity contract

GEO uses the actual B answers; it does not create a parallel answer deck or hidden claims.

| Buyer question / answer intent | B source | Entity or relationship expressed |
|---|---|---|
| What does chloride-process TiO2 mean? | B-02 first paragraph | Chloride route → titanium tetrachloride intermediate → purified and oxidized base titanium dioxide → finishing/treatment into grades |
| Does the Process label decide Grade performance? | B-02 second paragraph | Process category is a starting context; individual Grade evidence and buyer evaluation remain necessary |
| Which current Chloride Grades are presented? | B-03 list | The page aggregates exactly eight named Grade-page entities in visible order |
| Can the range serve more than one application area? | B-01 and B-03 | The range includes Coatings, Plastics, Masterbatch, Printing Inks and Paper contexts; application needs may overlap; no universal Grade suitability is stated |
| What should the buyer evaluate next? | B-04 three steps | Intended system → exact Grade evidence → buyer validation and documents |
| What if the buyer does not know the Grade? | B-05 | The buyer can continue through the RFQ `Not sure / Need help` path |
| Where is direct Process comparison handled? | B-02 link | RES-PROC owns the comparison resource |

Primary visible entity: chloride-process titanium dioxide pigment category. Related visible entities are TiO2 Malaysia, Malaysia-origin titanium dioxide, Products, Applications, Request Documents, Request a Quote, RES-PROC and the eight Grade pages. No FAQ is present, so no FAQ-only GEO content is supplied.

## 7. Schema contract

Schema must express only visible B content and shared approved entities.

### 7.1 Required graph nodes

| Node | Required fields and source | Rules |
|---|---|---|
| `WebPage` | `@id` = Canonical + `#webpage`; `url` = Canonical; `name` = B-01 H1; `description` = Meta description; `inLanguage` = `en`; `isPartOf` = shared same-scope `WebSite` ID; `publisher` = shared approved Organization ID; `breadcrumb` = Breadcrumb node; `mainEntity` = visible Grade-list ItemList node | Do not mint duplicate WebSite or Organization entities |
| `BreadcrumbList` | `@id` = Canonical + `#breadcrumb`; three `ListItem` entries from B-00 with positions 1–3; Home and Products use their clean URLs; current-page item uses Canonical | Labels and order must equal visible breadcrumb |
| `ItemList` | `@id` = Canonical + `#chloride-grade-list`; `name` = B-03 heading; `numberOfItems` = 8; `itemListOrder` = `https://schema.org/ItemListUnordered`; eight `ListItem` entries with visible position, Grade name and clean URL from §3.3 | Position records display order, not ranking; entries are links, not Offers or inventory records |

### 7.2 Prohibited expansion

Do not output page-level or list-entry `Product`, `Offer`, `AggregateOffer`, price, inventory, availability, shipping, rating, review, certification, plant/manufacturing-operation, Process-superiority or Grade-suitability facts from this page. Do not encode hidden Grade–Application mappings. Do not output `FAQPage` or `QAPage` because B contains no FAQ or Q&A module.

H1, descriptions, breadcrumb labels, Grade names, order and URLs must derive from the same B and C sources. If the visible Grade set or order changes under a future approved Product relationship update, B, §3.3, GEO and the ItemList must be reviewed together.

## 8. Fact, source and decision mapping

| B location / claim | Current authority | Source / decision date | Public limit |
|---|---|---|---|
| B-01 Malaysia-origin context | Site-wide user authority / `EG-001` in the current decision register | 2026-09-05 | Does not imply plant ownership, specific shipment, certificate, customs treatment or local stock |
| B-01 five range-level Application areas | PRODUCT V0.3 approved Application sets; confirmed Skeleton V0.4 | Product relationship baseline 2026-08-30; Skeleton confirmation 2026-09-06 | At least one current Chloride Grade appears in each named Application set; does not assign every Grade to every Application |
| B-02 general Chloride-route definition | Page Claim 005; current UNIDO and EU BREF extracts recorded by Gate 1 | Evidence capture 2026-09-06 | General industrial definition only; no IKHLAS plant, feedstock or operating-configuration claim |
| B-02 Process-label limitation | Page Claim 006 and confirmed Gate 1 direction | 2026-09-06 | No universal Process winner and no performance inference from the Process label |
| B-03 eight-Grade set and order | PRODUCT V0.3 matrix/unified audit; page Claims PROC-CL-008 through 016 | 2026-08-30 | Neutral Process classification only |
| B-03 eight exact Grade summaries | `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` §A5.1, current approved Product Hub baseline | 2026-08-31 | Exact individual strings only; no rewriting as ranking, equivalence, substitution or recommendation |
| B-03 application-overlap guidance | PRODUCT V0.3 relationships and confirmed Skeleton V0.4 | Product relationship baseline 2026-08-30; Skeleton confirmation 2026-09-06 | Buyer navigation guidance only; no partial Grade–Application matrix or universal suitability statement |
| B-04 evaluation sequence | Confirmed Gate 1 Application/Documents path and Skeleton V0.4 | 2026-09-06 | Examples help the buyer describe a project; individual Grade evidence and buyer validation remain necessary |
| B-05 RFQ expectation | Current CONV-RFQ contract and confirmed Skeleton V0.4 | Skeleton confirmation 2026-09-06 | Human review expectation only; no response-time, quote guarantee, acceptance, price, availability or delivery promise |

Current authority files:

- `docs/page-briefs/PRODUCT-PROC-CL_CHLORIDE_PROCESS_TITANIUM_DIOXIDE_BRIEF_V0.2.md`;
- `pages/products/chloride-process/01_research/PRODUCT-PROC-CL_GATE1_RESEARCH_REPORT_V0.2.md`;
- `pages/products/chloride-process/01_research/PRODUCT-PROC-CL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv`;
- `pages/products/chloride-process/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` for approved Gate 1 hashes;
- `pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md` and its user confirmation for the confirmed Gate 2 structure and wording boundary.

## 9. Shared content and exclusions

Header, Mobile Header/Menu, fixed global RFQ, Footer, production logo, consent and legal content consume their current shared authorities. This page declares `Products` as the active navigation key and does not maintain a private shared-component variant or show a buyer-visible `CURRENT` label.

The following remain absent from B and Schema:

- internal Gate, approval, evidence, readiness, source-context and relationship-control language;
- M-2377, M-996, M-2196, M-108, M-52 and CR-901 as Chloride entries;
- negative suitability statements about Grades outside the eight-item set;
- detailed Application matrix, route comparison article or duplicate Grade technical specifications;
- COO, plant, mine, supply-chain, price, stock, capacity, lead-time, delivery, customs or quotation-approval claims; and
- speculative imagery or captions that imply those facts.

## 10. Dependencies, open items and stop point

| Item | Current state | Required later action |
|---|---|---|
| Full Buyer Clean Copy | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_INDEPENDENT_BUYER_REVIEW` | Different Gate 2 Buyer Review Agent reads actual B first, then complete C and Execution Self-check |
| Same-scope downstream routes | Intended complete-site contract defined | Gate 7–9 bind and verify every route and prevent broken/dead actions before release |
| RFQ and Documents source attribution | Defined as source-only with no silent prefill | Gate 7–9 implementation and QA verify exact receiving-page behavior |
| Social/page image | No asset selected | Gate 4–5 may select an approved factual asset; metadata image fields remain omitted until then |
| Publication and indexing | Not authorized | Later Gate completion and explicit release authorization required |

There is no unresolved Buyer Copy placeholder and no new enterprise-fact decision in this Full Copy candidate. Independent Buyer Review, Project Control review and user confirmation remain required. This C does not approve Full Copy, close Gate 2, authorize Gate 3 or authorize development, deployment, publication or indexing.
