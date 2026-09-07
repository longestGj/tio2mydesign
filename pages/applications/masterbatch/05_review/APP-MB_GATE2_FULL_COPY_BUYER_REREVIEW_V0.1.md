# APP-MB Gate 2 Full Copy Buyer Re-review V0.1

## 1. Review control

| Field | Value |
|---|---|
| Review ID | `APP-MB-G2-BR-01-R1` |
| Phase | `Full Copy targeted re-review` |
| Review date | 2026-09-07 |
| B / SHA-256 | `APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` / `6E73AE9B3264D9B296C8A4F3A34112D77BB003603D331BBA5A5C3F4EF0DA22C9` |
| C / SHA-256 | `APP-MB_GATE2_CONTENT_CONTRACT_V0.2.md` / `6BFFF1AD09BA58DE0A4383DC01CDFBEE6D0EA28051CC8C974893971894D358B7` |
| Revision Response / SHA-256 | `APP-MB_GATE2_FULL_COPY_REVISION_RESPONSE_V0.1.md` / `9D711641E12031DC7EB6091DF32146A242EEFEFCE736F87BA06CF419F08BAA2C` |
| Current Manifest / SHA-256 | `APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md` / `9A750147F0916A0875D5A3FF5785E5E5243C0E613D685BE392981ECA47A4BD48` |
| Original Findings | `APP-MB-G2-BR-F01 = CLOSED`; `APP-MB-G2-BR-F02 = CLOSED` |
| New Finding | `APP-MB-G2-BR-F03` |
| Verdict | `FINDINGS_REQUIRE_REVISION` |

The actual revised B was read before the Revision Response. The targeted sections and the full page through public metadata were checked. This report does not approve or close Gate 2.

## 2. Original Finding closure

### `APP-MB-G2-BR-F01` — `CLOSED`

The document section now begins with the records relevant to the buyer's current question. It assigns TDS and SDS to early screening and safety, adds a CoA only once a lot is identified, and uses application data when a tested system is being assessed. Missing documents remain later verification items rather than a complete prerequisite. The four document roles remain distinct and no availability is promised.

### `APP-MB-G2-BR-F02` — `CLOSED`

The four steps remain document screening, concentrate trial, receiving-resin/final-specimen trial and repeatability assessment. `Release authority`, `release request`, `release decision`, `responsible approver`, `decision owner` and request-versus-approval language are absent. The introduction and close now describe technical questions directly, and the final limit correctly states that concentrate-stage evidence does not establish final fitness or recommend a Grade.

## 3. New Finding

### `APP-MB-G2-BR-F03` — final-specimen decision compares evidence “with” an endpoint

**Severity:** Minor, required.

> Decide what should be repeated or extended before comparing the evidence with those endpoints

An endpoint is the question or result being measured; it is not the natural comparison object for the assembled evidence. The intended buyer decision is whether the evidence meets the stated endpoint or its acceptance requirement. `Comparing the evidence with those endpoints` is therefore the weakest revised sentence and makes the third row less precise than the other three.

**Required revision:** state directly that the buyer decides which tests should be repeated or extended before judging whether the stated endpoints or acceptance requirements are met.

**Acceptance condition:** the row keeps the same receiving-resin/final-specimen stage and evidence set, gives a natural technical decision, and adds no release, approval, pass guarantee, Grade recommendation or new test requirement.

## 4. Adjacent and full-page regression

- The two-stage Hero, system inputs, FPV boundary, observation roles, LLDPE limits and APP-PLAS handoff are unchanged.
- The Chemours R-350 and KRONOS 2220 examples remain narrow document-reading examples; all four source notes, identities, dates, links and predicates are unchanged.
- Seven Grade rows remain exact and neutral: five Chloride and two Sulfate; one, several and unknown-Grade paths remain available.
- Documents, Sample and RFQ routes retain their separate inputs and receiver expectations. Required or estimated MT, `Not sure / Need help`, `Additional Requirements` and the limited post-submit contact statement remain intact.
- The module order, H1, SEO title, Meta, provisional Canonical treatment and Schema candidates are unchanged. C V0.2 accurately incorporates F01/F02 without changing source, Grade, action or metadata semantics.
- No qualification, workflow, hold, readiness, release, approval-owner, SOP, equivalence, availability or commercial promise was introduced elsewhere.

## 5. Next responsibility

The Gate 2 Execution Agent should make the single local F03 sentence correction and save a versioned response. Independent Review then needs only a targeted read of the revised row plus adjacent rows and a regression check that F01/F02 remain closed. APP-INK remains locked.
