# CONTACT-001 Web3Forms Lightweight Flow User Decision

Date: 2026-09-10  
Decision ID: `CONTACT-W3F-20260910-01`  
Status: `USER_APPROVED / ACTIVE_PAGE_SPECIFIC_DECISION`

## 1. User decision

After Project Control reported that CONTACT-001 still required a processor, receiver, anti-spam/dedup and Privacy/data-flow decision, the user stated:

> 表单目前保持安全失败状态，不会虚假显示发送成功；真实提交仍需配置处理器、收件邮箱、反垃圾与去重，以及隐私数据流。这个和request document一样就行了吧，不需要那么多功能的

This is the current Contact-specific architecture decision. CONTACT-001 may reuse the existing Request Documents lightweight Web3Forms Free browser-direct flow and the corresponding Malaysia-site provider binding. It does not require a self-hosted Contact processor, CAPTCHA/Turnstile, a separate complex anti-spam system or persistent/durable deduplication service.

The approved minimum behavior is:

- the six approved Contact fields remain the only buyer-entered fields;
- one explicit action releases at most one pending request, with no automatic retry;
- only HTTP 200 with parseable JSON `success=true` may display the approved Contact success state;
- rejected, malformed, ambiguous, timeout and network outcomes remain failures, preserve entered values and expose manual retry;
- the page links the current Privacy Policy;
- provider routing values and the operational receiver remain non-visible.

## 2. Contract effect

This decision supplies the Contact-specific processor-path and minimal duplicate/retry scope required by `CONTACT-001_GATE6_HANDOFF_PACKAGE_V0.2.md` §§8.1 and 9. It supersedes the earlier rule that Contact could not reuse the specialist-form Web3Forms architecture by analogy.

It does not turn unobserved provider delivery or mailbox receipt into a pass. It also does not waive buyer-visible Privacy parity: before release, the current Privacy Policy must accurately cover the Contact fields, purpose and active Web3Forms flow.

## 3. Boundary

The later user confirmation to submit the synthetic Contact form authorized the observed controlled submission only. It did not authorize repeated sends. This decision does not approve Gate 9, Gate 10, merge, deployment, publication, DNS or indexing.

