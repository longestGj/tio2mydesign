# TiO₂ Malaysia 首页视觉方向 V0.2

## 0. 文档状态与阶段边界

| 项目 | 内容 |
|---|---|
| 文档类型 | 首页首屏与视觉系统方向修订；不是完整首页视觉稿 |
| 上游批准基线 | `01_homepage_content_architecture_v0.2.md`、`02_homepage_wireframe_spec_v0.1.md` |
| 修订来源 | 主控对 V0.1 的人工视觉审查 |
| 当前状态 | V0.1 未通过；V0.2 等待主控人工复审，不交由用户选择 |
| 明确不包含 | 完整长页、高保真全站扩展、最终文案、图片生成、生产代码、实施计划、部署 |
| 日期 | 2026-08-29 |

四张 V0.2 样稿统一标注 `VISUAL DIRECTION ONLY / NOT PRODUCTION / COPY NOT FINAL`。Hero 工作表达统一标注 `COPY DRAFT / FACT COPY PENDING`。自动检查仅用于发现尺寸、文本、结构和文件问题，不能代替人工视觉审核。

## 1. V0.1 人工审核结论

V0.1 整套 A/B 交付未通过主控人工视觉审核。V0.1 文件完整保留为评审记录，V0.2 使用独立版本文件，未覆盖 V0.1。

失败项如下：

1. Direction B PC 的实际导出未包含完整白底 Header 和八项导航，交付图与文档描述不一致。
2. Direction B Mobile 顶部被裁切，状态条及 Logo/Menu/RFQ Header 无法完整审核。
3. Direction B 的深色细网格、白色信息面板和右对齐 `4 PATHS / 14 GRADES / 2 ROUTES` 呈现为 SaaS 数据看板或企业门户，不符合“Technical 但不能 SaaS”的边界。
4. Direction B 的 H1 没有包含 `Malaysia Titanium Dioxide`；主关键词主题只出现在 eyebrow 层级。
5. Direction A 使用 `APPROVED BRAND SYMBOL` 标签不准确。视觉标准批准的是 Logo/Icon 的方向和气质，不等于最终生产文件。
6. Direction A 的大号 3D Icon 占比过强；移动端尤其存在装饰图压过 H1 与 CTA 的风险。
7. 正式交付目录必须只保留版本化交付物，捕获脚本、浏览器 profile、检查裁图等工作文件不得残留。

## 2. V0.2 交付物

### 2.1 对比预览

`D:\23MySec\homepage\04_planning\visual-directions\homepage-visual-directions-v0.2.html`

预览默认展示两套 PC 首屏及两套移动端方向，并提供四个独立画布入口。它仅用于视觉审核，不是生产页面。

### 2.2 PNG

| 方向 | 端 | 文件 | 固定尺寸 |
|---|---|---|---:|
| A — Industrial Editorial | PC | `visual-directions/direction-a-pc-v0.2.png` | `1440 × 1000px` |
| A — Industrial Editorial | Mobile | `visual-directions/direction-a-mobile-v0.2.png` | `390 × 844px` |
| B — Technical Editorial / Procurement Dossier | PC | `visual-directions/direction-b-pc-v0.2.png` | `1440 × 1000px` |
| B — Technical Editorial / Procurement Dossier | Mobile | `visual-directions/direction-b-mobile-v0.2.png` | `390 × 844px` |

## 3. V0.2 的共同硬规则

### 3.1 每张图的完整结构

PC 固定包含：

```text
状态标识
→ 白底 Header：Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote
→ Hero
→ Markets / Products / Documents 紧凑采购条
```

Mobile 固定包含：

```text
状态标识
→ 完整 Logo / Menu / RFQ Header
→ Hero
→ Markets / Products / Documents 紧凑采购条
```

任何导出不得通过裁切省略状态标识或 Header。

### 3.2 Hero 与 CTA

