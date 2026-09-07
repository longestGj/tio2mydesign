# GRADE-M896 Gate 9 Read-Only QA Closure V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `GRADE-M896` / M-896 |
| URL | `/products/m-896/` |
| Review ID | `GRADE-M896-G9-PCR-01` |
| Gate 7 authority | `GRADE-M896-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 handoff | `GRADE-M896-G8-HANDOFF-01 = USER_AUTHORIZED / HANDED_OFF` |
| Project-control decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Standard page lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Route release state | `PREVIEW_ONLY` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |
| Review date | 2026-09-02 |

This decision covers only M-896 under the approved strict-serial template-reuse workflow. It does not approve Gate 10, public release, indexing or implementation of M-895 and later Grades.

## 1. Audited implementation identity

| Item | Evidence |
|---|---|
| Gate 8 implementation | `4c0c79de8294435a6e25d70d4c04b8a5185d7f85` — `feat(tio2-my): add M-896 product detail preview` |
| Parent implementation baseline | `3d2de1f418b011b6043e39f2119255f3f14fb0ed` — shared registry/hash-binding correction |
| External task | `01My首页开发` / thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| External branch | `codex/home-001-tio2-my` |
| Audited worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| External worktree at final check | Clean at the audited commit |

The implementation reuses the approved shared Product Detail route, component, DTO, registry, WordPress projection, Global Chrome and CSS. No standalone M-896 route, Header, Footer or stylesheet was created.

## 2. Independent read-only checks

| Check | Result |
|---|---|
| Focused Product Detail Vitest | PASS — 7 files / 36 tests independently rerun |
| TypeScript `tsc --noEmit` | PASS |
| Changed-file ESLint | PASS — 0 errors / 0 warnings |
| Correctly scoped production build | PASS — `SITE_ID=tio2-my`; only M-350, M-510 and M-896 Product Detail SSG entries |
| Registry authorization | PASS — M-350, M-510 and M-896 candidates only |
| Other Grade protection | PASS — the other eleven identities remain `IDENTITY_ONLY*`; no M-895 file or implementation delta |
| M-896 identity and scope | PASS — `GRADE-M896`, `/products/m-896/`, locale `en`, `site_scope=tio2-my` |
| Module contract | PASS — Hero visual 4 keys; Hero actions Quote + Sample; 6/6 Coatings applications; 2 evaluation groups; 11 value/testMethod rows |
| Technical rendering | PASS — `Property | Value | Test method`; Schema values come from `row.value`, never from test method |
| Optional/restricted modules | PASS — Origin Support, Related Grades and Not Recommended have no wrapper, navigation item, Schema or reserved gap |
| SEO/GEO/Schema | PASS — exact canonical, preview robots, Product + BreadcrumbList, 11 additional properties, no unsupported commerce/origin/manufacturer claims |
| Release controls | PASS — `indexingAuthorized=false`, `sitemapAuthorized=false`, `PREVIEW_ONLY` retained |
| Final external worktree | PASS — clean |

The first independent build attempt intentionally lacked a site selector and failed closed with `SITE_ID is required`. It was rerun with the required Malaysia site environment and passed. Next.js temporarily added the QA dist directory to `tsconfig.json`; the external development task restored that generated-only change before closure, and the audited worktree is clean. Controller 02 did not directly edit D16 implementation files.

The developer evidence additionally reports: 11 focused files / 45 tests PASS; PHP syntax and local M-896 seed PASS; local GraphQL preserves M-350/M-510 while exposing M-896's 11-row value/testMethod shape; Product Detail Playwright 22/22 PASS; Axe zero violations; no horizontal overflow; mobile touch targets at least 44×44px; all eleven later Grade routes return 404.

## 3. Approved contract hash binding

Algorithm: `sha256-json-recursive-key-sort-v1` — parse JSON, recursively sort object keys, preserve array order and scalar values, serialize compact UTF-8 JSON, then calculate uppercase SHA-256.

| Artifact | SHA-256 |
|---|---|
| D23 approved raw content contract | `BA735FA0570E81F8055C76B7AC7B434498446BBD5540A1F2A32F0A9E6F3EC03A` |
| D16 repository raw payload | `1811BD57F42E918503B0AD4ED243242A41AB6A0C40534E458571A0802DE9EB69` |
| Independently calculated canonical content — both files | `4049273762F620444A14CEC3ED223C7AC44A0AB73166D058B0B625F73D7F0730` |

The raw-byte difference is transport formatting only. Independent recomputation confirms identical parsed content under the registered algorithm; the D23 raw hash remains pinned for audit traceability.

## 4. Visual, responsive and accessibility evidence

Controller 02 visually inspected the full 1440px, 768px, 390px and 320px evidence. Module order, information density, three-column/stacked technical data, shared Header/Footer, responsive wrapping and optional-module collapse are consistent with the approved template and M-896 contract.

| Evidence | SHA-256 | Result |
|---|---|---|
| `m896-1440.png` | `0AF4358A475F155494A0D09DD8CBC685EDF85C75A2324D3C1ED55408CBCCA06C` | PASS |
| `m896-1024.png` | `F64377C5A105D37231F8C7533538DD4909139F376F47DAE00A8CD007B540B50A` | PASS |
| `m896-768.png` | `7709222C0BB7DD845509FEF0B5265F2264F8F2A37A3FCF3FFABA91AFEACE073C` | PASS |
| `m896-430.png` | `3E5B626153F524BABCB8DDA4BF5522470D6DE851B19F4ED0339F96801A0AEBA0` | PASS |
| `m896-390.png` | `7A4B9DDC624D10A82340ED087AFAEAC7A551BE162BED8E009D6456516A1C1C22` | PASS |
| `m896-narrow-320.png` | `04F98DB4EEC1658896CF396B67DCC52A9FE4332D4E277B6223CA8BDD771AE8A9` | PASS |
| `m896-200-percent-zoom-equivalent.png` | `071A6D4259DD094D514A5EA10A4E5A1AE6E765F8FB3D4A7CA65B94D9F1344081` | PASS |

The shared component change preserves the recorded M-350 and M-510 screenshot hashes. No visual regression is accepted as part of this closure.

## 5. Release blockers and carry-forwards

| Item | Disposition |
|---|---|
| M-896 route | Remains `PREVIEW_ONLY`; no public-live or indexing approval |
| Fixed Global RFQ | Production receiver, delivery evidence, Privacy Policy and consent/CMP remain release dependencies |
| Contextual Quote, Sample and Request Documents | Omitted until each destination is `LIVE_APPROVED` |
| Coatings and chloride-process destinations | Omitted/fail-closed until the destination route is `LIVE_APPROVED` |
| Product image | No approved M-896 product media; no Product Schema image is emitted |
| M-895 and later Grades | Stay identity-only / 404 until each completes its own evidence, content, Gate 8 and Gate 9 cycle |
| Gate 10 | Not authorized |

## 6. Boundary and final status

No deployment, DNS change, production write, publication, sitemap opening or indexing operation was performed.

- P0 implementation defects: 0 open.
- P1 implementation defects: 0 open.
- Release blockers: retained as listed above.

`GRADE-M896-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`GRADE-M896 lifecycle = READ_ONLY_QA_APPROVED`

`GRADE-M896 Gate 9 disposition = READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`

`Route release state = PREVIEW_ONLY`

`Gate 10 = NOT_AUTHORIZED / NOT_STARTED`
