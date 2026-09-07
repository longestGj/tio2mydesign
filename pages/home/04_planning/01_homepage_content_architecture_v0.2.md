# TiO₂ Malaysia 首页内容架构 V0.2

## 0. 文档状态

| 项目 | 内容 |
|---|---|
| 文档类型 | 首页内容架构；不是视觉稿、线框图或最终文案 |
| 当前状态 | 主控第一轮审查有条件通过；等待 V0.2 主控与用户确认 |
| 日期 | 2026-08-29 |
| 首页主关键词 | `malaysia titanium dioxide` |
| 批准方案 | 方案 1：市场优先的采购路径型首页 |
| 阶段权限 | 当前只批准内容架构修订；尚未授权线框、视觉、实施计划或代码 |

本文件只允许使用模块级工作标题和说明性占位。所有既有首页 HTML、截图与视觉稿仅作为 **Rejected Reference** 保留，不删除、不覆盖，也不作为本文件的内容架构依据。

## 1. 当前唯一有效基线

1. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
2. `keyword-research/11_page_keyword_master.csv`
3. `01Visio/TiO2_Malaysia_Visual_Standard_V1.0.md`
4. `homepage/03_results/03_homepage_input_requirements.md`

发生冲突时，页面职责和关键词所有权以 PRD V0.4 与页面—关键词主表为准。视觉标准只约束品牌气质与 UI 语言，不能决定首页模块、页面所有权或正式文案。

## 2. 主控审查决定

主控对 V0.1 的第一轮审查结论为“方向有条件通过”。以下事项已经决定，不再作为用户选择题：

1. 采用方案 1，即市场优先的采购路径型首页；主体内容顺序固定为 Markets → Products → Applications → About/Origin → Documents → Resources → RFQ。
2. Hero 主 CTA 为 `Request a Quote`，次 CTA 锁定为 `View Products`；Hero 不默认展示 `Request Documents`。
3. Hero 下方只设置一个紧凑的三入口采购决策条，分别导向 Markets、Products、Documents；不得扩展为大型内容模块。移动端将该决策条与 Hero 后续入口合并。
4. 桌面 Products 模块在四组紧凑文字、标签或展开结构中显示全部 14 个型号 ID，不制作 14 张卡片、不写 14 段详情。唯一主 CTA 为 `View All 14 Grades`，工艺入口只作次级文本路径。
5. 当前版本首页不显示 Sample CTA；样品资格、数量、运费、流程和责任人全部批准后，才能在后续版本评估加入。Final RFQ 只保留 `Request a Quote`。
6. Applications 五个子页可使用批准的页面名称和 `page_id`，但 `PROVISIONAL_URL` 不能锁定为最终链接。视觉阶段只标注目标 `page_id`，开发前由后续 PRD 批准 URL。
7. Documents 当前只锁定 `DOC-000` Documents Hub 和 `CONV-DOC` Request Documents 两条路径。其他文件子页只作信息架构目标，在 URL 与事实证据解决前，首页视觉不得表现为已上线或可提供的正式文件卡片。
8. AI 图、库存图和概念图不能作为企业、工厂、实验室、仓库、装运或其他事实证明；证明型模块只能使用已验证且获授权的真实资产。
9. `Malaysia-Origin` 是批准的战略定位，但 Made in Malaysia、manufactured in Malaysia、COO、批次追溯等公开表述继续受证据门槛约束。线框必须标注 `FACT COPY PENDING`。
10. 移动导航、模块压缩和页面长度是线框阶段的硬验收项：不得隐藏导航，不得用无限横向滑动承载核心入口，不得机械纵向堆叠桌面内容。

### 2.1 阶段门槛

```text
V0.2 经主控与用户确认
→ 仅授权低保真桌面端与移动端线框
→ 线框经批准
→ 才授权视觉设计
→ 视觉经批准
→ 才授权实施计划与代码
```

当前不得制作或修改 HTML、CSS、JavaScript、图片、视觉稿或线框图。

## A. 现稿冲突清单

