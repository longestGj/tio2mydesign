# SYS-404 与 CONV-THANK Gate 9 首轮独立验收及退回 V1.0

日期：2026-09-08。Review ID：`G9-SYS404-CONVTHANK-INITIAL-20260908-01`。实际审查者：`/root/sys404_convthank_gate9_review`，不同于 Gate 8 开发者。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW / INITIAL_ACCEPTANCE_COMPLETE / NOT_PASS`。

## 1. 对象、身份与结论

本轮只读验收对象为 `D:\16Wordpress_nextjs\.worktrees\sys404-convthank-gate8`、分支 `codex/sys404-convthank-gate8`：

| 层 | 固定身份与判断 |
|---|---|
| 实现 | `1571a67da57d5dd6f2b358ba20508ba46c76f581` |
| Build/runtime | `2z5DYuzAHx0An8WWlUsz2`；`http://127.0.0.1:4381`；本轮可访问 |
| Manifest声明证据HEAD | `7fa0b1026c80c4b12bc1725fff1ad7ef1492a676` |
| Manifest提交 | `46985d8689b1d4e90beafe7638ce9f967e0e6da0` |
| 当前工作树HEAD / 本轮有效观察链顶端 | `35a99a12cf0c675c72a2d181e687a2076b0e2fab`；工作树clean |
| 机器预检 | Manifest字段、实现祖先关系、Build ID、38份声明证据的存在/hash/commit及receipt集合通过；`git_head`因期望`7fa0b10`、实际`35a99a1`失败，整体`EVIDENCE_INCOMPLETE`，两轮runtime预检未获得可判PASS入口 |
| 后续补证 | `35a99a1`的三份真实Web3Forms拒绝材料可作为反证/未闭合事实读取；它们未进入Manifest、receipt或声明evidence HEAD，且含未脱敏个人邮箱/测试字段，不能升级为完整通过证据 |

总体结论：两页已实现的主体内容、三端视觉、主要键盘行为和绝大多数机器语义成立；但存在真实路由、Thank You 状态保护、receiver、analytics/consent、scope/cache、设备/AT和证据身份阻塞。当前没有用户例外覆盖这些项目。

| Page | `RECHECK_SCOPE_STATUS` | `PAGE_GATE9_STATUS` | `INTEGRATION_STATUS` | `RELEASE_STATUS` |
|---|---|---|---|---|
| `SYS-404` | `FULL_INITIAL_SCOPE_EXECUTED / NOT_PASS` | `NOT_PASS` | `NOT_READY` | `NOT_AUTHORIZED` |
| `CONV-THANK` | `FULL_INITIAL_SCOPE_EXECUTED / NOT_PASS` | `NOT_PASS` | `NOT_READY` | `NOT_AUTHORIZED` |

本报告不关闭 Gate 9，不授权合并、Gate 10、部署或发布。

## 2. 27项接受条件覆盖

### 2.1 SYS-404（11项）

