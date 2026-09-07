# RES-ORIGIN Gate 9 Read-Only QA Return V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `RES-ORIGIN-G9-ROQA-01` |
| Page | `RES-ORIGIN` / Non-China Titanium Dioxide Supply Guide |
| Route | `/resources/non-china-titanium-dioxide/` |
| Review date | 2026-09-05 |
| External task | `Implement RES-ORIGIN Gate 8` / `01a06f70-b99d-7a92-9def-196f2b21abd9` |
| Reviewed worktree | `C:\Users\longe\.codex\worktrees\bd8e\16Wordpress_nextjs` |
| Reviewed ref | `dd1e82ee3516e7e994a39f8b9e040d0743764069` |
| Base ref | `d1b15e253b1202d2e4639646845c7ca8155104a8` |
| Outcome | `RETURNED_TO_DEVELOPMENT / P0_OPEN` |
| Gate 9 | `IN_REVIEW / NOT_APPROVED` |
| Gate 10 | `NOT_AUTHORIZED` |

This is a read-only QA record. D23 did not modify D16 implementation code.

## 1. Outcome

The current implementation passes page rendering, approved content, SEO, responsive, interaction, site-scope, build and current-state Schema checks. Gate 9 cannot close because the conditional Article path required by `G8-14` is not reachable through the actual CMS → DTO → visible page → JSON-LD flow.

Current checklist disposition: 23 criteria provisionally satisfied; `G8-14` is `P0 OPEN`. No deployment, publication or indexing action is authorized.

## 2. P0 Finding

### `RES-ORIGIN-G9-P0-01` — Conditional Article contract is isolated from the real page pipeline

**Requirement:** `G8-14` requires Article Schema to be emitted only when complete, real metadata is also visible. Incomplete or invisible metadata must omit Article while preserving the page.

**Observed evidence:**

1. `app/resources/non-china-titanium-dioxide/page.tsx:38` calls `buildMalaysiaResourceOriginJsonLd(site, page)` without passing `visible: true` or the actual visible metadata state. The builder therefore cannot emit Article from this route.
2. `components/sites/tio2-my/resources/malaysia-resource-origin-page.tsx` contains no buyer-visible author, publisher, publication date or review date treatment and exposes no visibility result to the route.
3. `lib/wordpress/resource-origin-v01-dto.ts:161-162` rejects every payload whose `schemaMode` is not `BREADCRUMB_ONLY`; the approved static contract also fixes `articleMetadata` to `null`. A complete CMS Article record therefore cannot survive validation.
4. `tests/unit/resources/malaysia-resource-origin-jsonld.test.ts:24-39` proves only the isolated helper by manually injecting metadata and `visible: true`; it does not exercise the CMS/DTO/route/component integration.

**Impact:** The current null-metadata page correctly omits Article, but the required complete-metadata branch can never be activated without bypassing the validated page pipeline. The acceptance test gives a false sense of end-to-end coverage.

**Required correction:**

- Add a failing integration-level test first for both branches: complete approved metadata reaches the DTO, renders visibly, and produces Article; incomplete or invisible metadata omits Article without breaking the page.
- Preserve the current approved `articleMetadata=null` state and current no-Article runtime result. Do not invent author, publisher or date values.
- Validate all required Article fields, keep exact approved public copy locked, and fail closed for partial metadata.
- Make the route derive Schema eligibility from the same data actually rendered to buyers; no hidden-only metadata or manual test-only injection.
- Return a new immutable commit/ref, clean-worktree evidence, updated focused tests, typecheck, lint/build results and an amended implementation receipt.

## 3. Verification Already Passed

| Area | Independent result at reviewed ref |
|---|---|
| Focused RES-ORIGIN suite | `14 files / 161 tests PASS` in the expanded reviewer set |
| TypeScript | `npm run typecheck` PASS |
| ESLint | PASS; two pre-existing warnings only in `docs/prototypes/site-a-resources/build-visual-prototype.mjs` |
| Malaysia production build | `SITE_ID=tio2-my npm run build` PASS; `37/37` static pages |
| Route | Local preview returned HTTP 200 |
| SEO | Exact Title, Meta and Canonical PASS; local robots remain `noindex, nofollow` |
| Current Schema | Breadcrumb present; Article absent; prohibited Product/Offer/Review/AggregateRating/FAQ/QAPage absent |
| Content boundary | One H1; nine FAQ answers in initial HTML; zero M-996/M-2196 references |
| RFQ relation | Exact approved prefill URL PASS |
| Responsive | 1440, 1024, 768, 430, 390 and 375px: no horizontal overflow, clipping, undersized text or undersized interactive targets |
| Accessibility states | Mobile-menu focus trap/Escape/focus restoration PASS; FAQ keyboard focus and expanded answer PASS |
| Visual inspection | Desktop, Tablet, Mobile, Mobile Menu and FAQ focus evidence aligned with approved direction |
| Worktree | Clean at reviewed ref |

## 4. Repository-Wide Test Context

The reviewer also ran the complete repository suite on both the feature ref and its exact base. The feature ref reported `18 failed / 2251 passed / 46 skipped`; the base reported `28 failed / 2177 passed / 47 skipped`. The remaining failures are pre-existing environment, fixture materialization or unrelated-route conditions and do not show a regression expansion caused by RES-ORIGIN. A product-asset timeout reproduced on the base. The DOC-TDS hash-only failure uses identical Git blob IDs at base and tip and reflects Windows line-ending materialization, not a changed committed fixture.

These baseline failures do not waive `RES-ORIGIN-G9-P0-01` and do not authorize release.

## 5. Re-review Contract

Gate 9 re-review will inspect only the returned correction plus regression risk around CMS validation, buyer-visible metadata, Schema parity, route rendering and the previously passed page checks. Gate 9 closes only when the P0 is verified fixed, all P0/P1 findings are closed, and the reviewed ref is immutable and clean.

