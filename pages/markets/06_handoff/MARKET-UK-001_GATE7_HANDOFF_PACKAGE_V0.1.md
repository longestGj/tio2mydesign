# MARKET-UK-001 Gate 7 Development Handoff Package V0.1

## 0. Document control

| Field | Value |
|---|---|
| Package ID | `MARKET-UK-001-G7-HANDOFF-01` |
| Page | `MARKET-UK-001` / United Kingdom |
| Public URL | `/markets/united-kingdom/` |
| Site scope | `tio2-my` |
| Language | EN |
| Priority | P0 |
| User Gate 7 authorization | Explicitly granted on 2026-09-05 |
| Current package status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Page lifecycle | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| Gate 8–10 | `LOCKED / NOT_AUTHORIZED` |
| Other Market pages | Not included and not authorized |
| Production/release | Not authorized |

This package translates the approved Gate 5 visual baseline and project-control-passed Gate 6 contracts into an implementation-neutral delivery specification. It contains no WordPress, Next.js, CMS, component, styling, test or deployment code and does not access the external development project.

## 1. Authoritative inputs

Consume these records in order:

1. `AGENTS.md` and current explicit user decisions.
2. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
3. `docs/architecture/PAGE_REGISTRY_V0.1.md`.
4. `research/keyword/11_page_keyword_master.csv`, row `MARKET-UK-001`.
5. `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`.
6. `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.5.md`.
7. `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.4.md`.
8. `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.4.md`.
9. `pages/markets/04_planning/wireframes/MARKET-UK-001_GATE3_WIREFRAME_SPEC_V0.2.md`.
10. `pages/markets/04_planning/visual-directions/MARKET-UK-001_GATE4_VISUAL_DIRECTION_V0.1.md`.
11. `pages/markets/04_planning/visual-designs/MARKET-UK-001_GATE5_FULL_VISUAL_SPEC_V0.1.md` and its approved visual assets.
12. `pages/markets/04_planning/visual-designs/MARKET-UK-001_GATE5_RESPONSIVE_AND_CONDITIONAL_STATES_V0.1.md`.
13. `pages/markets/05_review/MARKET-UK-001_CURRENT_GATE1_5_MANIFEST_V0.6.md`.
14. `pages/markets/05_review/MARKET-UK-001_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`.
15. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.
16. `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
17. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`.
18. `pages/markets/06_handoff/MARKET-UK-001_GATE7_MANIFEST_V0.1.md` for this package inventory.

Historical drafts do not override these current records.

## 2. Page identity and keyword contract

| Field | Locked value |
|---|---|
| Page ID | `MARKET-UK-001` |
| URL | `/markets/united-kingdom/` |
| Page type | Market procurement landing page |
| Market / language | UK / EN |
| Primary keyword | `titanium dioxide supplier uk` |
| Search intent | Commercial supplier search / procurement evaluation |
| Priority | P0 |
| Mapping | `APPROVED_PRD_V0.3` |
| Verification | `QUALITATIVE_KEYWORD_EVIDENCE` |
| H1 | `Malaysia-Origin Titanium Dioxide for United Kingdom Buyers` |
| Page role | Help UK industrial buyers explore applications and representative Grades, choose the GB or NI assessment path, prepare document needs and submit a qualified RFQ |

The page must not target generic Application terms, exact Grade keywords or detailed UK trade-investigation queries. It must not claim UK establishment, local stock, local manufacturing, product registration, certification, inventory, delivery or tariff outcomes.

## 3. Approved semantic order

All viewports use:

`Global Header → Breadcrumb → Hero → Direct Answer → Application Paths → Representative Grades → Great Britain or Northern Ireland → Procurement Checklist → Documents → Malaysia Origin → UK Import and Trade Check → Buyer Questions → Final RFQ → Global Footer`

The complete approved copy is frozen in Gate 2 V0.4 and mapped by the Gate 7 CMS/API/component document. Shortening copy to fit is prohibited.

## 4. Approved visual baseline