| AC | 状态 | 本轮实际观察与剩余项 |
|---|---|---|
| `SYS404-G9-AC01` | `FAIL` | 两个普通根/嵌套未知URL均为404并显示批准页，代表性正常路由为200；但公开未知`/404/`返回框架默认“404: This page could not be found.”，没有`SYS-404`内容。 |
| `SYS404-G9-AC02` | `PASS` | 普通未知URL准确呈现eyebrow、H1、正文、两Primary及三Supporting，顺序与文字无增删；三端均仅一面板。 |
| `SYS404-G9-AC03` | `FAIL` | 五个href均准确且不携带原未知query/fragment；Products、Home、Request Documents、RFQ为可用目标，`/contact/`实际为404。未观察到表单请求或success事件。 |
| `SYS404-G9-AC04` | `PASS` | 普通未知URL为404、title准确、含`noindex, follow`、无canonical、无JSON-LD/hreflang，sitemap不含未知页或Thank You。Next另加一个普通`noindex`不改变目标指令。 |
| `SYS404-G9-AC05` | `PASS` | 实际共享Header/Footer/Logo/固定RFQ/Legal/Cookie入口成立，navigation current为0，copyright先于四项legal且无Terms；移动菜单及Cookie对话框焦点返回成立。 |
| `SYS404-G9-AC06` | `PASS` | Chromium与Firefox的1440/768/390均无横向溢出、剪裁或动作丢失；390五个动作顺序正确且均至少44px；独立截图与批准视觉无实质偏差。 |
| `SYS404-G9-AC07` | `NOT_VERIFIED` | 浏览器键盘、菜单正反向焦点、Escape/返回、Cookie焦点、reduced-motion、axe严重/致命问题0、44px及无overflow已通过；命名screen reader、物理touch device/批准代理和native 200% zoom未取得。 |
| `SYS404-G9-AC08` | `NOT_VERIFIED` | 正确scope的runtime和源码guard成立；缺少错误/缺失scope的同Build运行矩阵，以及route/query/cache/menu/SEO/form exit/media/shared/analytics完整负向scope与cache variation证据。 |
| `SYS404-G9-AC09` | `PASS` | 实现未注册404 analytics；两引擎、三宽运行未出现外部analytics/form请求，源码无404 success/event路径，故按合同“无event时证明absence”通过。 |
| `SYS404-G9-AC10` | `PASS` | 实际DOM/source无search、breadcrumb、FAQ、recommendation、help center、form、receiver、upload、page media、列表、自动跳转、动态承诺或page-local legal copy。 |
| `SYS404-G9-AC11` | `FAIL` | Manifest覆盖11个ID且38份原证据可复核，但声明HEAD与当前HEAD不一致；后续Manifest与真实拒绝材料未形成统一、脱敏、schema-valid的当前证据组合。 |

### 2.2 CONV-THANK（16项）

| AC | 状态 | 本轮实际观察与剩余项 |
|---|---|---|
| `CT-G9-01` | `NOT_VERIFIED` | `/thank-you/`四态/负态均200，正确scope源码guard和`force-dynamic`成立；错误/缺失scope及完整cache cold/warm/invalidation和跨会话泄漏矩阵未实际取得。 |
| `CT-G9-02` | `PASS` | 四态及负态title/meta、`noindex,nofollow`、clean base canonical、无page JSON-LD/Breadcrumb、无动态social state成立；sitemap排除。 |
| `CT-G9-03` | `PASS` | Direct/Quote/Documents/Sample在两引擎和三宽各准确呈现一面板、完整文案、动作顺序与目标；Direct无receipt cue。 |
| `CT-G9-04` | `FAIL` | missing、unsupported、markerless、mismatch、stale/future、legacy、legacy+request、duplicate-request和extra-marker-field均Direct；但有效quote marker加`?request=quote&email=qa-sentinel@example.test`仍显示Quote success，违反额外query不得暴露success。 |
| `CT-G9-05` | `NOT_VERIFIED` | RFQ本地模拟可区分positive与2xx-only negative；真实Web3Forms尝试为HTTP 403、页面保留失败态，provider acceptance与收件均未确认，真实positive层缺失。 |
| `CT-G9-06` | `NOT_VERIFIED` | Documents本地模拟对200+JSON `success=true`和失败态成立；没有当前配置关联的真实provider positive与收件层证据。 |
| `CT-G9-07` | `FAIL` | Sample模拟partial/negative行为成立；实际源码固定请求Web3Forms endpoint却仅接受`ok=true && receipt_confirmed=true`。Web3Forms官方当前API示例返回`success:true/false`，因此现有provider与判定格式不相容，且无真实positive receipt。来源：`https://docs.web3forms.com/getting-started/api-reference`。 |
| `CT-G9-08` | `NOT_VERIFIED` | 三表单源码/开发模拟覆盖validation、failure、值保留、retry和pending防重复；缺少三流程与实际receiver关联的timeout/network/provider/ambiguous/retry/request-count/event完整矩阵。 |
| `CT-G9-09` | `PASS` | sessionStorage、10分钟TTL、exact marker fields、matching refresh、mismatch、stale/future、new session、legacy/direct fail-closed成立；back/page view不创建marker。 |
| `CT-G9-10` | `FAIL` | marker只含allowlist字段且正文/metadata/accessible content无提交字段；但上列有效marker+额外email query保留PII型值于URL并显示success，未满足URL净化与extra-query边界。 |
| `CT-G9-11` | `FAIL` | 仅RFQ有条件式event helper；Documents与Sample无各自success event，`__TIO2_SHARED_CONSENT__`没有runtime setter/持久化消费，Cookie Settings实际只有Close和Cookie Policy，无法验证accept/deny/withdraw及三流程一次性事件矩阵。 |
| `CT-G9-12` | `FAIL` | shared assembly、current=0、fixed RFQ、Logo、legal order和无Terms成立；七个独立退出中`/applications/`实际为404，因此Sample的`View Applications`退出不可用。 |
| `CT-G9-13` | `PASS` | 1440/768/390四态、长Documents/Sample文字均无overflow/clip/overlap/hidden action/detached Footer；390动作至少50px；独立视觉对照无实质偏差。 |
| `CT-G9-14` | `NOT_VERIFIED` | 两引擎键盘、移动Menu/Cookie焦点循环与返回、reduced-motion、axe严重/致命0、focus-visible/44px/overflow已覆盖；native 200%、命名screen reader及物理touch/批准代理未覆盖。 |
| `CT-G9-15` | `NOT_VERIFIED` | Chromium与Firefox四态/三宽等价，production assets正常且无prototype复制反证；真实device及用户间cache/session隔离实测不足。 |
| `CT-G9-16` | `FAIL` | 同`SYS404-G9-AC11`：当前Manifest机器预检`EVIDENCE_INCOMPLETE`，且35a99a1补证未受Manifest/receipt/hash清单约束。 |

