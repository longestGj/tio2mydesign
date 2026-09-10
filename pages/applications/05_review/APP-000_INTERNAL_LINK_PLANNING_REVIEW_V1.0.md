# APP-000 Internal Link Planning Review V1.0

Date: 2026-09-08. Review ID: `APP-000-IL-PLANNING-01`. Mode: `PLANNING_REVIEW`. Reviewer: `/root/app000_internal_link_planning`, independent of Gate 6 author `/root/app000_gate6_author`. Page scope: `APP-000` only, EN, `/applications/`, `site_scope=tio2-my`. Planned publication set for this review: APP-000 only; the nine existing Gate 9 consumers and two adjacent Process consumers are inspected only as bounded dependency records.

Exact reviewed Gate 6 package: `pages/applications/06_handoff/APP-000_GATE6_HANDOFF_PACKAGE_V1.0.md`, SHA-256 `92FF34AF1111C921821889797543A2C41AC436A79A5BD4C3A92D4D068EA1E680`.

Result: **`CHANGES_REQUIRED`**. The approved link relationships are coherent and no target should be deleted or replaced. Three required Gate 6 handoff gaps remain. This is a planning conclusion: no production/runtime environment was supplied, no HTTP or route-availability claim is made, and all runtime availability conditions remain `NOT_VERIFIED`.

## 1. Authority and evidence binding

The review read the current root entry and project context; Internal Link Review Agent V0.2; Internal Link Verification Skill V0.2; activation contract V1.1; current Gate workflow and applicable governance sections; APP-000 Manifest V1.3; approved Gate 2 B/C; approved Gate 3/4/5 review and closure chain; Applications Playbook and APP-000 Brief; Registry V0.2 and page-keyword master; current shared Header/Footer and Footer legal/no-Terms authorities; Gate 6 author self-check; and the exact package above.

Key source identities verified at review time:

| Source | SHA-256 / disposition |
|---|---|
| `pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.3.md` | `6EC2FD5D1D627A8BD230D8683E4DDA0BD5D51D8EF563B45E69209E6D3467D89C` |
| `pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md` | `C57DB3F8E1AFB9B4D33A1498843CF8228B7FADDECCDAA79C7E6A6D76C1A234B1` |
| `pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md` | `6F7EF60C6BC6CBE5398F9F1CF4E2E713FCFB48CE65BC28FE49D699CA61B26F6E` |
| `pages/applications/04_planning/gate4-v1.0/index.html` | `EA8B5CB0AD39226C9C392103379A09DB5AD7D7A96E725336DC55348EA05230E4`; planning prototype only |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | `3DA1956FE15AD5E15E078BC43FE291804C151BB45528C778F7177C40825A9552` |
| `research/keyword/11_page_keyword_master.csv` | `EF9B37FF9BA70AF8BC1AA65740F99A2CF3B7DF4B08484D72ADD801A5697270C7` |
| `agents/internal-link-review/agent.md` | `2BB392B1C1528ACE216B323925BA7B09D7E5721BC8CADB328BBD22572ED609A3` |
| `skills/internal-link-verification/SKILL.md` | `F2E06F599CA0A9BE00F67BDC7F0FBFCE579408F302F157F6B56DDB8F67E9BA38` |

## 2. Registered, expected and inspected coverage

The complete full-eligibility APP-000 page-owned set has **48 planned link/action instances**:

| Surface | Expected instances | Planning result |
|---|---:|---|
| M1 entry plus six category fragments | 7 | `PASS`: `#application-selector` plus all six exact category fragments are present; pointer, keyboard, direct-fragment, fixed-header visibility and no-selection behavior are assigned to `APP000-G9-05`. |
| Grade relations | 30 occurrences / 14 distinct Grade destinations | Relationship set `PASS`; per-occurrence runtime acceptance coverage `FAIL`, Finding F01. |
| Child Application CTAs | 5 maximum | `PASS`: APP-COAT/PLAS/MB/INK/PAPER, exact registered paths, independently conditional; `PROVISIONAL_URL` is preserved and not represented as runtime-ready. |
| Support cards | 3 | `PASS`: PRODUCT-000 `/products/`, DOC-000 `/documents/`, MARKET-000 `/markets/`; atomic whole-card omission is defined. |
| Page-body RFQ actions | 2 | `PASS`: both use clean CONV-RFQ `/request-a-quote/`; only internal `source_page_id=APP-000` is transported; no public query or Grade/Application prefill is created. |
| Visible breadcrumb Home | 1 | Approved upstream edge exists, but the Gate 6/Gate 9 target-identity acceptance is incomplete; Finding F02. |

