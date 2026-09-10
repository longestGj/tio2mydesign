# APP-000 Gate 9 Targeted Independent Recheck V1.1

Date: 2026-09-08  
Reviewer: `/root/app000_gate9_review`  
Review mode: independent, read-only targeted recheck  
Prior report: `APP-000_GATE9_INDEPENDENT_READ_ONLY_ACCEPTANCE_V1.0.md`

## 1. Exact candidate and scope

| Field | Rechecked identity |
|---|---|
| Worktree / branch | `D:/16Wordpress_nextjs/.worktrees/app000-gate8` / `codex/app000-gate8` |
| Implementation | `0144b303d0546dc5bb7012e4292df6339f851b78` |
| Evidence HEAD / actual HEAD | `87f48dc6eb0489ab26822280918dd0248efe6e05` |
| Build | `.next-app000-0144b30` / `cD6FOWG8iVMbgeRxyIqIS` |
| Runtime | `http://127.0.0.1:4391` |
| CMS fixture | `http://127.0.0.1:4390/graphql` |
| Local receiver simulation | `http://127.0.0.1:4392` |

The external repair Manifest validated independently and the two-round preflight passed 6/6 requests. The worktree was clean at the exact evidence HEAD at admission, and the implementation-to-evidence relationship and Build marker matched. This recheck independently collected public HTML and RSC, every client script loaded by APP-000 and RFQ, Chromium and Firefox runtime states, responsive screenshots, exact accessible-name queries, shared menu/Cookie behavior, CMS edge data, RFQ private handoff and local receiver payload, and consumer/Process status. Developer conclusions were not inherited.

After collection, the worktree became dirty because a second repair iteration began while the held runtime remained on Build `cD6FOWG8iVMbgeRxyIqIS`. This report binds only the admitted commit/Build/runtime above. It neither inspects nor approves those later uncommitted changes.

No external or real buyer form submission was made. One synthetic request was sent only through the held candidate to the supplied local receiver fixture to observe private attribution; the receiver captured no access key.

## 2. Finding closure

| Finding | Result | Independent observation | Affected AC |
|---|---|---|---|
| `APP-000-G9-F01` / `APP000-G9-REPAIR-F01` | **OPEN / REPAIR FAILED** | APP-000's document HTML/RSC and live DOM removed their prior data attributes, and the private cookie itself is opaque. The full public surface is still not clean. One of nine APP-loaded chunks, `/_next/static/chunks/3c5zdncxytccc.js` (SHA-256 `5DC61536…E59348`), exposes Global Chrome/legal/logo contract IDs, `data-site-scope`, `data-source-page`, `siteScope`, `releaseControls`, `packageId` and `contractId`. After the APP RFQ link, RFQ HTML/RSC/DOM expose `APP-000`, Page IDs, `targetPageId`, `siteScope`, review/release/package/contract identifiers and old data-attribute names. RFQ also loads chunk `3eivg6xz9bigt.js` (SHA-256 `E3801911…5995`) containing `APP-000`, Page IDs and source/current/target/scope/control fields. | `APP000-G9-01`, `07`, `13` |
| `APP-000-G9-F02` / `APP000-G9-REPAIR-F02` | **CLOSED** | The private CMS contract contains exactly 30 unique Edge IDs. The last is exactly `APP000-EDGE-SPEC-01`; `APP000-EDGE-SPECIALTY-01` occurs zero times. No Edge audit key is rendered publicly. | `APP000-G9-03`, `06`, `13` |
| `APP-000-G9-F03` / `APP000-G9-REPAIR-F03` | **CLOSED** | In fresh Chromium and Firefox contexts, all six disclosures are open at 1440 and 768, all six are closed at 390, and the first opens by pointer while the second opens by keyboard. The independent default/expanded captures materially match the accepted mobile states and have no horizontal overflow. | `APP000-G9-05`, `09`; interaction portion of `10` |
| `APP-000-G9-F04` / `APP000-G9-REPAIR-F04` | **CLOSED** | At all three viewports in Chromium and Firefox, each of the six category links and three support links is found exactly once by its exact accessible name. The support hrefs are `/products/`, `/documents/`, and `/markets/`; decorative arrows do not enter the accessible names. | `APP000-G9-02`, `05`, `08`, `13` |