| 冲突项 | 现稿问题 | 与最新基线的冲突 | 本轮纠正 |
|---|---|---|---|
| 旧 Header 导航 | 缺少可见的 `Home`；部分版本将 Logo 当作首页入口；出现独立 `Malaysia Origin` 项；导航项顺序与数量不一致 | PRD V0.4 锁定可见文字导航，Home 必须为第一项，Logo 不能替代 Home | Header 严格采用 PRD 的八项文字导航与 RFQ 按钮 |
| 独立 Malaysia Origin 入口 | 将 Malaysia Origin 作为一级栏目、首页主入口或独立 canonical owner | PRD V0.4 已删除独立 Malaysia Origin 一级栏目；相关意图重新归属 Home、About、Documents、Resources | 首页只保留价值摘要；事实证明归 About；文件归 Documents；替代来源研究归 Resources |
| 首页关键词偏离 | Hero 和主体过度围绕 `Malaysia-origin titanium dioxide`、文件或市场组合词，弱化 `malaysia titanium dioxide` | 主表明确 Home 唯一主关键词为 `malaysia titanium dioxide`，supplier/exporter 为同一商业意图的辅助语义 | 首页重新承担宽泛 Malaysia TiO₂ 商业供应意图，不抢 About、Markets 或 Documents 的词 |
| Products 弱化 | 产品只作为泛称或少量应用入口，未清楚呈现 14 个型号、四个展示分组、Products Hub 与两个工艺页 | PRD V0.4 要求新站承担全部 14 个型号的主要 SEO 与询盘转化；Products Hub 为 P0 | 首页设置显著产品选型模块，明确显示 `14 grades`、四组入口及 Chloride/Sulfate 聚合页入口 |
| Markets 弱化 | 市场只作为小标签、尾部链接或装饰性卡片；没有体现 EU、UK、India、Brazil 的主要采购入口地位 | Market-First Hybrid Architecture 要求 Markets 成为核心采购路径；四个主市场均有明确页面所有权 | Markets 在首页前半段成为主模块；EU 六国由 EU 体系承接，不在首页展开国家正文 |
| 移动导航缺失 | 部分响应式稿直接隐藏桌面导航，仅保留 Logo 与 RFQ，没有菜单按钮和可访问的全量导航 | 移动端仍必须访问全部顶层栏目，Home 仍须为第一项 | 采用菜单按钮 + 抽屉/面板；完整保留八项文字导航和 RFQ |
| 未核验事实 | 使用或暗示制造工厂、实验室、稳定产能、库存、交期、仓库、出口能力、REACH、COO/TDS/SDS/COA 可用性、批次追溯、技术支持等事实 | 输入清单要求真实材料；主表对 About、Documents、产品技术字段标记了证据或技术核验状态 | 未核验事实不形成正式文案；模块保留位置但只显示中性说明或不渲染 |
| 职责越界 | 首页尝试详细解释原产地证明、文件申请、贸易政策、生产追溯、应用选型和国家市场内容 | About、Documents、Resources、Markets、Products、Applications 均有独立关键词和页面职责 | Home 只概述、回答第一层采购问题并导流；详细内容交给 canonical owner |
| 视觉参考反向决定架构 | 依据旧视觉图中的卡片与顺序锁定 Markets、Products、Documents 或 About 的结构 | 视觉标准明确视觉稿仅是 Visual Direction Reference | 先批准本内容架构，再单独进行视觉设计 |

## B. 首页职责与搜索意图

### B.1 首页唯一核心职责

首页负责承接对 Malaysia TiO₂ 供应来源有商业采购意图的访客，快速完成四件事：

1. 确认网站提供的是面向工业买家的 Malaysia TiO₂ 供应路径。
2. 按目标市场、产品型号或应用进入正确的决策页面。
3. 了解可进一步核验的主体、原产地和文件路径，但不在首页完成全部证明。
4. 进入 RFQ；文件和样品作为条件化的辅助转化。

### B.2 关键词与语义

| 层级 | 关键词/语义 | 首页处理 |
|---|---|---|
| 主关键词 | `malaysia titanium dioxide` | 首页唯一主关键词；用于页面主题、首要标题语义和核心说明 |
| 辅助商业语义 | `titanium dioxide malaysia`、`malaysia tio2`、`titanium dioxide supplier malaysia`、`malaysia titanium dioxide supplier` | 自然支持 supplier search，不另建竞争页面 |
| 辅助出口语义 | `malaysia titanium dioxide exporter`、`export titanium dioxide from malaysia` | 只在获得出口关系和能力证据后使用；当前作为语义规划，不形成承诺 |
| 排除意图 | 国家 supplier 精确词、型号词、non-China guide、company-proof、文件精确词 | 分别交给 Markets、Grade Pages、Resources、About、Documents |

### B.3 首页与各栏目的内容边界

| 页面/栏目 | 关键词或状态 | 首页可以做 | 首页不能做 |
|---|---|---|---|
| About | `malaysia titanium dioxide manufacturer` | 一句话说明平台与运营主体，并链接 About | 详细证明制造地点、主体关系、生产、质量和追溯 |
| Markets | Hub 无主关键词；EU/UK/India/Brazil 各有 supplier 词 | 展示四个主采购入口及其第一层买家关注点 | 展开国家百科、法规细节、完整国家 SEO 正文 |
| Products | `titanium dioxide pigment`；14 个型号各自拥有型号词 | 明确 14 grades、四组、工艺入口和选型路径 | 在首页堆叠 14 段详情或抢型号词 |
| Applications | Hub 无主关键词；五个子页拥有泛应用词 | 展示 coatings、plastics、masterbatch、printing inks、paper 入口 | 把型号页写成泛应用页，或在首页发布未核验性能结论 |
| Documents | Hub 无主关键词；子页拥有 REACH、TDS/SDS/COA、COO 词 | 列出文件类别与申请路径 | 宣称文件一定可用、适用所有型号/市场或公开文件内容 |
| Resources | Hub 无主关键词；指南和市场更新拥有研究意图 | 展示少量采购指南/更新入口 | 在 Hero 中作关税、反倾销或替代等确定性销售承诺 |
| RFQ | `titanium dioxide quote supplier` | 作为首页主要转化目标 | 用 RFQ 页抢首页 supplier 主意图 |

