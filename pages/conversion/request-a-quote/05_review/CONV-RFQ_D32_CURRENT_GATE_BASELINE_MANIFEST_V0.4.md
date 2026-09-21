# CONV-RFQ D32 Current Gate Baseline Manifest V0.4

日期：2026-09-20。CONV-RFQ唯一当前生命周期入口。继承V0.3绑定的固定D32候选和首轮独立验收；用户已接受F01/F02轻微偏差并明确免除原生200%浏览器、实体触控和命名辅助技术证据，见[用户偏差接受与Gate 9关闭](../07_qa/CONV-RFQ_D32_GATE9_USER_TOLERANCE_CLOSEOUT_V1.0.md)。

| Field | Value |
|---|---|
| Page ID / URL | `CONV-RFQ` / `/request-a-quote/` |
| Canonical / scope | `https://tio2products.com/request-a-quote/` / `tio2-my` |
| Implementation | `f407f0ee526ac3d8fe1dc3efefa31364dc191030` |
| Evidence / observed HEAD | `616662613d170420dce6bcddd5f026652bc3b0d8` / clean |
| Build | `wp-815f8debd4b2129b21a8cc67d8c410dea58e8986b4e3d38b2450ebbeeaaaeb58` |
| RECHECK_SCOPE_STATUS | `PASS_WITH_USER_APPROVED_TOLERANCE` |
| PAGE_GATE9_STATUS | `READ_ONLY_QA_APPROVED / CLOSED` |
| INTEGRATION_STATUS | `NOT_READY / PRODUCTS_AND_EXTERNAL_ROUTES_OPEN` |
| RELEASE_STATUS | `NOT_AUTHORIZED / SIX_EXTERNAL_DEPENDENCIES_OPEN` |

## Current disposition

- 13 AC remain technically PASS.
- AC-09 remains `NOT_VERIFIED / INTEGRATION` because same-branch Products is absent; shared implementation and Home regression passed.
- AC-11 is accepted and closed for this exact candidate by user decision. F01/F02 are `USER_ACCEPTED_TOLERANCE / CLOSED` rather than technical test PASS.
- Native browser UI 200% zoom, physical touch and named assistive technology are `USER_WAIVED / NOT_TESTED`; no further evidence is required for this candidate.
- Page implementation required repairs: 0. Page Gate 9 evidence still required: 0.

## Dependency and release boundary

`RFQ-D32-DEP-01` through `DEP-06` remain open without relabeling. Provider binding/receipt, operational Privacy, Privacy/Sample/Documents routes, Cookie/CMP and conditional Analytics/consent remain Integration/Release work. Accurate links stay visible; no owner may hide, clone or redirect them to manufacture readiness.

No real submission, production receipt claim, push, PR, merge, deployment, publication, DNS, sitemap, indexing or Gate 10 is authorized. Page Gate 9 closure cannot be used as release authorization.

## Supersession

V0.4 supersedes V0.3 only as the current pointer. V0.3 remains the pre-decision return record; the first independent report remains the exact technical observation. All approved Gate 2, Gate 5, Gate 7 and D32 Gate 6 inputs remain unchanged.
