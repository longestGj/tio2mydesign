# MARKET-EU-NL Gate 6 Handoff Package V0.1

Package ID: `NL-G6-HANDOFF-01`  
Date: 2026-09-07  
Page: `MARKET-EU-NL` / `/markets/netherlands/` / EN / `site_scope=tio2-my`  
Status: **`DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_ROOT_INDEPENDENT_REVIEW / NOT_APPROVED_FOR_HANDOFF / HANDED_OFF=NO`**

This is the single proposed development input for the Netherlands page. It is complete enough for independent review but is not yet approved, sent or authorized for Gate 8. The approved Buyer Clean B remains the sole copy editor source; this package binds and maps it rather than creating competing copy.

## 1. Receiving order and immutable authorities

1. Current candidate Manifest: `MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md` after it exists and passes independent review.
2. This package `NL-G6-HANDOFF-01` and Gate 6 review `NL-G6-CR-01`.
3. Approved Gate 2 B V0.2 and C V0.1 for exact visible copy and operation semantics.
4. Approved Gate 3 source/handoff for structural relationships.
5. Approved Gate 4 complete freeze `NL-G4-COMPLETE-V01-FREEZE-01`, its evidence index and accepted reviews.
6. Current shared owner contracts for Brand, Logo, Header/Footer, Legal/Consent, RFQ and Request Documents.

| Authority | Exact identity / role |
|---|---|
| Copy B | `04_planning/MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`; 4,159 bytes; SHA-256 `05945e5609fb12ffb04e791d4f4e2c2778b25158bb81f57d05e6d518503bff72`; sole exact visible-copy source |
| Contract C | `04_planning/MARKET-EU-NL_GATE2_CONTENT_CONTRACT_V0.1.md`; 5,762 bytes; `dcd67673cbb0142f5a1ed8d8eadd2a372d43ef5828472f986072cba18347c351`; actions, facts, SEO/GEO/Schema |
| Structure | `04_planning/gate3-v0.1/MARKET-EU-NL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`; 18,480 bytes; `3e2a57860ac2e2a5ebbfa7146d4ffd8f8d57553c3dfdb0a3d8f5833890559c9b` |
| Complete visual source | `04_planning/gate4-v0.2/MARKET-EU-NL_GATE4_VISUAL_SAMPLES_V0.2.html`; 18,534 bytes; `9ffe164adbf63246a36601990d1841dbb6af24fb177fbf559dbdc616a1396be3` |
| Page visual CSS | `04_planning/gate4-v0.2/visual-direction.css`; 1,163 bytes; `7bc0c880ad3dc5ceabeea9b78f3e92f0ac1740bc6ff1aa067bd8b54554ffd847` |
| Freeze | `04_planning/gate4-complete-v0.1/approval_core/source-freeze.json`; 13,317 bytes; `3de49e971b86d0d273ccce6967522b358bd58c25f91c8a0eba2974a547113456` |
| Evidence ledger | `04_planning/gate4-complete-v0.1/evidence-index.json`; 46,592 bytes; `07534b620b6bb9a4d974e228ac839df2ffe010b257e7440ac6645bf17f77d448`; 42 inherited + 3 complete images |
| Gate 4 approval | `NL-G4-COMPLETE-APPROVAL-01`; approved/closed, exact freeze unchanged |

Gate 8 must first inspect the existing implementation project, integrated pages and shared capabilities, then decide which prototype markup/style/behavior can be reused or adapted. The prototype is a planning source and may be a useful implementation reference; it is not promised to merge directly and its embedded Header/Footer/Menu/Cookie code must not become a Netherlands-owned shared fork.

## 2. Page identity, SEO ownership and content model meaning

| Field | Required value / behavior |
|---|---|
| Page ID / type | `MARKET-EU-NL` / Market procurement landing page |
| Route / language | `/markets/netherlands/` / `en`; no Dutch alternate is approved |
| Site scope | exact `tio2-my` |
| Primary keyword | `titanium dioxide supplier netherlands` |
| Secondary | `tio2 supplier netherlands`; `malaysia titanium dioxide netherlands` |
| Excluded ownership | generic application terms; exact Grade terms; Europe/EU supplier terms; detailed trade-update terms |
| Page lifecycle | remains planning/review state until project control closes Gate 6; implementation/release states are external |
| Content ownership | WordPress or the approved content source must manage the page identity, exact module copy, module order, route references, external source link, SEO fields and approved claims as page semantics. Gate 8 chooses concrete model and field names. |
| Presentation ownership | Next.js or the approved renderer must produce the visible order, responsive relationships, actions, metadata and Schema from `tio2-my` inputs. Gate 8 chooses components and API bindings after inspecting the project. |

