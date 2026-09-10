# APP-000 Internal Link Runtime Targeted Recheck V1.0

Date: 2026-09-08. Reviewer: `/root/app000_internal_link_planning`. Mode: `RUNTIME_REVIEW / TARGETED_RECHECK / INDEPENDENT / READ_ONLY`. Page: `APP-000`, EN, `/applications/`, `site_scope=tio2-my`.

Result: **`CHANGES_REQUIRED`**. `APP-000-G9-F02` and `APP-000-G9-F04` pass their targeted closure conditions. `APP-000-G9-F01` remains open: the APP first-response HTML/RSC and hydrated DOM are clean, but internal control identities remain in an APP-loaded public client chunk and throughout the RFQ receiver's HTML/RSC/DOM/client bundle. The nine consumer 404s and Sulfate 404 remain integration dependencies and are not APP repair failures.

No development file, approved contract, Manifest, Status or Index was edited by this reviewer. No quotation form was submitted. This report does not close Gate 9 or authorize Gate 10.

## 1. Candidate and evidence binding

| Object | Exact identity / observation |
|---|---|
| Worktree | `D:/16Wordpress_nextjs/.worktrees/app000-gate8` |
| Implementation | `0144b303d0546dc5bb7012e4292df6339f851b78` |
| Evidence HEAD | `87f48dc6eb0489ab26822280918dd0248efe6e05` |
| Build | `.next-app000-0144b30` / `cD6FOWG8iVMbgeRxyIqIS` |
| Runtime | `http://127.0.0.1:4391` |
| Repair receipt | `docs/verification/app000/gate8-repair-01/GATE9_REPAIR_RETURN_RECEIPT_2026-09-08.md` |
| Independent runtime evidence | `APP-000_GATE9_RUNTIME_LINK_TARGETED_RECHECK_V1.0/APP-000_GATE9_RUNTIME_LINK_TARGETED_EVIDENCE_V1.0.json`; SHA-256 `07D58ED3AACB203FB5ABB1C63283986527375E1DB5266B509DABA67A7E968BBA` |
| Independent collector | `APP-000_GATE9_RUNTIME_LINK_TARGETED_RECHECK_V1.0/collect-targeted-runtime-link-recheck.cjs`; SHA-256 `A5F39C1D7C6A77E38B01606BFD9B5A1AC97874A7C413E832DACF40C90B6C0729` |
| Candidate drift evidence | `APP-000_GATE9_RUNTIME_LINK_TARGETED_RECHECK_V1.0/APP-000_GATE9_TARGETED_CANDIDATE_DRIFT_EVIDENCE_V1.0.json`; SHA-256 `C64C1DCAB759FA921DD559D8B128A14DA04304CCDC134D34913889592AAD09A7` |

At the start of the recheck, Git HEAD equalled the supplied evidence HEAD, the implementation was its ancestor and the worktree was clean. After runtime collection, HEAD remained exact but four shared/RFQ source files had acquired uncommitted changes from a concurrent task. The held runtime still served the supplied Build ID: its Build Manifest returned 200. All conclusions below bind to that held Build; the later uncommitted source changes are not inherited, reviewed or treated as a repair candidate.

## 2. Finding disposition

| Finding | Targeted result | Gate 8 status |
|---|---|---|
| `APP-000-G9-F01` — public projection exposes internal control identities | **`OPEN / FAIL`** | Continue repair. APP first-response surfaces improved, but browser-delivered chunk and RFQ receiver surfaces fail. |
| `APP-000-G9-F02` — Specialty occurrence key differs from approved contract | **`CLOSED_IN_TARGETED_RECHECK / PASS`** | Gate 8 may stop work on F02. |
| `APP-000-G9-F04` — decorative arrows alter approved accessible names | **`CLOSED_IN_TARGETED_RECHECK / PASS`** | Gate 8 may stop work on F04. |

The main Gate 9 report's stable IDs control this recheck. Earlier internal-link report IDs are only historical evidence mappings.

## 3. `APP-000-G9-F01` remains open

### 3.1 What is now clean

The held APP page returned 200 with canonical `https://tio2malaysia.com/applications/`. The independent forbidden-field scan found:

| APP surface | Matches |
|---|---:|
| Raw HTML | 0 |
| Raw RSC response | 0 |
| Hydrated DOM | 0 |