- 两套 H1 工作标题均在 H1 层级包含 `Malaysia Titanium Dioxide`。
- 主 CTA：Request a Quote。
- 次 CTA：View Products。
- 不出现 Request Documents 或 Sample。
- 不把 Malaysia-Origin、制造地点、COO、批次追溯、供应稳定、交期或文件可用性写成已验证承诺。

### 3.3 颜色、字体和品牌边界

- 使用视觉标准的 `#062B5B`、`#031B3A`、`#00A99D`、`#14B8A6`、白色、`#F5F8FB`、`#D9E2EC` 和 `#334155`。
- 主字体为 Inter / Arial / Web-safe sans-serif；B 的采购卷宗标题和编号使用少量衬线字体，作为纸张编辑语言，不扩展为网站主字体。
- 不使用国旗、旅游地标、假工厂、实验室、仓库、装运或证明型概念图。
- 本阶段不生成新图片，只引用当前视觉方向中的横版 Logo 和 Icon 文件。
- Logo/Icon 统一描述为 `CURRENT VISUAL DIRECTION ASSET`，不得称作已批准生产文件。

## 4. Direction A — Industrial Editorial V0.2

### 4.1 保留内容

- 白色与浅灰为主的大留白材料品牌构图。
- 左侧大标题、事实门槛标签、主次 CTA。
- 右侧 Deep Navy 编辑画框和 3D Icon 氛围构图。
- Hero 后的白底三入口采购条。

### 4.2 修正内容

- PC Icon 从主导画面退为较小、较低透明度的氛围元素；H1 与 CTA 成为第一视觉焦点。
- Mobile Icon 进一步降低尺寸和透明度，作为弱背景水印，不占据独立内容区，也不影响文字可读性。
- 删除 `APPROVED BRAND SYMBOL`，改为：

```text
CURRENT VISUAL DIRECTION ASSET
ATMOSPHERE ONLY
NOT PRODUCTION
```

### 4.3 真实优缺点

优点：视觉主次清晰、品牌感强、事实误导风险较低、移动端更容易控制长度，也最不容易滑向 SaaS 页面。

缺点：首屏技术信息较克制，后续完整首页若没有把 Products、Documents 与 Resources 做出足够技术深度，可能显得“品牌表达强、技术说明弱”。

## 5. Direction B — Technical Editorial / Procurement Dossier V0.2

### 5.1 重新定向

V0.1 的 `Technical Procurement System` 被废弃。V0.2 改为 `Technical Editorial / Procurement Dossier`：用技术目录、编辑式纸张、细线、编号和注释建立可信度，不使用应用面板或数据看板语言。

### 5.2 修正内容

- 移除深色细网格背景；Hero 改为浅灰材料编辑场，保留单一 Navy 结构线。
- 右侧白板改为无阴影、无圆角的技术采购卷宗纸张，并使用更大的留白。
- 删除右对齐 KPI 式 `4 PATHS / 14 GRADES / 2 ROUTES`。
- 三个目录条目改为普通内容注释：Markets、Products、Documents；14 grades 只嵌入 Products 目录说明，不做指标展示。
- 不使用筛选器、状态面板、KPI、仪表盘、卡片堆叠或控制台样式。
- H1 改为直接包含 `Malaysia Titanium Dioxide` 的工作标题。
- PC 与 Mobile 都完整保留白底 Header，不以裁切制造“沉浸式 Hero”。

### 5.3 真实优缺点

优点：技术与文件秩序比 A 更强，但仍保持工业材料年报/技术目录的编辑气质；采购人员可以快速识别 Markets、Products、Documents 的关系。

缺点：信息密度仍高于 A。后续如果反复复制卷宗纸张、编号和目录行，仍可能变得死板或接近企业门户；完整首页最多只能选择性使用这种语言，不能让每个模块都成为“卷宗页”。

## 6. A/B 真实比较

