# ABOUT-001 Gate 3 Validation V0.1

| 字段 | 记录值 |
|---|---|
| Page ID | `ABOUT-001` |
| 日期 | `2026-09-01` |
| 验证范围 | Desktop、390px、Mobile Menu、Partial Evidence、Restricted Evidence |
| 方法 | 本地渲染、逐图视觉检查、浏览器结构/尺寸自动检查 |
| 结论 | `PASS_FOR_GATE_3_SUBMISSION / NOT_APPROVED` |

## 1. 自动检查结果

| View | Viewport | Horizontal overflow | Header | <44px 可操作目标 | Capability images | Header RFQ | Footer/Menu RFQ | 脚本错误 |
|---|---:|---|---:|---:|---:|---|---|---|
| Desktop | 1440px | 0 | 84px | 0 | 0 | PASS | PASS | 0 |
| 390px | 390px | 0 | 64px | 0 | 0 | PASS | PASS | 0 |
| Mobile Menu | 390px | 0 | 64px | 0 | 0 | PASS | PASS | 0 |
| Partial Evidence | 1440px | 0 | 84px | 0 | 0 | PASS | PASS | 0 |
| Restricted | 1440px | 0 | 84px | 0 | 0 | PASS | PASS | 0 |

## 2. 内容与状态检查

- Desktop 与 390px 均显示真实长 H1、完整运营主体名称、Taiping 地址和来源日期，未发生截断或横向滚动。
- Mobile Menu 顺序为 `Home → Markets → Products → Applications → Documents → Resources → About CURRENT → Request a Quote`。
- Partial Evidence 删除了 35,000、30+ 和 200+ 规模指标；保留制造、origin、文件和出口协调子字段；无空行或 pending 卡。
- Restricted Evidence 未显示 35,000、30+、200+、Port Klang 或 FCL/LCL；只保留品牌、运营主体、页面职责和 owner 导航。
- Desktop、390px、Mobile Menu、Partial 和 Restricted 均没有 `<img>`；无工厂、港口、装柜、证书、团队或包装图片。
- Header/Footer/Menu RFQ 均保持可见；线框中未出现 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback。
- About current 同时使用文本 `CURRENT` 和结构标记，不只依赖颜色。

## 3. 视觉检查结果

- Desktop 十模块顺序正确；Why Malaysia、Documentation 与 Company Facts 形成三个明显的信任锚点。
- 390px Hero 按 `身份 → CTA → 来源 → Malaysia/markets 关系` 顺序压缩，没有按钮后的装饰性大空白。
- 390px Company Facts 采用 label-over-value，长地址正常换行。
- Mobile Menu 的 Close、一级导航和终端 RFQ 均保持清晰、可触控。
- Partial 与 Restricted 状态在删减字段后自然收拢，没有空媒体位、空 KPI 或占位符。

## 4. 未决项

- Gate 3 成果尚待用户/总控批准。
- Gate 4 视觉方向尚未授权；当前灰阶、Teal 结构提示和 Deep Navy Footer 只用于表达批准基线与信息层级。
- Gate 5 完整视觉、最终字体/色彩/间距、完整 hover/focus 展示仍未开始。
- 所有 route readiness 仍属于发布阶段依赖，不改变正式线框中的 Global RFQ。

