# MARKET-UK-001 Gate 9 Evidence Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-UK-001` |
| Date | 2026-09-05 |
| Gate 9 review | `MARKET-UK-001-G9-PCR-01` |
| State | `PROJECT_CONTROL_REVIEW_PASS / IMMUTABLE_EVIDENCE_POINTER` |
| Development evidence root | `C:\Users\longe\.codex\worktrees\609c\16Wordpress_nextjs\docs\verification\market-uk-001\` |
| Implementation commit | `d55aeb70fad34c80f08964913789c21958b873bb` |

## 1. Integrity-checked primary evidence

| Evidence | SHA-256 | Use |
|---|---|---|
| `EVIDENCE_SHA256_MANIFEST.json` | `bdedb89d03554e3773c445c93fcab71a04aa94cfef780347df1d5a7702577226` | 43-file immutable evidence inventory; 36 screenshots |
| `GATE8_FINAL_REPORT_2026-09-05.md` | `367879352dc9d9c68ee403562d8010e2aa5f3c0b9436110d626d92a509e24328` | Gate 8 scope, checks, caveats and release controls |
| `playwright-results.json` | `6e17659e05000315b64e71028ac10bf6c5885bc3b4a8be1f0916c8ef9e0b5b4e` | 21-test browser result |
| `runtime-matrix.json` | `b543cbdf997e9252af0101060d4d5ad2a1b8819c5afb0bc22e8acabe91b15f07` | geometry, routes, metadata, accessibility and RFQ state evidence |
| `uk-1440.png` | `cabe030f6b9c018bc11b9c20f883220553abef35fc4aef57177691168dcb761b` | 1440×8208 full page |
| `uk-768.png` | `07e10ef92f36d1fcc972e3f197cc56e33d9cb074b9904d36b783e08e54eab69f` | 768×10835 full page |
| `uk-390.png` | `80cffdb4882aa8b1e0cb086fc3cfa3a76eceef6ee237dce87104e6b3c9fb6329` | 390×14470 full page |

The 2026-09-05 D23 verifier recalculated all 43 manifest-listed files: `43/43 MATCH`, `0 MISSING`, `0 MISMATCH`. The manifest excludes itself by design and its own hash is recorded above.

## 2. Original-detail evidence inspected

| Group | Files |
|---|---|
| Full responsive pages | `uk-1440.png`; `uk-768.png`; `uk-390.png` |
| Mobile Menu | `uk-menu-768.png`; `uk-menu-390.png` |
| FAQ / focus | `uk-faq-all-expanded-1440.png`; `uk-faq-all-collapsed-390.png`; `uk-documents-focus-1440.png` |
| Reflow | `uk-reflow-720.png`; `uk-reflow-320.png` |
| RFQ | `uk-rfq-prefill.png`; `uk-rfq-negative.png`; `uk-rfq-positive.png` |
| Shared regression | `chrome-{home,markets,products,documents}-{1440,768,390}.png`; `menu-{home,markets,products,documents}-{768,390}.png` |

## 3. Recorded executable evidence

| Check | Recorded result |
|---|---|
| Vitest | 33 files / 224 tests passed |
| PHP mutation | 40 cases passed |
| PHP seed | 5 cases passed |
| PHP resolver | 7 negative cases, valid payload, 20 conservative route states and non-null String contract passed |
| ESLint | 0 errors / 0 warnings |
| Playwright | 21 passed / 0 skipped / 0 unexpected / 0 flaky |
| Malaysia scoped build | exit 0 |
| Typecheck / tsconfig baseline / diff check | exit 0 |

These results were produced by the independent development task and preserved in the immutable evidence package. D23 verified their files and reviewed their outputs; D23 did not rerun or alter the implementation.

## 4. Official-source evidence

| URL | Retrieval date | Purpose |
|---|---|---|
| `https://www.hse.gov.uk/REACH/roles.htm` | 2026-09-05 | GB supply-chain roles |
| `https://www.hse.gov.uk/reach/about.htm` | 2026-09-05 | UK REACH / EU REACH territorial split |
| `https://www.hse.gov.uk/chemical-classification/brexit.htm` | 2026-09-05 | GB CLP / EU CLP territorial split |
| `https://www.gov.uk/trade-tariff` | 2026-09-05 | Official tariff lookup route; no code/rate inference |
| `https://public-file.trade-remedies.service.gov.uk/` | 2026-09-05 | Current TRA investigation register; AD0086 updated 2026-09-02 |
| `https://www.gov.uk/government/publications/trade-remedies-notice-registration-of-imports-of-rutile-titanium-dioxide-originating-from-china/trade-remedies-notice-202614-registration-of-imports-of-rutile-titanium-dioxide-originating-from-china` | 2026-09-05 | Dated notice boundary; not generalized into Buyer Clean |

## 5. Evidence boundary

This Manifest proves the evidence used for the Gate 9 candidate review. It does not prove production WordPress data, real RFQ delivery, release-environment metadata/cache behavior, release-day source freshness or exact served SVG bytes. Those remain the open blockers in `MARKET-UK-001_GATE9_FINDINGS_V0.1.md`.

Project control passed the evidence review on 2026-09-05. The underlying D16 evidence bytes remain unchanged. Future runtime-matrix generators should normalize key casing; this recommendation does not alter the accepted immutable evidence package.
