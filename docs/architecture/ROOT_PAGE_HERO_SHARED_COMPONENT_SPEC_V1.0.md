# TiO₂ Malaysia 一级页面共享 Hero 组件规范 V1.0

## 1. 文档控制

| 字段 | 当前值 |
|---|---|
| 文档 ID | `ROOT-PAGE-HERO-001` |
| 版本 | `V1.0` |
| 日期 | `2026-09-11` |
| 当前状态 | `DESIGN_DIRECTION_USER_CONFIRMED / DRAFT_CONTRACT_FOR_USER_REVIEW` |
| 用户决定来源 | 用户确认一级页面 Hero 缺少统一视觉骨架，并同意建立共享 `RootPageHero` 后回复“可以。执行下一步” |
| 适用页面 | `HOME-001`、`MARKET-000`、`PRODUCT-000`、`APP-000`、`DOC-000`、`RES-000`、`ABOUT-001` |
| 不适用页面 | Contact、RFQ、Request Documents、Request a Sample、Thank You、404、法律页面及各二级详情页；这些页面继续使用各自已批准的任务型或内容型首屏 |
| 实施边界 | 本文件只定义跨页视觉与组装合同；不修改 `D:\16Wordpress_nextjs`，不授权 Gate 8、部署或发布 |

本规范补充 `TiO2_Malaysia_Visual_Standard_V1.0.md`。Global Header、Mobile Menu、Footer 和固定 RFQ 继续以 `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` 为唯一共享 Chrome 权威，本文件不重新定义它们。

## 2. 已确认的问题

七个一级导航根页面当前分别使用了浮动浅色卡片、开放白底、整宽深色带、插画、数据卡、流程图和高密度企业拼图。页面各自可以成立，但组合后缺少同一网站的首屏家族感。

具体漂移包括：

1. Hero 外框、背景、圆角、阴影、顶部距离和高度不一致。
2. H1 的起点、文本宽度、行数与首屏视觉重量不一致。
3. 右侧媒体区域没有共同尺寸和信息密度规则。
4. `APP-000` 当前 Hero 仍有左侧蓝绿色竖线，而 `HOME-001` 已按用户决定删除同类装饰。
5. Markets 首屏留白过大，Resources 使用全宽深色块，Products 缺少共享外壳，About 首屏承载过多正文与视觉对象。
6. 如果开发继续按页面分别实现，视觉漂移会在后续维护中重复发生。

因此本轮解决的是共享骨架和节奏，不把所有页面改成相同内容，也不借视觉统一改变页面职责。

## 3. 设计原则

### 3.1 统一骨架，不统一页面内容

七页共同使用一个 `RootPageHero` 可见结构：

`Breadcrumb（Home 除外） → Hero Shell → Eyebrow → H1 → Intro → Actions → Optional Media`

不同页面可保留自己的标题、正文、CTA 和媒体，但不得另建另一套 Hero 外框、间距系统或响应式结构。

### 3.2 读者首先获得三个答案

每个 Hero 必须在首屏清楚回答：

1. 这是哪个页面；
2. 这个页面能帮助买家完成什么；
3. 买家的下一步是什么。

Hero 不承担完整公司介绍、完整分类说明、证明清单或多段销售正文。已批准但过长的信息不删除，移至紧随 Hero 的页面主体模块，并由该页定向视觉修订证明位置和连续性。

### 3.3 视觉统一不得改变事实合同

本规范不修改任何页面的：

- Page ID、URL、主关键词、搜索意图或页面职责；
- 已批准正文事实、产品关系、市场关系、原产地授权或证据边界；
- SEO、GEO、社交元数据或 Schema；
- Header/Footer 导航、Logo、固定 RFQ 或法律共享区；
- 现有 CTA 目标和表单行为。

如页面为了满足 Hero 信息密度需要移动已批准正文，只允许原文位置迁移，不得静默删改或改写语义。

## 4. 共享可见结构

### 4.1 Breadcrumb

- Home 不显示 Breadcrumb。
- 其他六个一级根页面显示 `Home / {Page}`，位于 Hero Shell 上方，不放入 Hero 内容列。
- 六页的 Breadcrumb 左边界、与 Header 的距离、与 Hero 的距离一致。

### 4.2 Hero Shell

| 属性 | Desktop ≥ 1024 | Tablet 768–1023 | Mobile ≤ 767 |
|---|---:|---:|---:|
| 外层最大宽度 | `1200px` | 可用宽度减左右 `32px` | 可用宽度减左右 `20px` |
| 内容排列 | 文本／媒体双列 | 单列；文本在前 | 单列；文本在前 |
| 内边距 | `56px` | `40px` | `24px` |
| 圆角 | `12px` | `12px` | `10px` |
| 边框 | `1px solid #D9E2EC` | 同 Desktop | 同 Desktop |
| 阴影 | 仅允许轻阴影 | 同 Desktop | 可减弱，不得增强 |
| 高度 | 内容驱动；不得用空白撑高 | 内容驱动 | 内容驱动 |

