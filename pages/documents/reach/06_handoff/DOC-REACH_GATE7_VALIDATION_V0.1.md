# DOC-REACH Gate 7 Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Validation ID | `DOC-REACH-G7-VALIDATION-01` |
| Date | 2026-09-05 |
| Core contract result | `137 PASS / 0 FAIL` |
| Final governance result | `150 PASS / 0 FAIL` |
| Retained Gate 6 regression | `135 PASS / 0 FAIL` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Validation commands

Core package:

`node 99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs`

Result:

`{"validation":"DOC-REACH Gate 7 handoff package","mode":"core","passed":137,"failed":0,"result":"PASS"}`

Final package, closure and project-index synchronization:

`node 99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs --final`

Result:

`{"validation":"DOC-REACH Gate 7 handoff package","mode":"final","passed":150,"failed":0,"result":"PASS"}`

Retained upstream regression:

`node 99_workspace/DOC-REACH/gate6/audit-doc-reach-gate6.mjs`

Result:

`{"review":"DOC-REACH Gate 6 fresh audit","passed":135,"failed":0,"result":"PASS"}`

Gate 7 validator SHA-256: `462E82B7D2734279EC9D623A1645C83C8A12D59A513B43C98786BA1B3E9D7356`.

## 2. Core contract coverage

| Area | Result |
|---|---|
| `DOC-REACH` / `/documents/reach/` / EN / P1 / `site_scope=tio2-my` | PASS |
| `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` retained | PASS |
| Exact Title, Meta, H1, Canonical candidate and keyword boundaries | PASS |
| Eleven unique modules in approved order with full Buyer Clean copy | PASS |
| EU/EEA, Great Britain and Northern Ireland scope separation | PASS |
| Manufacturer, Importer and Only Representative role separation | PASS |
| Seven buyer checks, four official sources, four request steps and five FAQs | PASS |
| Current general answer retained; stronger company/entity/arrangement proposition excluded | PASS |
| `reach compliant titanium dioxide` remains query-language-only | PASS |
| `other` transport plus buyer-visible `REACH Documentation` semantic label | PASS |
| Buyer-editable request context and hidden/system/non-editable source attribution | PASS |
| Ineligible-state atomic suppression; no Contact or cross-scope fallback | PASS |
| `WebPage + BreadcrumbList`; unsupported Schema and claim nodes prohibited | PASS |
| Nine responsive widths, 44×44 targets, 200% zoom and keyboard/focus contracts | PASS |
| Global Chrome, Legal/CMP, Documents Hub, EU Market and CONV-DOC ownership boundaries | PASS |
| Eleven Gate 8 work packages and Gate 9 evidence matrix | PASS |
| No placeholder or obsolete publication-blocker syntax | PASS |

## 3. Authority and visual integrity

- Gate 6 current Manifest hash matches `9CDED213A4B259ED9E52824811779837C737640CA755AA3362399C1F7197557A`.
- Approved Buyer Clean V0.1 hash matches `CD18BA997EFE53BB5589F76D36453E62DFF6BE61A255D3224AB1D264624E8DCE`.
- Approved Gate 5 Manifest hash matches `7F39F236BBCBB9FC1073ABC35F88DE6040CD60FF624B5A0547A0BB1BAFC29E7A`.
- Page Registry and keyword-master hashes match their Gate 6 authority.
- No Gate 5 visual, approved Buyer Clean or Gate 6 authority file changed during Gate 7.

## 4. Decision and boundary checks

- User decision `保留当前通用答案；授权 Gate 7。` is recorded in the decision record and Evidence Gap register.
- `EG-006` is closed for the current baseline only; this does not declare the stronger proposition permanently false.
- Any future stronger claim requires a new scoped user decision and suitable legal-entity/supply-arrangement evidence.
- Gate 8 requires separate explicit authorization; Gate 9 and Gate 10 remain later stages.
- `D:\16Wordpress_nextjs` was not accessed or modified.

## 5. Findings and result

- P0: 0.
- P1: 0.
- Required P2 before handoff readiness: 0.

`DOC-REACH-G7-VALIDATION-01 = 150 PASS / 0 FAIL` after final package synchronization.

