# GRADE-M895 Gate 9 Read-Only QA Closure V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `GRADE-M895` / `/products/m-895/` |
| Review ID | `GRADE-M895-G9-PCR-01` |
| Gate 7 | `GRADE-M895-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `GRADE-M895-G8-HANDOFF-01 = CONTROLLER_AUTHORIZED / HANDED_OFF` |
| Audited commit | `bf9c3438458d06856d42880a9013b7b61b3d09c4` |
| Decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Lifecycle | `READ_ONLY_QA_APPROVED` |
| Disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Route state | `PREVIEW_ONLY` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |
| Date | 2026-09-02 |

## 1. Independent Gate 9 result

| Check | Result |
|---|---|
| Commit/worktree | PASS — fixed commit above; final worktree clean |
| D23 raw contract | `CCBAB8EF7BEBB5641F409CF0925E861D57990EB53186448473754E88B48E3A5A` |
| D16 raw payload | `F1DFB607FA59EB39ADAFC97FBAB661D762EC2109B419B750A9DA26136F0D946C` |
| Canonical content — both | PASS — `C05AFEDE37CD69B5DA4AE5E77C3749093CCD7DEBC004424800FE870747C68E11` |
| Focused Vitest | PASS — independently rerun 6 files / 33 tests |
| TypeScript | PASS |
| Changed-file ESLint | PASS |
| Production build | PASS — correct `SITE_ID=tio2-my`; only M-350/M-510/M-896/M-895 Product Detail SSG routes |
| Identity/scope | PASS — `GRADE-M895`, locale `en`, `site_scope=tio2-my`, exact canonical |
| Source separation | PASS — V1 2026 values only; historical 11/2024 data not mixed |
| Visible content | PASS — 3 Coatings applications, 2 groups/8 items, 11 technical rows in approved order |
| Technical/Schema | PASS — `Property | Typical value | Test method`; 11 Product values derive from `row.value` |
| Optional/restricted output | PASS — Origin, Related, Not Recommended and unsupported logistics/regulatory claims absent |
| Later Grade protection | PASS — remaining ten Grades identity-only / 404; no M-340 implementation |

Developer verification additionally reports 12 files / 53 tests PASS with one environment-dependent skip, Playwright 29/29, PHP/seed/GraphQL PASS, Axe zero violations, no horizontal overflow, touch targets at least 44×44px, keyboard/current-state PASS and all prior Grade screenshot hashes unchanged.

## 2. Visual evidence

Controller 02 inspected the full 1440px and 390px outputs; developer evidence also covers 1024/768/430/320 and 200% equivalent. Module order, density, responsive stacking, shared Chrome and technical readability pass.

| Evidence | SHA-256 |
|---|---|
| `m895-1440.png` | `039BCB21B0E39FE84AD3FA1479D4164AEBADEAA4CF460E9F5A7D88E62ED287A2` |
| `m895-1024.png` | `6401547A36C947D4E45DAA4CF7E13348F56BC31CA3C49328DA5A0D2234A44188` |
| `m895-768.png` | `B8CC6A1395E4046FD8EE2229B4ADCEBD3B4F0C52175591B91E8F10F3EC11C938` |
| `m895-430.png` | `608A61ED43946998767000A68F6EA0D78D77E7DC0DACD042FCB8FD04E7FBF78A` |
| `m895-390.png` | `763E7B7027C1BDC38D8FA894AA841C6774FE30399DF533AB6E42ED943AA28B85` |
| `m895-narrow-320.png` | `506C8BBFC191FC2A7D682660273CDBB44A7603CE80CB5679A0483A9482A386D1` |
| `m895-200-percent-zoom-equivalent.png` | `70F97FCCAF2563F4E5A0E58FA5DCBBCB5B50071BE47B820D54C36044D40DF157` |

## 3. Release blockers

- M-895 remains `PREVIEW_ONLY`, noindex and outside sitemap.
- RFQ, Sample, Documents/TDS, Process, Application and Market actions remain omitted until scoped destinations are `LIVE_APPROVED`.
- Production receiver/privacy/consent dependencies remain release blockers.
- No deployment, DNS, production write, publication, indexing or Gate 10 action was performed.

P0 open: 0. P1 open: 0.

`GRADE-M895-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`GRADE-M895 lifecycle = READ_ONLY_QA_APPROVED`

`GRADE-M895 disposition = READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`
