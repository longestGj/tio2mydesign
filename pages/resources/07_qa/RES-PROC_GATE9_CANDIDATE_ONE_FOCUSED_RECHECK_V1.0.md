# RES-PROC Gate 9 Candidate-One Focused Recheck V1.0

## 0. Control

| Field | Value |
|---|---|
| Page / route | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Recheck date | 2026-09-08 |
| Scope | Candidate one findings `F01`–`F03`; five affected conditions plus 23 regressions |
| Handoff ID | `RES-PROC-G8-G9-REPAIR-20260908-01` |
| Repair implementation | `656d6d403bcc126d174ea2216ff8f0a693d1e455` |
| Evidence HEAD / Build ID | `7595201a9fa682582332d7f4b4f23e9428b3cffd` / `N-WGbOfm7Y6MOF6bondmD` |
| Runtime | `http://127.0.0.1:3233/resources/chloride-vs-sulfate-titanium-dioxide` |
| Candidate-one result | `28 PASS / 0 FAIL / 0 NOT_VERIFIED` |
| Comparative disposition | `CANDIDATE_ONE_GATE9_PASS / USER_SELECTION_PENDING`; candidate two unchanged and not selectable as-is |

This independent review evaluates the repaired candidate one. It does not select or integrate a candidate and does not authorize Gate 10 or release.

## 1. Intake and Independent Verification

- Manifest identity, branch, ancestry, clean state, evidence hashes and Build ID: `PASS`, 133 checks / 0 failures.
- Fresh D23 preflight: two of two HTTP 200 responses, 80,544 bytes each, exact Page ID/title/canonical/robots and Build marker.
- The built-in browser independently opened the exact runtime and confirmed the approved H1, 14-module structure, source set, Buyer Questions, final action and shared Global Chrome.
- D23 independently reran seven directly affected unit/infrastructure files: 7/7 files and 41/41 tests passed.
- Submitted scoped regression: 27 files passed, two explicit environment-gated files skipped; 193 tests passed, two skipped. The isolated WordPress mutable-state test separately passed 1/1.
- Submitted Playwright: standard suite 7/7 plus actual browser-tab zoom 1/1 passed. Typecheck passed; ESLint exited 0 with two inherited warnings.
- Repository-wide Vitest reported 2,322 pass / 48 skip / 10 fail. All six failing files are unchanged from approved baseline `53ec5021…` to repair implementation `656d6d4…`; none is in the repaired RES-PROC, shared Chrome or direct-consumer scope. These failures remain disclosed and are not used as a candidate-one regression failure.

## 2. Finding Closure Decisions

### RES-PROC-G9-C1-F01 — CLOSED

Affected conditions: `PROC-A08`, `PROC-A19`.

The unapproved buyer-visible sentence was removed. For all seven non-empty withdrawal combinations of `lb_blr886`, `lb_lr108` and `tronox_portfolio`, server-rendered HTML now excludes the rejected fallback, every dependent application statement and action, and each revoked source label/URL. The approved `APPLICATION_OVERLAP` eyebrow/heading and 14-module order remain. The conditional body is absent, so no disabled action or empty action block remains.

`PROC-A08 = PASS`; `PROC-A19 = PASS`.

### RES-PROC-G9-C1-F02 — CLOSED

Affected conditions: `PROC-A21`, `PROC-A28`; shared root `RES-PROC-G9-RF-01` for candidate one.

The candidate's shared `inert` modification and corresponding owner-test expectations were removed. Git comparison against approved baseline `53ec5021…` is empty for `malaysia-global-chrome.tsx` and its owner test. No page-private Chrome was added. MalaysiaMarketHub, RES-ORIGIN, RES-PROC and the Global Chrome infrastructure contract pass the direct-consumer regression set.

`PROC-A21 = PASS`; `PROC-A28 = PASS`; candidate-one branch of `RES-PROC-G9-RF-01 = CLOSED`.

### RES-PROC-G9-C1-F03 — CLOSED

Affected condition: `PROC-A23`.

The former `Emulation.setPageScaleFactor` test was removed. The replacement uses headed Chromium with a temporary extension calling `chrome.tabs.setZoom/getZoom` and reads the actual tab zoom from 1 to 2. The browser window remains 1216×894; logical viewport changes 1200×760→600×380; DPR changes 1→2; physical viewport remains 1200×760. The result records no horizontal overflow, clipped module/source or fixed/sticky obstruction; all 23 visible main actions are at least 44 CSS px in both dimensions, in viewport after scrolling and center-hit usable.

D23 verified the JSON measurements and screenshot hash and visually reviewed the 200% full-page capture. No blocker-level crop, clipping or unusable control was found.

`PROC-A23 = PASS`.

## 3. Condition Result

| Result | Conditions |
|---|---|
| PASS | `PROC-A01`–`PROC-A28` |
| FAIL | None |
| NOT_VERIFIED | None |

The five repaired conditions pass on implementation `656d6d4…`. The other 23 conditions retain PASS after exact-candidate regression confirmation. Candidate one's Gate 9 condition set is complete.

## 4. Updated Four-Layer Status

| Layer | Status | Meaning |
|---|---|---|
| `RECHECK_SCOPE` | `PASS / CLOSED` | All three returned findings and all 28 conditions are independently resolved for candidate one. |
| `PAGE_GATE9` | `CANDIDATE_ONE_PASS / USER_SELECTION_PENDING` | Candidate one passes; candidate two remains `NOT_PASS / NOT_SELECTABLE_AS_IS`; no cross-candidate selection is inferred. |
| `INTEGRATION` | `NOT_SELECTED` | The user retains final candidate selection; no merge or code transfer is authorized. |
| `RELEASE` | `NOT_AUTHORIZED` | Gate 10, production dependencies, deployment, publication and indexing remain outside scope. |

## 5. Gate 8 Disposition

No further Gate 8 repair is required for `RES-PROC-G9-C1-F01`, `F02` or `F03` unless new contrary evidence appears. Keep the exact runtime/evidence available pending the user's candidate decision. Candidate two remains isolated and requires no work absent explicit reauthorization.

## 6. Boundary

No candidate was selected, merged, copied, pushed, deployed or published. D23 did not modify D16. No production WordPress data, RES-000 inventory, sitemap, DNS or indexing state was changed.

