# RES-000 Full Visual Design V0.3 — Fixed Global RFQ

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `RES-000` |
| Page name | Resources |
| URL | `/resources/` |
| Review ID | `GHF-FIXED-RFQ-RES-01` |
| Revision scope | Global Fixed RFQ execution plan Task 6 |
| Date | 2026-08-30 |
| Status | `APPROVED_FIXED_RFQ_VISUAL_BASELINE` |
| User approval date | `2026-08-30` |
| Approval authority | User unified approval of Home and 03–07 fixed-RFQ visual packages |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Existing RES Gate 1–5 status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; unchanged |
| Current global authority | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md / APPROVED_GLOBAL_CHROME_BASELINE` |
| Shared visual authority | `GHF-FIXED-RFQ-HOME-01 = PROJECT_CONTROL_REVIEW_PASS / SHARED_FIXED_RFQ_BASELINE_FOR_TASKS_3_7` |
| Protected source | RES-000 V0.2 route-safe Desktop/Mobile body pixels |
| Site scope | `tio2-my` |
| Excluded | Gate 6+, Resource/Document child pages, WordPress, Next.js, CMS, code, testing implementation, deployment, publishing and `D:\16Wordpress_nextjs` |

This V0.3 package changes only Global Chrome RFQ visibility and the resulting Footer/Menu canvas boundary. The user approved it on 2026-08-30 as the formal RES-000 fixed-RFQ visual baseline. That approval does not reopen or advance RES-000 content architecture, wireframe, page-body review, Gate 1–5, page lifecycle or any downstream Gate.

## 1. Decision Applied

The current public contract is:

`RFQ_VISIBILITY=ALWAYS_VISIBLE`

The route-safe `inventory=0 / ItemList=0` state therefore displays the same fixed Global Chrome RFQ as every other public page:

1. Desktop Header — `Request a Quote`;
2. Mobile Header — `RFQ`;
3. Mobile Menu — terminal `Request a Quote` item;
4. Desktop Footer — Conversion / `Request a Quote`;
5. Mobile Footer — terminal `Request a Quote`.

This decision does not automatically add a contextual RFQ to the Resources Hero, Buyer Questions or another body module. Page-body CTA logic remains separate and unchanged.

If the RFQ route or form is unavailable, the only valid state is:

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER`

That state blocks release. It does not hide, disable or relink a public RFQ and does not create a Contact fallback.

## 2. Consumed Inputs

