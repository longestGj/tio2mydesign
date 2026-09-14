# TiO2 Malaysia GA4 Active Gate 9 Independent Acceptance V1.0

日期：2026-09-13  
Review ID：`TIO2-MY-GA4-ACTIVE-G9-01`  
Handoff ID：`G8-G9-TIO2-MY-GA4-ACTIVE-20260913-01`  
Site scope：`tio2-my`  
结论：`RETURN / COOKIE_SETTINGS_EXACT_COPY_REPAIR_REQUIRED`

## 1. 四层状态

- `RECHECK_SCOPE_STATUS=RETURN / 1_REQUIRED_FINDING_OPEN`
- `PAGE_GATE9_STATUS=NOT_PASS / ACTIVE_GA4_ATOMIC_ACTIVATION_RETURN_01_REQUIRED`
- `INTEGRATION_STATUS=NOT_READY`
- `RELEASE_STATUS=NOT_AUTHORIZED`

GTM-only、Consent Mode网络状态、Cookie生命周期、三个批准事件、无PII、跨scope隔离和三份法律页面主体均通过本轮核验。Cookie Settings 的首次无选择状态没有使用批准的精确动作集合，因此原子激活合同尚未全部满足，整组不能通过Gate 9。

## 2. 精确候选身份

| 字段 | 值 |
|---|---|
| D16 worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `b52702cf52a1eb6a8292db160920158a3def3eed` |
| Implementation | `30e026318006c141b725a1231f1942f555cd9a07` |
| Test alignment | `691ad3ed24384eea9f72a269da49035814c93bbd` |
| Evidence commit | `c55eb8f8dec38f9d96a817228cf7d66bfac9afeb` |
| Handoff / observed HEAD | `2cf213c43bd0d2b6ad3e5cbfeb1d09b8053eaee2` |
| Build ID | `tio2-my-ga4-g8-30e02631-20260913` |
| Runtime / CMS | `http://127.0.0.1:3123` / `http://127.0.0.1:8280/graphql` |
| GTM / GA4 | `GTM-MWQVK7J4` Preview / `G-QDHLMRH2WB` |

独立读回确认工作树洁净，baseline→implementation→test alignment→evidence→handoff祖先链完整；Build目录及`BUILD_ID`与交接一致。七条范围路由两轮14/14请求均为HTTP 200并包含完整Build marker；CMS GraphQL返回200。

## 3. 机器交接限制与独立处置

标准validator和由它驱动的preflight都如实保存为`EVIDENCE_INCOMPLETE`，没有宣称工具PASS。validator只有两项失败：

1. Manifest声明的`evidence_head=c55eb8f...`与随后加入Manifest/receipt的handoff HEAD `2cf213c...`不同；
2. receipt不在较早的evidence commit中，而是在handoff HEAD中。

这是已登记的Manifest最终提交哈希循环自引用限制。独立补验确认16/16证据存在、工作树SHA-256匹配、均在evidence commit中受追踪，receipt引用集合与16项证据完全一致，Manifest与receipt都在handoff HEAD中受追踪。因此该工具限制不构成实现Finding，也不掩盖本报告登记的实际Cookie Settings偏差。

## 4. 接受条件覆盖