No separate new Finding is needed: the additional evidence is the still-unclosed public projection scope of F01. F02, F03 and F04 close independently.

## 3. Affected acceptance-condition disposition

| AC | V1.1 result | Evidence-based disposition |
|---|---|---|
| `APP000-G9-01` | **FAIL** | Runtime identity is traceable, but APP-loaded client code and the linked RFQ public projection expose internal contract/control identities. |
| `APP000-G9-02` | **PASS** | Approved body/shared copy remains present; nine repaired link names are exact. |
| `APP000-G9-03` | **PASS** | Exact private 30-edge inventory is restored, including final `SPEC-01`; rendered counts/order remain 8/8/7/4/2/1 without public audit IDs. |
| `APP000-G9-05` | **PASS** | Correct responsive disclosure defaults and pointer/keyboard operation are independently observed. |
| `APP000-G9-06` | **PASS** | Current grades-only omission and Grade/support/RFQ eligibility remain intact. |
| `APP000-G9-07` | **FAIL** | Both body RFQ paths retain a clean URL, empty Grade/Application and a working opaque private cookie; however RFQ HTML/RSC/DOM and its client chunk also publicly expose `APP-000` and control contracts. Attribution is therefore not private-only. |
| `APP000-G9-08` | **PASS** | Exact category/support names, breadcrumb, Applications-current state, compact menu, footer/legal and Cookie Settings semantics pass in Chromium and Firefox. Menu and Cookie dialogs close on Escape and return focus. Contact/Terms remain absent. |
| `APP000-G9-09` | **PASS** | 1440/768 and 390 default/expanded states are coherent, unclipped and without horizontal overflow; 390 now matches the accepted collapsed default. |
| `APP000-G9-10` | **NOT_VERIFIED / OPEN** | Current Chromium/Firefox, keyboard, focus, responsive interaction and reduced-motion contexts were checked. Physical touch, native browser 200% zoom and a named screen reader/AT were not tested or claimed. |
| `APP000-G9-11` | **PASS** | The repaired public projection does not contaminate the already accepted metadata/canonical/robots/lang result. |
| `APP000-G9-13` | **FAIL** | Buyer-visible text and accessible names are clean, but loaded client payloads and RFQ HTML/RSC/DOM contain governance/control/internal identities. |
| `APP000-G9-15` | **PASS_FOR_SUPPLIED_LOCAL_CANDIDATE** | No foreign/shared content entered the rechecked public or receiver surfaces. This remains a local candidate claim, not production persistence evidence. |

Unaffected V1.0 PASS results for `APP000-G9-04`, `12`, `14` remain applicable because the same approved contracts and failure/state evidence are bound to the new Manifest, the repair diff does not contradict them, and the targeted runtime produced no counterevidence.

## 4. Shared and integration regression

- Both browsers show Applications as current in the mobile menu. The menu contains the approved nine links, closes with Escape and returns focus.
- Cookie Settings remains a button. Its dialog opens, identifies `Cookie settings`, closes with Escape and returns focus. Footer legal targets remain unchanged.
- All nine named `APP000-G9-16` consumers still return 404. This keeps existing `G9-T4A5-F02` open only at the integration layer; it is not a repaired APP-000 regression.
- Chloride returns 200. Its one exact `Explore Applications` link activates by keyboard to APP-000, reaches the correct EN H1 and canonical, and Back returns to the Chloride H1 with Products current.
- Sulfate still returns 404, so its existing `G9-FIVE-F01` / `SU-G9-09` / `SU-DEP-01` route dependency remains open. APP-000 does not own that page.

The full-suite evidence retains one existing five-core evidence hash mismatch. It does not involve a repaired APP-000 file or contradict the independent runtime results, so it is not an APP-000 Finding.

## 5. Four-layer QA record

