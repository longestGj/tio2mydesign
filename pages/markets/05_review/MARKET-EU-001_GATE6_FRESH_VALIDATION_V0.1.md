# MARKET-EU-001 Gate 6 Fresh Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Date | 2026-09-04 |
| Validation ID | `MARKET-EU-001-G6-VALIDATION-01` |
| Approved input | Gate 5 V0.1 / `USER_APPROVED / CLOSED` |
| Result | `67 PASS / 0 FAIL` |
| Validation script | `99_workspace/MARKET-EU-001/gate6-fresh-validation.ps1` |
| Script SHA-256 | `ACBD38CC4032E3665C830772F523252D8C7148ACEF52169522B73ED88F8F73E6` |

## 1. Deterministic validation coverage

The fresh validation covered 67 checks across:

1. 57-row keyword-master integrity and the unique `MARKET-EU-001` mapping;
2. current 57-page Registry integrity and page identity;
3. exact Gate 5 approval and approved-baseline hashes;
4. H1, Title, Meta and five approved principal headings;
5. the six representative Grade routes, six EU destinations, five Application routes and eight Buyer Questions;
6. shared Privacy EN/BM, Cookie Policy and CMP Cookie Settings controls, with no Terms route;
7. RFQ market/source prefill, Global Chrome current-state and Mobile Menu interaction contract;
8. official ECHA, EUR-Lex and TARIC links plus trade-freshness/non-guarantee wording;
9. nine rendered Grade/Application relationships against `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`;
10. the hashes of the seven approved Gate 5 visual proofs;
11. buyer-facing governance-placeholder, duplicate-ID and duty-avoidance scans.

Result: `67 PASS / 0 FAIL`.

## 2. Browser/runtime validation reused and freshly rerun

The approved Gate 5 browser checks were rerun before Gate 6 disposition:

- 1440 / 768 / 390 client width equals scroll width;
- H1=1; approved H1, headings, Title and Meta remain exact;
- six representative Grades in two groups, six destinations and eight Buyer Questions remain exact;
- content-image count remains 0 by approved design;
- Mobile Menu focus enters at Close, wraps backward to the terminal RFQ, wraps forward to Close, closes on Escape, restores page scrolling and returns focus to the menu opener.

The focus-trap regression result was `PASS`.

## 3. Fresh official-source review

Reviewed on 2026-09-04:

| Topic | Official source | Gate 6 finding |
|---|---|---|
| Existing definitive TiO2 measures | `https://eur-lex.europa.eu/eli/reg_impl/2025/4/oj` | Commission Implementing Regulation (EU) 2025/4 concerns defined titanium dioxide imports originating in the People’s Republic of China; the page does not generalize the measure to Malaysian-origin goods. |
| 2026 absorption reinvestigation | `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC04533` | OJ C/2026/4533 dated 25 August 2026 reopens an absorption reinvestigation concerning those measures; the page correctly describes the investigation as ongoing. |
| Non-EU company REACH/CLP roles | `https://echa.europa.eu/support/getting-started/enquiry-on-reach-and-clp` | The neutral importer / EU-established Only Representative responsibility framing remains supported; the page does not claim TiO2 Malaysia has an OR or registration. |
| Current tariff/measure lookup | `https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en` | TARIC remains an appropriate current-check destination for tariff and trade-defence measures; the page avoids a fixed rate or customs result. |

## 4. Baseline integrity

| Baseline | Expected/current SHA-256 | Result |
|---|---|---|
| `research/keyword/11_page_keyword_master.csv` | `B321FE89A5DADEA553E2D546FF9A8992D588F99E264ADA948A7E08F43463D4B4` | PASS; 57 rows |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | `B60E968D4D9DB0E80C0FF19EEFF194BE6B1ACB030A8F37207654E258617D8181` | PASS; current 57-page Registry |
| Gate 5 approved Manifest V0.15 | `F83B3F4327240CC9E6E24EF68AB5479D5FEFAA0B52F5740D8FE3123CB148C790` | PASS |
| Gate 5 HTML | `43FC82AA199AB5893100CFEA0F54CB0695EE547ADA71C9CBB22E8278DECB2B0A` | PASS |

No page, URL, primary keyword, destination identity or product relationship changed.

## 5. Validation disposition

`MARKET-EU-001-G6-VALIDATION-01 = PASS / CLOSED`.

This validation supports Gate 6 project-control review. It does not authorize Gate 7, development, deployment, publication or indexing, and it does not close the site-wide Malaysia-origin evidence hold.
