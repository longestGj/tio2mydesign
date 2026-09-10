# APP-000 Gate 2 Content Contract V1.0

Date: 2026-09-08. Contract type: C, stable page-specific content and behavior. This file references visible copy by heading and position; it is not a second editable body. Exact candidate identities and approval status belong to the controller's page Manifest.

## 1. Identity and content locations

| Property | Contract |
|---|---|
| Page ID / language / scope | APP-000 / EN (`en`) / `tio2-my` |
| Registered path / planned canonical | `/applications/` / `https://tio2malaysia.com/applications/` |
| Type / priority | Navigation hub / P1 |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary labels | `coatings \| plastics \| masterbatch \| printing inks \| paper`; navigation labels only |
| Intent / buyer stage | N / Navigation |
| Source clusters | APP-01, APP-02, APP-03, APP-04, APP-05 |
| Mapping / verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET`; this contract does not upgrade either |
| Exclusion | `all generic application primary keywords` |
| Boundary | Hub does not own application primary terms; each child application page owns one use-case cluster. Products owns complete-portfolio, generic grade-selection and process-directory intent. |
| Body source | `APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md` in this directory; future version binding is controlled by the unique page Manifest |

The ordered module map is the compact A mapping for this consolidated legacy delivery. It does not claim that an earlier Skeleton or full page was user approved. The continuous APP-000 control supplies the current authoring direction and retains the remaining user Full Copy decision.

| Order / stable location | Visible boundary in B | Buyer task / content ownership |
|---|---|---|
| Shared opening | Header then Home › Applications | Use shared navigation and understand current location |
| M1 HERO | H1 through six same-page links | Understand application-based organization; reach any collection without selecting an RFQ value |
| M2 APPLICATION_PATHS | Choose by Application through Specialty Materials | Distinguish applications, see all neutral Grade-to-Review relationships, open eligible application or grade destinations |
| M3 EVALUATION_GUIDE | How to Use This Application Hub | Three compact steps: application choice, current technical information, buyer-system validation |
| M4 PROCUREMENT_PATHS | Continue Your Procurement Review | Products, Documents, Markets in that order; select the appropriate owner by task |
| M5 FINAL_RFQ | Share Your Application Requirements | Enter the independent RFQ, including when grade/application remain undecided; understand human review as the next step |
| Shared closing | Footer | Consume shared navigation, fixed RFQ and legal utilities |

The body contains no Process Classification directory, complete 14-grade product directory, FAQ module, embedded form, sample CTA, download control, performance table or company-origin claim. This is the authorized simplification of the hub, not a change to the underlying product taxonomy.

## 2. Actions, targets and contextual data

### 2.1 Target resolution

Link eligibility is assessed independently for each destination: correct Page ID and scope, effective URL approval, effective content approval and verified route in the target environment. A historical live observation or a registered/provisional path is not current route evidence. Full-site target copy is the primary planning state; failure branches below provide a coherent constrained state and never erase a required release dependency.

| B action / location | Target / exact behavior | Data from APP-000 |
|---|---|---|
| Explore Applications, M1 | `#application-selector`; native same-document navigation | None |
| Six Choose an Application links, M1 | `#application-coatings`, `#application-plastics`, `#application-masterbatch`, `#application-printing-inks`, `#application-paper`, `#application-specialty-materials` | None; hash navigation is not a form selection |
| Explore Coatings, M2 | APP-COAT owner; resolve its effective approved route | No application/grade prefill contract created |
| Explore Plastics, M2 | APP-PLAS owner; same rule | None |
| Explore Masterbatch, M2 | APP-MB owner; same rule | None |
| Explore Printing Inks, M2 | APP-INK owner; same rule | None |
| Explore Paper, M2 | APP-PAPER owner; same rule | None |
| Each displayed grade label, M2 | Corresponding registered GRADE-* owner, one grade page; label is the exact grade identifier | No RFQ selection, suitability flag or comparison context |
| Specialty Materials, M2 | A taxonomy collection with CR-901; CR-901 may link to its grade page under the grade rule | No sixth Application Page ID, route or child CTA |
| Explore Products, M4 | PRODUCT-000, `/products/`, subject to destination eligibility | No grade/application query or filter |
| Review Documents, M4 | DOC-000, `/documents/`, subject to destination eligibility | No grade, document type, availability or request parameter; this opens information, not a submitted request |
| Explore Markets, M4 | MARKET-000, `/markets/`, subject to destination eligibility | No inferred destination or country |
| Request a Quote, M1/M5 | CONV-RFQ, `/request-a-quote/`; navigate, never submit on this page | Semantic source attribution `source_page_id=APP-000`; no other prefill in this baseline |
| Shared Header/Menu/Footer actions | Current Global Chrome and legal owners | Shared owner behavior; APP-000 supplies `current_navigation_key=Applications` only |