### B.4 GEO / Answer Engine 处理原则

GEO 作为内容表达层，不创建新的首页关键词所有权。首页各核心模块可使用简短、直接、可引用的答案句，并明确链接到事实 owner 页面；可见正文与后续结构化数据必须一致。没有证据的答案不生成，也不使用 Schema 放大未核验主张。

## C. Header

Header 必须严格采用以下可见文字顺序：

```text
Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote
```

强制规则：

- `Home` 是第一项可见文字导航。
- Logo 可以链接 `/`，但不能替代 `Home`。
- `Request a Quote` 是唯一 Header 主按钮。
- 不恢复 `Malaysia Origin` 独立导航项。
- 桌面端展示完整导航；移动端放入完整菜单，不能简单隐藏。
- Markets、Products 可在后续交互设计中使用下拉/大菜单，但信息层级必须以 PRD V0.4 为准。

## D. 已批准的首页模块顺序表

以下顺序对应主控已批准的“方案 1：市场优先的采购路径型首页”。所有标题均为工作标题，不是最终营销文案；任何证据受限内容在线框中只允许使用状态占位。

| 顺序 | 模块工作标题 | 模块目标 | 服务的买家问题 | 关键词/语义 | 主要内容 | 目标页面 | 主 CTA | 次 CTA | 所需证据 | 事实未验证时的处理 |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Header | 提供完整全站入口和持续 RFQ 路径 | 我能从哪里进入市场、产品、文件或报价？ | 导航层，不新增关键词 | PRD 锁定的八项文字导航；Logo；RFQ | 全站顶层栏目 | Request a Quote | 无 | 已批准 IA、Logo 资产 | 不使用未核验企业联系方式或能力短句 |
| 2 | `[Hero：Malaysia TiO₂ 采购入口]` | 在首屏建立首页主题、受众和第一行动 | 这是什么供应平台？是否服务工业采购？下一步是什么？ | `malaysia titanium dioxide`；supplier 语义 | 1 个 H1 主题；2–3 句说明性占位；主要受众/范围；不展开 origin 证明 | RFQ、Products | Request a Quote | View Products（锁定） | 品牌关系、可公开供应定位、受众范围 | 只写中性平台定位；不写 manufacturer、stable supply、lead time 或证书承诺；不得以 Request Documents 替代次 CTA |
| 3 | `[快速采购路径：紧凑三入口决策条]` | 让买家立即选择 Market、Product 或 Documents 路径 | 我应该按目的市场、牌号还是文件开始？ | supplier / product selection / documents 语义 | Hero 下方单一紧凑导航条；三个入口及极短说明；不是独立大型内容区 | Markets、Products、Documents | Explore Markets | View Products / Documents | 页面架构已批准 | 不需要企业事实；移动端与 Hero 后续入口合并，禁止重复模块 |
| 4 | `[Markets：四个主要采购入口]` | 强化 Market-First 架构并导入各市场 canonical owner | 是否有适合 EU、UK、India、Brazil 的采购入口？ | Europe/UK/India/Brazil supplier 语义的概述 | EU、UK、India、Brazil 四个入口；各自 1 个买家关注点；EU 入口提示有六个重点国家路径 | `/markets/`、EU、UK、India、Brazil | Explore Your Market | View All Markets | 市场页面映射；所有市场事实需官方/业务资料 | 不写法规已满足、关税结论、确定物流或交期；只写采购路径 |
| 5 | `[Products：14 Grades 与选型路径]` | 明确产品深度，并把买家导向 Hub、分组、工艺和型号页 | 有多少型号？我如何按应用或工艺选型？ | `titanium dioxide pigment`、rutile、grades、chloride/sulfate 概述 | 明示 `14 grades`；四组紧凑文字/标签/展开结构；桌面端显示全部 14 个型号 ID；不制作 14 张卡片或 14 段详情 | Products Hub、两个工艺页、14 型号页 | View All 14 Grades（唯一主 CTA） | Chloride Process / Sulfate Process（文本路径） | 产品清单和分类；各型号技术资料 | 只显示已批准型号和分类；M-2377 不标工艺；技术性能未核验则不显示 |
| 6 | `[Applications：按使用场景进入]` | 让技术/采购人员从应用进入，不与型号页争词 | 哪些页面帮助我按应用匹配 TiO₂？ | coatings、plastics、masterbatch、printing inks、paper | 五个应用入口；每项只描述买家决策主题；明确 TiO₂ for masterbatch 不是 finished masterbatch | Applications Hub；`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` | Explore Applications | View Suitable Grades | 应用架构；最终型号映射和技术资料 | 只记录目标 page_id；不得把 PROVISIONAL_URL 锁定为最终 href；不发布未核验推荐 |
| 7 | `[About 摘要：Malaysia Origin 与运营主体]` | 提供信任入口，但把证明职责留给 About | 谁在运营？Malaysia origin 如何进一步核实？ | broad origin value；不主攻 manufacturer 词 | 品牌/运营主体关系的批准表述；origin/production/traceability 可核验内容的目录式摘要 | `/about/`、Contact | Learn About TiO₂ Malaysia | Contact | 注册主体、品牌关系、制造/原产地/追溯材料 | 只有 verified 字段渲染；若制造和追溯证据未批，只保留平台与运营主体说明 |
| 8 | `[Documents：文件信息与申请路径]` | 把文件需求导向 Documents Hub 与受控申请流程 | 我从哪里了解文件类型或提交文件申请？ | documents / request documents 语义 | 现阶段只展示 Documents Hub 与 Request Documents 两条路径；其他文件类别仅为内部 IA 目标 | `DOC-000` Documents Hub、`CONV-DOC` Request Documents | Request Documents | View Document Information | 文件目录、版本、适用型号/市场、批准用语、申请流程 | REACH、TDS/SDS/COA、COO 未解决 URL 与证据前，不得呈现为已上线或可提供的正式文件卡片 |
| 9 | `[Resources 与采购问答]` | 承接研究型需求并提供轻量 GEO 答案 | 哪里查看替代来源、工艺选择或市场贸易更新？ | non-China guide、process comparison、trade update 的摘要 | 最多 2–3 个资源入口；3 个以内直接采购问答；显示来源/更新时间要求 | Resources、已批准/规划中的指南与更新 | View Resources | 对应 Market / Product | 官方来源、更新日期、技术比较证据 | NEW_PAGE_CANDIDATE 不作为已发布入口；贸易结论未审不显示 |
| 10 | `[Final RFQ：提交采购需求]` | 将已获得上下文的访客转为有效询盘 | 如何提交目的地、应用、型号/指标、数量、包装和文件需求？ | quote / purchase action；不抢其他页主词 | RFQ 价值说明；字段摘要；隐私/响应占位；当前版本不展示 Sample | `CONV-RFQ` Request a Quote | Request a Quote | 无 | RFQ 负责人、字段、隐私同意、真实响应规则 | 没有 SLA 不写响应时间；当前版本禁止 Sample CTA |
| 11 | Footer | 提供完整栏目、主体和合规性导航收口 | 如何再次找到页面、主体与联系入口？ | 导航层 | 全站栏目、运营主体、Contact、隐私/法律入口占位 | 顶层栏目、Contact | Request a Quote | Contact | 已验证企业名称、地址、电话、邮箱和法律页面 | 未验证联系方式和地址不渲染；不从旧站直接复制 |

