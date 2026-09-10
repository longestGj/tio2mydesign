# 3100预发布内链Gate 8返修授权与派发 V1.0

日期：2026-09-10。Dispatch ID：`PRERELEASE-3100-IL-G8-REPAIR-20260910-01`。

## 1. 用户授权与当前结论

- 用户在听取现行闭环后明确回复“开始”，授权总控制作返修包并交给既有Malaysia Gate 8开发任务执行。
- 目标任务：`01My开发2`（用户语境中的`00MY开发2`），thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`，开发空间`D:/16Wordpress_nextjs`。
- 来源审查：`PRERELEASE-3100-IL-RR-20260910-01`，结果`CHANGES_REQUIRED / 2 REQUIRED FINDINGS / RETURN_TO_PROJECT_CONTROL`。
- 本轮允许Gate 8完成最小范围实现修复、测试、生产构建、本地预发布运行和机器证据交回；不重开Gate 1–6，不改变已批准页面事实、正文、URL方向、页面职责或关系语义。

本授权不包含merge到local main/release/main、远端push、远程Preview或Production部署、生产或远程CMS写入、真实表单/邮件、DNS、公开sitemap、索引、Gate 10或正式发布。

## 2. 权威输入

1. 正式运行审查：`D:/23MySec/docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_RUNTIME_REVIEW_V1.0.md`。
2. 机器链接清单：`D:/23MySec/docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_INVENTORY_V1.0.json`。
3. 运行证据：`D:/23MySec/docs/architecture/internal-link-review/prerelease-3100-2026-09-10/PRERELEASE_3100_INTERNAL_LINK_RUNTIME_EVIDENCE_V1.0.json`。
4. Contact当前Manifest：`D:/23MySec/pages/contact/CONTACT-001_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md`；状态`PAGE_GATE9_PASS / INTEGRATION_READY / RELEASE_NOT_READY`；批准route为`/contact/`。
5. 58对象预发布接收：`D:/23MySec/docs/architecture/LOCAL_PRERELEASE_58_EXECUTION_INTAKE_V1.0.md`。
6. Contact预发布启动例外：`D:/23MySec/docs/architecture/SYS404_CONTACT_DEPENDENCY_PRERELEASE_EXCEPTION_V1.0.md`；该例外只允许先测试，不是发布豁免。
7. Gate 8→9机器交接：`D:/23MySec/docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`及Schema `D:/23MySec/docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`。

当前`http://127.0.0.1:3100/`的精确commit、run、Build和CMS身份没有从响应中得到证明。Gate 8开始修改前必须先在D16核对该服务的实际进程、工作区、分支、工作树、Build和数据来源；不得把旧固定候选`98c2c573… / QmeAVz…`或Contact独立候选`1f3fed8… / R4PFr…`未经证明地当成当前3100身份。

## 3. 返修范围

### 3.1 `SCT-G9-F02-CONTACT-TARGET`

当前三个批准入口均为`/contact/ → 308 /contact → 404`：

- `ABOUT-001`两处`Contact Us`；
- `SYS-404`一处`Contact Our Team`。

Gate 8将已经Gate 9通过且`INTEGRATION_READY`的`CONTACT-001`集成到同一更新候选。关闭结果必须证明：

1. 三个原始入口均到达批准的Contact页面；
2. route、最终浏览器URL、H1、Canonical、语言和`site_scope=tio2-my`身份正确；
3. About和SYS-404批准文案、恢复动作及共享消费者没有回归；
4. 不删除、隐藏或改写Contact入口，不改指RFQ，不使用跨scope fallback、空壳页或复制正文规避404。

### 3.2 `ILR3100-F01-CANONICAL-REDIRECT-PARITY`

当前29个登记页面、47个唯一query-aware目标出现尾斜杠href/Canonical与无尾斜杠最终URL相反的`308`，在58个对象中形成1,596个实例。

Gate 8按登记册和批准合同的尾斜杠URL方向统一技术实现。关闭结果必须证明：

1. 内部href、直接HTTP响应、最终浏览器URL、Canonical、hreflang和适用Schema URL使用同一身份；
2. query保留且不污染Canonical identity，fragment仍准确落点；
3. 覆盖机器清单中的29个页面、47个query-aware变体，并回归58个对象的共享Header/Footer消费者；
4. 私有预发布继续遵守既有`noindex`边界；可以修复sitemap生成规则并提供源/构建证据，但不得借本任务公开完整sitemap或启动索引；实际公开sitemap留待获准发布准备复验；
5. 不改变Page ID、已批准route语义、页面正文、语言归属、关系语义或`site_scope=tio2-my`隔离。

