# TiO₂ Malaysia 首页整页视觉设计 V0.5

## 0. 状态与范围

| 项目 | 内容 |
|---|---|
| Review ID | `GHF-FIXED-RFQ-HOME-01` |
| 当前状态 | `APPROVED` / `CLOSED` |
| 用户批准日期 | `2026-08-30` |
| 权威基线 | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` / `APPROVED_GLOBAL_CHROME_BASELINE` |
| 版本性质 | RFQ 全站固定规则下的 Home Global Chrome 版本化重导出 |
| 视觉来源 | 已通过项目总控复审的 Home V0.4 |
| 本轮允许改变 | Header、Mobile Header、Mobile Menu、Footer 的 RFQ 合同及画布边界 |
| 实际视觉变化 | Home V0.4 已完整显示固定 RFQ，因此 V0.5 Buyer Clean 与 V0.4 整图像素一致 |
| 受保护内容 | Home 正文、模块、文案、SEO、GEO、关键词、证据门禁、CTA 逻辑与移动 Hero 修复 |
| 明确不包含 | 子页、Gate 6/7、开发交付、WordPress、Next.js、CMS、代码、测试实现、部署或发布 |
| 日期 | 2026-08-30 |

V0.4 全部文件继续作为历史批准视觉基线保留。用户已于 2026-08-30 批准 Home 与 03–07 全站固定 RFQ 视觉包；Home V0.5 与 shared V0.2 现作为正式视觉基线保留。本次批准只关闭 fixed-RFQ Chrome 视觉复审，不代表生产资产，也不解锁其他事实、route、localization、freshness 或技术门禁。

## 1. V0.5 交付

| 交付 | 文件 | 尺寸 |
|---|---|---:|
| PC Buyer Clean | `visual-designs/homepage-full-visual-pc-clean-v0.5.png` | 1440 × 6076px |
| Mobile Buyer Clean | `visual-designs/homepage-full-visual-mobile-clean-v0.5.png` | 390 × 7224px |
| Mobile Menu Open | `visual-designs/homepage-mobile-menu-open-v0.5.png` | 390 × 844px |
| Desktop 共享状态板 | `visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440 × 1380px |
| Mobile 共享状态板 | `visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390 × 1690px |
| 共享组件说明 | `07_global_header_footer_component_states_v0.2.md` | 固定 RFQ 合同、状态与正式 Manifest |

## 2. Home 固定 RFQ 表面

| 画面 | 固定 RFQ 表面 |
|---|---|
| PC Buyer Clean | Desktop Header + Desktop Footer |
| Mobile Buyer Clean | Mobile Header + Mobile Footer |
| Mobile Menu Open | Mobile Header + Mobile Menu 最终行动项 |
| Desktop 状态板 | Home Header + 非 Home Header + 200% Compact Header + Footer |
| Mobile 状态板 | Mobile Header + Mobile Menu + Mobile Footer |

Header 与 Footer 使用 global / terminal tier Accessible Teal solid。Hero 与 Final RFQ 等正文 contextual tier 保持 V0.4 合同，本轮没有增加、删除或改变正文 CTA。

## 3. Buyer Clean 边界

V0.5 的三张 Home Buyer Clean 只表现固定可用的 RFQ 入口：

- 不提供关闭 RFQ 的公开变体；
- 不把 RFQ 表现为不可用按钮；
- 不保留空白 RFQ 槽位；
- 不使用 Contact 作为 RFQ 的替代或失败回退；
- 不因 route-safe、资料、市场、应用、文件或技术门禁改变 Global Chrome。

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER` 只存在于内部共享状态板与书面规格，不进入三张 Home Buyer Clean。

## 4. V0.4 → V0.5 像素保护验证

由于 Home V0.4 已经使用固定可见 RFQ，V0.5 三张 Home 视觉采用版本化原样重导出。完整图像 SHA-256 与 V0.4 一致：

| 画面 | V0.4 SHA-256 | V0.5 SHA-256 | 完整图像一致 |
|---|---|---|---|
| PC | `0651869AFE9630431A4ED0488BDAE3731C53A93B92E5D9633865F97A6E81D503` | `0651869AFE9630431A4ED0488BDAE3731C53A93B92E5D9633865F97A6E81D503` | 是 |
| Mobile | `7BD628EF4A405F62C0AE0891AB0CADF55F515EE18C02FB7A2E7FDD9E514AFF43` | `7BD628EF4A405F62C0AE0891AB0CADF55F515EE18C02FB7A2E7FDD9E514AFF43` | 是 |
| Mobile Menu | `80F9CD9EA93D6F96959EAD8366ADD155ED2080354D375DA9D5932620903FA243` | `80F9CD9EA93D6F96959EAD8366ADD155ED2080354D375DA9D5932620903FA243` | 是 |

受保护正文逐像素检查：

| 画面 | V0.4 / V0.5 对齐矩形 | 变化像素 |
|---|---:|---:|
| PC 正文 | x=0, y=84, 1440 × 5582px | 0 |
| Mobile 正文 | x=0, y=64, 390 × 6540px | 0 |
| Mobile Menu 视觉 | x=0, y=0, 390 × 844px | 0 |

因此 V0.5 没有改变 Home V0.4 的正文或公共 Chrome 像素；本轮变化是 RFQ 可见性治理合同与正式版本身份。

## 5. Header、Menu 与 Footer 回归

- Desktop Header：84px；Home 可见；八项顺序完整；Home 使用 `CURRENT + Bold + Teal underline`；RFQ 固定显示。
- Mobile Header：64px；顺序为 `Logo | RFQ | Menu`；RFQ 和 Menu 至少 44px。
- Mobile Menu：Deep Navy；八项顺序完整；Home 使用左侧 4px 标记与 `CURRENT`；RFQ 为末项。
- Desktop/Mobile Footer：Deep Navy；Conversion / `Request a Quote` 固定显示。
- Contact 仍未 approved/live，因此不作为 Information 链接出现，但其状态不影响 RFQ。
- Footer 结尾与画布底部闭合；PC 底行 1440/1440、Mobile 底行 390/390 均为非白色 Footer 像素。

## 6. 响应式、交互与资产检查

| 检查 | 结果 |
|---|---|
| PC 宽度 | 1440 / 1440，无横向溢出 |
| Mobile Full | 390 / 390，无横向溢出 |
| Mobile Menu | 390 / 390，无横向溢出 |
| Mobile 最小触控高度 | 44px |
| Mobile Hero | 560px，V0.4 修复保持 |
| 快速采购入口起点 | y=624px，V0.4 保持 |
| Logo | 同一 `brand_logo_primary_horizontal` 视觉方向 PNG |
| Hover | Terminal Teal `#006E68` 参考已覆盖 |
| Focus | 3px 外轮廓，不只依赖颜色 |

## 7. RELEASE_BLOCKER 边界

本任务没有检查或声明 `/request-a-quote/` 已经可发布。若后续只读验收发现 `RFQ_ROUTE_READY=false`，必须阻止发布，但公开 Header、Mobile Header、Mobile Menu 与 Footer 的 RFQ 仍保持显示。

## 8. 阶段门槛

`GHF-FIXED-RFQ-HOME-01=APPROVED / CLOSED`

用户批准日期：`2026-08-30`。本 Review 仅在 fixed-RFQ Chrome 视觉范围内关闭，任务硬停止在视觉终点；不得进入其他 Task、子页、Gate 6/7、开发交付、开发或发布，不得操作 `D:\16Wordpress_nextjs`。所有事实、route、localization、freshness 与技术门禁继续保持原状态。
