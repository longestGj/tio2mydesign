# HOME-001 Gate 6 Project-Control Review Submission V0.1

## 0. Submission status

| Field | Value |
|---|---|
| Page | `HOME-001` / Home |
| URL | `/` |
| Language | EN |
| Priority | P0 |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 5 | `APPROVED / CLOSED` — user approval dated 2026-08-31 |
| Gate 6 | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 6 result | `PENDING_PROJECT_CONTROL_DECISION` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Submission scope | Project-control review only; no implementation, handoff, development or release |

This document does not judge Gate 6 as passed. It provides the formal review entry, evidence and open issues for project control.

## 1. Review authority and inputs

### Project governance

- `AGENTS.md`
- `00_PROJECT_STATUS.md`
- `01_PROJECT_INDEX.md`
- `docs/architecture/PAGE_REGISTRY_V0.1.md`
- `pages/WEBSITE_VISUAL_CONTENT_SEO_GEO_REVIEW_STANDARD_V1.0.md`

### Page identity and SEO architecture

- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
- `research/keyword/11_page_keyword_master.csv`, row `HOME-001`
- `pages/home/04_planning/01_homepage_content_architecture_v0.2.md`
- `pages/home/04_planning/02_homepage_wireframe_spec_v0.1.md`

### Visual and shared-component baselines

- `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`
- `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md`
- `pages/home/04_planning/09_homepage_pc_final_copy_visual_v0.7.md`
- `pages/home/04_planning/10_homepage_mobile_visual_revision_v0.6.md`
- `pages/home/04_planning/11_homepage_mobile_remove_rfq_v0.6.1.md`
- `pages/home/05_review/HOME-001_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`

## 2. Page contract under review

| Contract field | Current value |
|---|---|
| Primary keyword | `malaysia titanium dioxide` |
| Secondary keywords | `titanium dioxide malaysia`; `malaysia tio2`; `titanium dioxide supplier malaysia`; `malaysia titanium dioxide supplier`; `malaysia titanium dioxide exporter`; `export titanium dioxide from malaysia` |
| Search intent | Commercial supplier search |
| Buyer stage | Supplier Search |
| Page role | Own the broad Malaysia TiO₂ and Malaysia supplier proposition; route buyers to Markets, Products, Applications, Documents, Company information, Resources and RFQ. |
| Excluded intent | Country-specific supplier terms; exact grade terms; non-China guide terms; company-proof terms; detailed document terms |
| Cannibalization boundary | Home owns broad commercial Malaysia supply intent; About owns manufacturer/origin/manufacturing/traceability proof; Market pages own destination-country intent; Products owns product-family and grade intent; Applications owns use-case intent; Documents owns document detail/request; Resources owns research and trade-update intent. |
| Mapping status | `APPROVED_PRD_V0.3` |
| Keyword evidence | `QUALITATIVE_KEYWORD_EVIDENCE` |

## 3. Formal Gate 5 assets submitted

