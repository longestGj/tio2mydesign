# TiO₂ Malaysia 首页整页视觉设计 V0.4

## 0. 状态与范围

| 项目 | 内容 |
|---|---|
| 版本性质 | 全站换壳计划 Task 2：Home V0.3 仅替换 Header、Mobile Menu 与 Footer |
| 当前状态 | `PROJECT_CONTROL_REVIEW_PASS` / `SHARED_COMPONENT_BASELINE_FOR_TASKS_3_7` |
| 消费基线 | Home V0.3 + `APPROVED_GLOBAL_CHROME_BASELINE` |
| 保持不变 | 页面正文、模块、顺序、文案、SEO、GEO、关键词、证据门禁、CTA 逻辑、产品分组、移动 Hero 空白修复 |
| 本轮只改 | Desktop Header、Mobile Header、Mobile Menu Open、Desktop/Mobile Footer |
| 明确不包含 | 生产实现、真实路由、组件代码、CMS、测试实现、开发交付、二级页面或部署 |
| 日期 | 2026-08-30 |

V0.3 全部文件继续保留，没有覆盖。V0.4 是视觉设计稿，不是“首页开发完成”。

## 1. V0.4 交付

| 交付 | 文件 | 实际尺寸 |
|---|---|---:|
| PC Buyer Clean | `visual-designs/homepage-full-visual-pc-clean-v0.4.png` | 1440 × 6076px |
| Mobile Buyer Clean | `visual-designs/homepage-full-visual-mobile-clean-v0.4.png` | 390 × 7224px |
| Mobile Menu Open | `visual-designs/homepage-mobile-menu-open-v0.4.png` | 390 × 844px |
| Desktop 共享状态板 | `visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.1.png` | 1440 × 1740px |
| Mobile 共享状态板 | `visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.1.png` | 390 × 2795px |
| 共享组件说明 | `06_global_header_footer_component_states_v0.1.md` | 书面规格与正式 Manifest |

## 2. Desktop Header 变化

- Header 从 V0.3 的 96px 改为批准的 84px。
- 内容区改为 1200px；Logo 显示宽度 180px。
- 固定顺序为 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Home 使用统一当前页表现：Bold、可见 `CURRENT`、3px Teal 下划线。
- Header 主 CTA 从 Navy 改为可访问深青色 Teal。
- Logo alt / 可访问名称固定为 `TiO2 Malaysia`。

## 3. Mobile Header 与 Menu Open 变化

- Header 从 V0.3 的 72px 改为批准的 64px。
- 默认顺序从旧稿的 `Logo | Menu | RFQ` 改为 `Logo | RFQ | Menu`。
- RFQ 标签固定为 `RFQ`；Menu Open 使用 `Close`。
- Menu Open 改为 Deep Navy 单列；八项顺序与 Desktop 一致。
- Home 当前项使用 Bold、4px Teal 左标记和可见 `CURRENT`。
- Menu、Close、RFQ 和菜单行均不低于 44px；390px 没有横向溢出。

## 4. Footer 变化

- V0.3 的页面专属 Footer 替换为统一 Deep Navy Global Footer。
- Desktop：品牌 + Explore + Information + 条件 Conversion + bottom bar。
- Mobile：品牌 + 两列链接 + 条件 RFQ + bottom bar。
- 删除 V0.3 Footer 中未经登记的 Company、Privacy、Terms。
- Contact 当前未达到 approved/live，因此不渲染，也不保留空位。
- Final RFQ 仍是页面内容模块，顺序继续为 `Final RFQ → Global Footer`；两者没有合并。

## 5. Home 的 RFQ 状态

Home V0.4 使用 `RFQ_ON`：

| 位置 | 状态 |
|---|---|
| Desktop Header | Request a Quote 显示 |
| Mobile Header | RFQ 显示 |
| Mobile Menu Open | Request a Quote 末项显示 |
| Desktop/Mobile Footer | Request a Quote 显示 |

RFQ OFF 的零高度闭合状态由共享组件状态板单独覆盖；本轮没有改变 Home 页面内 Final RFQ 的逻辑或内容。

## 6. V0.3 → V0.4 正文零未授权变化验证

正文区域不是重新排版，而是从批准的 V0.3 Buyer Clean 正文像素原样保留，再拼接新的全局 Header / Footer。对齐 Header 起点后逐像素比较：

| 画面 | V0.3 正文范围 | V0.4 正文范围 | 对齐尺寸 | 变化像素 | 变化区域 |
|---|---:|---:|---:|---:|---|
| PC | y=96–5677 | y=84–5665 | 1440 × 5582px | 0 | 无 |
| Mobile | y=72–6611 | y=64–6603 | 390 × 6540px | 0 | 无 |

因此排除 Header / Footer 后，V0.3 → V0.4 没有任何正文像素变化，也没有模块、文案、色彩、间距或 CTA 的未授权变更。

V0.3 关键基线文件复核 SHA-256：

| 文件 | SHA-256 |
|---|---|
| `homepage-full-visual-pc-clean-v0.3.png` | `BECF9D5F97A566DA6E018D9841314AE72BF875ACD47EC13A571767E7567D9D74` |
| `homepage-full-visual-mobile-clean-v0.3.png` | `8FC0DDE0183C62F669654EF7009F16458682EFE4E235F8977FE4A6BA891E8D9E` |
| `homepage-mobile-menu-open-v0.3.png` | `39F2601BCBC28CCDE8F451F9AA4BA1B19876BFF4F7C4806C6F258E9B670B9063` |

## 7. 移动 Hero 空白修复回归

| 指标 | V0.4 实测 | 结论 |
|---|---:|---|
| Mobile Header | 64px | 符合全局基线 |
| Mobile Hero | 560px | 与 V0.3 批准修复一致 |
| 快速采购三入口起点 | 页面 y=624px | Header 缩短 8px 后自然前移；正文内部未改变 |
| 390×844 首屏 | 三入口完整可见 | 未恢复按钮后无效空白 |

没有通过缩小 H1、正文、按钮或行高来满足首屏要求。

## 8. Footer 禁用标签与溢出检查

- PC/Mobile Footer 扫描 `Privacy / Terms / Legal / Company / Research paths / Buyer questions / 14 grades / countries`：0 命中。
- Desktop Full：`scrollWidth 1440 / viewport 1440`。
- Mobile Full：`scrollWidth 390 / viewport 390`。
- Mobile Menu Open：`scrollWidth 390 / viewport 390`。
- Desktop/Mobile 共享状态板：无横向溢出。

## 9. 资产边界

视觉稿继续引用 `brand_logo_primary_horizontal` 当前 PNG，仅作为 `CURRENT_VISUAL_DIRECTION_ASSET`。本轮没有生成生产 SVG，也没有把 PNG 描述为最终生产 Logo；该状态只在内部说明与状态板中出现，不进入 Buyer Clean 页面正文。

## 10. 阶段门槛

V0.4 的 Task 2 视觉换壳已通过项目总控复审，并作为 Tasks 3–7 的共享组件视觉基线。该状态不代表用户最终批准，不是生产资产；本任务未进入 Task 3–8、二级页面、开发交付、代码、测试、工作树、分支、提交、部署或发布。
