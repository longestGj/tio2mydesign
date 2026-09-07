# HOME-001 Gate 6 Project-Control Review Submission V0.2

## 0. Submission status

| Field | Value |
|---|---|
| Page | `HOME-001` / Home / `/` |
| Language | EN |
| Priority | P0 |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 5 | `APPROVED / CLOSED` — user approval dated 2026-08-31 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| Gate 6 result | `PROJECT_CONTROL_REVIEW_PASS` |
| SEO/GEO P0 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| SEO/GEO relation Review ID | `HOME-G6-SEO-GEO-PCR-02` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Production status | No implementation, handoff, development, deployment or publication authority |

This V0.2 submission supersedes V0.1 only as the current review entry. Project control recorded Gate 6 PASS; the user has not yet authorised Gate 7, development handoff or implementation.

## 1. Directed revision decisions recorded

| ID | User/project-control direction | Revision evidence | Recorded result |
|---|---|---|---|
| HOME-G6-01 | Buyer-facing Footer section title is `Procurement`, not internal term `Conversion` | Global Chrome V0.3 contract, record and state boards | `PROJECT_CONTROL_REVIEW_PASS_FOR_HOME_GATE6` |
| HOME-G6-02 | Desktop keeps page RFQ Section; Mobile omits it and proceeds Resources → Footer | Content Architecture V0.3, Brief, Playbook and candidate visuals | Resolved as approved responsive difference |
| HOME-G6-04/05 | Complete Home SEO metadata and Schema contract | `HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | `HOME-G6-SEO-GEO-PCR-02 / PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| HOME-G6-07 | Provide current Mobile Products Expanded state | `homepage-mobile-products-expanded-v0.4.png` | Evidence supplied; PRODUCT V0.3 boundaries checked |
| HOME-G6-08 | Provide Tablet responsive evidence | 768px and 1024px state boards | Evidence supplied; required regions checked |
| Required governance | Build Home Playbook and Brief from the actual approved baseline | `HOME_PLAYBOOK_V0.1.md`; `HOME-001_HOME_BRIEF_V0.1.md` | `PROJECT_CONTROL_REVIEW_PASS`; no retrospective Gate 0–5 claim |

## 2. Current review package

### 2.1 Page governance and content

- `AGENTS.md`.
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
- `research/keyword/11_page_keyword_master.csv`, `HOME-001`.
- `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md`.
- `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md`.
- `pages/home/04_planning/01_homepage_content_architecture_v0.3.md`.
- `pages/home/04_planning/02_homepage_wireframe_spec_v0.1.md`.

### 2.2 SEO / GEO / Schema

- `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`.

### 2.3 Visual, responsive and shared components

- `pages/home/04_planning/13_homepage_gate6_directed_revision_visual_v0.1.md`.
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md`.
- `pages/home/04_planning/12_global_header_footer_component_states_v0.3.md`.
- `pages/home/05_review/HOME-001_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md`.

## 3. Page identity and keyword contract

| Field | Locked value / boundary |
|---|---|
| Primary keyword | `malaysia titanium dioxide` |
| Search intent | Commercial supplier search |
| Current H1 | `Malaysia Titanium Dioxide for Industrial Buyers` |
| Home role | Own broad Malaysia TiO₂ supplier intent and route buyers to Markets, Products, Applications, Documents, Resources, About and RFQ |
| About boundary | Own deeper manufacturer/origin/manufacturing/traceability proof; Home may show only the approved minimum manufacturer relationship |
| Markets boundary | Own destination-country supplier intent |
| Products boundary | Own generic product-family, process and exact-grade intent |
| Applications boundary | Own generic use-case intent |
| Documents boundary | Own document explanation and controlled request intent |
| Resources boundary | Own research, alternative-source and dated trade-update intent |

No URL, page count, primary-keyword ownership, navigation order or module order is changed in this revision.

## 4. SEO contract under review

| Field | Locked value |
|---|---|
| HTML Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` |
| Meta Description | `Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers.` |
| Canonical | `https://tio2malaysia.com/` |
| robots | `index, follow` |
| language | `EN` |
| H1 | Current approved H1; no visual rewrite |

Validation reports 50 characters for Title and 152 for Meta Description, exact canonical match and one exact H1 in each complete candidate view.

## 5. GEO and Schema contract under review

The minimum graph uses stable `@id` nodes:

- `WebSite`: `https://tio2malaysia.com/#website`.
- `WebPage`: `https://tio2malaysia.com/#webpage`.
- `Organization`: `https://tio2malaysia.com/#organization`.
- `Brand`: `https://tio2malaysia.com/#brand`.
- Generic `Product`: `https://tio2malaysia.com/#titanium-dioxide`.

The final relation assertions submitted under `HOME-G6-SEO-GEO-PCR-02` are:

- WebPage `isPartOf` WebSite.
- WebSite `publisher` Organization.
- WebPage `about` Brand, Organization and Product.
- Product `brand` Brand.
- Product `manufacturer` Organization.
- Organization does not carry a `brand` property.

The visible Company sentence is:

> TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer.

`publisher` means IKHLAS is responsible for website content and operation only; it does not assert parent-company status, ownership, factory entity, production location, product origin or another corporate-control relation. `manufacturer` occurs only on Product and points to the Organization. It is not attached to WebPage, WebSite or Organization. The graph does not use Offer, ItemList, FAQPage, ContactPoint, PostalAddress, sameAs, ProductGroup, countryOfOrigin, pricing, inventory, MOQ, lead time, availability, rating, GTIN, certification, COO or unsupported document fields.

The contract contains the required visible-copy → entity → Schema field → approval/evidence map, JSON-LD handoff example, prohibited fields and future-opening conditions. Schema facts are limited to facts visible in Buyer Clean.

