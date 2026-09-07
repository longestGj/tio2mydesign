# CONV-RFQ Gate 5 Complete Visual Design V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Gate | Gate 5 |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED / RELEASE_BLOCKED` |
| Progression source | User message `授权进入Gate5` on 2026-09-01 |
| Inherited artifacts | Gate 2 content/SEO/GEO contracts; Gate 3 wireframe; Gate 4 visual direction |
| Shared systems | Conversion Playbook V0.1; Global Chrome V0.5; Production SVG Logo Manifest V1.0 |
| Product authority | PRODUCT V0.3 matrix and unified audits |
| Current lifecycle | `DESIGN_IN_REVIEW` |
| Task ceiling | Gate 5; no Gate 6/7, development, code, CMS, route, test, deployment or release |

The user's authorization permits Gate 5 production. It is not approval of Gate 4 or Gate 5 content, indexing, privacy wording, the receiver, route/form readiness or release.

## 1. Complete visual set

| Asset | Exact pixel size | Purpose | SHA-256 |
|---|---:|---|---|
| `assets/CONV-RFQ_G5_DESKTOP_FULL_V0.1.png` | 1440 × 4097 | Desktop complete visual with real long copy, M-2377 neutral prefill, form, human-review sequence, buyer questions and shared Footer | `5769FE50B0F5350262E5DAE783ED62ADAAF5386B8126A14A02BB5D1CD5CFFEB9` |
| `assets/CONV-RFQ_G5_MOBILE_390_FULL_V0.1.png` | 390 × 6663 | 390px complete visual with single-column form, ≥44px controls, long content and Mobile Footer | `085B4E2D67F96D422825D37C2A8B6538FAB5322E69E2E8D580223072EB9C16EB` |
| `assets/CONV-RFQ_G5_DESKTOP_STATE_BOARD_V0.1.png` | 1440 × 2475 | Desktop validation, focus, prefill, unknown grade, failure, success, PRODUCT V0.3 and restricted-state board | `1D2D974D06DD84D2CFB2FF2D1DCDFBB443C5982D0058ADB97AFEE46F27124BA4` |
| `assets/CONV-RFQ_G5_MOBILE_STATE_BOARD_V0.1.png` | 390 × 4692 | 390px state-board reflow and long-error verification | `1AA2A223695C0D29738C0CCCD2ABC4FA81671A93D1FA8F100A729D881F2A4D1B` |
| `assets/CONV-RFQ_G5_MOBILE_MENU_OPEN_V0.1.png` | 390 × 844 | Mobile Menu Open; eight items; terminal RFQ; no false current-page marker | `C1478FA360E48380A286FFCDA0D7E210FFEE3B1B8C4CFB631096E7572DE2DC29` |

The amber top strip and amber privacy/release boxes are review annotations. They are deliberately labelled as not approved for release or not Buyer Clean copy. They do not authorize public wording.

## 2. Visual hierarchy and form boundary

The full visual retains one conversion hierarchy:

1. Global Header with the fixed terminal RFQ.
2. Breadcrumb and receipt-boundary intro.
3. One dominant `Quotation request details` form.
4. Human-review sequence.
5. Four concise buyer answers.
6. Shared Deep Navy Footer with the fixed terminal RFQ.

There is no second page-local submit CTA, quote calculator, price badge, stock signal, SLA badge, factory image, approval seal or Contact fallback. The Header and Footer RFQ are global navigation actions, not duplicate form submissions.

## 3. Complete form visual

### A. Business contact

- Contact name.
- Company / organization.
- Business email with visible keyboard focus treatment.

### B. Destination and product context

- Destination country.
- Optional city or port.
- Known, multiple, or unknown-grade path.
- Registered grade selection.
- Application selection with `Other / Not sure` retained.

### C. Purchase requirement

- Positive estimated quantity and unit.
- Optional packaging preference.
- Optional TDS, SDS, COA, COO / Origin and Traceability needs.
- Optional sample interest with a non-approval hint.

### D. Additional context and review acknowledgement

- Long notes field with non-confidential-information hint.
- Privacy slot, visibly marked as an internal release blocker until approved copy exists.
- Required receipt/review acknowledgement.
- One page-level submit action: `Submit RFQ for Review`.

The success boundary is repeated near the submit action. Submission is not a quotation and does not confirm price, stock, MOQ, lead time, shipping, sample, document, order or approval.

## 4. PRODUCT V0.3 consumption

- The complete visual uses neutral `M-2377 + Coatings + Sulfate` prefill.
- The state board uses neutral multiple-grade `M-996 + M-2196` buyer interest without comparison, ranking, preference, difference, equivalence, substitution or selection rationale.
- M-2377 can neutrally prefill Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate.
- Specialty Materials is not rendered as a system M-2377 relation. If a buyer independently supplies it as `Other`, it may be retained as review context without suitability inference.
- Rubber remains buyer-entered `Other` text only; no taxonomy, page, URL, keyword or Schema relation is created.
- `NO_PUBLIC_MAPPING` is not rewritten as not applicable, unsuitable, unavailable or prohibited.

