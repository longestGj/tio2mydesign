# APP-000 Gate 9 Independent Read-Only Acceptance V1.0

Date: 2026-09-08  
Reviewer: `/root/app000_gate9_review`  
Mode: independent, read-only acceptance; no D16 implementation, CMS, test, branch, runtime, merge, deployment or release change  
Real form submission: **not performed**

## 1. Candidate and method conclusion

The inspected candidate is fixed to:

| Field | Exact identity |
|---|---|
| D16 worktree | `D:/16Wordpress_nextjs/.worktrees/app000-gate8` |
| Branch | `codex/app000-gate8` |
| Baseline | `cfe9ef37ca3a8d9c6b05365ca6b09bcd22baf670` |
| Implementation commit | `f0285f288e256ce0c48205931dd8edf4b802b285` |
| Evidence HEAD / inspected HEAD | `ce3f4c5c21033e56472ec53586173279fb78c415` |
| Build ID | `jf9b1VFzbgKGSQMVOMMbU` |
| Build directory | `.next-app000-f0285f2` |
| Next runtime | `http://127.0.0.1:4391` |
| CMS fixture | `http://127.0.0.1:4390/graphql` |
| Evidence mode | actual local Next runtime backed by the supplied scoped CMS simulation fixture |

The D23 evidence Manifest validates, the D16 worktree is clean at the exact evidence HEAD, the implementation commit is its ancestor, the Build marker matches, and the two-round preflight passed 6/6 requests. All `APP000-G9-01…17` were assessed. The page cannot pass Gate 9 in this candidate: the public response exposes internal control identities, one of the 30 edge keys differs from the approved contract, and the six mobile disclosures are open by default instead of matching the accepted collapsed 390 state. Required native 200% zoom, physical-touch and named assistive-technology evidence is also not available in this review.

## 2. Four status layers

| Layer | Result | Basis |
|---|---|---|
| `RECHECK_SCOPE_STATUS` | `PASS / EXACT_CANDIDATE_AND_ALL_17_IDS_CHECKED` | Manifest, Git/Build/runtime preflight passed and every stable AC received a disposition. |
| `PAGE_GATE9_STATUS` | `NOT_PASS / GATE8_REPAIR_AND_ACCESSIBILITY_EVIDENCE_REQUIRED` | `APP000-G9-01`, `03`, `05`, `07`, `09`, `13` fail; `G9-10` remains partly `NOT_VERIFIED`. |
| `INTEGRATION_STATUS` | `NOT_READY / CONSUMER_AND_SULFATE_REGRESSIONS_OPEN` | All nine `G9-16` consumers return 404; Chloride passes its route subcondition, while Sulfate remains 404 under `G9-17`. |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` | Gate 10, publication and indexing authority are outside this review. |

## 3. Acceptance-condition coverage

| AC | Result | Actual observation and evidence |
|---|---|---|
| `APP000-G9-01` | **FAIL** | `/applications/` is HTTP 200, EN, correct H1 and exact candidate, but raw HTML/RSC exposes `APP-000`, `tio2-my`, target Page IDs and audit keys. See `independent-public-projection-audit.json`, `app000-runtime-response.html`, F01. |
| `APP000-G9-02` | **PASS** | Actual body follows breadcrumb → Hero → M2 → M3 → M4 → M5, uses the approved grades-only sentences, omits child actions, contains no Contact/Terms, and retains current shared opening/closing. See runtime observations, screenshots and interaction observations. |
| `APP000-G9-03` | **FAIL** | Counts, order, labels, hrefs and 8/8/7/4/2/1 grouping are correct; however occurrence 30 is `APP000-EDGE-SPECIALTY-01`, while approved §5 requires `APP000-EDGE-SPEC-01`. See projection audit and F02. |
| `APP000-G9-04` | **PASS** | Supplied conditional matrix and inspected implementation cover full, applications-only, grades-only, mixed and no-destination branches without empty shells. Actual candidate correctly renders grades-only. No-script retains 30 links and core content. |
| `APP000-G9-05` | **FAIL** | Chromium and Firefox passed all 21 combinations of seven anchors by pointer, keyboard and direct URL; all 30 Grade links remain accessible and no selection occurs. The 390 initial disclosure state is wrong: all six are open instead of collapsed. See interaction/runtime observations and F03. |
| `APP000-G9-06` | **PASS** | Five unavailable child actions are atomically omitted; 30 Grade links, three support links and two RFQ links resolve within the supplied same-scope candidate. Fourteen deduplicated Grade endpoints and all four support destinations returned 200. |
| `APP000-G9-07` | **FAIL** | Both RFQ actions reach the clean `/request-a-quote` URL and privately carry `APP-000` in history state; Grade and Application remain empty/editable and no form was submitted. The source Page ID is also shipped publicly in six `data-source-page` attributes and RSC, so “private only” fails. See projection audit, interaction observations and F01. |
| `APP000-G9-08` | **PASS** | Breadcrumb, desktop/mobile primary navigation, footer/legal instances and Cookie Settings semantics were checked. Applications is current, menu and Cookie dialog open/close by keyboard with focus return, and Contact/Terms are absent. See screenshots, interaction and route integration evidence. |
| `APP000-G9-09` | **FAIL** | 1440/768/390 layouts have no material clipping, overlap or horizontal overflow; menu and Cookie states are visually coherent. The default 390 page materially differs from accepted Gate 4 because all disclosure contents are expanded. See four screenshots and F03. |
| `APP000-G9-10` | **NOT_VERIFIED** | Chromium and Firefox, keyboard/focus, menu/Cookie Escape behavior, disclosure input, reduced-motion configuration and 390 emulation were covered. Native 200% browser zoom, a physical touch device and a named screen reader/AT were not available; the condition therefore remains open as `APP-000-G9-NV01`. |
| `APP000-G9-11` | **PASS** | Title, description, Open Graph, canonical `https://tio2malaysia.com/applications/`, `lang=en` and candidate `noindex, nofollow` match. Query/fragment requests retain the clean canonical and do not reflect an injected source value. |
| `APP000-G9-12` | **PASS** | Actual grades-only page has CollectionPage and BreadcrumbList and correctly omits child ItemList/mainEntity at zero eligible child destinations. Supplied conditional tests/source inspection cover 1–5 child cardinality and parity. |
| `APP000-G9-13` | **FAIL** | Buyer-visible copy is clean, but browser-delivered HTML/RSC includes `data-site-id`, seven `data-site-scope`, six `data-source-page`, thirty `data-grade-occurrence`, three support Page IDs and serialized Page-ID/scope fields. See F01. |
| `APP000-G9-14` | **PASS_FOR_SUPPLIED_LOCAL_CANDIDATE** | Correct, invalid, same-scope warm/invalidation/refresh-failure/recovery behavior is supported by the manifest evidence and inspected implementation; actual correct data rendered through the supplied GraphQL fixture into Next. This does not claim an independently observed production WordPress runtime. |
| `APP000-G9-15` | **PASS_FOR_SUPPLIED_LOCAL_CANDIDATE** | Negative query/route/cache/menu/SEO/form/media and cross-scope evidence is present and source/runtime sampling found no foreign buyer content or receiver prefill. The supplied CMS endpoint is a local scoped proxy reading committed WordPress plugin configuration; production persistence is outside this candidate claim. |
| `APP000-G9-16` | **FAIL / INTEGRATION OPEN** | All nine named consumers returned 404 in the same candidate. Existing `G9-T4A5-F02` therefore remains open. APP-000 itself does not own or modify these consumers. See route integration evidence. |
| `APP000-G9-17` | **FAIL / PARTIAL** | Chloride is 200 and its keyboard `Explore Applications` action reaches APP-000, preserves clean canonical and passes Back/Return. Sulfate returns 404. This passes only the Chloride route subcondition; it closes neither the Chloride receiver condition nor the Sulfate condition. |

