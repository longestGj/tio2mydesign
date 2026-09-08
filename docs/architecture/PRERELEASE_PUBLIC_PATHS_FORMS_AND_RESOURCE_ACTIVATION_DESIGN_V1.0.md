# TiO2 Malaysia Prerelease Public Paths, Forms and Resource Activation Design V1.0

Date: 2026-09-09

Status: `USER_APPROVED / IMPLEMENTATION_AUTHORIZED`

Scope: `tio2-my` local prerelease candidate; D23 governance and D16 implementation handoff
User direction: combine the form receiver repair, Home and Hub link activation, Documents guide discovery and Resources public inventory work; do not require native 200% zoom, physical-device, screen-reader/AT or forced-colors testing.

Approval record: user confirmed this complete design on 2026-09-09. The approval covers the exact combined prerelease candidate and its reduced test scope; it does not authorize Gate 10, production deployment, indexing or release.

## 1. Purpose and decision

The first 58-object prerelease run proved that the registered pages can render and that most page, visual and interaction contracts are already sound. It did not establish an overall prerelease pass because the three real form flows were not positively received, Home still exposed six disabled pseudo-links, three Hubs withheld approved destinations, Resources remained at H0 and Contact remained an approved prerelease exception.

This design creates one new exact prerelease candidate that resolves those connected issues together. Existing positive page evidence is inherited when its implementation surface is unchanged. The new run targets only the changed shared flows and remaining material gaps.

This document incorporates the active-flow decisions from `WEB3FORMS_BROWSER_DIRECT_THREE_FORM_ARCHITECTURE_V1.0.md`. After this specification is approved, the earlier form-only document remains historical design input and this document becomes the combined implementation authority.

## 2. Acceptance-scope revision

The following checks are removed from the current prerelease and Gate 9 required set by the user's 2026-09-09 decision:

- native browser 200% zoom;
- physical-device and touch-device testing;
- screen-reader and other assistive-technology testing;
- forced-colors testing.

Historical `NOT_VERIFIED` records for these checks are retained. They are recorded as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`, never converted to `PASS`.

The retained browser and accessibility evidence floor is:

- 1440px, 768px and 390px responsive rendering on changed pages;
- no horizontal overflow, clipping, overlap or inaccessible off-screen controls;
- keyboard reachability, activation, visible focus and focus return for changed interactions;
- correct native link, button, form-control and heading semantics;
- automated Axe checks on changed pages and states;
- Chromium runtime evidence and existing Firefox evidence where already available.

This scope revision applies to the current 58-object prerelease closeout and its affected Gate 9 records. It does not rewrite historical evidence or claim that removed checks were performed.

## 3. Existing evidence that must be inherited

The following results from local main `98c2c573dd090048352fa12415a9cc8eeefc485b`, run `20260908T162630Z-98c2c573dd09`, Build `QmeAVzHgLILD56DVWgAww` remain valid for surfaces not changed by the new implementation:

- 58/58 registered objects completed HTTP, identity, H1/title, scope, environment-robots, JSON-LD-format, image and three-width checks;
- all fourteen repaired editorial pages resolved correctly under the private prerelease token contract;
- 27 Chromium/Firefox interaction checks passed;
- the reviewed 174 screenshots exposed no additional layout blocker;
- the six Resource pages `RES-CHEMOURS`, `RES-R706`, `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN` and `RES-TRADE-BR` each passed the prerelease page-contract evaluation;
- the full internal-link run found only `/contact/` returning 404.

The new Gate 9 closeout must map this evidence to the affected acceptance conditions before requesting new execution. It must not repeat full-page content or visual review for an unchanged Resource child.

## 4. Combined implementation architecture

### 4.1 Forms and Thank You

`CONV-RFQ`, `CONV-SAMPLE` and `CONV-DOC` use one shared browser-side Web3Forms transport:

```text
Buyer form
  -> page-specific validation and approved payload mapping
  -> POST https://api.web3forms.com/submit
  -> HTTP 200 + JSON success=true
  -> current-session non-personal success marker
  -> matching /thank-you/?request=... state