The scan covers `APP-000`, APP Edge IDs, `GLOBAL-CHROME-005`, control `data-*` attributes and serialized `currentPageId`, `sourcePageId`, `targetPageId`, `siteScope`, `edgeId`, `contractId`, `pageId`, `packageId` and `reviewId` fields. Literal `tio2-my` remains only inside approved public brand-asset paths such as `/tio2-my/brand/...`; those paths are not treated as a `siteScope` field.

The buyer RFQ path also improved. Activating the first body RFQ link:

- issued a same-origin POST to `/api/tio2-my/rfq-attribution` and received 204;
- set an opaque `HttpOnly`, `SameSite=Strict` cookie whose value did not contain `APP-000`;
- reached the clean `/request-a-quote` URL with no query;
- left Grade and Application empty and editable;
- did not submit the form.

These observations pass the private handoff and clean buyer-navigation portion of F01.

### 3.2 Remaining APP-loaded public client-chunk leak

The APP page loads `/_next/static/chunks/3c5zdncxytccc.js`. Independent scanning found **17** control-marker matches in that browser-delivered JavaScript. They include:

- `GLOBAL-CHROME-005`;
- serialized `contractId`, `packageId`, `pageId` and `siteScope` fields from the legal/consent package;
- public `data-site-scope` and `data-source-page` code paths;
- `SourcePageId`/public-source control naming.

The APP DOM branch does not currently emit those attributes, but the control implementation and contracts are still delivered to the buyer's browser. Gate 6 §2 and `APP000-G9-13` cover browser-facing APIs/viewmodels and public delivery, so a clean DOM alone cannot close F01.

### 3.3 Remaining RFQ receiver leak

After the authorized APP link navigation, the receiver still exposes internal identities:

| RFQ surface | Matches | Representative fields |
|---|---:|---|
| Raw HTML | 19 | `APP-000`, `GLOBAL-CHROME-005`, `data-page-id`, `data-site-scope`, `data-source-page`, `data-module` |
| Raw RSC | 20 | `APP-000`, `packageId`, `reviewId`, `pageId`, `siteScope`, `contractId`, `targetPageId`, `GLOBAL-CHROME-005` |
| Hydrated DOM | 19 | Same public attributes/control values as HTML |
| Two RFQ client chunks | 47 | Full RFQ/shared control names and identities, including the above fields |

The RFQ RSC serializes the complete page/control structures, including `CONV-RFQ` identity, shared Chrome target Page IDs and the approved-source list containing `APP-000`. This is a browser-facing receiver surface reached by the APP action, so it remains within F01's stated closure check. It does not invalidate the opaque-cookie behavior; it shows that private attribution was fixed while public projection was only partially fixed.

### 3.4 Precise repair boundary

F01 needs one further Gate 8 repair across the exact browser boundary:

1. Project the shared Chrome, legal/consent and RFQ page models to buyer-safe fields before they enter any Client Component or RSC payload.
2. Stop bundling private legal/package/control contracts and legacy public-source attribute branches into JavaScript loaded by APP-000.
3. Remove Page/scope/source/module control attributes and full control objects from the RFQ HTML, RSC, hydrated DOM and RFQ client bundle.
4. Preserve the working clean URL, opaque HttpOnly attribution cookie and server-only source injection. The public API route name and approved brand-asset paths do not themselves need renaming.

Closure requires a newly bound commit/HEAD/Build/runtime and zero control-field matches across APP HTML/RSC/DOM/loaded client chunks and the APP-reached RFQ HTML/RSC/DOM/loaded client chunks. The RFQ action, empty fields, Back behavior and private attribution must still pass. A DOM-only or raw-HTML-only scan is insufficient.

## 4. `APP-000-G9-F02` passes

The private approved relationship contract contains exactly 30 Grade occurrences with the required 8/8/7/4/2/1 distribution. All 30 internal tuples match the Gate 6 inventory in order, including final occurrence:

`APP000-EDGE-SPEC-01` / `CR-901` / `/products/cr-901/`.

The public runtime renders all 30 labels and hrefs in the same order without exposing Edge IDs. All 30 label/href pairs match, and all 14 distinct Grade destinations returned 200 with their correct `tio2malaysia.com` canonical. Pointer M-350 and keyboard CR-901 activation both reached the intended Grade and Back returned to APP.

