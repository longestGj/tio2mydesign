# MARKET-EU-001 Current Gate 9 Baseline Manifest V0.21

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Manifest version / date | V0.21 / 2026-09-08 |
| Manifest role | Current unique page lifecycle and Gate 9 pointer |
| Gate 0–7 | `CLOSED` under existing approved authority |
| Gate 8 | `IMPLEMENTED / INTEGRATED_LOCAL_MAIN / F03_ACCEPTED / F02_NARROWED` |
| Gate 9 | `READ_ONLY_QA_COMPLETE / NOT_PASS / F01_F02_OPEN` |
| Gate 10 | `NOT_AUTHORIZED` |
| Public state | Non-production, `noindex, nofollow`, release disabled |
| Supersedes | `pages/markets/07_qa/MARKET-EU-001_CURRENT_GATE9_BASELINE_MANIFEST_V0.20.md` |

## 1. Current Authority and Evidence

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| F02 runtime-subset independent recheck | `pages/markets/07_qa/MARKET-EU-001_GATE9_F02_RUNTIME_SUBSET_RECHECK_V0.1.md` | 4428 | `D55C43B089FA53580A0A8F8FDA67C9B163EFC5FA7D4C284B3FAB08D618FA9503` | `CURRENT / A05 PASS / A06 FAIL / F02 NARROWED` |
| F03 targeted independent recheck | `pages/markets/07_qa/MARKET-EU-001_GATE9_F03_TARGETED_RECHECK_V0.1.md` | 4766 | `C7183117616A5B7F9512C83497BF8EBE7A08AD6986CF03B3AA21F2BFE9E8CF56` | `CURRENT / F03 CLOSED / A12 PASS` |
| Initial Gate 9 acceptance | `pages/markets/07_qa/MARKET-EU-001_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md` | 9354 | `E63EFF231D0747564720EC9318545C2F2781352DAC14CD2DA8C1796A769C84A0` | `INHERITED / F01 AND REMAINDER OF F02 OPEN / F03 SUPERSEDED` |
| Prior current Manifest | `pages/markets/07_qa/MARKET-EU-001_CURRENT_GATE9_BASELINE_MANIFEST_V0.20.md` | 3987 | `E62DA5ABE41042E829DB63C9A790CE80AE041425BE1E6530074AAFBA04D7C3FF` | `HISTORICAL / SUPERSEDED` |

The approved Gate 7 package, exact Buyer Clean content, visual authority and owner boundaries remain unchanged.

## 2. Exact Current Candidates

| Evidence scope | Implementation | Evidence HEAD | Build ID | Runtime / worktree |
|---|---|---|---|---|
| F03 native 200% zoom | `cfe9ef37ca3a8d9c6b05365ca6b09bcd22baf670` | `3eccc46e860a423594121ddbc55229c71c148f55` | `odpFAtdFqE4o-SW2_HXul` | `http://127.0.0.1:3240/markets/european-union/` / `D:\16Wordpress_nextjs\.worktrees\market-eu-gate9-refresh` |
| F02 RFQ/Sample/Documents runtime subset | `cfe9ef37ca3a8d9c6b05365ca6b09bcd22baf670` | `0ef644f245603109215caa8499442c51f9d5e39e` | `jXKpL2Z3A4lYMOdMjqddR` | `http://127.0.0.1:3241` / `D:\16Wordpress_nextjs\.worktrees\conv-rfq-status-refresh` |

Both evidence sets use the same effective integrated implementation. The F02 probe is read-only, blocks every non-GET request and records zero attempted POSTs.

## 3. Condition and Finding State

| Result | Conditions |
|---|---|
| PASS | `EU-G8-A01`, `A02`, `A03`, `A05`, `A07`, `A08`, `A09`, `A10`, `A11`, `A12`, `A13` |
| FAIL | `EU-G8-A04`, `A06` |
| NOT_VERIFIED | None |

| Finding | Severity | Owner | State / closure |
|---|---|---|---|
| `MARKET-EU-001-G9-F01` | P1 | Shared Application/Market/Trade route owners | `OPEN`; maps `EU-G6-R03` and `G9-T4A5-F02`; owner-authorized same-scope routes and relation parity remain required. |
| `MARKET-EU-001-G9-F02` | P1 | CONV-SAMPLE, CONV-DOC, receiver and Privacy owners | `OPEN / NARROWED`; RFQ availability/editable EU context and Sample/Documents form availability are now verified. Full A06 validation/error/success/receiver behavior and production-equivalent delivery evidence remain required. |
| `MARKET-EU-001-G9-F03` | P1 evidence blocker | Gate 8 evidence owner | `CLOSED`; native Chromium tab zoom was set/read at 200%, measured, fully captured and independently reviewed. |

## 4. Four-Layer Status

| Layer | Status | Meaning |
|---|---|---|
| `RECHECK_SCOPE` | `PARTIAL_PASS` | F03 is closed; the newest F02 subset closes A05 and narrows A06. |
| `PAGE_GATE9` | `READ_ONLY_QA_COMPLETE / NOT_PASS` | Current tally is 11 PASS / 2 FAIL / 0 NOT_VERIFIED; F01 and narrowed F02 remain open. |
| `INTEGRATION` | `INTEGRATED_LOCAL_MAIN` | Page implementation remains `cfe9ef3…`; D23 performed no merge. |
| `RELEASE` | `NOT_AUTHORIZED` | Origin hold, shared routes, receiver/delivery, Gate 10 and explicit release authority remain open. |

## 5. Next Admissible Event

Gate 8 does not need further work on F03, RFQ availability/editable EU context, or Sample/Documents form availability unless contrary evidence appears. Shared route owners may return F01 evidence. The Sample/Documents receiver and Privacy owners may return the remaining A06 validation, error/success, receiver and production-equivalent delivery evidence. A future recheck must bind one exact `tio2-my` candidate and confirm regression stability for the 11 PASS conditions.

## 6. Boundary

This Manifest records read-only QA only. It does not authorize merge, push, deployment, publication, production WordPress writes, real form submissions, email, DNS, sitemap promotion or indexing.
