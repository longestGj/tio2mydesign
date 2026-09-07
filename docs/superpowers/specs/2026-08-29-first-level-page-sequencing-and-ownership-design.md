# TiO2 Malaysia 一级页面优先与任务归属设计 V0.1

## 1. 决定

项目先完成全部一级页面，再开始制作二级页面。二级页面不单独新建执行任务，统一由其所属一级页面的原任务继续完成。

本规则只调整制作顺序与任务归属，不改变现有 54 页架构、Page ID、URL、主关键词、页面职责、事实冻结或 WordPress/Next.js 开发边界。

## 2. 一级页面定义

一级页面按已批准 Header 的八个入口定义：

1. Home — `HOME-001` — `/`
2. Markets — `MARKET-000` — `/markets/`
3. Products — `PRODUCT-000` — `/products/`
4. Applications — `APP-000` — `/applications/`
5. Documents — `DOC-000` — `/documents/`
6. Resources — `RES-000` — `/resources/`
7. About — `ABOUT-001` — `/about/`
8. Request a Quote — `CONV-RFQ` — `/request-a-quote/`

Home 已完成。Products Hub 与 Markets Hub 按现有任务继续。后续一级页面按 Applications、Documents、Resources、About、Request a Quote 的顺序建立执行任务。

## 3. “一级页面完成”的项目含义

`D:\23MySec` 只负责视觉、SEO、GEO、内容架构和开发交付规格。因此，本规则中的“一级页面完成”是指一级页面达到 `APPROVED_FOR_HANDOFF`：

- 页面任务卡、Playbook 和事实边界获批；
- Gate 1–5 完成；
- 桌面端与手机端视觉稿获批；
- SEO、GEO、内链、Schema、CTA 和开发交付规格完整；
- 阻塞级问题关闭；
- 未授权本项目编写 WordPress/Next.js 代码。

只有八个一级页面全部达到该状态后，才开始新的二级页面制作周期。外部开发是否完成不改变本项目的页面制作顺序。

## 4. 页面体系与执行任务归属

| 一级页面任务 | 先完成的一级页面 | 之后由同一任务负责的二级/工具页面 |
|---|---|---|
| Home | `HOME-001` | 当前无独立二级页面；负责全站首页入口一致性 |
| Markets | `MARKET-000` | `MARKET-EU-001`、6 个 EU 国家页、UK、India、Brazil EN、Brazil PT-BR |
| Products | `PRODUCT-000` | 2 个 Process 页面与 14 个 Grade 页面；已完成的统一模板和历史成果保留 |
| Applications | `APP-000` | Coatings、Plastics、Masterbatch、Printing Inks、Paper |
| Documents | `DOC-000` | REACH、TDS/SDS/COA、Certificate of Origin |
| Resources | `RES-000` | Non-China Guide、Process Comparison、Chemours Alternatives、Ti-Pure R-706 Alternative Direction、4 个 Trade Update 页面 |
| About | `ABOUT-001` | `CONTACT-001` |
| Request a Quote / Conversion | `CONV-RFQ` | `CONV-SAMPLE`、`CONV-DOC` |

归属任务负责其页面体系的 Playbook、页面任务卡、证据审计、内容架构、线框、视觉、SEO、GEO、开发交付规格和只读 QA。它不得改变登记册中的页面身份，也不得跨体系接管其他任务的页面。

### 4.1 54 页归属覆盖核对

| 体系 | 页面数 | 唯一归属范围 |
|---|---:|---|
| Home | 1 | `HOME-001` |
| Markets | 12 | `MARKET-000`、`MARKET-EU-001`、`MARKET-EU-DE`、`MARKET-EU-IT`、`MARKET-EU-ES`、`MARKET-EU-PL`、`MARKET-EU-NL`、`MARKET-EU-BE`、`MARKET-UK-001`、`MARKET-IN-001`、`MARKET-BR-EN`、`MARKET-BR-PT` |
| Products | 17 | `PRODUCT-000`、`PRODUCT-PROC-CL`、`PRODUCT-PROC-SU`、`GRADE-M350`、`GRADE-M510`、`GRADE-M896`、`GRADE-M996`、`GRADE-M2196`、`GRADE-M895`、`GRADE-M200`、`GRADE-M108`、`GRADE-M210`、`GRADE-M340`、`GRADE-M886`、`GRADE-M52`、`GRADE-M2377`、`GRADE-CR901` |
| Applications | 6 | `APP-000`、`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` |
| Documents | 4 | `DOC-000`、`DOC-REACH`、`DOC-TDS`、`DOC-COO` |
| Resources | 9 | `RES-000`、`RES-ORIGIN`、`RES-PROC`、`RES-CHEMOURS`、`RES-R706`、`RES-TRADE-EU`、`RES-TRADE-UK`、`RES-TRADE-IN`、`RES-TRADE-BR` |
| About | 2 | `ABOUT-001`、`CONTACT-001` |
| Conversion | 3 | `CONV-RFQ`、`CONV-SAMPLE`、`CONV-DOC` |
| 合计 | 54 | 8 个一级页面 + 46 个所属页面；无重复归属、无遗漏 |

