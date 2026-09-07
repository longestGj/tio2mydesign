# RES-ORIGIN Gate 7 Development Handoff Package V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Package ID | `RES-ORIGIN-G7-HANDOFF-01` |
| Page | `RES-ORIGIN` / Non-China Titanium Dioxide Supply Guide |
| Public URL | `/resources/non-china-titanium-dioxide/` |
| Site scope | `tio2-my` |
| Language | EN |
| Priority | P1 |
| User Gate 7 authorization | Explicitly granted on 2026-09-05 |
| Gate 6 | `RES-ORIGIN-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 embedded state | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Handoff | `NO`; no external destination or receipt |
| Production/release | Not authorized |

This package translates the approved RES-ORIGIN Gate 1–6 authority into implementation-neutral delivery specifications. It contains no WordPress, API, Next.js, component, styling, test, deployment or publication code.

## 1. Authority and Precedence

Consumers resolve conflicts in this order:

1. System/developer instructions and the latest explicit user decision.
2. `D:\23MySec\AGENTS.md`.
3. Current Brief `RES-ORIGIN_NON_CHINA_TITANIUM_DIOXIDE_BRIEF_V0.3.md`.
4. Current baseline `RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md` and Gate 6 review.
5. Approved Gate 2 V0.2 Content Architecture and SEO/GEO/Schema Contract.
6. Approved Gate 3 Responsive Wireframe Specification V0.1.
7. Approved Gate 4 `Procurement Evidence Ledger` Visual Direction V0.1.
8. Approved Gate 5 Full Visual Specification V0.1 and Superdesign v3 source.
9. `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and Production SVG authorities.
10. `PAGE_REGISTRY_V0.2.md`, keyword master, PRD V0.4 and Resource Playbook.
11. The sealed Gate 7 Manifest for this package.

Historical candidates and earlier Manifests remain traceability records only.

## 2. Locked Page Identity and SEO Role

| Field | Locked value |
|---|---|
| `page_id` | `RES-ORIGIN` |
| `site_scope` | `tio2-my` |
| `locale` | `en` |
| Page type | Buying guide / Article candidate |
| Slug | `non-china-titanium-dioxide` |
| Path | `/resources/non-china-titanium-dioxide/` |
| Canonical | `https://tio2malaysia.com/resources/non-china-titanium-dioxide/` |
| Primary keyword | `non china titanium dioxide` |
| Search intent | Informational |
| Buyer stage | Awareness / Technical Evaluation |
| H1 | `Non-China Titanium Dioxide: A Procurement Evaluation Guide` |
| SEO title | `Non-China Titanium Dioxide Supply Guide | TiO2 Malaysia` |
| Meta description | `Evaluate non-China titanium dioxide supply using checks for origin evidence, technical documents, application fit and destination-market requirements.` |

The page owns alternative-origin procurement-evaluation methodology. It must not become a country supplier page, grade recommender, equivalence page, company-origin proof page, document-availability page or current trade-outcome article.

## 3. Exact Content Authority

All buyer-facing strings come from `pages/resources/04_planning/RES-ORIGIN_CONTENT_ARCHITECTURE_V0.2.md`. Implementers must consume the exact approved strings and order; they may not paraphrase, shorten, expand, infer, translate or substitute placeholders.

Required semantic order:

`Global Header → Breadcrumb → Hero → Direct Answer → Six Checks → Technical Comparison → Application Context → Document Scope → Destination Review → Qualification Decision → Buyer Questions → Final Action → Global Footer`.

Required cardinalities:

| Collection | Count |
|---|---:|
| Hero qualification path | 6 |
| Due-diligence checks | 6 |
| Technical alignment steps | 5 |
| Application routes | 5 |
| Evidence-request items | 8 |
| Destination cards | 4 |
| Qualification decisions | 3 |
| FAQ question/answer pairs | 9 |

## 4. Approved Visual Authority

