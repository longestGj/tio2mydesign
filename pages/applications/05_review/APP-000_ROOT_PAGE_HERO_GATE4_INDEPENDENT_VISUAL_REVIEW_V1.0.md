# APP-000 Root Page Hero 定向 Gate 4 独立视觉审查 V1.0

## 审查结论

**Review ID：** `APP-ROOT-HERO-G4-IR-01`

**对象：** `APP-ROOT-HERO-G4-CANDIDATE-01`

**审查状态：** `RETURN / REQUIRED_REVISIONS`
**独立性：** 审查者未参与本候选制作、捕获或冻结。

本次定向 Gate 4 候选不能进入 `PROJECT_CONTROL_REVIEW_PASS`。两个 P0 事项会使共享 Global Chrome 与已批准的 APP 路由/条件链接合同失真；两项 P1 使 Hero 锚点和共享 H1 token 未精确绑定。修订、重新捕获三断点证据并独立复审前，保持 `RETURN`。本报告不修改 APP 当前 Manifest、七页进度、Gate 9、SEO 或 Schema，亦不关闭任何 Gate。

## 审查范围与依据

本审查为只读复核，未访问 `D:\16Wordpress_nextjs`，未调用 Superdesign，未改动候选源或其冻结资产。

- 根规则：`AGENTS.md`、`PROJECT_CONTEXT.md`、`01_PROJECT_INDEX.md` 的 Gate 4/根页入口。
- 共享/控制合同：`docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md`、`docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md`、`docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_PROGRESS_V1.0.md`、`docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md`、当前 Global Chrome/Logo 合同。
- 样板与页面上游：Home V1.3 样板，`pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md`、APP 批准 Brief、Gate 2 Buyer Clean、Gate 3 输入及 APP 当前完整视觉基线。
- 被审查成果：
  - `pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md`
  - `pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md`
  - `pages/applications/04_planning/visual-designs/app-root-page-hero-v1.0/` 全部候选源、冻结记录、1440/768/390 证据。

## 已确认符合项

- 冻结候选 HTML 与三张 PNG 均匹配冻结记录；作者验证器的三断点运行时检查为 PASS。
- H1 文案、引言、主 CTA `Explore Applications → #application-selector`、次 CTA `Request a Quote → /request-a-quote/` 与批准 Buyer Clean 一致。
- Hero 信息卡的六个标签及显示顺序正确：Coatings、Plastics、Masterbatch、Printing Inks、Paper、Specialty Materials。
- Hero 后首模块标题为 `Choose by Application`，并保留批准的 `Grades to Review` 资格说明。
- 1440、768、390 三图均未见买家可见 `CURRENT`、左侧绿色竖线、巨大 Hero 外框、圆角/阴影/渐变 Hero 壳；三断点均无横向 overflow，交互目标不小于 44px，H1 保持两行。
- 未发现候选文件对 APP Gate 9、SEO、Schema 或批准正文源的修改；但下述 P0 的预览链接已超出“只作 Hero 定向证明、正文不变”的边界。

## 必修返工项

| 优先级 | ID | 可验证发现 | 必修修订与复验条件 |
|---|---|---|---|
| P0 | `APP-RH-G4-IR-01` | 桌面主导航缺少 `Home`。当前顺序为 `Markets / Products / Applications / Documents / Resources / About`，不符合 Global Chrome V0.5 所定完整可见导航 `Home / Markets / Products / Applications / Documents / Resources / About`。 | 消费完整共享 Global Chrome：在桌面 `Home` 置于 `Markets` 前，维持 Applications 激活下划线、RFQ 以及 `CURRENT=0`。重新捕获 1440、768、390，并复验所有断点。 |
| P0 | `APP-RH-G4-IR-02` | Hero 后的 `Choose by Application` 预览把集合卡硬连至 `/applications/coatings/` 等，并包含禁止的第六应用子路由 `/applications/specialty-materials/`。这制造未批准的 Specialty Materials 应用页，并将 Gate 6 的条件 CTA/仅五个应用子 CTA 规则改成无条件链接。 | 将后续模块仅作为不改变正文的过渡证明，或严格消费当前批准模块状态。不得存在 `/applications/specialty-materials/`；不得制造无条件的六个应用子路由。Specialty 应保持非应用子路由（仅在现有条件获满足时可按批准链路指向 CR-901 产品页）。重新捕获并更新冻结哈希。 |
| P1 | `APP-RH-G4-IR-03` | Hero 信息卡的实际 href 为 `#coatings`、`#plastics`、`#masterbatch`、`#printing-inks`、`#paper`、`#specialty-materials`，而批准 Buyer Clean 的精确目标是 `#application-coatings`、`#application-plastics`、`#application-masterbatch`、`#application-printing-inks`、`#application-paper`、`#application-specialty-materials`。 | 六个 Hero 卡必须使用批准的 `#application-*` 目标，并能在对应预览/实现中解析。重新跑独立 href 检查及三断点捕获。 |
| P1 | `APP-RH-G4-IR-04` | 候选 H1 的 computed `font-weight` 为 `730`；共享 RootPageHero 合同要求 H1 token 为 `700`（56/44/36px）。 | 将共享 H1 token 固定为 `700`，保持桌面/平板/移动 H1 分别 56/44/36px 与既有行数/无 overflow。重新跑三断点运行时检查和捕获。 |

