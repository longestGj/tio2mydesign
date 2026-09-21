# DOC-000 Gate6 独立交付审查 V0.1

日期：2026-09-21。Review ID：`DOC000-D32-G6-REVIEW-20260921-01`。审查者 `/root/res_root_d32`，交付作者 `/root/doc_root_d32`，实际身份不同。模式 `INDEPENDENT_REVIEW`。结论：**CHANGES_REQUIRED**；本阶段必修 **2**。未修改候选、未关闭Gate、未外发或访问任何开发仓库。

## 1. 输入、规则变化和精确对象

被审唯一包：`pages/documents/06_handoff/DOC-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md`，29162 bytes，SHA256 **`5999de30457ef123bcc7538c80531b05fdd71394e1fab6538887c643ca863c44`**。读前/写报告前复算相同。

| 对象 | 独立核对身份 |
|---|---|
| Current Manifest V0.2 | `884e29249cd13830cff06aa1774e6a0bf5fee3faf9777b83a01ef0e42ce90de6` |
| Gate4/5 Controller closure V0.1 | `6a9f8cc104515cde7bd19b450240e7f7ece6090404d86e7f3024adb65fc7e379` |
| Approved Gate4 bundle | `bd12263d164a68b97f0095b311f2dc092f5662342d7c4ebc7f4a53589c010ed9` |
| freeze-return.json | `5db8a438c1f60776d53e243a9223075415e07b50c7965582ad5dff325b76f722` |
| HTML / CSS / JS | `2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723` / `cffdd929cffb9446319ab3ca39426e4fc1659be993cfff76f01e4a72d0d2ce03` / `c689d037e2592ba2d743972856bc4f6ae0d76783c1eda9d01f92ac492df1674e` |
| 原Gate5首审 / 定向复验 | `642db2d758bab2f1be43728562f84f0ba5b7391546605c2c39bdcc6b9a0edd82` / `d9071231fd179ff8a9852fa9d033eec9bb35a034a3714ce3d3859717e7ff8f93` |

六项准入可解析：同一批准bundle、有效首审/复验链、`DOC000-D32-G45-PC-CLOSURE-20260921-01`关闭、Manifest和总控`DOC000-D32-G6-EXEC-20260921-01`派发、原ID依赖、冻结后变化。Gate5的410有效首审覆盖和226项定向复验按各自对象继承，不相加为本轮新执行数。R01/R02已处置，不重新审整套图；Gate6本轮新增合同全量核对。

开始按派发读 Workflow V3.5、Gate8→9 V1.1。审查中用户治理更新生效，总控明确要求切换最终依据；已完整读取 **Workflow V3.6**（SHA `a52f795c8dae292eac0c96c389ba83eb009b497f1d14efa1c4cca5f78bb93b60`）、**Gate8→9 V1.2**（SHA `e66c90f03e50a5d62741d9ade7637c764444b906818ccaccc7a08de480ddeadc`），重新读取当前根AGENTS及治理V1.7适用§6–17。V3.5/V1.1仅保留本包提交时语境，不能作为最终现行入口。机器格式仍为 v1.1，不因合同升V1.2伪造新格式。

Gate6 baseline V1.3所列Agent V0.9、一致性Skill V0.4、交付Skill V0.5、执行合同V1.2、5→6接收V1.1、职责边界V1.0六个hash实际匹配。使用两项Skill做双向合同核对；verification-before-completion用于最终身份核实。初始FAST_PATH有效；发现下面跨合同缺口后，仅定向扩大其映射/治理核对，不升级为全量视觉复审。

## 2. 必修Finding

### DOC-D32-G6-R01 — 必需discovery关系被降为条件事项，缺稳定依赖与验收

严重度 **P2 / 本阶段交付必修**；状态 **OPEN**。位置：候选§3末（原文件line151），以及§3依赖表、§4.1 AC表/`G8-15`。