## 4. Findings that require Gate 8 repair

### APP-000-G9-F01 — Public projection exposes internal control identities

- **Layer / AC:** page; `APP000-G9-01`, `07`, `13`.
- **Expected:** Page ID, site scope, source attribution, target Page IDs, route/audit keys and other control fields remain non-public; only the private RFQ handoff and internal CMS/audit records retain the minimum trace.
- **Actual:** the public response contains `data-site-id="tio2-my"` once, `data-site-scope="tio2-my"` seven times, `data-source-page="APP-000"` six times, thirty `data-grade-occurrence` values, three `data-support-action` Page IDs, and RSC serialization of `currentPageId`, `sourcePageId`, `targetPageId` and `siteScope`.
- **Reproduction:** GET `http://127.0.0.1:4391/applications/`; inspect raw HTML and Next RSC payload; search the fields above.
- **Owner:** Gate 8 APP-000 renderer/data projection and shared RFQ-link implementation owners.
- **Closure condition:** raw HTML, DOM attributes, RSC/browser-facing API, head, Schema and accessibility output contain none of these internal identifiers; the two RFQ links still deliver private `APP-000` attribution to the receiver, leave Grade/Application empty, and CMS/audit trace remains available only privately.
- **Evidence:** `independent-public-projection-audit.json`, `app000-runtime-response.html`, `independent-runtime-observations.json`.

### APP-000-G9-F02 — Specialty occurrence key differs from the approved 30-edge contract

- **Layer / AC:** page; `APP000-G9-03`.
- **Expected:** final §5 occurrence key `APP000-EDGE-SPEC-01`.
- **Actual:** CMS fixture, runtime and Gate 8 inventory use `APP000-EDGE-SPECIALTY-01`; the approved key is absent.
- **Reproduction:** inspect the Specialty Materials occurrence in CMS contract or runtime inventory.
- **Owner:** Gate 8 APP-000 data/contract implementation owner.
- **Closure condition:** the internal exact 30-edge record uses `APP000-EDGE-SPEC-01` with the approved CR-901 position/label/href/target/canonical/lang/scope. Public rendering must also satisfy F01 by omitting audit keys.
- **Evidence:** `independent-public-projection-audit.json`, `independent-cms-observation.json`.

