# CONV-SAMPLE Gate 9 Execution Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Date | 2026-09-04 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| QA mode | Strict read-only review of returned Gate 8 implementation |
| Implementation root | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch / commit | `codex/home-001-tio2-my` / `f7fc16e991d8a51f13cdc2376549dce8367578f7` |

No D16 source, test, content, configuration, branch or index change was retained. `git diff --exit-code` and `git status --short` were clean after the QA commands. Build and browser commands generated only ignored runtime output. A temporary Next development probe added two generated-type include paths to `tsconfig.json`; that command side effect was immediately removed and a clean tracked diff was independently reconfirmed before QA continued.

## 1. Fresh Command Evidence

All D16 commands below ran against the returned worktree and commit shown above.

| Check | Command / method | Fresh result |
|---|---|---|
| Branch and commit | `git branch --show-current`; `git rev-parse HEAD` | Exact expected branch and commit |
| Targeted unit/integration/infrastructure tests | `pnpm exec vitest run tests/unit/wordpress/cache-tags.test.ts tests/integration/api/revalidate.test.ts tests/unit/request-sample tests/integration/request-sample tests/infrastructure/tio2-my-request-sample-wordpress.test.ts` | PASS — 13 files / 128 tests |
| TypeScript | `pnpm typecheck` | PASS |
| Production build | `SITE_ID=tio2-my`, `NEXT_PUBLIC_SITE_ID=tio2-my`, `NEXT_DIST_DIR=.next-tio2-my`, then `pnpm build` | PASS — `/request-sample` and `/api/tio2-my/request-sample` present |
| Targeted ESLint | Request Sample route, API, components, request-sample libraries, SEO, WordPress DTO/query/types and related tests | PASS — 0 errors/warnings |
| Claim scan | Exact approved JSON contract scanned for promise/comparison strings | No `free sample`, `in stock`, `available now`, `guaranteed`, `we will ship`, `dispatch within`, `delivery within`, `equivalent`, `alternative to`, `better than`, `NO_PUBLIC_MAPPING` or `Rubber`; M-996/M-2196/M-2377 each occur once as an independent grade option |
| Tracked-tree integrity | `git diff --exit-code`; `git status --short` | PASS — clean |

## 2. Independent Production-server Browser Audit

The independent browser harness is stored outside D16 at:

`D:\23MySec\99_workspace\CONV-SAMPLE_GATE9_2026-09-04\gate9-runtime-audit.mjs`

It launched Chromium with proxy bypass against a local Next production server bound to `localhost:3006`, using the returned production build and a local read-only CMS response fixture. The audit checked 1440, 1280, 1024, 768, 430, 390, 375 and 320px; 1440/768/390 received full-page screenshots and Axe scans.

Final result: **90 assertions passed / 8 assertions failed**. The eight failed assertions resolve to four unique findings:

- Privacy Policy target height below 44px at five responsive widths;
- FAQ disclosure lacks the contracted explicit `aria-expanded` state;
- submitting form lacks the contracted `aria-busy` state;
- known missing receiver configuration still renders a usable initial form.

All other tested assertions passed, including route response, one H1, exact H1/title/meta/canonical, noindex lock, allowed Schema types, clean prefill canonical, PRODUCT V0.3 prefill restrictions, field/option counts, validation-summary focus, linked field focus, visible focus ring, unknown-grade/Other handling, ordinary-browser duplicate protection, retained values, ambiguous-response rejection, same-token retry, token rotation after a material edit, explicit-acknowledgement success, post-submit unavailable replacement, Mobile Menu focus trap/Escape/restore, responsive single-column form, non-Privacy control size, eight-width overflow and serious/critical Axe results.

### Environment investigation note

An initial browser attempt hit a different D23 service already bound to `127.0.0.1:3004`, and a second attempt used a `127.0.0.1` Origin while Next normalized the local Origin to `localhost`. Systematic isolation showed both were local harness conditions: the independent server was moved to `localhost:3006`, proxy bypass was enabled, and the complete audit was rerun. These preliminary environment failures are not classified as CONV-SAMPLE findings.

## 3. Runtime Evidence Files

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-audit.mjs` | 15,239 | `0245ee6d5af40c8ab37bdce9aabe379905e143642bd918384c02e9712f7e8515` | Independent browser assertions |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-audit.json` | 20,403 | `9ebe91a5cddef0b0486b2454b0b59ae9acb34d503a2a7020df50ddae494efe60` | Machine-readable final result |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-1440.png` | 249,033 | `8d1b2f37ae9ce05af7fbba48840cc573d81641ada17d20ae067726bc9e76cf99` | Fresh Desktop production render |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-768.png` | 214,604 | `ce42f2998dac3cb3c0fec50dd1d3580a229800eb8ad9f4b925aa33510050f978` | Fresh Tablet production render |
| `99_workspace/CONV-SAMPLE_GATE9_2026-09-04/gate9-runtime-390.png` | 191,942 | `7b97262f3d1e60db06374a7d1688a12b714367ea2b2e3ddbb1731dbb348df874` | Fresh Mobile production render |

Paths are relative to `D:\23MySec\`. Screenshots contain only synthetic or empty test data.

## 4. Visual Inspection

Manual comparison against approved Gate 5 V0.5 confirms:

- Desktop uses one full-width main flow, not a left/right page split;
- the approved order is `Sample Request → Human Review → FAQ`;
- no short right rail, sticky review card or decorative empty column was reintroduced;
- 768 and 390 reflow to the approved single-column task order;
- shared Header, Mobile Header and Footer remain visually present;
- no collision, clipping or page-level horizontal overflow was observed.

This visual result does not override the four interaction/accessibility findings.

## 5. Boundary

This evidence record is not Gate 9 approval. It authorizes no fix, Gate 10, deployment, publication, DNS, production write, migration or indexing action.