No page-specific Product/Grade relation, recommendation, inventory, price, MOQ, delivery time, warehouse, local office, port service, tariff, customs treatment or shipment-specific certificate field may be inferred from this page.

## 3. Exact approved copy and module mapping

All visible Buyer Clean text, punctuation and inline links come from B V0.2 at the exact hash in §1. The HTML comment in B is document control and does not render. Do not retype from screenshots, author summaries or this table.

| Order / module | Approved source location | Required rendering and behavior |
|---:|---|---|
| 0 Shared Header | Global Chrome owner | Markets is current; fixed RFQ remains visible; no buyer-visible `CURRENT`. |
| Breadcrumb | first line of B | `Home / Markets / European Union / Netherlands`; first three are links to `/`, `/markets/`, `/markets/european-union/`; current item is text. |
| 1 `NL-01` Hero | H1 and opening paragraph in B | Exact H1, full IKHLAS name, Malaysia-origin statement and Netherlands evaluation context; primary `Request a Quote`, secondary `Explore Products`. |
| 2 `NL-02` Application requirements | corresponding H2 through three H3 blocks | VVVF source/section statement and no-grade-determination qualifier stay together. Coatings, Printing Inks, Plastics and Masterbatch remain three equal semantic objects. |
| 3 `NL-03` Product review | corresponding H2/paragraph/action | Neutral Product Hub review only; no preselection or Netherlands Grade recommendation. |
| 4 `NL-04` Documents | corresponding H2 through actions | Preserve TDS/SDS/COA/origin/supplier-qualification wording, exact COO-on-request sentence once, one structured Grade + one or more document types, supplementary Grade limitation and separate-request rule. |
| 5 `NL-05` RFQ | corresponding H2 through final CTA | Preserve one Grade or `Not sure / Need help`, other candidate Grades in Additional Requirements, MT, optional city/port, company/contact information and human-review/contact expectation. |
| 6 Shared Footer | Global Chrome + Legal/Consent owners | Shared groups, production reverse Logo, fixed RFQ, exact legal utilities, copyright and Cookie Settings function; no Terms. |

The page has no embedded form, selector, FAQ, pagination, media, page-owned empty state, page-owned validation state or page-owned success state. Do not create them to imitate the prototype or to satisfy a generic component template.

## 4. Facts, source and machine-readable boundary

- `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` is the operating-company identity used by the approved page.
- `Malaysia-origin titanium dioxide` is approved site-wide by `TIO2MY-MALAYSIA-ORIGIN-SITEWIDE-01`.
- Exact visible sentence: `A Certificate of Origin is available upon request.` It is approved for this page and semantically equivalent machine-readable use. It does not mean every shipment includes a COO, a named customs authority will accept it, or any tariff/preference applies.
- The VVVF link target is exact `https://www.vvvf.nl/brancheorganisatie`. Its visible use is limited to member-company market segments grouped into the listed sections and project-description context. It does not prove demand, market share, IKHLAS capability or Grade suitability.
- Coatings, printing inks, plastics and masterbatch are visible evaluation contexts. Do not emit hidden Grade/Application or country-suitability relationships.

## 5. Actions, route context and receiver behavior

| Source action | Target | Passed context | Required target behavior / forbidden inference |
|---|---|---|---|
| Hero + final `Request a Quote` and inline quotation link | `CONV-RFQ` `/request-a-quote/` | `source_page_id=MARKET-EU-NL`; destination country `Netherlands` visible and editable | Do not prefill Grade, application, quantity, city or port. Clean canonical excludes context/tracking parameters. Success only after positive receiver acknowledgement and means request received for human review. |
| Hero + product module `Explore Products` and inline Product Hub link | `PRODUCT-000` `/products/` | none beyond ordinary navigation/source analytics allowed by privacy contract | No Netherlands suitability, Grade or application preselection. |
| `Request Documents` | `CONV-DOC` `/request-documents/` | source attribution only | Do not prefill Grade, document type or Country/Region. The receiver requires one Grade before submission and one or more document types; extra Grades in free text are not mapped to document types. |
| `View Document Hub` | `DOC-000` `/documents/` | ordinary navigation | Information/navigation route, not public file inventory or download promise. |
| VVVF source link | external HTTPS URL above | no form or product context | Open as an external source according to current site link policy; its availability and continued support must be checked in runtime/release QA. |

