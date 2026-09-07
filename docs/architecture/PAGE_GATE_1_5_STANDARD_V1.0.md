# TiO2 Malaysia 页面 Gate 1–5 统一标准 V1.0

## 1. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `PAGE-GATE-1-5-STANDARD` |
| Version | `V1.0` |
| Status | `APPROVED_PROJECT_STANDARD / ACTIVE` |
| Approval source | 用户于 2026-09-01 明确批准“按照这个标准来做” |
| Effective date | `2026-09-01` |
| Scope | `D:\23MySec` 中所有页面的 Gate 1–5 策划、内容、视觉和审批 |
| Governing authority | 根 `AGENTS.md`、当前批准 PRD、页面登记册和页面专属 Brief |

本文件是 Gate 1–5 的唯一详细流程标准。页面 Playbook 和页面专属 Brief 可以增加更严格要求，但不得降低本文件的交付、审批、版本和证据要求。

## 2. 核心原则

1. 所有页面使用同一 Gate 1–5 结构；页面内容可以不同，交付格式、批准规则和当前基线管理不得各自解释。
2. 用户可以用自然语言、截图、草图、中文或英文提出页面想法。页面执行任务负责把输入规范化为 Brief、内容骨架和正式合同，不要求用户先写技术文档。
3. 页面必须尽早让用户审查“要说什么”，再进入“怎么排”和“长什么样”。不得等完整视觉稿完成后才第一次暴露内容方向。
4. 提交不等于批准；项目总控复审通过不等于用户批准；某一 Gate 获批不自动授权下一 Gate。
5. 已批准旧页面不因本标准生效而自动重做。下一次修订或进入下一阶段时补齐当前 Manifest、权威引用和缺失的响应式证据。

## 3. 用户想法的最早输入点

### 3.1 Gate 0 / Gate 1：Page Intent Card

每个页面的 Brief 必须包含一张用户可直接审查的 Page Intent Card：

| 必填项 | 说明 |
|---|---|
| Audience | 主要访问者是谁 |
| Buyer problem | 访问者需要解决什么问题 |
| Core message | 页面最重要的一句话 |
| Must include | 用户要求必须出现的内容、事实、图片或表达 |
| Must exclude | 明确不出现的内容、承诺、页面关系或视觉元素 |
| Primary CTA | 页面最主要的下一步 |
| Secondary CTA | 可选的第二行动；没有时明确写 `NONE` |
| Ownership boundary | 本页负责什么、哪些内容归其他页面 |

Gate 1 结束前必须形成检查点 `CONTENT_INTENT_CONFIRMED`。未确认时可以继续研究，但不得把内容方向写成已批准方案。

### 3.2 Gate 2：内容骨架先审，完整文案后审

在制作线框前，先提交一页可快速判断的内容骨架：

- H1；
- Hero 核心信息；
- 模块顺序；
- 每个模块的一句话目的；
- 主 CTA、次 CTA 及目标 URL；
- SEO Title、Meta Description 和 Canonical 方向；
- GEO / Schema 拟表达的实体与关系；
- 受限事实、条件模块和隐藏规则。

内容骨架确认后，再用真实完整文案完成 Gate 2。进入 Gate 3 前必须形成检查点 `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`。这两个检查点属于现有 Gate，不新增 Gate 编号。

## 4. Gate 1–5 标准交付

### 4.1 Gate 1：研究、关键词与证据

**目标：**确认页面身份、搜索意图、买家问题和可公开事实边界。

**强制交付：**

- 已填写的页面 Brief 与 Page Intent Card；
- 主关键词、辅助关键词、排除关键词和防内耗边界；
- 搜索意图、目标采购阶段、买家问题和内部页面关系；
- 事实与证据表，至少包含来源、来源日期、适用范围和验证状态；
- GEO 实体、可能的可引用答案和时间敏感事实清单；
- 禁止公开、尚未验证、条件公开和明确冻结的字段；
- `CONTENT_INTENT_CONFIRMED` 记录。

**Gate 1 锁定：**页面身份、关键词所有权、事实边界和研究范围。证据缺失只冻结受影响字段，不得编造替代事实。

