# GRADE-M510 Fast-Track Gate 7 Handoff Package V0.1

## 1. Control

| Field | Value |
|---|---|
| Package ID | `GRADE-M510-FAST-G7-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Site scope | `tio2-my` only |
| Date | `2026-09-02` |
| Fast-track decision | `PRODUCT-DETAIL-FAST-TRACK-01` |
| Gate 8 | `USER_AUTHORIZED` |
| Release state | `PREVIEW_ONLY` |
| Deployment / publication / indexing | `NOT_AUTHORIZED` |

This package is the complete Grade-specific delta that the approved shared Product Detail Gate 7 V0.2 contract requires before a second Grade can be implemented. It is consumed together with the shared V0.2 package; it does not replace the shared security, isolation, Global Chrome, accessibility or fail-closed requirements.

## 2. Authority order

For M-510 implementation, use this order:

1. User decision `PRODUCT-DETAIL-FAST-TRACK-01`.
2. M-510 project-control closure `GRADE-M510-FAST-G7-PCR-01`.
3. Machine-readable `GRADE-M510_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json`.
4. Approved buyer-visible copy `GRADE-M510_GATE2_FULL_COPY_V0.1.md`.
5. Shared Product Detail Gate 7 V0.2 package approved under `PRODUCT-DETAIL-G7-PCR-02`.
6. Approved M-350 implementation and Gate 9 evidence as the visual/component reference only.

If a lower item conflicts with a higher item, stop the conflicting field and report it. Never resolve the conflict by copying an M-350 value.

## 3. Development objective

Implement the M-510 preview page by reusing the approved M-350 Product Detail template and by completing the minimum one-time multi-Grade generalization. The result must:

- read M-510 from its own allowlisted `tio2-my` WordPress record;
- render the exact M-510 content contract without M-350 content fallback;
- preserve M-350 output and tests;
- keep the other twelve Grade identities at 404/identity-only;
- remain `noindex,nofollow` and excluded from sitemap;
- provide evidence suitable for later D23 Gate 9 read-only QA.

## 4. Exact content input

The implementation payload is:

`D:\23MySec\pages\products\detail-template\06_handoff\GRADE-M510_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json`

The JSON contains the complete WordPress-facing page identity, SEO, visible copy, module data, route registry, prefill values and evidence references. No placeholder copy is needed. Important enforced omissions are:

- no Related Grades module;
- no product-specific Origin/COO/traceability module;
- no Not Recommended module;
- no packaging/loading values;
- no stock, price, capacity, MOQ, Incoterm, lead-time or delivery promise;
- no `Offer`, availability, rating or review Schema.

## 5. WordPress requirements

### 5.1 Record and identity

- Add one M-510 payload/config record bound to `GRADE-M510`, `m-510`, `/products/m-510/`, locale `en` and `site_scope=tio2-my`.
- Change the existing identity registry state for M-510 only from `IDENTITY_ONLY` to the repository's approved preview-enabled state.
- Preserve M-350 and all other identity rows.
- Reject duplicate, mismatched, forged, cross-scope or incomplete records.
- Bind the exact approved content contract hash recorded in the accompanying Manifest.

### 5.2 Resolver and public projection

- Generalize the M-350-only PHP/GraphQL resolver to resolve only an allowlisted Grade with an approved payload.
- The resolver must require agreement among Page ID, Grade code, slug, path and site scope.
- Never query another `site_scope`; never use M-350/default data when M-510 is missing.
- Project only buyer-visible fields. Evidence locations, internal status and governance notes remain server-side/non-public.
- Optional modules and actions must be omitted without an empty wrapper, placeholder, navigation item or spacer.

## 6. Next.js requirements

- Replace the literal `m-350` route/type/query assumptions with registry-validated Grade resolution.
- Keep the existing shared Malaysia Product Detail component and stylesheet as the visual authority.
- Allow Grade-specific technical columns and row shapes. M-510 must render exactly two columns: `Property` and `Typical value`.
- Treat `relatedGrades` as optional. For M-510 it renders nothing, including no section navigation entry or reserved spacing.
- Support the approved conditional links on Positioning and Application items without exposing dead routes.
- Generate M-510-specific metadata, canonical, one H1, Product JSON-LD and BreadcrumbList JSON-LD.
- Product JSON-LD uses visible identity/description and the same twelve technical rows as `additionalProperty`; omit price, offers, availability, rating, review, origin, manufacturer, certification and compliance identifiers.
- Use Grade-specific cache/revalidation keys. Invalidating M-510 must not replace or corrupt M-350.
- `generateStaticParams` or the equivalent route policy may enable M-350 and M-510 only; unauthorized Grades remain 404.

## 7. Route and conditional behavior

| Target | Requirement |
|---|---|
| `/` and `/products/` | Required and crawlable in the preview environment |
| `/request-a-quote/` | Render Quote actions only when the scoped receiver route is ready; preserve exact M-510 prefill |
| `/request-sample/` | Omit Hero Sample action and Sample module if the scoped receiver is not ready |
| `/request-documents/` | Omit Technical/Documents actions and Documents module if the scoped receiver is not ready |
| Chloride Process | Link only when the approved page is live; otherwise retain text without a dead link |
| Application pages | Link only when each approved owner route is live; otherwise retain approved text without dead links |
| Market pages | Render a card/link only when the corresponding approved route is live |

All form actions carry `site_scope=tio2-my`, `grade=M-510` and `source_page=GRADE-M510`. The document request additionally carries `requested_type=TDS`.

## 8. SEO, GEO and release controls

- Exact primary keyword: `M-510 titanium dioxide`.
- Exact title: `M-510 Titanium Dioxide for Coatings | TiO2 Malaysia`.
- Exact meta description and canonical come from the JSON contract.
- Do not create FAQPage or QAPage Schema.
- The page remains preview-only with `noindex,nofollow`, sitemap exclusion and no public-release signal.
- Visible content and machine-readable data must match.

## 9. Required test and evidence matrix

### Data and isolation

1. M-350 regression output remains unchanged.
2. M-510 resolves from its own record and renders distinct content, technical data, metadata, canonical and Product JSON-LD.
3. Unknown Grade and the other twelve unauthorized Grade slugs return 404.
4. Wrong Page ID, Grade code, slug, path, contract hash or `site_scope` fails closed.
5. Missing M-510 data never falls back to M-350 or another site.
6. M-350 and M-510 cache/revalidation behavior is isolated.

### Content and rendering

7. Exactly one M-510 H1 and twelve technical rows render.
8. The technical table has two real columns and no blank `Standard` column.
9. Related Grades, Origin and Not Recommended do not render and leave no gap/navigation entry.
10. Conditional receivers/links are tested in ready and unavailable states.
11. Quote, Sample and Document prefills are exact when their routes are ready.
12. Product and Breadcrumb Schema contain only approved visible facts.

### Regression, accessibility and responsive evidence

13. Existing Product Hub, Global Chrome and M-350 suites remain green.
14. Run repository typecheck, lint and relevant unit/integration tests.
15. Capture M-510 at 1440, 1024, 768, 430, 390 and 320 widths, plus 200% zoom-equivalent evidence.
16. Confirm no horizontal overflow, correct heading order, keyboard operation, visible focus, accessible names and touch targets.

## 10. Gate 8 completion return

The external development task must return:

- implementation commit and clean-worktree evidence;
- changed-file list;
- test commands and full pass/fail summary;
- M-350 regression evidence;
- M-510 screenshots and structured-data/metadata evidence;
- 404/fail-closed and cross-scope isolation evidence;
- any unresolved dependency or release blocker.

The return is a Gate 8 implementation result, not permission to deploy or publish. D23 will perform Gate 9 as a separate read-only review.

