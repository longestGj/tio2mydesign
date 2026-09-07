# TiO₂ Malaysia 全站 Header / Mobile Menu / Footer 状态板 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| Component ID | `GLOBAL-CHROME-001` |
| 消费基线 | `APPROVED_GLOBAL_CHROME_BASELINE`：`GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` |
| 本交付状态 | `PROJECT_CONTROL_REVIEW_PASS` / `SHARED_COMPONENT_BASELINE_FOR_TASKS_3_7` |
| 适用范围 | `site_scope=tio2-my` 的唯一 Desktop Header、Mobile Header、Mobile Menu 和 Footer 视觉参考 |
| 本轮授权 | 全站换壳计划 Task 2，仅建立共享状态板并重导出 Home V0.4 |
| 明确不包含 | 生产组件、真实路由、响应式代码、CMS、测试实现、开发交付或部署 |
| 日期 | 2026-08-30 |

本文件没有修改任何页面的正文、模块、SEO、GEO、关键词、证据状态、CTA 逻辑或页面职责。状态板是视觉设计审核材料，不能替代生产实现。

## 1. 唯一品牌资产

| 字段 | 值 |
|---|---|
| 资产键 | `brand_logo_primary_horizontal` |
| 当前视觉资产 | `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png` |
| 可访问名称 | `TiO2 Malaysia` |
| 点击目标 | Home |
| 文件尺寸 | 2172 × 724px |
| SHA-256 | `285E6F4F2FD2304EB102845242A2B7C20DC9E1AC2DB4D38541B1CDE44AC75DE5` |
| 治理状态 | `CURRENT_VISUAL_DIRECTION_ASSET`，不是最终生产 Logo，不得称为或伪装成 SVG |

Header 与 Footer 状态板引用同一构图。后续开发交付前仍需由批准的固定 SVG 生产资产替换；本任务没有生成、重画或声明任何生产 Logo。

## 2. Desktop 状态合同

