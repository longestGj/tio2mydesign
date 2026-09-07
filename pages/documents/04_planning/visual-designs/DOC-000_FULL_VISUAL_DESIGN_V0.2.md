# DOC-000 Full Visual Design V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Authority | User redesign brief plus explicit `授权Gate5` |
| Parent set | Brief, Content Architecture, SEO/GEO/Schema, Wireframe and Visual Direction V0.2 |
| Global Chrome | V0.5 + Production SVG; unchanged |
| Hard stop | Gate 6+, child pages, form implementation, development, testing and release are not authorised |

V0.2 is a target-state review proposal. It supersedes V0.1 as the current candidate, not as an approved baseline.

## A. Redesigned Document Hub Desktop

Formal evidence: `assets/DOC-000_G5_DESKTOP_REQUEST_CONVERSION_V0.2.png`.

| Contract | Result |
|---|---|
| Viewport | 1440×4000 |
| Header | Inherited 84px; Documents current; Request a Quote retained |
| Hero | H1, buyer task copy, primary Request Documents, secondary local anchor, English service fact |
| Taxonomy | Two-column 3+3 ledger; six full purpose/scope entries and secondary request links |
| Scope | Product/Grade, Destination Market, Order/Batch Context; English note |
| Process | Three steps and non-guarantee answer in Deep Navy |
| Conversion bridge | Prepare checklist followed by prominent Request Documents section |
| Reassurance | Four Buyer Questions plus light final Request Documents link |
| Footer | Inherited Deep Navy Footer; global RFQ unchanged |

## B. Redesigned Document Hub Mobile 390

Formal evidence: `assets/DOC-000_G5_MOBILE_390_REQUEST_CONVERSION_V0.2.png`.

| Contract | Result |
|---|---|
| Logical viewport | 390×5278 |
| Header | Inherited 64px `Logo | RFQ | Menu`; actions meet 44px direction |
| Hero | Natural H1 wrap; two full-width actions; no empty hero height |
| Taxonomy | Six single-column entries; full names and copy; no carousel |
| Scope/process | Stacked in semantic order; no horizontal overflow |
| Conversion | Primary button is full width inside Deep Navy section |
| FAQ/footer | Four full-width rows, final link and inherited stacked Footer |

Mobile Menu evidence: `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.2.png`. It retains the fixed order, Documents marker, Close action and terminal Request a Quote.

## C. Conversion Flow

Formal evidence: `assets/DOC-000_G5_CONVERSION_FLOW_V0.2.png`.

```text
Hero Request Documents
→ Choose document type
→ Confirm scope
→ Prepare context
→ Request Documents
→ Qualified Document Request
```

Document-specific actions enter the same workflow and prefill Document Type. A Product Detail entry may additionally prefill Product / Grade. The workflow still owns Company, Contact Name, Business Email, optional Order/Batch Reference and Additional Notes. No language field is included.

The preview surface prevents navigation and shows prefill feedback only; it sends no request and is not production code.

## D. English-only Check

| Check | Result |
|---|---|
| Language selector | Absent |
| Multilingual claim | Absent |
| Visible service fact | `Document Language — English` / equivalent English-only note |
| Destination scope | `Destination Market`, never destination/language |
| Future public record metadata | Contract requires `Language: English` |
| Request workflow | No language field |

Result: `PASS`.

## E. Document Type Check

| Type | Purpose | Scope language | Request action |
|---|---|---|---|
| TDS | Technical properties, typical values, characteristics and applications | Buyer suitability validation; grade-specific | Request TDS |
| SDS | Safety, handling, storage, transport and hazards | English service; product scope | Request SDS |
| COA | Analytical results for a defined production lot/batch | Batch-specific; order/batch may be required | Request COA |
| Origin | Product and purchasing/shipment origin-document review | No universal origin/customs claim | Request Origin Documents |
| Traceability | Product, lot, batch or supply-chain record context | No complete-traceability claim | Request Traceability Documents |
| REACH / Compliance | Product/use/destination regulatory review | Category name alone does not confirm coverage | Request Compliance Information |

Result: `PASS`.

## F. GEO Check

The visible page directly answers:

| Question | Answer location |
|---|---|
| Which document do I need? | Six category purposes and FAQ 1 |
| What determines scope? | Scope direct-answer sentence and three factors |
| What language is available? | Hero/scope/prepare English fact |
| Does one document apply everywhere? | FAQ 2 begins `No.` |
| Does a request guarantee availability? | Process disclaimer and FAQ 4 begins `No.` |
| How do I request a document? | Hero, process, prepare checklist and conversion section |

No answer creates an unverified product-document, compliance, origin or availability relationship. Result: `PASS`.

## G. Conversion Check

