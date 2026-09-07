# DOC-TDS Gate 7 Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Validation ID | `DOC-TDS-G7-VALIDATION-01` |
| Date | 2026-09-05 |
| Core contract result | `95 PASS / 0 FAIL` |
| Final governance result | `103 PASS / 0 FAIL` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Validation commands

Core package:

`node 99_workspace/DOC-TDS/gate7/validate-doc-tds-gate7.mjs`

Expected result:

`{"validation":"DOC-TDS Gate 7 handoff package","mode":"core","passed":95,"failed":0,"result":"PASS"}`

Final package, closure and project-index synchronization:

`node 99_workspace/DOC-TDS/gate7/validate-doc-tds-gate7.mjs --final`

Expected result:

`{"validation":"DOC-TDS Gate 7 handoff package","mode":"final","passed":103,"failed":0,"result":"PASS"}`

Retained upstream regression:

`node 99_workspace/DOC-TDS/gate6/audit-doc-tds-gate6.mjs`

Expected result:

`{"review":"DOC-TDS Gate 6 fresh audit","passed":109,"failed":0,"result":"PASS"}`

Gate 7 validator SHA-256: `02C74DDD731BB27F110B8A53069C828C95840B892C6DD032993835E0917016D5`.

## 2. Core contract coverage

| Area | Result |
|---|---|
| Page ID, route, type, language, priority and `site_scope=tio2-my` | PASS |
| `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` retained | PASS |
| Exact Title, Meta, H1, Canonical candidate and primary keyword | PASS |
| Ten unique modules in approved order | PASS |
| Three selectable document types and one non-selectable multi-document explainer | PASS |
| 14 unique Grade options in approved order | PASS |
| Four comparison rows, seven checklist items, four steps, five FAQs and three related paths | PASS |
| Direct Answer jurisdiction/language wording | PASS |
| Buyer-language Grade note, FAQ #2 and required-fields copy | PASS |
| `document_types[]`, single `product_grade`, hidden source and no Contact fallback | PASS |
| TDS+M-2196 and SDS+COA/no-Grade exact route examples | PASS |
| `WebPage + BreadcrumbList`; FAQPage/Product/DigitalDocument prohibited | PASS |
| Nine responsive widths, 44×44 targets and 200% zoom contract | PASS |
| Global Chrome, legal paths, no Terms and no local fork | PASS |
| Eleven Gate 8 implementation work packages and Gate 9 evidence matrix | PASS |
| No `TBD`, `TODO`, `fill in details` or `implement later` placeholder | PASS |

## 3. Authority and visual integrity

- Gate 6 current Manifest hash matches `C3FE6280B01D9A7AF845A88EB439CEF1B19E775050BA5FBD4B1FF6C413182713`.
- Approved Buyer Clean V0.3 hash matches `2F4B929FDE72831909B187E5F87E678E59A16AC94D06C6499CABD1A67EF3F376`.
- Approved Gate 5 Manifest hash matches `B613B97109AA69AA37B64E7320E3EF6C6F94E93A9DA89D014C1C2511215CA366`.
- All eight Gate 5 raster hashes match the approved baseline.
- No Gate 5 visual or approved Buyer Clean file changed during Gate 7.

## 4. Gate boundary checks

- User authorization is limited to Gate 7 package preparation.
- Gate 8 requires separate explicit user authorization.
- Gate 9 remains future read-only QA.
- Gate 10 remains the release, production Canonical/robots and indexing control.
- `D:\16Wordpress_nextjs` was not accessed or modified.

## 5. Result

`DOC-TDS-G7-VALIDATION-01 = 103 PASS / 0 FAIL` after final package synchronization.
