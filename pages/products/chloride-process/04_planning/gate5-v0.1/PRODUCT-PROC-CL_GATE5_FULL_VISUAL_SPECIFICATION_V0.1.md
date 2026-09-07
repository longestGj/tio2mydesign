# PRODUCT-PROC-CL Gate 5 Full Visual Specification V0.1

2026-09-07 · EN · `/products/chloride-process-titanium-dioxide/` · `site_scope=tio2-my`.

**Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`.** This is the execution candidate produced under `CL-G5-START-01`. It does not approve Gate 5, start Gate 6 or authorise Gate 7, development, deployment, publication or indexing.

## 1. Input card and authority

| Role | Controlling source |
|---|---|
| Current execution entry | `PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.20.md`; V0.19 supplies the approved Gate 1–4 combination |
| Page identity | Brief V0.2, Registry V0.2 and keyword master row: PRODUCT-PROC-CL, global EN Process aggregation, primary `chloride process titanium dioxide` |
| Gate 2 | A V0.4; B V0.2 as the sole editable Buyer Copy; C V0.6 for actions, conditions, metadata, GEO and Schema |
| Gate 3 | Approved responsive source `PRODUCT-PROC-CL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`, freeze SHA `2887150…f91`; Gate 3→4 handoff V0.1 |
| Gate 4 | User-approved `gate4-v0.1`, freeze `CL-G4-V01-SOURCE-01`; visual-direction report V0.1 and its rule table |
| Product authority | Product Playbook V0.1 plus current SOP Addendum V0.1; PRODUCT relationship matrix/audit V0.3; current Product Hub A5.1 exact Grade summaries already consumed by B |
| Shared authorities | Visual Standard V1.0, CTA Accessibility Addendum V1.0, Global Chrome V0.5 inheriting V0.4, Production SVG Logo Manifest V1.0, Footer Legal Utility V1.0, Legal/Privacy V1.3 and Shared Consent V1.1 |
| Gate 5 role and methods | `agents/gate5-execution/agent.md`; full-page-visual-composition; layout-interaction-verification V0.2 and core-risk-model |

The exact 41 input identities, seven render-source/dependency identities and their SHA-256 values are frozen in `approval_core/source-freeze.json`. The source combination is **`fb13f68d7ebf96c6e58e8551c5071a74c2ebc662c359ba7087f6d549ee056f51`**, freeze **`CL-G5-V01-SOURCE-01`**.

## 2. Complete-page application

The approved Gate 4 direction is applied to the complete five-module page and current shared shell. No Buyer Copy, module, Grade, relationship, label, URL or CTA priority changed.

| Approved instance | Complete visual treatment and relationship |
|---|---|
| Shared Header and breadcrumb | 84px Desktop or 64px compact Header; approved production SVG payload; `Products` is the sole current item per active surface; fixed RFQ remains visible. Breadcrumb keeps Home, Products and current-page text. |
| B-01 Hero | Soft `#F5F8FB` editorial surface, 54/44/36px H1, complete origin/application-range paragraph, filled Explore action first and supporting RFQ link second. |
| B-02 Process explanation | Desktop uses the approved 340px heading and flexible prose split. Tablet and Mobile stack heading before both exact paragraphs and the comparison-resource link. No process comparison, media or manufacturing cue was added. |
| B-03 eight-Grade directory | One continuous unranked list in exact order M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886. Desktop keeps three columns; Tablet keeps name/link together beside the full summary; Mobile keeps name → summary → link before the next Grade. Every summary remains complete. |
| B-04 evaluation sequence | Three prose steps remain visibly sequential. Desktop uses the approved title/prose split; Tablet and Mobile use complete stacked flow. The five application examples remain illustrative prose, not a Grade matrix. |
| B-05 final RFQ | Complete known/unknown-Grade guidance and human-contact expectation, followed by one filled RFQ action. Desktop split and Tablet/Mobile stack retain the approved hierarchy. |
| Shared Footer and consent | Full-width Deep Navy Footer, approved reverse SVG, navigation, fixed RFQ and exact legal utility order. Cookie Settings opens the current no-optional-analytics modal and returns focus on close. |

The page remains text-led with no page image. This is the approved no-image branch; no empty media frame, factory photo, process illustration, certificate, badge, stock cue or performance chart appears.

## 3. Responsive rules and complete results

| Width | Complete-page result | Highest-risk conversion checked |
|---|---|---|
| 1440 logical @1x | 1440×3301 full page | Complete Desktop process split, all eight equal directory rows, three evaluation steps, final RFQ split and 1440px Footer closure |
| 768 logical @1x | 768×4238 full page | Independent Tablet layout; name/link left with summary right for every Grade; complete process, RFQ and two-column Footer |
| 390 logical @2x | 780×11562 physical full page | 390px CSS layout rendered natively at DPR2; complete long paragraphs, eight record blocks, full-width primary actions, wrapped legal utilities and Footer closure |

Natural content height and wrapping are allowed. Container widths remain 1200px/704px/350px. Breakpoints remain `<=1100px` for compact Header and stacked process/step structures, and `<=560px` for the Mobile directory and full-width primary actions. No fixed content height, truncation, horizontal carousel or collapsed Buyer Copy is used.

## 4. Formal state and evidence matrix

All formal PNGs are bound to `CL-G5-V01-SOURCE-01`. Exact bytes, physical dimensions and SHA-256 values are in `approval_core/export-inventory.json`.