## E. Markets 路径

### E.1 首页呈现

首页必须把以下四个入口作为主要采购路径，而不是装饰性国旗或地名：

1. European Union
2. United Kingdom
3. India
4. Brazil

每个入口只回答第一层采购问题，例如：目标市场页面将承接供应商搜索、应用匹配、文件需求和 RFQ。首页不得替各市场写详细法规、关税、物流、价格或应用正文。

### E.2 EU 六国承接

EU 卡片首先进入 `/markets/european-union/`。EU 总页承担 Europe/EU supplier、统一合规和贸易背景，并继续承接：

- Germany
- Italy
- Spain
- Poland
- Netherlands
- Belgium

首页可以在 EU 入口下用一行辅助文字提示这六个国家路径，但不平铺六张国家卡，不复制六国内容，也不让国家词在首页形成主要优化对象。

### E.3 Brazil 语言边界

英文 Brazil 页已获页面映射；PT-BR URL 和本地化仍为 `PROVISIONAL_URL / LOCALIZATION_REVIEW_REQUIRED`。首页可以预留语言策略，但不得自动创建或宣称葡萄牙语页面已经批准上线。

## F. Products 路径

### F.1 首页必须明确显示的产品深度

- `14 titanium dioxide grades` 的明确数量信息。
- Products Hub：`/products/`。
- Chloride Process 聚合页。
- Sulfate Process 聚合页。
- 四个展示分组。
- 可进入每个独立型号页的清晰路径。
- 桌面端必须让买家直接看见全部 14 个型号 ID，但采用组内紧凑文字、标签或展开结构。
- 不制作 14 张首页产品卡，不为 14 个型号分别编写首页详情段落。
- `View All 14 Grades` 是该模块唯一主 CTA；Chloride Process 与 Sulfate Process 只作为次级文本路径。

