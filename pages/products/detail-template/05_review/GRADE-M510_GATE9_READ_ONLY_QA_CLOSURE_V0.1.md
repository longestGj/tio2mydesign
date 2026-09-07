# GRADE-M510 Gate 9 Read-Only QA Closure V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `GRADE-M510` / M-510 |
| URL | `/products/m-510/` |
| Review ID | `GRADE-M510-G9-PCR-01` |
| Gate 7 authority | `GRADE-M510-FAST-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Project-control decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Standard page lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Route release state | `PREVIEW_ONLY` |
| Gate 10 | `NOT_AUTHORIZED / NOT_STARTED` |
| Review date | 2026-09-02 |

This decision covers the M-510 pilot implemented through the approved M-350 template-reuse fast track. It does not approve development or public routes for the remaining twelve identity-only Grades.

## 1. Audited implementation identity

| Item | Evidence |
|---|---|
| Initial Gate 8 implementation | `a8e4f5d4ab0fe2f12ce273d35bd8b394a36e29f6` — `feat(tio2-my): add M-510 product detail preview` |
| Targeted P1 correction | `3d2de1f418b011b6043e39f2119255f3f14fb0ed` — `fix(tio2-my): derive product details from approved registry` |
| External task | `01My首页开发` / thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| External branch | `codex/home-001-tio2-my` |
| Audited worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| External worktree at final check | Clean |

## 2. Initial findings and remediation closure

| Finding | Original issue | Correction | Gate 9 result |
|---|---|---|---|
| `M510-G9-P1-01` | M-350/M-510 authorization was repeated in route, DTO, query, cache and PHP locations, so the promised one-time multi-Grade generalization was incomplete. | `tio2-my-product-detail-identities.json` is now the single approval registry. Static params, slug rejection, contract selection, cache validation, PHP resolution and seeds derive from it. The other twelve Grades remain identity-only and fail closed. | `CLOSED` |
| `M510-G9-P1-02` | Runtime validation did not bind the D16 payload to the D23-approved M-510 content-contract hash. | Registry records the approved D23 raw SHA-256 and a documented canonical JSON SHA-256. Node and PHP independently validate the canonical content and fail closed for absent, malformed or mismatched hashes. | `CLOSED` |

No buyer-visible copy, technical value, module order, metadata, Schema, styling or Global Chrome changed in the correction.

## 3. Independent read-only checks

| Check | Result |
|---|---|
| Focused Product Detail Vitest | PASS — 10 files / 35 tests |
| TypeScript `tsc --noEmit` | PASS |
| Changed-file ESLint | PASS |
| Registry derivation | PASS — the five formerly duplicated authorization consumers contain no local `m-350` or `m-510` authorization literal |
| Authorized routes | PASS — M-350 and M-510 only |
| Other Grade protection | PASS — the other twelve identities remain 404/fail-closed before CMS access |
| M-510 identity and scope | PASS — `GRADE-M510`, `/products/m-510/`, locale `en`, `site_scope=tio2-my` |
| Release controls | PASS — `indexingAuthorized=false`, `sitemapAuthorized=false`, preview-only behavior retained |
| External worktree | PASS — clean after correction and review |

The developer's production-equivalent evidence also reports: fresh build PASS; PHP syntax and local seeds PASS; live local GraphQL M-350 15 rows, M-510 12 rows and M-896 unauthorized; Product Detail Playwright 15/15 PASS; Axe and horizontal-overflow checks PASS.

## 4. Approved contract hash binding

Algorithm: `sha256-json-recursive-key-sort-v1` — parse JSON, recursively sort object keys in ordinal order, preserve array order and scalar values, serialize compact UTF-8 JSON, then calculate uppercase SHA-256.

| Artifact | SHA-256 |
|---|---|
| D23 approved raw content contract | `09B41E1AB403372495D4BE8DB3DDD1260A710E310327FC289D8D344B05AB095C` |
| D16 repository raw payload | `0F02330A33E24D49768F1451884A9F78BE16D398EAE7DEBECC5804FF5A204A43` |
| Independently calculated canonical content — both files | `706A8962F5B90D857EE2595138CDEDCA4E22A7398F5C18CDCFA8E1E8186C4D22` |

The raw-byte difference is transport formatting only. The independent recomputation confirms identical parsed content under the registered algorithm; the raw D23 hash remains pinned for audit traceability.

## 5. Visual, responsive and accessibility evidence

The correction changed no rendering component or CSS. Independent file-hash verification confirms that all seven approved M-510 screenshots remain byte-identical:

| Evidence | SHA-256 | Result |
|---|---|---|
| `m510-1440.png` | `93B77D1B0BDFDC35F52E8FEC842627B40A62ED504464A0172D17FA486807E809` | PASS |
| `m510-1024.png` | `A751A68C6801BA3EE932DE52A191611730BC86CB53D7B51E71DD223A47E95A21` | PASS |
| `m510-768.png` | `3CB6E0C041DDF21B6BB804870AB3F75F03CAEDECB991207D4E41AC3870BA0F0C` | PASS |
| `m510-430.png` | `849C17A2E70DCDFC84597A899EF0DFB556AA6F53795039CF2A3CC85B8FF3C0EA` | PASS |
| `m510-390.png` | `B9B02615F1C7D45132CF6B4EEA793BFCC727CB9AEC4B7139BC0B515333A417FE` | PASS |
| `m510-narrow-320.png` | `9924E37AC19803CEAE3D013F1F79F9D0D4E18663B6716AAFC340E29D9F6BD695` | PASS |
| `m510-200-percent-zoom-equivalent.png` | `8F5310AF58BF97FEA9784F63B6D83FEC51111786166E908357DD055C16E4B9D7` | PASS |

## 6. Release blockers and carry-forwards

| Item | Disposition |
|---|---|
| M-510 route | Remains `PREVIEW_ONLY`; no public-live or indexing approval |
| Fixed Global RFQ | Production receiver, delivery evidence, Privacy Policy and consent/CMP remain release dependencies |
| Contextual RFQ, Sample and Request Documents | Must remain omitted until each destination is `LIVE_APPROVED` |
| Coatings, Process and Market destinations | Must remain omitted/fail-closed until the destination route is `LIVE_APPROVED` |
| Related Grades | M-510 has none in its approved contract; no section or reserved space is rendered |
| Remaining twelve Grade identities | Stay identity-only / 404; each needs its own evidence, content approval and Gate 8 authorization |
| Gate 10 | Not authorized |

## 7. Boundary and final status

This review made no change in `D:\16Wordpress_nextjs`, submitted no live form, and performed no deployment, DNS, publication, production write or indexing operation.

- P0 implementation defects: 0 open.
- P1 implementation defects: 0 open.
- Release blockers: retained as listed above.

`GRADE-M510-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`GRADE-M510 lifecycle = READ_ONLY_QA_APPROVED`

`GRADE-M510 Gate 9 disposition = READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`

`Route release state = PREVIEW_ONLY`

`Gate 10 = NOT_AUTHORIZED / NOT_STARTED`
