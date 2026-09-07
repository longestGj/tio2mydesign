# MARKET-BR-EN Gate 4 V1.1 Targeted Independent Rereview

- Page ID: `MARKET-BR-EN`
- Reviewer role: independent Gate 4 final reviewer; not involved in V1.1 production
- Scope: first-round findings `BR-EN-G4-IR-01` and `BR-EN-G4-IR-02`, plus affected 1440 / 768 / 390, shared-component, body-copy and interaction regression only
- Candidate: `gate4-en-v1.1/MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.1.html`
- Frozen source SHA-256: `6827066a38c28b5e3fe990e0d53b8582ca215a1d5b481ffeacf18c74e3ac7707`
- Freeze ID: `BR-EN-G4-V11-SOURCE-01`
- Evidence-index SHA-256: `9ec978f4e98b792250ca0efdcb0bf7f7b617b68064a811b32b2e47b09e94c34d`
- Review result: **PASS**
- Workflow state represented by this report: `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

## Finding disposition

| Finding | Original acceptance condition | Independent rereview result | Status |
|---|---|---|---|
| `BR-EN-G4-IR-01` | Page visual layer must not style shared Header / Footer / RFQ selectors; assembled shared components must match their owner contract at all three widths. | V1.0→V1.1 diff removes `.header`, `.headerRfq` and `.footerRfq` rules from the page visual layer. Static scan returns zero shared-selector hits. Computed Header, Header RFQ, Footer RFQ, legal utilities and Menu controls equal Gate 3 shared-owner values at 1440, 768 and 390. | **ACCEPTED / CLOSED** |
| `BR-EN-G4-IR-02` | Documents action focus indicator must be at least 3:1 against its adjacent dark surface and remain visible at all three widths. | Both Documents actions inherit the new 3 px solid white focus ring. Independent probes at 1440, 768 and 390 return white against `#062B5B`, contrast `13.959:1`; the supplied focus-state images show the ring outside the control without clipping. | **ACCEPTED / CLOSED** |

## Affected regression

- All 36 identities recursively listed by the frozen evidence index exist and match byte count and SHA-256.
- Candidate body text and body link label/href pairs match the approved Gate 3 responsive source at 1440, 768 and 390.
- At all three widths: document width equals viewport width, no body element crosses the viewport, no hidden-overflow clipping is detected, visible controls have a minimum dimension of 44 px, Inter is active, and no page error occurs.
- Shared Menu and Cookie flows remain operable by keyboard. Menu opens with focus on Home, wraps in both directions, makes body regions inert, restores focus to the Menu button on Escape, and unlocks body scroll. Cookie opens with focus on Close, advances to Read Cookie Policy, closes on Escape and restores focus to Cookie Settings.
- I visually read the 3 full-page exports, all 16 readable segments, 3 Documents-focus exports, 2 Menu exports and 3 Cookie exports. Text remains readable and no overlap, truncation or responsive relationship regression was observed.

## Decision

No remaining finding is open for this targeted rereview. `MARKET-BR-EN` passes Gate 4 independent rereview on the cited frozen V1.1 identity. This report is a project-control submission; it does not record user approval and does not itself close Gate 4.

