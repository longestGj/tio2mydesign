# TiO₂ Malaysia 首页整页视觉 V0.2 自检记录

## 0. 自检范围与结论边界

| 项目 | 内容 |
|---|---|
| Buyer Clean | PC 1440 × 6000；Mobile 390 × 7200 |
| Internal Review | PC 1440 × 6000；Mobile 390 × 7200 |
| 状态示意 | Menu Open 390 × 1050；Product Expanded 390 × 1200 |
| 对照预览 | `visual-designs/homepage-full-visual-preview-v0.2.html` |
| 结论边界 | 视觉与结构自检通过，不等于主控人工视觉复审通过，不等于生产实现 |

## 1. V0.1 整改对照

- [x] V0.1 文件完整保留，V0.2 使用新版本号，没有覆盖历史稿。
- [x] Buyer Clean 与 Internal Review 已拆分。
- [x] Clean 不显示 page_id、pending、not live、working copy、provisional URL 或 evidence gate。
- [x] 正文字号恢复为可读范围，不再使用 7–11px 正文压缩页面。
- [x] Mobile Clean 默认菜单关闭；Menu Open 单独交付。
- [x] Mobile Clean 默认产品组关闭；Product Expanded 单独交付。
- [x] 视觉方向资产状态只进入审核稿/文档，不进入 Clean。
- [x] 静态视觉、状态示意与生产实现已明确区分。

## 2. 实际字号核对表

| 文字层级 | 桌面实际值 | 移动实际值 | 检查结果 |
|---|---:|---:|---|
| H1 | 62px，行高 1.04 | 42px，行高 1.05 | 通过 |
| 模块 H2 | 40px，行高 1.08 | 32px，行高 1.10 | 通过 |
| H3 / 产品组 | 24–30px | 21–27px | 通过；移动重新排版而非机械缩小 |
| 正文 | 16–18px，行高 1.55–1.68 | 15–16px，行高 1.55–1.65 | 通过 |
| 导航 | 15px | 14–15px | 通过 |
| CTA | 15px | 15px | 通过 |
| 辅助文字 | 14–15px | 14px | 通过 |
| 内部审核注释 | 12–13px | 12px | 只在 Internal Review 出现 |

## 3. Buyer Clean View

- [x] PC 和 Mobile Clean 均不显示 PRODUCT-000、APP-COAT、CONV-DOC、RES-ORIGIN 等 page_id。
- [x] 均不显示 FACT COPY PENDING、TECHNICAL COPY PENDING、NOT LIVE、ANSWER PENDING、PROVISIONAL URL、Working copy、page_id 等状态词。
- [x] 未出现 evidence gate、approved procurement paths 或 grade IDs 等内部表达。
- [x] 未把 Malaysia-origin、制造、COO、批次追溯、文件可用性或履约能力写成公开承诺。
- [x] About 使用中性信息布局，没有证明型图片或事实暗示。
- [x] 当前 Logo/Icon 的资产状态没有显示在买家界面。

## 4. Internal Review Overlay

- [x] PC 和 Mobile 顶部均标明 `INTERNAL REVIEW OVERLAY / NOT BUYER UI / NOT PRODUCTION`。
- [x] page_id、证据状态、页面状态和素材状态只在黄色审核叠层出现。
- [x] About 明确标注 `VERIFIED ASSET PENDING`。
- [x] Documents 明确标注文件可用性未被声称。
- [x] Mobile Review 提供完整 14 型号核对区。
- [x] 审核叠层没有被描述为买家端组件。

## 5. Header、Hero 与采购条

- [x] PC 导航顺序完整：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote。
- [x] Home 是第一项可见文字导航，Logo 不替代 Home。
- [x] Mobile Clean 默认显示 Logo、Menu 和 RFQ，菜单关闭。
- [x] Menu Open 状态完整显示相同八项顺序。
- [x] PC/Mobile H1 均在主标题层级包含 Malaysia Titanium Dioxide。
- [x] Hero 主 CTA 为 Request a Quote，次 CTA 为 View Products。
- [x] Hero 无 Request Documents、Sample 或第三 CTA。
- [x] Hero 后采购条仅有 Markets / Products / Documents 三入口。

