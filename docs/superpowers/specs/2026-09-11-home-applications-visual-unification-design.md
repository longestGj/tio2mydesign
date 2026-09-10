# HOME-001 与 Applications 视觉统一设计

## 1. 文档控制

| 字段 | 值 |
|---|---|
| Page ID | `HOME-001` |
| Route | `/` |
| 视觉参照 | `/applications`（`APP-000` 当前实现） |
| 决定日期 | `2026-09-11` |
| 决定来源 | 用户在当前总控对话逐节确认 |
| 状态 | `USER_APPROVED_DESIGN / NOT_IMPLEMENTED` |
| 修改类型 | 已有首页的视觉语言统一，不是内容、架构或功能重做 |
| 当前回退基线 | `HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` 所登记实现与证据 |

本设计只批准 HOME-001 的下一版视觉候选方向。它不修改现有批准基线，不代表代码已经实现，也不授权 Gate 10、部署、发布或索引。

## 2. 问题与目标

当前首页与 `/applications` 使用了两套明显不同的主体视觉语言：

- 首页以满宽色块、直角表格、大面积 Deep Navy 和多种卡片样式为主；
- Applications 使用居中内容容器、圆角边框、轻阴影、白色与浅灰蓝分区以及统一的标题和卡片语言；
- 首页移动端在隐藏 Hero 图片后产生不必要空白；
- 首页各模块的边界、留白和链接表达缺少一致节奏。

目标是让首页采用 Applications 的主体视觉系统，同时保留首页作为全站入口页的识别度和信息覆盖。修改完成后，读者应感到两页来自同一网站、同一组件体系，而不是两个独立模板。

## 3. 已选择方案

采用“完整统一”方案：内容与功能冻结，只重构整页视觉语言。

未选择：

1. 只修改 Hero、Start Here 和深色区块。该方案不能解决页面中段仍像旧模板的问题。
2. 同时删除模块、压缩内容。该方案会改变已批准的信息架构、SEO/GEO覆盖和首页入口职责。
3. 反向把 Applications 改成首页的满宽编辑式视觉。该方案会扩大修改范围并破坏当前已形成的内页系统。

## 4. 冻结范围

本轮不得改变：

- 已批准的首页文案、事实、型号数量和模块顺序；
- 页面链接目标、表单行为、SEO/GEO、Metadata 和 Schema；
- PRODUCT V0.3 的产品与关系边界；
- Header/Footer 的共享组件、导航顺序、84px/64px几何和固定 RFQ；
- 生产 SVG Logo；
- Desktop、Tablet 与 Mobile 已批准的内容差异，除本设计明确解决的 Tablet `Start Here` 项；
- 其他页面的视觉、代码和当前 Manifest。

如果实现发现必须改变以上任一项，应停止并提交单独影响决定，不能借“视觉统一”扩大范围。

## 5. 整体视觉系统

首页主体复用 `/applications` 当前视觉语法：

- 主体使用相同的居中内容宽度和响应式左右安全边距；
- 白色与浅灰蓝背景交替分区，取消连续的大面积满宽色块；
- 卡片统一使用同系列圆角、细边框和轻阴影；
- 章节采用一致层级：短 Teal 横线、栏目标签、H2、说明、内容卡片；
- CTA 只使用三种层级：Teal 实心主按钮、描边次按钮、文字链接；
- Deep Navy 主要用于共享 Footer；正文只保留一个页面级 RFQ 深色强调区；
- 字体、颜色、边框、圆角、阴影和间距优先复用 Applications 已实现的 token 或共享实现，不另造近似值。

## 6. Hero

- Hero 使用与 Applications 相同家族的圆角主容器、细边框、轻阴影、浅色背景和左侧 Teal 强调线。
- 左侧保留现有标签、H1、说明、`Request a Quote` 和 `View Products`。
- 右侧保留粉体图片，但放入独立圆角媒体卡，不再占据半屏高度。
- Desktop 使用左右布局；Tablet 保留左右结构但缩小媒体卡；Mobile 按文案、按钮、图片顺序纵向排列。
- Mobile 不再隐藏图片，也不得因图片状态产生空白占位。
- 图片必须保持现有批准对象和语义，不更换为新的能力、工厂或供应证明图片。

## 7. Start Here

- `Start Here` 紧接 Hero。
- 使用 Markets、Products、Documents 三张统一圆角入口卡。
- 每张卡保留编号、标题、简短说明和方向箭头。
- Desktop 和 Tablet 为三列；Mobile 为单列。
- 该模块在 Desktop、Tablet、Mobile 均显示。
- 用户的本次决定正式选择 Tablet 保留 `Start Here`，用于解决此前书面合同与 Tablet 视觉证据的分歧；后续治理同步应登记该决定，但不得覆盖历史记录。

## 8. 核心入口模块

### 8.1 Markets

