# TiO₂ Malaysia 固定 RFQ Global Chrome 状态板 V0.2

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| Review ID | `GHF-FIXED-RFQ-HOME-01` |
| 当前状态 | `APPROVED` / `CLOSED` |
| 用户批准日期 | `2026-08-30` |
| 权威基线 | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` / `APPROVED_GLOBAL_CHROME_BASELINE` |
| 历史基线 | V0.1 状态板与 Home V0.4 全部保留，不覆盖、不删除 |
| 本轮范围 | 仅更新 Desktop Header、Mobile Header、Mobile Menu、Desktop/Mobile Footer 的 RFQ 可见性合同与状态板 |
| 受保护内容 | Home V0.4 全部正文像素、模块、文案、SEO、GEO、关键词、证据门禁与 CTA 逻辑 |
| 明确不包含 | 子页、Gate 6/7、开发交付、WordPress、Next.js、CMS、代码、测试实现、部署或发布 |
| 日期 | 2026-08-30 |

用户已于 2026-08-30 批准 Home 与 03–07 全站固定 RFQ 视觉包；Home V0.5 与 shared V0.2 现作为正式视觉基线保留。本次批准只关闭 fixed-RFQ Chrome 视觉复审，不代表生产组件，也不解锁其他事实、route、localization、freshness 或技术门禁。

## 1. 固定 RFQ 合同

公开 Global Chrome 的 RFQ 可见性固定为：

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

| 公开位置 | 固定呈现 |
|---|---|
| Desktop Header | `Request a Quote` Teal terminal CTA |
| Mobile Header | `RFQ` 紧凑行动 |
| Mobile Menu | `Request a Quote` 最终行动项 |
| Desktop Footer | Conversion / `Request a Quote` |
| Mobile Footer | `Request a Quote` terminal CTA |

route-safe、inventory、market、application、document、resource、support、localization、freshness 或技术证据状态均不能关闭上述入口。

若 RFQ 路由或表单尚未准备完成，只允许内部记录：

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER`

该状态阻止发布，不改变公开视觉，不禁用按钮，也不改链 Contact。

## 2. Desktop 状态板

- 画布宽度 1440px；Header 84px；内容区 1200px。
- 导航固定顺序：`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Home 与非 Home 当前页都使用 Bold + 可见 `CURRENT` + 3px Teal underline。
- Header RFQ 在两种当前页示例中均显示。
- 200% zoom 等效宽度示例继续显示紧凑 RFQ 与 Menu。
- Terminal CTA 提供 Default、Hover、Focus 三种视觉参考；Focus 使用 3px 非纯颜色外轮廓。
- Deep Navy Footer 固定包含 Conversion / `Request a Quote`。
- 状态板不提供任何公开隐藏、禁用或空槽候选画面。

## 3. 390px 状态板

- Mobile Header 固定为 `Logo | RFQ | Menu`，Header 64px。
- RFQ、Menu、菜单行、Footer 链接与 Footer RFQ 的逻辑目标均不低于 44px。
- Mobile Menu 使用 Deep Navy 单列，八项顺序与 Desktop 相同。
- Home 当前项使用 Bold + `CURRENT` + 4px Teal 左侧结构标记。
- `Request a Quote` 固定为菜单末项。
- Mobile Footer 固定显示 terminal RFQ；Contact 当前未批准/live，因此不作为 Information 链接出现，也不是 RFQ 的替代入口。
- 状态板实测 `scrollWidth 390 / viewport 390`，无横向溢出。

## 4. 品牌与 Footer 边界

| 字段 | 值 |
|---|---|
| 资产键 | `brand_logo_primary_horizontal` |
| 当前视觉资产 | `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png` |
| Logo 状态 | `CURRENT_VISUAL_DIRECTION_ASSET`，不是最终生产 SVG |
| 可访问名称 | `TiO2 Malaysia` |
| Desktop Logo | Header 180px；Footer 180px |
| Mobile Logo | Header 120px；Footer 128px |
| Footer 背景 | Deep Navy `#031B3A` |
| Terminal CTA | Accessible Teal `#007F77`；Hover `#006E68` |

Footer 固定内容仍为 Brand、Explore、Information、Conversion 和 Copyright。Footer 不渲染 Privacy、Terms、Legal、Company 独立页、页面内锚点或关键词堆砌。

## 5. V0.2 正式视觉 Manifest

| 文件 | 尺寸 | Bytes | SHA-256 |
|---|---:|---:|---|
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440 × 1380px | 110683 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` |
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390 × 1690px | 60799 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-pc-clean-v0.5.png` | 1440 × 6076px | 564577 | `0651869AFE9630431A4ED0488BDAE3731C53A93B92E5D9633865F97A6E81D503` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-mobile-clean-v0.5.png` | 390 × 7224px | 234035 | `7BD628EF4A405F62C0AE0891AB0CADF55F515EE18C02FB7A2E7FDD9E514AFF43` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-mobile-menu-open-v0.5.png` | 390 × 844px | 36187 | `80F9CD9EA93D6F96959EAD8366ADD155ED2080354D375DA9D5932620903FA243` |

书面规格：

- `D:\23MySec\pages\home\04_planning\07_global_header_footer_component_states_v0.2.md`
- `D:\23MySec\pages\home\04_planning\05_homepage_full_visual_design_v0.5.md`

工作预览与验证记录仅保存在 `D:\23MySec\99_workspace\home-global-fixed-rfq-task2\`，不属于正式视觉 Manifest，也不是生产代码。

## 6. 验证摘要

| 检查 | 实测结果 |
|---|---|
| Desktop Header RFQ | 两个当前页状态均为 1 |
| 200% 紧凑 Header RFQ | 1 |
| Desktop Footer RFQ | 1 |
| Mobile Header RFQ | 1 |
| Mobile Menu RFQ | 1 |
| Mobile Footer RFQ | 1 |
| 状态板公开禁用状态命中 | 0 |
| Contact Footer 项 | 0 |
| Mobile 最小目标高度 | 44px |
| 390px 横向溢出 | 0px |
| Focus 外轮廓 | 3px |
| Internal RELEASE_BLOCKER 注释 | Desktop 1；Mobile 1 |

## 7. 阶段门槛

`GHF-FIXED-RFQ-HOME-01=APPROVED / CLOSED`

用户批准日期：`2026-08-30`。本 Review 仅在 fixed-RFQ Chrome 视觉范围内关闭，任务硬停止在视觉终点；不得进入其他 Task、子页、Gate 6/7、开发交付、开发或发布，不得操作 `D:\16Wordpress_nextjs`。所有事实、route、localization、freshness 与技术门禁继续保持原状态。