| Layer | V1.1 result | Meaning |
|---|---|---|
| `RECHECK_SCOPE_STATUS` | `PASS / TARGETED_F01_F02_F03_F04_AND_AFFECTED_AC_CHECKED` | Exact repair candidate, all four return Findings and the expanded APP/RFQ HTML, RSC, client-payload, page/shared/RFQ/integration surfaces were independently checked. |
| `PAGE_GATE9_STATUS` | `NOT_PASS / F01_REPAIR_AND_REQUIRED_DEVICE_AT_EVIDENCE_OPEN` | F02–F04 close. F01 keeps `APP000-G9-01/07/13` failed, and `APP000-G9-10` physical touch, native 200% and named AT evidence remains open. |
| `INTEGRATION_STATUS` | `NOT_READY / G9-16_CONSUMERS_AND_SULFATE_OPEN` | Nine consumer routes and Sulfate remain 404. Chloride route subcondition passes. |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` | Gate 10, merge, deployment, publication and indexing authority were not granted by this review. |

## 6. Gate 8 return data

```json
{
  "gate8_pass_notice": null,
  "reason": "APP-000-G9-F01 remains open on loaded client payloads and the RFQ public projection"
}
```

```json
{
  "gate8_repair_return": {
    "notice_type": "TARGETED_SCOPE_PARTIAL_PASS_F01_REPAIR_REQUIRED",
    "recheck_scope_status": "PASS / TARGETED_F01_F02_F03_F04_AND_AFFECTED_AC_CHECKED",
    "page_gate9_status": "NOT_PASS / F01_REPAIR_AND_REQUIRED_DEVICE_AT_EVIDENCE_OPEN",
    "integration_status": "NOT_READY / G9-16_CONSUMERS_AND_SULFATE_OPEN",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "0144b303d0546dc5bb7012e4292df6339f851b78",
    "evidence_head": "87f48dc6eb0489ab26822280918dd0248efe6e05",
    "build_id": "cD6FOWG8iVMbgeRxyIqIS",
    "closed_findings": ["APP-000-G9-F02", "APP-000-G9-F03", "APP-000-G9-F04"],
    "open_findings": ["APP-000-G9-F01"],
    "failed_acceptance_conditions": ["APP000-G9-01", "APP000-G9-07", "APP000-G9-13"],
    "formal_report_path": "pages/applications/07_qa/APP-000_GATE9_TARGETED_INDEPENDENT_RECHECK_V1.1.md",
    "remaining_items": [
      {"id":"APP-000-G9-F01","owner":"Gate 8 APP/global Chrome/RFQ public-projection owners","closure":"Zero governance/control/internal identifiers across APP and RFQ HTML, DOM, RSC, all loaded client chunks, browser-facing APIs, head, Schema and accessibility surfaces; preserve opaque private RFQ attribution and empty fields"},
      {"id":"APP000-G9-10","owner":"Gate 9 accessibility/environment owner","missing":"physical touch, native browser 200% zoom, named screen reader/AT"},
      {"id":"G9-T4A5-F02 / APP000-G9-16","owner":"nine consumer page owners","state":"nine routes return 404"},
      {"id":"G9-FIVE-F01 / SU-G9-09 / SU-DEP-01","owner":"PRODUCT-PROC-SU owner","state":"Sulfate route returns 404"},
      {"id":"CL receiver subcondition","owner":"PRODUCT-PROC-CL owner","state":"APP-000 closes only the Chloride route subcondition"}
    ],
    "gate8_should_stop_return_work": false
  }
}
```

## 7. Evidence and limits

The companion `APP-000_GATE9_TARGETED_RECHECK_EVIDENCE_INDEX_V1.1.json` contains SHA-256 identities for the report, independent collector, raw public HTML/RSC, JSON observations, responsive captures, validator and preflight. All were collected or read directly against this candidate.

This report does not claim physical-touch, native-200%-zoom or named-AT coverage. It does not modify D16 implementation, CMS, tests, runtime, branch, consumers or Process pages, and it does not update the APP-000 Manifest, project Status/Index, merge state or release state.