Shared-owner instances are state-dependent and therefore are not forced into a page-private DOM count. The required semantic target set is nevertheless fixed: Logo/Home, Home, Markets, Products, Applications, Documents, Resources, About, fixed RFQ, Privacy EN, Privacy BM, Cookie Policy and the non-route Cookie Settings function; the Cookie dialog's Cookie Policy link is also an owner-controlled instance. Contact remains omitted under the accepted current-owner synchronization, and Terms remains prohibited. Exact shared/breadcrumb target coverage is incomplete in the package; Finding F02.

Inbound dependency inspection covered all nine named `G9-T4A5-F02` consumers and the two currently approved Process-page consumers only. It did not reopen, modify or approve those pages.

## 3. Exact APP-000 destination map

### 3.1 Same-page paths

| Accessible label | Exact target | Status |
|---|---|---|
| Explore Applications | `#application-selector` | `PASS_PLANNING` |
| Coatings | `#application-coatings` | `PASS_PLANNING` |
| Plastics | `#application-plastics` | `PASS_PLANNING` |
| Masterbatch | `#application-masterbatch` | `PASS_PLANNING` |
| Printing Inks | `#application-printing-inks` | `PASS_PLANNING` |
| Paper | `#application-paper` | `PASS_PLANNING` |
| Specialty Materials | `#application-specialty-materials` | `PASS_PLANNING` |

The category heading remains visible when its mobile Grade disclosure is closed; the disclosure is directly operable and exposes all Grade relations in source order. Same-page navigation supplies no RFQ selection or hidden state.

### 3.2 Child Application destinations and ItemList

| Order | Label / Page ID | Registered path | Language / scope | Planning status |
|---:|---|---|---|---|
| 1 | Explore Coatings / `APP-COAT` | `/applications/titanium-dioxide-for-coatings/` | EN / `tio2-my` | Conditional; `PROVISIONAL_URL` is not readiness evidence |
| 2 | Explore Plastics / `APP-PLAS` | `/applications/titanium-dioxide-for-plastics/` | EN / `tio2-my` | Conditional; same rule |
| 3 | Explore Masterbatch / `APP-MB` | `/applications/titanium-dioxide-for-masterbatch/` | EN / `tio2-my` | Conditional; same rule |
| 4 | Explore Printing Inks / `APP-INK` | `/applications/titanium-dioxide-for-printing-inks/` | EN / `tio2-my` | Conditional; same rule |
| 5 | Explore Paper / `APP-PAPER` | `/applications/titanium-dioxide-for-paper/` | EN / `tio2-my` | Conditional; same rule |

`APP000-G9-04`, `APP000-G9-06` and `APP000-G9-12` correctly require visible CTA eligibility, atomic omission and ItemList parity. ItemList cardinality is 1–5, preserves the included display order, uses the same Page-ID-resolved canonical as the visible CTA, and is wholly absent with `mainEntity` at zero. Specialty Materials is never a sixth child Application destination.

### 3.3 Grade occurrence map

All targets are EN / `tio2-my`; eligibility is resolved by explicit registered Page ID, never inferred from label or URL.

| Application | Ordered Page ID / label / registered path occurrences |
|---|---|
| Coatings | `GRADE-M350` / M-350 / `/products/m-350/`; `GRADE-M510` / M-510 / `/products/m-510/`; `GRADE-M896` / M-896 / `/products/m-896/`; `GRADE-M996` / M-996 / `/products/m-996/`; `GRADE-M2196` / M-2196 / `/products/m-2196/`; `GRADE-M895` / M-895 / `/products/m-895/`; `GRADE-M52` / M-52 / `/products/m-52/`; `GRADE-M2377` / M-2377 / `/products/m-2377/` |
| Plastics | `GRADE-M350` / M-350 / `/products/m-350/`; `GRADE-M510` / M-510 / `/products/m-510/`; `GRADE-M200` / M-200 / `/products/m-200/`; `GRADE-M108` / M-108 / `/products/m-108/`; `GRADE-M210` / M-210 / `/products/m-210/`; `GRADE-M340` / M-340 / `/products/m-340/`; `GRADE-M886` / M-886 / `/products/m-886/`; `GRADE-M2377` / M-2377 / `/products/m-2377/` |
| Masterbatch | `GRADE-M510` / M-510 / `/products/m-510/`; `GRADE-M200` / M-200 / `/products/m-200/`; `GRADE-M108` / M-108 / `/products/m-108/`; `GRADE-M210` / M-210 / `/products/m-210/`; `GRADE-M340` / M-340 / `/products/m-340/`; `GRADE-M886` / M-886 / `/products/m-886/`; `GRADE-M2377` / M-2377 / `/products/m-2377/` |
| Printing Inks | `GRADE-M350` / M-350 / `/products/m-350/`; `GRADE-M510` / M-510 / `/products/m-510/`; `GRADE-M52` / M-52 / `/products/m-52/`; `GRADE-M2377` / M-2377 / `/products/m-2377/` |
| Paper | `GRADE-M350` / M-350 / `/products/m-350/`; `GRADE-M2377` / M-2377 / `/products/m-2377/` |
| Specialty Materials | `GRADE-CR901` / CR-901 / `/products/cr-901/` |

