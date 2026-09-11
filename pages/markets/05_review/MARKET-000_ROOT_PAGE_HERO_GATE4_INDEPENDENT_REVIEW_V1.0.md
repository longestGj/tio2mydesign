# MARKET-000 Root Page Hero · Independent Review V1.0

## Decision

| Field | Result |
|---|---|
| Review ID | `MARKET-ROOT-HERO-G4-IR-01` |
| Candidate | `MARKET-ROOT-HERO-G4-CANDIDATE-01` |
| Reviewer independence | The reviewer did not create the candidate, preview, capture, runtime record or freeze record. |
| Independent result | `PROJECT_CONTROL_REVIEW_PASS` |
| Required findings | `0` |
| Disposition | The MARKET-000 page-local Wave 2 Hero binding may proceed as a frozen input to the final cross-page review. This does not close the seven-page Gate 4/Gate 5 workset or change MARKET-000's current Manifest/Gate 9 state. |

## Review scope and evidence

Read the root governance/context/index entries, shared Hero contract, seven-page control/progress, six-page preflight, MARKET-000 current Gate 9 and approved Gate 5 Manifests, Brief, Gate 2 content architecture, Gate 3 wireframe and approved V0.4 visual baseline. The reviewed output was:

- `pages/markets/04_planning/MARKET-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md`
- `pages/markets/04_planning/MARKET-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md`
- every source, freeze/runtime record and 1440/768/390 PNG under `pages/markets/04_planning/visual-designs/market-root-page-hero-v1.0/`

Author verification was rerun read-only and passed. The independent Playwright validator rerendered the candidate from local file context without writing to the candidate folder; it passed at 1440, 768 and 390. The three frozen PNGs were each reviewed using original detail. Machine results and immutable candidate/evidence hashes are recorded in [independent evidence](MARKET-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_EVIDENCE_V1.0.json).

## Preservation review

| Check | Result | Evidence |
|---|---|---|
| Exact Hero copy | PASS | Eyebrow `Destination market navigation`, H1 `Choose Your Destination Market`, and the approved two-sentence intro exactly match the Gate 2/Gate 3 baseline. |
| CTA and destination | PASS | The only Hero action is `Choose a Market → #destination-selector`; its same-document target exists. |
| Information card | PASS | The existing `EU / UK / IN / BR` summary card is visible at 1440, 768 and 390. |
| Destination hierarchy | PASS | First module retains European Union parent → Germany, Italy, Spain, Poland, Netherlands, Belgium → United Kingdom, India, Brazil in exact order. |
| Route governance | PASS | Child-market href count is zero. No planned market-route token is present; this remains S0 route-safe and does not upgrade the 22 external units. |
| PT-BR | PASS | `PT-BR`/Portuguese text and route are absent from source and rendered text. |
| SEO/GEO/Schema/body scope | PASS | Candidate contains no schema payload and introduces no body module, Trade outcome, Product relation or metadata assertion. Current contracts remain external to this targeted visual proof. |
| Global Chrome | PASS | Desktop has the complete fixed order `Home / Markets / Products / Applications / Documents / Resources / About`, Markets is sole active item, Header is 84px; responsive Header is 64px. Buyer-visible `CURRENT=0`. |
| Shared Hero geometry | PASS | H1 is 56/44/36px at weight 700 and 2/1/2 lines; all visible controls are at least 44px; no horizontal overflow; Hero left pseudo-element is absent. Original-detail reading confirms a bounded shared Hub shell, not a giant full-screen frame. |

## Required findings

None. No P0, P1 or P2 condition was found in the reviewed candidate.

## Boundary retained

This review does not declare external destination routes live, alter `MARKET-BR-PT` localization hold, modify SEO/GEO/Schema, change the approved V0.4/V0.5 full-page baseline, authorize D16/Gate 6/Gate 8/release, or update a Manifest/progress record. Candidate and historical assets were not modified.
