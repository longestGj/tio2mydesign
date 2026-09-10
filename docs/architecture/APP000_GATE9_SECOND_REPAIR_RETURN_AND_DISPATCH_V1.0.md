# APP-000 Gate 9 Second Repair Return and Dispatch V1.0

Date: 2026-09-08  
Dispatch ID: `APP-000-G9-REPAIR-RETURN-02`  
Source repair candidate: implementation `0144b303d0546dc5bb7012e4292df6339f851b78`; evidence HEAD `87f48dc6eb0489ab26822280918dd0248efe6e05`; Build `cD6FOWG8iVMbgeRxyIqIS`; runtime `http://127.0.0.1:4391`  
Target: D16 task/thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`

## 1. Independent result

The targeted repair recheck is complete. `APP-000-G9-F02`, `F03` and `F04` pass. `APP-000-G9-F01` remains open as `APP-000-G9-F01-R2`; therefore the exact candidate is `NOT_PASS` and Gate 8 receives one bounded second-repair item.

| Evidence | Result | SHA-256 |
|---|---|---|
| `pages/applications/07_qa/APP-000_GATE9_TARGETED_INDEPENDENT_RECHECK_V1.1.md` | `TARGETED_RECHECK_COMPLETE / NOT_PASS` | `55684DEDA085868722DBE9F7C046DC2228C7722BB6AFDA439ED523B9027032E2` |
| `pages/applications/07_qa/APP-000_GATE9_TARGETED_RECHECK_EVIDENCE_INDEX_V1.1.json` | 40 evidence items; F01 fail; F02–F04 pass | `D811F37217B5DB2F84087973424AD6A49C9C53CE4BDB61A9A695162D10E74377` |
| `pages/applications/07_qa/APP-000_INTERNAL_LINK_RUNTIME_TARGETED_RECHECK_V1.0.md` | independent client/RFQ corroboration | `B970051CFB77E3B1B1918682476A165569D3ACE9C004444F507E7D93E3DDA0B5` |

## 2. Required repair

Gate 8 must remove internal Page ID, site scope, source/target/Edge IDs, shared contract/package IDs and audit fields from APP-000 and RFQ-path public HTML, DOM, RSC, every loaded client script, browser-facing API surface, accessibility output, head and Schema. The current public chunk `/_next/static/chunks/3c5zdncxytccc.js` has SHA-256 `5dc61536b9a81149cc2bbb08ccc2b53991676b263c31b043b50131b4d0e59348` and contains the internal values listed in the report. RFQ public HTML/RSC also contains `APP-000` and other internal control identities.

APP-000 attribution must remain private and appear only in the server-to-receiver payload. Preserve the clean RFQ URL, empty editable Grade/Application state and opaque HttpOnly cookie transport. The closure scan must cover all loaded client chunks and the RFQ target projection, not only APP-000 HTML/RSC.

F02–F04 remain closed unless the F01 repair changes their implementation. Shared changes require their adjacent regression coverage.

## 3. Scope retained outside this repair

- `APP-000-G9-NV01` device/native zoom/named AT evidence remains separate.
- `APP000-G9-16` / `G9-T4A5-F02` remains with the nine consumer owners.
- `APP000-G9-17` remains with the Process/receiver owners.
- Gate 10, merge, push, deployment, production write, publication, DNS and indexing remain unauthorized.

## 4. Dispatch receipt

The return was sent through the Codex task message interface on 2026-09-08. The tool returned thread ID `01a07e6a-546d-7532-aa06-02d2bffd5eed`, so status is `SENT / SECOND_GATE8_REPAIR_TRIGGERED`. The current runtime may be released after receipt; the next return must bind a new implementation, evidence HEAD, Build and held runtime with a schema-valid evidence Manifest.
