# PRODUCT-000 D32 Gate 9 运行时与合同独立验收 V0.1

日期：2026-09-20  
审查者：`/root/product000_gate9_runtime_final`  
Review ID：`PRODUCT-000-D32-G9-RUNTIME-01`  
审查类型：首次独立只读 Gate 9 运行时/合同验收  
结论：`RETURN_TO_GATE8`

## 1. 四层状态

| 层级 | 状态 | 说明 |
|---|---|---|
| `RECHECK_SCOPE_STATUS` | `RETURN` | 1项实现必修、1项机器交接证据必修未关闭。 |
| `PAGE_GATE9_STATUS` | `NOT_PASS` | 精确候选不能以当前公开输出和Evidence Manifest通过Gate 9。 |
| `INTEGRATION_STATUS` | `NOT_READY` | 14个Grade、2个Process、3个Support目标及RFQ接收端仍由外部owner负责；当前20个目标均为404。 |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` | Gate 10、部署、索引和发布均未授权。 |

本报告不修改D32代码、数据、运行时、分支或Evidence Manifest。只在D23保存报告及独立证据。

## 2. 被审精确对象

| 字段 | 值 |
|---|---|
| Page | `PRODUCT-000`；`/products/`；EN；`site_scope=tio2-my` |
| Handoff | `PRODUCT-D32-G8-01` |
| Gate 8 task | `01a0bd3a-a7ba-7632-bda0-fad444f654db` |
| Repository | `C:\Users\longe\.codex\worktrees\product-000-products\32Wordpress_new` |
| Branch | `codex/product-000-products` |
| Baseline | `f520678e723fe040c2e3b2cb5f9bd219e33d8fb9` |
| Implementation commit | `7d4875a778401d0ecd118f5935c6392571a6d13c` |
| Evidence HEAD | `5c339caad74e8c00658c9497ee428c4f029adbb7` |
| Build ID | `wp-fb45d8677fec877ae499976fdfa96491c03bf9c9c062d35c98f70b10eb7cea9b` |
| Runtime | `http://127.0.0.1:8232/products/`；local WordPress preview |
| Manifest | `C:\Users\longe\.codex\worktrees\product-000-products\32Wordpress_new\.runtime\handoff\products\gate8_evidence_manifest.json` |
| Receipt | `C:\Users\longe\.codex\worktrees\product-000-products\32Wordpress_new\docs\handoffs\PRODUCT-000-gate8.md` |

独立性：审查者不是该候选实现或修复作者。开发方36项自检作为支持证据读取，不能替代本轮独立HTTP、浏览器、源码和合同核验。

## 3. 权威输入与方法

本轮实际读取根`AGENTS.md`、`PROJECT_CONTEXT.md`、当前PRODUCT-000 Manifest、D32 Gate 6交付包V0.1、Gate8→Gate9机器交接合同V1.0、Gate 9 Agent V0.5、运行实现核验Skill V0.5、Gate 9方法配合V0.2、D32仓库`AGENTS.md`、Gate 8 Manifest/回执及相关原始证据。

先执行合同规定的两个预检，再进行只读HTTP、实际浏览器DOM/交互、JSON-LD解析、源码检查和接受条件集合比对。未执行真实RFQ提交、CMS写入、数据夹具变更、测试重跑、合并或部署。

## 4. 机器预检

| 检查 | 结果 | 证据 |
|---|---|---|
| Manifest validator | `PASS` | `product000-gate9-runtime-evidence-v0.1/manifest-validation.json`；SHA-256 `F8A78E4E563B3DCB98FAFFFABA908D73953964FC0D7FB6E708FD0D4A3FA60096` |
| Runtime preflight | `PASS` | 2轮、4请求、4成功；`product000-gate9-runtime-evidence-v0.1/runtime-preflight.json`；SHA-256 `EC64C35673B77DCD40152121734AF9E698F4967E0830969D3BDA0EED40CCACD4` |
| Git identity | `PASS` | branch和HEAD准确；implementation是evidence HEAD祖先；工作树clean |
| Build/runtime binding | `PASS` | 首页及Products均返回交付Build marker、内容hash与`X-Site-Scope: tio2-my` |

