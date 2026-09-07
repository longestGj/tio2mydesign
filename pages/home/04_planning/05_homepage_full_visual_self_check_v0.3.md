# TiO₂ Malaysia 首页整页视觉 V0.3 自检记录

## 0. 自检边界

V0.2 主体已通过；本记录只验证 V0.3 的四项定点精修及未变化基线。自动检查不能替代主控人工视觉复审，也不代表生产交互已经实现。

## 1. 版本保护

- [x] V0.1 全部文件保留。
- [x] V0.2 九个交付物的 SHA-256 与精修前记录一致。
- [x] V0.3 使用独立 HTML、PNG 和 Markdown 文件，没有覆盖旧版本。

## 2. 移动 Hero 实测

| 检查项 | 实际渲染值 | 结果 |
|---|---:|---|
| Hero 布局 | `height:auto; min-height:560px` | 通过 |
| Hero 实际高度 | 560px | 处于目标 560–610px |
| 按钮后呼吸空间 | 71px | 处于目标 48–72px |
| 三入口条 y 起点 | 632px | 通过 |
| 390×844 首屏中三入口可见高度 | 180px / 180px | 完整可见 |
| H1 | 42px / 1.04 | 未缩小 |
| Hero 正文 | 16px / 1.62 | 未缩小 |
| Hero CTA | 15px，最小高度 50px | 未缩小 |

- [x] 圆环和 Icon 已同步下移并降低主导程度。
- [x] 装饰图没有遮挡 H1、正文或 CTA。
- [x] Mobile 全页高度按内容减少为 7060px，没有尾部空白或模块删除。

## 3. 颜色对比度实测

| 组合 | 计算值 | 要求 | 结果 |
|---|---:|---:|---|
| `#007F77` / `#FFFFFF` | 4.881:1 | ≥4.5:1 | 通过 |
| `#007F77` / `#F5F8FB` | 4.580:1 | ≥4.5:1 | 通过 |
| `#FFFFFF` / `#007F77` | 4.881:1 | ≥4.5:1 | 通过 |
| `#526176` / `#FFFFFF` | 6.306:1 | ≥4.5:1 | 通过 |
| `#526176` / `#F5F8FB` | 5.916:1 | ≥4.5:1 | 通过 |
| `#5D4300` / `#FFF4C7` | 8.384:1 | ≥4.5:1 | 通过 |

- [x] `#00A99D` 不再承载小号文字或白字实心 CTA。
- [x] `#00A99D` 只用于装饰线、边框和非文本图形。
- [x] 实心 Teal CTA 的实际浏览器颜色为 `rgb(0,127,119)`，文字为 `rgb(255,255,255)`。
- [x] Internal Review 继续使用黄色语义，文字对比度为 8.384:1。

## 4. Buyer Clean 制作用语扫描

- [x] PC Clean Hero 图片标签为 `INDUSTRIAL MATERIALS`。
- [x] PC Clean 可见文本无 `VISUAL DIRECTION`。
- [x] PC/Mobile Clean 可见文本无 `NOT PRODUCTION`、`ASSET STATUS`、page_id、pending、not live、working copy 或 evidence gate。
- [x] 制作/审核语言只存在于 Internal Review 或预览页说明。
- [x] Clean 继续无 Sample。

## 5. 实际渲染字号核对

浏览器按真实显示状态统计叶子文字元素：

| 画面 | 可见买家文字低于 14px | 说明 |
|---|---:|---|
| PC Buyer Clean | 0 | 桌面文字基线保持不变 |
| Mobile Buyer Clean | 0 | 编号、MODELS、Footer 均已提高 |
| Mobile Menu Open | 0 | 状态图买家文字 ≥14px |
| Mobile Product Expanded | 0 | 状态图买家文字 ≥14px |
| PC Internal Review | 12 项 | 全部是 12px 黄色内部审核标签 |
| Mobile Internal Review | 27 项 | 12px 黄色标签及内部 14 型号核对区；均非 Buyer Clean 内容 |

- [x] 三入口编号实际为 14px。
- [x] MODELS 实际为 14px。
- [x] Footer 法律入口实际为 14px。
- [x] 隐藏或 Internal Review 专用 12px 内容没有被误计为 Buyer Clean 可见文字。

## 6. 架构与状态回归检查

- [x] PC Header 八项顺序未改变。
- [x] Hero H1 仍包含 Malaysia Titanium Dioxide。
- [x] Hero CTA 仍只有 Request a Quote 与 View Products。
- [x] 模块顺序仍为 Markets → Products → Applications → About → Documents → Resources → RFQ。
- [x] EU、UK、India、Brazil 完整。
- [x] PC 14 个型号完整且唯一；分组仍为 6/5/2/1。
- [x] Mobile Clean 默认菜单关闭、四个产品组关闭。
- [x] Menu Open 完整显示八项顺序。
- [x] Product Expanded 只展开 Coatings 六个型号，其余三组关闭。
- [x] 无 Sample，无新增事实或资产声明。

## 7. 导出尺寸与溢出

| 文件 | 实际尺寸 | `scrollWidth` / 画布宽度 | 结果 |
|---|---:|---:|---|
| PC Clean | 1440 × 6000 | 1440 / 1440 | 无横向溢出 |
| Mobile Clean | 390 × 7060 | 390 / 390 | 无横向溢出 |
| PC Review | 1440 × 6000 | 1440 / 1440 | 无横向溢出 |
| Mobile Review | 390 × 7060 | 390 / 390 | 无横向溢出 |
| Menu Open | 390 × 1050 | 390 / 390 | 无横向溢出 |
| Product Expanded | 390 × 1200 | 390 / 390 | 无横向溢出 |

## 8. 阶段结论

- [x] V0.3 只修改批准的四项。
- [x] 未借机重做架构、文案、PC 布局、产品分类或状态设计。
- [x] 未进入生产代码、实施计划或部署。
- [ ] 主控人工视觉复审通过。

V0.3 停在主控复审门槛。