Counts are exactly 8/8/7/4/2/1 = 30. M-2377 occurs five times; M-350 five; M-510 four; M-200/M-108/M-210/M-340/M-886 twice each; M-52 twice; the remaining Page IDs once. An ineligible occurrence remains exact plain nonfocusable text with no action affordance; a required relation is never deleted.

## 4. Required Findings

### `APP-000-IL-PLANNING-01-F01` — Gate 9 can collapse 30 Grade link instances into 14 endpoint checks

| Field | Judgment |
|---|---|
| Status / category | `OPEN / REQUIRED / GATE6_HANDOFF_GAP` |
| Source | B M2 and C §§2.1, 2.3, 4.1 require every relation occurrence; Gate 6 §§5–6 preserve 30 tuples. |
| Expected | For every eligible occurrence, Gate 9 checks application key, position, explicit Grade Page ID, exact accessible label, href, target Page ID, canonical, EN and `tio2-my`; repeated Page IDs remain separate source edges. Ineligible occurrences are separately checked as exact plain text. |
| Actual | `APP000-G9-03` proves 30 stored/rendered tuples but does not require each occurrence's href/accessibility mapping. `APP000-G9-06` names only “fourteen Grade destinations”, which permits one request/identity result per unique endpoint and can miss a wrong href or link/plain state on a repeated occurrence. |
| Impact | A single repeated Grade instance may point to the wrong grade or remain linked when ineligible while tuple counts and 14 unique endpoint checks still pass. |
| Owner / return | Gate 6 author; amend the package, not B/C or the relation matrix. |
| Closure | Extend the stable Gate 9 wording/evidence to require a 30-edge occurrence inventory and per-occurrence visible/accessibility mapping, with network/target requests allowed to deduplicate only after all 30 source edges are recorded. |

### `APP-000-IL-PLANNING-01-F02` — Breadcrumb and shared-owner link targets are not deterministically covered

| Field | Judgment |
|---|---|
| Status / category | `OPEN / REQUIRED / GATE6_HANDOFF_GAP` |
| Source | Approved C module map and Gate 3/4 combination include visible `Home › Applications`; current Global Chrome V0.5 plus Footer Legal Utility V1.0 fix the shared navigation, legal and Cookie controls. |
| Expected | The Gate 6 link inventory and Gate 9 acceptance bind breadcrumb Home to `HOME-001` `/`, EN, `tio2-my`; Applications is the non-action current crumb. Shared active surfaces bind the current owner targets and accessible names for Logo/Home, Home, Markets, Products, Applications, Documents, Resources, About, RFQ and the three legal pages; Cookie Settings remains a semantic button with no route and the dialog's Cookie Policy link resolves correctly. Contact/Terms remain absent. Every visible instance is checked at its applicable responsive/menu/dialog state. |
| Actual | Gate 6 §4 mentions the breadcrumb but supplies no target/behavior acceptance. `APP000-G9-06` covers only five child, fourteen Grade, three support and RFQ destinations. `APP000-G9-08` checks shared assembly/current state/order but does not explicitly require per-instance destination Page ID/path/language/scope and resolution. A wrong breadcrumb or shared href can therefore escape the stated link checks. |
| Impact | A visible core navigation or legal control may have the correct label/order but resolve to the wrong language, Page ID, scope or route. |
| Owner / return | Gate 6 author; current shared owners remain authoritative and are not edited by this Finding. |
| Closure | Add a compact current-owner link matrix or an exact normative reference plus explicit Gate 9 per-instance target-resolution coverage. Include the visible breadcrumb and distinguish Cookie Settings' functional button from navigational links. |

