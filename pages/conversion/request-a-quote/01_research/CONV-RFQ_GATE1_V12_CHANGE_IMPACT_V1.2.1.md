# CONV-RFQ V1.2.1 Gate 1 Change Impact Analysis

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G1-V12-DIRECTED-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Scope | Impact of the directed V1.2.1 correction on V1.2 and retained V0.x artifacts |
| Rework authority | Gate 1 only; this document does not produce Gate 2–5 content or visuals |

## 1. Amendment reason

V1.2 left quantity-unit, phone/checkbox and route-render decisions unresolved and still allowed desktop two-column field pairs. The directed V1.2.1 correction resolves those questions, supplies exact success/failure/privacy copy, and applies root `AGENTS.md` §2.4 so Gate 1–5 depicts the complete intended site while operational dependencies are verified at Gate 7–9.

## 2. Targeted V1.2 → V1.2.1 changes

| Area | V1.2 position | V1.2.1 controlling direction | Impact |
|---|---|---|---|
| Desktop structure | Two-column field pairs could be used inside form | One continuous vertical form; no left/right composition or two-column pairs | Later 1440px wireframe and visual must be rebuilt accordingly |
| Quantity unit | Vocabulary was deferred | Only `Metric tonnes (MT)` is public | Gate 1 field contract now closed |
| Phone / WhatsApp | Optional; helper/normalization undecided | Label is `Phone / WhatsApp (optional)`; no helper copy | Remove helper-copy proposals |
| Consent checkbox | Privacy/Gate 2 decision | `DO_NOT_ADD` | Remove from all later states and data contracts |
| Success state | Earlier three-part candidate | Exact two-part copy in Brief §8 | Remove the separate quotation-details note |
| Failure state | Earlier apology/request-failed candidate | Exact heading, retained-data body and `TRY AGAIN` | Copy replacement; preserve-data behavior retained |
| Privacy | Link depended on current route readiness | Exact notice and visible Privacy Policy link are part of final Gate 1–5 experience | Verify route/accessibility at Gate 7–9; do not build page here |
| Sample/Documents | Hidden until routes were ready | Both low-weight links are part of the complete later visual | Verify routes at Gate 7–9 and block release if unavailable |
| Legal/cookie scope | Privacy treated mainly as external route blocker | Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings are parallel whole-site dependencies | Do not omit from final-state design; do not implement here |

## 3. Retained content decisions

- Page ID `CONV-RFQ`, `/request-a-quote/`, page type, P0 priority and primary keyword remain unchanged.
- Standard Hero, one primary RFQ form, `REQUEST QUOTE`, low-weight alternative conversion and shared Global Chrome remain the page flow.
- Product / Grade remains a required single-select with 14 grades and `Not sure / Need help`.
- Application remains the seven-value buyer taxonomy; no PVC option or grade recommendation.
- Port/city, Phone / WhatsApp, Website and Additional Requirements remain optional.
- Packaging, document needs and sample interest remain absent as RFQ form fields.
- PRODUCT V0.3 remains the relationship authority, including the M-2377, M-996/M-2196, Rubber and `NO_PUBLIC_MAPPING` restrictions.
- Submission success confirms receipt only and makes no commercial, technical, sample, document or order promise.

## 4. Historical artifact disposition

| Historical artifact | Disposition | Reason |
|---|---|---|
| Five V1.2 current-control files | `HISTORICAL / SUPERSEDED_BY_V1.2.1 / NOT_CURRENT_CONTROL` | Directed correction changes field, state, privacy, dependency and desktop-layout contracts |
| Brief V0.1 | `HISTORICAL / SUPERSEDED / NOT_CURRENT_CONTROL` | Old field and Gate contract |
| Gate 2 contracts V0.1 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Module, field, CTA, copy and privacy changes |
| Gate 3 wireframe V0.1 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Does not meet current 1440/768/390 and single-column direction |
| Gate 4 directions V0.1/V0.2 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | V1.2.1 has not entered visual review |
| Gate 5 specs, PNGs and state boards | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Old module, field, copy and layout contracts |
| Gate 4/5 review submissions V0.x | `HISTORICAL SUBMISSION RECORD / NOT_CURRENT_CONTROL` | Submission did not equal approval |

Historical files remain in place and are not rewritten.

## 5. SEO, linking and shared-dependency impact

- No page, URL, canonical, indexing or primary-keyword change occurs at Gate 1.
- Product/Application and other upstream sources may later use allow-listed editable prefill on the canonical RFQ route.
- Request a Sample and Request Documents are final-state secondary links, not RFQ fields or failure fallbacks.
- Privacy Policy is linked from the final RFQ notice. Terms of Use, Cookie Policy and Cookie Settings remain shared whole-site elements where the shared chrome/consent design owns them.
- Link visibility in Gate 1–5 represents the intended final website. Actual route/control checks occur at Gate 7–9; a failure then blocks release.
- CONV-RFQ does not create or edit these parallel pages, routes, Footer items or controls.

## 6. Product, data and responsive impact

- The only quantity unit is `Metric tonnes (MT)`; no unit inference or alternate public option is allowed.
- Phone / WhatsApp expands contact-data scope but receives no helper text and no consent checkbox.
- Removed fields must not persist as hidden, required or machine-readable fields in a later implementation.
- Desktop 1440px, Tablet 768px and Mobile 390px all follow one vertical field order. No desktop left/right rail, split composition or two-column field pairing is carried forward.
- Future complete visuals must include Mobile Menu open plus relevant normal, focus, validation, insufficient-data, submitting, submission-failure, success, human-review and unavailable states.

## 7. Risks and controls

| Risk | Control |
|---|---|
| V1.2 is mistaken as current | Manifest marks all five V1.2 files historical and points only to V1.2.1 |
| Desktop returns to left/right layout | Brief and audit explicitly prohibit split composition and two-column field pairs |
| Alternate quantity units reappear | Field contract fixes `Metric tonnes (MT)` as the sole public value |
| Helper/checkbox is reintroduced | Both are explicitly `DO_NOT_ADD` |
| Missing routes cause links to be removed from Gate 1–5 | Complete final-state links remain visible; readiness is checked later |
| Broken legal/conversion routes reach release | Gate 7–9 and pre-release verification block release if unavailable |
| Internal blocker labels leak into Buyer Clean | Risk/status remains in audit/Manifest; buyer-facing copy stays outcome-oriented |

Rollback does not reactivate V1.2 or V0.x automatically. If V1.2.1 is rejected, project control must identify a new current Gate 1 baseline.

## 8. Required synchronization

- Brief V1.2.1.
- Gate 1 intent/field/evidence audit V1.2.1.
- Current Gate Baseline Manifest V1.2.1.
- Project-control review submission V1.2.1.
- Page README, project status and project index current entries.

No Gate 2–5 file, visual asset, route, legal page, Footer, code or development artifact is changed by this task.