| 条件 | 结果 | 独立观察 |
|---|---|---|
| `GA4.ACTIVE.CONTAINER` | `PASS` | 原始HTML中四项denied bootstrap脚本先于GTM loader；只加载`GTM-MWQVK7J4`，没有`gtag/js`或直接GA脚本旁路。Tag Assistant原件显示Container Preview已连接。 |
| `GA4.ACTIVE.PAGE_VIEW` | `PASS` | 冻结网络原件中initial/withdrawn为`gcs=G100`；accepted reload对`G-QDHLMRH2WB`恰好一个`page_view`且为`gcs=G101`。 |
| `GA4.EVENT.RFQ_PROVIDER_ACCEPTED` | `PASS` | 对应事件一个请求、一个GA4 hit；没有真实表单提交。 |
| `GA4.EVENT.DOCUMENTS_PROVIDER_ACCEPTED` | `PASS` | 对应事件一个请求、一个GA4 hit；没有真实表单提交。 |
| `GA4.EVENT.SAMPLE_PROVIDER_ACCEPTED` | `PASS` | 对应事件一个请求、一个GA4 hit；没有真实表单提交。 |
| `GA4.NO_PII` | `PASS` | 三个事件均只含`site_scope/page_id/source/form_type`四个批准参数；固定事件构造没有接收买家字段，冻结请求集无PII键值。 |
| Cross-scope | `PASS` | 冻结目标请求集没有其他Measurement ID；源码按`siteId === tio2-my`失败关闭，公开分析loader仅GTM一处。 |
| Cookie生命周期 | `PASS` | 接受后观察到`_ga`和`_ga_QDHLMRH2WB`，host `127.0.0.1`、path `/`、约400天；撤回后两者均不存在。浏览器独立操作确认Accept后重开为Analytics allowed，Necessary only后重开为denied状态并返回开启控件焦点。 |
| `LEGAL.ACTIVE.EN` | `PASS` | 390/768/1440实际页含批准GA/GTM、cookieless、无PII及四Consent语义；日期13 September 2026，Canonical、hreflang、robots、Schema正确，零横向溢出。 |
| `LEGAL.ACTIVE.MS` | `PASS` | BM对等语义、同日期、Canonical/hreflang/robots/Schema正确，三档零横向溢出。 |
| `LEGAL.COOKIE.ACTIVE` | `PASS_WITH_SHARED_FINDING` | 主体与三行语义库存、Advanced Consent、日期、SEO/Schema均正确；共享Cookie Settings动作受F01影响。 |
| `CONSENT.ACCEPT_WITHDRAW` | `PASS` | 四项默认denied；接受只将`analytics_storage`设为granted；广告三项始终denied；撤回恢复denied并清理两枚GA Cookie。 |
| `CONSENT.ACTIVE` | `FAIL` | 首次无有效选择时的动作集合不符合5.4精确合同，见F01。 |

## 5. 必修Finding

### `TIO2-MY-GA4-G9-F01` · P1 · Cookie Settings首次动作与重开动作混用

批准合同5.4把两种状态明确分开：首次动作必须为`Accept analytics · Necessary only · Cookie Policy`；已有选择后重开才显示`Save preferences · Accept analytics · Necessary only · Close`。

Codex内置浏览器在确认`tio2_my_consent_v1`尚不存在后首次打开Cookie Settings，实际依次显示：

`Close · Save preferences · Accept analytics · Necessary only · Read Cookie Policy`

因此首次界面提前显示只属于重开状态的`Save preferences`和`Close`，并把批准的精确`Cookie Policy`标签改成`Read Cookie Policy`。源码没有区分“没有选择”与“已选择Necessary only”：组件始终渲染Close和Save，公共copy也固定使用`Read Cookie Policy`。Gate8现有E2E测试还把这组错误首开动作写成预期，所以开发自测PASS不能关闭本Finding。

违反：`CONSENT.ACTIVE`、`LEGAL.COOKIE.ACTIVE`、原子激活条件7。  
位置：`components/sites/tio2-my/consent/malaysia-cookie-settings.tsx:117-123`；`lib/consent/malaysia-consent-copy.ts:11`。  
影响：首次选择界面与批准法律内容不一致，三法律面与Cookie Settings不能作为同一精确版本通过原子激活。

关闭条件：

1. 无有效当前Consent记录时，仅按批准标签和状态显示`Accept analytics · Necessary only · Cookie Policy`；
2. 已有有效选择时按批准的重开动作显示`Save preferences · Accept analytics · Necessary only · Close`；
3. 首开和重开分别有运行测试，且不再把合并后的五控件集合写为统一预期；
4. 保持当前四项默认、只授予Analytics、关闭不保存、撤回清Cookie、焦点返回、GTM-only及三法律页回归；
5. 返回新的implementation/evidence/handoff HEAD、Build、runtime和有效Manifest供Gate 9定向复验。

## 6. 证据与边界

- `docs/architecture/gate9-tio2-my-ga4-active-20260913/evidence-validation.json`
- `docs/architecture/gate9-tio2-my-ga4-active-20260913/preflight.json`
- `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-machine-audit.json`
- `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-runtime-two-rounds.json`
- `docs/architecture/gate9-tio2-my-ga4-active-20260913/independent-browser-observation.json`
- Gate8 Manifest：`D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4\docs\verification\tio2-my-ga4-active-gate8-20260913\gate8_evidence_manifest.json`

本轮没有提交表单、写生产WordPress、修改D16或GTM、发布GTM、merge、deploy、公开发布、DNS/GSC操作或索引。Gate8应只修复F01并回归已通过范围；当前3123 runtime可在收到RETURN通知后释放。

`TIO2-MY-GA4-ACTIVE-G9-01 = RETURN / 1_REQUIRED_FINDING_OPEN`