预检脚本只校验Manifest自身声明是否自洽，不会把Gate 6交付包的完整接受条件集合与Manifest声明集合做差集。因此预检`PASS`不关闭Finding F02。

## 5. 独立实际观察

### 5.1 正常页面、过渡规则和动作

- `/products/`返回200、单一H1和模块顺序`breadcrumb → hero → selector → process → directory → evaluation → faq → final-rfq`。
- 14个Grade身份和批准顺序全部保留；目录动作为0，未就绪Grade没有链接或空壳动作。
- 当前2个Process目标未就绪，Process卡片为0；标题、引言和`CR-901 · Vapor-phase oxidation`分类仍保留，CR-901动作省略。
- 3个Support目标未就绪，Support模块整体省略，不留空壳。
- Coatings默认显示8个Grade、0个详情链接；实际选择Paper后显示`M-350`、`M-2377`两项且仍为0链接；Not Sure指向同页`#all-grades`。
- 页面上7处RFQ入口均为干净`/request-a-quote/`，没有查询参数或Contact替代；接收页当前404，未宣称已完成接收。

### 5.2 目标路由、scope和失败关闭

独立逐一请求Manifest依赖清单中的20个目标：14个Grade、2个Process、3个Support及RFQ。20/20均返回预期404并带`X-Site-Scope: tio2-my`。运行源码的resolver同时要求目标为发布状态、精确Page ID以及`_tio2_site_scope=tio2-my`；缺失、错误scope或错误身份返回null。开发方受控状态证据还覆盖zero、wrong-scope、1/3/14 Grade、Process 1/2、Support 1/2/3、full-registry及恢复zero；本轮读取原件但未改数据重跑。

### 5.3 SEO、Schema和sitemap

- `/products/`及`?grade=M-350`均输出canonical `https://tio2products.com/products/`和`noindex, nofollow`；查询参数未形成独立索引面。
- 首页canonical/OG URL为`https://tio2products.com/`；Products canonical/OG/JSON-LD使用`https://tio2products.com/products/`；JSON-LD没有本地地址或旧域名。
- 当前ItemList为14项且顺序与可见目录一致；14个Product均无未就绪`url`或产品`@id`，没有通过`@id`绕过过渡规则。
- 14条可见目录摘要与14条Product `description`逐字符一致。
- `/wp-sitemap.xml`在当前local/noindex组合返回404，因此Products未进入当前候选sitemap；正式索引仍需Gate 10后另验。

### 5.4 内容安全与Buyer Clean扫描

公开HTML未发现Windows路径、`.codex`、Gate/approval、`site_scope`字段、凭据模式或旧域名。所有CMS文本按当前源码经过结构校验并在HTML或JSON输出处转义。存在的内部Page ID和route key泄漏单列为F01，不能并入本段通过项。

## 6. 接受条件覆盖