### F.2 四个展示分组

| 展示分组 | 型号 | 数量 | 首页职责 |
|---|---|---:|---|
| Coatings Grades | M-350、M-510、M-896、M-996、M-2196、M-895 | 6 | 显示组名、型号 ID 和 Products/Applications 入口，不展开性能正文 |
| Plastics & Masterbatch Grades | M-200、M-108、M-210、M-340、M-886 | 5 | 区分 plastics 与 TiO₂ for masterbatch 的选型方向 |
| Inks & Multi-Application Grades | M-52、M-2377 | 2 | M-2377 只显示型号及 pending technical verification，不显示工艺/主应用结论 |
| Specialty Grade | CR-901 | 1 | 只使用已验证的特种产品字段 |

桌面端必须在四个分组内紧凑列出全部 14 个型号 ID。移动端首层显示四组及数量，并提供明确的 `View All 14 Grades`；组内型号可通过可访问的展开面板查看，但不能用 14 段长正文拖长首页，也不能以横向滑动作为唯一访问方式。

### F.3 关键词边界

- Products Hub 拥有 `titanium dioxide pigment`、rutile、grades 和 grade-selection 意图。
- 工艺页分别拥有 chloride 与 sulfate/sulphate 意图。
- 14 个型号页分别拥有 `型号 + titanium dioxide`。
- 首页只概述和导流，不以 14 个型号词作为主标题或重复优化目标。
- 不建立独立 Rutile 页面。

## G. Applications 路径

首页覆盖以下五个应用入口：

| 应用 | `page_id` | 子页主关键词 | 首页处理 | 与型号词的边界 |
|---|---|---|---|---|
| Coatings | `APP-COAT` | `titanium dioxide for coatings` | 第一优先应用入口；可同时解释 paint 语义归并 | 只导向应用页和 verified grades，不替型号页拥有型号词 |
| Plastics | `APP-PLAS` | `titanium dioxide for plastics` | 第一优先应用入口 | 不在首页发布 PVC/PE/PP/ABS/PET 的完整技术正文 |
| Masterbatch | `APP-MB` | `titanium dioxide for masterbatch` | 第一优先应用入口；明确是 TiO₂ input | 不把产品写成 finished titanium dioxide masterbatch |
| Printing Inks | `APP-INK` | `titanium dioxide for printing inks` | 次一级应用入口 | M-52 等型号仍由独立型号页拥有型号词 |
| Paper | `APP-PAPER` | `titanium dioxide for paper` | 较低优先级入口，但不得缺失 | 只展示入口和买家问题，不虚构适用型号 |

Applications Hub 和五个子页的最终 URL/映射仍需后续 PRD 批准。内容架构和线框可使用上表的批准页面名称与 `page_id`，但不得把 `PROVISIONAL_URL` 当作最终 href 锁定；视觉阶段也只标注目标 `page_id`。开发前必须取得最终 URL 批准。

## H. Origin、Documents、About 分工

| 内容 | 首页 | About | Documents |
|---|---|---|---|
| Malaysia origin 价值 | 简短价值摘要 | 提供主体、制造关系、原产地与追溯证明 | 说明并管理 COO/原产地文件 |
| 运营主体 | 适度可见的一句话 | 完整解释 TiO₂ Malaysia 与 IKHLAS 的关系 | 仅在文件申请/签发关系需要时引用 |
| 生产与质量 | 不作详细声明 | 展示经过批准的生产、质量、包装和追溯事实 | 说明相关文件的范围与申请 |
| 追溯 | 只提示可以进一步核实 | 说明真实流程、证据和责任关系 | COO/COA/批次文件的说明与受控申请 |
| 文件类型 | 类别概览 | 只作为信任目录 | 文件解释、适用范围、状态和 Request Documents |

强制规则：

- 不恢复独立 Malaysia Origin 一级页或 Header 项。
- Home 不主攻 `malaysia titanium dioxide manufacturer`。
- About 是 manufacturer/origin/manufacturing/traceability proof 的 owner。
- Documents 是文件意图和申请流程的 owner。
- `non china titanium dioxide` 等替代来源研究归 Resources。
- `Malaysia-Origin` 只作为批准的战略定位和首页价值摘要。Made in Malaysia、manufactured in Malaysia、COO、批次追溯等具体公开表述必须通过 evidence gate；在线框中统一标注 `FACT COPY PENDING`。

## I. 转化路径

### I.1 RFQ

- 首页主转化。
- 出现在 Header、Hero 和 Final RFQ。
- 跳转 `/request-a-quote/`，由 RFQ 页拥有 quotation/purchase-action 搜索意图。
- 应尽可能收集目的国家/港口、应用、型号或指标、采购量、包装、文件和样品需求。
- 没有真实 SLA、负责人和隐私流程时，不写响应时间承诺。