| View / state | Asset | Dimensions | SHA-256 |
|---|---|---:|---|
| Desktop complete | `MARKET-UK-001_GATE5_FULL_DESKTOP_1440_V0.1.png` | 1440×8177 | `5197c6b2b997ebaae75c2617fc9d0339a3de4b949a7dbe52745d7107304ed41b` |
| Tablet complete | `MARKET-UK-001_GATE5_FULL_TABLET_768_V0.1.png` | 768×10724 | `37712250a50b56b044fc9c067735c483e530273c0499a759a8b9d92d2243d686` |
| Mobile complete | `MARKET-UK-001_GATE5_FULL_MOBILE_390_V0.1.png` | 390×14770 | `122d28a26e63d7034c9c2e330696ee6429f6e28e64bfab0581ce715c16479a56` |
| Mobile Menu open/focus | `MARKET-UK-001_GATE5_MOBILE_MENU_OPEN_FOCUS_390_V0.1.png` | 390×844 | `57ccc0a11bad4bc16e15ff929dbdb599bdef45dff05e5d6b2eeabde32653886b` |
| FAQ expanded | `MARKET-UK-001_GATE5_FAQ_ALL_EXPANDED_DESKTOP_1440_V0.1.png` | 1440×1247 | `68e20e6bc34028c6fd35a2065c041f41c0538048406da30a9e9f256654f080c0` |
| FAQ collapsed | `MARKET-UK-001_GATE5_FAQ_ALL_COLLAPSED_MOBILE_390_V0.1.png` | 390×808 | `a837e237747e464a4c6d912e0b91fa75c8a6bb590f6369fba48d9bd69d00d13d` |
| Documents focus | `MARKET-UK-001_GATE5_DOCUMENTS_FOCUS_DESKTOP_1440_V0.1.png` | 1440×772 | `96b3301ef310a49d6cc84641909eb69881b9ef8892a4da804b8e7d25d33740be` |
| Planning source | `MARKET-UK-001_GATE5_FULL_VISUAL_V0.1.html` | Responsive | `988e0d2cfa3f2883e4c5ff70b90590894f754aff467977ebe0503e0fd9c9acba` |

Asset directory: `pages/markets/04_planning/visual-designs/market-uk-001/v0.1/`. PNG and HTML files are planning evidence, not production implementation code.

## 5. Module delivery contract

| Module | Required content | Rendering contract | Restricted/empty behavior |
|---|---|---|---|
| Global Header | Approved shared navigation, Markets current, fixed RFQ | Desktop full nav; Mobile `Logo | RFQ | Menu`; shared RFQ href is exactly `/request-a-quote/` | Missing scoped menu/RFQ blocks release; never hide, append page parameters or use cross-scope fallback |
| Breadcrumb | Home → Markets → United Kingdom | Server-rendered semantic list with 3 items: Home link, Markets link and United Kingdom current non-link item | Gate 9 verifies 2 links + 1 current item, current-page semantics and no United Kingdom self-link |
| Hero | UK eyebrow, one H1, approved body, RFQ, Applications anchor, Request Documents | One H1; three actions in approved priority | No UK-local or logistics image/claim |
| Direct Answer | Exact answer, operator line, Applications anchor | Visible and extractable | No hidden GEO-only answer |
| Application Paths | Five applications and general-use copy | Five normal anchors plus hub action | No Grade/process/UK-fit inference |
| Representative Grades | Six exact discovery cards and two group intros | Three Coatings; three Plastics/Masterbatch | No process, ranking, availability or UK recommendation |
| GB/NI | Equal Great Britain and Northern Ireland panels | Text owns meaning; official HSE links | No flag/map shortcut or compliance guarantee |
| Procurement Checklist | Six ordered inputs | Content-driven layout | No promise produced from entered inputs |
| Documents | Four document groups, one COO statement | Request Documents + Documents Hub | Missing evidence removes only unapproved additions |
| Malaysia Origin | Approved product-origin context | About action | No UK establishment/customs outcome |
| Trade | Evergreen guidance and official links | Dated paragraph/internal Update atomically conditional | Absent conditional state collapses fully |
| Buyer Questions | Six exact Q/A records | Initial server-rendered DOM; disclosure optional | No `FAQPage`/`QAPage` |
| Final RFQ | Exact UK-context request guidance | RFQ + Documents + Products actions | Form states remain on RFQ owner |
| Global Footer | Approved Deep Navy shared Footer | Fixed RFQ at exactly `/request-a-quote/` and legal utilities | Production Logo from shared Manifest only; no page-context query on shared RFQ |