| 接受条件 | 本轮实际判断 | 结果 | 剩余边界 |
|---|---|---|---|
| `PRODUCT-G6-B02` | 7处RFQ均为干净固定路径，无查询预填；目标404 | `HUB_PASS / EXTERNAL_OPEN` | RFQ页、表单、失败/成功和真实receiver由外部owner补齐，阻断integration/release |
| `PRODUCT-G6-B03` | 14行保留；20个目标全部按未就绪状态失败关闭；条件模块无空壳 | `HUB_PASS / EXTERNAL_OPEN` | 目标页就绪后须核对Page ID、canonical、响应和scope |
| `PRODUCT-G6-TDS-I02` | 14条可见摘要与Schema description逐字符一致 | `PASS` | 无 |
| `PRODUCT-G7-B05` | noindex,nofollow；sitemap 404；查询canonical收敛 | `PASS_FOR_LOCAL_CANDIDATE` | 索引和生产sitemap仅在Gate 10授权后重验 |
| `PRODUCT-G7-B06` | runtime scope header、resolver的精确scope/identity限制及wrong-scope证据成立 | `PASS_FOR_HUB_SCOPE` | 外部目标和集成缓存/接收仍开放 |
| `PRODUCT-G7-B07` | 本报告仅核对浏览器DOM、选择器与运行时合同；完整视觉/a11y由并行独立视觉验收负责 | `NOT_VERIFIED_IN_THIS_REPORT` | 不能由本报告单独关闭 |
| `PRODUCT-D32-AC-CONTENT` | 模块、14目录、6个选择集、5步骤、5 FAQ及当前动作结构可观察；但公开payload泄漏内部ID | `FAIL` | F01 |
| `PRODUCT-D32-AC-SEO` | 精确title/description/canonical/language、单H1、CollectionPage/BreadcrumbList/ItemList/FAQ结构成立 | `PASS` | 正式索引另验 |
| `PRODUCT-D32-AC-SCHEMA-PREVIEW` | 当前零就绪态14身份/顺序、0 URL/0产品@id；源码和受控状态证据覆盖部分/全就绪 | `PASS_FOR_IMPLEMENTATION` | 发布前14目标完整URL另验 |
| `PRODUCT-D32-AC-MIGRATION` | 读取迁移、编辑冲突、安全校验、回滚/恢复及首页不变证据；源码符合不覆盖已有编辑的迁移路径 | `PASS_FROM_SOURCE_AND_DELIVERED_LOCAL_SIMULATION` | 本轮只读，不独立修改CMS重跑 |
| `PRODUCT-D32-AC-DOMAIN` | 首页及Products正式canonical/OG/Schema同源，无旧域名或Schema本地地址 | `PASS_FOR_LOCAL_CANDIDATE` | 本地WordPress资产/发现链接使用本地preview origin，不作为正式canonical/Schema |
| `PRODUCT-D32-AC-CHROME-REGRESSION` | 本报告只核对共享源码归属与Home/Products运行身份 | `NOT_VERIFIED_IN_THIS_REPORT` | 完整共享视觉/交互回归由并行独立视觉验收负责 |

## 7. Findings

### PRODUCT-000-D32-G9-RUNTIME-F01 — 公开HTML和脚本状态泄漏内部Page ID/route key

- 分类：`IMPLEMENTATION_FAILURE`
- 严重度：`BLOCKING`
- 关联：`PRODUCT-D32-AC-CONTENT`、Gate 6包§3 RFQ归因边界、§5公开payload边界
- 预期：内部Page ID、route key和治理信息不得进入公开URL、HTML、DOM或脚本状态。
- 实见：实际`/products/` HTML包含1个`PRODUCT-000`和30个`GRADE-*`引用。`<main data-page-id="PRODUCT-000">`直接公开页面ID；`products-selector-data`把`GRADE-M350`等内部route key序列化到公开JSON。源码还会在目标就绪后通过多个`data-route-key`属性继续公开这些内部键。
- 源位置：`wp-content/themes/tio2-malaysia/page-products.php:30-35,49,87,105,109,121,135`；`wp-content/themes/tio2-malaysia/assets/products.js:37`。
- 影响：违反已批准Buyer Clean/公开payload边界；把内部治理身份暴露为前端契约，并使未来ready状态持续泄漏。
- Gate 8关闭条件：从公开DOM/JSON移除`data-page-id`、`routeKey`及`data-route-key`内部值；浏览器选择器仅消费公开所需的Grade名称和已验证URL。对zero/partial/full readiness重新证明公开`PRODUCT-000|GRADE-*`计数为0，同时维持当前选择、链接门禁、Schema和scope行为。

### PRODUCT-000-D32-G9-RUNTIME-F02 — Evidence Manifest漏列六个当前D32接受条件

- 分类：`EVIDENCE_INCOMPLETE`
- 严重度：`BLOCKING`
- 关联：Gate8→Gate9机器交接合同V1.0 §2；D32 Gate 6包V0.1 §4–5
- 预期：Manifest绑定本页完整接受条件ID，并让每份证据的`proves`和接受条件映射覆盖当前Gate 6交付包。
- 实见：Manifest `pages[].acceptance_condition_ids`及`acceptance-mapping.json`只列6个旧稳定ID，遗漏全部6个本轮新增ID：
  - `PRODUCT-D32-AC-CONTENT`
  - `PRODUCT-D32-AC-SEO`
  - `PRODUCT-D32-AC-SCHEMA-PREVIEW`
  - `PRODUCT-D32-AC-MIGRATION`
  - `PRODUCT-D32-AC-DOMAIN`
  - `PRODUCT-D32-AC-CHROME-REGRESSION`