## 5. 执行顺序

### 阶段 A：完成全部一级页面

1. Home：保持已完成状态，只处理总控审查发现的必要修订。
2. Products Hub：由现有 Products 任务完成至 `APPROVED_FOR_HANDOFF`。
3. Markets Hub：由现有 Markets 任务完成至 `APPROVED_FOR_HANDOFF`。
4. Applications Hub：新建一个 Applications 一级页面任务。
5. Documents Hub：新建一个 Documents 一级页面任务。
6. Resources Hub：新建一个 Resources 一级页面任务。
7. About：新建一个 About 一级页面任务，并在阶段 B 继续负责 Contact。
8. Request a Quote：新建一个 Conversion 一级页面任务，并在阶段 B 继续负责 Sample 与 Request Documents。

阶段 A 中不得因为某个二级页面优先级为 P0，就提前跳过尚未完成的一级页面。P0 继续表示同层级内的重要性，不覆盖本次用户批准的全站制作顺序。

### 阶段 B：由原一级任务制作二级页面

八个一级页面全部完成后，项目总控按页面优先级、事实准备度和业务价值安排各体系的二级页面。每个一级任务在原对话中继续，不为单个二级页面新建对话。

建议起始顺序：

1. Markets 任务：European Union、United Kingdom、India、Brazil，再做 EU 国家页。
2. Applications 任务：Coatings、Plastics、Masterbatch、Printing Inks、Paper。
3. Documents 任务：TDS/SDS/COA、REACH、Certificate of Origin，受事实证据门禁控制。
4. Resources 任务：依次覆盖 Non-China Guide、Process Comparison、Chemours Alternatives、Ti-Pure R-706 Alternative Direction 与 4 个 Trade Update 页面；具体顺序按已批准优先级、映射状态和官方资料新鲜度安排。
5. About 任务：Contact。
6. Conversion 任务：Request a Sample、Request Documents。
7. Products 任务：沿用并完善 2 个 Process 页面和 14 个 Grade 页面；现有已完成成果不因新顺序而作废。

阶段 B 的具体跨体系先后顺序仍由项目总控和用户批准，不由执行任务自行决定。

## 6. 对当前任务的影响

- Products 任务继续完成 `PRODUCT-000`，但在阶段 A 结束前不得启动新的 Process 或 Grade 页面制作。已存在的产品模板和成果保留。
- Markets 任务继续完成 `MARKET-000`，但不得在 Markets Hub 完成后立即启动 European Union 页面；必须等待全部一级页面完成。
- 原先“Markets Hub 后做 European Union”的排期被本规则替代。新的下一张一级页面是 Applications Hub。
- 项目总控负责保存现有任务 ID，并在阶段 B 恢复原任务，而不是创建二级页面任务。

## 7. 质量与治理规则

- 每个二级页面仍需独立 Page Brief、Gate 审查、桌面/手机视觉稿和证据门禁。
- 同一对话负责多个页面不等于批量复制。每个 Market、Application、Document 或 Resource 页面必须具备独有内容和证据。
- 一个一级任务一次只能推进一个明确页面或一个获批准的同类批次，避免混淆状态与证据。
- 二级页面发现的新 SOP 建议先写入候选记录，经总控与用户批准后再更新正式 Playbook。
- 事实冻结只影响相关声明，不影响不依赖该事实的结构和视觉工作。
- 本项目继续禁止代码、CMS、测试、部署和发布操作；外部实现由 `D:\16Wordpress_nextjs` 负责。

## 8. 需要同步的治理文件

本设计获书面确认后，同步更新：

- `AGENTS.md`：增加一级页面优先、同任务负责二级页面的硬规则。
- `00_PROJECT_STATUS.md`：替换当前页面建设顺序。
- `01_PROJECT_INDEX.md`：增加本规则的当前入口。
- `02_DIRECTORY_GUIDE.md`：说明页面目录不等于独立对话，任务按页面体系归属。
- `docs/architecture/PAGE_REGISTRY_V0.1.md`：增加任务归属说明，但不修改 54 页记录。
- 向现有 Products 与 Markets 任务发送新的顺序和归属要求。

## 9. 验收标准

- 八个一级页面及其顺序在所有当前治理文件中一致。
- 每个二级页面只能映射到一个一级任务。
- 下一张新页面明确为 Applications Hub，而不是 European Union。
- 54 页数量、Page ID、URL、主关键词和 mapping/verification 状态保持不变。
- Products 与 Markets 现有任务确认收到暂停二级页面的要求。
- 没有创建新的二级页面对话，没有修改 `D:\16Wordpress_nextjs`。

## 10. 批准记录

| 日期 | 决定 | 状态 |
|---|---|---|
| 2026-08-29 | 用户确认一级页面按 Header 八个入口定义，并要求先完成全部一级页面；二级页面由所属一级页面原任务负责 | 设计方向已确认；书面规格待复核 |
