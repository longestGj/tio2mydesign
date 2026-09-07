# GRADE-M896 Gate 7 Handoff Package Candidate V0.2

## 1. Control

| Field | Value |
|---|---|
| Package ID | `GRADE-M896-G7-02` |
| Page ID | `GRADE-M896` |
| URL | `/products/m-896/` |
| Site scope | `tio2-my` only |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_HANDED_OFF` |
| Template channel | `FAST_TRACK_RECOMMENDED_PENDING_CONTROLLER_02_REVIEW` |
| Release state | `PREVIEW_ONLY` |
| Gate 8 | `NOT_STARTED / NOT_AUTHORIZED_BY_THIS_CANDIDATE` |
| Gate 10 | `NOT_AUTHORIZED` |

This package is a development-ready candidate for Controller 02 review. It is not authority to contact D16 or implement the route.

## 2. Candidate authority order

If Controller 02 approves this exact package, the proposed consumption order is:

1. `PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01` and the Grade-specific Controller 02 closure.
2. `GRADE-M896_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json`.
3. `GRADE-M896_GATE2_FULL_COPY_V0.2.md`.
4. `GRADE-M896_GATE1_EVIDENCE_AND_CLAIM_AUDIT_V0.1.md`.
5. `GRADE-M896_TEMPLATE_ADAPTATION_AND_CHANNEL_RECOMMENDATION_V0.2.md`.
6. Shared approved Product Detail Gate 7 V0.2 package.
7. Approved M-350 template and M-350/M-510 Gate 9 results for component/response behavior only.

No M-350 or M-510 product fact is a fallback for M-896.

## 3. Implementation objective after approval

Implement one preview-only M-896 Product Detail route that:

- resolves only `GRADE-M896` from its own allowlisted `tio2-my` record;
- renders the exact M-896 contract without another Grade or site fallback;
- preserves M-350 and M-510 output and tests;
- keeps the other eleven unfinished Grades at 404/identity-only;
- remains `noindex,nofollow` and outside the sitemap;
- conditionally exposes only ready downstream routes/receivers;
- returns complete evidence for Controller 02 Gate 9 read-only QA.

## 4. Exact content inputs

| Role | File |
|---|---|
| Page identity and intent | `docs/page-briefs/GRADE-M896_M896_TITANIUM_DIOXIDE_BRIEF_V0.1.md` |
| Evidence/claim audit | `pages/products/detail-template/02_analysis/GRADE-M896_GATE1_EVIDENCE_AND_CLAIM_AUDIT_V0.1.md` |
| Content skeleton | `pages/products/detail-template/04_planning/GRADE-M896_GATE2_CONTENT_SKELETON_V0.1.md` |
| Buyer Clean full copy | `pages/products/detail-template/04_planning/GRADE-M896_GATE2_FULL_COPY_V0.2.md` |
| SEO/GEO/Schema | `pages/products/detail-template/04_planning/GRADE-M896_SEO_GEO_SCHEMA_CONTRACT_V0.2.md` |
| Template/channel | `pages/products/detail-template/04_planning/GRADE-M896_TEMPLATE_ADAPTATION_AND_CHANNEL_RECOMMENDATION_V0.2.md` |
| Machine payload | `pages/products/detail-template/06_handoff/GRADE-M896_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json` |

## 5. Enforced public modules

At maximum route readiness, the body order is:

`Hero → Positioning → Applications → Evaluation → Technical → Documents → Markets → Sample → Global Footer`

The following modules/claims remain absent:

- Not Recommended;
- Malaysia-Origin Support;
- Related Grades;
- packaging/loading/storage;
- embedded RFQ;
- FAQ;
- product-specific origin/manufacturing/COO/traceability;
- Offer/price/availability/rating/review/certification Schema.

Omission removes the wrapper, heading, navigation item, Schema data and reserved spacing.

## 6. WordPress result requirements

### 6.1 Record identity

- Create one independent versioned record bound to `GRADE-M896`, `M-896`, `m-896`, `/products/m-896/`, locale `en` and `site_scope=tio2-my`.
- Bind the exact approved content-contract version and hash recorded in the approved Manifest.
- Enable only M-896 after Grade-specific Gate 8 authority is received.
- Reject duplicate, incomplete, mismatched, forged or cross-scope records.
- Never retrieve another Grade or another `site_scope` as fallback.

### 6.2 Public projection

- Project only Buyer Clean fields.
- Do not expose internal evidence paths, hashes, governance states or frozen fields in public HTML, JSON, GraphQL, REST or Schema.
- Optional modules must fail closed as whole units.
- Preserve the three real technical columns and all 11 approved rows.
- Do not project TDS filename-only `2023V3` as a public version/date.
- Enforce `hero.actions.length <= 2`; only Quote and Sample may appear in Hero. Documents/TDS actions are body-only.
- Require the complete four-key `hero.visual={label,technicalFile,currentData,note}` object; all four values render from the approved M-896 contract and carry no filename-only version/date or origin/factory/packaging implication.
- Require every application item to carry `category: "Coatings"`; missing or different values fail closed for this record.

## 7. Next.js result requirements

- Resolve the route through the existing Grade registry/allowlist; no standalone M-896 literal bypass.
- Reuse the approved Product Detail component and stylesheet without changing the M-350/M-510 visual contract.
- Render one H1 and M-896-specific title, description, canonical, Product and BreadcrumbList JSON-LD.
- Product `additionalProperty` must match the 11 visible technical rows.
- Generalize the shared technical-row DTO, renderer and JSON-LD mapper once: support M-896 `property + value + optional testMethod` while continuing to support M-350/M-510 legacy `property + optional standard + typical`.
- Render technical columns from `technical.columns`. For M-896, visible and Schema property values come from `row.value`; `row.testMethod` is the third visible column or an optional description only and must never replace the property value.
- Reject an M-896 technical row without a non-empty `value`, and suppress invalid Product `additionalProperty` output rather than emitting empty or shifted values.
- Preserve M-350/M-510 visual output, HTML, JSON-LD and screenshots unchanged.
- Support Property / Value / Test method on Desktop and an accessible meaning-preserving Mobile presentation.
- Treat recommendations, origin support and related Grades as absent.
- Use Grade-specific cache/revalidation keys.
- Unapproved Grade slugs remain 404 and receive no Product shell or metadata.

## 8. Route and receiver behavior

| Target | Requirement |
|---|---|
| `/` and `/products/` | Required structural links |
| `/request-a-quote/` | Contextual action only when scoped receiver is ready; pass exact M-896 prefill |
| `/request-sample/` | Omit Hero Sample action and Sample module if receiver unavailable |
| `/request-documents/` | Omit technical/document actions and Documents module if receiver unavailable |
| Chloride Process | Link only when route is approved/live; otherwise keep approved text |
| Coatings Application | Link only when route is approved/live; otherwise keep approved text |
| Market pages | Render only ready approved route cards |

Exact prefill:

| Flow | Prefill |
|---|---|
| RFQ | `site_scope=tio2-my`, `grade=M-896`, `source_page=GRADE-M896` |
| Sample | `site_scope=tio2-my`, `grade=M-896`, `source_page=GRADE-M896` |
| Documents | same plus `requested_type=TDS` |

## 9. SEO, GEO and Schema requirements

- Exact primary keyword: `M-896 titanium dioxide`.
- Exact title, meta, H1 and canonical come from the JSON contract.
- No generic coatings/process/country-supplier primary intent is created.
- Product and Breadcrumb Schema use visible M-896 facts only.
- No FAQPage or QAPage.
- No invisible origin, availability, compliance, document, comparison or logistics fact.
- Preview controls stay false/closed until separate Gate 10 authorization.

## 10. Media behavior

- No M-896 product photograph is required.
- The approved non-photographic Product Detail document/evaluation treatment may be reused.
- If no approved M-896 media exists, omit `image` from Product Schema and do not render an empty media wrapper.
- Do not imply actual packaging, factory, warehouse, stock or shipment.

## 11. Gate 8 test/evidence matrix after authorization

### Identity, scope and regression

1. M-350 and M-510 regression output remains unchanged.
2. M-896 resolves only from its own `tio2-my` record.
3. Other unfinished Grade routes and unknown slugs remain 404.
4. Wrong Page ID, Grade, slug, path, locale, contract hash or site scope fails closed.
5. Missing M-896 data never falls back to M-350, M-510 or another site.
6. Grade-specific cache/revalidation isolation passes.

### Content and parity

7. One M-896 H1.
8. Six application cards, two evaluation groups and 11 technical rows.
9. Technical table has three meaningful columns, 11 non-empty `value` fields and 11 `testMethod` fields; `Not stated` is allowed and no method is inferred.
10. Origin, Related Grades and Not Recommended leave no output/gap/navigation item.
11. `hero.actions.length <= 2`, with only Quote and Sample; no Hero Documents/TDS action.
12. Ready/unavailable states for RFQ, Sample, Documents, Process, Application and Markets pass.
13. Prefill values exactly match this package.
14. Product/Breadcrumb Schema matches visible content; each M-896 `additionalProperty.value` equals the corresponding `row.value`, never `testMethod`.
15. `hero.visual` has exactly `label`, `technicalFile`, `currentData` and `note`; six of six applications have `category=Coatings`.

### Responsive and accessibility

16. Evidence at 1440, 1024, 768, 430, 390 and 320 widths plus 200% zoom-equivalent.
17. No horizontal overflow, clipping, overlap or meaningless empty area.
18. Correct heading order, keyboard operation, focus visibility, accessible names and at least 44px touch targets.
19. Shared Global Chrome and Footer close correctly.

### Tooling and return evidence

20. Unit tests cover both technical-row shapes, M-896 `value` projection and fail-closed invalid Schema rows.
21. Integration tests cover DTO-to-HTML-to-JSON-LD parity for M-896 and unchanged legacy mapping for M-350/M-510.
22. E2E tests and screenshot comparisons prove M-896 three-column output and unchanged M-350/M-510 visual, HTML and JSON-LD behavior.
23. Relevant typecheck and lint pass.
24. Return commit, clean-worktree proof, changed-file list and full command results.
25. Return visual, metadata, Schema, 404 and isolation evidence for Gate 9.

## 12. Current stopping boundary

This candidate stops at Controller 02 review. It does not:

- mark Gate 6/7 as project-control PASS;
- contact D16;
- write code or tests;
- enable M-896;
- deploy, publish, add to sitemap or index;
- start M-895.


