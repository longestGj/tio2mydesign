# Gate 9 Trade 4 + Application 5 Independent Acceptance and Return V1.0

日期：2026-09-08。Control ID：`G9-TRADE4-APP5-20260908-01`。

## 1. 独立结论

本批九页已完成首轮Gate 9只读验收，结论为`NOT_PASS / CHANGES_AND_EVIDENCE_REQUIRED`。121项稳定接受条件合计`PASS 76 / FAIL 21 / NOT_VERIFIED 24`；66项依赖合计`PASS 28 / FAIL 14 / NOT_VERIFIED 23 / N/A 1`。Gate 1–6既有批准不重开；Gate 9未关闭，Gate 10、合并、部署、生产CMS写入、DNS、发布、sitemap和索引均未获授权。

| Page | AC result | Dependency result | Gate 9 |
|---|---:|---:|---|
| `RES-TRADE-EU` | `11 / 1 / 2` | `5 / 1 / 2 / 0` | `NOT_PASS` |
| `RES-TRADE-UK` | `8 / 2 / 3` | `4 / 1 / 0 / 0` | `NOT_PASS` |
| `RES-TRADE-IN` | `8 / 1 / 3` | `3 / 1 / 3 / 0` | `NOT_PASS` |
| `RES-TRADE-BR` | `6 / 3 / 4` | `1 / 2 / 2 / 1` | `NOT_PASS` |
| `APP-COAT` | `8 / 3 / 2` | `4 / 1 / 3 / 0` | `NOT_PASS` |
| `APP-PLAS` | `7 / 4 / 3` | `3 / 2 / 3 / 0` | `NOT_PASS` |
| `APP-MB` | `10 / 2 / 2` | `3 / 2 / 3 / 0` | `NOT_PASS` |
| `APP-INK` | `7 / 3 / 3` | `3 / 2 / 3 / 0` | `NOT_PASS` |
| `APP-PAPER` | `11 / 2 / 2` | `2 / 2 / 4 / 0` | `NOT_PASS` |

表内顺序为`PASS / FAIL / NOT_VERIFIED`，依赖列末位为`N/A`。逐项ID和判断见九份页面记录；没有使用部分通过状态代替四值结论。

## 2. 绑定对象

- 授权：`G8-TRADE4-APP5-20260908-01`。
- D16 worktree：`D:/16Wordpress_nextjs/.worktrees/trade4-app5-gate8`；latest branch `codex/country-editorial-integration`。
- latest implementation commit：`4fa585bc125c7b8fa926ab66059f4fc6887877f4`；evidence/HEAD commit：`58af74dbe44b4ccaafe517d592ecae5d5ff37ef2`；验收终检时worktree clean。
- latest local production runtime：`http://127.0.0.1:3226`；Build ID `1AwBNw0A1szLVVlTyLyQU`。
- isolated WordPress：`http://127.0.0.1:8186/graphql`；`site_scope=tio2-my`。
- 最新整合回执：`docs/verification/tio2-my/country-editorial-integration-20260908/RETURN.md`；原九页`b325aec6 / 6de21ad / 3216`证据保留为基线，并已在最新3226候选上重做九页三断点、head和内部路由检查。开发自检只作输入，不替代本记录。

## 3. 必修Finding

### `G9-T4A5-F01` — 五个Application临时URL被输出为正式机器身份

状态：`OPEN / REQUIRED / D16_AND_D23_RECORD_REPAIR`。

Registry、关键词主表、Application Playbook和批准Brief均把`APP-COAT / APP-PLAS / APP-MB / APP-INK / APP-PAPER`保持为`PROVISIONAL_URL`。实际SSR却为五页输出生产域绝对Canonical和`og:url`；`APP-COAT`的CMS配置还写成`identity.provisional=false`。`noindex,nofollow`和sitemap省略不能替代路由决定，也不能把候选URL升级成正式Canonical。

Gate 8需让临时状态控制Canonical、social URL和相关Schema URL的资格，并把`APP-COAT`恢复为临时状态；D23当前Manifest中遗漏的`APP-COAT`临时标记需按批准来源校正。修复不得自行改URL或批准最终路由。

### `G9-T4A5-F02` — 共享Applications入口在九页均为404

状态：`OPEN / REQUIRED / SHARED_ROUTE_OWNER`。

九页Header/Footer及部分正文保留`/applications/`；最新3226候选实测共28个可见实例，最终响应均为404。共享owner需实现该批准目标或按既有资格合同处理；页面不得私建fallback、改链至其他owner或隐藏必须保留的入口。修复后复验每页共享Chrome、键盘路径、返回路径及同scope Page ID。