| Review view/state | File | Dimensions |
|---|---|---:|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.7.png` | 1440×5683 |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.1.png` | 390×8884 |
| Mobile Menu Open | `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 |
| Global Chrome Desktop states | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440×1380 |
| Global Chrome Mobile states | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390×1690 |

Hashes and dependency limits are recorded in the Gate 5 manifest.

## 4. Buyer Clean review scope

Project control should verify that the formal Desktop and Mobile visuals:

- contain no page IDs, `pending`, `not live`, production notes or evidence-gate labels in buyer-facing UI;
- do not display factory, laboratory, warehouse, shipment, certification or other proof imagery;
- do not claim manufacture in Malaysia, COO availability, batch traceability, inventory, lead time, capacity, duty savings, tariff status or guaranteed document availability;
- retain an industrial B2B, technical and trustworthy visual language;
- use the Hero material image only as a neutral atmosphere asset;
- retain a clear H1, buyer purpose, product/market/application/document paths and RFQ access.

Existing automated Buyer Clean scans report no internal-state terms or unsupported-claim phrases. Project control must still perform human review.

## 5. Content and information hierarchy

### Desktop order

`Header → Hero → Start Here → Markets → Products → Applications → Company → Documents → Resources / Buyer Answers → page RFQ Section → Footer`

### Mobile order

`Header → Hero → Start Here → Markets → Products → Applications → Company → Documents → Resources / Buyer Answers → Footer`

The Mobile page-level RFQ Section was removed by explicit user decision on 2026-08-31. Header, Hero and Footer RFQ access remains. Gate 6 must review whether the approved Desktop/Mobile difference requires a formal content-architecture amendment before handoff.

## 6. Fact and evidence register

| Visible fact or implication | Current basis | State for Gate 6 |
|---|---|---|
| Brand: TiO₂ Malaysia | Project baseline | Verified project identity |
| Operating entity: IKHLAS TITANIUM (MALAYSIA) SDN. BHD. | Root project baseline / approved Home copy | Verified project identity for current planning |
| Four target markets: EU, UK, India, Brazil | PRD V0.4 / keyword master | Approved architecture |
| Four product groups / fourteen grades | PRD V0.4 and approved PRODUCT V0.3 relation baseline | Approved product architecture |
| M-2377 retained | Approved PRODUCT V0.3 evidence decision | Verified for public mapping; no warning state |
| `sourcing titanium dioxide from Malaysia` Hero wording | Approved strategic positioning and user-approved visual copy | Gate 6 to confirm public evidence phrasing remains within strategic-positioning boundary |
| Origin/manufacturing/COO/traceability | Not asserted as proof on Home | About/Documents evidence gates remain closed |
| Product and procurement documentation | Home explains information/request paths only | No availability guarantee; Documents evidence gates remain closed |
| Market trade, tariff and anti-dumping claims | Not rendered | Official-source/freshness gates remain closed |
| Hero material image | AI-created neutral material composition | Atmosphere only; not evidence |
| Current Logo PNG | Visual-direction asset | Production SVG/clearance not established |

## 7. SEO review entry

### Current strengths to verify

- One visible H1: `Malaysia Titanium Dioxide for Industrial Buyers`.
- Primary keyword appears naturally at the start of the H1.
- The Hero supports international industrial-buyer and supplier-search intent without manufacturer wording.
- Markets, Products, Applications, Documents, Resources and About retain distinct summary roles.
- Desktop exposes all fourteen grade IDs without fourteen long cards.
- Mobile preserves the direct four-group/fourteen-grade statement without forcing fourteen chips.
- Country supplier keywords, exact grade intent, application-detail intent and company-proof intent remain assigned to their canonical owners.

### SEO items requiring Gate 6 decision or later specification

- Final HTML `<title>` is not locked in an approved SEO field document.
- Final Meta Description is not locked.
- Canonical is expected to be `/`, but no Home delivery field has yet been approved.
- Index/follow status has not been converted into a page delivery contract.
- Final hrefs and anchor targets are not implemented or route-validated in the static visual.
- Application, Documents and Resources destination statuses remain mixed between approved hubs and planned/provisional pages.
- No tablet visual has been submitted; only Desktop plus 375/390/430 mobile checks exist.

## 8. GEO and Schema review entry

### Visible direct-answer relationships

1. `TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`
2. Fourteen grades are organised into four product groups.
3. Coatings, Plastics, Masterbatch, Printing Inks and Paper are explicitly connected to titanium dioxide selection.
4. European Union, United Kingdom, India and Brazil are explicitly named as destination-market paths.
5. Documents Hub and Request Documents have distinct roles.
6. The quotation-preparation answer lists destination market, application, preferred grade if known, quantity, packaging and required documents.

The Mobile page retains all six relationships after removal of its full page-level RFQ Section.

### Schema status

No final Home Schema package is approved. Gate 6 should decide or assign the following without treating them as already approved:

- `WebSite` / `WebPage` identity and URL fields;
- operating-entity relationship and whether an `Organization` node belongs globally or on Home;
- whether the visible Buyer Answers warrant any structured Q&A representation;
- whether a product `ItemList` is appropriate given Desktop shows fourteen IDs while Mobile summarises four groups;
- consistency between visible copy, Schema claims and evidence states;
- prohibition on adding manufacturer, origin proof, COO, traceability or compliance claims through structured data.

Schema must not contain facts absent from the buyer-visible page or bypass evidence gates.

## 9. Global Chrome V0.2 and fixed-RFQ review

### Confirmed visual contract

- Desktop order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Mobile Header: Logo, RFQ, Menu.
- Mobile Menu Open contains the complete eight-item order and fixed Request a Quote final action.
- Desktop and Mobile Footer retain fixed Request a Quote.
- No public RFQ OFF, hidden, disabled, empty-slot or Contact fallback state is submitted.
- Contact, Privacy, Terms, Legal and separate Company Footer links are not rendered.
- `RFQ_ROUTE_READY=false` remains a release blocker and must not alter RFQ visibility.

### Open wording conflict for Gate 6

The current Home Desktop/Mobile Footer uses the buyer-facing heading `Procurement`, following the approved V0.7 copy revision. `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` and the shared V0.2 state record use `Conversion`. Project control must determine the authoritative shared Footer label and required synchronization; this submission does not change either artifact.

## 10. CTA and internal-link review

| Visible path | Current visual treatment | Route/mapping state to review |
|---|---|---|
| Request a Quote | Fixed Header, Hero and Footer; Desktop also has page-level RFQ Section; Mobile page-level Section removed | `CONV-RFQ` is `PLANNED_CONVERSION`; route/form readiness is a release blocker |
| Markets | Start Here and four market cards | Hub approved; individual EU/UK/India/Brazil pages mapped, with market facts still evidence/freshness constrained |
| Products | Start Here, four groups, process paths and `View All 14 Grades` | Products Hub/process/grade ownership approved; static visual does not validate hrefs |
| Applications | Five summaries | Hub is `PLANNED_ARCHITECTURE`; child URLs/statuses require approved delivery mapping |
| Documents | Hub and Request Documents | Hub and conversion route are planned; document availability is not promised |
| Resources | Two topics plus Buyer Answers | Hub and destination-resource inventory/route status require review |
| About | Company identity summary | `/about/` mapping approved; manufacturing/origin/traceability facts remain evidence-gated |

Gate 6 should distinguish visual CTA clarity from actual route readiness. Static buttons and labels do not prove working links or forms.

## 11. Desktop, Mobile and responsive review

### Existing verification evidence

- Desktop export: 1440×5683; no horizontal or text overflow in the current audit.
- Mobile 390 export: 390×8884; Resources proceeds directly to Footer.
- Mobile responsive checks: 375px, 390px and 430px report no horizontal overflow.
- Mobile H1 remains four lines at tested widths.
- Standard Mobile body text is 16px; captions are 14px.
- Tested Mobile targets are at least 44px high.
- Markets, Applications and Mobile RFQ field summary behaviour were reviewed before the user removed the Mobile page-level RFQ Section.
- Buyer Answers remain visible and are not collapsed.

### Responsive issues for Gate 6

- No formal tablet visual or tablet-width evidence is submitted.
- No current V0.6 expanded Products interaction-state PNG exists; the default collapsed state and labels are present.
- Static artboards cannot prove actual reflow, focus management, menu animation or control behaviour.
- Desktop retains a full RFQ Section while Mobile omits it by explicit user decision.

## 12. Accessibility review entry

Visual evidence supports:

- readable H1 and body sizes;
- accessible dark Teal CTA colour introduced in the approved visual system;
- Mobile controls and link rows designed at approximately 44px or larger;
- no horizontal carousel for Markets or core paths;
- Buyer Answers visible without accordion dependency;
- full legal operating name allowed to wrap naturally.

Not yet proven by static visuals:

- semantic heading implementation;
- keyboard focus order and focus visibility;
- menu open/close focus transfer and escape behaviour;
- link/button semantics;
- form labels, error messages and validation;
- screen-reader names;
- image alternative text and decorative-image treatment;
- 200% zoom and high-contrast behaviour in final implementation;
- reduced-motion behaviour if any motion is later introduced.

## 13. Conditional-state review

| State | Current evidence | Gate 6 question |
|---|---|---|
| Mobile Menu closed | Mobile Buyer Clean | Is the closed state consistent with shared V0.2? |
| Mobile Menu open | Current V0.6 state PNG | Is full order, current-page cue and fixed RFQ acceptable? |
| Products collapsed | Mobile Buyer Clean | Are four groups/counts/Expand labels sufficient? |
| Products expanded | Historical V0.3 only; not current baseline | Is a content-synchronised current state required before handoff? |
| Route unavailable | Internal contract only | Confirm it blocks release rather than hiding Global RFQ. |
| Missing verified evidence | Neutral copy/non-rendering | Confirm no Home module implies evidence availability. |
| Mobile page-level RFQ omitted | V0.6.1 user-approved visual | Confirm responsive divergence and architecture record requirement. |

## 14. Open issues submitted to project control

| ID | Issue | Current state | Requested Gate 6 action |
|---|---|---|---|
| HOME-G6-01 | Home Footer label `Procurement` conflicts with shared V0.2 wording `Conversion` | OPEN | Select authoritative label and synchronization scope. |
| HOME-G6-02 | Mobile page-level RFQ Section removed while Desktop retains it | USER-APPROVED_VISUAL_DIFFERENCE | Decide whether an architecture/change-control record is required before handoff. |
| HOME-G6-03 | `/request-a-quote/` route/form readiness not proven | RELEASE_BLOCKER_OPEN | Keep Global RFQ visible; assign route/form validation before release. |
| HOME-G6-04 | Final Title, Meta Description, Canonical and index fields not approved | OPEN | Require SEO delivery fields before Gate 7. |
| HOME-G6-05 | Final Schema package absent | OPEN | Define permitted Schema and evidence boundaries before Gate 7. |
| HOME-G6-06 | Application/Documents/Resources and conversion destinations include planned/provisional states | OPEN | Validate href inventory and conditional rendering before handoff. |
| HOME-G6-07 | No current product-expanded Mobile state | OPEN | Decide whether to require a new state visual or accept written behaviour. |
| HOME-G6-08 | No formal tablet view | OPEN | Decide whether tablet evidence is required under the mandatory review standard. |
| HOME-G6-09 | Current Logo remains a visual-direction PNG, not final production SVG | OPEN | Keep as visual baseline; require production asset decision before development/release. |
| HOME-G6-10 | Hero `sourcing titanium dioxide from Malaysia` phrasing | EVIDENCE_REVIEW | Confirm phrasing is acceptable strategic positioning and does not imply unverified manufacturing/origin proof. |
| HOME-G6-11 | Static visual does not prove links, forms, keyboard or assistive-technology behaviour | IMPLEMENTATION_NOT_STARTED | Carry as Gate 7/development acceptance requirements; do not mark implemented. |

## 15. Requested Gate 6 review output

Project control should return:

1. Overall Result: `PASS / PASS WITH CHANGES / FAIL`.
2. SEO/GEO Gate: `PASS / NEEDS REVISION`.
3. Malaysia-Origin Gate: `PASS / NEEDS VERIFICATION / FAIL`.
4. P0, P1 and P2 findings using `WEBSITE_VISUAL_CONTENT_SEO_GEO_REVIEW_STANDARD_V1.0.md`.
5. Decisions for `HOME-G6-01` through `HOME-G6-11`.
6. A statement on whether Home may move to `APPROVED_FOR_HANDOFF` or must remain `DESIGN_IN_REVIEW`.

Until that response is recorded, Home remains `DESIGN_IN_REVIEW`; Gate 6 is not passed and Gate 7 remains locked.
