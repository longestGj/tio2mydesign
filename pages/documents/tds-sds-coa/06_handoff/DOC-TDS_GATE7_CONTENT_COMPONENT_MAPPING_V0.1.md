# DOC-TDS Gate 7 Content and Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Page / route | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Content source | `DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json` |
| Site scope | `tio2-my` |
| Gate 8 | `NOT_AUTHORIZED` |

Names below are semantic contracts, not mandatory framework class names or database tables.

## 1. Page record

| Field | Type | Required | Fixed value / validation |
|---|---|---:|---|
| `site_scope` | enum/internal | yes | exactly `tio2-my` |
| `page_id` | string/internal | yes | exactly `DOC-TDS` |
| `route` | route | yes | exactly `/documents/tds-sds-coa/` |
| `language` | locale | yes | `en` |
| `page_type` | enum | yes | `technical_document_decision_page` |
| `priority` | enum/internal | yes | `P1` |
| `mapping_status` | enum/internal | yes | `PROVISIONAL_URL`; never Buyer Clean |
| `evidence_status` | enum/internal | yes | `FACT_EVIDENCE_REQUIRED`; never Buyer Clean |
| `current_navigation_key` | enum/shared | yes | `Documents` |

## 2. Module mapping

| Order | Module ID | Semantic component | Required behavior |
|---:|---|---|---|
| 1 | `hero` | Breadcrumb + page Hero | One H1; two actions; primary action eligibility-gated |
| 2 | `direct_answer` | Direct answer region | Heading followed immediately by exact two-sentence answer |
| 3 | `document_choice` | Independent checkbox group plus explainer | TDS/SDS/COA selectable independently; multi-document card is non-selectable guidance |
| 4 | `product_grade` | Optional single Grade select + status + request action | One allowlisted Grade maximum; no initial error; status uses live region |
| 5 | `comparison` | Semantic comparison table / accessible narrow-layout equivalent | Four source rows; row/column relationships remain programmatic |
| 6 | `request_checklist` | Seven-item definition/checklist group | Labels and bodies remain paired; required-fields note retained |
| 7 | `request_process` | Ordered four-step process | Ordered semantics; submission boundary remains visible |
| 8 | `buyer_questions` | Five disclosure items | Questions are buttons; answers remain in initial server-rendered DOM |
| 9 | `related_paths` | Three conditional related-page cards | Each card omitted atomically if its route/content is not eligible |
| 10 | `final_cta` | Closing decision/action region | Same synchronized primary state as Hero/Grade action |

All module headings, body copy, labels, rows, FAQ answers and routes are exact source-payload values. Empty CMS fields must not be replaced with placeholder or governance text.

## 3. Document-choice component

- Group label is the visible module heading and/or a programmatic equivalent.
- TDS, SDS and COA are three independent native checkboxes or semantically equivalent checkbox controls.
- Values are exactly `technical_product`, `safety` and `quality_coa`.
- More than one may be selected.
- The `Multiple document needs` card is explanatory content, not a fourth input.
- Selected meaning cannot rely only on color; check state and buyer-readable summary must remain available.
- Selection never implies file existence, availability, applicability, currentness or delivery.

## 4. Product Grade component

- Control is one optional single-select on DOC-TDS.
- Placeholder is `Choose a Grade`.
- Options are exactly the 14 ordered Grade identifiers in the source payload.
- No `Other`, unknown-Grade, free-text Grade or multi-Grade structured control is added.
- Additional Grade names belong only in CONV-DOC's buyer-entered additional context.
- `prefill.product_grades[]` is inactive.
- Selection updates the request summary and all primary action targets but does not navigate automatically.
- Clearing the selection returns to a neutral no-Grade summary without an error.

## 5. CTA component mapping

The following three visible actions share one request-state source:

1. Hero `Request TDS, SDS or COA`;
2. Product Grade panel `Request TDS, SDS or COA`;
3. Final CTA `Request TDS, SDS or COA`.

Their destinations must always be identical for the current selected state. No action owns a separate default or stale query. Secondary `View Document Hub` actions always resolve to `/documents/` when the Hub route is eligible.

## 6. FAQ component

- Five questions and answers are exact and ordered.
- Initial visual state is collapsed.
- Answers remain in server-rendered HTML/DOM for crawlability and accessibility.
- Each question is a native button with stable `aria-expanded` and `aria-controls`.
- Enter and Space toggle without unexpected focus movement.
- More than one open item is allowed unless the shared disclosure component already enforces one-open behavior without losing content or state meaning.
- No `FAQPage` or `QAPage` structured data is generated.

## 7. Shared component mapping

| Component | Owner | DOC-TDS input |
|---|---|---|
| Header / Desktop navigation | Global Chrome | `current_navigation_key=Documents` |
| Mobile Header / Mobile Menu | Global Chrome | same current key; no local menu array |
| Production Logo | Brand/Global Chrome | approved shared asset binding only |
| Footer / legal utility row | Global Chrome + Legal/Privacy | no page-local links or copy |
| Request Documents form | CONV-DOC | valid editable prefill plus hidden approved source context |

## 8. Content-source and API behavior

- One scoped page record supplies all page-owned values.
- API/DTO output is strict and drops unknown fields.
- Missing required identity or module content fails closed for release; it does not query another scope or historical post.
- Conditional related links and primary actions use route eligibility from the scoped route registry, not CMS-entered arbitrary URLs.
- Buyer-entered request data never returns to DOC-TDS content or metadata.

## 9. Non-rendering controls

Never render:

- public filenames, revision inventories, PDF previews or downloads;
- unavailable/disabled pseudo-actions;
- Grade-document availability badges or matrices;
- certification, compliance, origin, stock, delivery or response-time claims;
- Gate, Claim Register, Evidence Hold, allowlist, normalization, eligibility, fail-closed or Schema-parity labels;
- hidden source attribution;
- a local Contact fallback.

## 10. Change control

Changes to the ten-module order, exact copy, Grade list, document values, cardinality, related routes, CTA labels, visual hierarchy, Schema types or evidence boundary require a D23 change review before implementation.