### I.2 Documents

- 首页次级转化。
- 只在 Documents 模块锁定 `DOC-000` Documents Hub 与 `CONV-DOC` Request Documents 两个目标路径；Hero 次 CTA 已锁定为 `View Products`，不展示文件 CTA。
- Documents Hub 解释文件信息；Request Documents 只负责受控申请和线索采集，不拥有信息型关键词。
- REACH、TDS/SDS/COA、COO 子页可以继续作为信息架构目标，但不得在视觉稿中显示为已上线或可提供的正式文件卡片。
- 在版本、适用型号、市场和审批条件未核实前，不宣称文件 available。

### I.3 Sample

- 当前版本首页不显示任何 Sample CTA，不进入 Header、Hero、Products 或 Final RFQ。
- 只有样品资格、数量、运费、流程和责任人全部获得批准后，后续架构版本才能评估加入。
- 本条不否定未来独立 Sample 流程，只明确当前首页版本不承担该转化路径。

## J. 桌面端与移动端信息优先级

### J.1 桌面端

1. Header 完整显示八项文字导航，Home 第一。
2. Hero 显示首页主题、主要受众、RFQ 与 Products 路径。
3. 前半页依次强化 Markets 和 Products，确保两者不是次要尾部内容。
4. Applications 提供五个使用场景入口。
5. About/Origin 与 Documents 分开呈现，避免职责混合。
6. Resources 只展示少量高价值入口。
7. Final RFQ 收口。

建议控制为 9–11 个结构块（含 Header/Footer），正文最大宽度和视觉节奏由后续视觉规格决定。首页不平铺六个 EU 国家正文、14 个型号长文或多个贸易更新全文。

### J.2 移动导航方案

- Header 保留 Logo、菜单按钮和紧凑 RFQ 行动。
- 菜单打开后，必须按以下顺序展示完整文字项：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote。
- Logo 仍链接首页，但菜单内必须保留 Home。
- 菜单支持键盘焦点、关闭按钮、当前页状态和足够触控区域；具体交互在实施规格中验收。
- 完整导航不得被隐藏、删减或只依赖 Logo/手势访问；这是低保真移动线框的硬验收项。

### J.3 移动模块压缩规则

| 桌面模块 | 移动端处理 |
|---|---|
| Hero + 快速采购路径 | 合并为首屏和紧随其后的 3 个文本入口；决策条不重复为第二个大型模块，避免复杂悬浮面板 |
| 四个 Markets | 2×2 或顺序列表；不使用横向难发现的无限滑动 |
| Products | 首层显示 `14 grades`、四组和总 CTA；组内型号可展开 |
| Applications | 五项紧凑列表/两列卡片；Paper 仍可见 |
| About + Documents | 保持职责分开，但减少说明文字；各保留一个清晰 CTA |
| Resources + Buyer Answers | 最多 2 个资源和 3 个简短答案；无证据则删除答案 |
| Final RFQ | 单列；只保留全宽 `Request a Quote`，不显示 Sample |

移动端目标不是机械缩小或机械纵向堆叠桌面页，而是保留：网站是什么、服务哪个市场、有哪些产品路径、如何核实、如何询价。删除装饰性重复内容，避免页面过长。核心入口不得依赖无限横向滑动；移动导航、模块压缩和可控页面长度均为低保真线框硬验收项，任一不满足则不得进入视觉阶段。

## K. 事实与证据清单

### K.1 `verified`

以下内容已可用于内容架构；其营销措辞仍需单独审核：

| 事实/结构 | 可公开的当前范围 | 来源 |
|---|---|---|
| 前台品牌与运营主体名称 | TiO₂ Malaysia；IKHLAS TITANIUM (MALAYSIA) SDN. BHD. | PRD V0.4 |
| 网站核心定位 | Malaysia-Origin Titanium Dioxide Supply Platform（作为战略定位） | PRD V0.4 |
| 四个目标市场 | EU、UK、India、Brazil | PRD V0.4 |
| 首页主关键词与页面职责 | `malaysia titanium dioxide`；Home 承接宽泛商业供应意图 | 页面—关键词主表 |
| 14 个型号 ID 与独立页面要求 | M-350 至 CR-901 的 14 个型号及扁平 URL | PRD V0.4 / 主表 |
| Products 四个展示分组 | 6 + 5 + 2 + 1 | PRD V0.4 |
| 已确认工艺分类 | PRD 所列 Chloride/Sulfate 型号；不含 M-2377 | PRD V0.4 |
| 顶层导航与页面所有权 | Home、Markets、Products、Applications、Documents、Resources、About、RFQ | PRD V0.4 / 主表 |

说明：战略定位“Malaysia-Origin”不等于所有制造、COO、批次或具体交易事实已经核验。正式 origin 声明仍需证据登记；在线框阶段一律使用 `FACT COPY PENDING`，不得提前形成已验证营销文案。