- 画布基线：1440px；Header 内容区 1200px，左右各 120px。
- Header 高度：84px；白底；底部 1px 分隔线。
- 可见顺序固定：`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Home 不能由 Logo 代替；Home 与非 Home 使用同一当前页规则。
- 当前页：Bold + 可见 `CURRENT` + 3px Teal 下划线；生产实现时还需 `aria-current="page"`。
- `Request a Quote` 使用可访问深青色实心 CTA，不使用 Navy 主按钮。
- RFQ OFF 时按钮及其占位为 0px；其余七项保持顺序并自然闭合。
- 导航、CURRENT、Footer 正文和链接均使用 Inter / Arial fallback；状态板可见文字不低于 14px。
- 交互目标不低于 44px；状态板用金黄色外轮廓示意非纯颜色 focus。
- 200% zoom 等效宽度不足时进入紧凑 Header / Menu 路径，长标签不截断、不相互覆盖。

## 3. 390px 状态合同

- Header 高度：64px；左右 padding 16px；Logo 显示宽度 120px。
- RFQ ON 顺序固定为 `Logo | RFQ | Menu`；RFQ 与 Menu 均为至少 44×44px。
- RFQ OFF 时 RFQ 与间距同时消失，Menu 保持最右，不产生空白带。
- Menu Open 使用 Deep Navy；项目顺序与 Desktop 完全一致。
- 当前页使用 Bold + 4px Teal 左侧结构标记 + 可见 `CURRENT`。
- RFQ ON 时 `Request a Quote` 为菜单末项；RFQ OFF 时该行和间距均为 0px。
- 390px 状态板 `scrollWidth=390`，没有横向溢出；32 个抽样交互区域的最小实测高度为 44px。

## 4. Footer 状态合同

Desktop 使用四栏 + bottom bar；Mobile 使用品牌区 + 两列链接 + 条件 RFQ + bottom bar。统一 Deep Navy，不允许页面自行切换浅色 Footer。

### 4.1 固定内容

- 品牌说明：`A focused titanium dioxide purchasing platform for international industrial buyers.`
- Explore：Home、Markets、Products、Applications。
- Information：Documents、Resources、About；Contact 只在批准且 live 时出现。
- Conversion：`Request a Quote`，仅 `RFQ_AVAILABLE=true` 时出现。
- Bottom：`© 2026 TiO2 Malaysia.`

### 4.2 当前路由门禁

`CONTACT-001` 在页面登记册中为 `PLANNED_UTILITY / CONTACT_DETAILS_REQUIRED`，不是 approved/live。因此本轮 Home V0.4 与状态板不渲染 Contact，也不保留空槽。

Footer 扫描已确认不存在：Privacy、Terms、Legal、Company 独立页、Research paths、Buyer questions、14 grades、countries 等禁用标签或关键词堆砌。

## 5. RFQ ON / OFF 覆盖矩阵

| 位置 | RFQ ON | RFQ OFF | 关闭行为 |
|---|---:|---:|---|
| Desktop Header | 1 | 0 | CTA 和槽位同时移除 |
| Desktop Footer | 1 | 0 | Conversion 列重排为 0px，不保留分隔或空卡 |
| Mobile Header | 1 | 0 | Menu 回到最右 |
| Mobile Menu Open | 1 | 0 | 末项完整移除 |
| Mobile Footer | 1 | 0 | CTA 与间距完整移除 |

Home V0.4 使用 RFQ ON。RFQ OFF 仅在共享状态板中提供 route-safe 审核状态；本任务没有改变 Home 的转化逻辑。

## 6. 正式视觉交付 Manifest

| 文件 | 尺寸 | Bytes | SHA-256 |
|---|---:|---:|---|
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.1.png` | 1440 × 1740px | 122187 | `D5A8DC4CCEF4BA642B8B1FEC6175714C7726B8E67B250518762508C60015D2BD` |
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.1.png` | 390 × 2795px | 87130 | `4A7E8BDF45D16E1873848322F969250B8FC96017B2168527FE6E906CDF4B5DB2` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-pc-clean-v0.4.png` | 1440 × 6076px | 564577 | `0651869AFE9630431A4ED0488BDAE3731C53A93B92E5D9633865F97A6E81D503` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-mobile-clean-v0.4.png` | 390 × 7224px | 234035 | `7BD628EF4A405F62C0AE0891AB0CADF55F515EE18C02FB7A2E7FDD9E514AFF43` |
| `D:\23MySec\pages\home\04_planning\visual-designs\homepage-mobile-menu-open-v0.4.png` | 390 × 844px | 36187 | `80F9CD9EA93D6F96959EAD8366ADD155ED2080354D375DA9D5932620903FA243` |

正式说明文档：

- `D:\23MySec\pages\home\04_planning\06_global_header_footer_component_states_v0.1.md`
- `D:\23MySec\pages\home\04_planning\04_homepage_full_visual_design_v0.4.md`

工作预览和捕获审计只保存在 `D:\23MySec\99_workspace\home-global-chrome-task2\`，不属于正式视觉 Manifest，也不是生产代码。

## 7. 验证摘要

| 检查 | 结果 |
|---|---|
| Desktop 八项顺序 | 完整且唯一 |
| Home 当前页状态 | `CURRENT + Bold + Teal underline` |
| Mobile 默认顺序 | `TiO2 Malaysia | RFQ | Menu` |
| Mobile Menu Open | 八项完整；Home 左标记 + CURRENT |
| RFQ ON/OFF | Header、Menu、Footer 均为 `[1,0]` |
| Footer 禁用标签 | Desktop、Mobile、两张状态板均为 0 命中 |
| 390px 横向溢出 | `scrollWidth 390 / viewport 390`，无溢出 |
| Mobile 目标高度 | 最小 44px |
| Logo 状态 | PNG 仅作当前视觉方向，未伪装为 SVG |
| Contact | 未批准/live，未渲染 |

## 8. 阶段门槛

本交付已通过项目总控复审，并作为 Tasks 3–7 的共享组件视觉基线。该状态不代表用户最终批准，不是生产资产，也没有进入二级页面、开发交付、代码实现、测试实现、部署或发布。