No Buyer Clean output may expose Gate, review, evidence, route-readiness, `site_scope`, workflow, hold or release-blocker language.

## 6. Internal route and anchor contract

| Page ID / type | Planned target | Visible use | Gate 7 state |
|---|---|---|---|
| `HOME-001` | `/` | Header/Footer Home and breadcrumb | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `MARKET-000` | `/markets/` | Header, breadcrumb and Footer Markets | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `PRODUCT-000` | `/products/` | Header/Footer and all-products actions | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-000` | `/applications/` | Header/Footer and all-applications actions | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `DOC-000` | `/documents/` | Header/Footer and Documents action | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `RES-000` | `/resources/` | Header/Footer | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `ABOUT-001` | `/about/` | Header/Footer and origin action | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `CONV-DOC` | `/request-documents/` | Hero, Documents and Final RFQ | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `CONV-RFQ` | Shared Global Chrome: `/request-a-quote/`; page-body Hero and Final RFQ: `/request-a-quote/?market=United%20Kingdom&source_page=MARKET-UK-001` | Shared and page-body RFQ actions use distinct approved URL contracts to the same owner | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-COAT` | `/applications/titanium-dioxide-for-coatings/` | Coatings | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-PLAS` | `/applications/titanium-dioxide-for-plastics/` | Plastics | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-MB` | `/applications/titanium-dioxide-for-masterbatch/` | Masterbatch | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-INK` | `/applications/titanium-dioxide-for-printing-inks/` | Printing Inks | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `APP-PAPER` | `/applications/titanium-dioxide-for-paper/` | Paper | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M350` | `/products/m-350/` | M-350 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M510` | `/products/m-510/` | M-510 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M896` | `/products/m-896/` | M-896 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M200` | `/products/m-200/` | M-200 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M108` | `/products/m-108/` | M-108 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| `GRADE-M210` | `/products/m-210/` | M-210 | `NOT_VERIFIED_LIVE / REQUIRED_FINAL_TARGET` |
| Legal utility | `/privacy-policy/` | Footer Privacy Policy | Shared owner contract; Gate 9 verification |
| Legal utility | `/ms/privacy-policy/` | Footer Dasar Privasi (BM) | Shared owner contract; Gate 9 verification |
| Legal utility | `/cookie-policy/` | Footer Cookie Policy | Shared owner contract; Gate 9 verification |
| Consent control | no URL | Footer Cookie Settings button | Invoke Consent Manager; never an anchor |
| Local anchor | `#application-paths` | Hero and Direct Answer | Required; unique focusable target |
| Local anchor | `#representative-grades` | Applications next step | Required; unique focusable target |

Stable Page IDs must resolve the registered paths; do not infer or concatenate URLs. Gate 8 implements them inside `tio2-my`; Gate 9 verifies response, redirect, Canonical, rendered anchor and scope isolation.

## 7. Official external source contract

| Visible label | URL | Use | Release behavior |
|---|---|---|---|
| Check UK REACH roles — HSE | `https://www.hse.gov.uk/REACH/roles.htm` | GB importer/Only Representative roles | Recheck before release |
| Check Northern Ireland REACH — HSE | `https://www.hse.gov.uk/reach/about.htm` | UK REACH / EU REACH territorial split | Recheck before release |
| Check GB and Northern Ireland chemical classification — HSE | `https://www.hse.gov.uk/chemical-classification/brexit.htm` | GB CLP / EU CLP split | Recheck before release |
| Check the UK Trade Tariff — GOV.UK | `https://www.gov.uk/trade-tariff` | Product-specific classification/duty/VAT lookup | Never infer a code or rate |
| Review active TRA investigations — Trade Remedies Authority | `https://public-file.trade-remedies.service.gov.uk/` | Current official investigation source | Time-sensitive; recheck before release |

External links use normal anchors, visible source names and safe external-link semantics. A failed or changed source requires content review; it must not silently redirect to an unofficial replacement.

## 8. SEO, GEO and Schema handoff

