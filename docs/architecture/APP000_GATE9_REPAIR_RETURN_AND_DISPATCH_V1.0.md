# APP-000 Gate 9 repair return and Gate 8 dispatch V1.0

Date: 2026-09-08  
Dispatch ID: `APP-000-G9-REPAIR-RETURN-01`  
Source candidate: implementation `f0285f288e256ce0c48205931dd8edf4b802b285`; evidence HEAD `ce3f4c5c21033e56472ec53586173279fb78c415`; Build `jf9b1VFzbgKGSQMVOMMbU`; runtime `http://127.0.0.1:4391`  
Target: D16 task `00My开发2`, thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`  
Authority: the user's continuous APP-000 Gate 2→9 execution authorization; this dispatch is limited to Gate 8 repair/evidence return and does not authorize Gate 9 self-approval, Gate 10, merge, push, deployment, production write, publication, DNS or indexing.

## 1. Independent review basis

| Review | Result | SHA-256 |
|---|---|---|
| `pages/applications/07_qa/APP-000_GATE9_INDEPENDENT_READ_ONLY_ACCEPTANCE_V1.0.md` | `RECHECK_SCOPE_STATUS=PASS`; `PAGE_GATE9_STATUS=NOT_PASS`; `INTEGRATION_STATUS=NOT_READY`; `RELEASE_STATUS=NOT_AUTHORIZED` | `2A5E32F45CC1B94370149B6CB6B9A6F59F076645160D36616C3EA4271F02CE33` |
| `pages/applications/07_qa/APP-000_GATE9_EVIDENCE_INDEX_V1.0.json` | 20 indexed artifacts; no missing files | `F6AE45383B5CB06879FAEBBB4AA7AB5A2C3883DE83A67450695F5C34755BFDF3` |
| `pages/applications/07_qa/APP-000_INTERNAL_LINK_RUNTIME_REVIEW_V1.0.md` | `CHANGES_REQUIRED`; complete runtime-link scope | `B30160A218FC509AF09C701BBD9AE68B78DCE15B6E3865B3C5B0325C8C05606F` |

Both Reviewers inspected the exact candidate independently and did not stop after the first Finding. Their compatible Findings are consolidated below; no review conclusion is discarded.

## 2. Required Gate 8 repairs

### `APP-000-G9-F01` — strip internal identities from every public projection

Public HTML, DOM, RSC/client payloads, browser-facing APIs, accessibility output, head and Schema must contain no internal Page ID, `site_scope`, source Page ID, 30 Edge IDs, target Page IDs, shared contract IDs or audit/control fields. The observed `data-site-id`, `data-site-scope`, `data-source-page`, `data-grade-occurrence`, `data-support-action`, serialized `currentPageId`, `sourcePageId`, `targetPageId`, `siteScope` and `GLOBAL-CHROME-005` violate Gate 6 §2 and `APP000-G9-01/-07/-13`.

Closure must also prove that both body RFQ links keep a clean URL, privately attribute the request to APP-000, leave Grade and Application editable/unselected, and preserve non-public CMS/audit identity evidence. Choose the implementation mechanism after inspecting D16; do not restore public query parameters or another public internal identifier. If shared Chrome/RFQ code must change, retain the current shared owner behavior and run affected consumer regressions rather than creating an APP-only fork.

### `APP-000-G9-F02` — correct the thirtieth Edge identity

The internal exact occurrence key for Specialty Materials → CR-901 must be `APP000-EDGE-SPEC-01`, not `APP000-EDGE-SPECIALTY-01`. Recheck all 30 ordered occurrences, their 8/8/7/4/2/1 grouping, labels, hrefs, Grade Page IDs, canonicals, EN/scope and 14 destinations. F01 still requires all audit Edge identities to remain absent from public projection.

### `APP-000-G9-F03` — implement the approved responsive disclosure default

At a fresh 390-wide view, all six Grade disclosures must start collapsed; each must open by pointer and keyboard and expose all 30 Grade links in approved order. Desktop and tablet defaults remain open. Preserve no-script core usability and avoid clipping, overlap or horizontal overflow. Recheck the approved 390 default and expanded comparators plus 768 and 1440.

### `APP-000-G9-F04` — restore the nine exact accessible link names

The six category anchors must expose exactly `Coatings`, `Plastics`, `Masterbatch`, `Printing Inks`, `Paper`, `Specialty Materials`. The three support links must expose exactly `Explore Products`, `Review Documents`, `Explore Markets`. Decorative arrows may remain visually but must not enter accessible names. Recheck pointer, keyboard, fragment/destination and Back behavior for all nine instances.

## 3. Required evidence return

Return one new, clean Gate 8 candidate with new implementation commit, evidence HEAD, Build directory/ID, held runtime and schema-valid repository-external `gate8_evidence_manifest.json`. The receipt and manifest must bind all changed and adjacent evidence, including:

- raw public HTML/RSC/DOM/head/Schema scans proving F01, with private CMS/audit and RFQ attribution evidence kept non-public;
- exact 30-edge inventory and 14 endpoint results proving F02;
- 1440/768/390 default/expanded screenshots and pointer/keyboard disclosure observations proving F03;
- browser accessibility output and navigation/Back checks proving F04;
- regression checks for current shared Header/Footer/menu/Cookie/RFQ behavior and any other page consumers affected by shared implementation changes;
- targeted tests, typecheck, lint, production build, Chromium plus non-Chromium browser checks, full-suite result with any unrelated baseline failure separated and evidenced;
- all `APP000-G9-01…17` and known open dependency mappings, including unchanged integration/device items.

Gate 8 must not edit the nine 404 consumer pages or the 404 Sulfate page under this APP-000 repair dispatch. Their status remains integration-owned. It must not claim that native 200%, physical touch or named AT has been independently completed unless exact truthful evidence exists.

## 4. Items retained outside APP-000 repair

- `APP-000-G9-NV01`: native 200% browser zoom, physical touch and a named screen reader/AT remain Gate 9 evidence items.
- `G9-T4A5-F02` / `APP000-G9-16`: nine consumer routes are 404 in the inspected isolated candidate; this remains an integration-owner item.
- `APP000-G9-17`: Chloride route subcondition passed; Sulfate remains 404 with its owner; the Chloride receiver subcondition remains separate.
- `RELEASE_STATUS=NOT_AUTHORIZED` remains unchanged.

## 5. Dispatch receipt

Sent on 2026-09-08 to D16 task `00My开发2`, thread `01a07e6a-546d-7532-aa06-02d2bffd5eed`, using the Codex task message interface. Tool result returned the same thread ID, so status is `SENT / GATE8_REPAIR_TRIGGERED`. This receipt grants only the repair scope above.
