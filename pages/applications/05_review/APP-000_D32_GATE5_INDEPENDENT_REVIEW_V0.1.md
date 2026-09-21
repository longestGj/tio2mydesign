# APP-000 D32 Gate 5 独立视觉审查 V0.1

2026-09-20 · `INDEPENDENT_REVIEW / INITIAL` · Dispatch `APP000-D32-G5-INITIAL-20260920-01`

结论：`REVIEW_PASS`。输入准入有效；mandatory **0**，advisory **0**，未解决合同冲突 **0**。这是合并 Gate 4 的唯一最终独立审查结果，不是 Gate 4 关闭、Gate 6 启动或 D32 实现/发布批准。

## 1. 对象、独立性与准入

实际 Reviewer：`/root/app_gate5_independent_review`；制作作者：`/root/app_gate4_execution`。未创建子代理，未修改候选、上游、Manifest、Status、Index、关闭/交接记录或 D32，未提交 Git commit。

唯一接收入口为 [Gate4→5 handoff](APP-000_D32_GATE4_GATE5_HANDOFF_V0.1.md)，候选目录为 `pages/applications/04_planning/d32-gate4-v0.1/`。批准内容与结构权威为 APP 当前 Manifest V0.2、批准 B/C、Gate 3 V0.2 冻结及其独立复审/总控关闭/交接。Manifest 中 Gate 4 授权状态与新提交候选的待审状态分别适用，不冒充已批准。

| 对象 | bytes | SHA-256 / identity |
|---|---:|---|
| Bundle | — | `sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618` |
| application-visual.html | 32821 | `1575cfed2fd93857a4ad0a49421099cef24ed34cc22e78cf49dad7c0f69c3cb4` |
| visual.css | 4317 | `1393717126ededfceac9f44e6d66b62376104433cd6dc5959275471d5357088a` |

已读取根入口和适用 Index、当前工作流/统一标准、治理适用章节、Gate 5 Agent V0.5、布局交互验证 V0.8 及独立视觉审查方法 V0.2、两项 Gate 交接合同、页面 Brief/Playbook/登记与关键词行、批准 B/C、关系增补及 Gate 3 关闭链；核对 RootPageHero/open-white、品牌/CTA、Chrome/法律区、生产 SVG 和当前 Home 家族证据。历史五步、Process、FAQ/FAQ-open、六 route variants 不适用，未恢复。

独立标准库复算 30 个冻结成员、35 个输入、10 个依赖、2 个源、1 个制作 dispatch 输入，以及 14 张正式 PNG 的 bytes/SHA/IHDR 尺寸；按实际成员重新序列化并计算 bundle。全部一致。另核对 source-lock、input-index、formal-render 与 evidence-index 的绑定；DPR1 来源于实际捕获记录及已读渲染脚本，不仅由 PNG 宽度推断。审查结束后再次复算全部冻结成员、源与依赖，无漂移。

只读命令 `node pages/applications/04_planning/d32-gate4-v0.1/finalize.cjs --verify` 返回 PASS（135 作者断言、14 正式图、0 drift）。已检查该 verifier 的输入与范围；它仅为交接有效性佐证，不是本报告的独立质量结论。

## 2. 批准内容、关系与共享组装

独立抽取 main 的全部可见文本，与 B 从 breadcrumb 至最终 RFQ 双向标准化比对一致。仅单独识别受控 RootPageHero eyebrow `Applications` 和三步序号；共享 Hero 合同明确允许 eyebrow，Gate 3 V0.2 复审 §2/§3 已明确同一边界，F01 删除对象是 M2–M5 四条额外 eyebrow，而非该共享字段。

Gate 4 与闭合 Gate 3 的 `<body>…</body>` 内容逐字一致，唯一实质源差异为 head 增加视觉样式表；另有 body 外文件末尾换行。六集合关系逐项核对为 `8/8/7/4/2/1 = 30`，无新增/漏失/交叉。结构为五模块、三步、零 Process、零 FAQ。五应用动作的 owner 与登记路径、全部型号 URL、三个采购路径、两个正文 RFQ 逐项检查，无 query/preselection 或替代 URL。

Header、Footer、Cookie dialog、共享 CSS 和行为分别与受控 `render-shared-chrome.cjs` 结果精确一致。生产 SVG/Inter 依赖身份有效，Applications 当前导航、共享固定 RFQ、法律入口完整；没有页面私有 Chrome 分叉。Footer 以共享 owner 为准，不从 B 的只读投影恢复 Contact。

## 3. 14 张正式图的实际视觉检查

每张均实际打开；长图以原像素宽的连续重叠内存切片查看，不以缩略图替代，不生成或保存副本。下列 offset 为实际查看入口，单片最高 1800px，末片到图底；完整覆盖 Header 至 Footer。

| 正式 PNG（均在候选目录，前缀 APP-000_G4_） | 原始尺寸 | 查看范围 |
|---|---|---|
| FULL_1440 | 1440×3794 | y=0/1600/3200 |
| FULL_1024 | 1024×4106 | y=0/1700/3400 |
| FULL_768 | 768×4613 | y=0/1700/3400 |
| FULL_390 | 390×6756 | y=0/1700/3400/5100 |
| FULL_320 | 320×7166 | y=0/1700/3400/5100/6800 |
| ROUTE_GRADE_ONLY_390 | 390×6470 | y=0/1700/3400/5100 |
| ROUTE_APPLICATION_ONLY_390 | 390×6437 | y=0/1700/3400/5100 |
| ROUTE_NONE_390 | 390×4646 | y=0/1700/3400 |
| COOKIE_390 | 390×1000 | 全图 |
| COOKIE_320 | 320×1000 | 全图 |
| MENU_390 | 390×1000 | 全图 |
| PRIMARY_FOCUS_390 | 390×1000 | 全图 |
| GRADE_FOCUS_768 | 768×1000 | 全图 |
| NAV_HOVER_1440 | 1440×1000 | 全图 |