| Element | Delivery value / behavior |
|---|---|
| Title | `Malaysia Titanium Dioxide Supplier for UK Buyers | TiO2 Malaysia` |
| Meta | `Explore Malaysia-origin titanium dioxide for UK industrial applications, representative grades, GB or NI review paths, documents and RFQ steps.` |
| Canonical | `https://tio2malaysia.com/markets/united-kingdom/` |
| Language | `en` |
| Hreflang | none / `NOT_APPLICABLE` |
| Staging robots | `noindex, nofollow` |
| Production robots | `index, follow` only after Gate 9 and release authorization |
| Sitemap | One self-Canonical URL after release authorization |
| OG title | `Malaysia Titanium Dioxide Supplier for UK Buyers` |
| OG description | Same visible meaning as Hero/Meta; no additional capability or Trade claim |
| Allowed Schema | `WebPage`, `BreadcrumbList`, conditional six-item `ItemList` |
| Prohibited Schema | `FAQPage`, `QAPage`, `LocalBusiness`, `Offer`, inventory/delivery, Product process/comparison and hidden relationships |

The seven approved GEO answers must remain visible in substantially equivalent wording. `ItemList` is allowed only when the same six Grade links render and resolve; it carries name/URL only and no UK suitability, availability or offer semantics.

## 9. PRODUCT V0.3 relationship boundary

`PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` is the sole relationship authority. The only row-level relations exposed are:

- `REL-M350-COAT`, `REL-M510-COAT`, `REL-M896-COAT`;
- `REL-M200-PLAS`, `REL-M200-MB`;
- `REL-M108-PLAS`, `REL-M108-MB`;
- `REL-M210-PLAS`, `REL-M210-MB`.

Visible grouping is three Coatings Grades and three Grades labelled Plastics · Masterbatch. Process fields must not render. M-2377 is outside this page set; M-996/M-2196 comparison remains frozen; `NO_PUBLIC_MAPPING` never becomes an unsuitability statement.

## 10. Trade and conditional-state contract

Default Buyer Clean uses the evergreen Trade body and two official links. The dated AD0086 paragraph and `RES-TRADE-UK` action are an atomic future state and remain absent unless all conditions pass together:

1. official status checked on the publication day;
2. exact dated wording approved;
3. `RES-TRADE-UK` content approved and current;
4. its registered Canonical is consistent and route-ready;
5. visible copy and machine-readable output remain equivalent.

Failure of any condition returns to the evergreen state with no empty container, separator, anchor or Schema item. No rate, exemption, preference, circumvention or transaction outcome may be inferred.

## 11. RFQ contract

- Global Chrome RFQ and page-body RFQ remain visible in the approved surfaces.
- Header, Mobile Header, Mobile Menu and Footer consume the shared Global Chrome component unchanged; every shared RFQ href is exactly `/request-a-quote/` with no page query parameters.
- Only the MARKET-UK-001 Hero and Final RFQ actions may use `/request-a-quote/?market=United%20Kingdom&source_page=MARKET-UK-001`.
- All RFQ surfaces resolve to `CONV-RFQ`, but the shared bare-path contract and page-body contextual-path contract must be implemented and verified separately.
- Prefilled market remains visible and editable.
- GB/NI destination and Grade remain empty unless explicitly selected by the buyer.
- `rfq_route_ready=false` blocks release; it does not hide, disable or replace RFQ with Contact.
- Validation, privacy, receiver, duplicate prevention, error, success and acknowledgement belong to the RFQ owner.
- Acknowledgement means received for human assessment, not price, stock, document, delivery or suitability approval.

The approved Gate 5 HTML is retained solely as frozen visual/planning evidence. Its historical use of UK query parameters on shared RFQ surfaces does not define runtime behavior and must not be copied into implementation. This Gate 7 contract overrides that planning-source URL behavior without changing the HTML file, pixels or SHA-256.

## 12. Global Chrome and production Logo

- Header order: `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Mobile Header: `Logo | RFQ | Menu`.
- Header, Mobile Header, Mobile Menu and Footer RFQ href: exactly `/request-a-quote/`.
- Markets current state uses `aria-current=page` plus visible non-colour treatment.
- Footer follows the approved Deep Navy layout and legal utility order.
- Logo assets resolve only through `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
- Use `brand_logo_primary_horizontal` on light Header surfaces and `brand_logo_reverse_monochrome` on Deep Navy Footer surfaces.
- Do not copy/rewrite SVGs or use Gate 5 PNG evidence as production Logo input.

