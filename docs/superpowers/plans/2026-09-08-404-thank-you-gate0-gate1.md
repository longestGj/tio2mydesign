# SYS-404 与 CONV-THANK Gate 0–1 执行计划

**Goal:** 在不进入 Gate 2 或开发实现的前提下，把全站 404 页面和共享 Thank You 页面正式登记为第 58、59 个页面，并分别完成可供项目总控独立审查和用户确认的 Gate 1 成果。

**Architecture:** 先由项目总控完成一次共享 Gate 0 架构登记，建立 Page ID、URL、页面职责、索引策略、跨表单成功语义和唯一当前 Manifest；随后严格串行执行 `SYS-404`、`CONV-THANK` 两个 Gate 1。每页均由 Gate 1 Execution Agent 形成页面意图、证据、声明边界与完整 Brief，再由不同审查身份执行独立项目总控审查。搜索意图 Skill 对这两类系统/工具页不强行运行；Agent 必须在成果中记录 `NOT_APPLICABLE` 的理由，不能制造商业关键词或伪造 SERP 需求。

**Tech Stack:** Markdown、CSV、PowerShell 只读验证、Git 精确文件提交；不使用付费 Superdesign，不修改网站代码，不操作 `D:\16Wordpress_nextjs`。

**Spec:** [已批准设计 V0.1](../specs/2026-09-08-404-thank-you-pages-design-v0.1.md)，用户于 2026-09-08 确认按该规格执行 Gate 0，并分别启动两个页面 Gate 1。

## 约束与停止条件

- 当前工作树含用户及其他任务的并行改动。每次写入共享文件前重新读取内容和哈希，只做定向补丁；若目标段在读取后发生变化，停止该写入并重新合并，不覆盖其他任务。
- 不改写既有 RFQ、Request Documents、Request a Sample 的历史批准成果。共享 Thank You 通过新的跨页成功目的地合同和各页面“当前 Manifest 的继承指针”接入。
- 本轮不设计 Gate 2 内容架构、不制作视觉稿、不实现路由、会话标记、表单重定向、分析事件或 HTTP 404 代码。
- `SYS-404` Gate 1 独立审查通过后先交用户确认；确认关闭后才执行 `CONV-THANK` Gate 1。第二页同样在 Gate 1 用户确认处停止。
- 任何文件中的“批准设计”只说明本次页面增加及已确认文案/行为；不得冒充 Gate 1 已批准、开发已授权、页面已上线或发布已授权。

## Task 1：共享 Gate 0 准入与变更登记

**Files:**

- Create: `docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md`
- Modify: `docs/architecture/PAGE_REGISTRY_V0.2.md`
- Modify: `research/keyword/11_page_keyword_master.csv`
- Modify: `PROJECT_CONTEXT.md`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`
- Create: `pages/system/404/00_intake/SYS-404_GATE0_INTAKE_V0.1.md`
- Create: `pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Create: `pages/conversion/thank-you/00_intake/CONV-THANK_GATE0_INTAKE_V0.1.md`
- Create: `pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`

### Step 1：建立写入前快照

对六个共享入口文件记录 SHA-256、字节数和目标段落；确认当前登记页数仍为 57、`SYS-404` 与 `CONV-THANK` 尚未存在、两个 URL 不与已登记页面冲突。

Run:

```powershell
$targets = @(
  'docs/architecture/PAGE_REGISTRY_V0.2.md',
  'research/keyword/11_page_keyword_master.csv',
  'PROJECT_CONTEXT.md',
  '00_PROJECT_STATUS.md',
  '01_PROJECT_INDEX.md'
)
$targets | ForEach-Object { Get-FileHash -Algorithm SHA256 -LiteralPath $_ }
rg -n 'SYS-404|CONV-THANK|/thank-you/|57|59' $targets
```

Expected: 两个 Page ID 和 `/thank-you/` 均无现行登记；若已有并行新增，先解析冲突，不能重复插入。

### Step 2：写入架构决定记录

记录已批准的原因、影响、风险、回退与同步范围，并逐字保存设计规格中的：

