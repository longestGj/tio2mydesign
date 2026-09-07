# RFQ / 报价询盘转化分析

## 结论先行

在 20 个可正常评估的同行首页中，没有一个把 `Request a Quote / RFQ` 作为与本项目相同的首页主任务。同行更常见的是 `Learn more`、产品浏览、新闻、下载、Contact 或 Sample。由此不能推出“RFQ 无效”；相反，它说明 TiO₂ Malaysia 可以用更明确的采购任务导向形成差异化，但必须用真实证据降低买家在提交询盘前的风险感。

> 计数口径：24 个正式样本中，排除自有基线 `mytio2.com`、2 个 Cloudflare challenge 页面和 1 个仅显示国家/语言选择器的页面，同行模块频率的实质样本数为 20。频率只代表公开页面观察，不代表转化效果。

## 同行主要转化路径

| 路径 | 观察 | 典型样本 | 对本项目的含义 |
|---|---|---|---|
| Learn more / Discover | 最常见，风险低，但离采购动作远 | Tronox、KRONOS、DKSH、Safic-Alcan | 可用于次级入口，不能替代主 RFQ |
| Product / Application discovery | 制造商和分销商都高频 | Tioxide、INEOS、LB Group、DKSH、Azelis | RFQ 前需要帮助买家完成应用和牌号自我筛选 |
| Sample request | 少量出现，通常绑定具体牌号 | LB Group、Cinkarna | 适合作为已识别牌号后的次级转化，不宜抢占主 RFQ |
| Download / Resource center | 用于技术资料与报告 | Tioxide、INEOS、DKSH | 本项目已决定公开只列文件名和说明，因此要改成“申请文件”而非直接下载 |
| Contact / Enquiry | 区域站和分销商常见，但意图宽泛 | DKSH、APCC、Focus | 可以保留一般联系，但应与采购 RFQ 分开 |
| Direct RFQ | 在可评估同行首页中未见同等强度 | 无 | 是本项目的潜在差异化，不是同行验证过的结果 |

## 对采购/技术买家的 RFQ 前置条件

终端制造企业的采购或技术人员，在报价前至少需要快速判断：

1. 供应主体是谁，原产地与制造/出口关系是否真实；
2. 是否有适合其应用的 rutile 等级或可由技术人员协助匹配；
3. TDS、SDS、COA、COO、REACH-related documents 能否申请；
4. 供应稳定性由哪些真实能力支撑，如生产地点、包装、仓储、出口协调和质量流程；
5. 提交 RFQ 后需要提供什么信息、会得到什么响应。

因此，RFQ 不应是孤立按钮。它需要前置证据、应用筛选和低摩擦表单共同支持。

## 研究阶段建议的转化层级

该层级是研究结论，不是已批准的首页结构：

- 主动作：`Request a Quote / RFQ`。
- 次动作：`Request Documents`，仅列文件名称与说明，提交申请后获取。
- 条件动作：`Request a Sample`，更适合在应用/牌号判断之后出现。
- 辅助动作：`Talk to Technical Support` 或一般 Contact；只有在真实响应流程存在时使用。

## RFQ 表单的研究性字段建议

最终字段需在设计规格阶段批准。为降低无效询盘，同时避免过长表单，可优先考虑：

- 姓名、公司、企业邮箱、国家/市场；
- 应用（coatings、plastics、masterbatch、printing inks、paper、specialty）；
- 目标牌号或“需要推荐”；
- 预计采购量与频率；
- 包装/交付需求；
- 需要的文件类型；
- 备注和材料上传（如现用牌号/TDS，是否开放待技术确认）。

## 风险与验证边界

- 没有同行分析、公开页面或 Wiki 能保证 RFQ 数量或转化率。
- 不能使用虚假的即时回复、库存、最低订量、交期或认证承诺。
- 不能把 `REACH-related documents` 简写成未经核实的“REACH certified”。
- 表单响应承诺、数据处理、垃圾询盘防护和邮件接收能力，需在实施规格中单独验证。
- 移动端深度样本显示：连续长页会使关键 CTA 很快远离视口；主 RFQ 需要在移动端保持高可见性，但是否采用 sticky CTA 要在设计阶段测试和批准。
