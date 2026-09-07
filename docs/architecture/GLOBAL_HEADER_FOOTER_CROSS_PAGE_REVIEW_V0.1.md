# TiO2 Malaysia 全站 Header / Footer 跨页总控审查 V0.1

## 1. 文档控制

| 字段 | 当前值 |
|---|---|
| Review ID | `GHC-CROSS-01` |
| 审查日期 | 2026-08-30 |
| 审查范围 | Home、03 Product-detail Template、04 PRODUCT-000、05 MARKET-000、06 RES-000、07 APP-000 |
| 权威合同 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` — `APPROVED_GLOBAL_CHROME_BASELINE` |
| 当前结论 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 用户批准日期 | 未批准 |
| 页面正文 | 不重开、不重做；沿用各页面既有批准或总控复审基线 |
| 开发状态 | 未授权；不得进入 Gate 6/7、子页或 `D:\16Wordpress_nextjs` |

本报告只审查统一 Global Header、Mobile Menu 和 Global Footer。它不批准开发、不关闭仍开放的事实或路由门禁，也不改变任何 Page ID、URL、关键词、SEO/GEO、Schema、页面职责、产品关系或页面正文状态。

## 2. 总控结论

`GHC-CROSS-01 = PASS`，等待用户对 Home 与 03–07 的统一视觉首尾作一次最终批准。二次横向像素审查发现的 04 PRODUCT-000 Logo 尺寸问题已在 V0.8 修复，并通过 `GHC-PRODUCT-02` 总控复审。

复核结果：

1. 六套书面规格和当前正式栅格资产都消费同一个 Global Chrome 规范与 `brand_logo_primary_horizontal` 视觉资产键；04 PRODUCT-000 V0.8 已直接使用同一完整源 PNG，不再使用紧裁衍生物。
2. Desktop 导航顺序一致：`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
3. Mobile Header 在 RFQ ON 时统一为 `Logo | RFQ | Menu`；RFQ OFF 时 CTA 与间距同时归零，Menu 位于最右侧。
4. 当前页状态同时使用字体强调、`CURRENT` 文本和 Teal 结构标记，不只依赖颜色。
5. 六套页面统一使用 Deep Navy Global Footer；不存在 Privacy、Terms、Legal、Company 独立页、内部说明、页面内锚点或未批准 Contact 链接。
6. RFQ ON/OFF 在 Header、Mobile Menu 和 Footer 同步；OFF 状态没有空 CTA 槽、空 Conversion 栏或按钮后异常空白。
7. 正式 Manifest 共 26 张 PNG，26/26 存在、非空，实际尺寸与各规格文件一致。
8. 所有页面正文保护检查通过，未发现未经授权的正文变化。
9. Desktop 与 390px 关键画面逐张原始细节复核通过，没有 Header/Footer 裁切、重叠、横向溢出、当前页状态缺失或移动端大空白。

## 3. 页面级审查结果

| 页面 / 任务 | 当前页 | RFQ 视觉状态 | 正式资产 | 页面 Review | 总控结论 |
|---|---|---|---:|---|---|
| Home / Task 2 | Home | 完整页 ON；共享状态板含 ON/OFF | 5 | `SHARED_COMPONENT_BASELINE_FOR_TASKS_3_7` | `PROJECT_CONTROL_REVIEW_PASS` |
| 03 Product-detail Template | Products | 完整页 ON；状态板含 ON/OFF | 3 | `GHC-PRODUCT-DETAIL-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 04 PRODUCT-000 | Products | Full-route ON；Route-safe OFF | 5 | `GHC-PRODUCT-02` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 05 MARKET-000 | Markets | S6 ON；S0 OFF | 5 | `GHC-MARKET-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 06 RES-000 | Resources | Route-safe OFF | 3 | `GHC-RES-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| 07 APP-000 | Applications | Full-route ON；Route-safe OFF | 5 | `GHF-APP-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

## 4. 正式规格与资产入口

