# APP-COAT Gate 2 Full Copy Revision Response V0.1

## 1. Response control

| Field | Value |
|---|---|
| Review | `APP-COAT_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` |
| Review SHA-256 | `775C4595D1BA3992981FBAC7940E2AE61998CC2A88B4662BE4BAFFB052E812AC` |
| Findings | `APP-COAT-G2-BR-F01`–`F03` |
| Revised B | `APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Revised B SHA-256 | `E5C9FFA7BCD7AE0375E45E27BA9BC26B95D00D317FF19C243E7E931B17706531` |
| A | `APP-COAT_GATE2_CONTENT_SKELETON_V0.1.md` / unchanged |
| C | `APP-COAT_GATE2_CONTENT_CONTRACT_V0.1.md` / unchanged |
| Response date | 2026-09-07 |
| Result | `F01_F02_F03_IMPLEMENTED / PENDING_INDEPENDENT_BUYER_REREVIEW` |

Only the targeted Buyer Copy was revised. No module, action target, Grade relation, technical source or stable contract meaning changed.

## 2. `APP-COAT-G2-BR-F01`

**Before**

> Review each Grade page against your declared coating basis. If you are considering more than one candidate, keep each trial result separate and name all candidates when you continue. If the Grade is not yet known, you can still continue without guessing.

**After**

> Open the Grade page for the candidate you are considering, or compare the relevant Grade pages if you are considering more than one. Keep each trial result separate and name all candidates when you continue. If the Grade is not yet known, you can still continue without guessing.

**Acceptance self-check**

- `Review each` and any instruction to inspect all eight pages occur zero times.
- One candidate, several candidates and unknown Grade remain valid paths.
- The page does not create a shortlist, rank, recommendation, suitability, equivalence or performance inference.
- All eight neutral Grade rows, process labels, order and links are unchanged.

## 3. `APP-COAT-G2-BR-F02`

**Before**

> Cost-in-use becomes meaningful after the incumbent and candidate reach the same tested functional endpoint for the intended application. Price per kilogram, nominal TiO2 content or a different loading has no complete commercial meaning if the resulting coating does not deliver the accepted coverage, film, appearance, process behaviour and required performance.

**After**

> Price per kilogram, nominal TiO2 content and loading provide a meaningful cost comparison only when the incumbent and candidate coatings reach the same accepted technical endpoint for the intended application.

**Acceptance self-check**

- The plural subject uses `provide` and the sentence reads directly.
- Price per kilogram, nominal TiO2 content and loading are conditional on the same accepted technical endpoint.
- The following buyer-owned accounting boundary remains unchanged.
- No saving, ROI, price, performance or commercial outcome is promised.

## 4. `APP-COAT-G2-BR-F03`

### Durability guidance

**Before**

> Use surface-treatment and photoactivity information to frame questions, then test durability in the intended coating matrix, prepared film and relevant exposure. Declare the exposure cycle, controls and endpoints, because changing the light source or conditions can change degradation behaviour and even candidate ranking.

**After**

> Use surface-treatment and photoactivity information to frame questions, then test durability in the intended coating matrix, prepared film and relevant exposure. Declare the coating matrix, pigment and achieved dispersion, exposure conditions, controls and endpoints. The cited study supports comparison only within its tested epoxy and acrylic-urethane matrices, pigment types and dispersions, and its dry and warm/wet UV exposure conditions.

### Source 3 date

**Before**

> Published 1 December 2003.

**After**

> Published December 2003.

**Acceptance self-check**

- Source 3 uses month-level publication precision.
- The Source 6 guidance contains no different-light-source or candidate-rank-reversal claim.
- The visible scope is limited to tested matrix, pigment/dispersion and dry versus warm/wet UV exposure conditions.
- No source was added, removed or relabelled; the other five source notes are byte-identical to V0.1.

## 5. Adjacent regression

- Buyer Copy markers remain exactly one start and one end marker.
- Visible structure remains one H1, nine H2 modules and three action H3s.
- Exactly eight neutral Grade rows remain: four Chloride and four Sulfate.
- M-996/M-2196 remain undifferentiated.
- Documents, Sample and RFQ labels, targets, helper copy and post-submit boundaries are unchanged.
- Unknown Grade, multiple candidates, incomplete technical conditions and required or estimated MT quantity remain available.
- Six source notes remain in the same order; Sources 1, 2, 4, 5 and 6 retain their labels, dates and URLs.
- A SHA-256 remains `EFA3C0AF5BF2E69D6942DAFDC83DF2DECDC571B4C988589788BD0F77A55B0FC2`.
- C SHA-256 remains `AB5FD1D67EAE464193D6E20B3F80A94AFD36E29383FFB5A2C99DB8E7103DE400`; its stable month-level/source and no-ranking predicates already cover the revision, so C is not versioned.

Next responsibility: independent Buyer Review Agent verifies F01–F03 against B V0.2 and the adjacent regression. Gate 2 remains open.
