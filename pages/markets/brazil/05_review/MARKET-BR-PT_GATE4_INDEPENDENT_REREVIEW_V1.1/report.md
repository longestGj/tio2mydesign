# MARKET-BR-PT Gate 4 V1.1 Targeted Independent Rereview

- Page ID: `MARKET-BR-PT`
- Reviewer role: independent Gate 4 final reviewer; not involved in V1.1 production
- Scope: first-round findings `BR-PT-G4-IR-01`, `BR-PT-G4-IR-02` and `BR-PT-G4-IR-03`, plus affected 1440 / 768 / 390, shared-component, body-copy, Portuguese wrapping and interaction regression only
- Candidate: `gate4-pt-v1.1/MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html`
- Frozen source SHA-256: `1159f03eb5018f73ba497cca77ed4d9903c10d2bb3a6c2612c51da89757a0357`
- Freeze ID: `BRPT-G4-V11R1-SOURCE-01`
- Evidence-index SHA-256: `445336a8aec5a4cf276eb7377192d0e2c675fa8bac0544fea67d51e1b9e42b13`
- Review result: **PASS**
- Workflow state represented by this report: `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

## Finding disposition

| Finding | Original acceptance condition | Independent rereview result | Status |
|---|---|---|---|
| `BR-PT-G4-IR-01` | Page visual layer must not style shared Header or mobile legal-utility selectors; assembled shared components must match their owner contract at all three widths. | V1.0→V1.1 diff removes `.header` and `.legalUtilities` from the page visual layer. Static scan returns zero shared-selector hits. Computed Header, Header RFQ, Footer RFQ, legal utilities and Menu controls equal Gate 3 shared-owner values at 1440, 768 and 390. | **ACCEPTED / CLOSED** |
| `BR-PT-G4-IR-02` | Hero primary CTA must use the approved CTA palette and reach at least 4.5:1 for white text in normal and hover states. | The hero CTA now uses `#008078` and hover `#006C66` (runtime interpolation settles at `rgb(0,108,102)`). Independent probes return `4.818:1` normal and `6.293:1` hover at all three widths. | **ACCEPTED / CLOSED** |
| `BR-PT-G4-IR-03` | Keyboard focus indicator must be 3 px and at least 3:1 against adjacent surfaces across the five affected surface families and all three widths. | Fifteen independent probes pass: Hero white `13.959:1`; Application teal on white `4.818:1`; Documents teal on mist `4.473:1`; Trade white on navy `13.959:1`; final RFQ teal on sand `4.350:1`. Every probe returns a 3 px solid ring. The five supplied mobile focus captures show the ring without clipping. | **ACCEPTED / CLOSED** |

## Affected regression

- The frozen evidence index contains 59 unique file identities; all 59 exist and match byte count and SHA-256. The dispatch summary described 58 identities, but the cited frozen index itself contains 59 and has the exact expected index hash, so this is a readback-count clarification rather than a candidate discrepancy.
- Candidate Portuguese body text and body link label/href pairs match the approved Gate 3 responsive source at 1440, 768 and 390. Language boundaries remain `html/main=pt-BR` and shared Header/Footer/Cookie=`en`; approved inline English field labels remain explicitly marked.
- At all three widths: document width equals viewport width, no body element crosses the viewport, no hidden-overflow clipping is detected, visible controls have a minimum dimension of 44 px, Inter is active, and no page error occurs.
- Portuguese headings, long CTA labels, cards, trade copy and RFQ requirements wrap without overlap, truncation or unintended horizontal scrolling at 768 and 390. The Gate 3 responsive relationships remain intact.
- Shared Menu and Cookie flows remain operable by keyboard with focus wrap, inert background regions, scroll lock and focus restoration.
- I visually read the 3 full-page exports, all 16 readable segments, 2 Menu exports, 3 Cookie exports and all 5 focus captures. No affected visual regression was observed.

## Decision

No remaining finding is open for this targeted rereview. `MARKET-BR-PT` passes Gate 4 independent rereview on the cited frozen V1.1 identity. This report is a project-control submission; it does not record user approval and does not itself close Gate 4.

