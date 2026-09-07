# MARKET-EU-IT Gate 2 Full Copy Revision Response V0.1

## 1. Revision control

| Field | Value |
|---|---|
| Page ID | `MARKET-EU-IT` |
| Review / Finding | `MARKET-EU-IT-G2-BR-01` / `MARKET-EU-IT-G2-BR-F01` |
| Review verdict | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS` |
| Baseline B | `MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` / `EF0566B6908537B7CF1C52A15743031B23E3AEA09B6829A9FA1E90AC774EDDE6` |
| Revised B | `MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` / `A7D047AF04B5127CC54F97938E4D622B1E1B496691747516322924F6E0B44208` |
| Baseline C | `MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.1.md` / `C4CD5A89625719D2197ABE682ED39BCED111DBC6D5C5F1342CF5A3A4705C6AC3` |
| Revised C | `MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md` / `AC49B66055BF36B87583E3919005CCBF87919A9900D9A9103AAA7D39936A6E19` |
| Revision date | 2026-09-07 |
| Revision state | `F01_IMPLEMENTED / PENDING_INDEPENDENT_BUYER_RE_REVIEW / NOT_USER_APPROVED` |

This response records the destination-receiver correction and the accepted adjacent natural-language improvement. It does not approve Gate 2 or authorize Gate 3.

## 2. Exact Buyer Copy revision

### Destination receiving path

**Before:** `State Italy as the destination country. Add the final receiving city or site and any known port or handover point. Record the final destination separately from the port or handover point when both are known.`

**After:** `Enter Italy in Destination Country. If you know a port or city, enter it in the optional Destination Port / City. If a different final receiving site or another handover detail also matters, add it in Additional Requirements.`

The destination checklist now uses the same mapping: Italy in `Destination Country`; a known port or city in optional `Destination Port / City`; a different final receiving site or another handover detail in `Additional Requirements`.

The following incomplete-information sentence is unchanged:

> You can continue when some destination details are still unknown. Provide the country and the other context already available; do not guess a port, route or receiving site.

### Unknown-Grade natural-language improvement

**Before:** `Add the application and other context you already know so the requirement can be reviewed without an automatic Grade assignment.`

**After:** `Add your application and any other context you already know.`

The preceding `Not sure / Need help` path remains unchanged.

## 3. Stable contract revision

C V0.2 adds `IT-05` to the RFQ/destination action row and maps the three actual receiver locations:

- `Italy` → visible, editable `Destination Country`;
- known port or city → optional `Destination Port / City`;
- different final receiving site or another handover detail → `Additional Requirements`.

C otherwise preserves the seven modules, all actions, COO scope, five fact/source entries, SEO, GEO, Schema and conditional-rendering behavior. It selects the current B through the page Manifest and `BUYER_COPY` markers; no B version or Review/Gate lifecycle state is stored in C.

## 4. Acceptance and adjacent regression

- No dedicated second location field is implied: **PASS**.
- Unknown city/site/port details may remain unknown and the buyer is told not to guess: **PASS**.
- Unknown Grade through `Not sure / Need help`: **PASS**.
- Required or estimated quantity in metric tonnes: **PASS**.
- Approved COO statement appears once in Buyer Copy and its every-shipment/customs qualifier is unchanged: **PASS**.
- Federchimica AVISA and Garzanti predicates, links, missing-publication-date labels and check date are unchanged: **PASS**.
- Seven-module order, CTA hierarchy, EU owner split and post-submit expectation are unchanged: **PASS**.
- A V0.1, B V0.1 and C V0.1 remain preserved: **PASS**.

Next responsibility: independent Buyer Review Agent re-reviews B V0.2 and C V0.2 against F01. Project Control and batch user approval follow only after the Finding is closed.
