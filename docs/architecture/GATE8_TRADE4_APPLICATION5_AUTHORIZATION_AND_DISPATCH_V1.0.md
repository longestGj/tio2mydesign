# Gate 8 · Trade Resource 4页 + Application 5页授权与派发记录 V1.0

- Dispatch ID: `G8-TRADE4-APP5-20260908-01`
- 日期：2026-09-08
- 用户授权原文：`现在把这些交给gate8的00My开发2对话，进行开发。`
- 目标开发任务：`00My开发2`
- 目标 Thread ID：`01a07e6a-546d-7532-aa06-02d2bffd5eed`
- 目标项目目录：`D:\16Wordpress_nextjs`
- 授权状态：`GATE8_USER_AUTHORIZED / DISPATCH_AUTHORIZED`

## 1. 授权范围

本次授权仅覆盖下列九页进入 Gate 8 开发。开发任务应先读取 `D:\16Wordpress_nextjs` 的适用 `AGENTS.md` 和仓库规则，核对当前分支、工作树及既有改动，在适用隔离环境中实施、测试、自检并返回逐页开发回执。

| Page ID | 页面 | Gate 6交付包 | Package ID | SHA-256 | Gate 9 AC | 依赖 |
|---|---|---|---|---|---|---|
| `RES-TRADE-EU` | EU Trade Resource | `pages/resources/eu-trade/06_handoff/RES-TRADE-EU_GATE6_HANDOFF_PACKAGE_V0.1.md` | `RES-TRADE-EU-G6-HANDOFF-01` | `bb1b44d42fa32232965e62e3255cde05518f2570224b827a1cf68c7b4fd021ad` | `RES-TRADE-EU-G9-AC01…AC14` | `RES-TRADE-EU-G6-D01…D08` |
| `RES-TRADE-UK` | UK Trade Resource | `pages/resources/uk-trade/06_handoff/RES-TRADE-UK_GATE6_HANDOFF_PACKAGE_V0.1.md` | `RES-TRADE-UK-G6-HANDOFF-01` | `b20932999d838eebb3c42d3e07cf22af712776a5e6f36de43a1da378e3ff2c59` | `UK-G6-AC01…AC13` | `UK-G6-D01…D05` |
| `RES-TRADE-IN` | India Trade Resource | `pages/resources/india-trade/06_handoff/RES-TRADE-IN_GATE6_HANDOFF_PACKAGE_V0.1.md` | `RES-TRADE-IN-G6-HANDOFF-01` | `5fa99b705b7e8a21ec2d68eb68e2f9235f295d1723bf31387a3f882b8186e0e9` | `RES-TRADE-IN-G9-AC01…AC12` | `RES-TRADE-IN-G6-D01…D07` |
| `RES-TRADE-BR` | Brazil Trade Resource | `pages/resources/brazil-trade/06_handoff/RES-TRADE-BR_GATE6_HANDOFF_PACKAGE_V0.2.md` | `RES-TRADE-BR-G6-HANDOFF-02` | `9d0b24b5f49a7f275f6385e2db34ade3f12ffab58aa52012b59ce284b1dac592` | `BRTRADE-G9-01…13` | `BRTRADE-DEP-01…06` |
| `APP-COAT` | Coatings | `pages/applications/coatings/06_handoff/APP-COAT_GATE6_HANDOFF_PACKAGE_V0.1.md` | `APP-COAT-G6-HANDOFF-01` | `0ed6c22408f96e4282917b935dd551d0d0ed4b74becbd78a6eefac967460f915` | `APP-COAT-G9-AC01…AC13` | `APP-COAT-G6-D01…D08` |
| `APP-PLAS` | Plastics | `pages/applications/plastics/06_handoff/APP-PLAS_GATE6_HANDOFF_PACKAGE_V0.1.md` | `APP-PLAS-G6-HANDOFF-01` | `30b1a564dd7cb4dc04e9f7feeb2a3d904403d4313bfa20319aee84ac514f9c0d` | `APP-PLAS-G9-AC01…AC14` | `APP-PLAS-G6-D01…D08` |
| `APP-MB` | Masterbatch | `pages/applications/masterbatch/06_handoff/APP-MB_GATE6_HANDOFF_PACKAGE_V0.1.md` | `APP-MB-G6-HANDOFF-01` | `fc8f25356db20de25fbbbbfee086335563f5e017fdb4097726d058d045e64c7c` | `APP-MB-G9-AC01…AC14` | `APP-MB-G6-D01…D08` |
| `APP-INK` | Printing Inks | `pages/applications/printing-inks/06_handoff/APP-INK_GATE6_HANDOFF_PACKAGE_V0.1.md` | `APP-INK-G6-HANDOFF-01` | `fe8769f96f1450638d1b5f46650be69ca73daeb8efdb1e7d5c99acb2421d014c` | `APP-INK-G9-AC01…AC13` | `APP-INK-G6-D01…D08` |
| `APP-PAPER` | Paper | `pages/applications/paper/06_handoff/APP-PAPER_GATE6_HANDOFF_PACKAGE_V0.1.md` | `APP-PAPER-G6-HANDOFF-01` | `c50e1287cdd88a3ebac79cf0accd895be5292d43355b257a9974a9a2effcf1fa` | `APP-PAPER-G9-AC01…AC15` | `APP-PAPER-G6-D01…D08` |

