# DOC-REACH Gate 8 Implementation Intake and Gate 9 Acceptance V0.1

## 1. Decision

| Item | Decision |
|---|---|
| Page | `DOC-REACH` — `/documents/reach/` |
| Gate 8 | `IMPLEMENTATION_RETURN_ACCEPTED / CLOSED` |
| Gate 9 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Lifecycle | `READ_ONLY_QA_APPROVED` |
| Disposition | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Review ID | `DOC-REACH-G9-PCR-01` |
| Targeted return | `DOC-REACH-G9-P1-DEP-01 = VERIFIED_FIXED / CLOSED` |
| Gate 10 | `NOT_AUTHORIZED` |

This acceptance closes the page implementation and independent read-only QA. It does not authorize merge, deployment, production CMS writes, DNS, public release or indexing.

## 2. Inspected implementation identity

- Development repository: `D:\16Wordpress_nextjs`.
- Reviewed worktree: `C:\Users\longe\.codex\worktrees\609c\16Wordpress_nextjs`.
- Branch: `codex/doc-reach-gate8-evidence`.
- Initial implementation: `2d4c7013d7286c7a8b08614ea4b9c1d3b868bd93`.
- Evidence correction: `4344bfeea7107699604072bea4b3eefe82a03e83`.
- Targeted dependency verification correction: `036ea7a8f838acd93ef2f68865b9d6683d123cff`.
- Final inspected worktree status: clean.
- Reviewed source payload SHA-256: `F9D2A1F14BE61EEEB585454FFC139D9AC5051B1515950F39748E8F0E1CF0B339`, identical across the approved D23 Gate 7 payload, the D16 fixture and the WordPress configuration.

The targeted correction changes the integrated test fixture, Playwright coverage and verification records only. It does not change the approved Buyer Clean content, module order, EG-006 decision, production page components, SEO/Schema contract or shared Chrome implementation.

## 3. Independent Gate 9 findings

### 3.1 Page acceptance — PASS

- one H1 and all eleven approved modules render in the locked order;
- the generic REACH answer is retained without expanding to a company-specific registration, importer, Only Representative, registration-number or all-Grade claim;
- EU/EEA, Great Britain and Northern Ireland boundaries remain separate;
- five FAQ answers exist in initial HTML and the accordion preserves keyboard focus;
- all three eligible request actions use `document_types[]=other` plus visible/editable `REACH documentation` context;
- Back/Forward restores the semantic request state and raw `other` is not shown to the buyer;
- canonical, robots, title, description, Open Graph, Twitter and the allowed `WebPage` / `BreadcrumbList` JSON-LD graph match the Gate 7 contract;
- `site_scope=tio2-my`, missing/wrong-scope failures, cache transitions, denylist scans and no-cross-scope-fallback behavior pass;
- Desktop, Tablet, Mobile, Mobile Menu, FAQ focus and receiver-unavailable states were visually inspected without a page-level blocking discrepancy.

### 3.2 Fresh verification — PASS

- focused unit/integration/infrastructure and affected shared-page regression: `44 files / 323 tests PASS`;
- TypeScript: PASS;
- ESLint: `0 errors`; two unchanged warnings remain outside this page in the Resources prototype;
- optimized Malaysia build: PASS, `37/37` generated routes;
- integrated production-equivalent Playwright: `25/25 PASS`, `0 unexpected`, `0 flaky`, `0 skipped`;
- eight named dependency observations: all PASS;
- evidence SHA-256 manifest: `0` mismatches;
- `git diff --check`: PASS;
- final development worktree: clean.

### 3.3 `DOC-REACH-G9-P1-DEP-01` closure

The first Gate 9 probe found that the earlier controlled fixture declared readiness while Documents Hub, RFQ and Legal/CMP targets were not actually available in that runtime. The Controller returned one P1 finding to development.

The correction now starts one optimized Next.js build with one scoped, fail-closed CMS fixture and directly visits each named dependency. The following all return their own Malaysia page, expected self-Canonical and `data-site-scope=tio2-my`, and pass an appropriate interaction:

| Dependency | Result |
|---|---|
| `DOC-000 /documents/` | `200 / PASS`; Grade selection reaches CONV-DOC with Grade prefilled |
| `MARKET-EU-001 /markets/european-union/` | `200 / PASS`; shared RFQ reaches the rendered form |
| `CONV-DOC /request-documents/` | `200 / PASS`; validation and REACH request flow covered |
| `CONV-RFQ /request-a-quote/` | `200 / PASS`; validation, negative retry and intercepted positive receipt covered |
| Privacy EN `/privacy-policy/` | `200 / PASS`; contents navigation works |
| Privacy BM `/ms/privacy-policy/` | `200 / PASS`; contents navigation works |
| Cookie Policy `/cookie-policy/` | `200 / PASS`; contents navigation works |
| Cookie Settings/CMP | `PASS`; dialog opens, traps focus, closes with Escape, restores focus and reaches Cookie Policy without writing consent |

`DOC-REACH-G9-P1-DEP-01` is therefore `VERIFIED_FIXED / CLOSED`.

## 4. Official-source freshness

The four approved official URLs were reachable during this Gate 9 review and no approved source URL, jurisdiction boundary or displayed source date drift was found:

- European Commission REACH Regulation: `https://environment.ec.europa.eu/topics/chemicals/reach-regulation_en`;
- Your Europe REACH FAQ: `https://europa.eu/youreurope/business/product-rules-compliance/chemicals-and-hazardous-substances/registering-chemicals-reach/faq/index_en.htm`;
- HSE UK REACH explained: `https://www.hse.gov.uk/reach/about.htm`;
- HSE Northern Ireland: `https://www.hse.gov.uk/REACH/northern-ireland.htm`.

This freshness check must be repeated immediately before publication and does not authorize a legal conclusion beyond the approved copy.

## 5. Recorded release blockers

These items do not reopen the accepted DOC-REACH content or page implementation, but they block Gate 10/public release until separately closed:

1. `/applications/` remains a Malaysia shared-navigation `404`. APP-000 is outside the DOC-REACH task and no page-local navigation fork or fallback is authorized.
2. The reviewed branch is not the production baseline; integration against the current development baseline remains a D16 responsibility.
3. Real production CMS values, approved recipients, Web3Forms production account/key placement, mailbox receipt and production privacy/data-flow evidence still require release-environment verification.
4. URL/evidence mapping remains `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` until the applicable publication controls close.
5. Gate 10, merge, deployment, production data writes, DNS, public release and indexing have not been authorized.

## 6. Evidence inspected

- `docs/verification/document-reach/DOC-REACH_GATE8_LOCAL_VERIFICATION_2026-09-05.md`;
- `docs/verification/document-reach/DOC-REACH_G9_DEP01_RETURN_2026-09-05.md`;
- `docs/verification/document-reach/doc-reach-dep01-command-output.txt`;
- `docs/verification/document-reach/doc-reach-dep01-playwright-results.json`;
- `docs/verification/document-reach/doc-reach-dependency-ledger.json`;
- `docs/verification/document-reach/doc-reach-dep01-evidence.sha256`;
- original nine-width, state and dependency screenshots.

## 7. Decision record

- User authorization: `授权 Gate 8， 然后完成Gate9` and `你负责跟踪开发的进度，并且审查Gate8 ，直到Gate9完成为止。`
- User escalation: `已经开发完了，你去审查一下，你这个一个小时检查一下没有用`.
- Controller action: immediate read-only review, one P1 targeted return, development correction, evidence reinspection and Gate 9 closure.
- Monitoring: hourly polling was replaced by immediate active review; the temporary follow-up automation is stopped after this Gate 9 closure.

