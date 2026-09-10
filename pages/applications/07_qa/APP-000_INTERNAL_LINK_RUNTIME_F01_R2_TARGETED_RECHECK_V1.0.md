# APP-000 Internal Link Runtime F01 R2 Targeted Recheck V1.0

Date: 2026-09-08. Reviewer: `/root/app000_internal_link_planning`. Mode: `RUNTIME_REVIEW / TARGETED_RECHECK / INDEPENDENT / READ_ONLY`. Page: `APP-000`, EN, `/applications/`, `site_scope=tio2-my`.

Result: **`REVIEW_PASS`** for the authorized F01-R2 runtime-link/public-boundary scope. `APP-000-G9-F01` now satisfies the closure condition missed by R1: APP and RFQ are clean across raw HTML, raw RSC, hydrated DOM, head, Schema, accessibility output, inline scripts, browser state and every loaded client script. Both browser-facing RFQ APIs are clean, while `APP-000` appears only in the server-local receiver payload. F02 and F04 remain passed. No new Finding was raised.

This was a local receiver simulation. One test quotation payload was sent only to the supplied server-local fixture at `127.0.0.1:4392`; no external receiver, customer, email service or production system was contacted.

## 1. Exact candidate and preflight

| Object | Identity / result |
|---|---|
| Worktree / state | `D:/16Wordpress_nextjs/.worktrees/app000-gate8`; clean before and after independent collection |
| Implementation | `6ece488cf88f060457890ad7f37da0db752564ef` |
| Evidence HEAD | `f6ca423acee1282b8abe71acc5a77f159578926b`; implementation is its ancestor |
| Build | `.next-app000-r2b` / `maNqNFg3Urit7VkLTu5KM`; runtime Build Manifest returned 200 |
| Runtime | `http://127.0.0.1:4391` |
| D23 evidence Manifest | `docs/architecture/APP000_GATE8_REPAIR_R2_EVIDENCE_MANIFEST_V1.0.json`; SHA-256 `1B0C77D138EE1CD744282E9F558F04309EA31D65C4540DF704060EDA065E91D9` |
| D23 Manifest validation | `PASS`; SHA-256 `789E468C60182994517A47820FC9DE22D91C481B0C45BCA304443215219C00BD` |
| D23 two-round preflight | `PASS`; SHA-256 `6CC996831824730E09FB0B0B52D5DED1862DB423FF78E9215D4BA8222519B9D1` |

## 2. Independent evidence

| Evidence | Coverage | SHA-256 |
|---|---|---|
| `APP-000_GATE9_F01_R2_INTERNAL_LINK_RECHECK_V1.0/APP-000_GATE9_F01_R2_INDEPENDENT_RUNTIME_EVIDENCE_V1.0.json` | APP/RFQ public boundaries, all loaded scripts, two public APIs, server-local receiver, F02/F04 and six shared RFQ consumers | `25374577BF1D55F1AB6CC2BE6BD8023546504B3A4230B959E0F0ACEA0061BB7B` |
| `APP-000_GATE9_F01_R2_INTERNAL_LINK_RECHECK_V1.0/collect-f01-r2-recheck.cjs` | Independently executed collector | `9B8D801F7EBF75BB948422CB8D1CFB46013C3A68613933525E3D1C94E5F2B312` |
| `APP-000_GATE9_F01_R2_INTERNAL_LINK_RECHECK_V1.0/APP-000_GATE9_F01_R2_INTEGRATION_STATUS_EVIDENCE_V1.0.json` | Nine consumers and two Process routes | `997432D1DCACBAF35C1D35F328E02591125C1C246734A75150E83CF91A8125BE` |

The scan pattern covers APP/Edge IDs, current TiO2 Malaysia internal Page-ID families, Gate/package/contract identifiers, public control `data-*` attributes, Page/source/target/scope/audit property names and the retired scoped browser API path. It does not classify approved public brand-asset paths as a control-field leak.

## 3. F01-R2 public-boundary result

### APP-000

`/applications/` returned 200 with canonical `https://tio2malaysia.com/applications/`.

| Public surface | Actual marker matches |
|---|---:|
| Raw HTML | 0 |
| Raw RSC | 0 |
| Hydrated DOM | 0 |
| Head | 0 |
| Schema | 0 |
| Accessibility snapshot | 0 |
| Inline scripts | 0 |
| Browser storage/history state | 0 |
| Ten loaded client scripts, including raw-response and Performance Resource Timing discoveries | 0 |

This closes the R1 defect where an APP-loaded client chunk still contained shared legal/package and public-source control identities.

### APP-reached RFQ receiver

The first APP body RFQ action reached the clean `http://127.0.0.1:4391/request-a-quote` URL with an empty query. Grade and Application were both empty and remained editable.

| Public surface | Actual marker matches |
|---|---:|
| Raw HTML | 0 |
| Raw RSC | 0 |
| Hydrated DOM | 0 |
| Head | 0 |
| Schema | 0 |
| Accessibility snapshot | 0 |
| Inline scripts | 0 |
| Browser storage/history state | 0 |
| Ten loaded client scripts | 0 |

This closes the R1 defect where RFQ HTML/RSC/DOM and client bundles exposed `APP-000`, `CONV-RFQ`, Page/scope/source/target fields and shared contract identifiers.

