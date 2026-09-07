# MARKET-000 Gate 9 Targeted Re-review Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-000` / `/markets/` |
| Parent review | `MARKET-000-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_ACCEPTED / CONDITIONAL_RETURN / NOT_APPROVED` |
| Target finding | `MARKET-G9-P0-01` — approved Canonical/redirect parity |
| Re-review target | `616193f3dbf059f0e081c8d59119c008ba2b848b` |
| Re-review date | 2026-09-04 |
| Evidence status | `TARGETED_REREVIEW_PASS / PENDING_PROJECT_CONTROL` |
| Recommended finding disposition | `VERIFIED_FIXED / CLOSED` |
| Recommended Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `NOT_AUTHORIZED` |

This is a read-only review. No D16 source, test, CMS, configuration, deployment, release or indexing action was performed by the MARKET-000 page task.

## 1. Revision identity and scope

| Item | Verified value |
|---|---|
| Branch | `codex/home-001-tio2-my` |
| Parent | `49289d40fdb0b91d28f534776464403883d912ff` |
| Target / current HEAD | `616193f3dbf059f0e081c8d59119c008ba2b848b` |
| Commit message | `fix: address Home and Markets gate 9 findings` |
| Commit date | 2026-09-04 09:05:51 +0800 |
| Final tracked state | Clean; `git diff --check` produced no output |

The relevant MARKET-000 change sets `skipTrailingSlashRedirect=true` and delegates slash normalization to `proxy.ts`. The proxy preserves the approved `/markets/` representation only for `SITE_ID=tio2-my`, redirects `/markets` to `/markets/`, reproduces the earlier no-trailing-slash behavior for other page/API paths, and does not attach the document-language header to API routes.

The same commit contains independently governed HOME-001 changes. They are outside this MARKET-000 targeted closure except where shared proxy/Chrome regression tests necessarily cover them.

## 2. Fresh executable evidence

| Check | Fresh result |
|---|---|
| Targeted proxy/config/Markets/Global Chrome/RFQ/revalidation/crawler Vitest | PASS — 24 files / 159 tests |
| TypeScript `npm run typecheck` | PASS |
| `SITE_ID=tio2-my` preview production build | PASS — Next.js 16.3.2; 35 routes |
| MARKET-000 plus shared-navigation Playwright | PASS — 13/13 |
| Independent 320/390/768/1440 browser audit | PASS — 4 viewports / 0 failed checks |
| Axe | PASS — 0 serious / 0 critical at all four viewports |
| Targeted ESLint for proxy/config/Market tests | PASS — 0 errors / 0 warnings |
| D16 tracked state after verification | PASS — clean |

## 3. Canonical and redirect closure

| Probe | Fresh result | Contract |
|---|---|---|
| `GET /markets/` with redirects disabled | 200; no `Location` | PASS — approved Canonical is the direct representation |
| `GET /markets?source=test` with redirects disabled | 308; `Location: /markets/?source=test` | PASS — query retained while normalizing to approved Canonical path |
| Browser navigation from `/markets` | Final path `/markets/` | PASS |
| Canonical element | `https://tio2malaysia.com/markets/` | PASS |
| CollectionPage URL and ID | trailing-slash `/markets/` authority | PASS |
| Ten visible Market action hrefs | all retain approved trailing-slash URLs | PASS for Hub output; child responses remain an external gate |
| Staging sitemap | MARKET-000 absent | PASS — indexing remains unauthorized |

`MARKET-G9-P0-01` is therefore independently verified fixed.

## 4. Global redirect/API regression

| Probe | Fresh result |
|---|---|
| `GET /products/` | 308 → `/products` |
| `GET /privacy-policy/` | 308 → `/privacy-policy` |
| `POST /api/revalidate` | Direct handler response; no `Location` header |
| `POST /api/revalidate/` | 308 → `/api/revalidate` |

The direct revalidation response was 500 in this local environment, but it was not redirected. This targeted finding concerns redirect parity only; endpoint authorization/data dependencies remain outside MARKET-000.

## 5. Preserved page, visual and accessibility contract

At 320, 390, 768 and 1440 the independent audit reconfirmed:

- exact H1 and seven-module order;
- 10 Market actions, EU parent/six-child hierarchy and six buyer answers;
- zero body RFQ and fixed shared-Chrome RFQ visibility;
- zero horizontal overflow and zero visible target below 44px;
- Mobile Menu first-focus, Tab, Shift+Tab, Escape and focus return;
- Title, Meta, Canonical, `noindex, nofollow`, no hreflang and allowed three-type Schema;
- 10-item ItemList matching the 10 visible Market action identities;
- zero PT-BR and specific Trade output;
- zero row-level PRODUCT V0.3 Grade/Application/Process output;
- zero serious/critical Axe violations and zero browser console errors.

Fresh final-build visual evidence was inspected and its filesystem dimensions/hashes independently matched the developer record:

| File | Dimensions | SHA-256 |
|---|---:|---|
| `market-000-1440.png` | 1440×5266 | `91C6DB7CF48167B641CB0CD84593E243772337DE3B2D82162113B49699A38E94` |
| `market-000-768.png` | 768×6989 | `2F66AFC5A230C668212479722F4A471C64F27B32A2F6A8BD83028A4D575CF00B` |
| `market-000-390.png` | 390×8040 | `840E9B7F0028B3271FB8206DEA2210BDACE702A8F6FC00091D3AC1D400055AF0` |
| `market-000-320.png` | 320×9005 | `1F234630C580814D55FF47D9AD264E14EF5FF39A89CFCB34931F01662D3F91B0` |

No clipping, overlap, horizontal crop, broken card boundary or Footer closure defect was observed.

## 6. External dependencies and release blockers retained

Fresh 22-route follow-up produced 4 final 200 responses, 12 final 404 responses and 6 final 500 responses:

- all 10 visible Market child destinations remain 404;
- `MARKET-BR-PT` remains 404 and absent from DOM/Schema/hreflang/sitemap;
- `APP-000` remains 404;
- PRODUCT-000, DOC-000, RES-000 and ABOUT-001 return 200;
- CONV-DOC returns 500;
- CONV-RFQ returns 500 in this independent build, so receiver/readiness remains unresolved;
- all four held Trade paths return 500 but remain absent from MARKET-000 output.

These are not reopened MARKET-000 implementation findings in this targeted review. They remain external dependencies/full-site release gates under the responsibility split already accepted by project control:

| Gate | State |
|---|---|
| Ten Market child-route publication gate | `OPEN / EXTERNAL_DEPENDENCY / NOT_AUTHORIZED_BY_THIS_REVIEW` |
| `APP-000` readiness | `OPEN / EXTERNAL_DEPENDENCY` |
| RFQ receiver/readiness | `OPEN / EXTERNAL_DEPENDENCY / RELEASE_BLOCKER` |
| CONV-DOC and held Trade route cleanliness | `OPEN / FULL_SITE_P1 / RELEASE_BLOCKER` |
| MKT-R002–MKT-R005 | OPEN/FROZEN |
| Gate 10 / release / indexing | `NOT_AUTHORIZED` |

## 7. Recommendation

`MARKET-G9-P0-01 = VERIFIED_FIXED / CLOSED_RECOMMENDED_PENDING_PROJECT_CONTROL`

`MARKET-000 Gate 9 = READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS_RECOMMENDED_PENDING_PROJECT_CONTROL`

This recommendation does not close any external dependency, authorize Market child pages, or authorize Gate 10.