禁止 Hero 左侧绿色、蓝绿色或渐变竖线。品牌强调由 Eyebrow、CTA、链接和右侧视觉中的有限 Teal 元素承担。

### 4.3 文本列

- Eyebrow：一行、全大写或现有批准样式、Malaysia Teal；不再附加装饰竖线。
- H1：Desktop `56px`、Tablet `44px`、Mobile `36px`；字重 `700`；最多三行；不得为了填满 Hero 人为拉长标题。
- Intro：一段为默认值，最多三行 Desktop 可见文本；确有第二段批准事实时，应优先移至下一主体模块。
- 文本列 Desktop 建议宽度 `620–680px`，不得铺满整个 Shell。
- H1、Intro 和 Actions 的垂直间距由共享 token 控制，页面不得逐页手工偏移。

### 4.4 Actions

- 允许一个 Primary CTA；如页面任务确有第二条同级决策路径，可增加一个 Secondary CTA。
- Primary 使用 Teal 实底，Secondary 使用白底／透明底＋Navy 边框；继续遵守全站 Button 标准。
- CTA 必须在首屏直接可见，不得在选择、Hover、展开或媒体交互后才出现。
- Mobile CTA 纵向堆叠或等宽排列，由共享响应式规则决定；触控目标不小于 `44px`。
- 本规范不新增、删除或改写任何页面已批准 CTA；若页面现有 CTA 数量不符合本结构，必须在该页定向修订中明确提交决定。

### 4.5 Optional Media

媒体列是同一固定区域的受控变体，不是页面自行设计的第二个 Hero：

| 变体 | 允许内容 | 约束 |
|---|---|---|
| `photo` | 单一工业材料、产品或已批准企业图像 | 一个主视觉焦点；不得拼贴多个互相争抢的场景 |
| `information-card` | 产品组合、市场入口或应用入口摘要 | 最多四至六个短项；不得重复正文完整目录 |
| `technical-illustration` | 文件、研究路径或采购流程插画 | 使用 Navy outline + Teal accent；不得出现无意义装饰性仪表盘 |

- Desktop 媒体列建议宽度 `380–440px`，必须与文本列垂直居中或按批准的顶对齐规则统一。
- Tablet/Mobile 将媒体置于 Actions 后；如果媒体包含读者需要的信息，不得隐藏。
- 纯装饰媒体可以在 Mobile 省略，但必须在页面定向视觉规格中明确，不允许开发临时决定。
- 媒体不得造成 Hero 大量空白，也不得把完整正文模块伪装成图片塞入首屏。

## 5. 受控视觉变体

共享组件只允许三个变体：

### 5.1 `flagship-light`

仅供 `HOME-001`。使用浅色 Shell 和单一产品照片，H1 可达到三行，保留批准的双 CTA。它可以比其他页面更有视觉重量，但仍使用相同宽度、圆角、边框、内边距和响应式骨架。

### 5.2 `hub-light`

供 `MARKET-000`、`PRODUCT-000`、`APP-000`、`DOC-000`。使用浅色 Shell；右侧可使用 information-card 或 technical-illustration。四个 Hub 的骨架必须相同，差异只来自页面内容和媒体类型。

### 5.3 `hub-dark` / `corporate-light`

- `RES-000` 可保留 Deep Navy 方向，但深色只作用于相同尺寸和几何的 Hero Shell，不再用另一套全宽首屏结构。
- `ABOUT-001` 使用 `corporate-light`，保留已获用户授权的企业与供应视觉，但压缩为一个主构图。过长的企业事实原文移至紧随 Hero 的 `Who We Are` 或等价主体模块，不删除、不降级为内部信息。

不得增加第四个页面私有变体。确需新增时，先升级本规范并说明为什么三个变体无法表达该页面任务。

## 6. 页面绑定

| 页面 | 变体 | 右侧媒体 | 本轮定向变化 | 必须保持 |
|---|---|---|---|---|
| `HOME-001` | `flagship-light` | 单一 TiO₂ 产品照片 | 采用共享 token；已删除的左侧竖线继续为 0 | 当前 H1、Intro、RFQ、View Products、Start Here 顺序 |
| `MARKET-000` | `hub-light` | 简洁市场导航摘要卡 | 收紧过量留白并进入共享 Shell | H1、Choose a Market、EU/UK/India/Brazil 架构 |
| `PRODUCT-000` | `hub-light` | 14 Grades / 4 Groups 摘要卡 | 开放白底首屏进入共享 Shell | 当前产品关系、CTA、组合数字与目录 |
| `APP-000` | `hub-light` | Application 摘要卡 | 删除 Hero 左侧竖线并采用共享 token | H1、Intro、已批准 CTA 和应用关系 |
| `DOC-000` | `hub-light` | 文档系统插画 | 将现有 Hero 内容置于共享 Shell；选择器仍是 Hero 后独立模块 | Start a Document Request、单型号选择器和显式继续按钮 |
| `RES-000` | `hub-dark` | 三类研究路径技术插画 | 深色背景收进共享 Shell | 当前 H1、Intro、Explore Procurement Resources 与研究分类 |
| `ABOUT-001` | `corporate-light` | 一个企业／供应主构图 | 降低首屏图像和段落密度；详细已批准事实顺延至首个主体模块 | 用户已批准对外使用的公司、Malaysia-origin、供应与市场内容 |

