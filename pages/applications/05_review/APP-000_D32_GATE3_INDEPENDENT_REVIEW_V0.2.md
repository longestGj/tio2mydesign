# APP-000 D32 Gate 3 独立复审 V0.2

日期：2026-09-20。独立 reviewer：`/root/app_gate3_independent_review`，与 Task 2 执行者不同。

**结论：REVIEW_PASS。Mandatory findings：0。** 原 F01–F04 及 A01 在本 V0.2 对象上通过独立验收；V0.1 的失败记录保留，不改写为通过。本报告不关闭 Gate、不授予 Gate 4 启动或 D32 实现/发布权限，由主控按有效授权处理后续。

## 1. 精确审查对象

目录：`pages/applications/04_planning/d32-gate3-v0.2/`。

| 项目 | 独立复算 |
|---|---|
| Bundle ID | `sha256:dbc8e41f809388fae83fe5b75b2b8421e2aa808b68e0e8f54331b0b26645e41e` |
| Source | `application-planning.html`，32776 bytes |
| Source SHA-256 | `60e7a9091b7ebfab27a810aafce30a457532ac770ea9f75a6b655a14c9c09aef` |
| Freeze members | 16/16 bytes及SHA-256相符 |
| Inputs | 29/29当前身份相符 |
| Dependencies | 13/13相符 |
| 正式图 | 9/9身份及物理尺寸相符 |
| 旧V0.1 | 16/16冻结成员未漂移，审查前后均复核 |

旧V0.1仍为 bundle `sha256:64592411f67a5e69dd0fa18db1195abde26e2b873d037db93985e1fa45430297`、source `88f06f499c377688d3488b1dd0fa0ac00a2a6fc2f5f84ed4da6cf588bd988288`。Bundle按原顺序独立重建 `{path,bytes,sha256}` 数组，对 `JSON.stringify` 计算SHA-256；不沿抄作者声明。V0.2审查运行后所有冻结成员再次一致。

本轮读取V0.2执行报告、自检、freeze、source相对V0.1完整差异、当前验证器、content extraction、正式捕获中的焦点处理及共享行为原件；完整重读批准B/C和核验Skill。V0.1已实际读取且当前身份不变的项目入口、当前工作流/标准、Gate3 Agent V0.7/基线V1.14、Playbook/Brief、品牌/CTA/Logo、Global Chrome/法律区、RootPageHero与Home基准继续作为适用依据，不用执行者摘要替代这些原件。

遵循当前主控明确裁决：正文M1–M5、M3三步、六集合、8/8/7/4/2/1共30关系；Process Classification directory/FAQ各0。控制V0.1中历史字样不覆盖批准B/C。

## 2. 实际运行与结果

工作目录 `D:\23MySec`，主复现命令：

```powershell
node pages/applications/05_review/d32-gate3-independent-v0.2/audit.cjs
```

最终运行：**108/108断言PASS，0失败**，退出码0；时间 `2026-09-20T10:34:15.069Z`，Chromium `151.0.7922.34`，file本地源，1440/768/390 × 1000，DPR1。断言数仅说明覆盖，不是质量分数。

审查脚本还独立执行：

- 原作者 `verify.cjs`：独立进程重跑，唯一报告写入截获为内存输出，未覆盖冻结 `runtime-observations.json`；通过。
- V0.2 `regression.cjs`：4项通过。
- `node skills/responsive-wireframe-design/scripts/check-preflight-record.mjs pages/applications/04_planning/d32-gate3-v0.2/preflight.json`：`PASS_FOR_FORMAL_RENDER`，0 failures。

机器记录及完整图像身份见 `d32-gate3-independent-v0.2/observations.json`。审查脚本只读取候选并输出JSON，没有重建、重截或写入候选；进程退出0本身不代替阅读断言结论。

### 完整回归范围

- **B/C双向内容：** 三端可见正文文本流与完整批准B一致，仅单独识别受控RootPageHero eyebrow和三步序号；M2–M5没有额外文案。标题层级、五模块顺序、六集合、全部关系/顺序、三步、Products/Documents/Markets顺序、无Process/FAQ均成立。
- **12种width×route：** full为30 grade links/5 app actions；grade-only为30/0；application-only为0/5并保留30 plain labels；none为0/0并保留30 plain labels。全部保留六集合、原顺序关系和三步，无可见隐藏焦点/横向溢出。第二句精确切换，none整体省略M4/M5和正文RFQ，共享RFQ固定保留。
- **三端几何：** 无横溢出、文字越界、ellipsis/line-clamp、破图；可见动作宽高均至少44px。Inter加载；H1 56/44/36、700、最多3行。真实首/末Hero锚点点击落点不受Header遮挡；核心按钮/链接具3px Teal可见键盘焦点。
- **菜单：** 768/390实际打开、12次Tab循环、Escape焦点返回、inert/滚动恢复；独立重跑原验证器还覆盖选择关闭与切换桌面断点关闭。无正文私有菜单分叉。
- **Cookie：** 本轮另在真正的1440/768/390原始视口打开、测量对话框边界、循环5次Tab并Escape返回。390边界x=19..371、y≈316.69..683.31；768 x=104..664。未沿用作者resize后仍标窄屏的行为记录作为窄屏证明。
- **无JS：** 独立390上下文再次验证六集合、30个grade链接、三步、五模块、零横溢出；核心内容与普通链接不依赖脚本。四route状态切换是明确的本地模拟，不冒充无JS生产eligibility逻辑。
- **共享组装/Home-family：** Header/Footer/Dialog/CSS/行为与page-neutral generator逐项嵌入相符；生产Logo、导航Applications current与固定RFQ、法律入口无本页改写。继承open-white RootPageHero、1200px桌面grid、Inter、Deep Navy/功能Teal及受控标题节奏。APP保留自己的信息卡/模块，不复制Home照片或业务正文；最终列数/精细视觉留给Gate4。
- **行为/实现边界：** 无嵌入表单、自动grade/application选择或请求提交；本地href/模拟不证明生产路由、接收、CMS或Schema实现。

