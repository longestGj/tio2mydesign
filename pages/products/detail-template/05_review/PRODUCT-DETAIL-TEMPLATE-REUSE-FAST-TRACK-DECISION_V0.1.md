# Product Detail Template-Reuse Fast-Track Decision V0.1

## 1. Decision record

| Field | Value |
|---|---|
| Decision ID | `PRODUCT-DETAIL-FAST-TRACK-01` |
| Decision date | `2026-09-02` |
| Decision source | User: `采用模板复用快速通道并授权 Gate 8开发。但是提交给开发的内容还是要有的。` |
| Pilot page | `GRADE-M510` |
| Reused baseline | Approved and Gate 9-verified `GRADE-M350` Product Detail template |
| Gate 3–5 disposition | `SATISFIED_BY_APPROVED_M350_TEMPLATE_REUSE` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_REQUIRED` for the M-510 delta package |
| Gate 7 | Complete M-510 content/data/implementation package required |
| Gate 8 | `USER_AUTHORIZED` for M-510 and the necessary shared-template generalization |
| Gate 10 / deployment / publication / indexing | `NOT_AUTHORIZED` |

## 2. Approved fast-track rule

M-510 does not require a second independent Gate 3 wireframe, Gate 4 visual-direction exercise or Gate 5 full visual production before development. Those three visual gates are satisfied by exact reuse of the approved M-350 Product Detail layout, responsive system, shared Global Chrome, component language and interaction topology.

The fast track does not waive the developer handoff. Gate 8 must receive a complete M-510 package containing the approved buyer-visible copy, field-level WordPress payload, Next.js behavior, route controls, SEO/Schema requirements, evidence references, conditional rendering and acceptance tests.

## 3. Reuse versus Grade-specific content

### Reuse unchanged

- Product Detail page shell, grid, spacing, typography, card language and section rhythm.
- Shared Header, Mobile Header, Mobile Menu and Footer authority.
- Hero information topology and two-button Quote/Sample action pattern.
- Positioning, Applications, Evaluation, Technical Data, Documents, Markets and Sample component families.
- M-350 responsive behavior and accessibility baseline.
- Preview-only robots and sitemap release controls.

### M-510-specific and non-reusable

- Page identity, URL, H1, SEO title, description and canonical.
- All product facts, application wording, technical rows, document wording and CTA prefill.
- Product and Breadcrumb structured data.
- TDS evidence and evidence ledger.
- Conditional availability of receivers and internal links.

No M-350 product statement, technical value, media representation, related-grade relation or SEO value may be used as an M-510 fallback.

## 4. Allowed template adaptations

Only two content-driven adaptations are approved within the existing component system:

1. The Technical Data component must accept Grade-specific column definitions. M-510 renders `Property` and `Typical value`; it must not display an empty M-350 `Standard` column.
2. Related Grades is absent for M-510. The entire module, navigation entry, wrapper and reserved spacing must be omitted.

The approved Gate 2 supporting document action is retained in the Technical Data and Documents modules. The Hero follows the M-350 two-action topology: Quote and Sample. This is placement within the reused template, not removal of the document journey.

If implementation requires a new page layout, new visual language, reordered modules or an unapproved claim to make the content fit, Gate 8 must stop on that issue and return it to project control. Development may not silently redesign the page.

## 5. Historical Gate 3 candidate

The M-510-specific Gate 3 specification, QA record, manifest V0.6 and rendered wireframes remain immutable planning history. They are now `SUPERSEDED_FOR_IMPLEMENTATION_BY_TEMPLATE_REUSE_FAST_TRACK` and are not development authority. They are not deleted and may still be used as a content-density cross-check.

## 6. Scope boundary

This decision authorizes:

- one-time registry-driven Product Detail generalization needed to remove M-350-only assumptions;
- an M-510 WordPress content record and preview route;
- Next.js rendering, metadata, Schema, cache isolation and tests for M-510;
- M-350 regression verification.

It does not authorize the other twelve identity-only Grade routes, deployment, production publication, DNS, sitemap inclusion or indexing. Each later Grade still needs its own approved evidence and content contract before Gate 8.