具体Next.js配置、route handler、中间件或链接规范化方式属于Gate 8技术选择，但不得以改变批准URL方向关闭Finding。若现有架构无法维持批准方向，停止该部分并返回冲突、影响、可回退方案，由总控协调URL/架构决定。

## 4. Gate 8验证与交回

Gate 8只运行与这两项变化及共享消费者直接相关的检查，并在交回前形成符合当前Schema的`gate8_evidence_manifest.json`。至少返回：

- repository、branch、baseline commit、implementation commit、evidence HEAD及clean状态；
- Build目录、Build ID、CMS/fixture身份、`SITE_ID=tio2-my`和新runtime URL；
- runtime保持状态`GATE9_PASS_OR_RETURN_NOTICE`；
- 每份证据的仓库相对路径、SHA-256、生成命令、环境及证明范围；
- 两个Finding到实现文件、测试、HTTP链、浏览器结果和回滚方法的逐项映射；
- Contact三个实例；29个目标页面、47个query-aware变体；58个共享消费者的定向回归结果；
- query/fragment、Canonical/hreflang/Schema、私有robots/sitemap边界和跨scope负向检查；
- 已知未测项、责任方和关闭时点。

Gate 8开发自检不能关闭Finding，也不能宣布内链专项或页面Gate 9通过。完成后交回总控，由不同身份的内链专项Agent对精确新候选进行定向只读复验。

## 5. 后续定向复验与停止点

内链专项沿用原Review ID和Finding ID，只复验：

- 两项原始Finding；
- Contact三个原始实例及About/SYS-404相邻路径；
- 29个页面、47个query-aware变体；
- 58个对象的共享Header/Footer组装及直接受影响的query、fragment、Canonical、hreflang、Schema和私有索引边界。

同一新候选全部满足时，可记录`RECHECK_SCOPE_STATUS=PASS`、两个Finding `CLOSED`及`INTERNAL_LINK_REVIEW=PASS_FOR_EXACT_CANDIDATE`。该结果供Gate 9复用，但不自动关闭任一页面整体Gate 9，不关闭既有表单接收、设备/AT、Privacy或其他发布依赖，也不授权Gate 10或发布。

## 6. 派发状态

2026-09-10 20:27（Asia/Shanghai），完整返修消息已送达`01My开发2`任务`01a07e6a-546d-7532-aa06-02d2bffd5eed`，目标任务已进入运行状态。发送时本文件SHA-256为`4eb06c16caa7e93e54d06ad60727cacc595356c5dcff9ab2cb3c23a3f1b26db7`；该hash绑定派发时版本，本节为送达后状态追加。

当前停止点：`USER_AUTHORIZED / DELIVERED_TO_GATE8 / DEVELOPMENT_IN_PROGRESS`。

## 7. Gate 8交回与独立复验结果

Gate 8已交回implementation `c18abbc5f7216508e16163c0dfe25b0e0ecc64a6`、evidence HEAD `de8128e57a34877fc90366c8a61af084dd22b64c`、Build `ATKoXHh9g15QA-Y6c8Y2H`及runtime `http://127.0.0.1:4511`。总控重算Manifest相关哈希并重跑官方validator与两轮preflight，结果均PASS。

不同身份内链Reviewer完成定向复验：29/29路径、47/47 query-aware目标、58/58共享消费者、3/3 Contact原入口和123/123 fragment通过；`SCT-G9-F02-CONTACT-TARGET`及`ILR3100-F01-CANONICAL-REDIRECT-PARITY`均`CLOSED_FOR_EXACT_CANDIDATE`。正式结论见[返修与复验闭环V1.0](PRERELEASE_3100_INTERNAL_LINK_REPAIR_AND_RECHECK_CLOSURE_V1.0.md)。

更新后停止点：`REPAIR_COMPLETE / TARGETED_RECHECK_PASS / READY_FOR_GATE9_EVIDENCE_CONSUMPTION`。页面整体Gate 9、Gate 10、部署及发布仍未因本专项关闭。
