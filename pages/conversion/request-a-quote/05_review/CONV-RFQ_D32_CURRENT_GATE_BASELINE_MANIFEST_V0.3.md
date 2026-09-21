# CONV-RFQ D32 Current Gate Baseline Manifest V0.3

## Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-RFQ-D32-CURRENT-GATE-MANIFEST-03` |
| Page ID / URL | `CONV-RFQ` / `/request-a-quote/` |
| Canonical | `https://tio2products.com/request-a-quote/` |
| Locale / site scope | `en` / `tio2-my` |
| Date | `2026-09-20` |
| Gate 1–6 | `APPROVED / CLOSED` |
| D32 Gate 8 | `RETURNED_FOR_TARGETED_REPAIR` |
| D32 Gate 9 | `INITIAL_REVIEW_COMPLETE / NOT_PASS` |
| Page Gate 9 | `NOT_PASS / AC11_RESPONSIVE_VISUAL_FAIL` |
| Integration | `NOT_READY / PRODUCTS_AND_EXTERNAL_ROUTES_OPEN` |
| Release | `GATE_10 / PR / PUSH / MERGE / DEPLOYMENT / PUBLICATION / DNS / SITEMAP / INDEXING NOT_AUTHORIZED` |

This is the only current CONV-RFQ lifecycle pointer. It supersedes D32 Manifest V0.2 after independent Gate 9 reviewed the immutable D32 candidate and returned it for two page implementation repairs plus one remaining native-zoom evidence item. V0.2 and all earlier D16 records remain immutable historical evidence for their exact objects.

## Reviewed candidate

| Layer | Identity |
|---|---|
| Worktree / branch | `D:/32Wordpress_new/.worktrees/conv-rfq-gate8` / `codex/conv-rfq-gate8` |
| Baseline | `ce4147c7076112934b3dc6d8d97e983efb045f2f` |
| Implementation | `f407f0ee526ac3d8fe1dc3efefa31364dc191030` |
| Evidence / observed HEAD | `616662613d170420dce6bcddd5f026652bc3b0d8` / clean |
| Build | `wp-815f8debd4b2129b21a8cc67d8c410dea58e8986b4e3d38b2450ebbeeaaaeb58` |
| Runtime | `http://127.0.0.1:8242/request-a-quote/`; `tio2-my` |
| Gate 8 Manifest SHA | `39FF4ED7653E22068BD9E1D91F7CD0684DFA11236EE7C8B776A3B55FD3E5F77C` |
| Gate 9 report | `../07_qa/CONV-RFQ_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md` |

Independent validator: 175 PASS / 0 FAIL. Two-round runtime preflight: PASS. Browser/content/security/CMS/scope/receiver evidence supports 13 AC PASS; AC-09 remains integration-not-verified because Products is absent; AC-11 fails.

## Current return scope

| ID | Status | Required closure |
|---|---|---|
| `CONV-RFQ-D32-G9-F01` | `OPEN / MUST_FIX` | Make breadcrumb Home and inline form Privacy link meet the 44px target contract; expand geometry tests to all visible interactive elements and both dimensions at eight widths |
| `CONV-RFQ-D32-G9-F02` | `OPEN / MUST_FIX` | Restore approved Gate 5 page-specific visual result for Website span, group divider treatment and Other request types panel; preserve exact copy, semantic fieldsets and shared D32 Chrome |
| `CONV-RFQ-D32-G9-E01` | `OPEN / NOT_VERIFIED` | Provide candidate-bound native browser UI 200% zoom evidence, or obtain explicit user scope exception |

The user's explicit decision waives physical-device touch and named assistive-technology evidence for this page; those items are not in the return scope.

## Unchanged dependency and release boundary

`RFQ-D32-DEP-01` through `DEP-06` remain open under their original owners and layers. The accurate Privacy/Sample/Documents links remain visible; their 404 readiness plus Products absence keep Integration/Release not ready. No real receiver submission, production receipt claim or dependency relabeling is authorized.

Gate 8 must return a new committed implementation/evidence candidate and refreshed machine handoff for targeted Gate 9 recheck. This return does not authorize push, PR, merge, deployment, publication, DNS, sitemap, indexing or Gate 10.

## Supersession

V0.3 supersedes V0.2 only as the current lifecycle pointer. V0.2 remains the exact dispatch/start-state record. The approved Gate 2, Gate 5, Gate 7 and D32 Gate 6 inputs remain unchanged.
