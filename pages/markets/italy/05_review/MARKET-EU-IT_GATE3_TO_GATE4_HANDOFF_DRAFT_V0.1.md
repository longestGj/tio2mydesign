# MARKET-EU-IT Gate 3 → Gate 4 handoff draft V0.1

## A. Identity and readiness

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-IT` / `/markets/italy/` |
| Language / scope | EN / `tio2-my` |
| Gate 3 frozen source | `D:/23MySec/pages/markets/italy/04_planning/gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html` / `910d8199ca4094b4b56d854b5292c6eb115a6eabd29ff35d9515850d76a1b752` |
| Current candidate Manifest | `MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md` |
| Status | `DRAFT / NOT_READY_FOR_GATE4 / PENDING_PROJECT_CONTROL_AND_USER_APPROVAL` |
| Gate 4 | `NOT_AUTHORIZED / NOT_STARTED` |

This draft is prepared for review efficiency. It must not be marked `READY_FOR_GATE4_WHEN_AUTHORIZED` until the exact Gate 3 frozen combination is independently reviewed and approved by the user.

## B. Upstream content and behaviour pointers

- A: `MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md` / `8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751`.
- B, sole visible-copy source: `MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` / `a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208`.
- C: `MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md` / `ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19`.
- Shared planning consumer: `SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md`, package `TIO2MY-GATE3-SHARED-CONSUMER-002`.
- Formal structure evidence and identities: `04_planning/gate3-v0.1/asset-inventory.json`.

## C. Structure constraints

| Order | Module | Locked relationship |
|---:|---|---|
| 1 | Hero | Italy destination and Malaysia-origin supply identity precede the primary RFQ and secondary Product action. |
| 2 | Italian industrial-project contexts | Introductory source context precedes three distinct groups: Wood/Industrial Coatings, Compound/Masterbatch and Packaging Printing. Each group keeps its own prompts and Application-owner links. |
| 3 | Product review | Neutral Product Hub route and unknown-Grade RFQ path; no Italy Grade assignment, ranking or suitability signal. |
| 4 | Documents and samples | Exact COO sentence stays adjacent to its issuance/customs limitation. Request Documents, unknown-Grade RFQ and Request Sample remain separate tasks. |
| 5 | Italy destination brief | Receiver-field mapping remains prose followed by the five-item preparation list and unknown-detail instruction. It is not a page form. |
| 6 | EU owner handoff | EU Procurement Overview and dated EU Trade Update remain in the EU-owner module, followed by the Italy-page non-result boundary. |
| 7 | Italy RFQ and sources | RFQ preparation and receiver expectation precede the two bounded industry sources and check date. |

Primary actions, control ownership, link targets, receiver context, visible wording and module order cannot be changed by Gate 4.

## D. Responsive constraints and current parameters

| Region | 1440 structure constraint | 768 structure constraint | 390 structure constraint | Current implementation parameters |
|---|---|---|---|---|
| Hero | Copy/action split; primary then secondary action | One-column copy with two actions in one row | One-column copy and stacked full-width actions | Exact gap, width, font size and section padding may change in Gate 4. |
| Industry contexts | Three distinct columns | Two columns plus Packaging Printing across the next row | Three cards in source order, one column | Card surface, borders, padding and heading sizes are visual parameters. |
| Destination brief | Guidance spans the module; checklist and unknown-detail note remain associated | One-column | One-column | Highlight treatment, line length and spacing are visual parameters. |
| EU owner handoff | Owner paragraph and non-result boundary remain a two-part relationship | One-column | One-column | Surface styling and exact column widths are visual parameters. |
| Final RFQ/sources | RFQ block precedes source block | Same order | Same order, long links wrap | Colour/surface, padding and source typography are visual parameters within brand/contrast contracts. |
| Shared Chrome | Current Markets mapping, fixed RFQ, approved Logo/Footer/legal/Cookie | Narrow Header and menu | Narrow Header and menu | Shared owner geometry and behaviour are not page-owned visual parameters. |

## E. Required evidence and states

| Component | Formal evidence | Operation coverage | Owner |
|---|---|---|---|
| Complete page | `1440-full`, `768-full`, `390-full` PNGs | Static full-page readback plus source/runtime checks | MARKET-EU-IT |
| Mobile Menu | `768-menu`, `390-menu` PNGs | Current page actual open, focus cycle, Escape, selection close, isolation and focus return | Global Chrome, page assembly checked |
| Cookie Settings | `390-cookie` PNG | Actual entry, focus cycle, close and focus return at all three widths; unchanged full shared behaviour referenced from Consumer V0.2 evidence | Shared Consent / Footer legal; page assembly checked |
| Page forms/FAQ/selectors | `NOT_APPLICABLE` | The approved page has none; no state was invented | Corresponding downstream owners |

## F. Gate 4 visual risks

- The longest H2 and three context cards need a visual hierarchy that preserves their distinct tasks without turning the page into a dashboard.
- The COO qualifier must remain visually adjacent and equally readable; emphasis cannot imply every-shipment issuance.
- Destination field names are guidance references, not interactive fields. Visual treatment must not make them look like page inputs.
- The two named sources and check date need readable hierarchy at 390 without suggesting endorsement or current market proof.
- The final RFQ surface must keep readable white text, functional teal contrast and the post-submit limitation.

## G. Later-stage boundaries

Production route availability, actual receiver behaviour, CMS/data binding, real device and assistive-technology behaviour, external-source freshness and `site_scope=tio2-my` runtime isolation remain Gate 6/8/9 acceptance work. This draft does not authorize Gate 4, development, deployment, publication or indexing.