The five application URLs remain provisional in the inspected registry/master. Their approved route values must be resolved by Page ID at handoff/runtime; this C deliberately does not hard-code them as final hrefs or Schema targets. Grade owner identifiers and paths are likewise taken from the approved registry, not constructed from labels when unresolved.

### 2.2 RFQ contract and incomplete information

RFQ source authority: `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md`, consuming `CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` for exact fields/options/prefill and V1.1 for owner correction. APP-000 does not copy or alter that form contract.

- The Brief's historical `source_page=APP-000` means source attribution. Bind it to the receiver's approved semantic `source_page_id`, not a new form field. Gate 8 chooses the existing supported transport; no unapproved query key is invented here. Source ID must not be printed into body, accessible text, metadata or Schema.
- Application anchors, scrolling, opening a disclosure and opening a grade page are browsing actions. None selects a grade/application for a later RFQ click. This page has no selection control or persistent selection state, so both page-body RFQs carry source attribution only. Do not import stale query values, previous selections or browser history into required fields.
- Unknown grade is supported by the receiver's visible `Not sure / Need help` option; unknown application is supported by `Other / Not sure`. Both are selected by the buyer on the RFQ, not silently prefilled by this hub.
- Quantity remains the receiver's positive numeric quantity in MT; no zero, blank or range substitute is authorized. An estimate may be entered as a positive number and explained in the existing optional Additional Requirements field. The hub does not claim quantity is optional.
- Multiple grades/applications/files are not converted to new multi-select controls. The receiver remains single grade and single application. Further non-confidential context belongs in its existing Additional Requirements field. APP-000 makes no promise that a multi-product or document request has already been assembled.
- The Final RFQ's review statement describes human review of a received request. It is not a quote, order, availability, document release, sample approval, delivery or suitability promise. Actual success requires the receiver's explicit receipt acknowledgement; all validation, failure, retry, success and privacy text belongs to CONV-RFQ.

### 2.3 Conditional rendering and missing-data behavior

| Condition | Page behavior | Machine / acceptance consequence |
|---|---|---|
| All eligible routes available | Render B's full copy, application CTAs and linked grade labels | Include only eligible visible Application links in ItemList |
| One or more application destinations ineligible | Preserve each category heading, scope and exact approved grade set; omit that category's application CTA atomically, including arrow/wrapper | Omit that destination from ItemList; no disabled or fabricated application link |
| One or more grade destinations ineligible | Preserve the exact neutral grade label as plain text with no link affordance, focusability, tooltip action or href | No grade URL or hidden linked entity for that item |
| Some grade and some application links remain | Use the full second sentence in M2's introduction | Eligible individual actions remain; sentence refers only to rendered links |
| Grade links only / application links only / neither | Use the exact M2 second-sentence variant in B's appendix; omit the sentence when neither exists | The first, neutral Grade-to-Review definition remains once and stays visible |
| A Products/Documents/Markets destination ineligible | Omit its whole M4 card: heading, description, CTA and container | Do not leave an imperative with no target; no alternative route is invented |
| All M4 destinations ineligible | Omit the entire M4 heading and container; M3 flows naturally to M5 or Footer | No empty section or unsupported downstream relation |
| RFQ workflow/body-route ineligible | Omit the M1 secondary body CTA and the whole M5 module | Shared Header/Menu/Footer RFQ remains fixed; record the missing RFQ route/receiver as a release blocker |
| Shared RFQ/required legal dependency missing | Consume the fixed shared controls; do not hide, disable or repoint them locally | Block the relevant later acceptance/release; return to shared owner |
| Required collection/copy/relation data missing or corrupt | Treat as a content integrity error, not an intentional empty collection. Do not silently remove an approved relationship, render an empty group, or invent a grade | Block acceptance/release until approved B/matrix integrity is restored; a previously verified scoped snapshot may be reused only under its existing approved caching contract |
| Image absent | Complete text-based page remains usable | No image is required by this content contract; no cross-scope media fallback |

Every omission removes the dependent action words, glyph, focus target and empty container together. No `Coming soon`, internal status, evidence ID, negative suitability label, unrelated Contact fallback, `mytio2.com` URL or other-site fallback is permitted. The primary six same-page paths remain available in every valid content state.

### 2.4 Accessibility and content states

