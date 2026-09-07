# DOC-TDS Gate 6 Fresh Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Validation ID | `DOC-TDS-G6-VALIDATION-01` |
| Date | 2026-09-05 |
| Scope | Approved Gate 1–5 authority, content, evidence controls, visual assets, interactions, responsive behavior and Gate boundary |
| Result | `109 PASS / 0 FAIL` |
| Gate 7–10 | `NOT_AUTHORIZED` |

## 1. Machine validation

Command:

`node 99_workspace/DOC-TDS/gate6/audit-doc-tds-gate6.mjs`

Fresh result:

`{"review":"DOC-TDS Gate 6 fresh audit","passed":109,"failed":0,"result":"PASS"}`

Audit script SHA-256: `54F7FE4C0942FA15104DFD3CCDC7F44C46686A8724581398C23B8DC9394B120C`.

The retained Gate 5 regression also passed:

`DOC-TDS Gate 5 full visual and state contract: PASS`

## 2. Authority and identity checks

| Check group | Result |
|---|---|
| Required Gate 1–5 authority files exist | PASS |
| Registry ID, URL, page type, primary keyword, priority and evidence state match | PASS |
| Keyword-master identity, excluded terms and cannibalization boundary match | PASS |
| Technical-document decision-page identity remains locked | PASS |
| `document_types[] / one_or_more` contract remains locked | PASS |
| User's exact Gate 5 approval and Gate 6 authorization are recorded | PASS |
| Gate 7–10 remain unauthorized | PASS |

Registry SHA-256: `B60E968D4D9DB0E80C0FF19EEFF194BE6B1ACB030A8F37207654E258617D8181`.

Keyword master SHA-256: `B321FE89A5DADEA553E2D546FF9A8992D588F99E264ADA948A7E08F43463D4B4`.

## 3. Buyer Clean, SEO/GEO and request-contract checks

| Check | Result |
|---|---|
| Approved jurisdiction/language Direct Answer is present | PASS |
| FAQ #2 uses buyer language and retains single-primary-Grade behavior | PASS |
| Supplementary Grade note uses buyer language | PASS |
| SEO Title and Meta Description match V0.3 | PASS |
| `WebPage + BreadcrumbList` and no-`FAQPage` direction match V0.3 | PASS |
| Hidden/system/non-editable `source_page=DOC-TDS` contract remains present | PASS |
| Route/action failure removes visible action and Schema relationship together | PASS |
| Contact is not an automatic route-failure fallback | PASS |
| `site_scope=tio2-my` and no-cross-scope-fallback controls remain explicit | PASS |

## 4. Visual-asset integrity

All eight approved Gate 5 assets exist, match the approved dimensions and match the approved SHA-256 values.

| Asset class | Count | Result |
|---|---:|---|
| Complete Desktop / Tablet / Mobile | 3 | PASS |
| Mobile Menu | 1 | PASS |
| Selection board and real-page selection states | 3 | PASS |
| FAQ open state | 1 | PASS |

The rendered HTML remains byte-identical to the approved Gate 5 source: SHA-256 `25BBCC076190B9E53BA1E270137F12D3BD3BAB851BA44AEA7F1F1F78ECBBC75E`.

## 5. Runtime design checks

| Check | Result |
|---|---|
| Ten modules and one visible H1 | PASS |
| Three document choices, 14 Grades, five FAQs, three related paths and four steps | PASS |
| Production primary and reverse Logo bindings | PASS |
| No unsupported body imagery | PASS |
| No buyer-visible internal Gate, blocker, Claim Register, Evidence Hold, fail-closed or Schema-parity labels | PASS |
| No public-download promise | PASS |
| Grade-selection and post-submission availability boundaries remain visible | PASS |
| TDS + M-2196 state and synchronized CTA prefill | PASS |
| SDS + COA / no Grade state and synchronized CTA prefill | PASS |
| FAQ expanded semantics | PASS |
| Mobile Menu eight-item/current-page semantics | PASS |
| Visible focus on document choice, Grade and FAQ controls | PASS |
| 1440, 768 and 390 no horizontal overflow | PASS |
| 768 and 390 minimum 44px target size | PASS |
| 640px desktop-at-200%-zoom reflow proxy: no overflow and minimum 44px targets | PASS |

## 6. Interpretation boundary

- The 640px check validates the approved layout's desktop 200% reflow proxy; it does not replace future implemented-browser accessibility QA.
- Route-unavailable behavior is confirmed as an approved conditional rendering and Schema-parity contract. It is not represented as the final Buyer-visible state because the complete-site target includes the planned Request Documents route.
- Static design evidence does not prove production Canonical, robots, Schema, route, receiver, server rendering, focus management or cross-scope isolation. Those remain Gate 7 delivery-contract and Gate 8/9 implementation/QA responsibilities after separate authorization.
- No D16 repository, code, CMS, deployment, publication, DNS or indexing action was used in this validation.

## 7. Result

`DOC-TDS-G6-VALIDATION-01 = 109 PASS / 0 FAIL`.
