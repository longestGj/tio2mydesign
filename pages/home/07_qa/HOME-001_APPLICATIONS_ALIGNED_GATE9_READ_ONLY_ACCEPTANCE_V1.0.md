# HOME-001 Applications-Aligned Gate 9 Read-Only Acceptance V1.0

## 1. Review control

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Page / route | `HOME-001` / `/` |
| Review ID | `HOME-001-G9-APP-ALIGN-01` |
| Locked implementation | `cc55245e83bff0e7c4a63638f65d678dbc3989c3` |
| Evidence HEAD | `63898249810817bbd298fba259410fc7565c320c` |
| Build / runtime | `jWyd3UOiNCdM8j7ue6NvY` / `http://127.0.0.1:3291` |
| Recheck scope | `COMPLETE / TARGETED_RETURN_REQUIRED` |
| Page Gate 9 | `NOT_PASS / CONDITIONAL_RETURN` |
| Integration | `NOT_READY` |
| Release | `NOT_AUTHORIZED` |

This is an independent read-only review of the exact Gate 8 candidate. It does not alter D16 code, approve Gate 10, or authorize merge, deployment, publication, DNS or indexing.

## 2. Outcome first

The Home body implementation is materially aligned with the approved Applications-family direction. Exact module order, copy and href inventory, Hero media, Start Here, four Product groups and fourteen Grade IDs, responsive page RFQ, five-width layout, SEO/GEO/Schema, `site_scope=tio2-my`, keyboard focus, Product disclosure behavior, scroll lock and Mobile target size passed the independent checks.

The candidate cannot pass Gate 9 yet for two narrowly bounded changes:

1. `ROOT-GLOBAL-CHROME-G9-F01`: the shared Mobile Menu backdrop is transparent instead of visually dimming and isolating the page as shown by the approved Menu-open evidence. Functional modal focus containment and scroll lock pass; the visual isolation does not.
2. `HOME-001-G9-USER-CHANGE-01`: the user explicitly directed on 2026-09-11 that the green vertical ornament at the left of the Home Hero be removed. This is a new approved visual decision and supersedes only that ornament in the earlier Gate 4 evidence.

The five Application child routes and the sulfate-process route also return `404`; they remain external integration dependencies and are not authorization for Home to create substitute pages.

## 3. Stable acceptance IDs

| ID | Independent result | Evidence / note |
|---|---|---|
| `HOME-VU-A01` | `PASS` | Exact section order and href inventory; buyer-facing content present. |
| `HOME-VU-A02` | `PASS` | Applications-family surfaces, hierarchy and palette remain coherent. |
| `HOME-VU-A03` | `PASS_WITH_USER_CHANGE_OPEN` | Hero media/geometry pass; only the newly rejected left ornament must be removed. |
| `HOME-VU-A04` | `PASS` | Start Here is immediately below Hero at all five widths. |
| `HOME-VU-A05` | `PASS` | Four groups, `6/5/2/1`, fourteen unique Grades and keyboard-expanded state verified. |
| `HOME-VU-A06` | `PASS` | Page RFQ visible at 1440/1024/768 and absent at 390/320; fixed Chrome RFQ remains. |
| `HOME-VU-A07` | `FAIL_REQUIRED_SHARED_REPAIR` | Shared Chrome is reused and otherwise correct; Mobile Menu visual backdrop is missing. |
| `HOME-VU-A08` | `PASS` | No horizontal overflow, clipping, overlap or missing module at 1440/1024/768/390/320. |
| `HOME-VU-A09` | `FAIL_NARROWED_TO_VISUAL_ISOLATION` | Focus cycle, Escape return, `aria-modal`, disclosure, scroll lock, 44px and Axe pass; transparent backdrop fails background isolation. Physical AT/device/native 200% remain not tested. |
| `HOME-VU-A10` | `PASS_FOR_LOCAL_CANDIDATE` | Title, description, H1, canonical, visible manufacturer support and five-node graph verified. Runtime `noindex,nofollow` is the expected non-production overlay, not a release proof. |
| `HOME-VU-A11` | `PASS` | Scoped root marker, media path, frozen data/SEO sources and fail-closed evidence remain `tio2-my`; no new cross-scope fallback found. |
| `HOME-VU-A12` | `PASS_FOR_LOCKED_IDENTITY` | Manifest validator, evidence identity, clean worktree, Build marker and two-round preflight passed. |