| Input | Role |
|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` | Current fixed-RFQ visibility and release contract |
| `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md` | Shared Header, Mobile Header, Menu, Footer and interaction geometry |
| `GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | Desktop current state, terminal CTA, focus and Footer reference |
| `GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390px Header, Menu, Footer and 44px target reference |
| `pages/home/04_planning/05_homepage_full_visual_design_v0.5.md` | Shared Buyer Clean fixed-RFQ application record |
| `RES-000_FULL_VISUAL_DESIGN_V0.2.md` + V0.2 PNGs | Frozen RES chrome geometry, route-safe body and historical conditional-RFQ baseline |

The Home inputs were consumed only after the current project-control unlock notification. This task did not modify any Home file.

## 3. V0.3 Artifact Manifest

| Artifact | Canvas | Bytes | SHA-256 | Current status |
|---|---:|---:|---|---|
| `assets/RES-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 1440×4425 | 307299 | `0EA5678992BFFB85CBDA05A3960EBFF143D46CF8E760474852348F39C7F73C57` | `APPROVED_FIXED_RFQ_VISUAL_BASELINE` |
| `assets/RES-000_G5_MOBILE_390_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 780×12930; 390px logical at 2× | 768173 | `FDC01013A08DE56D4E1237DD0D57C7D16A8D520F60CBE924819009A9BF9A2815` | `APPROVED_FIXED_RFQ_VISUAL_BASELINE` |
| `assets/RES-000_G5_MOBILE_390_MENU_OPEN_V0.3.png` | 780×1040; 390px logical at 2× | 52698 | `00CE315C8255A19609CED43464248B2CC077106DA0BD3FBF234B561CF1E880D2` | `APPROVED_FIXED_RFQ_VISUAL_BASELINE` |

All V0.1 and V0.2 documents/assets remain historical and were not overwritten or deleted. The V0.1 internal component state board and planning-only preview also remain unchanged.

## 4. Fixed RFQ Surface Contract

| Current V0.3 surface | Visible RFQ | Label | Target |
|---|---:|---|---|
| Desktop Header | 1 | `Request a Quote` | `/request-a-quote/` |
| Mobile Header | 1 | `RFQ` | `/request-a-quote/` |
| Mobile Menu Open | 1 | `Request a Quote` | `/request-a-quote/` |
| Desktop Footer | 1 | `Request a Quote` | `/request-a-quote/` |
| Mobile Footer | 1 | `Request a Quote` | `/request-a-quote/` |

The current V0.3 manifest contains zero public RFQ OFF, hidden, disabled, empty-slot or Contact-fallback state. Historical V0.2 remains available only as an audit baseline and is not part of the current fixed-RFQ manifest.

## 5. Header and Current-page State

### 5.1 Desktop

- 84px Header; white background; 1px `#D9E2EC` rule; 1200px content width.
- Shared `brand_logo_primary_horizontal` visual-direction asset; accessible name `TiO2 Malaysia`; Home target.
- Fixed visible order: `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Resources current state remains Bold + visible `CURRENT` + 3px Teal underline, with the `aria-current="page"` implementation requirement.
- Terminal CTA uses accessible Teal `#007F77`; shared hover reference `#006E68`; focus uses a 3px non-color-only outline.

### 5.2 Mobile

- 64px logical Header; 16px side padding; structure `Logo | RFQ | Menu`.
- RFQ and Menu are at least 44×44px logical.
- Menu Open uses Deep Navy with the fixed eight-item order.
- Resources remains Bold + 4px Teal left marker + visible `CURRENT`.
- `Request a Quote` is the final Menu action, not a Contact substitute.

## 6. Footer Contract

Desktop and Mobile use the shared Deep Navy Footer with:

1. Brand and the neutral platform statement;
2. Explore — Home, Markets, Products, Applications;
3. Information — Documents, Resources, About;
4. Conversion — `Request a Quote`;
5. `© 2026 TiO2 Malaysia.`

Contact remains absent because its own route is not approved/live. Its status does not affect RFQ.

Current Footer forbidden-content results:

- page-local `Research paths` link: 0;
- page-local `Buyer questions` link: 0;
- Privacy, Terms, Legal or separate Company route: 0;
- Contact fallback: 0;
- internal review, prototype, release or planning text: 0;
- RFQ empty column, disabled shell or blank conversion band: 0.

The body-level `Explore research paths` action remains unchanged because it belongs to the protected RES body, not the Global Footer.

## 7. Protected Body Proof

V0.3 uses the exact V0.2 protected body pixels between the unchanged Header boundary and the new fixed-RFQ Footer.

| Canvas | V0.2/V0.3 aligned rectangle | Compared pixels | Different pixels | Result |
|---|---:|---:|---:|---|
| Desktop | x=0, y=84, 1440×3966 | 5,711,040 | 0 | PASS |
| Mobile @2× | x=0, y=128, 780×11615 | 9,059,700 | 0 | PASS |

Desktop total canvas height remains 4425px because the four-column fixed-RFQ Footer fits the existing Footer height. Mobile total height increases from 12704px to 12930px only to accommodate the fixed terminal Footer CTA; the protected body rectangle does not move or change. The Mobile Menu canvas increases from 940px to 1040px to show the fixed eighth action without crop.

## 8. Resources Body and Evidence Locks