### K.2 `pending_verification`

以下内容未获得资料支持前不得形成正式首页文案：

- IKHLAS、制造主体、工厂主体与具体生产地点之间的准确法律/运营关系。
- “Manufactured in Malaysia”“Made in Malaysia”及任何具体 origin 用语。
- 原料、生产、包装、批次、装运的 traceability 流程和查询方式。
- 工厂、实验室、QC、仓库、装柜、港口的真实性、地点、权属和可公开图片。
- 产能、库存、MOQ、交期、Port Klang、Incoterms、包装定制和供应稳定性。
- TDS、SDS、COA、COO、REACH-related documents 的版本、范围、适用牌号/市场和可发送状态。
- REACH 注册、Only Representative、认证编号、机构、有效期和批准用语。
- 技术支持人员、响应能力、牌号推荐流程和真实 SLA。
- RFQ、Sample、Documents 的负责人、审批、隐私、资格、数量、运费和记录流程。
- M-2377 的工艺和主应用；M-996 与 M-2196 的差异；所有产品性能和推荐的最新 TDS 证据。
- 企业地址、电话、邮箱、联系人及两站对外关系的批准表述。

处理规则：字段或模块保持不渲染、使用明确的内部待核状态，或仅显示页面功能说明；禁止用 AI 补全。

### K.3 图片与证明资产规则

- AI 生成图、库存图和概念图不得标注为“企业实拍”“Malaysia factory”“laboratory”“warehouse”“shipment evidence”，也不得使用任何等同的事实证明表述。
- 工厂、实验室、仓库、质检、装运、主体、原产地和追溯等证明型模块，只能使用已经验证来源、权属、拍摄对象并获得公开授权的真实资产。
- 概念图即使后续获准使用，也只能承担装饰和主题氛围作用；其版式、图注和相邻文案不得暗示它是企业实际设施、流程或履约证据。
- 无合格真实资产时，证明型图片位保持 `VERIFIED ASSET PENDING` 或不渲染，不得用更逼真的 AI 图替代。

### K.4 `not_public`

以下内容默认不公开，除非责任人逐项批准：

- 完整证书、完整批次 COA、买家专属 COO、合同、授权书及可识别交易信息。
- 内部审批链、销售/技术责任人私人联系方式、客户和询盘记录。
- 未批准公开的产能、库存、价格、客户名单、供应商关系和仓库信息。
- 文件发送条件、保密字段和内部风控规则中的敏感部分。
- 未授权图片、库存图、AI 图以及旧站中来源或权利不清的资产。

### K.5 事实登记最小字段

任何事实进入正式页面前，应登记：事实 ID、批准表述、支撑材料、适用页面/型号/市场、公开级别、业务审核人、技术/合规审核人、批准日期、复核日期和两站同步状态。

## L. 两种首页内容架构方案及主控取舍

### 方案 1：市场优先的采购路径型首页（已批准）

```text
Header
→ Hero
→ 快速采购路径
→ Markets
→ Products / 14 Grades
→ Applications
→ About / Origin 摘要
→ Documents
→ Resources / Buyer Answers
→ Final RFQ
→ Footer
```

优点：

- 符合 PRD 的 Market-First Hybrid Architecture。
- EU、UK、India、Brazil 在首页前半段获得足够权重。
- Products 紧随 Markets，兼顾 14 个型号的核心商业价值。
- 从目的市场到产品选型、证据核验和 RFQ 的路径清晰。

取舍：

- 纯产品型买家需要经过一个 Markets 模块，但快速采购路径与 Header Products 可直接跳转。
- Markets 和 Products 都是大模块，必须严格控制首页文字长度。

### 方案 2：产品优先的技术选型型首页

状态：未采用，仅保留为 V0.1 方案比较记录，不进入线框。

```text
Header
→ Hero
→ 快速采购路径
→ Products / 14 Grades
→ Applications
→ Markets
→ About / Origin 摘要
→ Documents
→ Resources / Buyer Answers
→ Final RFQ
→ Footer
```

优点：

- 更快服务已经知道型号、工艺或应用的技术型买家。
- 更早展示 14 个型号，产品深度更直观。

取舍：

- 弱化 Market-First 战略，四个目标市场容易再次成为辅助内容。
- 对首页 `malaysia titanium dioxide` 的市场采购语境支持稍弱。
- 需要更谨慎地避免 Products Hub 和型号页的关键词内耗。

### 主控结论

方案 1 已获主控批准。它最符合 PRD V0.4 的市场优先原则，同时通过紧凑三入口决策条和紧随 Markets 的 Products 模块避免产品被弱化。后续低保真线框不得改变该内容顺序，除非主控重新批准新的架构版本。

## M. 等待审查检查表

