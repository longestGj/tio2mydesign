# RES-TRADE-UK Dead Source URL Maintenance Decision V0.1

日期：2026-09-08。Decision ID：`RES-TRADE-UK-SOURCE-MAINT-20260908-01`。

## 1. 决定

Gate 9确认批准来源`https://www.gov.uk/guidance/trade-remedies`返回404。按用户对四项Gate 9 Finding的返修授权，Resource Source owner完成同义官方来源维护：

- 保留可见标签：`HMRC trade remedies guidance`
- 保留可见用途说明：`relationship between trade remedies and other import duties`
- 旧目标：`https://www.gov.uk/guidance/trade-remedies`
- 新目标：`https://www.gov.uk/guidance/check-when-you-need-to-pay-anti-dumping-countervailing-and-safeguard-duties`
- 状态：`APPROVED_SOURCE_URL_MAINTENANCE / AUTHORIZED_FOR_GATE8_REPAIR`

## 2. 语义核对

新目标是GOV.UK的HM Revenue & Customs官方Guidance，标题为`Check when you need to pay anti-dumping, countervailing and safeguard duties`，发布于2023-03-31，2026-09-08复核可访问。页面明确说明：

- anti-dumping duty作为进口附加税与其他适用税费的关系；
- investigation期间可能采取provisional anti-dumping或countervailing duty；
- measures按货物的non-preferential origin适用；
- 应结合Trade Remedies Notices和Trade Tariff核对具体商品及措施。

这些内容覆盖旧来源在批准Buyer Clean copy中的既定角色，且比Gate 9首轮记录中列出的TRA`Introduction to trade remedies`候选更准确地维持`HMRC`来源身份及进口税费语义。因此批准新目标替换失效URL；不得借此改写AD0086状态、税率、原产地结论、页面正文或其他五个官方来源。

## 3. 实施与验收

Gate 8只替换UK页CMS/config中的上述target，保留label、description、外链安全属性、顺序和其余批准内容。Gate 9复验须确认新URL最终2xx、最终文档身份仍为HMRC/GOV.UK、标签与用途相符，并重查六个官方来源集合。

本决定不改变Gate 1–6关闭状态，不授权发布、生产写入、Gate 9关闭或Gate 10。