Asset directory: `D:\23MySec\pages\resources\04_planning\visual-designs\assets\`.

| View/state | Asset | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Desktop complete | `RES-ORIGIN_G5_DESKTOP_1440_V0.1.png` | 1440×7175 | 716601 | `994B65EF3DF6F27C54BCF8018001B9852BD07A5877393F9545DB9571D710CBCA` |
| Tablet complete | `RES-ORIGIN_G5_TABLET_768_V0.1.png` | 768×10023 | 727810 | `33BEE6CD28B14B1C6A6155B12583AB0D3FDAD3B7B324CFABA09CB71F5D0828FF` |
| Mobile complete | `RES-ORIGIN_G5_MOBILE_390_LOGICAL_AT2X_V0.1.png` | 780×27154; 390 logical @2x | 2180879 | `1F2471AA119DF31164E2C82894F23C0217A4BC0BF46614A8C569048B0CBFE1DD` |
| Mobile Menu open | `RES-ORIGIN_G5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.png` | 780×1440; 390 logical @2x | 47166 | `0B0FA77E2AD72B862378E5BB5A4F6335B44798585AD826E1CA1C8B62010508F6` |
| FAQ open/focus | `RES-ORIGIN_G5_FAQ_FOCUS_STATE_1440_V0.1.png` | 1440×983 | 92509 | `CA8FAE0DED6486851F7E3F2CA77B49F60E910D1C153FC2571492DBBD2A482F41` |

Superdesign authority: project `9ccf782d-c80a-4a00-a02c-eeebfa533184`, draft `30e63865-ca3f-408a-9d5f-202783d09e7d`, version `v3`, source SHA-256 `34E19F52C6FE6B205F9257337B6568AAB4BAAEA4831D6BE4284E68220A7D6A13`.

The visual is acceptance evidence, not production HTML or a technical implementation mandate.

## 5. Module Delivery Contract

| Module | Source | Required behavior | Restricted/empty behavior |
|---|---|---|---|
| Global Header | Shared Global Chrome V0.5 | Production primary logo; `Resources` structural active state; fixed RFQ | No page-local clone or visible `CURRENT` |
| Breadcrumb | Page identity | Home → Resources → current guide; server-rendered links | No JS-only or cross-scope link |
| Hero | Approved singleton | One H1, exact support copy, two conditional CTAs, six-step path | Ineligible CTA disappears atomically; do not show disabled action |
| Direct Answer | Approved singleton | Exact visible definition on Deep Navy section | No hidden GEO-only variant |
| Six Checks | Ordered array[6] | Number, heading, body and Buyer Check for each | No missing, merged or reordered record |
| Technical Comparison | Singleton + array[5] | Intro, ordered steps and non-equivalence callout | No grade table or equivalence badge |
| Application Context | Singleton + route array[5] | Exact context and eligible family links | Keep useful copy; omit ineligible link affordance cleanly |
| Document Scope | Singleton + array[8] | Exact request guidance and evidence checklist | No promise that a document is available |
| Destination Review | Singleton + destination array[4] | Exact EU/UK/India/Brazil method and eligible links | No flag, rate, legal conclusion or disabled card |
| Qualification Decision | Ordered array[3] | Continue / request evidence / hold paths | No supplier approval score or automated recommendation |
| Buyer Questions | Ordered array[9] | Semantic disclosures; answers in initial server DOM | No unsupported FAQPage/QAPage Schema |
| Final Action | Approved singleton | Exact two CTAs with conditional route logic | No inferred grade, market, quantity or outcome |
| Global Footer | Shared Global Chrome V0.5 | Production reverse logo and fixed shared groups | No page-local Footer or fallback destination |

## 6. Relation and Route Eligibility

Visible links are derived from eligible `tio2-my` relations, never hard-coded from design evidence alone.

```text
eligible_relation =
  source_site_scope == "tio2-my"
  AND target_site_scope == "tio2-my"
  AND target_page_id matches the approved owner
  AND target_content_status == APPROVED
  AND target_route_status == VERIFIED_PUBLIC
  AND target_canonical_status == VERIFIED
  AND target_public_eligibility_status == ELIGIBLE
```

If false, remove the link affordance, target and link-only spacing atomically while preserving approved explanatory text. Do not render Coming soon, disabled controls, empty cards, `#`, guessed routes, Contact fallbacks or another site's content.

Approved relation owners are PRODUCT-000, eligible APP pages, DOC-000/DOC-TDS/DOC-COO, Market EU/UK/India/Brazil, eligible RES-TRADE pages, CONV-RFQ and parent RES-000.