### 4.2 Gate 2：完整内容、SEO 与 GEO 架构

**目标：**在视觉布局前确认页面实际要发布的内容和机器可读表达。

**强制交付：**

- 已确认的内容骨架；
- H1、Hero、全部模块标题和真实完整正文；
- 模块顺序及每个模块帮助买家完成的判断；
- CTA 文案、URL、预填字段、上下游内链和面包屑；
- SEO Title、Meta Description、Canonical、索引和语言方向；
- GEO 的实体、关系、简明答案、FAQ、来源和日期；
- Schema 类型、字段来源和可见文案一致性规则；
- 正常、空值、证据受限、route 未就绪和表单失败等条件状态；
- `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` 记录。

**Gate 2 锁定：**真实文案、模块顺序、链接关系、CTA、SEO/GEO/Schema 事实范围。Gate 3 不得用短占位文字替换真实内容。

### 4.3 Gate 3：响应式线框

**目标：**验证真实内容在主要视口中的结构、优先级和交互。

**强制逻辑视口：**

| 证据 | 逻辑宽度 | 说明 |
|---|---:|---|
| Desktop | `1440px` | 完整结构和主要交互 |
| Tablet | `768px` | 完整模块，不得无依据省略页面 CTA 或内容 |
| Mobile | `390px` | 完整单列结构和移动菜单 |

Mobile 可以导出为 `780px` 物理宽度，但必须明确登记为 `390px logical @2x`。`375px`、`430px` 和 `1024px` 作为后续响应式 QA 宽度，不强制每次单独制作完整视觉资产，除非页面存在专项风险。

**强制交付：**

- 1440、768、390 三种线框；
- 真实长度文案、表单字段、长标题和技术字段；
- Header、Mobile Menu、Footer、CTA 和条件模块位置；
- 适用的错误、空值、受限和展开/折叠结构；
- 信息密度、触控目标、横向溢出和异常空白检查。

**Gate 3 锁定：**响应式结构、模块顺序、信息优先级和主要交互位置。

### 4.4 Gate 4：视觉方向

**目标：**确认本页如何使用已批准品牌系统，不在此阶段重新定义全站品牌。

**强制交付：**

- 色彩、字体、间距、卡片、按钮、表单、图片和图表规则；
- 关键组件及必要状态样例；
- Desktop、Tablet、Mobile 的密度和缩放规则；
- 图片的证据边界、替代文本方向和无图片回退；
- 与已批准 Home、Global Chrome 和同类页面的一致性说明。

Gate 4 是视觉语言和组件方向，不要求用局部样例冒充完整页面视觉稿。

**Gate 4 锁定：**本页视觉语言、组件外观、媒体规则和状态表达。

### 4.5 Gate 5：完整视觉稿与当前基线

**目标：**用真实文案证明页面在主要设备和关键状态下可以交付开发。

**强制交付：**

- `1440px` Desktop 完整页面；
- `768px` Tablet 完整页面；
- `390px` Mobile 完整页面，允许 `780px @2x` 导出；
- Mobile Menu open；
- 页面适用的重要交互、表单、错误、空值、受限、无图片和长内容状态；
- 最终视觉规格；
- 当前唯一 Gate 1–5 基线 Manifest。

完整视觉必须检查：真实内容、首屏高度、按钮后空白、横向溢出、裁切、Footer 闭合、最小 44px 触控目标、字号、对比度和键盘/焦点状态方向。

**Gate 5 锁定：**用户批准的完整视觉、文案呈现、响应式表现和交互状态。Gate 5 批准不授权 Gate 6、Gate 7、开发、部署、发布或索引。

## 5. Global Chrome 统一所有权

Header、Mobile Header、Mobile Menu 和 Footer 是全站共享组件，由 Home / Global Chrome owner 维护唯一生产基线。页面任务只负责：

- 声明本页的 current navigation key；
- 在完整页面中展示组装后的共享组件；
- 验证本页正文与共享组件的连接、响应式和 Footer 闭合；
- 引用当前 Global Chrome 规范、Manifest 和资产键。