每页以其当前 Manifest、批准 B/C 基线、完整视觉基线和上表 Gate 6交付包的批准组合为唯一实施输入；交付包中更细的验收编号、依赖、断点、Schema、表单、媒体和回退要求具有约束力。

2026-09-08接收校验更正：首次消息误列 Brazil Trade 历史 V0.1。目标任务接收检查发现当前 Manifest V0.9 已指向修复 PT-BR 入口合同的 V0.2。总控依“当前 Manifest 为唯一当前权威指针”规则将本记录更正为 V0.2；V0.1只保留为历史，不得实施。

## 2. Gate 8开发要求

1. 建立并报告实际开发基线，包括仓库、基准分支、工作分支或 worktree、起始提交及最终提交。
2. 完成 CMS/WordPress → API/GraphQL → Next.js 的数据、路由和渲染映射；`site_scope=tio2-my` 必须覆盖查询、路由、缓存、菜单、SEO、表单和媒体，禁止跨 scope fallback 或向其他站点泄露。
3. 复用批准的 Header/Footer、Global Chrome、生产 Logo、共享法律区、Consent、RFQ、Documents 与 Sample 能力，不创建页面私有分叉。
4. 按交付包实现桌面、平板和移动端状态，并至少保存 `1440 / 768 / 390` 三档可核验结果。
5. Trade Resource 四页在实施和首次发布前按各自交付包重新核对时效性权威来源。发现监管、税则、海关或法律事实变化时，记录差异并退回内容责任方决定，不得由开发静默改写批准事实。
6. `APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` 的 provisional URL/路由约束继续有效；未获批准不得自行改变 URL、主关键词、页面职责或导航归属。
7. 对每页逐项关联 Gate 9 AC，运行适用的 lint、typecheck、build、单元/集成及浏览器验证，并记录未验证项和阻塞项。

## 3. 回执要求

开发任务应返回一份可供 Gate 9 使用的逐页回执，至少包含：

- 实际分支/worktree、基准与最终 commit；
- CMS、API/GraphQL、Next.js 路由及组件映射；
- 变更文件清单；
- 测试命令与结果；
- `1440 / 768 / 390` 证据位置；
- Gate 9 AC 编号与实现/证据映射；
- Gate 6依赖的满足状态、开放项和未验证项；
- `site_scope=tio2-my` 七个表面的隔离证明；
- 回退方法。

## 4. 授权边界

本记录不授权合并到 release/main、部署、生产写入、发布、DNS、索引、真实外发表单或邮件，也不授权 Gate 9关闭。上述行为继续等待独立授权或对应阶段验收。

## 5. Gate 9依赖优先级协调（2026-09-08）

用户询问并同意由Gate 8修复当前实现依赖。现有Gate 8授权范围不变，但开发顺序应优先完成以下五条批准route，使Country Market的既有入口可达：

- `APP-COAT`：`/applications/titanium-dioxide-for-coatings/`
- `APP-PLAS`：`/applications/titanium-dioxide-for-plastics/`
- `APP-MB`：`/applications/titanium-dioxide-for-masterbatch/`
- `RES-TRADE-EU`：`/resources/eu-titanium-dioxide-anti-dumping-duty/`
- `RES-TRADE-IN`：`/resources/india-titanium-dioxide-anti-dumping-duty/`

完成后回执应提供五条route的实际200、准确Page ID、`site_scope=tio2-my`、批准内容、点击/返回路径及Trade时效复核证据，供Gate 9沿`ES-G9-F03`和`IN-G9-F01`定向复验。不得用隐藏入口、改href、Contact或跨scope fallback规避依赖。其余四页继续按原授权开发；本协调不扩大合并、部署、发布、Gate 9或Gate 10权限。

2026-09-08接收结果：集成候选runtime code `4fa585bc125c7b8fa926ab66059f4fc6887877f4`、evidence `58af74dbe44b4ccaafe517d592ecae5d5ff37ef2`、Build `1AwBNw0A1szLVVlTyLyQU`已由D23完成独立只读复验；5/5 route、Page ID、scope、批准href点击/返回及Trade freshness通过，`ES-G9-F03`与`IN-G9-F01`关闭。Gate 8已以D16 docs commit `84db14ee35fe118415bff8327f202ee712e7599c`接收结论并停止重复返修。详见[Gate 9 route依赖复验V0.3](../../pages/markets/07_qa/MARKET_FOUR_ROUTE_DEPENDENCY_TARGETED_RECHECK_V0.3.md)。该结果不扩大为整体Gate 9通过或后续授权。
