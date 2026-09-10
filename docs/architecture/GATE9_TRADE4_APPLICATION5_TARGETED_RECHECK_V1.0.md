# Gate 9 Trade 4 + Application 5 定向复验 V1.0

日期：2026-09-08。Control ID：`G9-TRADE4-APP5-TARGETED-RECHECK-20260908-01`。

## 1. 结论

Gate 8返修后的定向独立复验已完成。`G9-T4A5-F01`、`F03`、`F04`关闭；`G9-T4A5-F02`保持`OPEN / SHARED_ROUTE_OWNER_APPROVAL_BLOCKER`。九页因此仍为`GATE9_NOT_PASS / ONE_SHARED_REQUIRED_FINDING_OPEN`，不得进入Gate 10、合并、部署或发布。

| Finding | 复验结果 | 依据 |
|---|---|---|
| `G9-T4A5-F01` | `CLOSED` | 五个Application在direct-CMS runtime均200；Page ID准确；Canonical、`og:url`及URL-bearing JSON-LD均为0；`robots=noindex,nofollow`保持。APP-COAT隔离CMS已读回`provisional=true`。 |
| `G9-T4A5-F02` | `OPEN / BLOCKED` | `/applications/`仍404；九页批准label/href未隐藏、改链或fallback。`APP-000`只有未最终批准的Gate 5候选，没有Gate 6交付包或Gate 8开发授权，当前开发者不得编造Hub正文。 |
| `G9-T4A5-F03` | `CLOSED` | `/markets/brazil/`与`/pt-br/markets/brazil/`均200；分别绑定`MARKET-BR-EN / MARKET-BR-PT`与`en / pt-BR`，Canonical准确；Brazil Trade三处批准链接保持，点击及Browser Back返回原页通过。 |
| `G9-T4A5-F04` | `CLOSED` | UK页旧404 URL为0，新批准HMRC URL精确1处，label/description/order不变，官方来源集合仍为6；新目标由HMRC/GOV.UK发布且当前200。 |

## 2. 绑定候选

- D16 worktree：`D:/16Wordpress_nextjs/.worktrees/trade4-app5-gate8`
- branch：`codex/country-editorial-integration`
- implementation：`4a7e170b0bba90ce8428b8f23788c15e3e64dde4`
- evidence/HEAD：`293231dee11c9b66bfa8b31938c6987d7fa585ad`
- direct production Build ID：`nueBC1PmlOz7I74G5G0oP`；54/54静态页完成
- direct preview：`http://127.0.0.1:3231`
- isolated review CMS：`http://127.0.0.1:8186/graphql`
- 只读overlay `8191`已关闭；最终复验未使用overlay
- 验收终检时D16 worktree clean

隔离CMS只同步APP-COAT provisional、UK批准维护URL及RFQ Brazil source allowlist三项批准字段；同步前后hash、字段diff、rollback seed与恢复命令保存在D16证据目录。没有生产或远程CMS写入。

## 3. 独立证据

1. Chromium direct-CMS复验：五个Application、UK和Brazil EN/PT共八条受影响route均200、一个H1、无横向溢出；五个Application不输出Canonical、`og:url`或JSON-LD；Brazil两页Page ID、语言和Canonical准确；UK新来源精确1处、旧来源0处。
2. 独立导航复验：Brazil Trade页面两条英文及一条葡语批准目标保持；英文目标点击到`MARKET-BR-EN`后Browser Back准确返回原Trade页。
3. 独立测试复跑：editorial metadata/payload、UK来源及Brazil EN/PT route五个文件共55项通过。
4. 新HMRC目标`https://www.gov.uk/guidance/check-when-you-need-to-pay-anti-dumping-countervailing-and-safeguard-duties`的发布主体、标题和内容角色已按`RES-TRADE-UK-SOURCE-MAINT-20260908-01`核对；它覆盖与其他进口税费、临时措施、non-preferential origin及Trade Notices/Tariff核对的既定语义。
5. Gate 8全量证据记录typecheck通过、lint 0 error、定向104项通过、合并拆分后的仓库2612项通过；两个并发WP-CLI超时文件单独复跑17/17通过。开发自检仅作补充，未替代上述独立复验。

## 4. 继承与开放项

首轮验收中可证明未受返修改动影响的PASS项继续继承。receiver/最终收件、非Chromium、真实设备、screen reader/AT、跨站冷/热缓存和生产环境等未具备授权或环境的条件保持`NOT_VERIFIED`；本轮没有真实表单或邮件发送。

F02解除条件是APP-000取得有效批准组合、Gate 6交付包和Gate 8开发授权，并在同一`site_scope=tio2-my`运行时让`/applications/`真实可达。随后只需复验九页共享Chrome/正文入口、键盘路径、Back/Return、Page ID和scope；不得用空壳、隐藏、改链或fallback关闭。

## 5. 停止点

本轮只关闭F01/F03/F04，不关闭任何单页Gate 9。F02及其他`NOT_VERIFIED`保持，Gate 10、merge、push、部署、生产CMS、DNS、发布、sitemap和索引均未授权。
