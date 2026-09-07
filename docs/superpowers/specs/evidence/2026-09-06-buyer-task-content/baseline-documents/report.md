# Documents content method validation — baseline

- Date: 2026-09-06
- Status: DRAFT_FOR_PROJECT_CONTROL_REVIEW / isolated exercise only
- Scope: CASE-DOCUMENTS excerpt §§1–11. No live page, Manifest, design, implementation or approval has been changed.
- Evidence: only the supplied historical excerpt and fixed exercise contract; no external research or page-source reads.
- Deliverable: proposed English buyer copy, followed by internal operating notes and Chinese explanations. Labels in brackets identify editorial positions and are not visible page text.

## 1. Revised English buyer copy

### 1.1 Breadcrumb and hero

[Breadcrumb]

Home → Documents → TDS, SDS & COA

[Eyebrow]

TECHNICAL DOCUMENTS

[H1]

Titanium Dioxide TDS, SDS & COA: What to Request

[Hero support]

Use a TDS for Grade-level technical evaluation, an SDS for safety and handling information, or a COA for results from a specific lot or batch. Choose the document types you need below, then continue to the request form.

[Primary CTA]

Request documents

### 1.2 Choose your documents

[H2]

Choose your documents

[Introduction]

Select one or more document types. The details below will help you prepare your request; you do not need to know every item before you start.

[Document choices and comparison]

| Select | Use it for | Useful details to include on the request form |
|---|---|---|
| TDS — Technical Data Sheet | Grade-level technical evaluation | Product Grade; a specific revision if required |
| SDS — Safety Data Sheet | Safety and handling information for the relevant product and market | Product; market or jurisdiction; required language; a specific revision if required |
| COA — Certificate of Analysis | Quality results for a specific lot or batch | Product or Grade; any available lot, batch or order reference |

[Grade selector label]

Primary product Grade

[Grade selector placeholder]

Choose a Grade

[Grade selector options]

- M-350
- M-510
- M-896
- M-996
- M-2196
- M-895
- M-200
- M-108
- M-210
- M-340
- M-886
- M-52
- M-2377
- CR-901

[Grade helper]

Need documents for other Grades too? Add their names in the additional context field on the request form.

[Continuation guidance]

Your selected document types and Grade will carry into the request form. You can check, change or remove these selections before submitting. Add any relevant details from the table, your contact and business details, and other non-confidential requirements or questions. Required fields are shown on the form.

[Primary CTA]

Continue to document request

### 1.3 What happens after you submit?

[H2]

What happens after you submit?

[Copy]

We review your requested documents and the information you provide. We may contact you if clarification is needed. Selecting a Grade or submitting a request does not confirm document availability or delivery.

### 1.4 Other document topics

[H2]

Other document topics

[REACH link card]

**EU REACH information**

Review what procurement teams should verify when assessing EU REACH information and supporting documentation.

**Review EU REACH information**

[Origin link card]

**Certificate of Origin**

Review the origin-document details buyers may need to verify for a shipment or transaction.

**Review origin documentation**

[Documents overview link]

**View all document topics**

## 2. Internal content and operation contract

### 2.1 Scope and action meaning

This is an upstream explanation and request-preparation page. It does not submit a request, deliver a document, confirm stock or availability, or make a regulatory or shipment determination.

The hero action “Request documents” navigates to `/request-documents/`. The action after the selections, “Continue to document request”, also navigates to `/request-documents/`, carrying any selections made on this page. Neither action is a submission control. When no selections have been made, do not invent default document types, a default Grade or a new upstream required-field policy. The destination form owns its required fields and validation.

The primary action remains a route to Request Documents; no new anchor-only hero behavior or Contact fallback is proposed. A reader who already knows what they need can go straight to the form. A reader comparing document types can choose on this page and continue with that context.

### 2.2 Selection and transport

| Visible element | Fixed contract and interpretation |
|---|---|
| TDS selection | `prefill.document_types[]` value `technical_product` |
| SDS selection | `prefill.document_types[]` value `safety` |
| COA selection | `prefill.document_types[]` value `quality_coa` |
| Multiple document types | The three choices support selecting more than one. “Select more than one” is guidance, not a fourth document type. |
| Primary product Grade | Exactly one structured Grade can be selected, using one allowlisted `prefill.product_grade` value from the 14 listed options. Selection does not indicate availability. |
| Other Grades | Buyer-entered supplementary free text on the request form only. No structured multi-Grade selector, individual Grade-to-document mapping, or implied separate request items. |
| Additional context | Field behavior, limits and validation remain owned by CONV-DOC. The preparation table suggests information; it does not create downstream fields or make each detail mandatory. |
| Prefilled context | Buyer can check, change or remove selected document types and the Grade before submission, as stated in the excerpt. |
| Source attribution | `source_page=DOC-TDS`, normalized to hidden `source_context.page_id`; system-controlled, non-editable and never displayed in buyer copy. |

`prefill.product_grades[]` remains inactive. This proposal does not change transport encoding, receiver behavior, field requirements, validation, analytics or the fixed single-primary-Grade contract.

The comparison's “Select” column represents the actual three document-type selection controls, not three download links. The table supplies the decision information beside each choice; its precise responsive presentation belongs to later design work. Accessible selection labels should contain the document abbreviation and full name shown in the row. This is content guidance, not a new implementation.

### 2.3 Links, availability and later verification

| Position | Destination or dependency |
|---|---|
| Hero and continuation CTA | `/request-documents/` |
| Breadcrumb Documents; “View all document topics” | `/documents/` |
| Breadcrumb Home | Existing Home destination; exact URL was not supplied in the excerpt. |
| “Review EU REACH information” | Existing REACH topic destination; exact URL was not supplied. Retain the logical link in the complete-site proposal. |
| “Review origin documentation” | Existing Certificate of Origin destination; exact URL was not supplied. Retain the logical link in the complete-site proposal. |