Primary page conversion: `Request Documents`.

Body touchpoints:

1. Hero primary Request Documents.
2. Six document-specific request links with category prefill.
3. Prepare Your Document Request checklist as conversion bridge.
4. Primary conversion-band Request Documents.
5. Light post-FAQ Request Documents link.

Global Request a Quote remains only in Header, Mobile Header, Mobile Menu and Footer. It is not a page-body alternative. Design result: `PASS`; release result: `PASS WITH CHANGES` until the receiving route/workflow is approved and verified.

## H. Evidence Check

- no universal document-availability claim;
- no all-grade/all-market claim;
- no false REACH or other regulatory coverage;
- no false Malaysia-origin or customs claim;
- no View/Download control or false download promise;
- no filename, revision or public-file record;
- no approval, immediate-delivery or response-time promise;
- no buyer-visible inventory, route, Gate, restricted-state or readiness token;
- request receipt is explicitly not a guarantee.

Current eligible public record set remains zero. Result: `PASS WITH CHANGES` because future records and route eligibility still require evidence.

## I. No-Unintended-Changes Check

| Boundary | Result |
|---|---|
| Global Header and nav order | Unchanged |
| Mobile Header/Menu | Unchanged |
| Footer and all global RFQ placements | Unchanged |
| Visual system | Unchanged; reused Navy/Teal, editorial grid and Production SVG |
| URL / page type | Unchanged |
| Primary keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE`, unchanged |
| Child pages | Not started |
| CONV-DOC | Receiving contract documented; page/form not started or modified |
| External repo / code / deployment | Not touched |

Result: `PASS`.

## J. Final Gate

Only the permitted labels are used.

| Gate | Result | Reason / required change |
|---|---|---|
| Visual Gate | PASS | Desktop, 390px, menu and conversion-flow evidence complete |
| Document Taxonomy Gate | PASS | Six required types include purpose, scope and action |
| English-only Service Gate | PASS | No selector/multilingual claim; English visible |
| Evidence Gate | PASS WITH CHANGES | Public inventory and per-record scope remain unapproved; no record rendered |
| SEO Gate | PASS WITH CHANGES | Final canonical, robots and indexing decision remain open |
| Keyword Boundary Gate | PASS | Hub stays `NO_PRIMARY_KEYWORD`; no child-depth content |
| GEO Gate | PASS | Required direct answers visible and scoped |
| Conversion Gate | PASS WITH CHANGES | Design is complete; receiving workflow/live route remains a release blocker |
| Mobile UX Gate | PASS | True single column, full-width primary CTA, no carousel/overflow |

These are review findings, not project-control or user approval.

## 11. Formal asset manifest

| Asset | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/DOC-000_G5_DESKTOP_REQUEST_CONVERSION_V0.2.png` | 1440×4000 | 289811 | `0B4FC50C6A31D9FA0A4F67C65E43F8A5CBC380B958026B6BAB0E926510FD89D4` | `SUBMITTED / NOT APPROVED` |
| `assets/DOC-000_G5_MOBILE_390_REQUEST_CONVERSION_V0.2.png` | 390×5278 | 232059 | `7DC40F79E6ECFCB3D59B229106927DFC424FB38159220E23934B5E8A82EA7B8B` | `SUBMITTED / NOT APPROVED` |
| `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.2.png` | 390×720 | 13465 | `170482E434EBF7569A98A8E02D9459F7583B0934BB332D7F1CD18721C036B614` | `SUBMITTED / NOT APPROVED` |
| `assets/DOC-000_G5_CONVERSION_FLOW_V0.2.png` | 1440×1021 | 94309 | `3C34F049BB310EAF89F457778747062FC6E43666FB5D0841B37094BA58FD8A5D` | Internal review evidence |

## 12. Interaction and restricted-state contract

| State | Gate 5 result |
|---|---|
| Hover | Secondary request links receive restrained emphasis; essential content stays visible |
| Keyboard focus | Interactive elements require visible high-contrast focus |
| Long names | Wrap without truncation or tooltip dependency |
| No image | Full page remains complete |
| Public inventory = 0 | No file records, download shelf, fake card or zero-state jargon |
| Partial/complete eligible inventory | Render only the verified set; visible = machine |
| Controlled file | Request only; no false download |
| Request route unready | Blocks release; never appears as buyer-facing internal state or fallback |

## 13. Gate status

`SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`.

Gate 6 is not authorised. This package does not permit handoff, development, publication, DNS or indexing.

## 14. Version record

| Version | Change | Status |
|---|---|---|
| V0.1 | Zero-record guidance candidate without Request Documents conversion | Historical, submitted/not approved |
| V0.2 | Full Request Documents conversion Hub, English-only scope and A–J review | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
