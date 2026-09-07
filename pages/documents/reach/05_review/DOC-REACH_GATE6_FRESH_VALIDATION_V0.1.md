# DOC-REACH Gate 6 Fresh Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Validation ID | `DOC-REACH-G6-VALIDATION-01` |
| Date | 2026-09-05 |
| Result | `135 PASS / 0 FAIL` |
| Gate 5 regression | `PASS` |
| D16 access or modification | `NONE` |

## 1. Commands

```text
node 99_workspace/DOC-REACH/gate5/test-doc-reach-gate5.mjs
node 99_workspace/DOC-REACH/gate6/audit-doc-reach-gate6.mjs
```

Observed output:

```text
DOC-REACH Gate 5 complete visual and state contract: PASS
{"review":"DOC-REACH Gate 6 fresh audit","passed":135,"failed":0,"result":"PASS"}
```

## 2. Coverage

| Area | Evidence checked | Result |
|---|---|---|
| Authority | Gate 1 Brief/Manifest, status overlay, Gate 5 approval and approved Manifest, Gate 6 activation | PASS |
| Page identity | `DOC-REACH`, `/documents/reach/`, EN/P1, Document/compliance page | PASS |
| Search ownership | Primary keyword, excluded Grade/country intent and cannibalization boundary | PASS |
| Buyer Clean | H1, Direct Answer, 11 modules, 5 FAQ, 4 request steps, 2 related paths | PASS |
| Regulatory scope | EU/EEA scope, separate GB UK REACH and NI EU REACH treatment | PASS |
| Evidence boundary | No company/Grade/arrangement registration claim; no query-only claim rendered | PASS |
| SEO/GEO/Schema | approved Title/Meta, extractable answer, `WebPage` + `BreadcrumbList`, no `FAQPage` | PASS as specification |
| Conversion | three eligible request-action groups; unavailable state removes request action and retains Hub navigation | PASS as specification |
| Shared Chrome | Global Chrome V0.5 hash and three approved Logo bindings | PASS |
| Visual integrity | seven raster assets, dimensions and SHA-256 | PASS |
| Responsive | 1440, 768, 640 reflow proxy and 390; no horizontal overflow | PASS |
| Accessibility evidence | 44px visible targets, FAQ expanded semantics, focus transfer and visible focus indicator | PASS |
| Governance | EG-006 concrete fact decision exists; no automatic permanent `DO_NOT_RENDER` | PASS |

## 3. Immutable baseline checks

| Artifact | SHA-256 |
|---|---|
| Gate 5 HTML | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |
| Gate 2 Full Buyer Clean Copy V0.1 | `CD18BA997EFE53BB5589F76D36453E62DFF6BE61A255D3224AB1D264624E8DCE` |
| Page Registry V0.2 | `B60E968D4D9DB0E80C0FF19EEFF194BE6B1ACB030A8F37207654E258617D8181` |
| Page keyword master | `B321FE89A5DADEA553E2D546FF9A8992D588F99E264ADA948A7E08F43463D4B4` |
| Global Chrome V0.5 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` |
| Gate 6 machine audit | `9E88CA6349C98CD1B7B97237019620FF13FF0E686C941E21799A7C539A1135FE` |

## 4. Official-source recheck

Fresh project-control review on 2026-09-05 checked current official pages from:

- European Commission, `REACH Regulation`;
- Your Europe, `FAQs — Registering chemicals (REACH)`;
- ECHA, `Titanium dioxide — Substance Information`, EC/List no. 236-675-5, CAS no. 13463-67-7;
- HSE, `UK REACH explained`;
- HSE, `Northern Ireland notifications`.

The sources support the page's general framework, legal-actor and jurisdiction boundary. The ECHA public substance entry does not identify or prove coverage for IKHLAS, a specific EEA actor or the supply arrangement at issue.

## 5. Validation conclusion

`DOC-REACH-G6-VALIDATION-01 = PASS`.

The first audit run exposed only test-harness assumptions copied from another page type: authority wording location, Logo binding mechanism and requestAnimationFrame focus timing. They were corrected in the audit harness after root-cause checks. The approved HTML, copy and raster assets were not changed.