- One page H1; M2–M5 are H2s; application/support headings are H3s. Shared Footer headings are outside the page's editorial outline. The metadata appendix and authoring comments in B are not page-body content.
- Same-page links must land at the named collection/heading without fixed-header obstruction. If a target's grade disclosure is closed, the category heading remains visible and its disclosure is directly operable. Moving to an anchor must never secretly select an RFQ value.
- Gate 3 may choose progressive mobile disclosure. All six category headings/scope descriptions and the one Grade-to-Review definition remain visible. All 30 exact relationships must be accessible on demand in the same reading order, without navigation, asynchronous fetching or a different list on mobile. A native disclosure or equivalent keyboard-operable control exposes state and relationship programmatically; grade links remain operable only when visible. B's existing grade labels supply the exact control text, associated with the application heading. No clipped preview list or invented count is needed.
- Without script, core copy, all exact grade sets and eligible ordinary links remain usable; native disclosure is acceptable. Core paths must not require hover, carousel or horizontal swiping. Reflow at 1440/768/390, 200% zoom and font enlargement preserves complete labels and paragraphs.
- Linked and plain grade labels must be distinguishable without implying good/bad suitability. Visible focus, hover and active states must not change words or ranking. Reading order is the source order. No color-only relationship encoding.
- Shared navigation/menus, logos, focus return and legal controls follow their owners. The only local current mapping is Applications; no buyer-visible `CURRENT` label is added.

## 3. SEO, GEO, social and Schema parity

| Field | Exact contract |
|---|---|
| Title / OG title / social title | `Applications \| TiO2 Malaysia` |
| Meta / OG / social description | `Explore titanium dioxide application paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.` |
| Canonical / og:url | `https://tio2malaysia.com/applications/` as the final route direction; approval/readiness remains a separately verified dependency |
| Language / hreflang | `en`; no additional language variant or hreflang is created |
| Robots | Preserve `DECISION_REQUIRED` for public indexing. Brief's `index, follow` is a final production direction only, requiring explicit indexing/release authority. Preview is protected from indexing under its environment owner's policy; do not infer production activation from this C. |
| Sitemap | Only the one approved clean canonical when release/indexing is authorized; never hashes, queries, disclosures or provisional child URLs |
| Social image | None required/created by this delivery. Bind an approved shared asset only through its owner; do not invent an image URL or claim-bearing ALT. |

B contains exact base JSON-LD for CollectionPage and BreadcrumbList. For eligible child application links, add one ItemList with this deterministic contract:

| Property | Value/source |
|---|---|
| `@type` | `ItemList` |
| `@id` | `https://tio2malaysia.com/applications/#application-pages` |
| `name` | `Choose by Application`, identical to M2 heading |
| `numberOfItems` | Count of eligible, actually rendered child-application CTA destinations, 1–5 |
| `itemListElement[].@type` | `ListItem` |
| `itemListElement[].position` | Sequential display order among included destinations, starting at 1 |
| `itemListElement[].name` | Exact displayed category heading: Coatings, Plastics, Masterbatch, Printing Inks or Paper |
| `itemListElement[].item` | Canonical absolute URL resolved from that Page ID's effective approved route; same target as the visible CTA |
| CollectionPage `mainEntity` | Reference the ItemList `@id` only when the ItemList exists |

When zero child links qualify, emit neither ItemList nor `mainEntity`; B's base graph is the complete page graph. Specialty Materials has no child Application page and never becomes a sixth ItemList destination. Do not use same-page anchors to conceal unavailable child URLs.

GEO answers are visible in M1/M2 (classification and neutral grade meaning), the Plastics/Masterbatch scopes (finished plastic application versus pigment input), M3 (evaluation sequence), M4 (known grade, wider review, process/documents/destination), and M5 (unknown grade/application and what follows an inquiry). Metadata summarizes this navigation; it does not target the child primary keywords as an independent commercial page.

This page does not emit Product, Offer, AggregateRating, Review, FAQPage, QAPage or application-suitability Schema. Grade relationships remain readable text/eligible ordinary links; no machine-only grade selection, comparison, process list or external source attribution is introduced. Shared Organization/WebSite nodes, if used, are shared-owner records and not duplicated here.

## 4. Facts, inheritance and stable dependencies

### 4.1 Exact relationship scope

The only Grade-to-Application authority is `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` plus `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`; approved 2026-08-30. B must contain each approved relation exactly once within its collection, in the inherited order: counts 8/8/7/4/2/1, total 30. Counts are audit expectations, not additional public badges.

The matrix and the APP-000 relationship impact audit govern M-2377's five positive applications, CR-901 as the sole Specialty Materials grade, and the continued M-996/M-2196 comparison restriction. `NO_PUBLIC_MAPPING` rows do not appear and never become negative suitability conclusions. Rubber remains evidence only, with no collection, anchor, route, keyword or Schema entity. Process classification remains with Products/process owners; removing its hub directory does not delete or alter any matrix fact.