Required final reader routes remain visible according to the approved complete-site contract. A missing or unready target is an internal dependency failure and must not create a buyer-visible governance label, empty slot, Contact/email fallback, cross-scope route fallback or changed destination.

## 6. Visual, responsive and accessibility requirements

| Surface | Frozen reference | Observable production requirement |
|---|---|---|
| 1440 Desktop | `approval_core/1440-full.png`; `2488597134b5d11e0d6dfcb8fa6ac3e6b27a927fab932d9828a7faea31cc04f0` | Complete Header-to-Footer flow; Hero and application three-column treatment; readable 1200px-class container; no clipped text or anomalous blank band. |
| 768 Tablet | `approval_core/768-full.png`; `1e33f8967f87d4a7163b1d92330ac48541e8c64e684d53ed5411c0aee0585b0f` | Compact Header; application prompts as labelled rows; all exact copy and actions present; no horizontal page overflow. |
| 390 Mobile | `approval_core/390-full.png`; `4a631b52b1d85cec1236c725752ee92adf435e731a1f9be1c8d6c77703183a6b` | Single-column flow; stacked full-width page actions; complete long copy; Footer closure; no horizontal overflow or fixed-action obstruction. |

Shared/focused states come from the frozen 42-image inherited set and current owner contracts: Desktop and Mobile current-state treatments, RFQ/inline-link hover and focus, 768/390 Mobile Menu, and `no_optional_analytics` Cookie Settings. Functional teal on light surfaces is `#008078`; `#00A99D` is not normal-size functional text/border on light surfaces. Controls have visible keyboard focus and applicable targets at least 44×44 CSS px. One H1 and continuous heading hierarchy are required.

Native 200% zoom, OS text scaling, physical devices, other engines and assistive technology are Gate 9 runtime checks. The Gate 4 720 CSS px @2x run is `LOCAL_SIMULATION`, not proof of native zoom.

## 7. Shared-owner references and current state

| Shared contract | Required consumption |
|---|---|
| Visual Standard V1.0 + Primary CTA Addendum V1.0 | Industrial Editorial hierarchy, Inter, Navy/Soft Background, accessible functional teal and restrained page treatment |
| Production SVG Logo Manifest V1.0 | `brand_logo_primary_horizontal` in light Header and `brand_logo_reverse_monochrome` on Deep Navy Footer; no page-private variant or raster fallback |
| Global Header/Footer V0.5 | fixed eight-item order, 84px Desktop / 64px compact Header, Markets current per surface, one accessible active navigation surface, permanent RFQ |
| Footer Legal Utility Addendum + No-Terms decision | Privacy EN `/privacy-policy/`, Privacy BM `/ms/privacy-policy/`, Cookie Policy `/cookie-policy/`, semantic `Cookie Settings` button; no `/terms-of-use/` dependency |
| Shared Consent current authority | current release state `no_optional_analytics`; no first-visit Analytics request; Footer control opens the minimal shared layer; no local Netherlands consent store, UI or analytics activation |
| CONV-RFQ current handed authority | page/receiver owner handles the RFQ workflow; recorded route exists but receiver environment remains open; the Netherlands page only supplies allowed context |
| CONV-DOC current Gate 9 authority | browser-direct Web3Forms receiver is current; provider acceptance is recorded, mailbox and production controls remain separate; Netherlands page supplies source only |

## 8. `site_scope=tio2-my` isolation and failure behavior

Page content, content query, route resolution, cache key/tag/invalidation, navigation, SEO/OG/Schema, media, form target/configuration, receiver context and analytics page identity must resolve inside `tio2-my`.

- Missing Netherlands or shared scoped data is an internal error/release blocker.
- Do not read or copy content, routes, menus, media, receiver values, metadata, cache or forms from TIOVAR, mytio2 or another scope as fallback.
- Do not expose Gate, Finding, readiness, provider, recipient, secret, test or approval fields to public HTML, JSON, API, Schema, Meta, OG, ALT or buyer-visible UI.
- Gate 8 must report its actual model/API/component/cache choices and affected shared consumers; this package does not prescribe names or code paths.

