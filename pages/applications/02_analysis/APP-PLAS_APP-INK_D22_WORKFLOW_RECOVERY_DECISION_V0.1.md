# APP-PLAS / APP-INK D22 Workflow Recovery Decision V0.1

## 1. Decision record

| Field | Decision |
|---|---|
| Date | 2026-09-06 |
| Decision source | User identified that two D22 articles did not follow the required workflow and instructed that both be redone |
| Affected articles | `APP-PLAS` and `APP-INK` |
| Root cause | D23 Controller incorrectly instructed D22 to return a final article directly instead of requiring the complete D22 A01–A06/RQR–A00 sequence |
| Recovery status | `AUTHORIZED` |
| Execution order | Plastics first; Printing Inks only after Plastics workflow closure and D23 review |
| Parallel work | Prohibited |
| D22 scope | Article production only, through D22's complete governed article workflow |
| D23 scope | Topic/scope decision, cross-project coordination, D23 review, user decision, and later page/Gate work |

## 2. Affected artifacts and corrected status

### APP-PLAS

| Field | Corrected state |
|---|---|
| Direct article | `D:\22文案写作分析\titanium-dioxide-for-plastics-buyer-clean.md` |
| SHA-256 | `2d65a6961a298308574a216d1b194aebe847452b2b7167754784a2377ea2d888` |
| User decision retained | The user approved the visible content presented by D23 |
| Workflow state | `D22_WORKFLOW_NOT_COMPLETED` |
| Release-candidate state | `NOT_A_GOVERNED_D22_RELEASE_CANDIDATE` |
| Permitted recovery use | Owner-approved content preference and reference input for the new A01 project definition; not automatic evidence or final copy |

The user's content approval is not erased. It remains evidence of preferred direction and acceptable visible meaning. It does not substitute for A01 project definition, A02 evidence governance, A03 architecture and review, A04 writing and review, A05 editing, A06/RQR, final A00 review or Controller closure. A materially changed final article produced by the recovery workflow requires a new D23 presentation and user decision.

### APP-INK

| Field | Corrected state |
|---|---|
| Direct article | `D:\22文案写作分析\titanium-dioxide-for-printing-inks-buyer-clean.md` |
| SHA-256 | `3f8dc578301cf5cfa7c4f843fe737c75f16d2768cab35d762a04e9ee51f07ee7` |
| User approval | None |
| D23 review state | `WITHDRAWN_FOR_D22_WORKFLOW_NONCOMPLIANCE` |
| Workflow state | `D22_WORKFLOW_NOT_COMPLETED` |
| Release-candidate state | `NOT_A_GOVERNED_D22_RELEASE_CANDIDATE` |
| Permitted recovery use | Reference draft for later APP-INK A01/A02 work; not automatic evidence or final copy |

## 3. Required D22 workflow

Each article must independently complete the current D22 sequence defined by `D:\22文案写作分析\AGENTS.md`:

`A01 → A02 → A03 → independent A03 review → Controller A03 closure → A04 → independent A04 review → Controller A04 closure → A05 → Controller exact release to A06/RQR → A06/RQR → Controller exact release to final A00 review → A00 exact-package review → Controller closure and release-candidate designation`

The D22 Controller may authorize the next internal stage only after the prior stage's required exact handoff, review and closure exist. A stage self-check, validator, manifest or eligibility status cannot substitute for the independent review or Controller closure required by the workflow.

## 4. Responsibility interpretation

The user's statement “D22只管写文章” means:

- D22's business domain is article production;
- D22 must still use its complete governed article-production process;
- D22 must not perform D23 page architecture, HTML/CMS conversion, SEO/GEO/Schema delivery, product routing, page Gate approval, development, deployment or publication.

It does not mean that D22 may skip its internal stages, handoffs, independent reviews, RQR or final A00 review.

## 5. Recovery order and stop conditions

### Recovery 1 — APP-PLAS

- Start a new governed `titanium-dioxide-for-plastics` article case at A01.
- Use `APP-PLAS_ARTICLE_TARGETED_REVISION_DECISION_V0.1.md`, the historical Plastics source package and the user-approved Buyer Clean draft only as declared inputs according to their permissions.
- Do not treat the direct Buyer Clean draft as approved evidence or as an A05/A06 artifact.
- Complete the full D22 sequence and return the exact final package identity to D23.
- Stop before any APP-INK stage starts.