**预期依据：** S07 `TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` §1.3（line21）明确 Primary internal-link sources 是 required discovery paths；§4（lines57–59）分别把 `DOC-000` 列为以下三页的必需来源：

- DOC-REACH `/documents/reach/`
- DOC-TDS `/documents/tds-sds-coa/`
- DOC-COO `/documents/certificate-of-origin/`

S07 SHA `e28de105ba35628365c0c0dc3dac272c5f6fe2b19589f6888cade0a26ab09213` 已实读并复算。静态单站决定只撤销多站隔离，不取消这些批准的发现关系。Gate6职责边界、交付Skill§3–4要求每个必需依赖具备责任、失败处置和实际接受条件。

**实际：** 包写“如整站要求新的可见 discovery link，由总控协调其批准落位”，把已经存在的要求表达为条件假设；RB-01–14没有此关系的明确项/稳定映射。G8-15只检查Home/Chrome进入DOC-000，未涵盖DOC-000通往三篇子页。不得以原型无子页链接为由认为该出版接口已完成。

**影响：** 接手方可能在三条批准发现路径均缺失时，仍按现有AC认定完整发布条件满足。只说“以后协调”不足以形成可执行交付；这是当前依赖表达缺口，不是已确认生产失败。

**责任与接受条件：** Gate6作者补充稳定依赖ID（或对既有ID做明确可追溯映射）、三条精确目标、原批准来源、协调/内容结构owner、DOC消费责任、Gate9实际可见原生链接与正确目标证据、未满足时受影响的集成/发布阻断。必须将“已批准的必需关系”与“尚需原owner协调批准的可见落位”分开记录，保持该依赖OPEN直到有相应证据/批准。若要取消/改派DOC来源，必须给出有效的后续决定，不能由作者自行降为可选。

**不要求也不授权：** 在Gate6直接给四组卡添加按钮、新卡或正文；不改Gate4冻结、不让DOC实现兄弟页面。可见落位涉及批准组合时返回原内容/设计owner及总控，不把这项报告视为设计批准。

### DOC-D32-G6-R02 — 当前开发规则与证据交接入口未同步

严重度 **P2 / 本阶段交付必修**；状态 **OPEN**。位置：候选S14/S15（lines39–40）、治理说明（line44）、§4.1 G8-15来源、§4.2（line179）及相应作者报告引用。

**预期：** 当前Workflow V3.6及根AGENTS已撤销独立`GATE8_CURRENT_RULES_V1.0.md`的现行地位。开发规则分别由 `D:/32NextJS/AGENTS.md`、`D:/32NextJS/CONTRIBUTING.md`、`D:/32NextJS/README.md` 维护；D23验收证据交换使用`GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.2.md`。

**实际：** S14仍称撤出文件为当前开发归属/预览/交回规则，S15/§4.2仍将合同V1.1称为唯一当前协议，治理说明为V3.5。提交后生效的规则变化已由本轮总控明确通知，并非作者原提交时无依据；最终交付仍需同步后再通过。

**影响：** 开发被导向第二份已撤出的规则权威，后续证据消费版本不清。内容与静态架构本身没有因此失效，不需重新渲染。

**接受条件：** 作者新增返修包版本，更新全部当前入口/来源/说明到V3.6、D32三个开发文档职责及证据合同V1.2，重算被引用D23合同hash、提交包hash。明确合同V1.2仍消费`gate8-evidence-manifest-v1.1`/Schema V1.1；不能机械地把格式号改成v1.2。撤出文件只可标历史。当前任务禁止进入开发仓库，故只依据已批准D23治理记录登记由开发方读取其规则，不要求D23为修此Finding访问开发仓库或复制其规范。

## 3. 其余有效覆盖与后续边界

本轮已实际阅读全文包及对应实质批准源，按来源→要求→AC/RB以及反向来源完整核对。除两项Finding外，以下新增映射无另见必修：