## 6. Buyer Clean and fact review

The only new buyer-visible body wording is the approved manufacturer sentence in the Company module. It does not assert factory location, manufacture in Malaysia, product origin, COO, capacity, inventory, certification or traceability.

Candidate Buyer Clean scans confirm:

- no `page_id`, pending/not-live, approved-IA or internal governance terms;
- no unsupported factory, laboratory, warehouse, shipment or document-availability evidence;
- no Sample CTA;
- fixed RFQ remains visible in the required shared positions;
- module order remains Markets → Products → Applications → About → Documents → Resources → RFQ on Desktop;
- Mobile omits only the full page RFQ Section and proceeds from Resources / Buyer Answers directly to Footer.

## 7. Formal visual and responsive assets reviewed at Gate 6

| Review view/state | File | Dimensions | SHA-256 |
|---|---|---:|---|
| Desktop Buyer Clean V0.8 | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` |
| 390px Mobile Buyer Clean V0.6.2 | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` |
| Mobile Products Expanded V0.4 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-mobile-products-expanded-v0.4.png` | 390×1428 | `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85` |
| Tablet 768 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` |
| Tablet 1024 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` |

The approved Gate 5 V0.7/V0.6.1/Menu V0.6 and shared V0.2 files remain unchanged. The assets above passed Home Gate 6 project-control review but are not implemented and do not authorise Gate 7.

## 8. PRODUCT V0.3 boundary review

- All fourteen IDs are present once in the internal/expanded verification state.
- Four groups remain 6/5/2/1; no fourteen-card expansion was introduced.
- M-2377 may appear neutrally under Sulfate and the approved five application relations.
- M-2377 Specialty Materials remains `NO_PUBLIC_MAPPING / DO_NOT_RENDER` and is absent from Buyer Clean and Schema.
- M-996/M-2196 comparison remains frozen.
- No performance, equivalence, replacement or ranking claim was added.

## 9. Global Chrome V0.3 review

The only buyer-visible shared-component change is Footer title `Procurement`. Header and navigation order remain:

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

Header RFQ, Mobile Header RFQ, Mobile Menu RFQ and Desktop/Mobile Footer RFQ remain permanently visible. `RFQ_ROUTE_READY=false` remains an internal release blocker; it does not create public RFQ OFF, hidden, disabled, empty-slot or Contact fallback states.

| Board | Dimensions | SHA-256 |
|---|---:|---|
| `GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 1440×1380 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` |
| `GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 390×1690 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` |

V0.3 is pending project-control review; V0.2 remains the approved shared baseline.

## 10. Responsive and accessibility evidence

Automated checks and manual visual inspection report:

- no horizontal overflow at 390, 768, 1024 or 1440px;
- tested Mobile targets are at least 44px;
- full Mobile Menu order remains in the approved V0.6 state;
- Mobile Products default remains four collapsed groups; the separate V0.4 state proves complete discovery;
- Tablet evidence covers Header/Nav, Hero, Markets, Products, Applications, Documents, Footer and fixed RFQ;
- text remains readable and the manufacturer sentence wraps without collision.

Static visuals do not prove semantics, focus order, keyboard control, live responsive rendering, link destinations, form validation, metadata emission or JSON-LD output. Those remain delivery/implementation acceptance requirements and do not become implemented facts in Gate 6.

## 11. Open release and evidence gates

| ID | Open issue | Current status / boundary |
|---|---|---|
| HOME-G6-03 | RFQ route, form, privacy, success/error and fallback handling | `RELEASE_BLOCKER_OPEN`; fixed RFQ stays publicly visible |
| HOME-G6-06 | Planned/provisional Application, Documents, Resources and conversion hrefs | Route inventory and conditional rendering still require approval before release |
| HOME-G6-09 | Current Logo is a visual-direction PNG | Production SVG/asset clearance remains open |
| HOME-G6-10 | Malaysia-origin/manufacturing-location/COO/traceability facts | Evidence gate remains closed; manufacturer approval does not resolve these facts |
| HOME-G6-11 | Static visual does not prove implementation behaviour | Carry into Gate 7/external-development acceptance only if the user later authorises Gate 7 |
| HOME-G6-12 | M-996/M-2196 comparison | `TECHNICAL_VERIFICATION_REQUIRED`; do not render comparison |
| HOME-G6-13 | Route/localization/freshness/legal/contact fields | Existing page-specific gates remain open; no scope expansion in this revision |

## 12. Validation submitted

- Title/Meta lengths and exact strings checked.
- Canonical, robots, language and one-H1 rule checked.
- JSON-LD example parsed as JSON; five node types, stable IDs, full-reference resolution, final relationship assertions, absence of `Organization.brand` and Product-only `manufacturer` scope checked.
- Prohibited Schema fields/types scanned.
- Buyer Clean internal-language and unsupported-claim scans passed.
- Desktop/390/768/1024 overflow checks passed.
- 390px minimum 44px target check passed.
- PRODUCT V0.3 grade completeness/uniqueness and frozen-boundary checks passed.
- Formal dimensions, bytes and SHA-256 recorded.
- Historical approved hashes rechecked and preserved.
- Global Chrome fixed-RFQ and `Procurement`/no-`Conversion` checks passed.
- Automated checks do not replace project-control human visual, content, SEO, GEO and accessibility review.

## 13. Recorded project-control decision and remaining boundary

Project control independently recorded `HOME-G6-SEO-GEO-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` and HOME-001 Gate 6 PASS. The page remains `DESIGN_IN_REVIEW` while awaiting the user's decision on Gate 7.

RFQ route/form, planned hrefs, production SVG, factual evidence gates and implementation acceptance requirements remain open. Gate 7, development handoff and `D:\16Wordpress_nextjs` remain unauthorised.
