# APP-000 D32 Gate 3 独立审查 V0.1

- 日期：2026-09-20
- 审查身份：`/root/app_gate3_independent_review`，不同于 Task 2 执行者；本报告不是作者自检。
- 结论：**REVIEW_FAIL / RETURN_TO_AUTHOR**
- Mandatory findings：**4**；必须由作者制作新候选，保留本冻结包不动，再交独立复审。
- 阶段边界：D23 Gate 3 信息/操作结构与跨页一致性规划，不是 D32 实现、运行时就绪或发布验收；审查者不关闭 Gate。

## 1. 精确对象与读取基线

冻结目录：`pages/applications/04_planning/d32-gate3-v0.1/`。

| 身份 | 独立复算结果 |
|---|---|
| Bundle | `sha256:64592411f67a5e69dd0fa18db1195abde26e2b873d037db93985e1fa45430297` |
| Source | `application-planning.html`，32508 bytes |
| Source SHA-256 | `88f06f499c377688d3488b1dd0fa0ac00a2a6fc2f5f84ed4da6cf588bd988288` |
| Freeze members | 16/16 bytes 与 SHA-256 一致 |
| Frozen input identities | 29/29 一致 |
| Asset dependencies | 12/12 一致 |
| 正式截图 | 9/9 尺寸及 SHA-256 已复算 |
| 审查运行后 | 再核对所有冻结成员，无漂移 |

Bundle 按冻结协议对按原顺序重建的 `{path,bytes,sha256}` 成员数组 `JSON.stringify` 后计算 SHA-256，不以作者声明代替复算。

已实际读取根 AGENTS、PROJECT_CONTEXT、Index 适用入口、当前工作流 V3.3、统一标准 V2.3、Gate 3 基线 V1.14/Agent V0.7、Gate 3 生产边界与跨页一致性决定、常设关闭权限；当前 Manifest V0.1、控制 V0.1、Task 2 报告与 Task 3 brief；完整批准 Gate 2 B/C、产品关系 delta、Application Playbook/Brief、治理细则适用章节、页面登记册/关键词相关归属；品牌标准、CTA accessibility 增补、生产 Logo、Global Chrome/共享法律区/消费者合同、RootPageHero 与 open-white 增补、Home D32 视觉交互审查及冻结身份。检视作者 build/source/CSS/JS/verify/finalize/extraction 与证据。

方法使用 `layout-interaction-verification` 的 Gate 3 scope/core-risk 及 `verification-before-completion`：结构证据、真实交互与截图事实分别记录，不把规划测试推断为 D32 完成。未调用付费设计工具、未调用其他子代理、未修改候选。

控制文件 V0.1 §4 中旧 process/FAQ 字样与当前批准 B/C 不一致，按本次主控明确派发裁决采用 B/C：正文 M1–M5，M3 三步、六个集合、30 个关系；Process Classification directory 与 FAQ 均为 0。未据历史视觉恢复被排除内容。

## 2. 命令、独立性与实际结果

工作目录 `D:\23MySec`：

```powershell
node pages/applications/05_review/d32-gate3-independent-v0.1/audit.cjs
node skills/responsive-wireframe-design/scripts/check-preflight-record.mjs pages/applications/04_planning/d32-gate3-v0.1/preflight.json
```

完整机器结果见同目录 `d32-gate3-independent-v0.1/observations.json`；可复现代码为 `audit.cjs`。Chromium 151.0.7922.34，1440/768/390 × 1000，DPR 1，本地 file 预览。记录时间见 JSON `checked_at`。