Hero 为开放白底、无私有左装饰线或外围框；标题、正文、索引和 CTA 层级清楚。集合卡片、三步和采购区的列数/间距有连续节奏；320px 长标签、型号、最终 RFQ 说明和法律区可读，无裁切、重叠或异常断层。不可用型号为中性无边框普通文字，不伪装按钮；缺失目标的动作及对应条件区域正确消失。Cookie 两窄宽完整，Menu 当前项与 RFQ 区分明确；focus/hover 图表达的状态与实际样式一致。

Home 对照身份来自当前 Home Manifest V1.12/其 Gate 9 review：实现 `a75572a36cc50e820b640fca663a3a60594029cb`，证据 `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6`。实际查看 Home `runtime-1440.png` 首段、`runtime-768-segment-0.png`、`runtime-768-footer-viewport.png`、`runtime-390-top-readable.png`，对照 APP 同宽证据。Inter、Deep Navy/Malaysia Teal、开放白底 Hero、Logo/共享 Chrome、克制卡片和 Footer 家族一致。APP 是信息索引页，其索引侧卡、密集型号与少媒体表达符合职能差异；不要求复制 Home 摄影、模块或密度。

## 4. 独立运行记录

执行 [audit.cjs](d32-gate5-independent-v0.1/audit.cjs)，结果见 [observations.json](d32-gate5-independent-v0.1/observations.json)。Node v24.16.0，Playwright Chromium 151.0.7922.34，本地 file、DPR1、1000px 视口高；未发送真实表单/外部路由请求。

**245/245 独立断言通过，0 失败**，包含文件身份/绑定及下列实际运行检查，不是沿用作者的 135 项。

| 要求/状态 | 独立操作与实际覆盖 |
|---|---|
| 五宽完整布局 | 1440/1024/768/390/320，全部模块和可见链接/按钮几何、水平溢出、字形与列数 |
| 四 route states | 五宽分别运行 full/grade-only/application-only/none，共20组合；集合/三步/索引保留，30型号两种呈现、5应用动作、M4/M5/RFQ 和条件第二句均符合合同 |
| Menu | 1024/768/390/320 打开、首焦点、8 links、背景 inert、前后 Tab trap、Escape、Close 与焦点返回；390实际选择关闭（仅抑制导航默认动作）及切至1440退出 |
| Cookie | 1440/768/390/320 入口、modal/label/description、视口内尺寸、Close/Policy 双向 Tab trap、Escape/Close 和 trigger 返回 |
| 锚点 | 390 主 CTA 及六个分类入口逐个实际点击并等待平滑滚动目标进入视口，hash/目标正确 |
| Focus/hover | 主 CTA390、型号768、应用/采购/索引390 focus；1440主 CTA/索引/型号 hover；同类实例使用相同 CSS/行为且全部目标和参数已核对，不声称逐个键盘点击30型号 |
| no-JS | 390/320 新建禁 JS context；六集合、30型号、五应用动作、三步/采购/RFQ 核心可读可达，无横向溢出 |
| 200% | 720 CSS px 模拟1440桌面的200%逻辑重排；另在390内存 DOM 将页面自有文本字号加倍；核心内容保留、无横向溢出/越界，小目标0。不声称原生浏览器 UI zoom 或物理设备通过 |

H1 实测1440/1024为56px、768为44px、390/320为36px，weight700；前四宽2行、320为3行。Hero/集合/三步/采购列数组合分别为 `2/2/3/3`、`2/2/3/3`、`1/2/3/3`、`1/1/1/1`、`1/1/1/1`。五宽全部可见交互目标满足44×44（初始屏外 skip 在键盘焦点时显示，未以屏外位置误判缺陷）。普通页面功能链接及存在的功能边框为 #008078；实际 hover 采用受控深 Teal/浅 Teal 状态。

独立按 sRGB 相对亮度复算关键文字配色：#008078/白4.82:1，#006c66/#eaf7f6 5.73:1，#062b5b/白13.96:1，#334155/白10.35:1，Footer #d4e0eb/#031b3a 12.82:1。结合正式图与实际 focus 可见性未发现对比度阻塞。

审计首轮的8个失败读数已定位为审计假设而非候选缺陷：1项把 body 外终止换行纳入“body逐字比对”；7项在 smooth scroll 启动后立即采样位置。仅修订审查脚本，限定真实 body 范围、条件等待目标进入视口，再全量复跑至245/245。没有修复或放宽候选合同。

## 5. 裁决与后续边界

Mandatory `[]`；advisory `[]`。未新增持久截图（0）；无截图触发缺口。审查方法要求完整使用已有正式证据和实际操作，因此没有重拍另一套批准资产。

后续测试不是本次发现：Gate 6 应按现有 owner/合同承接实际路线可用性、CMS/WordPress→API→前端、缓存、metadata/Schema、`site_scope=tio2-my` 隔离、真实 RFQ receiver 和发布条件；Gate 8 实现、Gate 9 对准确实现独立核验。物理设备、真实辅助技术、其他浏览器与原生 UI zoom 仍需对应运行证据。本地 route setter 仅为明确标注的策划模拟；不证明生产链接已上线。

最终技术结论：`REVIEW_PASS`，仅绑定 §1 的精确组合。交总控依有效授权决定同一 Gate 4 的关闭及后续交接；Reviewer 不自行关闭或授权下一阶段。