Disposition: **`APP-000-G9-F02 = CLOSED_IN_TARGETED_RECHECK / PASS`**.

## 5. `APP-000-G9-F04` passes

Playwright's runtime accessibility snapshots and exact role/name queries show one exact instance for each approved name:

- categories: `Coatings`, `Plastics`, `Masterbatch`, `Printing Inks`, `Paper`, `Specialty Materials`;
- support: `Explore Products`, `Review Documents`, `Explore Markets`.

There are zero links whose computed accessible name contains `↓` or `→`. The visible arrows remain decorative and absent from the AX names. The category Coatings anchor reached its fragment and Back removed the fragment. The three support actions passed pointer/keyboard activation and Back.

Disposition: **`APP-000-G9-F04 = CLOSED_IN_TARGETED_RECHECK / PASS`**.

## 6. Adjacent shared-link regression

| Check | Result |
|---|---|
| Header / Footer AX | Expected navigation, RFQ, legal links and Cookie Settings semantics present; Applications current. |
| Header Products | Pointer reached Products; Back restored APP. |
| Footer Documents | Keyboard Enter reached Documents; Back restored APP. |
| Breadcrumb Home | Pointer reached Home; Back restored APP. |
| Cookie Settings | Keyboard opened dialog; focus moved to Close; closing restored focus to Cookie Settings. |
| Mobile shared menu | Keyboard opened the named dialog; Applications was current; Escape closed it and restored focus to `Open primary navigation`. |
| RFQ | Clean URL, private opaque cookie, empty Grade/Application and Back behavior passed; no submission. |
| Mobile disclosure adjacency | Fresh 390 runtime showed all six disclosures closed. This is supportive evidence only; full F03 visual/responsive closure remains with the main Gate 9 Reviewer. |

No new shared-link regression was found outside the F01 public-projection boundary above.

## 7. Integration dependencies remain separate

All nine named `APP000-G9-16` consumers still return 404: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK` and `APP-PAPER`. Existing `G9-T4A5-F02` therefore remains open with the consumer/integration owners. No approved target should be removed to mask these 404s.

`PRODUCT-PROC-CL` returns 200 and its body `Explore Applications` passed keyboard activation to APP and Back. This satisfies only the Chloride route subcondition. `PRODUCT-PROC-SU` still returns 404, so the Sulfate route subcondition remains open with its owner. Neither result requires APP page repair.

## 8. Four-layer status and return

| Layer | Targeted recommendation |
|---|---|
| `RECHECK_SCOPE_STATUS` | **`COMPLETE / F02_AND_F04_PASS / F01_OPEN`**. All requested surfaces and adjacent checks were completed against the held Build. Concurrent uncommitted source drift is recorded separately. |
| `PAGE_GATE9_STATUS` | **`NOT_PASS / RETURN_F01_TO_GATE8`**. This report closes only F02 and F04; overall Gate 9 remains with the main Reviewer/Controller. |
| `INTEGRATION_STATUS` | **`NOT_READY / NINE_CONSUMERS_AND_SULFATE_OPEN`**. Chloride route subcondition passes. |
| `RELEASE_STATUS` | **`NOT_AUTHORIZED`**. No merge, deployment, publication or indexing authority is created. |

```json
{
  "gate8_targeted_recheck": {
    "implementation_commit": "0144b303d0546dc5bb7012e4292df6339f851b78",
    "evidence_head": "87f48dc6eb0489ab26822280918dd0248efe6e05",
    "build_id": "cD6FOWG8iVMbgeRxyIqIS",
    "closed_findings": ["APP-000-G9-F02", "APP-000-G9-F04"],
    "open_findings": ["APP-000-G9-F01"],
    "gate8_should_stop_f02_f04_work": true,
    "gate8_should_stop_f01_work": false,
    "report_path": "D:/23MySec/pages/applications/07_qa/APP-000_INTERNAL_LINK_RUNTIME_TARGETED_RECHECK_V1.0.md"
  }
}
```

This report is returned to the Project Controller for coordination. It does not inherit or approve the uncommitted D16 changes observed after collection and does not send a Gate 8 pass notice because the full targeted repair scope is not yet all PASS.