## 13. Responsive and accessibility contract

### Desktop 1440

- Full Header navigation and approved two-column Hero.
- Application cards and Grade groups retain approved grid hierarchy.
- GB/NI panels remain equal decision paths.
- No crop, overlap, fixed-height truncation or decorative empty band.

### Tablet 768

- Shared compact Header and menu behavior.
- Content stacks according to approved Gate 5 layout without semantic reordering.
- Long H2, GB/NI, checklist, Documents and FAQ copy wrap naturally.

### Mobile 390

- Single-column content; no horizontal scroll or clipped borders.
- Body and Q/A text remain 16px with approved line height; labels are at least 14px.
- Interactive targets are at least 44×44 logical pixels.
- Menu contains focus, wraps Tab/Shift+Tab, closes on Escape, restores focus and prevents background scroll while open.

### Semantic requirements

- One H1 and ordered H2/H3 hierarchy.
- Header, Breadcrumb and Footer groups use semantic navigation.
- Breadcrumb contains exactly three ordered items: Home and Markets are links; United Kingdom is the current non-link item with `aria-current="page"` on that item or an equivalent standards-valid current-page semantic.
- Destinations and CTAs use normal crawlable anchors.
- Local target headings can receive focus without being obscured by fixed Chrome.
- FAQ answers exist in the initial server-rendered DOM; disclosure controls expose name/state.
- Visible focus is not colour-only.
- Logo Home link has one useful accessible name.
- Reduced motion removes nonessential movement without removing information.

## 14. `site_scope=tio2-my` isolation

Gate 8 must scope all content queries, route resolution, internal relations, menus, metadata, Canonical, sitemap, Schema, forms/prefill, media, Logo resolution, cache keys, revalidation tags and analytics IDs to `tio2-my`.

Missing Malaysia content is a release blocker. It must not fall back to TIOVAR, mytio2 or another scope. Cross-scope content, route, menu, media, cache, metadata or form leakage blocks Gate 9.

## 15. Phase boundary

- Gate 7 defines and reviews this delivery package; it does not implement it.
- Gate 8 implementation is external and needs separate user authorization.
- Gate 9 is read-only QA against an accessible implementation.
- Gate 10 publication/indexing requires separate user authorization.
- No other Market page is included.
- `D:\16Wordpress_nextjs` is outside this task and was not accessed.

## 16. Gate 7 targeted-review record

| ID | Finding / action | Current status |
|---|---|---|
| `MARKET-UK-001-G7-PCR-01` | Initial Gate 7 project-control review | `CONDITIONAL_RETURN / SUPERSEDED_BY_PCR-02` |
| `MARKET-UK-001-G7-P0-01` | Separate the shared Global Chrome bare RFQ path from the two contextual page-body RFQ paths; preserve Gate 5 evidence unchanged | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-P1-01` | Correct Breadcrumb to 3 items / 2 links + 1 current non-link item with current-page semantics | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-PCR-02` | Targeted project-control re-review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 17. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created the implementation-neutral MARKET-UK-001 Gate 7 package from the approved Gate 5 baseline and project-control-passed Gate 6 audit. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 8 locked |
| V0.1 targeted revision | 2026-09-05 | Resolved P0-01 by locking shared Global Chrome RFQ to `/request-a-quote/` while retaining contextual queries only on Hero and Final RFQ; resolved P1-01 by defining 3 Breadcrumb items as 2 links plus 1 current non-link item. Gate 5 evidence remains unchanged. | `RESOLVED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW`; `MARKET-UK-001-G7-PCR-02` open; Gate 8 locked |
| V0.1 targeted review PASS | 2026-09-05 | Recorded PCR-02, P0-01 and P1-01 as project-control PASS/CLOSED; promoted the package to the approved Gate 7 handoff baseline without marking it handed off or authorizing Gate 8. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION`; lifecycle=`APPROVED_FOR_HANDOFF` |