## 独立重跑证据

审查专用、只读验证器：

`pages/applications/05_review/APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_VALIDATOR_V1.0.cjs`

执行命令：

```powershell
node APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_VALIDATOR_V1.0.cjs
```

结果：`RETURN`（预期的非零退出，因为 IR-08、IR-10、IR-11、IR-12 不通过）。完整机器可读结果：

`pages/applications/05_review/APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_EVIDENCE_V1.0.json`

| 检查 | 结果 |
|---|---|
| IR-01 冻结 HTML SHA | PASS |
| IR-02 1440/768/390 PNG SHA | PASS |
| IR-03 作者运行时三断点结果 | PASS |
| IR-04 H1 尺寸/两行 | PASS |
| IR-05 Chrome 高度、44px、overflow | PASS |
| IR-06 `CURRENT=0` 与 open-white 无外壳 | PASS |
| IR-07 两个 Hero CTA 精确目标 | PASS |
| IR-08 六个 Hero 信息卡精确锚点 | FAIL（P1） |
| IR-09 Hero 后首模块精确标题/说明 | PASS |
| IR-10 完整桌面 Global Chrome 导航 | FAIL（P0） |
| IR-11 H1 `font-weight:700` | FAIL（P1） |
| IR-12 后续模块无新增/无条件应用子路由 | FAIL（P0） |

三张冻结 PNG 已以 `original` detail 独立视觉检查：1440 桌面图直接可见遗漏 Home；768 和 390 图的紧凑 Chrome、开放白色 Hero 与 CTA/模块过渡均可见，未见额外装饰或裁切。未重跑作者 capture 脚本，避免覆盖其冻结资产。

## 哈希与可追溯性

| 项目 | SHA-256 |
|---|---|
| Binding V1.0 | `F1563BE64F4CDF46DDB9831138F6584FD17E24ECC230EF47998FEA2E450DD2F6` |
| Candidate V1.0 | `CDF838AD60890044BF61AAC0CF4B971ABCF34353EB22C58A2447EDC90D357F98` |
| 候选 HTML | `CDF3BD13A21FF663A5142780AF2F4EB4766055CEF04F084B8B6328D4DFAD7A83` |
| 冻结记录 | `861D949396A10DE8AAAF7392963AB1D7FC010066C8D4F2530668921B99EB1DDE` |
| 1440 PNG | `C864C632E950F9C3E962550A79B5FC03B5C08010A29A2C01282C7302CD265E74` |
| 768 PNG | `CE5DBCA7F4300ADF298145FE73F77F788413FD06A2BD082A603996091609F63C` |
| 390 PNG | `9B7B5531234D0B072AC68A316BF4C1204D3A96ECE8C9FADE077604A33F157736` |
| 独立验证器 | `2771D52CA8554873F704DFDD6FB20A80BF98B18027659B36A78F295405E639DD` |
| 独立证据 JSON | `5752013A0C1ACE0DB332DD3BAF216F425BF6C42618EACA99E322F6732ED93403` |

## 状态边界

本报告仅为 APP-000 Root Page Hero 定向 Gate 4 的独立审查结果。候选修订须保留既有批准正文、Gate 9 结论、SEO/Schema 和页面范围；修订完成后需形成新候选/冻结记录并再次独立审查。不得据此更新 `APP-000_CURRENT_GATE_BASELINE_MANIFEST`、七页集体进度，或作任何 Gate 关闭。