### APP-000-G9-F03 — Mobile disclosure default does not match accepted Gate 4

- **Layer / AC:** page; `APP000-G9-05`, `09`.
- **Expected:** at 390 default, all six Grade disclosures are collapsed; the expanded state exposes all 30 in approved order. At desktop/tablet default they remain open. Pointer and keyboard must toggle each disclosure, with core content usable without JavaScript.
- **Actual:** all six `<details>` are initially open at 390 in Chromium and Firefox. Pointer/keyboard toggling works after load, but the accepted default state is not implemented.
- **Reproduction:** open `/applications/` in a fresh 390-wide context and inspect the six disclosure states before interaction.
- **Owner:** Gate 8 APP-000 page implementation owner.
- **Closure condition:** fresh 390 default shows all six closed, each opens by pointer and keyboard and exposes all 30 links in order; desktop/tablet default remains open; no-script core usability remains intact.
- **Evidence:** `mobile-390.png`, `independent-runtime-observations.json`, `independent-interaction-observations.json`, accepted comparators `pages/applications/04_planning/gate4-v1.0/approval_core/APP-000_G4_full_390_default_V1.0.png` and `APP-000_G4_full_390_expanded_V1.0.png`.

## 5. Open evidence and integration items

| ID | Verified | Missing / owner / sufficient closure evidence |
|---|---|---|
| `APP-000-G9-NV01` | Current Chromium and Firefox emulation, focus, keyboard, reduced motion and control operation. | Native browser 200% zoom, physical touch and one named screen reader/AT. Gate 9 accessibility/environment owner can close with named device/browser/AT, viewport/zoom, operations, result and durable capture tied to this repaired candidate. |
| `G9-T4A5-F02` | All nine required consumer routes independently requested. | Each is 404. Their page owners must make their approved Applications instance reach APP-000 and preserve accepted body/head/nav; rerun keyboard activation and Back/Return in the same candidate. |
| `CL-G9-F02` / `CL-G9-17` route subcondition | Chloride action reaches APP-000 and Back/Return works. | Receiver subcondition stays with the Chloride owner; APP-000 cannot close the combined Finding. |
| `G9-FIVE-F01` / `SU-G9-09` / `SU-DEP-01` | Sulfate URL independently requested. | Route is 404. Sulfate owner must supply its approved page/action and pass pointer/keyboard/Back/Return without regression. |

The full repository run's two failures were independently assessed: the five-core evidence-hash drift and Site A five-second wrapper timeout do not touch APP-000 files or reproduce in its exact runtime checks. They remain repository baseline quality drift and are not additional APP-000 failures.

## 6. Gate 8 return data

The returned scope is not all PASS, so the method-required pass notice is deliberately not issued:

```json
{
  "gate8_pass_notice": null,
  "reason": "APP-000-G9-F01, APP-000-G9-F02 and APP-000-G9-F03 remain open; APP000-G9-10 also has declared NOT_VERIFIED environments"
}
```

The exact repair return is:

```json
{
  "gate8_repair_return": {
    "notice_type": "PAGE_REPAIR_REQUIRED",
    "recheck_scope_status": "PASS / EXACT_CANDIDATE_AND_ALL_17_IDS_CHECKED",
    "page_gate9_status": "NOT_PASS / GATE8_REPAIR_AND_ACCESSIBILITY_EVIDENCE_REQUIRED",
    "integration_status": "NOT_READY / CONSUMER_AND_SULFATE_REGRESSIONS_OPEN",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "f0285f288e256ce0c48205931dd8edf4b802b285",
    "evidence_head": "ce3f4c5c21033e56472ec53586173279fb78c415",
    "build_id": "jf9b1VFzbgKGSQMVOMMbU",
    "open_page_findings": ["APP-000-G9-F01", "APP-000-G9-F02", "APP-000-G9-F03"],
    "open_page_evidence": ["APP-000-G9-NV01"],
    "open_integration_items": ["G9-T4A5-F02", "G9-FIVE-F01/SU-G9-09/SU-DEP-01", "CL receiver subcondition"],
    "gate8_should_stop_return_work": false
  }
}
```

## 7. Durable evidence

The companion index is `APP-000_GATE9_EVIDENCE_INDEX_V1.0.json`. Its records bind each artifact to this candidate, reviewer, collection mode and proved ACs. Principal artifacts are:

- manifest validation and two-round preflight;
- raw runtime response and public projection audit;
- independent Chromium/Firefox runtime and interaction observations;
- 1440, 768, 390, mobile-menu and Cookie-dialog captures;
- CMS fixture observation and route/integration observations;
- the exact collector scripts used to create the independent observations.

The approved source-side comparators were read from `pages/applications/04_planning/gate4-v1.0/approval_core/`, and the Gate 5 visual disposition and Gate 6 binding were read from `pages/applications/05_review/APP-000_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` and `pages/applications/06_handoff/APP-000_GATE6_HANDOFF_PACKAGE_V1.1.md`.

This report does not update the APP-000 Manifest, project status/index, D16 branch or Gate closure.