## 6. 模块顺序与内容边界

- [x] 主体顺序为 Markets → Products → Applications → About/Origin → Documents → Resources → RFQ。
- [x] Markets 位于 Products 之前，EU、UK、India、Brazil 完整。
- [x] EU 仅提示六国路径，不平铺六国正文。
- [x] Applications 包含 Coatings、Plastics、Masterbatch、Printing Inks、Paper。
- [x] Masterbatch 明确为 TiO₂ input，不是 finished masterbatch。
- [x] Documents 只保留 Documents Hub 与 Request Documents 两条路径。
- [x] Resources 最多两个主题入口与三个简短问答结构。
- [x] Final RFQ 只显示字段摘要和 Request a Quote，无 Sample、SLA、响应时间或正式表单流程。

## 7. Products 发现路径

- [x] 页面明确显示 14 models / 14 grades。
- [x] 四组数量保持 6 / 5 / 2 / 1。
- [x] PC Clean 四组中全部 14 个型号可见且唯一。
- [x] Mobile Clean 默认四组关闭，每组显示数量与 Expand。
- [x] Product Expanded 状态显示 Coatings 的 6 个型号，其他三组仍关闭。
- [x] Mobile Review 完整核对 14 个型号。
- [x] 型号集合：M-350、M-510、M-896、M-996、M-2196、M-895、M-200、M-108、M-210、M-340、M-886、M-52、M-2377、CR-901。
- [x] 无遗漏、无重复；没有 14 张长卡或 14 段详情。
- [x] M-2377 没有工艺归属或主应用结论。
- [x] 唯一产品主 CTA 为 View All 14 Grades；工艺入口为次级文本路径。

## 8. 移动默认状态与压缩

- [x] 完整移动首页宽度为 390px，无水平滚动或横向裁切。
- [x] 默认菜单关闭；没有用展开菜单挤占默认首屏。
- [x] 默认产品组关闭；没有把全部 14 型号机械堆叠到默认页。
- [x] Markets 为连续入口，Applications 为 2 列 + Paper 全行，字段摘要为 2 列。
- [x] 核心入口不依赖无限横向滑动。
- [x] 页面高度增长来自恢复可读字号与行高，不是重复模块或无效留白。

## 9. 图片、事实与设计风格

- [x] 未生成新的事实型图片。
- [x] 仅使用现有 Logo/Icon 视觉方向资产；Icon 只在 Hero 作为低透明度氛围。
- [x] 未使用假工厂、实验室、仓库、港口、装运、旅游地标或国旗墙。
- [x] 未把概念资产标为企业实拍、Malaysia factory 或事实证据。
- [x] 全页以 Direction A 的清洁工业品牌基底为主。
- [x] Products、Documents、Resources 使用技术编辑/采购卷宗表达，没有 KPI、筛选器、状态面板、网格看板或 SaaS 控制台气质。

## 10. 导出尺寸与溢出核对

| 文件 | 实际尺寸 | 水平溢出/裁切 |
|---|---:|---|
| `homepage-full-visual-pc-clean-v0.2.png` | 1440 × 6000 | 未发现 |
| `homepage-full-visual-mobile-clean-v0.2.png` | 390 × 7200 | 未发现 |
| `homepage-full-visual-pc-review-v0.2.png` | 1440 × 6000 | 未发现 |
| `homepage-full-visual-mobile-review-v0.2.png` | 390 × 7200 | 未发现 |
| `homepage-mobile-menu-open-v0.2.png` | 390 × 1050 | 未发现 |
| `homepage-mobile-product-expanded-v0.2.png` | 390 × 1200 | 未发现 |

## 11. 阶段与人工复审

- [x] 预览页明确区分视觉设计、交互状态示意和生产实现。
- [x] 静态稿没有被描述为真实链接、按钮、表单或响应式实现。
- [x] 未进入生产代码、实施计划或部署。
- [x] 自动核验只检查结构、文本、型号、尺寸和文件完整性。
- [ ] 主控人工视觉复审通过。

结论：V0.2 已停在主控审查门槛。自动检查不能替代人工视觉复审。
