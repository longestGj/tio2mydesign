# APP-000 D32 Gate 3 execution self-check V0.2

**Status:** DONE_WITH_CONCERNS  
**Candidate:** `pages/applications/04_planning/d32-gate3-v0.2/`  
**Frozen bundle:** `sha256:dbc8e41f809388fae83fe5b75b2b8421e2aa808b68e0e8f54331b0b26645e41e`  
**Frozen source:** `sha256:60e7a9091b7ebfab27a810aafce30a457532ac770ea9f75a6b655a14c9c09aef`

## Scope and authority

This is the author self-check for the new V0.2 candidate only. It responds to the four findings in the V0.1 independent review without changing the V0.1 candidate, its frozen bundle, or the independent-review record. The approved Gate 2 B/C baseline remains intact: five modules in the approved order, three evaluation steps, six collections with 30 relationships (8/8/7/4/2/1), and zero Process/FAQ modules. This remains a local planning simulation; it is not D32 implementation or target-route readiness evidence.

## Finding closure

| Finding | Closure evidence | Result |
| --- | --- | --- |
| F01 | `regression.cjs` fails V0.1 for four M2–M5 eyebrow strings and passes V0.2 after their removal. `verify.cjs` asserts no M2–M5 editorial eyebrow while retaining the approved modules, copy, 3 steps and 30 relationships. | PASS |
| F02 | V0.2 CSS sets the page-owned breadcrumb, hero-index, grade-link and page action treatment to functional Teal `#008078`; V0.2 verifier checks computed link and border tokens at 1440/768/390. Shared Header/Footer rules were not edited. | PASS |
| F03 | V0.2 regression and verifier assert all 30 unavailable grades in `application-only`/`none` are non-focusable `span` plain labels with no href, handler, pointer interaction or border-chip affordance. The relationship text remains present. | PASS |
| F04 | V0.2 source and content extraction expose explicit owner IDs and exact owner routes for APP-COAT, APP-PLAS, APP-MB, APP-INK and APP-PAPER. The extraction states `LOCAL_PLANNING_SIMULATION_ONLY`; no route availability is claimed. | PASS |
| A01 | Formal render now waits for dialog close/focus-return before neutral full-document route capture, then clears focus. A diagnosis confirmed the prior close-event focus-return race. The final `ROUTE_FULL_390` hash equals the neutral `FULL_390` image hash (`63b7c4…`), and the opened final image has no Cookie Settings focus outline. | PASS |

## Verification evidence

Commands were run from `D:\23MySec`:

```text
node pages/applications/04_planning/d32-gate3-v0.2/regression.cjs pages/applications/04_planning/d32-gate3-v0.1/application-planning.html
# FAIL: F01 four extra eyebrows; F02 navy/non-Teal treatment; F03 interactive chips; F04 missing owner routes.

node pages/applications/04_planning/d32-gate3-v0.2/build.cjs
# BUILT: 6 collections, 30 relationships, 3 steps.

node pages/applications/04_planning/d32-gate3-v0.2/regression.cjs pages/applications/04_planning/d32-gate3-v0.2/application-planning.html
# PASS: 4 checks, no failures.

node pages/applications/04_planning/d32-gate3-v0.2/verify.cjs
# PASS: V0.2, 3 viewports, 4 route states, 5 modules.

node pages/applications/04_planning/d32-gate3-v0.2/freeze-render.cjs
# FORMAL_RENDER_COMPLETE: 9 captures; PASS_FOR_FORMAL_RENDER.

node skills/responsive-wireframe-design/scripts/check-preflight-record.mjs pages/applications/04_planning/d32-gate3-v0.2/preflight.json
# PASS_FOR_FORMAL_RENDER; no failures.

node pages/applications/04_planning/d32-gate3-v0.2/finalize.cjs
# FROZEN: 16 members, 9 captures, bundle dbc8e41f….
```

Opened at original resolution: `FULL_1440`, `FULL_768`, `FULL_390`, `MENU_390`, `COOKIE_390`, and the four 390 route-state images (`FULL`, `GRADE_ONLY`, `APPLICATION_ONLY`, `NONE`). Visual review found the expected three responsive compositions, menu and cookie states, all four route states, no overflow, preserved content, visible neutral plain labels in unavailable-grade states, and no residual Cookie Settings focus outline in the final route-full evidence.

## Freeze and isolation checks

- V0.2 owns its source, build, CSS, JS, extraction, verifier, regression test, preflight, formal render, asset index and freeze records; its 16-member freeze has 9 formal captures.
- Recomputed V0.2 member hashes and the bundle identity match `freeze.json`.
- Read-only V0.1 check remains `sha256:64592411f67a5e69dd0fa18db1195abde26e2b873d037db93985e1fa45430297`, with all 16 members and source `88f06f…` matching its freeze record.
- Diagnostic `test-*.png` files were removed; no `REPRO_*.png` remains in V0.2.

## Concerns / untested boundary

This is author self-check, not an independent review or a Gate closure. It does not test 320px/1024px, browser zoom, physical-device/assistive-technology behavior, actual D32/CMS assembly, live target-route availability, production analytics/cookie integration, deployment, or publication. A02 control-document work remains with project control and was not changed here.