Do not hide links merely because historical implementation was incomplete. Before implementation handoff, resolve the exact existing Home and related-topic URLs from their owners; do not create new routes in this exercise. Before release, verify that the request route accepts and preserves the supported selections and that the related links resolve correctly.

The exercise's runtime failure rule remains: if the request route/action is ineligible, remove its visible action and the corresponding Schema relationship together. Contact is not an automatic fallback. This runtime rule is separate from the full-site copy proposal and does not justify removing every planned request entry now.

No SEO title, meta description, canonical, social metadata or complete Schema is added because the task explicitly excludes excerpt-external metadata. Any later machine expression must match the visible distinction between requesting documents and receiving them, and the single structured Grade contract.

### 2.4 Submission states and facts

The supplied excerpt authorizes “review after submission” and possible follow-up for clarification. It does not supply a response-time promise, delivery channel, download capability, guaranteed document coverage, current certification, or a completed-request success-state contract. None is added.

The visible post-submission explanation in §1.3 describes the next step; it is not an on-page success message. Actual form submission, errors and success messages remain on CONV-DOC. Additional corporate facts are unnecessary for this excerpt revision; there is no fact gap that must be invented or newly prohibited to complete it.

The expanded document names are conventional labels for TDS, SDS and COA, not new assertions about company capability or document contents beyond the excerpt. All product names and the technical/safety/batch distinction are retained from the provided material.

## 3. 中文重要取舍

### 3.1 让比较同时帮助选择

原文的 Direct Answer、用途卡片、比较表、清单、四步流程和 FAQ 多次重复“选文件、加型号、补相关信息”。这里保留一句快速答案，把用途、需要准备的信息与三个文件选项放在同一张表中。读者不用先看卡片、再翻到比较表寻找相同答案。

没有删除技术差异：TDS 仍然是 Grade 级技术评估；SDS 仍保留市场/司法辖区、语言和版本语境；COA 仍是具体批次结果，订单号作为查询上下文，不被写成文件本身一定以订单为范围。

### 3.2 多文件与多型号分别说清

“Select more than one”不再单独做成第四类选择，避免让人误以为它也是一种文件。三个真实文件类型直接支持多选。

型号仍是一个结构化主 Grade；其他型号只能在下一页补充文字。页面没有把“附加 Grade 文本”升级为逐型号文件选择、批量文件篮或一项对应多份文件的保证。主 Grade 辅助说明保留读者真正需要知道的做法，不重复展示“supporting context for review”等内部式说明。

### 3.3 把下一步与提交结果分开

选择区按钮使用“Continue to document request”，明确现在前往表单，尚未提交。Hero 保留直接进入申请页的路径，方便已经知道所需文件的读者。表单前的信息会被带入、可改可删，申请后会审阅并可能联系澄清，这两段分别出现在行动前和行动后说明中。

不提供时间承诺、下载按钮或申请成功提示，因为摘录没有这些事实或操作合同。

### 3.4 合并重复提示，同时保留必要限制

原文多个位置强调“选择不等于可用”“提交后审阅”。修订后只在紧接请求区的“提交后会发生什么”中集中讲明，读者仍能在作决定时看到限制，但不需在 FAQ、型号提示和流程中重复读取。

相关 REACH、原产地文件和 Documents 总览保留，放在主任务之后。没有为历史路由未上线而隐藏，也没有猜具体 URL。FAQ 与独立 Final CTA 被合并掉：本次摘录中的 FAQ 答案已经出现在对应决定位置，继续保留会重复；选择区已有明确后续按钮，不再重写一遍整个申请流程。

### 3.5 影响、风险与回退

- 预期影响：减少在重复内容之间比对的需要，让用途判断直接连接文件选择。这是内容分析判断，不是已证实的用户测试或转化提升。
- 风险：表格在小屏上的可读性、选择控件与信息的对应关系需要后续设计验证；不能因压缩布局省略 SDS 或 COA 的关键语境。
- 风险：跨页上下文若未兑现，会使“carry into the request form”失实。因此需要接收页 owner 在实现及验收时核对，不能把内容已写好当成运行时已通过。
- 回退：本练习完全不改原文件或合同。若本方案未被采用，原摘录不受影响；若采纳时仅需局部修订，可保留其原始文案基线并按正式页面流程提交候选。

## 4. Self-check and open items

1. **Task completion:** §1.1 supplies a direct answer; §1.2 connects document choice to required review context and the form; §1.3 states the review outcome; §1.4 retains adjacent routes. No needed TDS/SDS/COA distinction or provided context category was removed.
2. **Independent comprehension:** buyer copy explains what each document is for, how to handle additional Grades, what carries forward, what to add on the form and what happens after submission. Internal transport identifiers and governance status appear only in §2.
3. **Names and behavior:** §1.2 says “Continue”, not “Submit” or “Download”; §1.3 avoids approval or delivery confirmation. The selection interface has three document types, not an invented fourth choice.
4. **Context and responsibility:** §2.2 preserves one structured Grade, multiple document types and supplementary free text. No downstream field or URL is invented. The five FAQ questions' necessary answers are covered in §§1.2–1.3 rather than separately repeated.

Open items: exact Home/REACH/Certificate of Origin link targets were not supplied; record them as owner-resolved implementation dependencies. Runtime route eligibility, prefill behavior and responsive presentation are untested and outside this isolated content exercise. Independent review and user approval have not occurred. These items do not prevent delivering the requested excerpt-level proposal.

No missing input prevents completion of this method exercise. No project-wide state or live artifact was changed.