- 审查程序执行成功；59 项独立断言，49 PASS / 10 FAIL。10 个失败按跨断点去重为下文 4 个 mandatory，不是 10 项不同问题。
- preflight：`PASS_FOR_FORMAL_RENDER`，0 failures。
- 独立重新运行原 `verify.cjs`；在独立进程中仅将它写 `runtime-observations.json` 的动作截获为内存输出，不覆盖任何冻结文件。原验证器通过，但其覆盖没有发现下文问题；通过自检不等于独立审查通过。
- `audit.cjs` 不写文件，仅输出 JSON；进程退出 0 表示审查运行完成，不表示 `REVIEW_PASS`。
- 共享 generator 的 header/footer/dialog/style/behavior 与实际嵌入逐项匹配。
- 将批准 B 转成规范化文本流，与三个宽度的 main 可见文本双向比较；除单独审计的 eyebrow 与纯序号外全文一致。发现的额外正文标签列为 F01，不以“核心全文一致”掩盖新增内容。
- 六集合、关系顺序与 8/8/7/4/2/1 共30、三步文本、Process/FAQ 为0，作者重跑与独立结构检查一致。
- 四个状态 × 三宽度均保留核心集合/关系/三步、无水平溢出/可见隐藏焦点；full 为30 grade links+5 app actions，grade-only 为30+0，application-only 为0+5并保留30 plain labels，none 为0+0并保留30 plain labels。路由句按状态替换/省略；none 中 M4/M5 原子省略，固定共享 RFQ 保留。
- 独立菜单键盘循环（768/390，各12次 Tab）、Escape 返回触发器/解除背景 inert 与滚动限制通过。作者验证器独立重跑还覆盖菜单链接关闭、跨桌面断点关闭、Cookie 打开/焦点循环/Escape 返回；其流程中的窄屏 Cookie 行为用例发生在桌面 resize 之后，故不声称它提供窄屏 Cookie 几何行为证据。390 Cookie 几何由正式截图逐项检查。
- 三宽度真实首/末 Hero 锚点点击不遮挡目标；主CTA、Hero锚点、grade/app链接均有可见 Teal 焦点环。
- 作者无脚本390实测核心内容完整；不要求无脚本执行 JS 状态切换。规划 route simulation 不证明生产目标可达。
- 各宽度无文本越界/ellipsis/line-clamp；H1 为56/44/36、700且不超过3行，Inter 已加载；生产 Logo、1200px desktop grid、open-white Hero 与共享组件身份成立。

## 3. Mandatory findings（4）

### APP-D32-G3-F01 — M2–M5 新增未批准正文标签

位置：冻结 HTML 175、220、227、236 行；`.eyebrow`。

实测额外字符串：`Application-first navigation`、`Application review steps`、`Continue the review`、`Share your requirements`。批准 B 无这些文案；Gate 2 C §1 与 Gate 3 Agent 内容边界要求承载批准全文，不在 Gate 3 创作文案。

复现：打开 full 候选，读取 main 中不属于 RootPageHero 的 eyebrow，与 B 搜索/文本流对照；1440/768/390 均存在。

修订验收：在新候选去掉四条未批准新增标签，保留完整 B；如要新增内容须先取得相应内容批准，不可在审查中默认为批准。共享 Hero 的 Applications 与三步纯序号属于受控结构标签，不计此 finding。

### APP-D32-G3-F02 — 普通链接颜色/交互边框偏离生效 CTA 增补

位置：冻结 HTML CSS 56、78、88 行；`.breadcrumb a`、`.heroLinks a`、`[data-grade-link]`。

三个宽度普通链接文字均为 `rgb(6,43,91)`（Deep Navy）；Hero 链接边框为 `rgb(215,226,232)`。生效 `brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md` 明确要求浅表面上的普通链接文字及交互边框使用功能色 `#008078`。

复现：full 状态对上述 selector 读取 getComputedStyle 的 color/borderColor，JSON 保留实测结果。焦点环正确不抵消 normal-state token 违约。

修订验收：新候选中页面私有普通链接/相关边框遵守现有功能色合同，复核三宽度。不要改共享 Header/Footer owner 自有导航语义，也不把本 finding 扩成未经测量的对比度失败。

### APP-D32-G3-F03 — 不可用 grade plain labels 仍保留链接外观和 hover

位置：M2 application-only/none，冻结 HTML CSS 89 行通用 `.gradeChip:hover`。

无链接的 SPAN 同样使用 pill 轮廓/尺寸，仅颜色区分；hover 后从浅底/Navy文字变成 Teal底/白文字。三个宽度均实测：SPAN、href=null、tabIndex=-1，但 background 从 `rgb(242,248,247)` 变为 `rgb(0,128,120)`。这不是可点击越权，而是不可用标签仍伪装交互。

依据：C §2.3 要求 plain text、无链接 affordance；§2.4 不得仅以颜色表达关系/状态。

复现：控制台 `window.appPlanning.setScenario('none')`，将指针移入首个 `[data-grade-plain]`；application-only 使用同样样式。

修订验收：30个 unavailable labels 成为清晰非交互的中性标识，无 hover/focus/click/href 行为，不暗示不适用；同时保留四状态完整核心与数量。不得删除 grade 解决问题。

### APP-D32-G3-F04 — 五个 application actions 使用虚构缩短 URL

位置：M2 full/application-only 的 `[data-application-action]`。

| Owner | 当前 owner 登记/Manifest 路径 | 候选实际 href |
|---|---|---|
| APP-COAT | /applications/titanium-dioxide-for-coatings/ | /applications/coatings/ |
| APP-PLAS | /applications/titanium-dioxide-for-plastics/ | /applications/plastics/ |
| APP-MB | /applications/titanium-dioxide-for-masterbatch/ | /applications/masterbatch/ |
| APP-INK | /applications/titanium-dioxide-for-printing-inks/ | /applications/printing-inks/ |
| APP-PAPER | /applications/titanium-dioxide-for-paper/ | /applications/paper/ |

