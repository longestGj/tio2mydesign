# HOME-001 Gate 5 Approved Baseline Manifest V0.2

## 1. Governance status

| Field | Value |
|---|---|
| Page | `HOME-001` / Home / `/` |
| Gate 5 | `APPROVED / CLOSED` |
| User approval date | `2026-08-31` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| Production status | No production assets, implementation or release authority |

V0.2 preserves the original Gate 5 approved assets and separately registers the Gate 6 directed-revision assets that passed project-control review. The page lifecycle remains `DESIGN_IN_REVIEW` until the user decides whether to authorise Gate 7.

## 2. Gate 5 approved Home visual baseline — unchanged

| Asset role | Formal file | Dimensions | SHA-256 | Status |
|---|---|---:|---|---|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.7.png` | 1440×5683 | `8C3721309F9BF1A409E53B22AC7A53E0135D7D4347E33B911712763F66AB9E9A` | `APPROVED_BASELINE` |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.1.png` | 390×8884 | `37C61C8C10B6B8F81EE36CA1B0D4AB6B3C751903583436E112D47CC67B11F9D5` | `APPROVED_BASELINE` |
| Mobile Menu Open | `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 | `FB0C56744BAE0B524E3D0B6F28B3FF56B617B2C2D9DB21554ADADF4BC1A0ABC6` | `APPROVED_INTERACTION_STATE` |
| Shared Desktop Global Chrome | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440×1380 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` | `APPROVED_SHARED_BASELINE` |
| Shared Mobile Global Chrome | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390×1690 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` | `APPROVED_SHARED_BASELINE` |

All five historical SHA-256 values were rechecked during this revision and remain unchanged.

## 3. Gate 6 directed-revision assets — project-control review passed

### 3.1 Buyer Clean and responsive evidence

| Role | Formal file | Dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| Desktop Buyer Clean with authorised manufacturer sentence | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | 840463 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` | `PROJECT_CONTROL_REVIEW_PASS` |
| 390px Mobile Buyer Clean with authorised manufacturer sentence | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | 366200 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` | `PROJECT_CONTROL_REVIEW_PASS` |
| Mobile Products Expanded using PRODUCT V0.3 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-mobile-products-expanded-v0.4.png` | 390×1428 | 55001 | `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85` | `PROJECT_CONTROL_REVIEW_PASS` |
| Tablet 768 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | 351499 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` | `PROJECT_CONTROL_REVIEW_PASS` |
| Tablet 1024 evidence | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | 346382 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` | `PROJECT_CONTROL_REVIEW_PASS` |

### 3.2 Shared Global Chrome V0.3 evidence reviewed for Home Gate 6

| Role | Formal file | Dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| Desktop Global Chrome with Procurement Footer title | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 1440×1380 | 110734 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` | `PROJECT_CONTROL_REVIEW_PASS_FOR_HOME_GATE6` |
| Mobile Global Chrome, no buyer-visible Conversion | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 390×1690 | 60728 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` | `PROJECT_CONTROL_REVIEW_PASS_FOR_HOME_GATE6` |

The V0.3 state boards passed review as Home Gate 6 evidence. V0.2 remains the separately approved shared baseline; this Home status sync does not independently promote the shared Global Chrome contract.

## 4. Contracts and documents reviewed at Home Gate 6

| File | Purpose | Status |
|---|---|---|
| `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` | Real Home planning/design/review workflow | `PROJECT_CONTROL_REVIEW_PASS` |
| `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md` | Formal Home page brief | `PROJECT_CONTROL_REVIEW_PASS` |
| `pages/home/04_planning/01_homepage_content_architecture_v0.3.md` | Responsive RFQ, PRODUCT V0.3 and manufacturer/SEO-GEO synchronization | `PROJECT_CONTROL_REVIEW_PASS` |
| `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Locked SEO fields, final minimum graph, JSON-LD and prohibited fields | `HOME-G6-SEO-GEO-PCR-02 / PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `pages/home/04_planning/12_global_header_footer_component_states_v0.3.md` | Procurement Footer shared-state proof | `PROJECT_CONTROL_REVIEW_PASS_FOR_HOME_GATE6` |
| `pages/home/04_planning/13_homepage_gate6_directed_revision_visual_v0.1.md` | Visual and responsive evidence record | `PROJECT_CONTROL_REVIEW_PASS` |

## 5. Approved responsive difference

- Desktop retains the full page-level structured RFQ Section.
- Mobile does not render that Section and proceeds from Resources / Buyer Answers directly to Footer.
- Mobile RFQ remains in Header, Hero, Mobile Menu and Footer.
- This is the user's approved responsive content difference dated 2026-08-31, not a missing module.

## 6. Evidence boundaries

- The user approved public use of `manufacturer` for the operating entity. It is limited to the visible Company sentence and the legal `Product.manufacturer` → Organization Schema relation.
- The final draft graph additionally uses WebSite.publisher→Organization, WebPage.about→Brand/Organization/Product and Product.brand→Brand. Publisher means website content and operating responsibility only; no Organization.brand, parent-company, ownership, factory, location, origin or corporate-control assertion is permitted.
- It does not verify factory location, manufacture in Malaysia, product origin, COO, capacity, inventory, certification, traceability or document availability.
- M-2377 uses the neutral PRODUCT V0.3 public mapping; Specialty Materials remains `NO_PUBLIC_MAPPING / DO_NOT_RENDER`.
- M-996/M-2196 comparison remains frozen.
- Static visuals do not prove links, menu behaviour, form submission, focus order, responsive implementation, metadata output or JSON-LD delivery.

## 7. Approval boundary

The Gate 6 assets and contracts in this manifest passed project-control review. They must not be described as user-authorised Gate 7, production-ready or implemented. No development, code, CMS, testing, deployment, DNS or release work is authorised.