### `G9-T4A5-F03` — Brazil英文与葡语采购目标为404

状态：`OPEN / REQUIRED / MARKET_ROUTE_OWNERS`。

`RES-TRADE-BR`中`/markets/brazil/`两处和`/pt-br/markets/brazil/`一处在最新3226候选均为404，直接失败`BRTRADE-G9-05/06`与`BRTRADE-DEP-02`。链接文案和目标必须保留批准值；由对应Market owner完成后再复验语言、scope、Page ID及浏览器Back/Return。

### `G9-T4A5-F04` — UK官方来源链接已失效

状态：`OPEN / REQUIRED / RESOURCE_SOURCE_OWNER`。

`RES-TRADE-UK`的`HMRC trade remedies guidance`指向`https://www.gov.uk/guidance/trade-remedies`，实际返回404。GOV.UK当前可访问的相关入口包括2026-08-21更新的`/government/publications/the-uk-trade-remedies-investigations-process/introduction-to-trade-remedies`。来源owner需核对批准语义后修订目标，不能只因URL相近直接替换；修复后重做六个官方来源的标签、目标、最终文档身份和安全属性检查。

## 4. 当前已证明范围

- 最新3226候选九页路由均返回200；27个1440/768/390组合均有一个H1、无横向页面溢出、无严重控制台错误、无可见`CURRENT`、无Terms链接，且可见交互目标未小于44px。九张最新1440长图已逐张打开复核。
- 九页CMS记录与D16配置对象逐页完全相等，Page ID、public path、`tio2-my`唯一scope和批准Gate 6包SHA均正确；未认证、错误scope和不存在Page ID均fail closed。
- 实际输出仅有`WebPage + BreadcrumbList`页面Schema，`robots=noindex,nofollow`；`robots.txt`全站Disallow，sitemap当前仅列首页。
- 菜单与Cookie Settings在Chromium中的Tab、Escape、焦点返回和断点清理正常；长页桌面与390px人工检查未发现裁切、关联丢失或Footer破坏。
- 所有Grade、Products和三个conversion入口均返回200；本页未提交任何真实表单，也未把2xx当成receiver或mailbox成功。
- 2026-09-08对EU、UK、India、Brazil当前官方入口做了有界复核：EU既有2025/4措施及2026-08-25反吸收再调查、UK AD0086及登记通知、India 2026-08-03 final finding、Brazil 802措施及仍在进行的公共利益程序与现有措施表未出现需要静默改写批准正文的材料。该结论不是实时法律保证，发布窗口仍须按各包时效合同复核。

## 5. 必须补证但不等于代码失败

1. `RECEIVER-EVIDENCE`：最新3226候选未配置RFQ provider key，正确显示暂不可用；九页涉及的RFQ/Documents/Sample有效、无效、超时/模糊、重试、provider确认和最终收件均未获真实发送授权，相关条件保持`NOT_VERIFIED`。
2. `A11Y-ENVIRONMENT`：Firefox二进制在当前环境不存在；非Chromium、真实触屏设备和指定screen reader/AT未验证。现有Chromium、Axe、原生200%静态证据不能覆盖这些环境。
3. `SCOPE-CACHE-RUNTIME`：正确、错误、缺失scope的实时GraphQL边界已验证，但同slug跨站冷/热缓存及七个表面的完整实际变异矩阵未独立运行，相关条件保持`NOT_VERIFIED`。
4. `SOURCE-ACCESS`：57个外部目标中发现1个确定404；部分ISO、厂商及印度/巴西门户在自动访问中返回403或网络不可达。这些被记录为环境不可证，不被误报成链接失效；发布前需在可用浏览器环境逐个确认。

## 6. 页面记录

- `pages/resources/eu-trade/07_qa/RES-TRADE-EU_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/resources/uk-trade/07_qa/RES-TRADE-UK_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/resources/india-trade/07_qa/RES-TRADE-IN_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/resources/brazil-trade/07_qa/RES-TRADE-BR_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/applications/coatings/07_qa/APP-COAT_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/applications/plastics/07_qa/APP-PLAS_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/applications/masterbatch/07_qa/APP-MB_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/applications/printing-inks/07_qa/APP-INK_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`
- `pages/applications/paper/07_qa/APP-PAPER_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md`

## 7. 停止点

本批Gate 9停在`NOT_PASS`。本记录是具体返修与补证材料，不表示已经修改D16、外发给开发者、关闭Gate 9或批准Gate 10。修复后只复验四个Finding、相应`NOT_VERIFIED`条件、受影响共享面和新的commit/build身份；可证明未受影响的PASS项允许继承。