- `SYS-404`：运行时全站 fallback、无独立可索引 `/404/`、`NO_PRIMARY_KEYWORD`、`noindex, follow`、不进 sitemap。
- `CONV-THANK`：`/thank-you/`、共享三个成功流、`NO_PRIMARY_KEYWORD`、`noindex, nofollow`、不进 sitemap。
- 三个成功变体与 direct/invalid 变体的精确 H1、正文和 CTA。
- 成功确认只来自 receiver positive acknowledgement + 短时浏览器会话标记；URL 与会话标记不得包含 PII。
- 共享 Header/Footer/Logo/fixed RFQ 由 Global Chrome owner 提供，页面不得分叉实现。

### Step 3：登记页面身份和关键词归属

在 Page Registry 增加两个唯一 Page ID；在关键词主表增加两行并明确 `NO_PRIMARY_KEYWORD`，避免与产品、请求页或帮助类商业意图竞争。将项目页面总数由 57 更新为 59；Index 与 Status 只登记 Gate 0 已完成、Gate 1 待执行，不写 Gate 1 PASS。

### Step 4：创建初始当前 Manifest

两个 Manifest 均记录：当前批准输入、Gate 0 状态、Gate 1 未完成、当前 Design Spec、页面路径、开放项和下一允许动作。Manifest 必须明确设计批准不等于 Gate 1 关闭。

### Step 5：验证 Gate 0

Run:

```powershell
rg -n 'SYS-404|CONV-THANK|/thank-you/|NO_PRIMARY_KEYWORD' `
  docs/architecture/PAGE_REGISTRY_V0.2.md `
  research/keyword/11_page_keyword_master.csv `
  PROJECT_CONTEXT.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md `
  docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md `
  pages/system/404 pages/conversion/thank-you

$ids = Select-String -Path 'docs/architecture/PAGE_REGISTRY_V0.2.md' -Pattern 'SYS-404|CONV-THANK'
if ($ids.Count -ne 2) { throw "Expected exactly two new registry rows; found $($ids.Count)" }

$files = @(
  'docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md',
  'pages/system/404/00_intake/SYS-404_GATE0_INTAKE_V0.1.md',
  'pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md',
  'pages/conversion/thank-you/00_intake/CONV-THANK_GATE0_INTAKE_V0.1.md',
  'pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md'
)
foreach ($file in $files) {
  if (Select-String -LiteralPath $file -Pattern '<<<<<<<|=======|>>>>>>>') { throw "Conflict marker: $file" }
  if (Select-String -LiteralPath $file -Pattern '[ \t]+$') { throw "Trailing whitespace: $file" }
}
```

Expected: 两页各一条登记、总数 59、URL/关键词无冲突、0 conflict marker、0 trailing whitespace。

### Step 6：精确提交 Gate 0

只暂存上述 Task 1 文件，先用 `git diff --cached --name-only` 核对清单，再提交：

```powershell
git commit -m "docs: register 404 and thank-you pages"
```

## Task 2：SYS-404 Gate 1 执行

**Files:**

- Create: `docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md`
- Create: `pages/system/404/01_research/SYS-404_GATE1_RESEARCH_REPORT_V0.1.md`
- Create: `pages/system/404/01_research/SYS-404_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv`
- Create: `pages/system/404/05_review/SYS-404_GATE1_EXECUTION_SUBMISSION_V0.1.md`
- Modify: `pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`

### Step 1：Gate 1 Agent 准入读取

执行身份完整读取当前 Gate workflow、Gate 1–4 标准、Gate 1 Execution Agent、系统页适用的 Registry/关键词行、Gate 0 决定、Design Spec、Global Chrome 与共享法律区合同。记录实际读取清单和版本，不以计划摘要代替原文。

### Step 2：先写验收清单，再研究

在执行提交中先列出 Gate 1 必须回答的问题：

- 谁在什么情境进入 404，页面的唯一工作是什么。
- 与 Homepage、Contact、Products、Request Documents、RFQ 的职责边界。
- 为什么 `NO_PRIMARY_KEYWORD`、`noindex, follow` 与 sitemap exclusion 合理。
- 精确 CTA 是否均指向已登记的一层页面，不制造不存在的帮助中心或搜索功能。
- 哪些文案是用户批准的正式外部内容，哪些运行时事实必须留到 Gate 8/9。

### Step 3：形成 Gate 1 成果

完整 Brief 必须保存已批准文案、用户任务、失败恢复路径、页面职责、可见/机器可读语义、证据与声明登记、开放运行时依赖。研究报告说明这是系统恢复页，不把商业 SERP 研究当必要证据；搜索意图 Skill 标记为 `NOT_APPLICABLE_SYSTEM_UTILITY_PAGE` 并写理由。CSV 至少逐项登记页面不存在、可能 moved/removed、五个导航动作、索引策略与共享 Chrome 的事实来源和使用范围。

### Step 4：自检并提交项目总控审查

检查无未批准关键词、无站内搜索、无 FAQ/表单/长 SEO 文案、无虚假 200 页面合同、无内部治理文案进入 buyer-facing copy。Manifest 状态更新为 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`，不能写 PASS/CLOSED。

