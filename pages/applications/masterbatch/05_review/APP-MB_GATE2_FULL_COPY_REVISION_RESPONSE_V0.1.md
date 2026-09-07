# APP-MB Gate 2 Full Copy Revision Response V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-MB` |
| Date | `2026-09-07` |
| Input review | `APP-MB_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` |
| Input review SHA-256 | `36FA858621CEE29B7A6CED8C519419CF51E0FB6C75720BE405E79BF70AC99B67` |
| Findings | `APP-MB-G2-BR-F01`, `APP-MB-G2-BR-F02` |
| Response status | `REVISED / PENDING_INDEPENDENT_REREVIEW` |

## 2. Version decisions

| Artifact | SHA-256 | Decision and reason |
|---|---|---|
| A — `APP-MB_GATE2_CONTENT_SKELETON_V0.2.md` | `633A2165153D0F60711F9C170D84E658CB245D9F971AFE81A4F2B079C60344DC` | Unchanged. The module count, order, source set and four-stage structure do not change. |
| B — `APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `6E73AE9B3264D9B296C8A4F3A34112D77BB003603D331BBA5A5C3F4EF0DA22C9` | New Buyer Copy version implementing both Findings. V0.1 remains unchanged. |
| C — `APP-MB_GATE2_CONTENT_CONTRACT_V0.2.md` | `6BFFF1AD09BA58DE0A4383DC01CDFBEE6D0EA28051CC8C974893971894D358B7` | Upgraded because F01 changes the stable document-selection rule and F02 changes the stable four-stage decision semantics. Source, module, action, SEO and Schema sets remain unchanged. |
| Manifest | Self-hash omitted by Manifest rule | Existing same-stage V0.4 updated; no new Manifest version. |

## 3. Finding response

### `APP-MB-G2-BR-F01` — accepted

Before:

> Before comparing candidate Grades, check the current TDS and SDS, the relevant lot CoA and application data for the declared masterbatch system.

After:

> Start with the records that answer your current question. A TDS can support early Grade screening, while an SDS provides safety information. Add a relevant lot CoA once a lot is identified, and use application data when a tested system needs to be assessed. Record any missing document or context for later verification, and keep each conclusion within the document or trial that supports it.

The document table remains unchanged. Early Grade screening can start with available relevant information; an unidentified lot or untested application does not create a false prerequisite. Missing evidence remains explicit for its later decision stage, and no document availability is promised.

### `APP-MB-G2-BR-F02` — accepted

The four technical stages remain:

1. Document screening.
2. Concentrate trial.
3. Receiving-resin and final-specimen trial.
4. Repeatability assessment.

The table now gives direct buyer decisions: choose inputs and conditions; decide whether to run the final-specimen trial or collect more concentrate evidence; decide what to repeat or extend; and decide whether evidence supports proceeding or further testing. Public references to `release authority`, `release request`, `release decision`, `responsible approver`, `responsible decision owner` and request-versus-approval have been removed.

The close now states that each stage answers one technical question and that missing inputs should be recorded and obtained or tested. It retains the key limit that concentrate-stage evidence does not establish final fitness or recommend a Grade.

## 4. Full-page adjacent regression

| Check | Result |
|---|---|
| Structure | One H1, 10 H2 sections and the same 11-module order |
| Four stages | Document screening, concentrate trial, receiving-resin/final-specimen trial and repeatability all retained |
| Internal release language | Target terms absent from B V0.2 |
| Incomplete documents | Early screening can continue; missing lot/application evidence remains for later verification |
| Document roles | TDS, SDS, lot CoA and application report distinctions unchanged |
| Sources | Four notes, continuously numbered; identities, dates, links and predicates unchanged |
| Grades | Seven rows: M-510, M-200, M-108, M-210, M-340, M-886, M-2377; five Chloride and two Sulfate |
| Candidate paths | One, several and unknown-Grade paths retained |
| APP-PLAS boundary | Final-plastic handoff unchanged |
| Actions | Documents, Sample and RFQ inputs, receiver expectations and limits unchanged |
| RFQ minimum path | `Not sure / Need help`, required or estimated MT, destination and `Additional Requirements` retained |
| Metadata | H1, SEO title, Meta, Canonical candidate and Schema direction unchanged |
| Non-target semantics | Unchanged outside F01/F02 and the version heading |

## 5. Handoff

Both Findings are implemented and ready for independent rereview. Gate 2 remains open; this response does not approve Gate 2 or unlock APP-INK.