### Browser-facing APIs and private receiver

| Boundary | Actual result |
|---|---|
| `POST /api/rfq/context` | HTTP 204; request method, URL, response headers and body contained 0 internal-marker matches. |
| Context cookie | `rfq_context`; `HttpOnly=true`; `SameSite=Strict`; opaque value did not contain `APP-000`. |
| `POST /api/rfq/submit` | HTTP 200 against the local simulation; public request body, URL, response headers and response body contained 0 internal-marker matches. |
| Server-local receiver capture | Contained `source_page_id=APP-000`; receiver payload retained server-only control fields; no `access_key` was forwarded. |
| External transmission | None. Receiver host was `127.0.0.1:4392`. |

The result proves the intended separation: the browser receives clean buyer fields and opaque state, while the server adds APP attribution only when forwarding to the local receiver.

Disposition: **`APP-000-G9-F01 = CLOSED_IN_F01_R2_TARGETED_RECHECK / PASS`**.

## 4. Shared RFQ regression sample

The current shared Header RFQ action was independently exercised on six affected consumers:

| Source | Activation | Result |
|---|---|---|
| Home `/` | Pointer | 200 source; clean link; generic context API 204; opaque HttpOnly cookie; clean RFQ URL and empty Grade/Application; Back returned Home. |
| Markets `/markets/` | Keyboard | Same result; Back returned Markets. |
| Products `/products/` | Pointer | Same result; Back returned Products. |
| Documents `/documents/` | Keyboard | Same result; Back returned Documents. |
| Resources `/resources/` | Pointer | Same result; Back returned Resources. |
| Chloride `/products/chloride-process-titanium-dioxide/` | Keyboard | Same result; Back returned Chloride. |

For all six:

- the visible link HTML contained zero internal-marker matches;
- the loaded shared script containing `/api/rfq/context` contained zero matches;
- the context API response contained zero matches;
- URL query, Grade and Application remained empty;
- attribution cookie was opaque, HttpOnly and SameSite Strict.

No adjacent shared-link regression was found.

## 5. F02 and F04 regression

### `APP-000-G9-F02`

The private contract and public rendering retain 30 occurrences in 8/8/7/4/2/1 order. All 30 stable Edge IDs match the approved inventory, including `APP000-EDGE-SPEC-01`; all 30 runtime labels/hrefs match their private tuples. Fourteen distinct Grade routes returned 200 with exact clean canonicals.

Result: **`PASS / REMAINS_CLOSED`**.

### `APP-000-G9-F04`

All six category links and all three support links have exactly one approved accessible-name match. Accessibility snapshots show the names without decorative symbols, and zero link names contain `↓` or `→`.

Result: **`PASS / REMAINS_CLOSED`**.

F03 was not reopened by this link/public-boundary recheck.

## 6. Integration state remains separate

All nine `APP000-G9-16` consumer routes still return 404, so existing `G9-T4A5-F02` remains open with the consumer/integration owners. Chloride returns 200 and retains four `/applications/` links. Sulfate remains 404 and stays open with its owner. None of these route states changes the F01/F02/F04 page-repair result or authorizes deleting approved links.

## 7. Four-layer status and Gate 8 notice data

| Layer | Result |
|---|---|
| `RECHECK_SCOPE_STATUS` | **`PASS / F01_R2_AND_F02_F04_REGRESSION_COMPLETE`** |
| `PAGE_GATE9_STATUS` | **`TARGETED_REPAIR_PASS / F01_F02_F04_CLOSED`**. Overall Gate 9 remains with the main Reviewer/Controller, including any evidence outside this targeted scope. |
| `INTEGRATION_STATUS` | **`NOT_READY / NINE_CONSUMERS_AND_SULFATE_OPEN`**. Chloride route remains available. |
| `RELEASE_STATUS` | **`NOT_AUTHORIZED`** |

```json
{
  "gate8_pass_notice": {
    "notice_type": "TARGETED_REPAIR_SCOPE_PASS",
    "recheck_scope_status": "PASS / F01_R2_AND_F02_F04_REGRESSION_COMPLETE",
    "page_gate9_status": "TARGETED_REPAIR_PASS / F01_F02_F04_CLOSED",
    "integration_status": "NOT_READY / NINE_CONSUMERS_AND_SULFATE_OPEN",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "6ece488cf88f060457890ad7f37da0db752564ef",
    "evidence_head": "f6ca423acee1282b8abe71acc5a77f159578926b",
    "build_id": "maNqNFg3Urit7VkLTu5KM",
    "closed_findings": ["APP-000-G9-F01"],
    "regression_findings_passed": ["APP-000-G9-F02", "APP-000-G9-F04"],
    "open_integration_items": ["G9-T4A5-F02", "G9-FIVE-F01/SU-G9-09/SU-DEP-01"],
    "gate8_should_stop_f01_r2_work": true,
    "report_path": "D:/23MySec/pages/applications/07_qa/APP-000_INTERNAL_LINK_RUNTIME_F01_R2_TARGETED_RECHECK_V1.0.md"
  }
}
```

This report is returned to the Project Controller. It does not update the APP-000 Manifest, close overall Gate 9, merge the branch or authorize deployment/publication.