## 7. RFQ Prefill Boundary

The RFQ relation may pass only:

```text
source_page = "RES-ORIGIN"
interest = "alternative-origin-sourcing"
```

It must not infer or prefill grade, market, application, quantity, destination, document availability, price, lead time, origin proof or trade treatment. Missing/unsupported prefill values are absent, not empty public labels.

## 8. SEO, GEO and Schema Output

- Exactly one H1 and the locked Title, Meta Description and Canonical.
- Staging/non-production uses `noindex, nofollow` or the development repository's stricter equivalent.
- Production indexability requires Gate 9 acceptance and separate Gate 10 authorization.
- Visible breadcrumb and `BreadcrumbList` must match exactly.
- Candidate `Article` output is conditional on real approved visible `author`, `publisher`, `datePublished`, `dateModified`/review date and maintenance/source information.
- If required Article metadata is absent, omit Article markup; do not fabricate values or use file/build timestamps.
- GEO answers use visible approved copy only.
- Prohibited: `Product`, `Offer`, `Review`, `AggregateRating`, unsupported `FAQPage`/`QAPage`, hidden grade relations, fake dates and origin/trade claims.

## 9. Claim and Evidence Boundaries

- Named grade renderer: 0.
- Product-to-application mapping renderer: 0.
- M-996/M-2196 comparison, rank, equivalence, substitution and selection rationale: frozen.
- `Malaysia-origin titanium dioxide` is approved for relevant site-wide use but is not forced into this locked guide and is not proof of a product, lot or shipment origin.
- COO availability and every-shipment wording remain unconfirmed.
- No current customs acceptance, duty, tariff, anti-dumping, regulatory or trade outcome appears.
- No inventory, price, MOQ, capacity, lead time, logistics, packaging, sample or document-availability promise appears.

## 10. Site-scope Isolation

Every Gate 8 implementation must scope CMS queries, route lookup, API/ViewModel, relations, menu/current state, media, metadata, Schema, sitemap, RFQ prefill, cache keys/tags and invalidation to `tio2-my` before resolving content. Missing Malaysia content is an empty/error condition and release blocker, never permission to read TIOVAR, mytio2.com or another scope.

## 11. Responsive and Accessibility

- Acceptance references: 1440, 768 and 390 logical; runtime robustness checks also cover 1024, 430 and 375.
- No viewport has horizontal page scrolling, clipped content or fixed-height text crop.
- Body text remains at least 16px; visible interactive targets are at least 44×44 CSS px.
- One H1 and ordered H2/H3 hierarchy.
- Disclosure controls expose accessible name, `aria-expanded`, `aria-controls`; answers exist in initial server-rendered DOM.
- Keyboard focus is visible; disclosure and menu order is logical.
- Mobile Menu traps focus while open, closes on Escape and restores focus.
- Reduced motion removes nonessential movement without removing information.
- Decorative marks are hidden from assistive technology; production logo is an accessible Home link.
- At 200% zoom, content and actions remain available without two-dimensional page scrolling.

## 12. Gate 8/9 Ownership and Rollback

Gate 8 external development owns technical binding, implementation, automated tests, CMS/API data and deployment preparation under `D:\16Wordpress_nextjs\AGENTS.md`. Gate 9 in this project performs read-only comparison against the approved package.

If content, scope, relation, canonical, metadata or claim eligibility fails after implementation:

1. fail closed for the affected field, link, Schema item or page;
2. purge only affected `tio2-my` cache keys/tags;
3. never restore stale static content or cross-scope fallback;
4. return evidence to the external development task;
5. rerun Gate 9 before any release decision.

## 13. Phase Boundary

Gate 7 defines the package and does not implement it. Gate 8 requires separate user authorization and a distinct development task. Gate 9 requires an accessible implementation. Gate 10 publication/indexing requires separate authorization. `D:\16Wordpress_nextjs` is outside this task and was not accessed.

## 14. Version Record

| Version | Date | Change | Embedded status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Initial implementation-neutral handoff contract from approved Gate 1–6 authority | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED`; Gate 8 locked |

