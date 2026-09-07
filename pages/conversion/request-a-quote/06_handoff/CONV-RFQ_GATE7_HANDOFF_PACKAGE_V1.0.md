# CONV-RFQ Gate 7 Development Handoff Package V1.0

## 0. Document control

| Field | Value |
|---|---|
| Package ID | `CONV-RFQ-G7-HANDOFF-01` |
| Page | `CONV-RFQ` / Request a Quote |
| Public URL | `/request-a-quote/` |
| Site scope | `tio2-my` |
| Language / priority | EN / P0 |
| User Gate 7 authorization | explicitly granted 2026-09-01 |
| Gate 6 | `CONV-RFQ-G6-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `AUTHORIZED / IN_PROGRESS` |
| Submission | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Lifecycle | `DESIGN_IN_REVIEW`; not `APPROVED_FOR_HANDOFF`, not `HANDED_OFF` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

This package is an implementation-neutral contract. It contains no WordPress, Next.js, API, CMS, component, test, build, deployment or publication code.

## 1. Authority and precedence

1. Current explicit user decisions and `CONV-RFQ_GATE7_USER_AUTHORIZATION_RECORD_V1.0.md`.
2. Root `D:\23MySec\AGENTS.md`.
3. `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md`.
4. `CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.2.md` and Gate 6 closure.
5. Current Gate 6 SEO/GEO/Schema, CMS/API/component, responsive/accessibility and Gate 7–9 acceptance contracts referenced by the Gate 6 Manifest.
6. `WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md`.
7. `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and Production SVG Logo authority.
8. PRODUCT V0.3 matrix and three approved audits.
9. Page Registry, keyword master, PRD, approved Brief and Conversion Playbook where consistent with higher/later decisions.
10. This package's sealed Gate 7 Manifest after project-control review.

Historical RFQ drafts, rejected Desktop left/right composition, rejected grade-first Hero and old SEO exact-match candidate do not control delivery.

## 2. Page identity and SEO role

| Field | Locked value |
|---|---|
| Page ID | `CONV-RFQ` |
| Route | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent / stage | Transactional quotation / RFQ-Purchase |
| SEO Title | `Request a Titanium Dioxide Quote | TiO2 Malaysia` |
| Meta Description | `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.` |
| H1 | `Request a Titanium Dioxide Quote` |
| Canonical candidate | `https://tio2malaysia.com/request-a-quote/` |
| Robots | staging `noindex, nofollow`; production `index, follow` only after Gate 9/release authorization |
| Language / hreflang | `en`; no current alternate |
| Breadcrumb | Home / Request a Quote |

RFQ owns quotation/purchase-action intent. It does not own broad Malaysia supplier, Market supplier, generic Product, Grade, Application, Document, Sample, research/comparison, About/manufacturing or Contact intent.

## 3. Approved visual authority

The exact visual specification and all 12 PNG/SVG hashes are frozen in `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md`.

| View | Approved evidence |
|---|---|
| Desktop | 1440 × 2615 complete Buyer Clean |
| Tablet | 768 × 3026 complete Buyer Clean |
| Mobile | 390 × 3257 logical, @2x export |
| Mobile Menu | 390 × 844 logical, @2x export |
| Desktop states | 1440 × 2600 |
| Mobile states | 390 × 2100 logical, @2x export |

Gate 8 must implement the approved single centred Desktop page flow. Page-level left/right composition is prohibited; only related fields inside the form may form two columns.

## 4. Approved semantic order and copy root

All viewports preserve:

`Global Header → Breadcrumb → Hero → RFQ Form → Other Request Types → Global Footer`.

Hero body remains exactly:

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

The form is the only solid page-body CTA. Full copy, labels, helpers, privacy notice, states and exact field errors are frozen by Gate 5/Gate 6 and enumerated in the Gate 7 CMS/API/component mapping.

## 5. Form and prefill contract

- One Product / Grade select; one Application select.
- Required positive quantity with fixed non-editable `Metric tonnes (MT)`.
- Destination Country is free text, maximum 100 Unicode characters, without automatic country normalization.
- Phone/WhatsApp, Website, Port/City and Additional Requirements remain optional.
- `Not sure / Need help` is a valid grade path.
- All meaningful upstream prefill is visible and editable.
- Explicit grade/application/country may prefill matching fields; process/document/resource context may enter editable Additional Requirements only.
- A broad region such as European Union does not automatically populate Destination Country.
- Invalid/stale prefill clears safely without first-load error or internal-status leakage.
- Prefill/query values never change Title/Meta/Schema or canonical; canonical remains the clean route.
- Buyer selections do not create product relationships, recommendations or eligibility decisions.

## 6. Submission and receiver state machine

```text
FORM_READY
  → VALIDATION_FAILED (retain values; focus summary; field links)
  → SUBMITTING (one active attempt; values remain visible)
      → RECEIPT_CONFIRMED (only after explicit positive receiver acknowledgement)
      → SUBMISSION_UNCONFIRMED (timeout/network/server/ambiguous response; retain values; retry)

FORM_SERVICE_UNAVAILABLE
  → final-reader unavailable message
  → blocks Gate 9/release until service readiness is restored
```

HTTP status alone is insufficient if the response contract is missing/malformed/ambiguous. Success is receipt for human review only. It never approves quote, price, MOQ, inventory, lead time, shipping, sample, document, order or regulatory result.

No failure state adds Contact, email, phone, reference number or SLA. Shared RFQ navigation remains visible during every state.