## 4. Independent runtime evidence

Evidence root: `pages/home/07_qa/evidence-applications-aligned-v1.0/`.

| Evidence | Result |
|---|---|
| `home-001-g9-evidence-validation-v1.0.json` | Gate 8 Manifest validation PASS; SHA-256 `F82B1FD66D173D1BEB4E42AC3CBA421EEA3B3A2D65A76AC0E2DDEE353ADBC7AC` |
| `home-001-g9-preflight-v1.0.json` | Two-round locked runtime preflight PASS; SHA-256 `B89A170D42B7C002D6BEA9D1C39C5BE7C4A3B891F2EFA68FAC9BD973F76AC2A5` |
| `home-001-gate9-independent-browser-audit-v1.0.json` | Five-width, SEO/Schema, route, keyboard, Axe and state audit; SHA-256 `C461BEE9422C161C6B546FDD19762069B0D91CD744D35A83DC903EF925AA876C` |
| Five full-page screenshots | 1440, 1024, 768, 390 and 320 captured from the locked runtime |
| State screenshots | 390 Menu-open and 390 Products-expanded captured |

Key runtime observations:

- All five root requests returned `200`; all five widths had zero horizontal overflow.
- Mobile actionable targets below `44x44px`: `0` at 1024, 768, 390 and 320.
- Axe serious/critical violations: `0`; all recorded Axe violations: `0`.
- Menu focus stays inside the open dialog, Escape returns to the opener and body scroll is locked.
- `dialog::backdrop` computed background is `rgba(0, 0, 0, 0)`. D16 source confirms `components/sites/tio2-my/malaysia-global-chrome.module.css:18` sets `.mobileDialog::backdrop { background:transparent; }`.
- Nineteen unique internal targets returned `200`. Five Application child targets and `/products/sulfate-process-titanium-dioxide` returned `404` and remain `HOME-VU-DEP-03` integration items.

## 5. Required repair contract

### `ROOT-GLOBAL-CHROME-G9-F01`

- Owner: Malaysia Global Chrome owner / D16 shared component owner.
- Required: make the modal backdrop visibly dim the underlying page in conformance with the approved Mobile Menu-open evidence.
- Preserve: `aria-modal`, focus containment, Escape return, scroll lock, Deep Navy menu, eight-item order, terminal RFQ, all fixed RFQ surfaces, production SVG, no buyer-visible `CURRENT`, Header/Footer dimensions and legal utilities.
- Prohibited: a Home-private overlay or CSS override; page-specific divergence; changing shared navigation or Footer.
- Recheck: shared-consumer regression plus fresh 390 Menu-open screenshot and computed `::backdrop` value.

### `HOME-001-G9-USER-CHANGE-01`

- Decision source: user, 2026-09-11.
- Required: remove the green vertical decorative line generated by `.hero::before` at all five widths.
- Preserve: Hero border, radius, background, shadow, grid, copy, actions, image, dimensions and spacing.
- Scope: this decision changes only the Home Hero ornament and does not reopen other Gate 4 or Gate 6 decisions.
- Recheck: fresh five-width screenshots plus source/computed inspection showing the ornament is absent.

## 6. Open non-page layers

| ID | Layer | Status |
|---|---|---|
| `HOME-VU-DEP-03-APPLICATION-ROUTES` | Integration | Five external child routes return `404`; owners remain the five Application pages. |
| `HOME-VU-DEP-03-SULFATE-ROUTE` | Integration | External sulfate-process route returns `404`; owner remains the process page. |
| `HOME-VU-A09-PHYSICAL-AT` | Page QA limitation | Physical screen reader, touch device and native 200% zoom were not exercised. |
| `HOME-VU-DEP-05` | Release | Gate 10, merge, deployment, publication, DNS and indexing remain unauthorized. |

## 7. Return notification

The targeted return was sent to the existing D16 task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` on 2026-09-11. It requests a new exact implementation/evidence/Build/runtime identity and prohibits Home-private repair of the shared Chrome finding. Delivery result: `SENT`.