Run:

```powershell
rg -n 'Let.s help you find what you need|Explore Products|Go to Homepage|Request Documents|Contact Our Team|Request a Quote|NO_PRIMARY_KEYWORD|noindex, follow' `
  docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md `
  pages/system/404

rg -ni 'site search|faq|approved / closed|gate 1 pass|200 ok' `
  docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md `
  pages/system/404
```

Expected: 所有批准文案/边界均有明确登记；禁止项为 0，治理性状态只允许出现在状态字段而非可见文案。

### Step 5：精确提交执行成果

只提交 Task 2 文件：

```powershell
git commit -m "docs: prepare SYS-404 Gate 1"
```

## Task 3：SYS-404 独立项目总控审查与用户确认

**Files:**

- Create: `pages/system/404/05_review/SYS-404_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`
- Modify: `pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`

### Step 1：不同审查身份做独立复核

审查者从原始 Registry、关键词主表、Gate 0 决定、批准 Design Spec 与现行规则核对，不仅复跑执行者检查。重点查页面身份、HTTP/索引语义、CTA 路由、共享 Chrome、Buyer Clean、Schema 不扩张和 Gate 8/9 分期。

### Step 2：形成审查结论

无 P0/P1 时登记 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；有问题时使用唯一 Review ID 给出可验证定向返修，保持 Gate 1 未关闭。

### Step 3：向用户呈现具体结论

在对话中直接展示：页面任务、精确可见文案、CTA、SEO/indexing 策略、仍留给 Gate 8/9 的实现项与风险，不要求用户自行打开文件。

### Step 4：用户确认后关闭

只有用户明确确认后，才将 SYS-404 Gate 1 登记为 `APPROVED / CLOSED`，记录日期与批准对象；随后才允许启动 `CONV-THANK` Gate 1。精确提交审查及状态文件。

## Task 4：CONV-THANK Gate 1 执行

**Files:**

- Create: `docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md`
- Create: `pages/conversion/thank-you/01_research/CONV-THANK_GATE1_RESEARCH_REPORT_V0.1.md`
- Create: `pages/conversion/thank-you/01_research/CONV-THANK_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv`
- Create: `pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md`
- Create: `pages/conversion/thank-you/05_review/CONV-THANK_GATE1_EXECUTION_SUBMISSION_V0.1.md`
- Modify: `pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`

### Step 1：读取三个表单当前权威组合

从各自当前 Manifest 反向解析 RFQ、Request Documents、Request Sample 的现行成功文案、接收器语义、错误/重试和数据合同。不得凭文件名最高版本猜权威；先记录每个 current Manifest 指向的组合与 SHA-256。

### Step 2：先建立跨页冲突测试

影响审计先列出预期失败项：

- 任何现行合同若把 query string 视为成功证明。
- 任何成功 URL、浏览器标记或 analytics 字段包含姓名、公司、联系方式、产品或请求正文。
- receiver 失败后仍跳转 Thank You。
- direct/invalid 访问显示“已收到”。
- 三个表单对同一成功页给出互相冲突的 copy、CTA 或索引策略。

### Step 3：形成 Gate 1 成果