页面—关键词主表读取校验：54 条记录、54 个唯一 `page_id`、54 个唯一 URL、14 个 Grade Pages、12 个 Markets 记录、5 个 Application 子页；Home 主关键词实测为 `malaysia titanium dioxide`。本文件的页面数量和所有权判断与该结果一致。

### M.1 已完成的基线对照

- [x] 首页主关键词严格采用 `malaysia titanium dioxide`。
- [x] supplier / exporter 仅作为同意图辅助语义，exporter 主张受证据约束。
- [x] Header 严格包含 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- [x] Home 为第一项可见文字导航；Logo 不替代 Home。
- [x] 已删除独立 Malaysia Origin 一级入口；未恢复旧 canonical owner。
- [x] About、Documents、Resources 的 origin 关键词重新归属符合 PRD V0.4。
- [x] EU、UK、India、Brazil 成为主要采购入口。
- [x] EU 六个国家页由 EU Markets 体系承接，首页不堆砌六国内容。
- [x] Products Hub、两个工艺页、四个展示分组和 14 个独立型号页均有首页路径。
- [x] M-2377 未被强行归入 Chloride 或 Sulfate。
- [x] Applications 覆盖 coatings、plastics、masterbatch、printing inks、paper。
- [x] 应用泛词、型号词、工艺词和国家 supplier 词的所有权已分开。
- [x] RFQ 与 Documents 的主次和跳转职责已分开；当前首页已排除 Sample CTA。
- [x] 移动菜单保留全量导航，Home 仍为第一项。
- [x] 桌面与移动的模块压缩、优先级和页面长度规则已定义。
- [x] `verified`、`pending_verification`、`not_public` 已分开。
- [x] `PROVISIONAL_URL`、`PLANNED_*`、`NEW_PAGE_CANDIDATE` 未被描述为已发布页面。
- [x] 未使用未经验证的工厂、实验室、产能、证书、追溯或文件可用性主张。
- [x] 本轮未制作或修改 HTML、CSS、JavaScript、视觉稿、图片或线框图。

### M.2 已由主控作出的决定

- [x] 采用方案 1；主体顺序为 Markets → Products → Applications → About/Origin → Documents → Resources → RFQ。
- [x] Hero 次 CTA 锁定 `View Products`，不默认使用 `Request Documents`。
- [x] 快速采购路径限定为 Hero 下方的紧凑三入口决策条；移动端与 Hero 后续入口合并。
- [x] 桌面 Products 在四组内显示全部 14 个型号 ID；不制作 14 张卡或 14 段详情；唯一主 CTA 为 `View All 14 Grades`。
- [x] 当前首页不显示 Sample CTA；Final RFQ 仅保留 `Request a Quote`。
- [x] Applications 视觉阶段只使用目标 `page_id`，不得锁定 `PROVISIONAL_URL`。
- [x] Documents 当前只锁定 `DOC-000` 与 `CONV-DOC` 两条路径；证据受限子页不得表现为已上线或可提供。
- [x] AI 图、库存图和概念图不承担企业事实证明；证明型模块只使用验证并授权的真实资产。
- [x] `Malaysia-Origin` 战略定位与具体制造、COO、追溯声明分开；后者在线框中标注 `FACT COPY PENDING`。
- [x] 移动导航、模块压缩和页面长度是低保真线框硬验收项。
- [x] V0.2 经主控与用户确认后只授权低保真桌面/移动线框；后续按“线框批准 → 视觉 → 视觉批准 → 实施计划与代码”推进。

### M.3 仍需业务证据或后续 PRD 解决的事项

- [ ] 业务证据：制造主体、生产地点、品牌/运营/制造关系，以及 Made in Malaysia、manufactured in Malaysia 的批准表述。
- [ ] 业务证据：COO、批次追溯、生产/QC/仓储/装运流程及相关证明资产的真实性、权属和公开授权。
- [ ] 业务证据：产能、库存、MOQ、交期、稳定供应、包装、Incoterms、出口与技术支持能力。
- [ ] 业务证据：TDS、SDS、COA、COO、REACH-related 文件的版本、适用范围、公开状态和受控申请流程。
- [ ] 业务流程：RFQ 负责人、字段、隐私同意、响应规则；Sample 的资格、数量、运费、流程和责任人。
- [ ] 产品证据：M-2377 工艺/主应用、M-996 与 M-2196 差异及全部型号性能、推荐关系的最新 TDS 支撑。
- [ ] 后续 PRD：五个 Applications 子页的最终 URL；在批准前只使用 `page_id`。
- [ ] 后续 PRD：REACH、TDS/SDS/COA、COO 子页的最终 URL、发布状态及其与 Documents Hub/Request Documents 的边界。
- [ ] 页面事实一致性：企业地址、电话、邮箱、联系人、两站关系和法律页面的批准版本。
- [ ] 阶段审批：V0.2 仍需主控与用户确认；确认前不得制作低保真线框，且不授权视觉、实施计划或代码。