## 3. 稳定Finding台账

| Finding | 类型/严重度 | 受影响页/AC | 实际与影响 | Owner及关闭条件 |
|---|---|---|---|---|
| `ROOT-SCT-G9-F01-EVIDENCE-CHAIN` | `EVIDENCE_INCOMPLETE / BLOCKING` | 两页；`SYS404-G9-AC11`,`CT-G9-16` | Manifest期待`7fa0b10`，当前HEAD为`35a99a1`；`46985d8/35a99a1`未合入声明组合。后补三文件含未脱敏个人邮箱/测试字段。 | Gate 8 delivery owner：返回一个可由现行脚本重复通过的clean identity；把适用补证纳入Manifest/receipt/hash/AC映射，并以脱敏版本替代验收用个人数据。 |
| `ROOT-SCT-G9-F02-EXIT-TARGETS` | `INTEGRATION_FAILURE / BLOCKING` | SYS-404 `AC03`; CONV-THANK `CT12` | `/contact/`与`/applications/`在指定候选中均404。 | Contact、APP-000 owner + Gate 8 integration：同一候选Build中两路均返回正确非404页；复验两个源页动作、Back、Page ID、scope和无上下文转发。 |
| `SYS404-G9-F03-SPECIAL-404-PATH` | `IMPLEMENTATION_FAILURE / BLOCKING` | SYS-404 `AC01`（并影响批准恢复体验） | 公共`/404/`为404但呈现框架默认页，绕过批准SYS-404。 | Gate 8 routing owner：让公开未知`/404/`服从同一SYS-404结果，或以不会形成公共独立页面且符合合同的路由处理；复验状态、正文、head、cache及普通未知/已知路由回归。 |
| `CONVTHANK-G9-F04-EXTRA-QUERY-PII` | `IMPLEMENTATION/PRIVACY_FAILURE / BLOCKING` | `CT04`,`CT10` | 有效marker时额外`email` query仍显示success，且PII型值留在URL。 | CONV-THANK Gate 8 owner：额外query必须fail closed或在任何success暴露前安全净化至批准base/request形态；覆盖全部额外键、重复键、legacy、refresh/back和无success flash。 |
| `CONVTHANK-G9-F05-RECEIVER-LAYERS` | `NOT_VERIFIED / BLOCKING` | `CT05–08` | RFQ真实provider被403拒绝且未收件；Documents/Sample只有本地模拟positive。 | 三表单receiver owner：按各自predicate提供当前配置→运行→provider acceptance→目标收件的脱敏关联证据，并补实际失败/retry/value retention/duplicate request-count；不得用模拟success替代。 |
| `CONVTHANK-G9-F06-SAMPLE-RESPONSE-CONTRACT` | `IMPLEMENTATION_FAILURE / BLOCKING` | `CT07` | Sample固定Web3Forms URL但解析另一响应契约。 | CONV-SAMPLE/Gate 8：使用真正返回`ok+receipt_confirmed`的已批准receiver，或回原owner澄清并批准可验证predicate；随后真实positive、partial、negative与收件复验。 |
| `CONVTHANK-G9-F07-ANALYTICS-CONSENT` | `IMPLEMENTATION/INTEGRATION_FAILURE / BLOCKING` | `CT11` | 缺Documents/Sample distinct success event和实际shared consent状态/accept/deny/withdraw链。 | Analytics + Shared Consent + three form owners：实现并提供三流程ack后一次性event、非success抑制、零PII及accept/deny/withdraw/persisted-choice矩阵。 |
| `ROOT-SCT-G9-F08-DEVICE-AT` | `EVIDENCE_GAP / BLOCKING` | SYS `AC07`; THANK `CT14–15` | 代理断点、两引擎、axe和键盘已通过；native 200%、命名screen reader、物理touch/明确批准device proxy缺失。 | Gate 9 device/a11y owner：在相同Build完成三类证据并列出设备/浏览器/AT版本、视口、步骤与结果。 |
| `ROOT-SCT-G9-F09-SCOPE-CACHE` | `EVIDENCE_GAP / BLOCKING` | SYS `AC08`; THANK `CT01`,`CT15` | 只有正确scope runtime和局部源码/unit依据；完整wrong/missing-scope与cache用户隔离未验证。 | Platform/Gate 8提供可访问负向fixture与cache trace；Gate 9复验route/query/menu/SEO/shared/media/form exits/analytics、cold/warm/invalidation及跨会话不串态。 |