- 影响：Manifest对自身格式和hash可通过validator，但不能机器证明当前Gate 6合同已被完整交回；当前Evidence HEAD的验收映射不完整。
- Gate 8关闭条件：在F01修复形成的新候选中，将上述六个ID加入页面接受条件集合；按真实证明范围更新`acceptance-mapping.json`和各证据`proves`，重建回执/Manifest、Evidence HEAD和准确hash，保持工作树clean，再运行validator和两轮preflight。

## 8. 非Finding开放项

以下是已知外部依赖，不是本轮Hub实现缺陷：

- `PRODUCT-G6-B02-EXTERNAL`：RFQ目标/表单/receiver尚未就绪。
- `PRODUCT-G6-B03-EXTERNAL`：14个Grade、2个Process、APP-000、DOC-000、MARKET-000目标尚未就绪。
- 完整视觉、共享Chrome、键盘和无障碍结论由并行独立视觉验收合并；本报告不替代它。
- `PRODUCT-GATE10`：部署、公开索引及发布授权未给出。

真实设备、读屏软件和浏览器原生200%不属于本轮Gate 6合同新增门槛；本报告没有把未执行项写成实测。

## 9. Gate 8返修通知字段

```json
{
  "gate8_return_notice": {
    "notice_type": "PAGE_GATE9_RETURN",
    "recheck_scope_status": "RETURN",
    "page_gate9_status": "NOT_PASS",
    "integration_status": "NOT_READY",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "7d4875a778401d0ecd118f5935c6392571a6d13c",
    "evidence_head": "5c339caad74e8c00658c9497ee428c4f029adbb7",
    "build_id": "wp-fb45d8677fec877ae499976fdfa96491c03bf9c9c062d35c98f70b10eb7cea9b",
    "open_findings": [
      "PRODUCT-000-D32-G9-RUNTIME-F01",
      "PRODUCT-000-D32-G9-RUNTIME-F02"
    ],
    "report_path": "D:\\23MySec\\pages\\products\\05_review\\PRODUCT-000_D32_GATE9_RUNTIME_INDEPENDENT_REVIEW_V0.1.md",
    "gate8_should_stop_return_work": false
  }
}
```

## 10. 证据索引与局限

| ID | 类型 | 路径/对象 | 证明范围 |
|---|---|---|---|
| `G9R-E01` | `IDENTITY` | `product000-gate9-runtime-evidence-v0.1/manifest-validation.json` | Manifest自洽、Git/Build/证据hash/回执引用 |
| `G9R-E02` | `ACTUAL_RUNTIME` | `product000-gate9-runtime-evidence-v0.1/runtime-preflight.json` | 两轮连续runtime、marker、scope和状态 |
| `G9R-E03` | `ACTUAL_RUNTIME / SOURCE_INSPECTION` | `product000-gate9-runtime-evidence-v0.1/runtime-contract-observations.json` | HTTP、DOM、selector、Schema、依赖路由、F01/F02摘要 |
| `G9R-E04` | `SOURCE_INSPECTION` | D32 `page-products.php`、`products.js`、`products.php`、`seo.php`、`validation.php`、`admin.php` | 公开ID泄漏、resolver/scope、SEO/Schema、CMS校验与迁移边界 |
| `G9R-E05` | `LOCAL_SIMULATION / READ_ORIGINAL` | D32 `docs/verification/products/readiness-matrix.json`、`migration-results.json`、`editor-results.json`、`test-results.json` | 条件状态、迁移/编辑负例、36/36开发自检；不是本轮独立修改环境重跑 |

本轮未作真实RFQ提交、外部目标成功路径、生产sitemap/索引、生产缓存、真实设备或CMS写入。对这些对象不宣称通过。当前可访问候选保持不变，等待Gate 8按F01/F02返修并交回新的精确身份。
