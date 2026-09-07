# TiO₂ Malaysia 首页整页视觉设计 V0.3

## 0. 状态与范围

| 项目 | 内容 |
|---|---|
| 版本性质 | V0.2 主体已通过后的四项定点精修 |
| 当前状态 | V0.3 整页视觉设计，等待主控人工复审 |
| 保持不变 | 架构、模块顺序、PC 布局、文案方向、四市场、14 型号与 6/5/2/1 分组、Clean/Review 状态设计、两个移动状态图 |
| 本轮只改 | 移动 Hero 空白、颜色对比度、Buyer Clean 制作用语、移动端可见 12px 文字 |
| 明确不包含 | 生产实现、真实链接、菜单/折叠行为、表单流程、实施计划、部署 |
| 日期 | 2026-08-29 |

V0.1、V0.2 全部交付物继续保留，V0.3 使用独立版本文件。V0.2 不被描述为整体失败。

## 1. 版本化交付

| 交付 | 文件 | 实际尺寸 |
|---|---|---:|
| PC Buyer Clean | `visual-designs/homepage-full-visual-pc-clean-v0.3.png` | 1440 × 6000px |
| Mobile Buyer Clean | `visual-designs/homepage-full-visual-mobile-clean-v0.3.png` | 390 × 7060px |
| PC Internal Review | `visual-designs/homepage-full-visual-pc-review-v0.3.png` | 1440 × 6000px |
| Mobile Internal Review | `visual-designs/homepage-full-visual-mobile-review-v0.3.png` | 390 × 7060px |
| Mobile Menu Open | `visual-designs/homepage-mobile-menu-open-v0.3.png` | 390 × 1050px |
| Mobile Product Expanded | `visual-designs/homepage-mobile-product-expanded-v0.3.png` | 390 × 1200px |
| 对照预览 | `visual-designs/homepage-full-visual-preview-v0.3.html` | 视觉审核载体，不是生产实现 |

## 2. 定点精修 1：移动 Hero

V0.2 的移动 Hero 使用固定 `700px` 高度。V0.3 改为内容驱动并设置合理下限：

```text
height: auto
min-height: 560px
padding-top: 84px
padding-bottom: 48px
```

390px 宽度实测结果：

| 指标 | V0.3 实测 |
|---|---:|
| Mobile Hero 高度 | 560px |
| 两个按钮结束至 Hero 底部 | 71px |
| 三入口条起点 | 页面 y=632px |
| 390×844 首屏内可见三入口高度 | 180px，即完整三入口条 |

H1 仍为 42px，正文 16px，按钮 15px，原行高与 CTA 尺寸均未缩小。低透明度圆环和 Icon 同步下移、略缩小并降低透明度，继续只承担氛围，不遮挡文字或 CTA。

Hero 减少 140px 后，Mobile 全页由 V0.2 的 7200px 调整为 7060px；没有删除模块或压缩正文。

## 3. 定点精修 2：颜色对比度

### 3.1 色彩职责调整

- `#00A99D` 继续作为品牌亮青色，只用于装饰线、边框、圆环和不承载文字的视觉强调。
- 新增可访问深青色 `#007F77`，用于浅色背景上的小文字、H1 青色文字和实心 CTA。
- 常规辅助正文从 `#64748B` 调整为 `#526176`。
- Navy、Deep Navy、白色、浅灰及黄色 Internal Review 语义保持不变。

### 3.2 实际计算值

对比度按 WCAG 相对亮度公式计算：

| 前景 | 背景 | 用途 | 对比度 |
|---|---|---|---:|
| `#007F77` | `#FFFFFF` | 小号 kicker、编号、文本强调 | 4.881:1 |
| `#007F77` | `#F5F8FB` | 浅灰模块中的小号青色文字 | 4.580:1 |
| `#FFFFFF` | `#007F77` | 实心 CTA | 4.881:1 |
| `#526176` | `#FFFFFF` | 白底辅助正文 | 6.306:1 |
| `#526176` | `#F5F8FB` | 浅灰底辅助正文 | 5.916:1 |
| `#334155` | `#FFFFFF` | 常规正文 | 10.355:1 |
| `#334155` | `#F5F8FB` | 浅灰底常规正文 | 9.715:1 |
| `#062B5B` | `#FFFFFF` | Navy 导航/标题 | 13.959:1 |
| `#5D4300` | `#FFF4C7` | Internal Review 黄色标签 | 8.384:1 |

原 `#00A99D` 与白色为 2.932:1，因此 V0.3 不再让它承载 14–15px 文字或白字实心按钮。

## 4. 定点精修 3：Buyer Clean 制作用语

PC Buyer Clean Hero 图片上的：

```text
INDUSTRIAL MATERIALS / VISUAL DIRECTION
```

已改为自然的买家端标签：

```text
INDUSTRIAL MATERIALS
```

PC/Mobile Buyer Clean 的实际可见文本已扫描，不包含 `VISUAL DIRECTION`、`NOT PRODUCTION`、`ASSET STATUS`、page_id、pending、not live 或 evidence gate 等制作/审核语言。

制作和资产状态仍可出现在 Internal Review Overlay 与预览页外部说明中，Clean/Review 分离原则不变。

## 5. 定点精修 4：移动 Buyer Clean 字号

| 元素 | V0.2 | V0.3 |
|---|---:|---:|
| 三入口编号 01/02/03 | 12px | 14px |
| Products 的 MODELS | 12px | 14px |
| Mobile Footer 法律入口 | 13px | 14px |
| Internal Review 注释 | 12px | 12px，仅内部审核可见 |

基于浏览器实际渲染值检查：Mobile Buyer Clean、Menu Open、Product Expanded 均没有低于 14px 的可见买家文字；Mobile Review 中低于 14px 的内容只来自黄色审核标签和内部 14 型号核对区。

## 6. 保持不变的批准基线

- Header 顺序仍为 `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`。
- Hero H1 与 `Request a Quote / View Products` 两个 CTA 不变。
- 主体顺序仍为 Markets → Products → Applications → About → Documents → Resources → RFQ。
- EU、UK、India、Brazil 完整；14 个型号、四组 6/5/2/1 不变。
- Mobile Clean 默认菜单关闭、产品组关闭；Menu Open 和 Product Expanded 仍单独交付。
- Documents 仍只有 Hub 与 Request Documents 两条路径；无 Sample。
- A 为整体视觉基底，Products/Documents/Resources 保持 B 的技术编辑表达。
- 事实、原产地、制造、COO、追溯、文件与资产门禁没有变化。

## 7. 阶段门槛

V0.3 仍是静态视觉设计与交互状态示意，不是生产实现。完成后停在主控人工复审门槛；未获批准前不进入生产代码、实施计划或部署。