完整 Brief 保存四种精确状态文案与 CTA；研究报告回答成功页用户任务、直接访问任务、刷新/新会话边界、数据最小化、SEO/GEO/Schema 边界。搜索意图 Skill 标记为 `NOT_APPLICABLE_POST_SUBMISSION_UTILITY_PAGE`。Claim register 逐项关联用户批准、三个当前表单合同和共享法律/分析规则。

影响审计必须明确：本轮只确立未来统一目的地；不修改 receiver、跳转或现有代码，不宣称已接入。三个表单的历史批准文件保持原样，未来由 current Manifest 的增补/继承关系消费该合同。

### Step 4：自检并提交项目总控审查

Run:

```powershell
rg -n 'quotation request|document request|sample request|How can we help|request=quote|request=documents|request=sample|positive acknowledgement|session|NO_PRIMARY_KEYWORD|noindex, nofollow' `
  docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md `
  pages/conversion/thank-you

rg -ni 'name=|email=|phone=|company=|product=|request text|query alone.*success|direct.*received|APPROVED / CLOSED' `
  docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md `
  pages/conversion/thank-you
```

Expected: 三个成功变体和一个 direct/invalid 变体完整；不把 PII 放入 URL/marker/analytics；执行状态仍为 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`。

### Step 5：精确提交执行成果

只提交 Task 4 文件：

```powershell
git commit -m "docs: prepare CONV-THANK Gate 1"
```

## Task 5：CONV-THANK 独立项目总控审查与用户确认

**Files:**

- Create: `pages/conversion/thank-you/05_review/CONV-THANK_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`
- Modify: `pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`
- Modify: `00_PROJECT_STATUS.md`

### Step 1：独立复核四态合同

审查者逐一验证 quote/documents/sample/direct-invalid 四种状态、成功证明、session refresh/new-session 行为、无 PII、失败留在原表单、重复提交防护归属、CTA 路由、共享 Chrome 和索引策略。

### Step 2：核对跨页职责

确认 Thank You 不拥有三个表单 receiver、不重复隐私政策正文、不成为营销落地页；三个表单仍各自拥有校验、失败、重试与数据收集。未来接入点明确属于 Gate 8，实现结果属于 Gate 9 QA。

### Step 3：形成结论并向用户呈现内容

无 P0/P1 时登记 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`。在对话中展示四种读者看到的具体内容、数据行为、跨表单影响和未来实现验收，不让用户自行读文件判断。

### Step 4：用户确认后关闭

只有用户明确确认后才将 CONV-THANK Gate 1 更新为 `APPROVED / CLOSED`。Status 记录两页 Gate 1 均完成、Gate 2 未授权；不自动启动 Gate 2。

## Task 6：本轮总体验收与移交

**Files:**

- Modify only if necessary: `00_PROJECT_STATUS.md`
- Modify only if necessary: `01_PROJECT_INDEX.md`

### Step 1：完整一致性扫描

Run:

```powershell
rg -n 'SYS-404|CONV-THANK' `
  docs/architecture/PAGE_REGISTRY_V0.2.md `
  research/keyword/11_page_keyword_master.csv `
  PROJECT_CONTEXT.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md `
  docs/page-briefs pages/system/404 pages/conversion/thank-you

rg -n 'D:\\16Wordpress_nextjs|GATE 2.*APPROVED|GATE 2.*AUTHORIZED|HANDED_OFF|DEPLOYED|PUBLISHED' `
  pages/system/404 pages/conversion/thank-you `
  docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md `
  docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md

git diff --check
git status --short
```

Expected:

- 59 个页面登记口径一致；两个 Page ID、URL 和 `NO_PRIMARY_KEYWORD` 归属唯一。
- 两页均有 Gate 0、完整 Brief、Research Report、Claim Evidence Register、独立审查记录和唯一 current Manifest。
- 两个 Gate 1 只在用户确认后为 `APPROVED / CLOSED`；Gate 2 仍未授权。
- 0 conflict marker、0 trailing whitespace；无 D16 修改；无其他任务文件被提交。

### Step 2：最终报告

向用户直接报告：两页 Gate 1 的读者任务和公开文案、登记路径、审查结论、尚未开始的 Gate 2，以及未来 Gate 8/9 必须实现和验证的运行时事项。不要把 Gate 1 完成说成页面开发完成或已经上线。