登记册与五个当前 owner Manifest（coatings/plastics V0.12、masterbatch V0.13、printing inks/paper V0.9/V0.11）一致。C §2.1 要求以 Page ID 解析 owner 有效路径，不自行制造 URL。

复现：full 状态读取五个 action href；与对应 owner Manifest 页面身份行及 registry 对照，审查脚本保存逐项映射。

修订验收：显式绑定 Page ID 与 owner 路径，保留 `PROVISIONAL_URL`/目标就绪语义。允许策划 full-state 展示目标动作；本 finding 不因未来页面尚未发布而否决 Gate 3，而是禁止用另一组自行缩短的路径冒充 owner 映射。

## 4. 九张正式图逐张视觉事实

所有图均以原尺寸查看；超过工具长边上限的390长图另以内存原像素分段检查（无缩放、无新增截图文件），覆盖 y=0–3699 与 y=3400–末尾。PNG 原 SHA-256 与物理尺寸完整保存在 JSON。

| 正式图 | 尺寸 | 视觉检查结果 |
|---|---:|---|
| FULL_1440 | 1440×3910 | Header至Footer完整；open-white Hero+信息卡，两列集合、三步；无遮挡/截断；F01/F02可见。 |
| FULL_768 | 768×5980 | Hero与集合自然堆叠，长描述/所有grade保留，Footer完整；F01/F02仍在。 |
| FULL_390 | 390×7012 | Masterbatch长范围、末尾RFQ未知选项句完整折行；集合、grade、三步完整，无横溢出/碰撞。 |
| MENU_390 | 390×1000 | 8导航顺序正确，Home首项/RFQ末项，Applications左标记；底层局部可见不代表可交互，独立inert检查通过。 |
| COOKIE_390 | 390×1000 | 弹窗正文、Close与Read Cookie Policy完整可读，背板明确，无屏外裁切。 |
| ROUTE_FULL_390 | 390×7012 | 所有app/grade/procurement/body RFQ动作存在；Footer Cookie Settings残留焦点框为A01。 |
| ROUTE_GRADE_ONLY_390 | 390×6711 | app动作全部省略，30个grade链接与grade-only句保留，布局闭合。 |
| ROUTE_APPLICATION_ONLY_390 | 390×6985 | 五个app动作、30个plain grade与对应句保留；plain pill仍有交互外观，对应F03。 |
| ROUTE_NONE_390 | 390×5117 | 正文RFQ/procurement/app动作和第二路由句省略；六集合、30grade、三步完整，M3直接衔接Footer。 |

Home-family：共享 Header/Footer/Menu/Cookie 组装、生产 Logo、字体、1200px网格、Navy/Teal体系、RootPageHero骨架与H1节奏具有同源依据；APP保留信息型卡片和自己的五模块，不复制Home照片或正文模块。F02为明确合同偏离。最终列数、surface/shadow细节及更精细视觉节奏归Gate4，不因当前两列/单列规划额外添加阻断项。

## 5. Advisory 与 later-owner tests

- A01：ROUTE_FULL_390 的 Cookie Settings 有白色焦点轮廓，不影响内容/状态证明，但作者“无残留焦点”叙述不精确。在已必需的新候选重截时中和焦点或准确标注；不因此单独要求重截全部旧图。
- A02（Controller）：下一次派发显式保留 B/C 五模块、三步、0 Process/FAQ 的裁决，避免控制 V0.1 旧字样继续传播；本审查不修改冻结输入/控制文档。
- Gate 4：最终列数、间距/surfaces/buttons、1024/320与放大文字/zoom等完整响应式视觉验证。不是本次无证据宣告通过项。
- Gate 6/8：各目标独立混合 eligibility、owner URL批准/就绪、共享依赖、source_page_id传递及禁止浏览行为自动预选 RFQ。
- Gate 8/9：D32 CMS/路由/缓存/媒体/menu/SEO/Schema/site_scope、实际收件、真实设备/AT与原生200%验证；D16历史结果不继承。

## 6. 处理与文件边界

只创建本报告、`audit.cjs`、`observations.json`、Task 3 reviewer report。未修改候选包、上游输入、控制关闭、Gate3→4 handoff、Manifest V0.2、Status/Index，也未写D32、提交或发布。

审查结果应交回 Task 2 作者，修订为新增候选并完整冻结、重新核对身份后复审；不得原地修补当前审查对象。4项 mandatory 未关闭，不能进入主控常设关闭或声称 Gate4 已授权。独立审查只提供判断，不替代主控阶段决定。