## 9. Open dependencies

| ID | Requirement / current evidence | Owner / validation stage | Failure treatment |
|---|---|---|---|
| `NL-DEP-01` | Consume current shared Chrome, Logo, legal utilities and `no_optional_analytics` Consent; no page clone | Shared owners; Gate 8/9 | `NL-G9-AC-06` fails; block page acceptance/release. |
| `NL-DEP-02` | RFQ target, visible/editable Netherlands, source attribution and actual positive receipt; route HTTP 200 alone is insufficient | CONV-RFQ + operational owner; Gate 8/9 | `NL-G9-AC-08` fails; no success/availability claim or fallback. |
| `NL-DEP-03` | Request Documents target/source-only context and actual receiver/release controls | CONV-DOC + operational owner; Gate 9/10 | `NL-G9-AC-09` fails for incorrect integration; mailbox/release evidence remains owned by CONV-DOC. |
| `NL-DEP-04` | VVVF target remains reachable and continues to support the visible scoped expression | Content/source owner; Gate 9/10 | `NL-G9-AC-03` fails; reassess source/copy through owner, no silent expansion. |
| `NL-DEP-05` | Live metadata, canonical, Schema, route, sitemap and robots/indexing state | Gate 8/9; Gate 10 for release/index | `NL-G9-AC-10` or `-01` fails; indexing stays off until authorized. |
| `NL-DEP-06` | Native zoom, breakpoint focus, devices/engines and assistive technology | Gate 9 | `NL-G9-AC-05` fails if actual behavior violates the contract. |

## 10. Stable Gate 9 acceptance contract

These IDs are stable across Gate 6→8→9. Gate 8 must bind each result to the exact implementation commit/ref, worktree state, environment, content/data source and evidence. A screenshot proves only the visible state shown; HTTP 200 proves only route response; local interception proves no receiver result.

