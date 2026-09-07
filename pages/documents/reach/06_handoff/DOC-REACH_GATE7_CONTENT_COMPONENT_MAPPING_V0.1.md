# DOC-REACH Gate 7 Content and Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Page / route | `DOC-REACH` / `/documents/reach/` |
| Source payload | `DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json` |
| Site scope | `tio2-my` |
| Gate 8–10 | `NOT_AUTHORIZED` |

This document defines semantic fields and behavior, not required framework component names.

## 1. Page record

| Field | Required value / behavior |
|---|---|
| `site_scope` | exactly `tio2-my`; internal and required |
| `page_id` | `DOC-REACH` |
| `route` | `/documents/reach/` |
| `language` | `en` |
| `page_type` | `document_compliance_decision_page` |
| `priority` | `P1` |
| `mapping_status` | `PROVISIONAL_URL`; internal only |
| `evidence_status` | `FACT_EVIDENCE_REQUIRED`; internal only |
| `current_navigation_key` | `Documents` |
| `regulatory_subject` | `EU_REACH_ONLY` |

## 2. Ordered component mapping

| Order | Payload module | Semantic component | Required fields | Conditional / empty behavior |
|---:|---|---|---|---|
| 1 | `hero` | Breadcrumb + Hero + scope orientation | eyebrow, breadcrumb, H1, body, scope line, 3 orientation rows, primary/secondary actions | Primary action follows route eligibility; Hub action remains when eligible independently. No empty scope card. |
| 2 | `direct_answer` | Direct Answer | heading, exact approved general answer | Always present. No alternate company/Grade answer. |
| 3 | `substance_vs_coverage` | Three-panel distinction | heading, intro, 3 items | All three required; no inferred registrant data. |
| 4 | `legal_actor` | Legal-role cards | heading, intro, 3 roles, note | All three generic roles required; named relationship fields are absent. |
| 5 | `regulatory_scope` | Jurisdiction cards | heading, 3 jurisdictions, note | EU/EEA, GB and NI must remain separate and ordered. |
| 6 | `verification_checklist` | Buyer checklist | heading, intro, 7 items, threshold note | All seven required; threshold note cannot be shortened into a universal rule. |
| 7 | `official_sources` | Source ledger | heading, intro, source rows, boundary | Render source updated only when non-null; reviewed date always renders. Suppress a stale row and its derived claims atomically. |
| 8 | `request_process` | Four-step process + selection panel | heading, 4 steps, semantic selection, note, primary action | Selection/action panel follows receiver eligibility; explanatory steps may remain. |
| 9 | `buyer_questions` | FAQ disclosures | heading, 5 question/answer pairs | All answers remain in initial DOM; initial visual state collapsed. No FAQPage Schema. |
| 10 | `related_paths` | Related cards | heading, 2 route records | Each card renders only when its own target content/route is approved and eligible. |
| 11 | `final_cta` | Final action panel | heading, body, primary/secondary actions, note | Primary action and note disappear together if receiver ineligible; Hub remains independently eligible. |

The render order is exact. Moving FAQ, sources or request process changes the approved buyer decision sequence and requires change control.

## 3. Source fields

| Field | Type | Rule |
|---|---|---|
| `name` | string | Exact approved institution/page label |
| `scope` | string | Describes what the source can support; never company coverage |
| `source_updated_date` | ISO date or null | Render only when the authority supplies a reliable date |
| `site_reviewed_date` | ISO date | Render as `Reviewed`; not an effective date |
| `link_label` | string | Descriptive anchor text from payload |
| `url` | HTTPS URL | Must remain on the approved official authority host |

Retrieval time, file capture time or deployment time may not be relabelled as `Source updated` or `Reviewed`.

## 4. Answer and claim-state fields

The implementation must use `answer_decision.approved_general_answer` in the visible Direct Answer. It must not promote `answer_decision.excluded_stronger_proposition` into any public field.

No generic slot such as `registration_status`, `registration_number`, `registrant`, `only_representative`, `covered_grades`, `tonnage_band` or `compliance_status` may be populated for this baseline. If such CMS fields exist globally, their DOC-REACH values remain null and do not render.

## 5. Shared component ownership

| Component | Owner / page input |
|---|---|
| Desktop Header, Mobile Header, Mobile Menu, Footer | Global Chrome; page passes `Documents` current key only |
| Production Logo | shared Production SVG Logo authority |
| Cookie Settings | shared Consent owner |
| Request Documents form/outcomes | CONV-DOC |
| EU market page body | MARKET-EU-001 |
| Documents overview | DOC-000 |
| DOC-REACH body modules | DOC-REACH payload |

No page-local copy of a shared component is allowed.

## 6. Empty, unavailable and stale behavior

- Null `source_updated_date`: omit only that row; keep the source if otherwise current.
- Unverified company/entity/arrangement facts: omit; do not show `pending`, `evidence missing` or another internal state.
- Ineligible CONV-DOC route: remove every request CTA, selection panel and matching machine relationship; retain eligible Hub navigation.
- Ineligible related route: omit its card and machine relationship; do not show a disabled card.
- Missing/wrong `site_scope`: do not serve another site's record as fallback.
- Missing body media: render the approved text-first design; do not add certificate, factory, ECHA or compliance imagery.

## 7. Implementation evidence required later

Gate 8 must return scoped content/API/CMS evidence, server-rendered DOM order, all conditional-state proofs, shared-component references and payload parity. Gate 9 checks them read-only.