| 比较项 | Direction A — Industrial Editorial | Direction B — Technical Editorial / Procurement Dossier |
|---|---|---|
| 第一印象 | 高级、克制、材料品牌感强 | 严谨、专业、接近技术目录与采购资料 |
| 采购型买家适配 | CTA 和三入口非常直接 | 三条评估路径的逻辑更快被理解 |
| 技术型买家适配 | 依赖后续 Products/Documents 增加深度 | 首屏已建立目录、注释与文件秩序 |
| Malaysia 识别方式 | Logo + Teal + H1 主题；无国旗/地标 | Logo + Teal + H1 主题；无国旗/地标 |
| 图片策略 | 当前 Icon 作为低主导氛围构图 | 当前 Icon 仅作为卷宗中的弱编辑标记 |
| Header/Hero 信息密度 | 低至中，留白明显 | 中等，内容有序但更紧凑 |
| CTA 突出程度 | 最突出 | 清晰，但与卷宗目录共同分配注意力 |
| 与 Markets/Products 衔接 | 通过三入口轻量下沉 | 通过目录内容和三入口双重衔接 |
| 移动端表现 | 更舒展，后续长度风险较低 | 信息更多，但已去除 KPI 面板和看板结构 |
| 误导事实风险 | 较低；仅品牌氛围元素 | 较低至中；目录中的结构说明仍需避免被误读为已核验能力 |
| 扩展完整首页难度 | 中等 | 中至高；必须限制卷宗语言的重复次数 |

## 7. 推荐

推荐仍为 **Direction A — Industrial Editorial**，并仅在后续 Products、Documents 或 Resources 的局部区域借用 B 的细线、编号和技术注释语言。

理由：

1. A 更符合此前“不要太复杂、不要太死板”的用户反馈。
2. 在企业实拍与证明资产尚未进入视觉阶段时，A 的事实误导风险更低。
3. A 更容易守住移动端页面长度和层级。
4. B V0.2 虽已脱离 SaaS 看板，但它仍是一种高密度辅助语言，不适合统治整页。

推荐不等于自动选择。V0.2 必须先通过主控人工视觉复审；只有主控允许后，才可进入用户选择。自动检查、DOM 文本匹配、截图尺寸和文件清单都不能替代对构图、气质、裁切和可读性的人工判断。

## 8. 导出与人工审核标准

- PC：`1440 × 1000px`，画布从状态标识顶部开始，到采购三入口底部结束。
- Mobile：`390 × 844px`，画布从状态标识顶部开始，到采购三入口底部结束。
- 四张图不得有横向溢出。
- 两套 PC 八项导航必须可读且顺序完整。
- 两套 Mobile Logo、Menu、RFQ 必须完整可见。
- B 必须由人工确认不再呈现 SaaS 看板/企业门户气质。
- A 必须由人工确认 H1 和 CTA 的视觉权重高于装饰 Icon。
- 两套 H1、CTA 和三入口路径必须正确。
- 无新图片、无证明型图片、无事实证明暗示。
- 正式目录只保留版本化 HTML/PNG；不保留捕获脚本、profile、检查图或临时文件。

## 9. 等待主控复审检查表

- [x] V0.1 文件保留，V0.2 使用独立版本文件。
- [x] 文档记录 V0.1 未通过及全部人工审核失败项。
- [x] A 修正 Icon 权重和资产标签。
- [x] B 改为 Technical Editorial / Procurement Dossier。
- [x] B H1 在主标题层级包含 Malaysia Titanium Dioxide。
- [x] 两套结构均明确包含完整状态条、Header、Hero 和三入口。
- [x] 未修改已批准内容架构和低保真线框。
- [x] 未进入完整首页、最终文案、生产代码、实施计划或部署。
- [x] 四张 PNG 已按固定尺寸重新导出并通过逐张人工视觉检查。
- [x] 正式目录临时文件清理完成并通过最终文件清单检查。
- [ ] 主控人工复审通过。

## 10. 阶段门槛

完成 V0.2 文档、四张 PNG、对比预览及最终核验后停止。不得直接要求用户选择，不得扩展完整首页；必须等待主控复审。