| 页面 | 正式规格 / 说明 | 正式视觉入口 |
|---|---|---|
| Home | `pages/home/04_planning/06_global_header_footer_component_states_v0.1.md`；`pages/home/04_planning/04_homepage_full_visual_design_v0.4.md` | `pages/home/04_planning/visual-designs/` |
| 03 Product-detail Template | `docs/product-pages/04_Product_Page_Global_Chrome_Addendum_V0.1.md` | `pages/products/detail-template/04_planning/visual-designs/` |
| 04 PRODUCT-000 | `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.4.md` | `pages/products/04_planning/visual-designs/assets/` 的 V0.8 五张资产 |
| 05 MARKET-000 | `pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.2.md` | `pages/markets/04_planning/visual-designs/assets/` 的 V0.3/V0.2 五张资产 |
| 06 RES-000 | `pages/resources/04_planning/visual-designs/RES-000_FULL_VISUAL_DESIGN_V0.2.md` | `pages/resources/04_planning/visual-designs/assets/` 的 V0.2 三张资产 |
| 07 APP-000 | `pages/applications/04_planning/visual-designs/APP-000_FULL_VISUAL_DESIGN_V0.4.md` | `pages/applications/04_planning/visual-designs/assets/` 的 V0.4 五张资产 |

## 5. Header 合同复核

### 5.1 Desktop

- Logo：统一使用 `brand_logo_primary_horizontal` 当前视觉方向 PNG；它是视觉稿资产，不冒充最终生产 SVG。
- Home 必须是可见文字链接，Logo 不能替代 Home 导航项。
- 导航顺序固定且六套页面一致。
- 当前页映射正确：Home、Products、Products、Markets、Resources、Applications。
- RFQ ON 使用 Teal `Request a Quote`；RFQ OFF 同时移除按钮及其占位。
- 可见导航文字不低于 14px；行动与焦点状态符合共享状态板。

### 5.2 Mobile

- RFQ ON：`Logo | RFQ | Menu`。
- RFQ OFF：`Logo | Menu`，Menu 保持最右，未保留不可见 CTA 间距。
- Header 操作、Menu/Close 和菜单行目标不低于 44px。
- Menu Open 使用相同七个一级导航项；RFQ 仅在可用时作为最后行动行出现。
- 当前页使用左侧 Teal 标记、粗体和 `CURRENT`；没有只用颜色表达当前项。
- 390px 画面无预期横向滚动、标签裁切或按钮后空白带。

## 6. Footer 合同复核

统一 Footer 内容为：

- Brand：同一 Symbol + Wordmark 的深色背景处理；
- Explore：Home、Markets、Products、Applications；
- Information：Documents、Resources、About；
- Conversion：仅在 `RFQ_AVAILABLE=true` 时显示 Request a Quote；
- Bottom bar：`© 2026 TiO2 Malaysia.`。

当前 Contact 路由尚未 approved/live，因此不渲染，也不保留空位。Privacy、Terms、Legal、Company、Process、型号列表、Markets 列表、内部审查语句和页面内锚点均不属于 Global Footer。

## 7. 页面正文保护证据

| 页面 | 对比范围 | 结果 |
|---|---|---|
| Home | Desktop 1440×5582；Mobile 390×6540 | 变化像素 0 / 0 |
| 03 Product-detail Template | Desktop 1440×5708；Mobile 390×9310 | 变化像素 0 / 0 |
| 04 PRODUCT-000 | Desktop Full、Desktop Route-safe、Mobile Full、Mobile Route-safe | 4 组正文 RAW SHA-256 完全一致 |
| 05 MARKET-000 | Desktop S0、Desktop S6、Mobile S0、Mobile S6 | 4 组正文 RAW SHA-256 完全一致 |
| 06 RES-000 | Desktop 5,711,040 pixels；Mobile 9,059,700 pixels | 变化像素 0 / 0 |
| 07 APP-000 | Desktop Full、Desktop Route-safe、Mobile Full、Mobile Route-safe | 变化像素 0 / 0 / 0 / 0 |

因此，本次只替换 Header、Mobile Menu 和 Footer，没有重做页面正文。

## 8. SEO、GEO、关系与证据门禁