### Recovery 2 — APP-INK

- Remains `NOT_STARTED / WAITING_FOR_APP_PLAS_CLOSURE`.
- After APP-PLAS is closed and reviewed by D23, start a separate governed APP-INK case at A01.
- Use `APP-INK_ARTICLE_DIRECTION_DECISION_V0.1.md` and the direct draft only as declared scope/reference inputs.
- Complete the same full D22 sequence and return the exact final package identity to D23.

## 6. Page and publication boundary

This recovery authorizes article production only. It does not approve either page URL, Page Brief, page copy composition, internal links, product presentation, CTA, SEO/GEO/Schema, HTML, design, development, deployment, indexing or publication. D23 will handle those separately under the applicable page Gates after the article program is complete.

## 7. Execution update — 2026-09-06

| Field | Current record |
|---|---|
| APP-PLAS workspace | `D:\22文案写作分析\projects\titanium-dioxide-for-plastics` |
| A01 result | Exact Charter `0.1` approved; `HANDED_OFF_TO_A02`; `a02_entry_eligible=true` |
| Approval source | In the D22 task, immediately after the exact Charter 0.1 approval request, the user replied: “授权。以后不要找我了，一直做到文章完成。” |
| Approval interpretation | Exact APP-PLAS Charter 0.1 approval plus continuous internal execution authority through article completion; no expansion into APP-INK, page, development or publication authority |
| A01 handoff manifest SHA-256 | `0f199007982055bdb9d13a651dac2bdfd8ff11592d1fc443fe1268d08b4ea514` |
| Current D22 stage | `WORKFLOW CLOSED / RELEASE CANDIDATE DESIGNATED / NOT PUBLISHED`; final A00 `ACCEPTED_WITH_NOTES`, findings `0/1/0`; exact article SHA `e7d45216d5858c4aaa21e487e1c6ca650c3f50de7ce44363ecb7e23de507b079` |
| D23 article review | `APPROVED / CLOSED`; user decision 2026-09-06: “批准 Plastics 新正文，启动 Printing Inks。”; review record `APP-PLAS_GOVERNED_ARTICLE_PROJECT_CONTROL_REVIEW_V0.1.md` |
| APP-PLAS approval scope | Exact governed article is approved as formal public-facing content input; no page Gate, HTML, development, deployment, indexing or publication authorization |
| APP-INK | A01 `CLOSED / HANDED_OFF_TO_A02`; user approved exact Charter 0.1 in `00Con-钛白粉plastic`: “批准 APP-INK Project Charter version 0.1 原样通过。”; approved Charter SHA-256 `e0215f2b5dbe6c987e42fee8ee7fbe2df4f17aab52b2493dbfd99fb483e58786`; A01 handoff SHA-256 `eeaf39786a7de319f4159c5d1c47c5921b2776407486846635f7fab99a1b0d2c`; A02 `IN_PROGRESS` under frozen article-research contract |

A short A02 pause occurred while D23 reconciled whether the version-specific approval had actually been given. Once D22 supplied the direct user reply and its immediate context, D23 accepted the approval provenance and authorized A02 to resume. The pause and reconciliation remain in the D22 audit trail; no history is deleted or silently rewritten.

## 8. APP-INK start authority — 2026-09-06

The user explicitly instructed: “批准 Plastics 新正文，启动 Printing Inks。” This closes the APP-PLAS content-decision prerequisite and authorizes APP-INK to enter A01 under the recovery sequence.

The instruction authorizes A01 initiation, not advance approval of a Charter version that did not yet exist. D22 must create the isolated APP-INK project, prepare its exact A01 execution contract and Charter, and stop at the version-specific approval boundary when required by `D:\22文案写作分析\AGENTS.md`. The old direct APP-INK draft remains reference-only and is not evidence, an A05 artifact or a release candidate. No page, HTML, SEO/GEO/Schema delivery, development or publication work is authorized.

