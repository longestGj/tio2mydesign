# MARKET-UK-001 Gate 9 Findings V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-UK-001` |
| Date | 2026-09-05 |
| Parent review | `MARKET-UK-001-G9-PCR-01` |
| State | `PROJECT_CONTROL_REVIEW_PASS / OPEN_RELEASE_BLOCKERS` |
| Gate 9 disposition | `CONDITIONAL_RETURN / RELEASE_BLOCKED` |

## 1. Blocking findings

| ID | Owner | Problem | Close condition | Current state |
|---|---|---|---|---|
| `MARKET-UK-001-G9-B01` | Applications page owners + external development | `/applications/` returns 404; five approved Application child routes return 500. | All six approved destinations return correct canonical, scoped behavior; UK page links remain unchanged. | `OPEN` |
| `MARKET-UK-001-G9-B02` | RFQ owner + external development | Local RFQ validation succeeds, but real receiver/delivery is unverified. | Production-equivalent delivery evidence with privacy, validation, error and success coverage. | `OPEN` |
| `MARKET-UK-001-G9-B03` | WordPress/Next.js development | Real UK CMS record, deployed metadata, sitemap, cache, revalidation and scope behavior are unverified. | Accessible release-candidate evidence proves the Gate 7 contract, `site_scope=tio2-my` isolation, release-state `index, follow`, self-canonical and sitemap inclusion. | `OPEN` |
| `MARKET-UK-001-G9-B04` | Project control / release reviewer | Regulatory and trade sources are time-sensitive. | Same-day release check of HSE, GOV.UK Trade Tariff and TRA, with Buyer Clean parity. | `OPEN` |
| `MARKET-UK-001-G9-B05` | Global Chrome / build owner | Rendered Logo passes, but exact packaged/served SVG bytes are not proven against the approved Manifest. | Package/served-byte SHA verification or an approved normalization contract. | `OPEN` |

These findings block release and indexing but do not require the UK page to hide approved final-reader links, change URLs, create Application pages, weaken `site_scope` isolation or alter approved copy.

## 2. Important limitation

| ID | Owner | Limitation | Current state |
|---|---|---|---|
| `MARKET-UK-001-G9-I01` | Local QA environment | A persistent loopback preview could not be retained because standalone startup was rejected by tool policy. The evidence package still contains a successful Playwright-managed production-mode session, runtime JSON and original screenshots. | `OPEN / TARGETED RECHECK_WHEN_ACCESSIBLE` |
| `MARKET-UK-001-G9-I02` | Future evidence generator | Differently cased runtime-matrix keys can collide for case-insensitive JSON consumers. Use one key-casing convention in future evidence packages. The current immutable package is not rewritten. | `NON_BLOCKING / FUTURE_RECOMMENDATION` |

## 3. Passed domains retained

The targeted correction cycle must not reopen or alter these passed page-specific domains unless new evidence shows a regression:

- page identity, H1, Breadcrumb and Markets current state;
- approved Buyer Clean and module order;
- five Applications and six representative global Grade relationships;
- PRODUCT V0.3 zero Process/comparison/UK-specific recommendation boundary;
- GB/NI REACH and CLP distinction;
- exact COO sentence and document request scope;
- evergreen Trade body and omission of dated/internal Trade Update state;
- Global Chrome fixed RFQ split and local contextual RFQ prefill/validation behavior;
- local Title/Meta/Canonical/robots/hreflang/sitemap, GEO and allowed Schema evidence;
- 1440, 768, 390 and 320/reflow presentation;
- keyboard, focus, FAQ and Mobile Menu automated/visual evidence;
- local fail-closed `site_scope=tio2-my` behavior.

## 4. Phase boundary

This findings register is read-only. D23 must not fix the implementation. External owners return new evidence after correction or environment readiness. Gate 10, deployment, production writes, publication and indexing remain unauthorized.