### `APP-000-IL-PLANNING-01-F03` — Adjacent Process regression scope is unnamed

| Field | Judgment |
|---|---|
| Status / category | `OPEN / REQUIRED / GATE6_HANDOFF_GAP` |
| Source | Gate 6 `APP000-G6-D11` and `APP000-G9-16` require a bounded regression for approved Process consumers but identify none. Current consumer records identify exactly two applicable Process pages. |
| Expected | Name `PRODUCT-PROC-CL` at `/products/chloride-process-titanium-dioxide/` and `PRODUCT-PROC-SU` at `/products/sulfate-process-titanium-dioxide/`, both EN / `tio2-my`, as the adjacent Process scope. Map the Chloride route subcondition of `CL-G9-F02`/`CL-G9-17` and the Sulfate `G9-FIVE-F01`/`SU-G9-09`/`SU-DEP-01`. Recheck each approved `/applications/` action, keyboard activation, target APP-000 Page ID/scope/canonical and Back/Return while preserving each consumer's accepted body/head/current-nav state. |
| Actual | The package says only “approved Process consumers”. This is neither a stable page set nor a sufficient source-to-Finding map. In addition, Chloride `CL-G9-F02` combines the Applications route with receiver evidence, so APP-000 can satisfy only its route subcondition and cannot close that whole Finding by itself. |
| Impact | Gate 8/9 could omit one Process page, scan an unintended set, or overstate closure of the Chloride Finding. |
| Owner / return | Gate 6 author. No authority is granted to edit either Process page. |
| Closure | Enumerate the two Page IDs/routes/current acceptance mappings and state the route-only closure boundary. Keep them outside the nine-page `G9-T4A5-F02` set and outside APP-000 content authority. |

## 5. Existing `G9-T4A5-F02` assessment

The package correctly preserves the existing stable Finding rather than creating a duplicate. Its nine-page scope exactly matches the authoritative record: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK`, `APP-PAPER`. The current targeted record leaves only `G9-T4A5-F02` open because `/applications/` remained 404; the approved labels/hrefs were retained.

`APP000-G6-D11` and `APP000-G9-16` correctly require the APP-000 implementation and all nine consumer paths to be checked against the same release candidate, including shared/body instances, keyboard navigation, Back/Return, Page ID, scope and consumer-regression preservation. They correctly prohibit consumer body/metadata/contract edits. This mapping is `PASS_PLANNING`; actual route closure remains `NOT_VERIFIED` until Gate 8 returns a locked candidate and Gate 9 performs the runtime review.

## 6. Planning status by review object

| Object | Status | Basis |
|---|---|---|
| APP-000 identity, clean route direction, EN and `tio2-my` | `PASS` | Manifest/Registry/master/package agree; readiness remains separate. |
| Seven same-page paths and no-selection meaning | `PASS` | Exact fragments and acceptance behavior are present. |
| 30 approved relationship tuples | `PASS` | Exact 8/8/7/4/2/1 map, labels, Page IDs and registered paths agree. |
| Per-occurrence eligible Grade link acceptance | `FAIL` | F01. |
| Five conditional child Application paths | `PASS` | Provisional status preserved; atomic visible/ItemList omission defined. |
| Products/Documents/Markets and body RFQ | `PASS` | Correct owner IDs, paths, clean/source-only behavior and omission rules. |
| Breadcrumb/shared/footer/legal/Cookie complete target acceptance | `FAIL` | F02. |
| ItemList visible destination parity | `PASS` | Exact 1–5 eligibility/order/name/target parity and zero-state omission. |
| Nine-page `G9-T4A5-F02` mapping | `PASS` | Exact existing scope and non-modification boundary retained. |
| Adjacent Process consumer scope | `FAIL` | F03. |
| Production routes, redirects, canonicals and response identity | `NOT_VERIFIED` | No runtime supplied; intentionally deferred to Gate 8/9. |
| Public indexing/sitemap/publication | `NOT_VERIFIED / NOT_AUTHORIZED` | Gate 10 remains separate. |

## 7. Stop and return

Return F01–F03 to the Gate 6 author under the same review chain. A targeted planning rereview should inspect only the amended package identity, all three closure conditions and any affected acceptance/dependency cross-references. No B/C, Registry, keyword, shared-owner, consumer-page, Manifest, Status or Index modification is required by these Findings.

This report does not close Gate 6, dispatch Gate 8, approve APP-000, close `G9-T4A5-F02`, close either Process page's Gate 9, or grant publication authority.
