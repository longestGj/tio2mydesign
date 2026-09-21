# MARKET-000 Gate5 MKT-R003 targeted independent recheck V0.1

2026-09-21。Review/dispatch ID：`MARKET000-D32-G45-TARGETED-RECHECK-MKT-R003-20260921-01`。模式：`INDEPENDENT_REVIEW / TARGETED_RECHECK`。结论：**TARGETED_REVIEW_PASS**。`MKT-R003` 本次设计纠正接受条件已满足；新增 mandatory/optional Finding：0/0。本报告不是 Gate4/5 关闭，不自动恢复 Gate6 或启动开发。

实际作者 `/root/market_root_d32`，原指定独立审查者 `/root/doc_root_d32`，不同实例。候选、作者索引、冻结与证据均只读；没有运行作者 check/capture/pack 脚本。Reviewer 只写本报告、自有 observations 与任务报告。

## 1. 权威、输入及身份

当前审查依据：`pages/markets/05_review/MARKET-000_D32_GATE6_REVIEW_CHALLENGE_V0.1.md`（`MARKET000-D32-G6-RC-MKT-R003-20260921-01`），Current Manifest V0.4，交接 `pages/markets/05_review/MARKET-000_D32_GATE4_GATE5_HANDOFF_V0.3.md`。

实际核对 S07 `TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` §1.3、§2 和 `pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md` 后置 overlay：PT 路由与 Markets 必需发现关系已批准，旧 localization hold 仅保留历史。Brief `MARKET-000_MARKETS_BRIEF_V0.1.md` §10.2 原表提供 `Portuguese / Português` Brazil relation。总控本次明确的限定落位为现有 Brazil 主入口下，不新增卡/区域/Hero CTA，不改子页正文。关系批准不等于实际 PT 路由已可访问。

使用当前 Workflow V3.6、Gate4→5 V1.1、Gate5 Agent V0.6、布局与交互核验 V0.9、独立视觉审查参考 V0.3 与核心风险模型。已读共享 RootPageHero 合同，未变品牌/Chrome/法律和历史完整覆盖按原审查继承；不因治理迁移重做整页。

| 对象 | 独立复算 SHA-256 |
|---|---|
| Bundle | `8cc62dc48563c1564519951cb9db87771692f677e8ad66582c32e4a7f9e0121e` |
| market-visual.html | `60707bd8bdf34e05e2fb7ec6a1a76ebcbf084d4aeacf50ddb57a25d9f302616c` |
| localized-relation.css | `2d4fcfa9c89c68864a620b242072e432ff14be04970ec18ff30e081f07ceeae2` |
| relationship-projection.js | `99c27f06c4fc3d5796c3e112438553e3257d2eb75f5216a230706a485477e569` |
| freeze.json | `6a0a4c2c3fb8e5b4c0ad032d1fd2092f5028b7b7f4241f10eb3e749d014d7911` |
| evidence-index.json | `e4c9fdbd5a2b78910594aa203e435d48e3e7f95f28f693d63e591992236cfcb1` |

Workset：`pages/markets/04_planning/d32-gate4-v0.3/`。47 bundle members 加另绑 evidence index，共48记录实际 bytes/hash 匹配；审查后48再核对未变。按 D23-relative path 排序、path+NUL+SHA+LF 重算 aggregate 与派发相同。12张正式 PNG 的 bytes/hash/物理尺寸/源身份全部匹配；DPR1来自捕获配置和实际 reviewer browser context，不由PNG尺寸猜测。

## 2. 实际定向覆盖

Reviewer 自有 `pages/markets/05_review/d32-gate5-mkt-r003-v0.1/recheck.cjs`：本地 Chromium `151.0.7922.34`，DPR1，viewport height1000，等待 local Inter 与两帧。**263/263 assertions PASS**：前后身份96、aggregate1、资产12、局部浏览器/条件态154；不与作者142/142相加或视为相同覆盖。

九宽实际运行：320、340、341、374、375、390、768、1024、1440。每宽检查原型与上一批准候选，独立执行 EN→Tab→PT→Enter，并分别运行 none/eu-only/support-only/PT-unavailable 四个模拟状态；另查无JS默认完整状态。

### 可见关系、可操作性与九宽几何