```

Active browser flows contain no call or automatic fallback to `/api/rfq/submit`, `/api/sample/submit` or the RFQ private submission route. The existing RFQ and Sample server routes, receiver binding, receipt ledger and related tests remain in the repository as inactive compatibility assets.

Only `HTTP 200` with parsed JSON `success === true` produces success navigation, one consent-eligible success event and a matching Thank You state. Provider rejection, unexpected response, timeout, abort or network failure preserves entered values and presents the approved retryable failure state. No automatic retry is allowed.

Provider acknowledgement and destination-inbox receipt are separate evidence rows. The active implementation must provide sanitized diagnostics without access keys, receiver addresses, buyer fields, cookies or full payloads.

### 4.2 Home public actions

The six buyer-visible disabled link roles become native links without changing their approved labels or surrounding copy:

| Label | Target |
|---|---|
| `Coatings information →` | `/applications/titanium-dioxide-for-coatings/` |
| `Plastics information →` | `/applications/titanium-dioxide-for-plastics/` |
| `Masterbatch information →` | `/applications/titanium-dioxide-for-masterbatch/` |
| `Printing inks information →` | `/applications/titanium-dioxide-for-printing-inks/` |
| `Paper information →` | `/applications/titanium-dioxide-for-paper/` |
| `Read process overview →` | `/resources/chloride-vs-sulfate-titanium-dioxide/` |

The implementation removes `role=link`, `aria-disabled=true` and disabled styling from these actions. It does not infer a Grade recommendation or prefill a conversion form.

### 4.3 Product Hub activation

`PRODUCT-000` activates the following approved relationships in the prerelease candidate:

- fourteen Grade actions to `/products/m-350/`, `/products/m-510/`, `/products/m-896/`, `/products/m-996/`, `/products/m-2196/`, `/products/m-895/`, `/products/m-200/`, `/products/m-108/`, `/products/m-210/`, `/products/m-340/`, `/products/m-886/`, `/products/m-52/`, `/products/m-2377/` and `/products/cr-901/`;
- Chloride Process to `/products/chloride-process-titanium-dioxide/`;
- Sulfate Process to `/products/sulfate-process-titanium-dioxide/`;
- support routes to `/applications/`, `/documents/` and `/markets/`.

All targets resolve by registered Page ID, language and `site_scope=tio2-my`. Display order is not rank. Activation does not create a suitability, equivalence or preferred-product claim.

### 4.4 Applications Hub activation

`APP-000` activates:

- the five registered child Application routes used by Home;
- all thirty approved Grade relationship occurrences from `APP-000_GATE6_HANDOFF_PACKAGE_V1.1.md` section 5, preserving the exact 8/8/7/4/2/1 occurrence counts and all fourteen endpoint identities;
- support routes to `/products/`, `/documents/` and `/markets/`.

Specialty Materials remains an Application group without a new child page. Its sole approved Grade occurrence, `CR-901`, becomes a real link to `/products/cr-901/`. Rubber creates no collection item or Grade relationship.

### 4.5 Documents Hub guide discovery

`DOC-000` retains its existing request workflow, scenarios and four documentation-category explanations. It adds one compact module after `Documentation categories` and before the existing `Why on Request` band:

- Eyebrow: `DOCUMENT GUIDES`
- Heading: `Document Guides`
- Intro: `Review practical guidance before requesting documents for a product grade.`

| Link label | Target |
|---|---|
| `TDS, SDS and COA Guide` | `/documents/tds-sds-coa/` |
| `REACH Documentation Guide` | `/documents/reach/` |
| `Certificate of Origin Guide` | `/documents/certificate-of-origin/` |

Each item uses a native descriptive link. The module does not promise a download, immediate availability, regulatory acceptance or a document for every Grade.

### 4.6 Resources Hub replacement state

The H0/Featured/Latest composition was designed for zero or one public Resource. The eight-object collection uses a new grouped inventory state, `H3_GROUPED_PUBLIC_RESOURCES`, and removes Featured/Latest duplication.

The final module order is:

1. Global Header
2. Breadcrumb
3. Hero
4. `Browse Procurement Resources`
5. `How We Use Evidence`
6. `Buyer Questions`
7. Global Footer

`Browse Procurement Resources` contains three non-ranking groups:

| Group | Pages in stable buyer-workflow order |
|---|---|
| `Sourcing` | `RES-ORIGIN` |
| `Technical Evaluation` | `RES-PROC`, `RES-CHEMOURS`, `RES-R706` |
| `Trade & Market` | `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR` |

The exact targets are:

- `/resources/non-china-titanium-dioxide/`;
- `/resources/chloride-vs-sulfate-titanium-dioxide/`;
- `/resources/chemours-titanium-dioxide-alternatives/`;
- `/resources/ti-pure-r-706-alternative/`;
- `/resources/eu-titanium-dioxide-anti-dumping-duty/`;
- `/resources/uk-titanium-dioxide-anti-dumping-investigation/`;
- `/resources/india-titanium-dioxide-anti-dumping-duty/`;
- `/resources/brazil-titanium-dioxide-anti-dumping-duty/`.

Each card uses its approved page title, approved summary and only metadata already present in that child's approved visible contract. No item is labelled `Latest`, `Current`, `Featured` or preferred merely because of group position. Trade freshness metadata is rendered atomically when required by the child contract.

The visible inventory, `ItemList`, release-sitemap projection and internal links use the same eight-item eligibility set. The isolated prerelease environment validates this projection while remaining non-indexable; it does not write or publish a production sitemap. A missing or revoked item is removed from all candidate surfaces together.

## 5. Resource child Gate 9 closeout

### 5.1 Already complete inputs

- `RES-ORIGIN` inherits its current Gate 9 pass and unchanged content evidence.
- `RES-PROC` uses the selected candidate-one implementation that already has 28 PASS / 0 FAIL / 0 NOT_VERIFIED; the new candidate integrates that selected implementation.

### 5.2 Four Trade Resources

`RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN` and `RES-TRADE-BR` inherit their page, content, visual and existing targeted-repair passes. The current 58-object runtime and internal-link evidence is mapped to the former shared `/applications/` dependency before any new test is requested.

New execution is limited to:

- official-source reachability and freshness checks still required by the applicable child contract;
- form paths affected by the new shared transport;
- route, canonical, Schema, sitemap and grouped-Hub parity on the exact new candidate;
- any remaining scope/cache condition that the existing prerelease evidence cannot actually prove.

### 5.3 Chemours and R-706 Resources

`RES-CHEMOURS` and `RES-R706` inherit their approved copy, source precision, three-width visual and existing runtime passes. The public candidate uses the registered routes and exact canonicals:

- `https://tio2malaysia.com/resources/chemours-titanium-dioxide-alternatives/`;
- `https://tio2malaysia.com/resources/ti-pure-r-706-alternative/`.