### 4.2 Inherited and changed sources

| Source | Inheritance / controlled change |
|---|---|
| `docs/page-briefs/APP-000_APPLICATIONS_BRIEF_V0.1.md`; `docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md` | Retain approved Gate 0 identity, questions, navigation role, child ownership, conditional routing and scope. Current root rules, PRODUCT V0.3 and APP-000 continuous control override obsolete 25/13 counts, old global M-2377 hold, no-legal-page and historical Gate limits. |
| `pages/applications/01_research/APP-000_PRODUCT_V0.3_RELATION_IMPACT_AUDIT_V0.1.md` | Preserve current relation interpretation and no new Specialty/Rubber page; historical route probes are not current runtime evidence. |
| `APP-000_APPLICATION_HUB_SIMPLIFICATION_DELTA_V0.1.md` | Reuse H1, Hero body, six anchors, exact grade order/sets, concise scope direction and positive final RFQ paragraph. Consolidate five guidance steps into three; remove Process directory and five FAQ items under the current control. |
| `APP-000_FINAL_POLISH_DELTA_V0.1.md` | Preserve Specialty-neutral meaning and Products/Documents/Markets ownership; improve local navigation wording. Never inherit the unapproved Mobile Quote/Footer entity proposal. |
| `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md` | Preserve the user's explicit removal of the separate negative RFQ qualification; do not reintroduce it elsewhere on the page. The later application-first final heading/body remains the source direction. |
| `visual-designs/APP-000_FULL_VISUAL_DESIGN_V0.12.md` | Reference only; no old visual approval or runtime claim is inherited as full-page approval. Gate 3/4 decide the new presentation against current B. |
| `docs/architecture/APP000_GATE2_TO_GATE9_CONTROL_V1.0.md` and Task 1 in the 2026-09-08 execution plan | Current five-module authoring direction, conditional states and preservation scope. These do not pre-approve the new full text. |

Source precision: external web addresses exist in the approved matrix's provenance, but B introduces no named external company, brand, public source attribution, external link, technical performance fact or current regulatory statement. The current content reuses the approved neutral relationship package within the same scope; it does not repeat or amplify the original website's technical copy.

### 4.3 Shared owner references

- Header/Menu/Footer: `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, its inherited approved Footer composition and fixed-RFQ contract, plus `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` and `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`. B's shared opening/closing are read-only assembly projections. Current shared owner source prevails if that projection needs synchronization; APP-000 does not own a Chrome variant.
- Production logos: `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`; no new raster/logo/ALT fact is created here.
- RFQ: approved Gate 7 Manifest V1.2 and its V1.0 exact receiver mapping plus V1.1 owner correction, cited in §2.2.
- Documents: `pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md`, consuming `DOC-000_GATE7_ROUTE_PREFILL_CONTRACT_V0.1.md`. APP-000 only opens the hub and does not bypass its document-request entry rules.

### 4.4 Dependencies and acceptance boundaries

| Dependency / owner | Required evidence or decision |
|---|---|
| APP-000 controller | Effective page route/canonical and public indexing decision recorded separately from content approval; single current Manifest binds the accepted B/C and review chain |
| Five Application owners | Effective URL/content approval and scoped route verification before their body links/ItemList destinations render; provisional status is not upgraded by this hub |
| Grade owners | Correct approved Grade Page ID/URL and scoped route evidence for linked labels; exact neutral labels remain otherwise |
| Products/Documents/Markets owners | Eligible approved endpoints and correct destination task; no false file availability, complete-directory duplication or child intent transfer |
| RFQ owner / Gate 8 | Source-only transport, clean canonical, unknown options, existing field cardinality and receipt semantics proven; no anchor-driven selection |
| Global Chrome/Legal/Consent owners | Fixed RFQ and required legal functions accessible; no unapproved Quote/entity/Terms variant |
| APP-000 Gate 3/4 | Progressive disclosure choice, complete 1440/768/390 reading sequence and conditional-state assembly; all required copy and relationships retained |
| Gate 8/9 | Scoped route/content/SEO/form/menu/media/cache behavior; no cross-scope fallback or leakage; actual implementation evidence, not legacy PNG/probe assumptions |

Queries, routing, cache identity, menus, SEO, forms and media must all resolve within `site_scope=tio2-my`. Runtime dependencies are recorded for Gate 6→8→9 and release; they do not automatically prohibit Gate 2 content completion. A new fact, recipient action, machine meaning, module responsibility or condition changes this C; a wording-only correction does not.