页面任务不得自行重设计、复制分叉或改变 Header/Footer，不得改变 Logo、一级导航顺序或固定 RFQ 规则。可见导航不得显示内部状态词；当前页只使用视觉 active treatment，不显示 `CURRENT` 等内部标签。

## 6. 状态与批准

需要用户决定的 Gate 成果统一使用以下状态链：

`DRAFT_FOR_PROJECT_CONTROL_REVIEW`

→ `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

→ `APPROVED / CLOSED`

规则：

1. 页面任务只能提交草案，不能自行写成项目总控 PASS 或用户批准。
2. 项目总控 PASS 后仍必须等待用户明确批准，除非当前任务卡明确授权总控独立关闭该类非用户决策项。
3. 用户批准日期、批准对象和批准范围必须写入当前 Manifest；不得用后续推断扩大批准范围。
4. Gate 1–5 的检查点和局部决定可以在 Brief 中记录，但不得伪装成整个 Gate 已批准。
5. 任一 Gate 的 `APPROVED / CLOSED` 只关闭该 Gate，不自动打开下一 Gate。

## 7. 当前唯一 Manifest

每个页面必须维护一个当前权威文件，推荐命名：

`PAGE-ID_CURRENT_GATE_BASELINE_MANIFEST_Vx.x.md`

Manifest 至少包含：

- Page ID、URL、页面类型和生命周期；
- Gate 1–5 当前权威文件；
- 当前视觉资产、逻辑/物理尺寸、版本、字节数和 SHA-256；
- 当前 Global Chrome 版本、Manifest 和 asset keys；
- 用户批准对象、日期和来源；
- 被替代版本及保留路径；
- 开放问题、事实冻结、外部依赖和下一 Gate 授权状态；
- 明确的 authority / consumption order。

同一页面不得同时存在两个未标明优先级的“current”完整 Brief、视觉规格或 Manifest。历史文件必须保留并标记 `SUPERSEDED`、`HISTORICAL` 或等效状态，不得删除或反向控制当前版本。

## 8. 批准后的变更

已批准内容发生实质变化时：

1. 复制当前版本并升级版本号；
2. 登记变更原因、影响范围、回退基线和新 Review ID；
3. 只重开受影响的 Gate 或定向审查范围；
4. 生成新 Manifest，并将旧基线标记为被替代但可回退；
5. 涉及文案事实的变化同步检查 SEO、GEO 和 Schema；
6. 涉及布局的变化重新检查 1440、768、390；
7. 未获新批准前，旧批准基线继续是对外与开发权威。

## 9. 既有页面过渡规则

- 不要求已经批准的页面立即重做 Gate 1–5。
- 页面下次修订或进入下一阶段时，必须建立/更新一个当前 Manifest，并明确历史版本优先级。
- 既有页面缺少 768px 证据时，应在下一次视觉修订补齐；在补齐前必须登记为明确的 carry-forward item，不能把 1440 或 390 直接当作 Tablet 证据。
- 既有页面的 Header/Footer 视觉可以继续作为组装证明，但生产实现和开发合同必须引用共享 Global Chrome，不得要求每页独立开发。
- 过渡整理不得改变已经批准的页面内容、事实、视觉或阶段授权。

## 10. Gate 5 提交前最小检查表

- [ ] Page Intent Card 已确认。
- [ ] 完整真实文案与模块顺序已确认。
- [ ] 关键词、事实、SEO、GEO、Schema 和 CTA 边界一致。
- [ ] 1440、768、390 完整证据齐全。
- [ ] Mobile Menu 和适用状态齐全。
- [ ] Global Chrome 只引用共享基线，无页面级分叉。
- [ ] 无内部治理词进入 Buyer Clean。
- [ ] 当前 Manifest 唯一且包含尺寸、版本和 SHA-256。
- [ ] 历史版本保留并明确 superseded 状态。
- [ ] 用户批准范围和下一 Gate 授权没有混写。

## 11. 版本记录

| 日期 | 版本 | 决定 |
|---|---|---|
| 2026-09-01 | V1.0 | 用户批准建立统一 Gate 1–5 标准、两个早期内容确认点、1440/768/390 视觉证据、共享 Global Chrome 所有权和单一当前 Manifest 规则。 |