- 页面职责/关键词中立、Brief V0.6与正文V0.10优先关系、历史未批准Finder Playbook的排除；Hero→selector顺序、3scenario/4group/14grade/6FAQ及完整正文引用。
- Hero直达无query与Grade-first单product两路，空选/报错/有效/清空/Closing语义、接收方可编辑/移除、公开非法query安全丢弃、禁止Contact/RFQ替换和虚假成功。Products assistance仅按其既有合同原子省略且仍阻发布，未扩大为通用隐藏规则。
- 正式canonical **`https://tio2malaysia.com/documents/`**、精确title/description/OG/Twitter/lang、WebPage/Breadcrumb/条件FAQ parity、禁止文件库存/下载/认证实体；原型file地址/noindex与正式index/follow/sitemap/Google实际收录分开。
- 静态Next.js单站 `D:/32NextJS`；旧WordPress/CMS/database/multisite/site_scope只作被排除或退休历史，未被要求为当前生产模型。G8-13与RB-11退休且不复用ID；普通错误内容/媒体/canonical与禁止错误fallback仍有验收。
- RootPageHero/Chrome/品牌Logo/法律共享owner保留；五宽、受控320四行和<=340反馈稳定性、共同Eyebrow生产结果/原型未应用数值的差异如实交接。无私有Hero/Consent实施授权。冻结no_optional_analytics仅证明既有设计状态，不证明或授权当前生产分析激活；共享owner承担合法状态与实际法律/存储一致性。
- receiver语义由CONV-DOC批准包及较后D23记录继承：旧2026-09-05一次provider accepted与mailbox未确认不当作当前静态运行收件。真实请求、接收/超时/错误、隐私数据流及运营准备分别保持后续证据责任，未转成Hub表单开发任务。
- 当前13 active依赖控制中可选social image存在合格省略分支，不把它当必然缺陷。其余运行依赖未测并不自动否决Gate6；R01是缺少依赖/AC表达本身。

读取来源包括当前Manifest/关闭/原独审链、B/Brief、登记册和关键词本页/竞争行、S05/06/08历史批准合同及其关闭Manifest、S07适用§1/4/7.1、CONV-DOC交付/接受/当前历史运行指针、共享Chrome/法律与冻结组合。前轮已实际读取且身份未变的Hero/品牌和完整图像/操作质量覆盖继承；本轮不重绘、不执行作者捕获脚本、不将hash等同于语义通过。

## 4. 实际机器核对与局限

2026-09-21使用PowerShell Get-FileHash/Get-Item及只读Node：

- 包29162 bytes / SHA如§1；36个显式D23源文件引用可访问，缺失0。
- 当前freeze-return的79个记录逐一SHA/bytes匹配，失配0；Node `SHA256(JSON.stringify(files))`重算bundle相同，path.localeCompare排序成立，freeze hash相同。
- AC登记G8-01–15共15唯一ID：14 active/1 retired；依赖RB-01–14共14唯一ID：13 active/1 retired。数量正确不覆盖R01语义遗漏。
- 六个Gate6方法/角色/合同hash与基线V1.3匹配；Manifest、closure、S07与所载身份匹配。

没有新截图、浏览器重渲染、HTTP、生产SEO、收件测试、Search Console或开发仓库访问。实际生产实现/设备/AT/原生zoom以及外部依赖仍由后续授权的Gate8/9/发布owner验证。没有声称这些运行AC已PASS。

## 5. 返修与停止

只退回R01/R02交付合同。作者保留V0.1，新版给出精确差异与SHA；定向复验这两项及相邻AC/依赖映射、入口身份即可。无来源/视觉变更则继续继承既有Gate4/5有效覆盖，不重做正文布局或整套图。

本报告不创建当前Manifest、不改变闭关记录、Status/Index或共享源，不自行关闭Gate6或外发。本次按两项Skill明确的职责边界停止于 **CHANGES_REQUIRED**，等待作者返修及原审查者定向复验。