- Page ID、URL、语言、主关键词、Canonical、Schema、索引意图和页面职责均未改变。
- PRODUCT V0.2.1 继续是产品—应用—工艺的唯一共同基线：25 条 verified Application、13 个明确 Process。
- M-2377 Application/Process/推荐关系继续隐藏，`R-M2377-TDS=OPEN_HARD_GATE` 继续开放。
- M-996 与 M-2196 只保留共同的 Coatings/Sulfate 基础关系；差异、排名、选择理由、等效和替代定位继续冻结。
- 55 条 `NO_PUBLIC_MAPPING` 不渲染，也没有被改写成“不适用”。
- MARKET-000 的 22 个 route 继续 `NOT_VERIFIED_LIVE`；PT-BR 继续 `LOCALIZATION_HOLD / DO_NOT_RENDER`；Trade freshness 门禁未改变。
- RES-000 继续 inventory=0、ItemList=0，未新增公开 Resource/Trade/产品关系。
- 没有跨 `site_scope` fallback，也没有新增页面或路由。

## 9. 问题记录

| Finding | 影响 | 处理 | 当前状态 |
|---|---|---|---|
| `GHF-APP-01` 首次 V0.4 导出丢失 Header/Footer Logo | 07 APP-000 不符合统一 Logo 合同 | 使用 Task 2 同一 Logo PNG 在最终栅格层重新合成；五张正式资产逐张复核；退回版保存在 `99_workspace` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `GHC-PRODUCT-02`：04 PRODUCT-000 使用紧裁或放大的 Logo | V0.7 Desktop 可见 Logo 约 178×52，而其他页面约 141–142×39–40；Mobile logical 约 118.5×34.5，而其他页面约 93–95×26–27 | V0.8 使用 Task 2 同一完整源 PNG；Desktop 180px asset box、Mobile 120px asset box；正文哈希不变。复测 Desktop PRODUCT=142×40、Home=141×39；Mobile logical PRODUCT=95×26、Home=93×27 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

`GHC-PRODUCT-02` 已通过总控复审，当前没有未解决的阻塞级跨页差异。

## 10. 资产与文件卫生验证

- 正式视觉资产：26 张；存在 26；缺失 0；空文件 0。
- 正式规格均在 `D:\23MySec`；规划预览、退回稿和历史稿继续保存在 `99_workspace` 或原历史位置。
- 未删除任何历史视觉资产。
- 本报告及所审查规格无冲突标记；页面任务复验均报告无尾随空格。
- 未生成 WordPress、Next.js、CMS、测试、工作树、分支、合并、部署、发布、DNS 或索引成果。

## 11. 用户批准点

建议用户一次批准以下完整范围：

> 批准 Home、03 Product-detail Template、04 PRODUCT-000、05 MARKET-000、06 RES-000、07 APP-000 使用本次统一 Global Header、Mobile Menu 和 Global Footer 视觉；批准 `GHC-CROSS-01`。本批准只确认全站公共首尾视觉，不改变各页面正文、Gate、事实/路由门禁，也不授权开发或二级页面。

用户批准前：

- `GHC-CROSS-01` 保持 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；
- 各页面的 Global Chrome Review ID 不得 CLOSED；
- `00_PROJECT_STATUS.md` 继续保持 `GLOBAL_CHROME_VISUAL_REVISION_IN_PROGRESS`；
- 不进入 Gate 6/7，不启动二级页面或开发。

## 12. 版本记录

| 版本 | 日期 | 内容 | 状态 |
|---|---|---|---|
| V0.1 | 2026-08-30 | 汇总 Home 与 03–07 的 26 张正式资产、统一 Header/Footer、RFQ 状态、正文保护、SEO/GEO 与证据门禁，并登记 APP Logo 返修结果 | 初次总控 PASS，后被二次横向像素审查取代 |
| V0.1 / second visual audit | 2026-08-30 | 测量六套 Desktop/Mobile Header 实际 Logo 可见像素框，发现 PRODUCT-000 紧裁/放大 Logo；登记 `GHC-PRODUCT-02` | `CONDITIONAL_RETURN / REVISION_REQUIRED` |
| V0.1 / PRODUCT V0.8 re-review | 2026-08-30 | 独立验证同源 PNG、五张 V0.8、Desktop/Mobile 可见 Logo 尺寸、四组正文像素与原图状态；13 PASS / 0 FAIL | `GHC-PRODUCT-02=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；`GHC-CROSS-01=PASS_PENDING_USER_APPROVAL` |
