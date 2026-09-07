# TiO₂ Malaysia 首页低保真线框规格 V0.1

## 0. 文档状态与阶段边界

| 项目 | 内容 |
|---|---|
| 文档类型 | 桌面端与移动端低保真线框规格 |
| 上游批准基线 | `homepage/04_planning/01_homepage_content_architecture_v0.2.md`（用户已正式批准） |
| 当前阶段 | 只供低保真线框审核 |
| 明确禁止 | 高保真视觉、正式 Navy/Teal 视觉、最终图片、图片生成、最终营销文案、生产代码、实施计划、部署 |
| 日期 | 2026-08-29 |
| 状态 | 等待主控审核；不授权进入视觉阶段 |

所有线框预览均必须显示：`WIREFRAME ONLY / NOT PRODUCTION / NO FINAL COPY / NO FINAL VISUAL`。灰阶边框、占位框和功能标签只表达信息层级、采购路径与响应式压缩，不构成最终 UI 设计。

## 1. 交付物与预览位置

### 1.1 可打开预览

- 响应式工作预览：`D:\23MySec\homepage\04_planning\wireframes\homepage-wireframe-preview-v0.1.html`
- 用桌面端浏览器打开并设置 1440px 宽度，可查看 PC 线框。
- 用响应式视口设置为 390px 宽度，可查看移动线框；移动菜单结构在预览中默认展开，以便审核完整导航顺序。
- 该 HTML 是线框审核载体，不是生产页面、前端脚手架或实施代码。

### 1.2 PNG 导出

| 交付 | 视口宽度 | 导出文件 | 实际导出尺寸 |
|---|---:|---|---|
| PC/桌面端完整页 | 1440px | `D:\23MySec\homepage\04_planning\wireframes\homepage-wireframe-pc-v0.1.png` | `1440 × 3557px` |
| 移动端完整页 | 390px | `D:\23MySec\homepage\04_planning\wireframes\homepage-wireframe-mobile-v0.1.png` | `390 × 5045px` |

## 2. 线框标注语言

| 标签 | 含义 | 允许出现的位置 |
|---|---|---|
| `FACT COPY PENDING` | 战略方向已批准，但具体公开事实或措辞未通过证据门槛 | Hero、About/Origin |
| `VERIFIED ASSET PENDING` | 证明型图片位尚无已验证并获授权的真实资产 | About/Origin 证明区 |
| `PROVISIONAL URL — PAGE_ID ONLY` | 页面目的和名称可用，但最终 href 不得锁定 | Applications |
| `TECHNICAL COPY PENDING` | 产品性能、推荐或技术差异尚待资料 | Products |
| `DOCUMENT AVAILABILITY NOT CLAIMED` | 不暗示文件已经上线或一定可提供 | Documents |
| `CONTENT REVIEW PENDING` / `ANSWER PENDING` | Resources/GEO 回答不得在缺少证据时渲染为答案 | Resources / Buyer Answers |
| `NOT LIVE` | 规划或候选页不表示已经发布 | Resources 候选入口 |

禁止使用“企业实拍”“Malaysia factory”“laboratory”“warehouse”“shipment evidence”等误导标签。AI 图、库存图和概念图不得承担事实证明；本阶段不使用任何最终图片。

## 3. 页面总体结构

批准的主体顺序保持不变：

```text
Header
→ Hero
→ 紧凑三入口采购决策条
→ Markets
→ Products
→ Applications
→ About / Origin
→ Documents
→ Resources / Buyer Answers
→ Final RFQ
→ Footer
```

Hero 后的 Markets / Products / Documents 决策条是一个紧凑导航条，不计作第二个大型内容模块。Markets 必须在 Products 之前且位于页面前半段。

## 4. PC/桌面端线框规格（1440px）

### 4.1 Header