This successor design approves the registered route/canonical mapping and conditional Schema for the exact prerelease candidate. Production indexing remains a separate Gate 10 decision. The approved Schema becomes active only with visible parity:

- `RES-CHEMOURS`: `TechArticle` plus `BreadcrumbList`;
- `RES-R706`: `WebPage` plus `BreadcrumbList`, with no Product, Offer, Review, FAQ, comparison, equivalence, replacement or IKHLAS-to-R-706 mapping.

Their remaining new checks are limited to form-path behavior, route/canonical/social/Schema/robots/sitemap parity, current source freshness where required and Hub discovery. Full content and visual review is not repeated.

## 6. Prerelease data and eligibility flow

D23 supplies one explicit release-candidate eligibility manifest containing Page ID, route, language, scope, canonical, group, display order, permitted Schema state and source contract identity. D16 consumes that manifest for link and collection rendering.

The candidate may render the approved links in the isolated prerelease environment so Gate 9 can verify the exact final assembly. Publication remains impossible until the applicable child Gate 9 conditions close and Gate 10 is separately authorized. No editor manually selects an H-state or bypasses a failed child predicate.

The same exact candidate must be used for the final targeted Gate 9 evidence. A code, CMS, configuration or Build change after review requires a new candidate identity and affected-surface recheck.

## 7. Required verification

### 7.1 Build and automated checks

- clean production build;
- existing typecheck, lint and relevant unit/integration suites;
- Web3Forms outcome tests for positive, negative, malformed, timeout, abort and network states;
- proof that active bundles do not call the retained RFQ/Sample server endpoints;
- route, scope, canonical, robots, sitemap and JSON-LD parity checks;
- exact inventory checks for Home 6, Product Grade 14, Product Process 2, Application Grade 30, Resource 8 and Document Guide 3.

### 7.2 Runtime checks

- one controlled real browser submission for each of RFQ, Sample and Documents;
- positive provider acknowledgement and separately correlated destination-inbox receipt for each workflow;
- three positive Thank You states, plus retained negative-state protection;
- 1440px, 768px and 390px screenshots for changed Hubs, forms and Thank You states;
- keyboard, focus, semantic and Axe checks for changed interactions;
- complete 58-object automated internal-link rescan because the shared readiness/resolver output changes;
- targeted Browser Back/Return and identity checks for affected consumer paths.

The removed native-zoom, physical-device, screen-reader/AT and forced-colors checks are absent from the required evidence manifest.

## 8. Completion states

When the candidate passes all retained checks, D23 records:

```text
PRERELEASE_TEST = PASS_WITH_APPROVED_CONTACT_EXCEPTION
PUBLIC_PATH_ACTIVATION = PASS
THREE_FORM_PROVIDER_AND_INBOX = PASS
RESOURCE_TARGETED_GATE9_GAPS = CLOSED
RESOURCES_HUB_STATE = H3_GROUPED_PUBLIC_RESOURCES
CONTACT_RELEASE_DEPENDENCY = OPEN
RELEASE_READY = NO
GATE10 = NOT_STARTED / NOT_AUTHORIZED
```

`CONTACT-001` remains outside this implementation batch under the existing prerelease-start exception. Its `/contact/` dependency must still close before release, but it does not prevent the new prerelease functional pass from being recorded with the explicit exception.

## 9. Implementation boundary and rollback

D23 writes the successor governance, eligibility and acceptance records. D16 implements and tests the exact candidate in its own repository. D23 does not modify D16 source code.

This design does not authorize push, remote deployment, production WordPress writes, DNS, public release, indexing or Gate 10.

Rollback restores the prior Hub and active-flow configuration as one candidate-level change. Re-enabling the retained server receiver paths requires a new explicit architecture decision and provider capability evidence; a fallback must not be silently restored.