| ID | Source and precondition | Expected observable result | Required evidence | Non-pass condition | Owner / stage |
|---|---|---|---|---|---|
| `NL-G9-AC-01` Identity/route | Clean request to registered route in `tio2-my` | One EN Netherlands Market page at `/markets/netherlands/`; self-canonical clean URL; approved indexing state; no alternate-language claim | rendered URL/head, route/data trace, canonical/robots/sitemap capture | wrong Page ID/language/route, duplicate page, parameter canonical, premature indexing or cross-scope resolution | Gate 8 / Gate 9; Gate 10 controls index activation |
| `NL-G9-AC-02` Content/facts | Approved B/C loaded | Full five-module copy/order, exact H1, IKHLAS/Malaysia-origin meaning, one exact COO sentence and prohibited claims absent | server-rendered text/DOM extraction compared with B hash; visible page capture | missing/reworded meaning, duplicate COO, unsupported local/Grade/trade/shipment promise, governance text exposed | Gate 8 / Gate 9 |
| `NL-G9-AC-03` VVVF source fidelity | External source enabled | Exact organization label/URL, listed context and no-grade qualifier remain connected; destination reachable and support still adequate at review time | DOM/link capture, actual destination response/content review with date | wrong target/label, qualifier detached, unsupported broadened claim, broken/misdirected link | Gate 8 / Gate 9–10 source owner |
| `NL-G9-AC-04` Complete visual | Approved content and shared Chrome loaded at 1440/768/390 | Hierarchy, five sections, action priority and Footer closure materially match frozen complete pages; all copy visible, no clipping/blank-band/overlay failure | full-page screenshots plus measured viewport/scroll geometry | missing module/state, unreadable/cropped copy, action inversion, anomalous gap, horizontal overflow or obstruction | Gate 8 / Gate 9 |
| `NL-G9-AC-05` Responsive/a11y | Keyboard, zoom, compact/desktop breakpoints and applicable AT available | One H1, continuous headings, logical focus, visible focus, ≥44×44 targets, Menu/Cookie focus containment/return, no inactive-nav focus/exposure, 200% usable; breakpoint transition has no keyboard trap | keyboard trace, accessibility tree, target/overflow measurements, native 200% and representative device/engine/AT evidence | trap/hidden focus, inaccessible duplicate nav, lost content/action, color-only state, undersized target or two-dimensional page scroll | Shared owner + Gate 8 / Gate 9 |
| `NL-G9-AC-06` Shared consumption | Current shared packages resolved | Markets current per active surface; exact nav order and Header geometry; correct production Logos; fixed RFQ; exact legal links/Cookie button; no Terms; current Consent state | component/data provenance, active accessibility tree, Header/Footer/Menu/Cookie captures and interaction trace | page-local fork, wrong current cardinality, stale/current label, wrong Logo, missing/failing legal/consent control or Analytics activation outside authority | Shared owners + Gate 8 / Gate 9 |
| `NL-G9-AC-07` Internal routes/actions | Each page link activated in production-equivalent build | Products, Documents, Markets/EU and all page CTAs resolve to registered same-scope targets with expected labels/context and clean fallback-free behavior | click/navigation trace and target identity/source-scope evidence | dead/wrong/cross-scope route, silent hide/disable, empty slot, Contact/email substitute, changed CTA meaning | Gate 8 / Gate 9 |
| `NL-G9-AC-08` RFQ integration | RFQ route and verified receiver configured | Netherlands is visible/editable; source attribution preserved; no extra prefill; failure/unavailable retains accurate state; success only on positive receipt and means human review | target field/value trace, request/response mapping, failure/retry/unavailable run, positive receiver and actual receipt evidence where required | HTTP/click/local simulation treated as success, hidden/uneditable country, inferred fields, false receipt, fallback receiver or cross-scope config | CONV-RFQ + Gate 8 / Gate 9 |
| `NL-G9-AC-09` Request Documents integration | CONV-DOC route/current receiver available | Source attribution only; no Grade/document/Country prefill; one Grade + one or more types semantics; provider/receipt meaning stays with CONV-DOC | target initial-state capture, payload/source trace, positive/failure evidence under current owner authority | forbidden prefill, multi-Grade type mapping, direct-download promise, ambiguous response shown as success, recipient/credential exposure | CONV-DOC + Gate 8 / Gate 9–10 |
| `NL-G9-AC-10` SEO/GEO/Schema/OG | `tio2-my` page record rendered | Exact SEO Title and Meta from C; clean canonical; EN; `WebPage` + matching `BreadcrumbList` and shared references only; social/GEO semantics do not exceed visible facts | rendered head/JSON-LD/SSR or initial HTML capture, Schema parse and visible-content comparison | missing/wrong fields, JS-only unindexed core, LocalBusiness/Product/Offer/FAQ/HowTo/certification/shipping or hidden Grade-country relationships, query changes metadata | Gate 8 / Gate 9 |
| `NL-G9-AC-11` Scope isolation | correct, missing and wrong-scope fixtures | Correct scope renders; missing/wrong scope fails closed internally; no content/menu/media/SEO/cache/route/form/receiver fallback or leakage | query/API/cache/route/form/media traces for all three fixtures and cross-scope regression | any TIOVAR/mytio2/other-scope datum, receiver, menu, media, metadata or cached response appears | Gate 8 / Gate 9 |
| `NL-G9-AC-12` Provenance/change control | implementation receipt prepared | Receipt maps B/C/G3/G4 freeze and this package to actual content/data/components, lists deviations/unverified items and preserves rollback without changing approved meaning | commit/ref, clean/dirty state, mapping ledger, test evidence, diff and rollback note | unverifiable source, silently retyped copy, unapproved semantic/shared change, missing dependency disposition or self-reported generic PASS only | Gate 8 / Gate 9 project control |

## 11. Gate 8 adaptation and stop boundary

Gate 8 may implement this one page and its page-local content/SEO/action bindings only after separate authorization and actual handoff. It must consume shared owners and target workflows; it does not gain authority to redesign or implement Global Chrome, Legal/Consent, RFQ, Request Documents, Products, Documents or the VVVF site.

If the existing project has equivalent `tio2-my` content, route or components, adapt and extend them while preserving this contract and checking affected consumers. If the existing system cannot express the approved semantics, report the exact compatibility gap and proposed regression scope to the proper owner. Do not solve it by creating a parallel CMS, page-local shared component, invented field, copied receiver, hidden route or cross-scope fallback.

This package contains no code, test implementation, credential, external message or release instruction. Gate 6 approval, actual dispatch, Gate 8, Gate 9 and Gate 10 remain separate recorded events.
