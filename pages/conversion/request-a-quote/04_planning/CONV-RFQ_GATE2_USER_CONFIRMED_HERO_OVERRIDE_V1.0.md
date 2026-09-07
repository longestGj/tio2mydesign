# CONV-RFQ Gate 2 User-confirmed Hero Override V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — content-skeleton checkpoint |
| Date | 2026-09-01 |
| User decision | `保留原正文，其他Gate2内容没问题。` |
| Decision state | `USER_CONFIRMED_WITH_HERO_REVERT_TO_ORIGINAL` |
| Override scope | Hero paragraph only |
| Other Gate 2 skeleton content | `USER_CONFIRMED / UNCHANGED` |
| Project-control state | `USER_DIRECTED_REBASE_REVIEW_REQUIRED` |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` |

This is a narrow user-authority override to the reviewed Gate 2 skeleton. It replaces only the Hero paragraph in Content Skeleton V1.1. It does not alter the H1, metadata, page order, form, states, links, responsive boundary, PRODUCT rules, Global Chrome or Schema direction.

## 1. Authoritative Hero paragraph

Use the original user-supplied paragraph exactly:

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

Source: `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md`, line 148.

## 2. Superseded Gate 2 rewrite

The following V1.1 Hero paragraph is not user-approved and must not control future copy or visual work:

> Tell us the grade you need—or choose “Not sure / Need help”—then provide your application, required quantity in metric tonnes and destination. Our team will review the submitted details and contact you using the information provided.

Disposition: `SUPERSEDED_BY_USER_CONFIRMED_ORIGINAL_HERO / NOT_CURRENT_COPY`.

The V1.1 file remains unchanged for audit history. This override controls the Hero paragraph wherever V1.1 is consumed.

## 3. Other Gate 2 content confirmed unchanged

The user confirmed that the other Gate 2 skeleton content has no issue. The following remain unchanged and user-confirmed:

- Eyebrow `B2B QUOTATION REQUEST` and H1 `Request a Titanium Dioxide Quote`.
- Page order: shared Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → shared Footer.
- PC/desktop remains one vertical page flow without a left/right page split, side rail or Dashboard composition; only the form-internal field Grid may use two columns.
- Tablet and Mobile remain single-column.
- Three form groups and the approved minimum required/optional field set.
- `Required Quantity [input] + Metric tonnes (MT) [fixed suffix]`, with no separate Unit control and no kg/Other.
- Product / Grade includes 14 grades plus `Not sure / Need help`; no automatic comparison or suitability inference.
- Exact validation, focus, error, failure, success, privacy, human-review and unavailable-state contracts.
- Low-weight `Request a Sample` and `Request Documents` links; no Contact fallback.
- SEO Title `Request a Titanium Dioxide Quote | TiO2 Malaysia`.
- Meta Description `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.`
- Canonical/robots recommendation, GEO answers and `WebPage` + `BreadcrumbList` Schema scope.
- PRODUCT V0.3 and Global Chrome V0.5 boundaries.

## 4. Meaning and claims boundary

The phrase `prepare the appropriate commercial response` is consumed exactly as user-approved original copy. Submission success still means receipt only. It does not promise or approve a quotation, price, MOQ, stock, lead time, shipping, sample, document, order, regulation result or any other commercial outcome.

## 5. Controlled next action

Project control must rebase its Gate 2 skeleton closure onto this user-directed Hero override. Until that governance rebase is recorded, do not complete full Gate 2 copy, claim `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, or begin Gate 3.