## 9. APP-INK exact Charter approval and A02 start — 2026-09-06

After D22 presented exact APP-INK Project Charter version 0.1 in the `00Con-钛白粉plastic` task, the user directly replied: “批准 APP-INK Project Charter version 0.1 原样通过。” D23 independently verified that user message through the task record. This is valid exact-version Owner approval.

A01 closed with validator `PASS` and an exact A02 handoff. A02 then started in a separate APP-INK task under the frozen article-research contract. A short stop/resume occurred because D23 initially lacked visibility of the approval turn in the other task; the A02 task confirmed that it had not accessed Semrush, SERPs or technical sources and had created no research output before authority was reconciled. The pause is retained as audit history, does not invalidate the verified approval, and consumes no research or review budget. A02 may proceed; architecture, prose, page work and publication remain excluded.

## 10. A02 scope review and A03 control hold — 2026-09-06

The user asked D23: “你再看一下APp-INK A02，是不是走远了”. D23 found that the approved A02 scope had consumed disproportionate effort on eight-market Semrush/SERP capture, localized seeds, competitor sampling and internal governance artifacts before reaching the article's core technical evidence. The agent followed the exact Charter, so this was not an A02 producer violation; the overbreadth originated in the approved Charter/contract design and D23's earlier presentation did not make that burden sufficiently visible.

D23 paused A02 pending a reduced article-first disposition. D22 subsequently completed an A02 evidence candidate, issued its own closure, and started A03 without waiting for that disposition. D23 stopped the A03 task immediately. The A03 task confirmed it performed read-only inspection only and created or modified no architecture, prose or project artifact.

Current D23 control state:

- A02 exact package exists at `D:\22文案写作分析\projects\titanium-dioxide-for-printing-inks\a02-production\run-01-v0.1\handoff-manifest.json`, SHA-256 `e2cb6dcbaa77e8c68db16bb633d31d0d2352f38259ae26b6a4d25decfa579039`.
- D22's A02 closure record is preserved but is not accepted by D23 as authority to continue while the user's scope question remains unresolved.
- A03 is `STOPPED / NO OUTPUT`; its start does not create downstream eligibility or approval.
- D23's preliminary content inspection finds the core evidence synthesis usable and appropriately narrowed; no A02 redo is recommended merely because the workflow generated excess supporting files.
- Recommended disposition is to retain the current A02 package once, end all further keyword/competitor/mechanism work, and authorize A03 only to build the article's decision architecture from the admitted evidence. This requires the user's explicit decision.

## 11. Final D22 completion and D23 review — 2026-09-07

The user subsequently informed D23: “D22已经完成了”. D23 verified the exact final package rather than relying on the status statement alone.

| Field | Verified final state |
|---|---|
| D22 workflow | `WORKFLOW COMPLETE / RELEASE CANDIDATE DESIGNATED / PUBLICATION NOT AUTHORIZED` |
| Exact article | `D:\22文案写作分析\projects\titanium-dioxide-for-printing-inks\a05-production\run-02-rqr-correction-v0.1\article-edited.md` |
| Article SHA-256 | `9f80f99e7453aeef28fcb8534aada9980036ee6ab87f8aca2d024d464d6f8c55` |
| RQR | `READER_READY`; decision SHA-256 `564cc8a45e928b9246a8d1cc3cf900d4a4eff3b77a33ad94eb61ac81e6030fb4` |
| Final A00 | `ACCEPTED`; findings `0/0/0`; decision SHA-256 `a5d56d5a7ebbd4d536a72e24773b67cb3bba843137c7a6cfc29a617cd575970e` |
| Controller closure | `controller\release-candidate-closure-v0.1.md`; SHA-256 `5d3b1d4b58c258a6ce95a9a9185db288fddb5f38bb7e0412d887966d6029b530` |
| D23 content review | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; `APP-INK_GOVERNED_ARTICLE_PROJECT_CONTROL_REVIEW_V0.1.md` |

The earlier A02/A03 control dispute remains part of the audit history. D23 does not treat process overgrowth as a reason to discard a final article that independently passed the current RQR and A00 packages and is substantively usable. No page, HTML, development or publication authority follows from D22 completion.
