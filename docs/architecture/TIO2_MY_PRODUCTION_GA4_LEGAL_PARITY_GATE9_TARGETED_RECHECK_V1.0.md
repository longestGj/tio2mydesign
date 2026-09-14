# TiO2 Malaysia production GA4 legal parity Gate 9 targeted recheck V1.0

日期：2026-09-14

Review ID：`TIO2-MY-PROD-GA4-F01-G9-RECHECK-01`

Finding：`TIO2-MY-PROD-GA4-F01`

## 1. 判定

| 层级 | 状态 |
|---|---|
| 定向复验范围 | `PASS / THREE_LEGAL_PAGE_REMEDIATION_ACCEPTED` |
| 页面 Gate 9 | `PASS_FOR_EXACT_THREE_PAGE_CANDIDATE` |
| Integration | `NOT_READY / DEVELOP_CMS_57_PAGE_COMBINATION_43_OF_57` |
| Release | `NOT_AUTHORIZED / PRODUCTION_RECHECK_REQUIRED_AFTER_PUBLICATION` |

`TIO2-MY-PROD-GA4-F01`在精确候选中已修复，状态为`RESOLVED_IN_ACCEPTED_CANDIDATE`；当前公开生产版本仍为`OPEN_IN_PRODUCTION`，只有经独立授权发布三页内容并完成生产只读复验后才能关闭生产Finding。

## 2. 精确候选

| 字段 | 值 |
|---|---|
| Repository/worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-prod-ga4-legal-parity` |
| Branch | `codex/tio2-my-prod-ga4-legal-parity` |
| Baseline | `1ab1a9a02958394135b655d912463dd12d69e1cf` |
| Implementation | `24065cdeffef6a887b290f542be74d78be595b71` |
| Evidence-only commit | `f0c3bc9891822d1beb4d21d77211c3fd297e6ec2` |
| Receipt commit | `1ae56f2e93f098c66be61f02693c2fb380410827` |
| Handoff / observed HEAD | `409053e008ccc767b01615bad73e6e38902b68b7` |
| Build ID | `aoZsmmoI852RtB8oVR-vb` |
| Runtime / CMS | `http://127.0.0.1:3143` / `http://127.0.0.1:8180/graphql` |
| Package content SHA-256 | `13ac8f9984d8a4cadb8c4e34f0cc07c2d7519d88ee3effd0583d23afeeb5a3a8` |

独立读回确认工作树洁净，`baseline → implementation → evidence-only → receipt → handoff`祖先链完整。Implementation相对baseline只增加三页内容包生成器及导入/绑定测试；GA4 loader、Consent、RFQ事件和Thank-you事件实现的Git blob在baseline与implementation之间完全相同，因此这些未改行为可继承上一轮已接受的GA4证据，并由本轮定向回归补验。

## 3. 内容、CMS与页面结果

- 内容包为`d16-content-package-v1`、`site_scope=tio2-my`，仅包含`LEGAL-COOKIE-EN`、`LEGAL-PRIV-EN`、`LEGAL-PRIV-MS`三条记录；三条记录均为`verified_google_analytics_active`，有效日期为2026-09-13。
- 三条记录的Markdown、SEO、日期及源文件SHA与D23批准交付一致；本地只读CMS公开投影与内容包一致。
- 三页在390/768/1440三个宽度均返回HTTP 200，active GA4/GTM文案、永久广告拒绝语义、Title、Description、Canonical、Robots、H1及JSON-LD符合合同，无inactive措辞、占位或横向溢出。
- Cookie inventory精确列出`Local Storage: tio2_my_consent_v1`、`_ga`及`_ga_QDHLMRH2WB`，类型、用途、期限、分类和同意条件与批准合同一致。
- Privacy EN/BM hreflang为`en / ms-MY / x-default`互惠组合。

## 4. 同意与GA4定向复验