### 诊断过程留痕

初轮出现2次“程序化focus后立即采样”失败，位于1440 Hero锚点与390主CTA。检查共享原件并记录focus/close事件时序后，确认native dialog同步关闭/返回焦点与排队的共享close监听器不是同一完成点，旧审查等待条件可能过早。

仅改独立审查脚本：先观察真实native close事件完成，再以Tab进入键盘模态后采样；没有修改候选行为或样式。完整重跑108/108通过。初轮失败名称与解释保存在JSON `diagnostic_history`，不隐藏测试调整，也不将测试时序问题伪报为候选必修。运用了systematic-debugging定位以及verification-before-completion完成前实证要求。

## 3. 原Finding独立验收

| ID | 本次验收事实 | 结果 |
|---|---|---|
| F01 | 四条未批准M2–M5 eyebrow不存在；三端B全文双向比对一致。 | ACCEPTED_IN_V0.2 |
| F02 | breadcrumb、Hero index、grade links normal文字/相关边框均为功能Teal `rgb(0,128,120)`；共享owner组装保持原件，不将共享导航也改成页面规则。 | ACCEPTED_IN_V0.2 |
| F03 | application-only/none三端各30项均SPAN、href=null、tabIndex=-1、border/radius=0、透明背景、pointer-events:none；实际代表项hover/click/尝试focus无变化或动作；正式图为清晰中性文本，不是pill。 | ACCEPTED_IN_V0.2 |
| F04 | 五个action均含显式owner Page ID及正确owner登记路径；content extraction保留LOCAL_PLANNING_SIMULATION_ONLY/provisional，不声称已live。 | ACCEPTED_IN_V0.2 |
| A01 | ROUTE_FULL_390原图Cookie Settings无残留焦点框；与FULL_390 SHA-256均为 `63b7c4fab8bf6a01cc93424a6e6cef9d28cff26ccdf05a5c6f03155575524b49`。 | ACCEPTED_IN_V0.2 |

F04实际映射：

| Page ID | 候选href，已与owner登记核对 |
|---|---|
| APP-COAT | /applications/titanium-dioxide-for-coatings/ |
| APP-PLAS | /applications/titanium-dioxide-for-plastics/ |
| APP-MB | /applications/titanium-dioxide-for-masterbatch/ |
| APP-INK | /applications/titanium-dioxide-for-printing-inks/ |
| APP-PAPER | /applications/titanium-dioxide-for-paper/ |

## 4. 九张正式图逐张检查

使用冻结原图；长390图以内存原像素两段覆盖y=0–3599、y=3400–末尾（重叠200px），不resize、不保存新图。以下全部为STATIC_VISUAL，不替代运行证据。

| 图名（APP-000_G3_前缀） | 原始尺寸 | 直接观察 |
|---|---:|---|
| FULL_1440 | 1440×3778 | Header至Footer完整，Hero开放白底，六集合两列、三步完整；新增eyebrow消失，Teal链接明确，无截断。 |
| FULL_768 | 768×5848 | Hero/内容自然堆叠，长描述和所有grade完整，M3/M4/M5及Footer闭合。 |
| FULL_390 | 390×6880 | 六集合、30grade、长Masterbatch范围与RFQ未知选项完整折行，无碰撞/截断。 |
| MENU_390 | 390×1000 | 八导航顺序正确，Applications左标记、Home首/RFQ末；Close可见，底层可见区域由运行证据确认inert。 |
| COOKIE_390 | 390×1000 | 正文、Close、Read Cookie Policy都完整，背板清楚，无屏外裁切。 |
| ROUTE_FULL_390 | 390×6880 | 所有动作完整，Footer无Cookie Settings焦点轮廓；像素身份与FULL一致。 |
| ROUTE_GRADE_ONLY_390 | 390×6579 | 五app动作省略，30grade links与精确第二句保留；M4/M5和Footer完整。 |
| ROUTE_APPLICATION_ONLY_390 | 390×6560 | 五app动作仍在，30grade为无边框/背景的普通文本，第二句正确；不以颜色单独区分链接。 |
| ROUTE_NONE_390 | 390×4751 | 正文动作/M4/M5/第二句省略，六集合/30plain grades/三步保留；M3自然接共享Footer。 |

## 5. 非阻断项与后续owner

没有新增mandatory。A02仍属Controller记录事项：控制V0.1的旧Process/FAQ字样按当前派发裁决解释，下次交接继续明确0/0，不在本候选恢复它们。

后续未测/owner边界：

- Gate4：最终列数、详细视觉节奏/surface/button、1024/320、放大文字及zoom完整视觉；不要求本关为纯润色再制候选。
- Gate6/8：逐目标混合eligibility、最终URL批准与实时就绪、共享必需依赖、source_page_id实际transport、不从浏览行为预选RFQ。
- Gate8/9：D32 CMS/路由/缓存/menu/media/SEO/Schema/site_scope、实际RFQ收件、真实设备/AT/原生200%证据、部署/发布/索引权限。D16历史结果不继承。

`approval_core`为当前冻结源、九正式图和本结论；`diagnostic_support`为audit/observations与未落盘的过程测量/图像分段。只创建授权的四份V0.2独立审查文件；未编辑任何V0.1/V0.2候选、上游输入或执行者报告，未写D32、Status/Index、closure/handoff/Manifest，未commit、未创建子代理。

**交回主控：REVIEW_PASS，0 mandatory；符合进入主控关闭判断的独立审查条件，但本报告本身不执行关闭。**