- EU、UK、India、Brazil 使用统一圆角卡片。
- Desktop/Tablet 为 2×2；Mobile 单列。
- 保留现有文案、顺序和链接。

### 8.2 Products

- 四个产品组改为四张独立圆角卡片。
- 保留 `6 / 5 / 2 / 1` 数量与14个型号。
- Desktop 四列；Tablet 2×2；Mobile 使用可展开卡片。
- Grade 使用与 Applications 页面相同家族的圆角标签，不再使用小方块。
- Chloride、Sulfate 和 `View All 14 Grades` 组成模块底部独立行动区。
- 不新增排名、推荐、优劣、保证或比较关系。

### 8.3 Applications

- 五个 Application 使用与 `/applications` 一致的卡片家族。
- Desktop 3+2；Tablet 2+2+1；Mobile 单列。
- 保留现有内容与链接，不新增适用性保证。

## 9. 后半页模块

### 9.1 Company & Supply

- 使用单个浅色圆角容器。
- 左侧保留公司介绍和 About 链接；右侧保留三个信息条目。
- 公司名称改用全站标题字体，不再使用独立的衬线大标题。

### 9.2 Documents

- 使用浅灰蓝分区，不再使用整段 Deep Navy。
- Documents Hub 与 Request Documents 使用两张白色圆角卡片。
- 保留现有说明和链接。

### 9.3 Resources & Buyer Answers

- 五个主题统一为同一种卡片，不再混用衬线标题、不同边框和不对称列宽。
- Desktop 为平衡的 2+3 布局；Tablet 两列；Mobile 单列。
- 保留全部现有问题、答案和链接。

### 9.4 页面级 RFQ

- 保留为正文唯一的深蓝强调区，使用圆角容器，不再满宽贴边。
- 保留六项请求信息和 `Request a Quote` 按钮。
- Desktop、Tablet 显示。
- Mobile 按当前批准规则不显示页面级 RFQ；Header、Hero、Mobile Menu 和 Footer 的 RFQ 继续提供完整入口。

## 10. 响应式与无障碍

- Desktop：以1440px验收，主体最大宽度与 Applications 一致。
- Tablet：以768px和1024px验收，保留完整模块、Start Here 和页面级 RFQ。
- Mobile：以390px和320px验收，采用单列；Hero 图片显示且高度受控；页面级 RFQ 不显示。
- 所有可操作目标在移动端不小于44px。
- 不允许横向滚动、文字裁切、卡片遮挡、异常空白或隐藏表面焦点泄漏。
- 当前页状态只使用 Desktop 下划线与 Mobile Menu 左侧标记，不显示买家可见 `CURRENT`。
- Header/Footer 必须继续组装共享组件，不复制页面私有版本。

## 11. 验收条件

视觉候选至少应提供：

1. 1440px完整页。
2. 1024px完整页。
3. 768px完整页。
4. 390px完整页。
5. 320px关键状态或完整页。
6. 390px Mobile Menu打开态。
7. 390px Products展开态。

独立审查必须确认：

- 与 Applications 的容器、卡片、标题、CTA和留白语言一致；
- 首页仍具有清楚的全站入口层级，不退化成 Applications 的内容复制；
- Hero粉体图片在三类断点均按本设计处理；
- Start Here 在所有断点存在；
- Desktop/Tablet页面级 RFQ存在，Mobile页面级 RFQ不存在；
- 共享 Header/Footer、Production SVG Logo、固定RFQ和当前页状态正确；
- 冻结范围没有内容或功能回归；
- 五个断点无横向溢出，移动端触控目标满足要求。

## 12. 影响、风险与回退

### 影响

- HOME-001 需要重新生成完整响应式视觉候选；
- Tablet `Start Here` 的历史未决项需要在下一版 Home Manifest 中登记为用户已决定保留；
- Gate 8实现只有在新视觉候选完成独立审查并形成新的授权链后才能修改。

### 风险

- 过度复制 Applications 可能削弱首页入口层级；通过保留首页模块和入口职责控制。
- 卡片化可能使页面纵向过长；通过统一间距、内容高度和响应式重排控制，不通过删除内容解决。
- Hero图片移动端显示可能造成首屏过长；通过受控媒体高度和图片裁切控制。
- 旧版与新版的视觉证据可能混用；通过新版本号、独立Manifest和完整哈希清单隔离。

### 回退

现有 Home Gate 5/Gate 9批准视觉与实现保持不变，直到新候选完成审查、批准和开发授权。新候选未通过时直接回退至 `HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` 登记基线，不覆盖或删除历史资产。

## 13. 后续同步文件

设计进入正式页面流程后，由对应责任方按阶段同步：

- HOME-001 当前 Manifest；
- Home视觉规格、响应式证据和独立审查记录；
- Tablet `Start Here` 决定记录；
- Gate 6影响与交付审查；
- Gate 8实现授权与Gate 9只读验收记录。

本设计文档本身不执行上述同步，也不授予实现权限。
