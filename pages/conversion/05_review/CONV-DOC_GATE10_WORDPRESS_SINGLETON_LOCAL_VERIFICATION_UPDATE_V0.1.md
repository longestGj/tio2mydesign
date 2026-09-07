# CONV-DOC Gate 10 WordPress Singleton Local Verification Update V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Update date | 2026-09-04 |
| Implementation commit | `fae58bf0a846e67cb94d9a5dd75b96580ee30a2b` |
| Developer evidence | `CONV-DOC_LOCAL_WORDPRESS_SINGLETON_EVIDENCE_2026-09-04.md` |
| Update status | `LOCAL_WORDPRESS_SINGLETON_VERIFIED` |
| Production WordPress application | `OPEN / SEPARATE_AUTHORIZATION_AND_EVIDENCE_REQUIRED` |
| Gate 9 | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Page lifecycle | `READ_ONLY_QA_APPROVED` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Actual change reviewed

Commit `fae58bf0a846e67cb94d9a5dd75b96580ee30a2b` is based on parent `616193f3dbf059f0e081c8d59119c008ba2b848b` and changes four files:

1. `proxy.ts`;
2. `tests/e2e/request-documents.spec.ts`;
3. `tests/unit/app/document-language-proxy.test.ts`;
4. `docs/verification/conv-doc/CONV-DOC_LOCAL_WORDPRESS_SINGLETON_EVIDENCE_2026-09-04.md`.

The code change adds `/request-documents` to the approved Malaysia trailing-slash path set. It preserves existing no-trailing-slash behavior for other routes and other site scopes. The WordPress singleton was created in the local Compose database through the existing scoped seed; the database mutation is not presented as a production change.

Commit review confirmed `git diff --check` PASS and a clean worktree at the inspected commit.

## 2. Local WordPress evidence

Developer evidence SHA-256:

`7A7BCE4B9C8D06D2FE5B1C92FDA144AD89336057462AEC522790A7BBAF65D58E`.

The local environment is Docker Compose project `wordpress`, WordPress `http://localhost:8080`, local volumes `wordpress_db_data` and `wordpress_wp_data`, and the current worktree plugin bind mount. No production database or credential was used.

Reported local read-back:

| Field | Value |
|---|---|
| Record ID | 17368 |
| Post type | `tio2_request_docs` |
| Slug | `tio2-my-request-documents` |
| Status | `publish` |
| Site scopes | exactly `[tio2-my]` |
| Public path | `/request-documents` |
| Stored / approved bytes | 5723 / 5723 |
| Stored / approved SHA-256 | `6951A581A8A6301CA885D9C8394E3D08477B412194762CF6FC35B1116D444023` |
| Byte exact | true |
| Contract validator | true |

## 3. Independent read-only checks

The CONV-DOC page task independently queried the active local WPGraphQL endpoint without writing data. The response confirmed:

- `id=request-documents-page-17368`;
- `status=publish`;
- one returned site-scope node, `tio2-my`;
- `publicPath=/request-documents`;
- contract length 5723 UTF-8 bytes;
- contract SHA-256 `6951A581A8A6301CA885D9C8394E3D08477B412194762CF6FC35B1116D444023`.

Fresh targeted verification command:

`pnpm exec vitest run tests/unit/app/document-language-proxy.test.ts tests/infrastructure/tio2-my-request-documents-wordpress.test.ts tests/integration/request-documents/route.test.tsx`

Result: `3 files / 14 tests PASS`, exit code 0.

The developer's broader evidence records 12 files / 104 Vitest tests, 15/15 Request Documents Playwright tests, 4/4 Markets regression tests, targeted ESLint, typecheck, a 35-route production build and diff checks as passing. Those broader counts remain developer evidence; the checks above are the page task's fresh independent subset.

## 4. Route evidence and classification change

The developer evidence records:

- `/request-documents/` → HTTP 200;
- `/request-documents` → HTTP 308 with `Location: /request-documents/`;
- approved canonical, `noindex, nofollow`, JSON-LD, eight fields, 14 Grades, five Document Types and no cross-scope output.

Accordingly, the earlier local status is superseded:

`WORDPRESS_SINGLETON_DATA_NOT_READY / OPEN` → `LOCAL_WORDPRESS_SINGLETON_VERIFIED`.

The release blocker is not removed; it becomes production-specific:

`PRODUCTION_WORDPRESS_SINGLETON_APPLICATION_AND_EVIDENCE = OPEN / RELEASE_BLOCKER`.

## 5. Remaining release blockers

1. Applying and reading back the approved singleton in production WordPress requires separate authorization and evidence, including production revalidation/preview configuration where applicable.
2. Production-equivalent document-request receiver, persistence and positive acknowledgement remain separately unverified.
3. Privacy Policy and actual production receiver data-flow parity remain open.
4. Gate 10 production release, deployment, robots, sitemap, DNS and indexing remain separately unauthorized.

## 6. Current stop

`LOCAL_WORDPRESS_SINGLETON_VERIFIED = YES`.

`PRODUCTION_WORDPRESS_SINGLETON_APPLICATION_AND_EVIDENCE = OPEN / RELEASE_BLOCKER`.

`CONV-DOC lifecycle = READ_ONLY_QA_APPROVED`.

`CONV-DOC Gate 9 = READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`.

`Gate 10 = NOT_AUTHORIZED`.

No production data write, deployment, publication, DNS, robots, sitemap or indexing action is authorized by this update.