`BASELINE-QUALITY-DRIFT`是开发回执中的无关全库测试/旧lint项；本轮没有证据表明它由两页实现引入，不另计页面Finding，也不能用它替代上述Finding。

## 4. Gate 8定向返修与停止点

Gate 8下一轮只需处理：

1. 修复`ROOT-SCT-G9-F02`、`SYS404-G9-F03`、`CONVTHANK-G9-F04`、`CONVTHANK-G9-F06`、`CONVTHANK-G9-F07`。
2. 为`CONVTHANK-G9-F05`和`ROOT-SCT-G9-F09`提供可实际核验环境/证据；真实外部提交须沿用已获授权范围，未获新授权不得自行重发。
3. 重建`ROOT-SCT-G9-F01`机器交接组合；不得把含真实个人信息、未入Manifest的补充commit直接当通过包。
4. 保持本轮已通过的文案、三端视觉、metadata、marker TTL/allowlist、共享Chrome和普通未知路由行为，返修后做关联回归即可，不重写页面。

`ROOT-SCT-G9-F08`由设备/a11y验收owner补证；若Gate 8代码未变，不要求其为物理设备重新实现页面。

当前不生成`gate8_pass_notice`：返修范围并未全部通过。Project Controller应把上述Finding发送至原Gate 8任务，Gate 8不得将两页合并或送入全站预发布测试队列，直到新的固定候选返回并完成定向Gate 9复验。

## 5. 证据与局限

共同证据索引见同目录`GATE9_SYS404_CONVTHANK_EVIDENCE_INDEX_V1.0.json`。独立运行证据包括Chromium/Firefox三宽四态、负向query矩阵、16路HTTP结果、15张独立截图、12组axe检查和CUA键盘交互记录。未执行新外部提交、CMS写入、D16修改、分支操作、合并、部署或发布。

真实receiver正向接收、目标收件、native 200%、物理touch/批准代理、命名screen reader、完整错误scope和cache隔离仍按上表`NOT_VERIFIED`，没有用本地模拟冒充。
