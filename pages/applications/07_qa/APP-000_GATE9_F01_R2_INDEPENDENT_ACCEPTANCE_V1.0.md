# APP-000 Gate 9 F01-R2 Independent Read-Only Acceptance V1.0

Date: 2026-09-08  
Review ID: `APP-000-G9-F01-R2-INDEPENDENT-01`  
Mode: `READ_ONLY`  
Targeted result: `PASS / APP-000-G9-F01-R2 CLOSED`  

## 1. Decision

The exact F01-R2 repair candidate passes the independent targeted Gate 9 recheck. The previous public internal-identity leakage is absent from every checked APP-000 and RFQ buyer surface, while APP-000 source attribution remains available only in the server-to-receiver payload. F02, F03 and F04 remain closed after shared-code regression testing. Gate 8 has no further APP-000 repair item in this bounded scope.

This result closes the four Gate 8 repair Findings. It does not close the full page Gate 9 because `APP-000-G9-NV01` still lacks physical touch, native 200% zoom and named assistive-technology evidence. The separately owned nine consumer routes and Sulfate route also remain open at integration level. Gate 10 and release remain unauthorized.

## 2. Exact candidate and admission

| Object | Reviewed identity |
|---|---|
| Worktree / branch | `D:/16Wordpress_nextjs/.worktrees/app000-gate8` / `codex/app000-gate8` |
| Implementation / evidence HEAD | `6ece488cf88f060457890ad7f37da0db752564ef` / `f6ca423acee1282b8abe71acc5a77f159578926b` |
| Build | `.next-app000-r2b` / `maNqNFg3Urit7VkLTu5KM` |
| Runtime | `http://127.0.0.1:4391` |
| Git state | clean at the declared evidence HEAD |
| Official evidence validation | `PASS`; SHA-256 `789E468C60182994517A47820FC9DE22D91C481B0C45BCA304443215219C00BD` |
| Two-round preflight | 6/6 requests `PASS`; SHA-256 `6CC996831824730E09FB0B0B52D5DED1862DB423FF78E9215D4BA8222519B9D1` |

The corrected evidence HEAD differs from the earlier reported evidence revision only in evidence receipt and validation metadata. The implementation commit and Build binding are unchanged.

## 3. F01-R2 public-boundary result

Independent raw requests and the built-in browser covered APP-000 and RFQ HTML, RSC, DOM, head, Schema, accessibility tree, inline payloads, browser state and every script actually loaded by each page. The review used the return contract's internal Page/site/source/target/Edge/contract/package/audit identity pattern.

| Surface | Result |
|---|---|
| `/applications/` HTML / RSC | HTTP 200; zero matches; SHA-256 `73766010...a16c` / `3b84db04...c61d` |
| `/applications/` DOM / head / Schema / AX / inline / browser state | zero matches in every surface |
| APP loaded client scripts | 10/10 fetched; zero matches in every script |
| `/request-a-quote/` HTML / RSC | HTTP 200; zero matches; SHA-256 `a089fd4d...0a19` / `5c5889dd...fef1` |
| RFQ DOM / head / Schema / AX / inline / browser state | zero matches in every surface |
| RFQ loaded client scripts | 10/10 fetched; zero matches in every script |
| Browser-facing context and submit responses | 204 and 200; zero public internal-identity matches |

The RFQ target URL has no query string or fragment. Grade and Application start empty and remain enabled and editable. The context endpoint returns an opaque `rfq_context` cookie with `HttpOnly` and `SameSite=Strict`. The public submit response is only `{"kind":"submission_unconfirmed"}`.

The independent receiver test used the server-local fixture and did not contact Web3Forms or any external receiver. The receiver payload contains `source_page_id=APP-000`, `site_scope=tio2-my` and `page_id=CONV-RFQ`; the access key is absent from the captured payload. This is the only reviewed surface where `APP-000` attribution appears.

## 4. Shared Chrome attribution regression

Home, Markets, Product, Document, Resource and Chloride each rendered three shared Chrome RFQ links. Every shared link used `/request-a-quote/` and exposed no source or scope attribute. Each source produced a 204 context response, an opaque HttpOnly Strict cookie, a clean RFQ target and the exact expected receiver-only source identity: `HOME-001`, `MARKET-000`, `GRADE-M350`, `DOC-TDS`, `RES-000` and `PRODUCT-PROC-CL` respectively.

The shared-path review does not resolve the separately owned Sulfate 404 or the nine consumer-route 404s recorded by the initial full-page review.

## 5. F02–F04 regression result

- `F02 PASS_STAYS_CLOSED`: 30 Grade occurrences remain distributed `8/8/7/4/2/1`; the final Edge is `APP000-EDGE-SPEC-01`; all 30 targets return 200.
- `F03 PASS_STAYS_CLOSED`: at 390px all six sections start closed, pointer and Enter open the first two, and there is no horizontal overflow; at 768px and 1440px all six start open.
- `F04 PASS_STAYS_CLOSED`: the six category names and three support-link accessible names remain exact; all nine decorative arrows are hidden from accessibility output.

## 6. Four-layer status

| Layer | Status | Meaning |
|---|---|---|
| Targeted repair | `PASS / F01_R2_CLOSED_AND_F02_F04_STAY_CLOSED` | Gate 8 repair scope is accepted; no further APP-000 repair is required |
| APP-000 page Gate 9 | `NOT_PASS / APP-000-G9-NV01_NOT_VERIFIED` | physical touch, native 200% zoom and named AT evidence remain open |
| Integration | `NOT_READY / NINE_CONSUMER_ROUTES_AND_SULFATE_OPEN` | separately owned route work remains outside this repair |
| Release | `NOT_AUTHORIZED` | Gate 10, merge, push, deployment, publication, DNS and indexing are excluded |

Machine-readable evidence: `APP-000_GATE9_F01_R2_INDEPENDENT_EVIDENCE_V1.0.json`. No D16 file was modified during this review.