| Control | Current V0.3 result |
|---|---|
| Eligible Resource inventory | 0 |
| Public `ItemList` | 0 |
| Resource child-page identity/action | 0 |
| Current Trade item or policy conclusion | 0 |
| Official source/scope/source date/review date gate | Unchanged |
| Route and freshness gates | Unchanged |
| PRODUCT V0.3 | 84 = 30 verified / 0 conflict / 54 no-public; current unique relationship source |
| Explicit Process classifications | 14; current V0.3 baseline |
| Named grade relationship expression in RES-000 | 0; includes M-2377 despite its approved owner-surface relations |
| M-996/M-2196 comparison/equivalence/rank/selection rationale | 0; freeze unchanged |
| Cross-site fallback | 0 |

Permanent freshness education remains visible. No time-sensitive Trade statement enters the page without its complete official-source, scope, date and review gate.

## 9. Responsive, Interaction and Visual Review

| Check | Result |
|---|---|
| Desktop width | 1440 / 1440; no horizontal overflow |
| Mobile Full width | 390 / 390 logical; no horizontal overflow |
| Mobile Menu width | 390 / 390 logical; no horizontal overflow |
| Minimum Mobile target | 44px logical |
| Mobile Header RFQ | Visible; label `RFQ` |
| Mobile Menu RFQ | Visible; terminal eighth action |
| Mobile Footer RFQ | Visible; no blank band |
| Logo | Visible in Header/Footer; same shared visual-direction asset |
| Resources current state | Visible and not color-only |
| Original-detail inspection | No crop, overlap, unreadable label, Footer gap or abnormal post-button whitespace |

## 10. SEO, GEO and Release Boundary

- Page ID, URL, Primary Keyword, Canonical and Schema page type are unchanged.
- Header/Footer navigation adds no new page identity, keyword target or machine-readable fact.
- All Global Chrome RFQ surfaces point to the single approved target contract `/request-a-quote/`.
- This visual task does not verify the route or form is release-ready.
- `RFQ_ROUTE_READY=false` must block release and must not alter the current V0.3 visual.
- `site_scope=tio2-my` remains mandatory; no other site scope is a data or route fallback.

## 11. Governance, Approval and Hard Stop

| Review item | Status | Control |
|---|---|---|
| `GHF-FIXED-RFQ-RES-01` | `APPROVED / CLOSED` | User approval recorded on 2026-08-30; V0.3 retained as the formal RES-000 fixed-RFQ visual baseline |
| `GHC-RES-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Historical conditional-RFQ chrome review; retained, not closed by V0.3 |
| `RES-G1-01`–`RES-G5-01` | `OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Existing RES page Gate positions unchanged |
| `RES-G15-01/02` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Not reopened or closed |
| `RES-R002–RES-R007` | `OPEN` | Evidence, route, freshness and maintenance gates unchanged |
| `RES-R008–RES-R009` | `CONTROLLED_IN_DRAFT` | Contrast and registered-Footer boundaries retained |

This package has reached its authorized visual endpoint. It does not enter Gate 6+, start a Resource or Document child page, authorize development, handoff or publishing, or modify `D:\16Wordpress_nextjs`.

## 12. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.3 | 2026-08-30 | Applied the approved fixed Global RFQ contract to RES-000 route-safe Header, Mobile Header/Menu and Footer; preserved every V0.2 body pixel and all evidence/relationship gates | `APPROVED_FIXED_RFQ_VISUAL_BASELINE`; `GHF-FIXED-RFQ-RES-01=APPROVED / CLOSED`; user approval date `2026-08-30` |
| V0.3 / PRODUCT V0.3 governance sync | 2026-08-30 | Updated only the internal relationship source and counts to PRODUCT V0.3; removed the superseded M-2377 TDS active gate; retained named-grade rendering=0, M-996/M-2196 hold and all body pixels/PNG assets | Fixed-RFQ visual baseline remains approved; relationship sync submitted for project-control review |