- 可见文字顺序必须是：`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Logo 保留独立占位，但不能替代 `Home`。
- `Request a Quote` 是 Header 唯一高强调行动。
- 目标：`HOME-001`、`MARKET-000`、`PRODUCT-000`、`APP-000`、`DOC-000`、`RES-000`、`ABOUT-001`、`CONV-RFQ`。
- 不出现独立 Malaysia Origin 导航。

### 4.2 模块规格表

| 编号 | 模块 | 目的 | PC 结构 | 目标 page_id / 页面 | CTA | 证据或状态处理 |
|---:|---|---|---|---|---|---|
| 01 | Hero | 建立首页主题、受众和首要行动 | 左侧 H1/说明/CTA，右侧仅放装饰媒体占位框 | `HOME-001`、`CONV-RFQ`、`PRODUCT-000` | 主：Request a Quote；次：View Products | H1 只标注必须包含 `malaysia titanium dioxide`；Malaysia-Origin 具体事实标 `FACT COPY PENDING`；不出现 Documents/Sample CTA |
| 02 | 紧凑采购决策条 | 让买家立即选择采购起点 | Hero 下方单行三入口，Markets / Products / Documents 等权展示 | `MARKET-000`、`PRODUCT-000`、`DOC-000` | 三个文字入口 | 不扩展为第二个 Hero，不重复模块正文 |
| 03 | Markets | 以目的市场作为第一主采购路径 | 四列：EU、UK、India、Brazil；EU 卡仅用一行提示六国路径 | `MARKET-EU-001`、`MARKET-UK-001`、`MARKET-IN-001`、`MARKET-BR-EN` | Explore Your Market / View All Markets | 无大国旗、旅游地图、法规满足、物流、交期或关税承诺 |
| 04 | Products | 明确 14 grades 和选型深度 | 四个紧凑分组；PC 直接显示全部 14 个型号 ID | `PRODUCT-000`、`PRODUCT-PROC-CL`、`PRODUCT-PROC-SU`、14 个 Grade page_id | 唯一主 CTA：View All 14 Grades；工艺为次级文本路径 | 不制作 14 张卡、不写 14 段详情；M-2377 只标 process pending |
| 05 | Applications | 按使用场景导流 | 五个紧凑入口：Coatings、Plastics、Masterbatch、Printing Inks、Paper | `APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` | Explore Applications | 只使用 page_id；标 `PROVISIONAL URL — PAGE_ID ONLY`；Masterbatch 显示 TiO₂ input / not finished masterbatch |
| 06 | About / Origin | 提供平台、运营主体和证明入口摘要 | 左侧中性摘要，右侧证明资产占位 | `ABOUT-001` | Learn About TiO₂ Malaysia | manufacturing、Made in Malaysia、COO、batch traceability 标 `FACT COPY PENDING`；图片位标 `VERIFIED ASSET PENDING` |
| 07 | Documents | 提供文件信息与受控申请路径 | 只显示两个路径框 | `DOC-000`、`CONV-DOC` | Request Documents / View Document Information | 不将 REACH、TDS/SDS/COA、COO 做成已上线或可提供的文件卡 |
| 08 | Resources / Buyer Answers | 提供有限研究入口与 GEO 回答位置 | 最多 2 个资源入口 + 3 个问答占位 | `RES-000`；入口可标 `RES-ORIGIN`、`RES-PROC` 状态 | View Resources | `RES-PROC` 标 `NOT LIVE`；无证据答案标 pending 或不渲染 |
| 09 | Final RFQ | 收口采购询盘 | 左侧行动说明占位，右侧仅列字段摘要 | `CONV-RFQ` | 仅 Request a Quote | 不显示 Sample；不承诺响应时间；不设计正式表单流程 |
| 10 | Footer | 收口导航和主体/法律占位 | Logo、八项顶层入口、联系/法律占位 | 顶层 page_id、`CONTACT-001` | Request a Quote / Contact 为导航层入口 | 地址、电话、邮箱未验证则只保留 `CONTACT FACTS PENDING` |

### 4.3 Products 14 个型号核对表

| 分组 | 型号 ID | 数量 |
|---|---|---:|
| Coatings Grades | M-350、M-510、M-896、M-996、M-2196、M-895 | 6 |
| Plastics & Masterbatch Grades | M-200、M-108、M-210、M-340、M-886 | 5 |
| Inks & Multi-Application Grades | M-52、M-2377 | 2 |
| Specialty Grade | CR-901 | 1 |
| 合计 | 14 个唯一型号 ID | 14 |

M-2377 在线框中不显示 Chloride/Sulfate 工艺归属，也不写主应用结论。

## 5. 移动端线框规格（390px）

### 5.1 Header 与完整菜单

- 首行显示 Logo、`Menu`、紧凑 `RFQ`。
- 审核线框默认显示“展开菜单”结构，顺序为：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote。
- Logo 不能替代菜单内的 Home。
- 后续交互规格须处理焦点、关闭、当前页和触控区域；本线框只验证信息完整性与顺序。

### 5.2 移动模块压缩矩阵

| 桌面模块 | 移动处理 | 具体规则 |
|---|---|---|
| Header | 保留 + 展开示意 | Logo/Menu/RFQ 保留；完整八项导航默认展开供审核，不隐藏导航 |
| Hero + 决策条 | 合并 | Hero 缩短；Markets/Products/Documents 三入口紧随 Hero，不能再复制为大型区块 |
| Markets | 缩写 | 2×2 紧凑入口；EU 只显示六国缩写提示，不平铺六个国家正文；不使用横向滑动 |
| Products | 折叠 | 首层显示 `14 grades`、四组名称和 6/5/2/1 数量；每组显示 `Expand grades ▾`；总 CTA 为 View All 14 Grades；不将 14 卡机械堆叠 |
| Applications | 缩写 | 2 列紧凑入口，Paper 占完整末行；五个 page_id 均可见；最终 URL 不锁定 |
| About / Origin | 保留但压缩 | 摘要和证明占位上下排列；事实/资产 pending 标签必须可见 |
| Documents | 保留但压缩 | `DOC-000` 与 `CONV-DOC` 两个路径上下排列；不列正式文件卡 |
| Resources / Buyer Answers | 缩写 | 2 个资源入口、最多 3 个问答占位；无证据不显示答案正文 |
| Final RFQ | 保留 | 字段摘要采用 2 列短标签；只保留全宽 Request a Quote；无 Sample、无 SLA |
| Footer | 缩写 | 八项入口改为两列；联系事实保持 pending |

移动端不得机械纵向复制桌面全部卡片，不得使用无限横向滑动作为核心入口。核心购买路径不依赖 hover。

## 6. 页面长度控制

| 版本 | 上限 | 线框策略 |
|---|---:|---|
| PC 1440px | 约 4 × 900px = 3600px | 实际 `3557px`，约 `3.95` 个 900px 视口；通过紧凑决策条、四组产品而非 14 卡、五项应用单行、双列 About/Documents/Resources 控制长度 |
| Mobile 390px | 约 6 × 844px = 5064px | 实际 `5045px`，约 `5.98` 个 844px 视口；通过 Products 折叠、Applications 两列、Markets 2×2、字段摘要两列和短 Footer 控制长度 |

两版实测均在批准上限内；移动版距离上限 19px，因此后续线框修订不得增加新的模块或重复正文。如需增加审核标注，应同时压缩垂直间距或折叠内容，继续保持在 5064px 内。

## 7. 视觉与组件限制

- 只使用灰阶、直线边框、虚线占位、文本标签和简单按钮框。
- 不应用正式 Navy/Teal 配色、品牌渐变、阴影、玻璃效果、圆角卡片体系、装饰动效或高保真组件。
- 不生成、不加载、不嵌入最终图片。
- 媒体框只写 `DECORATIVE MEDIA PLACEHOLDER ONLY / NO FINAL IMAGE / NO FACT EVIDENCE`。
- 证明区只写 `VERIFIED ASSET PENDING`，不得以概念图替代真实证据。
- 所有 CTA 是线框功能标签，不代表 href、交互或表单流程已经实施。

## 8. A–L 自检清单

### A. Header

- [x] PC 可见导航顺序完整且 Home 第一。
- [x] Logo 没有替代 Home。
- [x] 移动端显示 Logo、Menu、RFQ，并标出完整八项展开顺序。

### B. Hero

- [x] H1 标明必须包含 `malaysia titanium dioxide`，未写最终营销文案。
- [x] 主 CTA 为 Request a Quote；次 CTA 为 View Products。
- [x] 无 Request Documents、无 Sample。
- [x] Malaysia-Origin 具体事实标 `FACT COPY PENDING`。

### C. 快速采购路径

- [x] 仅为 Hero 下方 Markets / Products / Documents 三入口紧凑决策条。
- [x] 未形成第二个大型 Hero 或重复正文模块。

### D. Markets

- [x] 位于 Products 之前和页面前半段。
- [x] EU、UK、India、Brazil 四个入口完整。
- [x] EU 只提示六国路径，无六国正文平铺。
- [x] 无大国旗、旅游地图和未核验市场承诺。

### E. Products

- [x] 明确 `14 grades`。
- [x] PC 四组内直接显示 14 个唯一型号 ID。
- [x] 移动首层显示四组、数量、展开提示和 View All 14 Grades。
- [x] 无 14 张卡、无 14 段详情；M-2377 无工艺结论。
- [x] 唯一主 CTA 为 View All 14 Grades；工艺只作次级文本路径。

### F. Applications

- [x] 五个应用和五个 page_id 均可见。
- [x] 未锁定 provisional href。
- [x] Masterbatch 标明 TiO₂ input，不是 finished masterbatch。

### G. About / Origin

- [x] 只提供平台、运营主体和证据入口摘要。
- [x] 具体事实与证明图片位使用统一 pending 标签。
- [x] 无独立 Malaysia Origin 页面入口。

### H. Documents

- [x] 只表现 `DOC-000` 与 `CONV-DOC`。
- [x] REACH、TDS/SDS/COA、COO 未成为正式文件卡。

### I. Resources / Buyer Answers

- [x] 最多 2 个资源入口和 3 个问答占位。
- [x] 无证据的回答未被渲染为事实答案。

### J. Final RFQ

- [x] 只保留 Request a Quote。
- [x] 无 Sample、无响应时间承诺。
- [x] 只展示字段摘要，不设计正式表单流程。

### K. 页面长度与移动压缩

- [x] PC 实际导出高度 `3557px`，未超过约 `3600px`。
- [x] 移动实际导出高度 `5045px`，未超过约 `5064px`。
- [x] 移动端采用合并、折叠和缩写规则，不机械堆叠全部桌面卡片。
- [x] 核心入口不依赖无限横向滑动。

### L. 线框标注

- [x] 每个模块标有编号、目的、目标 page_id/页面和 CTA。
- [x] pending evidence、provisional URL、verified asset pending 使用统一标签。
- [x] 无“企业实拍”等误导标签。
- [x] 无最终图片、正式视觉、阴影、装饰动效或高保真组件。

## 9. 阶段门槛

本规格与 PNG 交付后停止，等待主控审核。只有桌面端和移动端线框获得批准后，才可单独授权进入视觉设计；本文件不授权高保真视觉、图片生成、最终文案、实施计划、生产代码或部署。
