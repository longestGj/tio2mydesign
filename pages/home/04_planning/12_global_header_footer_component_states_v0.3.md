# TiO₂ Malaysia Global Chrome Procurement Footer 状态板 V0.3

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| Review ID | `GHF-FOOTER-PROCUREMENT-HOME-02` |
| 当前状态 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| 用户决定日期 | `2026-08-31` |
| 候选权威基线 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md` |
| 上一批准基线 | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` / `APPROVED_GLOBAL_CHROME_BASELINE` |
| 唯一可见变化 | Footer 栏目标题由 `Conversion` 改为 `Procurement` |
| 冻结项 | 固定 RFQ、Logo、Header、Desktop/Mobile 导航、尺寸、颜色、Footer 其他文字与布局 |
| 页面边界 | Home V0.7 / V0.6.1 已使用 `Procurement`；本轮不修改 Home 正文或其他像素 |
| 明确不包含 | 其他页面重导、Gate 6 结论、Gate 7、开发交付、代码、测试、部署或发布 |

用户已批准 Footer 买家可见标题统一为 `Procurement`。本状态板只把该决定形成新的共享视觉候选基线并提交项目总控复审；不得将本稿写成 Gate 6 已通过或生产组件。

## 1. 固定 RFQ 与 Footer 合同

公开 Global Chrome 保持：

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

| 公开位置 | V0.3 固定呈现 |
|---|---|
| Desktop Header | `Request a Quote` Teal terminal CTA |
| Mobile Header | `RFQ` 紧凑行动 |
| Mobile Menu | `Request a Quote` 最终行动项 |
| Desktop Footer | Procurement / `Request a Quote` |
| Mobile Footer | `Request a Quote` terminal CTA |

`RFQ_ROUTE_READY=false` 仍只形成内部 `RELEASE_BLOCKER`，不能隐藏、禁用或改链 Contact。

## 2. Desktop 状态板

- 画布 1440×1380px；Header 84px；内容区 1200px。
- 导航顺序保持 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Home 当前项继续使用 Bold + `CURRENT` + Teal underline。
- Desktop Footer 继续使用 Deep Navy，并显示 Procurement / `Request a Quote`。
- Header、导航、CTA、Logo、颜色、尺寸和 Footer 其他内容与 V0.2 相同。

## 3. Mobile 状态板

- 画布 390×1690px；Mobile Header 64px。
- Header 固定 `Logo | RFQ | Menu`。
- Mobile Menu 完整保留八项顺序，`Request a Quote` 为最终行动项。
- RFQ、Menu、菜单行、Footer 链接和 Footer CTA 的逻辑目标均不低于 44px。
- 390px 状态板不得出现横向溢出。
- Mobile Footer 继续固定 RFQ；买家可见 Footer 不出现 `Conversion`。

## 4. 品牌与内容边界

| 字段 | 值 |
|---|---|
| Logo 资产 | `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` |
| Logo 状态 | `CURRENT_VISUAL_DIRECTION_ASSET`，不是最终生产 SVG |
| Footer 背景 | Deep Navy `#031B3A` |
| Terminal CTA | Accessible Teal `#007F77`；Hover `#006E68` |
| Footer 内容 | Brand、Explore、Information、Procurement、Copyright |

Footer 不新增 Contact fallback、Privacy、Terms、Legal、Company 独立页、页面内锚点或关键词堆砌。

## 5. V0.3 正式视觉 Manifest

正式文件已导出并登记；自动检查通过不替代项目总控人工复审。

| 文件 | 尺寸 | Bytes | SHA-256 |
|---|---:|---:|---|
| `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 1440×1380px | 110734 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` |
| `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 390×1690px | 60728 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` |

## 6. 验证要求

- Buyer-facing `Conversion` 命中为 0；`Procurement` 命中符合 Footer 设计。
- Desktop/Mobile Header、Mobile Menu 与 Footer RFQ 均固定可见。
- 公开 RFQ OFF、hidden、disabled、empty slot 和 Contact fallback 命中为 0。
- Mobile 最小交互目标不低于 44px，390px 横向溢出为 0。
- V0.2 历史文件与 SHA-256 保持不变。
- 自动检查不能替代项目总控人工视觉复审。

## 7. 阶段门槛

`GHF-FOOTER-PROCUREMENT-HOME-02=DRAFT_FOR_PROJECT_CONTROL_REVIEW`

不得自行标记 PASS、APPROVED、CLOSED 或生产就绪；不得扩展到其他页面、Gate 7 或 `D:\16Wordpress_nextjs`。