## 5. S00–S18 visual-state reconciliation

| Gate 3 ID | Gate 5 treatment | Visual location |
|---|---|---|
| S00 Default / unprefilled | Neutral form start; no initial errors | State board `S00 / S02` |
| S01 Valid prefill | Editable M-2377, Coatings and Sulfate context notice | Desktop and 390px complete visuals |
| S02 Empty prefill | Prefill region collapses to 0px; no empty card | State board `S00 / S02` |
| S03 Invalid/stale prefill | Neutral recovery notice; no negative applicability statement | Both state boards |
| S04 Unknown grade | `Unknown / need help` plus required target requirement | Both state boards |
| S05 Multiple grades | M-996 and M-2196 retained independently | Both state boards |
| S06 Insufficient information | Long field-level error pattern, other values retained | S08/S09 state examples |
| S07 Keyboard focus | 2px Teal border plus 3px halo | Complete visuals and state boards |
| S08 Field validation | Error border plus explicit corrective text | Both state boards |
| S09 Error summary | Summary names three issues and preserves prefill | Both state boards |
| S10 Submission in progress | In-progress label; no early success | Both state boards |
| S11 Submission failure | Values retained; channel-free retry; no Contact fallback | Both state boards |
| S12 Success | Explicit receipt-only state and full non-approval boundary | Both state boards |
| S13 Privacy pending | Internal annotated slot; blocks release | Complete visuals and state boards |
| S14 Human review | Four-step receipt/review/clarification/separate-outcome sequence | Desktop and 390px complete visuals |
| S15 Restricted relation | PRODUCT V0.3 neutral mapping and no-comparison boundaries | Both state boards |
| S16 Form service unavailable | Internal `RELEASE_BLOCKER`; no false receipt | Both state boards |
| S17 RFQ route unavailable | Fixed RFQ remains visible; no hide/disable/Contact redirect | Both state boards |
| S18 Mobile Menu Open | Eight items and terminal `Request a Quote`; zero current links | Mobile Menu Open asset |

## 6. Global Chrome V0.5 verification

- Desktop Header is 84px.
- Mobile Header is 64px.
- Navigation order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer retain a visible RFQ linking conceptually to `/request-a-quote/`.
- The Conversion route has no approved current navigation mapping. Buyer-visible `CURRENT` count is zero, and the visual does not apply an underline or marker to another navigation item.
- The production primary horizontal SVG is used in the Header and the production reverse monochrome SVG in the Footer; neither asset is modified.
- The Deep Navy Footer remains inherited; Contact is not changed into an RFQ fallback.

## 7. Responsive and accessibility verification

- Desktop has a 1200px shell, 368px intro rail and dominant form column.
- 390px reflows to one column; there is no horizontal overflow (`contentWidth = 390`).
- Mobile controls and RFQ/Menu actions are at least 44px high.
- Labels remain visible; placeholder text is not used as a label.
- Focus, error, success and warning states use text and structure in addition to colour.
- Long company, email, packaging, notes, error and receipt-boundary text were rendered at real lengths.
- Error states preserve surrounding buyer context.
- No disabled or hidden global RFQ state is introduced.

## 8. Release blockers and decisions required

| ID | Blocker | Gate 5 treatment | Required approval/evidence |
|---|---|---|---|
| RB-01 | Privacy copy absent | Internal amber slot only; not Buyer Clean | Controller, purpose, retention, recipients, rights and privacy contact wording |
| RB-02 | Receiver and human-review owner unverified | No receiver/SLA promise | Verified receiver, ownership and monitoring evidence |
| RB-03 | Manual failure channel unverified | Retry only; no invented email or Contact fallback | Approved alternative channel and exact wording, if one is desired |
| RB-04 | `/request-a-quote/` route readiness unverified | Global RFQ remains visible; `RELEASE_BLOCKER` recorded | External development evidence later, outside this task |
| RB-05 | Form service and positive-receipt semantics unverified | Success shown only as an interaction specification | External receiver contract and explicit positive-receipt evidence later |
| RB-06 | Index/canonical activation unapproved | No activation performed | Separate user/project-control decision after blockers close |

## 9. Gate 5 decision boundary

This package is a complete Gate 5 review submission, not an approval or closed page. A visual-review approval may accept layout, hierarchy and interaction direction while RB-01 through RB-06 remain release blockers. The page must not be described as `APPROVED_FOR_HANDOFF`, released, indexed or operational until the applicable governance gates are separately approved.

