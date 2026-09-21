# Applications 五个子页面 Gate 9 定向复验 Return 1 V1.0

日期：2026-09-21  
复验对象：`APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER`  
前轮报告：`APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md`  
复验范围：`APP5-D32-G9-F01`、`APP5-D32-G9-F02`、`APP5-G9-05`、`APP5-G9-11`、`APP5-G9-12`及差异保护抽查  

## 1. 四层状态

| 状态层 | Return 1结论 |
|---|---|
| `RECHECK_SCOPE_STATUS` | `PASS` |
| `PAGE_GATE9_STATUS` | `PASS_FOR_BOUND_CANDIDATE` |
| `INTEGRATION_STATUS` | `INTEGRATION_READY / NOT_MERGED` |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` |

Gate 8定向返修已关闭前轮两个Finding。五个Applications子页面对下列精确候选通过Gate 9：

- baseline：`0c117ee0941a3b307f761ff0db5ea67fc98b5a07`
- implementation：`ede0e32c2c73477589447344921c34370307206a`
- evidence head：`57a333ed31d6cded722533ab9ff2525742c6f939`
- implementation tree：`7d1280ef53cf5f3f53fb6abd6148b8552edd0cd9`
- evidence-head tree：`e45b4f9810c175a74b799f817a3b5203263222c1`
- bound artifact：`D:/32NextJS/.worktrees/applications-child-5-gate8/out`，93个文件
- runtime：`http://127.0.0.1:8342`

本结论表示候选符合进入D32正常集成流程的资格，不表示已经合入`develop`，也不授权合并、push、部署、发布、DNS或Search Console。

## 2. Finding关闭

### `APP5-D32-G9-F01` — `CLOSED`

Gate 8已提供`gate8-evidence-manifest-v1.1`。独立复验结果：

- Manifest SHA-256：`b024118ed931b71fc03db93d6581dfaa1495665cdf8dbc10aa80984d0f27866c`
- Manifest validator：`PASS`
- Git提交链、evidence blob hash、receipt引用、implementation binding、committed build binding：全部`PASS`
- 完整制品清单：93/93文件hash通过，无重复、遗漏或越界
- `gate9_preflight.py --rounds 2`：10/10请求成功，0项artifact mismatch，五页响应均与Manifest指定HTML字节一致
- Gate 8记录：typecheck通过；静态build通过；Node合同9/9；Playwright 158通过、1个有意跳过；Cookie定向套件12/12通过

`APP5-G9-11`与`APP5-G9-12`由`NOT_VERIFIED/FAIL`更新为`PASS`。

### `APP5-D32-G9-F02` — `CLOSED`

实现差异仅涉及共享Cookie组件和对应测试，共41行新增，无其他页面实现变更。内置浏览器390×900复验：

- 弹窗打开后`Close`获得焦点；
- 从`Close`按`Shift+Tab`，焦点循环到`Read Cookie Policy`且保持在dialog内；
- 从`Read Cookie Policy`按`Tab`，焦点循环到`Close`且保持在dialog内；
- `Escape`关闭弹窗并把焦点返回`Cookie Settings`触发器；
- 控制台无warning/error。

`APP5-G9-05`由`FAIL`更新为`PASS`。

## 3. 差异保护抽查

返修候选重新执行前轮独立静态/HTTP审计：165项页面检查全部通过，共享检查通过。五页正文、模块数、Grade集合/顺序、36条技术来源、Products/RFQ/Plastics↔Masterbatch链接、Applications Hub五个子页动作、SEO/Schema、index/follow、robots、sitemap和公开输出清洁度均未回退。

实现commit相对前轮候选只修改：

1. `components/sites/tio2-my/consent/malaysia-cookie-settings.tsx`
2. `tests/static-verification.spec.ts`

`git diff --check`通过。Gate 9开始复验时工作树位于evidence head且为`CLEAN`；随后Gate 8新增的`6b5aa53b8a8c9fc974dcdb5500ae52fff73ff701`只提交Manifest、validation和preflight说明文件，没有改变implementation或已绑定的93项制品，故接受身份仍为上述implementation/evidence-head组合。

## 4. 最终接受条件

| ID | 最终结果 |
|---|---|
| `APP5-G9-01` | `PASS` |
| `APP5-G9-02` | `PASS` |
| `APP5-G9-03` | `PASS` |
| `APP5-G9-04` | `PASS` |
| `APP5-G9-05` | `PASS` |
| `APP5-G9-06` | `PASS` |
| `APP5-G9-07` | `PASS` |
| `APP5-G9-08` | `PASS` |
| `APP5-G9-09` | `PASS` |
| `APP5-G9-10` | `PASS` |
| `APP5-G9-11` | `PASS` |
| `APP5-G9-12` | `PASS` |

## 5. 用户豁免和剩余责任

真实实体设备、人工辅助技术和原生浏览器200%缩放继续按用户决定记录为`USER_EXCEPTED / NOT_TESTED / NON_BLOCKING`，不影响本次通过，也不声称这些环境已经测试。

页面级Finding为0。剩余事项属于后续责任：

- `APP5-INTEGRATION-PROMOTION`：总控决定并执行获授权的D32集成及合入后验证。
- `APP5-RELEASE-AUTHORIZATION`：另行授权后才可部署、发布并执行生产读回。
- Google真实收录与Search Console逐URL跟踪：发布后SEO/发布责任，不是本地Gate 9结果。

Gate 8可在收到本轮通过/释放通知后停止并释放`http://127.0.0.1:8342`返修runtime。本通知不允许其自行合并或发布。

## 6. 证据

- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/gate8_evidence_manifest.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/manifest-validation.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/preflight.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/static-http-audit.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/browser-targeted-recheck.json`
- `pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_RETURN1_20260921/gate9-targeted-recheck-summary.json`

本轮应主动通知原Gate 8任务`03开发`：定向复验通过、两个Finding关闭、Gate 8可停止返修并释放runtime；同时向总控返回精确候选和`INTEGRATION_READY / NOT_MERGED`状态。