内置浏览器在独立`127.0.0.1`来源验证：首次打开仅提供`Accept analytics / Necessary only / Cookie Policy`；保存后重开提供`Save preferences / Accept analytics / Necessary only / Close`。接受Analytics后复开显示已勾选及`Analytics allowed`；随后选择`Necessary only`可撤回，复开显示未勾选及`Necessary only`。焦点分别落在首个有效动作，关闭后回到Footer的`Cookie Settings`，控制台无warning/error。

Fresh回归结果：

- Python内容包及导入绑定：`28 passed`。
- GA4/Consent Playwright：`2 passed`，覆盖四项默认denied先于GTM、无direct gtag、Necessary/Accept持久化及撤回时仅清理Malaysia GA Cookie。
- 适用法律页/CMP Playwright：`11 passed`。
- 法律/GA4/Consent/approved success event单元回归：`7 files / 84 passed`。

Baseline与implementation的GA4/Consent/事件源文件及对应关键测试blob相同；本轮2项GA4/Consent E2E与84项单元回归通过，故单一page_view、三个批准成功事件及无PII参数结论可在本候选中继承，不要求重复真实表单发送。

## 5. 证据完整性与工具限制

- Gate8 Manifest登记的14项证据全部存在、工作树SHA-256匹配、在Manifest指定的receipt commit受Git追踪；receipt引用集合与Manifest一致。
- Manifest、receipt、内容包三个交接文件的SHA-256分别匹配`5b23fc44b0b543256bc9266d7227091d05b2b5b4a374365ffd182293203f0e13`、`0d7c22371b7b6b3ed87ae5476a3cadca6e83ad5d76446dd26a4e9ae2dc14586d`、`c70e5951898992ba5489d329309a05b113374a140bd050372db353441968124c`；内容包规范化记录重新计算得到精确content SHA-256。
- 标准validator如实为`EVIDENCE_INCOMPLETE`：102 PASS / 1 FAIL。唯一失败是`git_head`要求当前HEAD等于Manifest字段`evidence_head=1ae56f2…`，而handoff commit为`409053e…`。独立检查确认两者祖先关系、文件追踪及全部哈希，没有将preflight重标为PASS。
- Receipt正文把`f0c3bc9…`称为evidence head，Manifest字段把其后的receipt commit `1ae56f2…`称为evidence head；本记录保留两阶段名称并绑定完整提交链。

## 6. 未关闭项

1. `DEVELOP_CMS_57_PAGE_COMBINATION`：Gate8全组合尝试为43/57；14项失败属于三页包外的editorial contract记录。Gate 9额外抽查也观察到一个包外conversion SEO测试文件3项失败。三页复验通过不能升级为整站Integration ready。
2. `LEGAL_PRIV_MS_METADATA_ORACLE_ALIGNMENT`：通用Legal E2E仍有3项BM Meta Description旧oracle失败；当前生产文本、批准合同、内容包和CMS投影一致，因此这是独立的oracle对齐事项，不是本Finding的返修失败，也未被重标为通过。
3. `CONTENT_PUBLICATION_AND_PRODUCTION_RECHECK`：生产仍运行旧公开法律文案。需在另行授权发布后，重新验证三页公开内容、同意状态、网络行为及生产release identity。

用户已明确取消实体设备/辅助技术证据要求；该项不属于本次验收条件。

## 7. 处置

- Gate 8对`TIO2-MY-PROD-GA4-F01`的三页返修可停止，并可释放3143运行时。
- 返修候选保持冻结，可交D16 Integration owner处理57页组合缺口；Gate 8不得把包外14项改成三页返修。
- Gate 10、merge、push、deploy、生产CMS写入、公开发布、DNS、GSC及索引均未获本记录授权。

`TIO2-MY-PROD-GA4-F01-G9-RECHECK-01 = PASS_FOR_EXACT_CANDIDATE / PRODUCTION_FINDING_REMAINS_OPEN`