| State | 1440 | 768 | 390 logical @2x | What it proves |
|---|---:|---:|---:|---|
| Complete normal page | Yes | Yes | Yes | Full content, all module joins and Footer closure |
| Directory anchor focus | Yes | Yes | Yes | Explore action reaches and focuses the visible B-03 heading; next Tab reaches View M-350 |
| Cookie modal open with focus | Yes | Yes | Yes | Complete dialog, backdrop, controls and page context |
| Compact Menu open with focus | N/A | Yes | Yes | Approved eight-item order, current Products marker, fixed RFQ, initial focus and background isolation |
| Complete B-02 process region | Yes | Yes | Covered by full page | Gate 4's previously unpictured Desktop/Tablet instances |
| Complete B-05 final RFQ region | Yes | Yes | Covered by full page | Gate 4's previously unpictured Desktop/Tablet instances |
| Full-width Footer | Yes | Yes | Covered by full page | Wide and Tablet owner assembly and legal order |
| M-896 Grade-link hover | Yes | Rule reused and runtime tested | Gate 4 representative already covered Mobile | Longest summary keeps the same neutral row while the actual link alone receives the approved soft hover surface |

Page-owned form, filter, selector, loading, empty-result, validation, submission, success, failure, retry, FAQ, accordion, media-present and dynamic-recommendation states are **NOT_APPLICABLE** under B/C. Downstream RFQ and Request Documents states remain with their owners and are not copied onto this aggregation page.

## 5. Interaction, geometry and visual verification

Formal Chrome/Playwright runtime completed **56/56** registered assertions at 1440, 768 and 390@2x. Evidence type is `ACTUAL_RUNTIME` for geometry and operations, `STATIC_VISUAL` for the 18 formal PNGs, and `LOCAL_SIMULATION` only for intercepted downstream navigation/context records.

- All five modules, the eight exact name/summary/URL triples and one H1 match the approved contract at every width.
- `scrollWidth = clientWidth`; the element-boundary and clipped-text scans found no overflow or hidden text. All visible links and buttons measured at least 44px in both dimensions.
- Header heights are 84/64/64px and the Footer spans the complete viewport width. Inter and both copied byte-identical production-authorised SVG payloads load locally. HTTP(S) requests and page errors are both zero.
- Explore works by click and direct fragment. With JavaScript, it transfers focus to the visible heading and preserves subsequent Tab order. Without JavaScript, the native fragment reaches the same heading with the approved 88px compact scroll margin.
- Compact Menu opens on Home, traps Tab/Shift+Tab across Menu toggle and links, isolates main/Footer/Logo/RFQ, closes on Escape with focus and scroll restored, and releases isolation when resized through the Desktop breakpoint.
- Cookie Settings opens the complete native modal, traps its two controls, closes by Escape, and returns focus to the Footer trigger. The evidence does not claim production CMP storage.
- RFQ and Documents local interception records only `source_page_id=PRODUCT-PROC-CL`; Grade navigation records no implicit Grade selection. This does not prove destination receivers.

The existing Gate 4 contrast evidence remains applicable because the frozen visual values are unchanged: body and Navy text exceed 4.5:1; functional teal `#008078` on white is approximately 4.82:1; white on teal is approximately 4.82:1; white on Navy is approximately 13.96:1. Focus uses the approved 3px treatment on the actual adjacent surface.

## 6. Actual differences from Gate 4 source

Gate 5 starts from this page's own approved Gate 4 source, not another business page. The complete visible treatment is unchanged. Four assembly differences are explicit:

1. Inter, its licence, the shared Chrome planning stylesheet and both exact production-authorised SVG payloads are copied into this page's Gate 5 source directory so the formal source is durable and has no runtime dependency on another planning stage.
2. The exact approved SEO title, meta description and canonical are included in the planning HTML; preview robots remain `noindex,nofollow`.
3. Non-visible page/scope data attributes identify `PRODUCT-PROC-CL` and `tio2-my` for review.
4. Compact-menu close preserves the opening scroll position and returns focus with `preventScroll`; labels, geometry, state semantics and shared ownership are unchanged.

No Gate 4 visual token, approved content, Grade order, responsive relationship, page action or shared owner contract was altered. The controlled preflight corrections are recorded in `diagnostic_support/failure-and-repair-history.md`.

## 7. Assets, inspection and limitations

Approval core:

- `source/` — editable local planning source and durable render dependencies;
- `approval_core/source-freeze.json` — frozen source/input/renderer identity;
- `approval_core/runtime.json` — final actual-runtime observations and assertions;
- `approval_core/export-inventory.json` — all 18 formal PNG identities;
- `asset-inventory.json` — combined navigation for source, inputs, formal and diagnostic evidence.

All 18 formal images were opened at original detail. Each complete-page image was also inspected through all 19 readable overlapping segments in `diagnostic_support/readable-segments/`; the inspections covered every module and join through the complete Footer. No post-freeze design Finding was found by the executor.

Still unverified: physical devices, Safari/Firefox, actual browser UI 200% zoom, screen-reader announcements and full accessibility-tree output, actual visited-history rendering, exhaustive intermediate widths and pointer edges, production routes, receiver/prefill/attribution, Grade-page availability, CMP persistence, deployment, publication and indexing. These remain explicit later-owner checks and are not represented as Gate 5 runtime proof.