## 7. 开发组装合同

后续获得 Gate 8 授权时，由 D16 的 Home／共享组件 owner 实现唯一 `RootPageHero`。页面只能提供内容与受控配置，不复制结构。

建议输入接口的语义字段为：

- `page_id`
- `variant`
- `breadcrumb_label`
- `eyebrow`
- `heading`
- `intro`
- `primary_action`
- `secondary_action?`
- `media_type`
- `media_asset_or_items`
- `media_is_informative`

实现方式、框架文件名和组件 API 由 D16 开发项目决定，但必须满足：

1. 七页组装同一个共享组件；
2. 页面不得复制 Hero DOM/CSS 后再局部修改；
3. 页面差异只能通过批准字段和受控 variant 表达；
4. 不允许页面私有 `margin-top`、左侧竖线或独立断点覆盖制造视觉分叉；
5. 共享组件变化必须运行七页回归，不以 Home 单页通过代替跨页通过；
6. `site_scope=tio2-my` 和现有 Global Chrome 隔离合同继续生效。

## 8. Gate 影响与迁移顺序

本决定是已完成页面之后新增的跨页视觉变化，不重开 Gate 1、Gate 2、页面正文批准或全部历史视觉审查。

执行顺序固定为：

1. 用户审阅并批准本共享规范；
2. Gate 4 制作共享 Hero 主样和七页定向页面证据，不重做完整页面；
3. 新 Gate 5 对同一冻结组合执行一次独立跨页视觉审查；
4. 总控按常设授权关闭定向视觉变化，Gate 6 只做跨合同与开发交付影响核对；
5. 获得独立 Gate 8 授权后，由 D16 共享 owner 一次实现，页面消费；
6. Gate 9 在同一 Build 上完成七页 1440／768／390 视觉、响应式、键盘和语义回归。

在新组合完成以前，现有各页批准基线继续有效。本规范一旦批准，只取代各页 Hero 的几何、装饰和组装方式，不追溯否定其他已批准模块。

## 9. 视觉与运行验收

### 9.1 共同验收

- 七页 Hero 使用相同最大宽度、边框、圆角、内边距和响应式断点。
- 七页 Eyebrow、H1、Intro、Actions 起点形成统一基线。
- Hero 左侧装饰竖线计数为 0。
- 除批准的 `hub-dark` 色调外，不出现页面私有背景系统。
- H1 在 1440、768、390 下无裁切、重叠或异常孤行。
- CTA 首屏可见、焦点可见、顺序正确、目标不变，390px 触控目标不小于 44px。
- 信息型媒体在 768／390 不丢失；装饰型媒体的省略与规格一致。
- 无水平溢出，无空白高度占位，无内容通过固定高度裁切。

### 9.2 共享实现验收

- D16 只有一个共享 Hero 结构源；七页没有复制版本。
- 七页运行 DOM 可识别同一组件契约和对应 `page_id`／variant。
- 修改共享 token 后，七页视觉回归能同时检测变化。
- Header/Footer、Logo、导航 current 语义、固定 RFQ 和法律共享区不发生非预期差异。
- 页面正文、Metadata、JSON-LD、链接目标和表单行为与变更前基线一致，除非另有明确批准记录。

## 10. 回退与范围控制

- Gate 4 候选未通过时，继续使用各页现有批准 Hero，不原地覆盖历史证据。
- D16 实现未通过 Gate 9 时，只回退共享 Hero 变更，不回退同一页面其他已通过实现。
- 禁止借本次统一重新设计 Header、Footer、正文模块、页面 RFQ、表单、产品关系或市场关系。
- 禁止把视觉一致性解释为所有页面必须使用相同图片、相同 CTA 数量或相同文案。

## 11. 当前停止点

本文件已经把用户确认的方向转化为可审阅合同，但精确规范仍等待用户最终确认。确认前：

- 不把本文件登记为 `APPROVED / ACTIVE`；
- 不启动七页定向 Gate 4 制作；
- 不修改任何页面当前 Manifest；
- 不派发 D16 开发；
- 不修改 `D:\16Wordpress_nextjs`。

