# Product Detail Multi-Grade WordPress + Next.js Generalization Brief V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-MULTIGRADE-GENERALIZATION-01` |
| Status | `PREPARED_AFTER_USER_WORKFLOW_APPROVAL / NOT_HANDED_OFF / GATE8_NOT_AUTHORIZED` |
| Prepared date | `2026-09-02` |
| Owner | Controller 02 / Product Center and Product Detail planning |
| Implementation owner | `D:\16Wordpress_nextjs` development project after separate authorization |
| Scope | One-time generalization of the approved M-350 implementation for independently approved TiO2 Malaysia Grade records |

The user approved the recommended reuse workflow on 2026-09-02. This document records the proposed development contract so that later authorization can be precise. It is not itself a handoff or development authorization.

## 2. Current-state finding

The M-350 implementation supplies a reusable shared renderer and data shape, but the currently inspected external code is still M-350-specific:

- `app/products/[familySlug]/page.tsx` accepts only `m-350` for `tio2-my`, calls the M-350 query directly and statically generates only that slug.
- `lib/wordpress/product-detail-v01-queries.ts` types the Malaysia slug as the literal `m-350`.
- `wordpress/plugins/tio2-site-model/includes/product-detail-v01.php` validates and resolves only `GRADE-M350` and `/products/m-350/`.
- `wordpress/plugins/tio2-site-model/config/tio2-my-product-detail-m350.json` is the only approved Grade payload contract presently available.
- `wordpress/plugins/tio2-site-model/config/tio2-my-product-detail-identities.json` already records all 14 identities, but the other 13 remain identity-only and 404.

Therefore, adding a WordPress record alone is insufficient. The external development project must first replace M-350-only assumptions with an approved registry-driven resolver while preserving fail-closed behavior.

## 3. Required one-time generalization

### 3.1 Identity and route control

- Resolve Grade identity from the approved TiO2 Malaysia identity registry, not from an unrestricted arbitrary slug.
- Require exact agreement among `site_scope=tio2-my`, Page ID, slug and public path.
- Unknown, duplicate, mismatched, unapproved or cross-scope identities must return 404/fail closed.
- `generateStaticParams` may include only Grades whose approved record and route release state allow the relevant environment.
- No content fallback from TIOVAR, another `site_scope`, M-350 or a default Grade is allowed.

### 3.2 WordPress and GraphQL

- Generalize the resolver from `GRADE-M350` to the allowlisted Grade identity supplied by the approved registry.
- Keep one independently versioned, hash-bound payload contract per Grade.
- Reject missing, duplicate, forged, scope-mismatched and contract-hash-mismatched records.
- Project only buyer-visible approved fields; administrative evidence and restricted claims remain non-public.
- Preserve module-level omission: absent or frozen fields do not render as placeholders.

### 3.3 Next.js data and rendering

- Accept an approved Grade slug type or validated registry value rather than a literal `m-350` type.
- Continue using the shared Malaysia Product Detail renderer and component/CSS system.
- Generate unique metadata, canonical URL, visible H1/direct answer, Product JSON-LD and Breadcrumb JSON-LD from the selected Grade contract.
- Do not use M-350 values as initial values or runtime fallbacks.
- Preserve `PREVIEW_ONLY` until an individual Grade receives a later release authorization.

### 3.4 Cache and revalidation

- Use Grade-specific cache/revalidation keys and paths.
- A mutation or webhook for one Grade must not invalidate or replace another Grade record incorrectly.
- Identity/config changes must fail closed until the corresponding approved contract is available.

## 4. Minimum test matrix

Before the second representative Grade can reach Gate 9, development evidence must include:

1. M-350 regression remains unchanged.
2. One authorized second Grade resolves from its own WordPress record and payload.
3. At least two different Grade payloads render distinct H1, content, technical rows, metadata, canonical and Product JSON-LD.
4. Unknown Grade and the remaining unauthorized Grade slugs return 404.
5. Wrong Page ID, wrong slug, wrong path, duplicate record, bad hash and wrong `site_scope` fail closed.
6. No TiO2 Malaysia request reads another site's record as fallback.
7. Missing optional module data omits the module without empty UI or placeholder copy.
8. Static/dynamic route behavior, preview state, robots/canonical behavior and cache isolation are covered.
9. Existing Product Hub, shared Global Chrome and M-350 tests remain green.
10. The pilot receives 1440, 1024, 768, 430, 390, 320 and 200% zoom-equivalent inspection evidence, plus keyboard and accessible-name checks.

## 5. Recommended rollout sequence

| Phase | Scope | Exit condition |
|---|---|---|
| A | Generalize implementation while keeping all new Grade routes disabled | M-350 regression and fail-closed tests pass |
| B | Add one independently approved representative Grade, recommended candidate M-510 | Grade-specific contract, runtime evidence and Gate 9 read-only QA pass |
| C | Onboard ordinary Grades in controlled batches | Every Grade has its own approved Brief, evidence ledger, contract and Gate 9 result |
| D | Handle M-996/M-2196, M-2377 and CR-901 through their special boundaries | Comparison, mapping and specialist evidence constraints remain enforced |

## 6. Acceptance and authority boundaries

- Template reuse does not approve content reuse.
- A shared component does not merge Grade identities, SEO ownership or lifecycle state.
- Gate 9 approval of M-350 does not cover the generalized code or any new Grade.
- Each Grade initially remains `PREVIEW_ONLY` and receives independent Gate 9 read-only QA.
- Gate 10, deployment, production publication and indexing require separate user authorization.
- No change may be made in `D:\16Wordpress_nextjs` from this D23 planning task.

## 7. Current conclusion

`READY_AS_A_FUTURE_DEVELOPMENT_BRIEF / NOT_HANDED_OFF / DEVELOPMENT_NOT_AUTHORIZED`.