## 7. Receiver / Web3Forms / data-flow interface

Gate 8 must bind the semantic submission contract to the chosen verified receiver without changing Buyer Clean or outcome semantics.

Required interface controls:

- `site_scope=tio2-my`, `page_id=CONV-RFQ`, workflow/locale and visible approved form values only;
- verified production receiver and accountable human-review owner;
- explicit positive receipt response distinguishable from transport/queue ambiguity;
- server and client duplicate-prevention/idempotency strategy appropriate to the implementation;
- field-level error mapping only to registered field keys;
- safe failure observability without exposing form values in URLs, public logs, metadata or analytics;
- no file upload;
- no unverified reference/ticket number;
- no cross-scope receiver/config fallback.

Actual Web3Forms plan, DPA/data flow, production endpoint/configuration, subprocessors, integrations and native security processing must be documented from the implemented production-equivalent system and verified at Gate 9.

## 8. Privacy, legal, consent and analytics

Approved short notice:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

No mandatory consent checkbox is added merely to simulate consent. Gate 8/9 must connect the real Privacy Policy and verify controller/contact, purpose, categories, receiver/processors, transfers, retention/criterion and rights against actual data flow.

Shared website requirements:

- English and materially equivalent Bahasa Malaysia privacy notice/policy;
- Terms of Use, Cookie Policy, Cookie Banner and Cookie Settings;
- actual CMP and production Cookie/storage inventory;
- GA4 and GTM are approved only under matching disclosure and consent behavior;
- remarketing/audience features are prohibited;
- Cloudflare Turnstile and Google reCAPTCHA are prohibited;
- form values and field-level errors are prohibited in analytics parameters, page titles, URLs, dataLayer labels or ad-platform payloads;
- a conversion/success event may fire only on `RECEIPT_CONFIRMED`, never on click, submit attempt or failure.

## 9. Required final-system sibling routes

`Other Request Types` is a required module with both required low-weight links:

- `Request a Sample` → `/request-sample/`;
- `Request Documents` → `/request-documents/`.

Both are `REQUIRED_FINAL_SYSTEM`. Gate 8 must implement them; Gate 9 and release readiness must verify them. Readiness false never hides, disables, removes or relinks either entry to Contact/email/phone/RFQ. Removal, merge or destination change requires user-approved page change control.

## 10. Global Chrome and production Logo

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; do not create page-owned Header/Footer/Menu.
- Desktop Header 84px; Mobile Header 64px.
- Navigation order stays Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Header, Mobile Header/Menu and all Footers retain Request a Quote → `/request-a-quote/`.
- Conversion route has zero current links unless a later approved mapping changes it; buyer-visible `CURRENT` count remains zero.
- Footer is shared Deep Navy and must consume the approved legal/privacy link system.
- Production SVG Logo bindings come from shared authority; no copied/modified page-private SVG or raster fallback.

## 11. `site_scope` isolation

Exact `site_scope=tio2-my` applies to CMS/page/form configuration, option lists, route resolution, API projections, receiver configuration, media, metadata, canonical, robots, sitemap, Schema, shared-menu references, cache keys/tags/invalidation, analytics page identity and prefill attribution.

Missing Malaysia data/configuration is an error/release blocker, never permission to read TIOVAR, mytio2 or another scope.

## 12. SEO/GEO/Schema delivery

- HTML, Title/Meta, GEO answers and JSON-LD derive from the same approved `tio2-my` page record.
- Allowed Schema: `WebPage` + `BreadcrumbList`, with stable references to existing site-wide `WebSite`/approved `Organization` only.
- Prohibited: Product, Offer, AggregateOffer, price, inventory, availability, shipping, Order, ContactPage, FAQPage, QAPage, HowTo, rating, review, certification, sample/document availability and buyer-submitted data.
- Visible breadcrumb and Schema breadcrumb URLs/names match exactly.
- Query/prefill URLs canonicalize to the clean registered route and must not enter sitemap/indexing.

## 13. PRODUCT V0.3

- Sole relation source remains the approved V0.3 matrix/audits.
- M-2377 may carry neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context only from explicit approved input.
- M-2377 Specialty Materials is not an automatic positive relation; Rubber creates no public taxonomy/page/URL/keyword/relation.
- M-996/M-2196 difference, ranking, superiority, equivalence, substitution and comparison-led selection remain frozen.
- `NO_PUBLIC_MAPPING` never renders as not applicable, unsuitable or unavailable.

## 14. Responsive and accessibility delivery

- Required runtime widths: 1440, 1280, 1024, 768, 430, 390, 375 and 320px.
- No page-level horizontal overflow, fixed-height crop, anomalous blank band or sticky submit.
- Tablet/Mobile fields are one column; quantity/MT remains adjacent.
- Mobile targets are at least 44×44 logical px; 200% zoom preserves content/action without two-dimensional page scroll.
- One H1, ordered headings/landmarks, persistent labels and logical keyboard order.
- Error summary receives focus and links to described invalid fields.
- Message states are announced appropriately without duplicate/premature speech.
- Mobile Menu traps focus, closes on Escape and restores focus; hidden navigation is absent from the accessibility tree.
- Focus is visible and distinct; no state relies on colour alone; reduced motion preserves information.

## 15. Phase boundary

Gate 7 defines and submits this package; it does not approve itself or authorize handoff. Gate 8 is a later external implementation phase requiring separate authorization. Gate 9 is read-only QA. Gate 10/release/indexing requires separate user approval. `D:\16Wordpress_nextjs` is outside this task and was not accessed.

