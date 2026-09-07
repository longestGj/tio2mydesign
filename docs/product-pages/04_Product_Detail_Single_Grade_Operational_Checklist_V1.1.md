# Product Detail 单型号作业清单 V1.1

> 新任务按[Gate工作流V2.0](../architecture/GATE_WORKFLOW_V2.0.md)执行；原Gate 7并入Gate 6，旧清单及批准结果原样保留。本清单不新增页面授权。

## 0. Control

| Field | Value |
|---|---|
| Checklist ID | `PRODUCT-DETAIL-SINGLE-GRADE-CHECKLIST` |
| Date | `2026-09-07` |
| Status | `APPROVED_WORKFLOW_SYNC / COMPANION_TO_SOP_V2.1` |
| Governing SOP | `03_Product_Detail_Template_Reuse_Development_SOP_V2.1.md` |

复制本清单用于每个新 Grade；它不代替 Page Brief、内容合同、Manifest 或用户授权。

## A. 身份

- [ ] Page ID：`__________`
- [ ] Grade：`__________`
- [ ] Slug：`__________`
- [ ] URL：`__________`
- [ ] Canonical：`__________`
- [ ] Primary keyword：`__________`
- [ ] Registry / CSV / Brief 三方一致
- [ ] 无 URL、关键词或 scope 冲突

## B. Gate 1 证据

- [ ] Page Intent Card 已确认
- [ ] 专属 TDS 存在
- [ ] 可见型号匹配
- [ ] 文档可读取
- [ ] 版本/身份冲突已处理
- [ ] SHA-256 已记录
- [ ] 技术字段逐项提取并保留单位/语义
- [ ] 应用、工艺、文件、市场关系逐项判定
- [ ] `verified / pending_verification / not_public` 已建立
- [ ] `CONTENT_INTENT_CONFIRMED`

## C. Gate 2 内容

- [ ] SEO title / meta / canonical / breadcrumb
- [ ] Hero 完整正文与最多两项 Hero CTA
- [ ] Positioning
- [ ] Applications
- [ ] Evaluation
- [ ] Technical columns / rows / disclaimer
- [ ] Documents
- [ ] Markets
- [ ] Sample / standalone RFQ
- [ ] 必须省略模块
- [ ] 所有 route、target Page ID 与 prefill
- [ ] Product / Breadcrumb Schema 方向
- [ ] receiver/route unavailable 行为
- [ ] `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`

## D. 开发通道

- [ ] 模块顺序与批准模板一致
- [ ] 不需要新组件/新交互/新视觉
- [ ] 技术表可由动态列/行表达
- [ ] Optional module 可整体省略
- [ ] 真实内容可在现有断点中重排
- [ ] 快速通道获用户明确批准

Disposition：

- [ ] `STANDARD_GATE_3_5_REQUIRED`
- [ ] `SATISFIED_BY_APPROVED_TEMPLATE_REUSE`

引用模板/版本：`__________`

## E. Gate 6策划总审与交付

- [ ] 原始要求与实际成果的独立综合审查完成
- [ ] 阻塞问题关闭，保留依赖/责任方明确
- [ ] Gate 9接受条件有稳定编号
- [ ] 用户决定/快速通道记录
- [ ] 完整 machine-readable JSON payload
- [ ] Gate 6 developer handoff package
- [ ] Manifest + SHA-256 + project-control closure
- [ ] JSON parse PASS
- [ ] Identity match PASS
- [ ] Technical rows/columns match PASS
- [ ] CTA prefill match PASS
- [ ] 基线型号事实泄露检查 PASS
- [ ] `indexingAuthorized=false`
- [ ] `sitemapAuthorized=false`

## F. Gate 8 派单

- [ ] 用户明确授权 Gate 8
- [ ] 目标 D16 task/thread：`__________`
- [ ] Authority set 已完整发送
- [ ] 基线回归要求已发送
- [ ] 未授权 Grade 404 要求已发送
- [ ] `site_scope=tio2-my` 和 no-fallback 已发送
- [ ] no deploy/publish/index boundary 已发送
- [ ] Handoff receipt 已记录

## G. Gate 8技术承接与返回

- [ ] 实际集成基线包含已开发依赖
- [ ] WordPress/API/Next.js映射与共享复用已核对
- [ ] 环境、数据来源、未测范围及回退说明明确

- [ ] Commit：`__________`
- [ ] Clean worktree
- [ ] Changed files
- [ ] Unit/integration tests
- [ ] Typecheck
- [ ] Lint
- [ ] Baseline regression
- [ ] New Grade content/technical/metadata/Schema evidence
- [ ] 404 and isolation evidence
- [ ] 1440/1024/768/430/390/320 screenshots
- [ ] 200% zoom / keyboard / focus / names
- [ ] Release blockers

## H. Gate 9 只读验收

- [ ] Content PASS
- [ ] Technical PASS
- [ ] SEO/GEO/Schema PASS
- [ ] Conversion/prefill PASS
- [ ] Responsive/a11y PASS
- [ ] Scope/Grade isolation PASS
- [ ] Baseline regression PASS
- [ ] Preview/noindex/sitemap PASS
- [ ] P0=0
- [ ] P1=0 或已关闭

Disposition：`__________`

## I. Gate 10

- [ ] 用户另行授权部署
- [ ] 用户另行授权发布
- [ ] 用户另行授权 index/sitemap
- [ ] 生产依赖与实际链接/receiver 已验证

未完成以上事项时，保持 `PREVIEW_ONLY`。