- `Português`（含完整 ê）确在 Brazil 卡内、Explore Brazil 之后，原生 href 精确 `/pt-br/markets/brazil/`；仅该 link 有 `lang=pt-BR`，Hub document 仍为 en。
- 九宽每次实际 link box 为约79.515625×44px，全文 text rectangles 在命中区内，命中区在卡/视口内。16px/600、下划线完整；`overflow-wrap:anywhere`、非 nowrap，无固定裁切、横向溢出或与主入口重叠。不同宽度正文自然换行且语义仍属于 Brazil，不呈现为第5市场系统或第11张卡。
- Tab 从 Explore Brazil 到 Português，3px可见焦点；中心 hit test 命中该 anchor。Enter 产生可信 native click，目标精确 PT route。Reviewer 临时捕获事件并 preventDefault 以保留本地原型；这是键盘路由意图证明，不是目标HTTP/生产页面证明。没有注入或保存候选改动。
- 原10 EN href 顺序逐宽保持：EU、Germany、Italy、Spain、Poland、Netherlands、Belgium、UK、India、Brazil；PT 关系在 Brazil EN 后。整页模块文本移除唯一新增PT label后与旧候选相同，Chrome markup和Hero内容/尺寸相同；除 selector 自然增高外，其他主体模块宽高保持，后续区块按正常文档流下移。
- 原共享窄屏 Eyebrow、H1、Hero动作、菜单/法律 owner 不发生本次设计分叉。不是通过缩字、强制换行或改Hero几何容纳新关系。

### 机器关系与 route-state

- MARKET-000 所有九宽均无任何 hreflang；Hub没有变成PT alternate。Brazil两个子页的 reciprocal hreflang 继续只由子页合同和后续实际响应证明。
- 默认本地完整状态有11个 Market关系，ItemList是同一顺序/精确目标，position连续；PT紧跟Brazil EN，URL为 `https://tio2malaysia.com/pt-br/markets/brazil/`。默认无JS初始HTML中原生PT入口与ItemList一致。
- 九宽各自四种局部模拟：none/support-only没有Market ItemList、PT入口或残留语言标签；eu-only仅EU；PT-unavailable保留原10 EN、同时移除PT入口和图谱项。无“看不见的PT机器入口”或空PT占位。
- 模拟器默认初始HTML为full，然后以query做本地过滤；作者交接明确这不构成生产initial-HTML readiness方案。本次只接受设计状态/语义。未来 Gate6须绑定必需PT发现依赖，Gate8/9按实际路由/批准release状态使初始可见入口与图谱一致；不能用不可用模拟静默取消已批准的必需发现关系，也不能把当前图谱示例作为live证明。

## 3. 实际图像与继承

实际打开12/12原始正式图：FULL1440/1024/768/390/320、对应5张BRAZIL、PT_KEYBOARD_FOCUS320、PT_UNAVAILABLE_BRAZIL390。五张full page viewer仍因高度缩放，故仅据其检查全页结构、相邻模块连续性和Footer；未声称从长图缩略图重新读完全部文字。五张Brazil原尺寸图与两状态图清晰显示完整标注、层级、行距、下划线/焦点及无残留空槽；结合九宽真实几何与原覆盖支持结论。

桌面UK/India卡保留原下方主action位置，Brazil主入口上方留出其下方Português关系；这是限定卡内第二语言入口带来的自然高度，不是新强制空白或共享布局漂移。平板/手机卡顺序和阅读上下文完整。完整新图没有被旧全页图冒充；selector高度变化后新五宽图确为新候选。

继承原 `MARKET-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md` 与 `MARKET-000_D32_GATE5_TARGETED_RECHECK_R01_V0.1.md` 的有效未变全文、共享Chrome/consent、EU展开、键盘/触控、家族比较、hover与窄屏修正覆盖。明确不继承首审“没有PT关系”的旧结论，也不继承旧origin示例作为现行canonical。原R01仍按其通过组合有效；此次共享源/不相关模块没有更改。本轮新增重复截图0，无需创建第二套正式资产。

## 4. Finding处置与边界

`MKT-R003 = ACCEPTANCE_MET_IN_TARGETED_REVIEW`：批准发现关系已在指定设计候选可见，局部布局/操作/顺序/图谱同步及无Hub hreflang均满足。mandatory0、optional0。建议总控接收本结果并按其权限处理 successor closure 和 Gate6恢复，Reviewer不执行这些生命周期动作。

未测：实际 PT/EN目标HTTP、生产canonical与child hreflang、部署/索引、真实设备/AT/native zoom；均非本次新增视觉Finding，不声称生产已就绪。未进入开发仓库，未修改候选、Manifest、共享源、Status或Index，未外发。

原始记录：`pages/markets/05_review/d32-gate5-mkt-r003-v0.1/observations.json`；命令 `node pages/markets/05_review/d32-gate5-mkt-r003-v0.1/recheck.cjs`，exit0。agent-browser不可用后使用已存在本地浏览器依赖，不安装或修改环境。上述记录是本Reviewer独立运行，不是作者结果复制。
