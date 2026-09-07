# CONV-DOC Gate 5 Directed Repair Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G5-DIRECTED-REPAIR-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Parent Gate 5 V0.6 | `APPROVED / CLOSED` |
| User approval | 2026-09-03; current user explicit decision |
| Scope | Gate 5 P0/P1 repair only |
| Gate ceiling | Gate 5 |

This audit records the project-control-directed repair of the user-approved V0.5 visual and the subsequent P0 authority-chain correction. Gate 2/3 receive minimal binding successors only; unrelated content and structure are not reopened. This audit does not record a project-control pass, close Gate 5 or authorize Gate 6+.

## 1. P0 — Country / Region free-text contract

| Contract item | V0.5 | V0.6 |
|---|---|---|
| Control | Country selector/dropdown | Required single-line text input |
| Label | `Country / Region` | `Country / Region` |
| Placeholder | Not applicable | `Enter your country or region` |
| Helper | Contact/location and scope wording | `Enter the country or region where your company is based.` |
| Empty error | Not explicitly demonstrated | `Enter your country or region.` |
| Shared country list dependency | Present through selector semantics | None |
| Market/document routing meaning | None | None |

The main prefilled proof shows `Malaysia` as editable buyer-entered text. The Interaction States proof shows the empty placeholder, red field treatment, field error and error-summary link. No dropdown arrow, option set, `select` semantics or superseded selector-style empty-state copy remains for this field.

## 2. P1 — Privacy and submit order

Exact visible privacy sentence:

> We use the information you provide to review and respond to your document request. Learn more in our Privacy Policy.

`Privacy Policy` is a visible link to `/privacy-policy/`. No consent checkbox is added.

| Width | Visual order | DOM / keyboard order |
|---|---|---|
| 1440px | Privacy left; CTA right | Privacy link before submit button |
| 768px | Privacy left; CTA right | Privacy link before submit button |
| 390px | Privacy sentence directly above full-width CTA | Privacy link before submit button |

The order applies to every state in which the primary submit control is available. Submitting, failure/retry and success retain their existing semantic state contracts.

## 3. Shared Footer boundary

CONV-DOC does not own or maintain Footer markup, wording, routes or responsive behavior. The full-page PNGs are assembly proofs showing consumption of the current shared Header, Mobile Header, Mobile Menu and Footer.

The historical Footer text visible in these page-composition proofs is not a CONV-DOC Gate 7 development contract. Final shared Footer integration must consume the Global Chrome owner authority:

- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`;
- `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md`.

No CONV-DOC specification may fork that shared component.

## 4. Unchanged locks

- Five public Document Types.
- Eight fields.
- Fourteen-value Product Grade single selector.
- Editable upstream prefill and invalid/empty behavior.
- Other-only conditional required rule.
- Product/Applications/Documents/Markets context does not establish evidence.
- `NO_PRIMARY_KEYWORD`, Buyer Clean copy, receipt-only success and retry-preserves-values behavior.
- PRODUCT V0.3 boundaries, including neutral M-2377 contexts and all frozen mappings/comparisons.
- Request Documents remains outside first-level navigation; shared RFQ remains permanent.

## 5. Render and source audit

Automated render checks were executed from the V0.6 workspace source at 1440px, 768px, 390px @2× and 1600px state-board width.

| Check | Result |
|---|---|
| Country control is `input[type=text][required]` | Pass |
| Country placeholder/helper/error exact | Pass |
| Country field contains no `select` | Pass |
| Old Country prompt absent | Pass |
| Privacy link target `/privacy-policy/` | Pass |
| DOM order privacy before submit | Pass |
| 390px privacy visually above submit | Pass |
| Five document types / removed sixth type | 5 / 0 |
| All 14 Grades | Pass |
| Eight-field contract | Pass |
| Other-only and mixed rules | Pass |
| Success/failure/retry copy | Pass |
| Forbidden RFQ/Market form fields | 0 |
| Buyer-facing governance strings | 0 |
| Horizontal overflow | 0 at 1440/768/390 |
| Minimum tested target | 40px Desktop/Tablet; 44px Mobile |
| Long-content stress | 254-character email; 500-character requirements |

### 5.1 Current-authority scan

The current authority set is limited to the Gate 2 V0.5 successor, Gate 3 V0.6 successor, current Gate 5 V0.6 specification, this audit, the current review submission and the sole current Manifest. Gate 2 V0.4 and Gate 3 V0.5 are historical provenance and are excluded.

| Scan | Result |
|---|---|
| Superseded Country empty-state instruction in current authority set | 0 |
| Superseded Mobile submit/privacy ordering instruction in current authority set | 0 |
| Current Country placeholder/helper/error | Present and exact |
| Privacy before submit in DOM/keyboard/visual order | Present and exact |

## 6. Original-image review

Each newly affected PNG was viewed at original resolution:

| Proof | Review result |
|---|---|
| Desktop 1440 | Complete Header, form, terminal action and Footer; no crop, horizontal overflow or abnormal blank region |
| Tablet 768 | Two-column fields remain readable; no crop, horizontal overflow or abnormal blank region |
| Mobile 390 | Single-column form; privacy directly above CTA; no crop, horizontal overflow, post-button void or abnormal blank region |
| Interaction states | Country empty/error proof readable; all prior state families retained; no crop or overlap |

The Mobile Menu asset is unchanged from V0.5 and remains the shared Global Chrome assembly proof.

## 7. Open Gate 8/9 checks

These are future implementation/QA checks, not completed implementation claims:

1. `country_region` renders as a free-text input and does not call or bind a shared country list.
2. Server validation accepts valid free text and rejects empty required input without converting it to a market-routing value.
3. Privacy link resolves to `/privacy-policy/` and precedes submit in the accessibility/keyboard order at all widths.
4. No privacy-consent checkbox is introduced.
5. CONV-DOC consumes the final shared Global Chrome Footer rather than page-local historical wording.
6. Shared RFQ placements and `/request-a-quote/` remain present.
7. Form receiver, failure retry and receipt-only success are verified against the approved contract.

## 8. Submission status

`CONV-DOC-G5-DIRECTED-REPAIR-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.

Parent/current Gate 5 V0.6 is `APPROVED / CLOSED`; the current user explicit decision is recorded with approval date 2026-09-03.

No work occurred in `D:/16Wordpress_nextjs`. No Gate 6+, development, branch, testing, deployment, release, DNS or indexing action is authorized.
