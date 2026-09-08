# TiO2 Malaysia Prerelease Public Paths, Forms and Resource Activation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify one exact local prerelease candidate that activates the approved Home and Hub paths, moves all three public forms to a shared browser-direct Web3Forms transport, exposes three Document guides, and replaces the Resources H0 presentation with an eight-item grouped inventory.

**Architecture:** D23 owns the approved eligibility and acceptance records; D16 consumes their exact Page ID/path set through existing WordPress route-readiness and page-contract projections. The three forms share one transport that treats only HTTP 200 plus JSON `success === true` as provider acceptance, while page-specific adapters retain validation and payload ownership. Existing RFQ/Sample server routes and ledger code remain compiled and tested as inactive compatibility assets.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, WordPress/PHP, GraphQL, Vitest, Testing Library, Playwright, PowerShell prerelease controller, Docker Compose.

**Spec:** `D:/23MySec/docs/architecture/PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md`

## Global Constraints

- Work in `D:/16Wordpress_nextjs` for implementation and tests; D23 must not edit D16 source.
- Use `site_scope=tio2-my`, locale `en`, and the exact Page IDs, paths, canonicals, group order, labels and copy in the approved spec.
- Preserve `/api/rfq/submit`, `/api/sample/submit`, the RFQ private route, receiver bindings, receipt ledger and their tests as inactive compatibility assets.
- Active RFQ, Sample and Documents browser flows must never call those retained server endpoints and must not automatically retry.
- Provider acceptance means exactly HTTP 200, parsed JSON, and `success === true`; all other outcomes preserve buyer values and show the approved retryable failure state.
- Sanitized diagnostics may contain workflow, request token, HTTP status, media type, outcome and provider category; they must not contain access keys, receiver addresses, buyer fields, cookies or full payloads.
- The candidate remains non-indexable and does not authorize a production WordPress write, production sitemap, push, deploy, release, Gate 10 or DNS change.
- Do not run or claim native browser 200% zoom, physical-device/touch-device, screen-reader/AT or forced-colors tests. Record them as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`.
- Retain required checks at 1440px, 768px and 390px, horizontal overflow, keyboard/focus, native semantics, Axe, Chromium and already-existing Firefox evidence.
- Home counts: 6 activated actions. Product counts: 14 Grade, 2 Process, 3 support. Applications counts: 5 child Application, 30 Grade occurrences, 3 support. Resources count: 8. Document Guides count: 3.
- Resources order is Sourcing: `RES-ORIGIN`; Technical Evaluation: `RES-PROC`, `RES-CHEMOURS`, `RES-R706`; Trade & Market: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`.
- After any code, CMS configuration or build identity change, start a new prerelease candidate and rerun affected evidence.

---

### Task 1: Publish the exact D23 eligibility handoff

**Files:**
- Create: `D:/23MySec/docs/architecture/data/PRERELEASE_PUBLIC_PATH_ELIGIBILITY_V1.0.json`
- Modify: `D:/23MySec/docs/architecture/PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md`
- Test: `D:/23MySec/docs/architecture/data/PRERELEASE_PUBLIC_PATH_ELIGIBILITY_V1.0.json`

**Interfaces:**
- Consumes: the approved spec named in the plan header.
- Produces: schema `tio2-my-prerelease-public-path-eligibility-v1.0` with `candidateId`, `siteScope`, `locale`, `sourceSpec`, `routes[]`, `collections`, `formWorkflows`, `removedChecks` and `releaseControls`.

- [ ] **Step 1: Write the eligibility manifest**

Use these exact top-level controls and populate `routes` only from the approved spec's explicit Page ID/path/canonical set:

```json
{
  "schemaVersion": "tio2-my-prerelease-public-path-eligibility-v1.0",
  "candidateId": "TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1",
  "siteScope": "tio2-my",
  "locale": "en",
  "sourceSpec": "PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0",
  "collections": {
    "homeActions": 6,
    "productGrades": 14,
    "productProcesses": 2,
    "productSupport": 3,
    "applicationChildren": 5,
    "applicationGradeOccurrences": 30,
    "applicationSupport": 3,
    "resourceItems": 8,
    "documentGuides": 3
  },
  "formWorkflows": ["rfq", "sample", "documents"],
  "removedChecks": ["native_browser_200_percent", "physical_or_touch_device", "screen_reader_or_at", "forced_colors"],
  "releaseControls": {
    "localPrereleaseOnly": true,
    "productionWriteAuthorized": false,
    "indexingAuthorized": false,
    "gate10Authorized": false
  }
}
```

Each `routes[]` entry must use this shape and an exact approved canonical:

```json
{
  "pageId": "RES-PROC",
  "path": "/resources/chloride-vs-sulfate-titanium-dioxide/",
  "canonical": "https://tio2malaysia.com/resources/chloride-vs-sulfate-titanium-dioxide/",
  "group": "technical-evaluation",
  "displayOrder": 1,
  "schemaTypes": ["TechArticle", "BreadcrumbList"]
}
```

- [ ] **Step 2: Validate identity, uniqueness and counts**

Run:

```powershell
$m = Get-Content -Raw 'docs/architecture/data/PRERELEASE_PUBLIC_PATH_ELIGIBILITY_V1.0.json' | ConvertFrom-Json
if ($m.siteScope -ne 'tio2-my' -or $m.locale -ne 'en') { throw 'scope/locale mismatch' }
if (($m.routes.pageId | Sort-Object -Unique).Count -ne $m.routes.Count) { throw 'duplicate Page ID' }
if (($m.routes.path | Sort-Object -Unique).Count -ne $m.routes.Count) { throw 'duplicate path' }
$m.collections | ConvertTo-Json -Compress
```

Expected: no exception and the nine approved collection counts print exactly.

- [ ] **Step 3: Confirm the design approval record**

Verify the design header contains:

```text
Status: USER_APPROVED / IMPLEMENTATION_AUTHORIZED
Approval record: user confirmed this complete design on 2026-09-09.
```

- [ ] **Step 4: Commit the D23 handoff**

```powershell
git add docs/architecture/PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md docs/architecture/data/PRERELEASE_PUBLIC_PATH_ELIGIBILITY_V1.0.json
git commit -m "docs: authorize prerelease public path candidate"
```

### Task 2: Seed exact local prerelease route readiness

**Files:**
- Create: `wordpress/plugins/tio2-site-model/config/tio2-my-prerelease-public-paths.json`
- Create: `wordpress/seed/apply-tio2-my-prerelease-public-paths.php`
- Modify: `wordpress/ops/prerelease/bootstrap-wordpress.sh`
- Modify: `tests/infrastructure/bootstrap-wordpress.test.ts`
- Create: `tests/infrastructure/tio2-my-prerelease-public-paths.test.ts`
- Create: `wordpress/tests/prerelease-public-paths.php`

**Interfaces:**
- Consumes: D23 eligibility entries `{pageId,path,canonical}`.
- Produces: local prerelease WordPress records with `_tio2_my_route_page_id`, `_tio2_my_route_canonical`, and `_tio2_my_route_release_state=LIVE_APPROVED`, used only inside the isolated prerelease database.

- [ ] **Step 1: Add failing configuration contract tests**

Assert the D16 config has the same `candidateId`, scope, locale and exact unique route tuples as D23; assert it contains all targets required by the 6/14/2/3/5/30/3/8/3 collection declarations.

```ts
expect(config.candidateId).toBe('TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1')
expect(config.siteScope).toBe('tio2-my')
expect(new Set(config.routes.map(route => route.pageId)).size).toBe(config.routes.length)
expect(new Set(config.routes.map(route => route.path)).size).toBe(config.routes.length)
```

- [ ] **Step 2: Run the new infrastructure test and verify failure**

```powershell
npx vitest run tests/infrastructure/tio2-my-prerelease-public-paths.test.ts
```

Expected: FAIL because the D16 config and seed do not exist.

- [ ] **Step 3: Add the exact D16 config and fail-closed seed**

The PHP seed must reject HTTP execution, reject non-`tio2-my` scope or non-`en` locale, resolve exactly one registered post for every entry, verify its public path and canonical, then write only the three route-readiness meta keys. It must fail the entire seed before mutation if any record is missing or ambiguous.

```php
update_post_meta($post_id, TIO2_MY_ROUTE_PAGE_ID_META, $route['pageId']);
update_post_meta($post_id, TIO2_MY_ROUTE_CANONICAL_META, $route['canonical']);
update_post_meta($post_id, TIO2_MY_ROUTE_RELEASE_STATE_META, 'LIVE_APPROVED');
```

The command must emit one sanitized line:

```text
TIO2_MY_PRERELEASE_PUBLIC_PATHS_RESULT {"candidateId":"TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1","state":"APPLIED","routeCount":N}
```

- [ ] **Step 4: Wire the seed into isolated prerelease bootstrap**

Call it after page/product/editorial fixtures exist and before CMS identity is exported:

```bash
wp eval-file /workspace/wordpress/seed/apply-tio2-my-prerelease-public-paths.php
```

The bootstrap contract test must prove the command is present exactly once and after the fixture imports.

- [ ] **Step 5: Run PHP and infrastructure checks**

```powershell
npx vitest run tests/infrastructure/tio2-my-prerelease-public-paths.test.ts tests/infrastructure/bootstrap-wordpress.test.ts
docker compose --env-file wordpress/.env -f wordpress/docker-compose.yml run --rm wpcli php /workspace/wordpress/tests/prerelease-public-paths.php
```

Expected: all tests PASS; the PHP probe reports the exact candidate ID and route count.

- [ ] **Step 6: Commit**

```powershell
git add wordpress/plugins/tio2-site-model/config/tio2-my-prerelease-public-paths.json wordpress/seed/apply-tio2-my-prerelease-public-paths.php wordpress/ops/prerelease/bootstrap-wordpress.sh tests/infrastructure/bootstrap-wordpress.test.ts tests/infrastructure/tio2-my-prerelease-public-paths.test.ts wordpress/tests/prerelease-public-paths.php
git commit -m "feat: seed prerelease public path readiness"
```

### Task 3: Add the shared browser-direct Web3Forms transport

**Files:**
- Create: `lib/forms/web3forms-browser.ts`
- Create: `tests/unit/forms/web3forms-browser.test.ts`

**Interfaces:**
- Produces:

```ts
export type Web3FormsWorkflow = 'rfq' | 'sample' | 'documents'
export type Web3FormsOutcome = 'provider_accepted' | 'provider_rejected' | 'submission_unconfirmed' | 'unavailable'
export type Web3FormsProviderCategory = 'accepted' | 'rejected' | 'rate_limited' | 'invalid_request' | 'network' | 'timeout' | 'aborted' | 'unexpected'

export interface Web3FormsDiagnostic {
  readonly workflow: Web3FormsWorkflow
  readonly requestToken: string
  readonly httpStatus: number | null
  readonly mediaType: string | null
  readonly outcome: Web3FormsOutcome
  readonly providerCategory: Web3FormsProviderCategory
}

export interface Web3FormsBrowserInput {
  readonly workflow: Web3FormsWorkflow
  readonly accessKey: string | null
  readonly requestToken: string
  readonly payload: Readonly<Record<string, unknown>>
  readonly timeoutMs: number
  readonly signal?: AbortSignal
}

export interface Web3FormsBrowserDependencies {
  readonly fetcher?: typeof fetch
  readonly endpoint?: string
}

export type Web3FormsBrowserResult = Readonly<{
  kind: Web3FormsOutcome
  diagnostic: Web3FormsDiagnostic
}>

export function createWeb3FormsRequestToken(): string
export function submitWeb3FormsBrowser(input: Web3FormsBrowserInput, deps?: Web3FormsBrowserDependencies): Promise<Web3FormsBrowserResult>
```

- [ ] **Step 1: Write the outcome matrix tests**

Cover these exact cases: 200 JSON `success:true`; 200 JSON `success:false`; 200 non-JSON; 400; 422; 429; 500; timeout; caller abort; fetch rejection; missing access key. Also assert the posted payload contains `access_key` and the returned diagnostic does not serialize any payload field or access key.

```ts
expect(result.kind).toBe('provider_accepted')
expect(result.diagnostic).toEqual({
  workflow: 'rfq', requestToken: 'rfq-test-token', httpStatus: 200,
  mediaType: 'application/json', outcome: 'provider_accepted', providerCategory: 'accepted',
})
expect(JSON.stringify(result.diagnostic)).not.toContain('buyer@example.com')
expect(JSON.stringify(result.diagnostic)).not.toContain('public-access-key')
```

- [ ] **Step 2: Run tests and verify failure**

```powershell
npx vitest run tests/unit/forms/web3forms-browser.test.ts
```

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement strict transport classification**

POST JSON to `https://api.web3forms.com/submit`. Set an internal timeout with `AbortController`, combine it with the caller signal if supplied, parse JSON only when possible, and return `provider_accepted` only for the exact positive predicate.

```ts
const accepted = response.status === 200 && body?.success === true
```

Map 400/422 to `invalid_request`, 429 to `rate_limited`, provider `success:false` to `rejected`, caller abort to `aborted`, internal timeout to `timeout`, fetch rejection to `network`, and all other non-positive responses to `unexpected`.

- [ ] **Step 4: Run the shared transport tests**

```powershell
npx vitest run tests/unit/forms/web3forms-browser.test.ts
```

Expected: all outcome and redaction tests PASS.

- [ ] **Step 5: Commit**

```powershell
git add lib/forms/web3forms-browser.ts tests/unit/forms/web3forms-browser.test.ts
git commit -m "feat: add strict browser Web3Forms transport"
```

### Task 4: Migrate RFQ, Sample and Documents active flows

**Files:**
- Modify: `lib/rfq/malaysia-rfq-receiver.ts`
- Modify: `lib/request-sample/malaysia-request-sample-receiver.ts`
- Modify: `lib/request-documents/malaysia-request-documents-receiver.ts`
- Modify: `components/sites/tio2-my/request-a-quote/malaysia-rfq-form.tsx`
- Modify: `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx`
- Modify: `components/sites/tio2-my/request-documents/malaysia-request-documents-form.tsx`
- Modify: `tests/unit/rfq/malaysia-rfq-receiver.test.ts`
- Modify: `tests/unit/rfq/malaysia-rfq-template.test.tsx`
- Modify: `tests/unit/request-sample/malaysia-request-sample-receiver.test.ts`
- Modify: `tests/unit/request-sample/malaysia-request-sample-template.test.tsx`
- Modify: `tests/unit/request-documents/malaysia-request-documents-receiver.test.ts`
- Modify: `tests/unit/request-documents/malaysia-request-documents-template.test.tsx`

**Interfaces:**
- Consumes: `submitWeb3FormsBrowser()` and `createWeb3FormsRequestToken()` from Task 3.
- Produces: three page-specific adapters returning `Web3FormsBrowserResult`; form navigation occurs only for `kind === 'provider_accepted'`.

- [ ] **Step 1: Rewrite receiver tests around the shared transport**

For each workflow assert exact payload ownership, subject from `lib/forms/submission-environment.ts`, `site_scope=tio2-my`, Page ID, workflow type, locale and request token. Assert RFQ and Sample never fetch `/api/rfq/submit`, `/api/tio2-my/rfq-private-submit` or `/api/sample/submit`.

```ts
expect(fetcher).toHaveBeenCalledTimes(1)
expect(fetcher.mock.calls[0]?.[0]).toBe('https://api.web3forms.com/submit')
expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toMatchObject({
  site_scope: 'tio2-my', workflow_type: 'sample', request_token: 'sample-token',
})
```

- [ ] **Step 2: Rewrite component tests for success, retry and token stability**

For each form prove: positive provider response navigates to the matching Thank You request; negative response keeps all entered values; no automatic retry; manual retry with unchanged values reuses the request token; changing a buyer field generates a new token; pending and completed guards prevent duplicate dispatch.

```ts
expect(mockSubmit).toHaveBeenCalledTimes(1)
expect(screen.getByDisplayValue('Acme Co')).toBeInTheDocument()
expect(mockNavigate).not.toHaveBeenCalled()
```

- [ ] **Step 3: Run the receiver and form tests and verify failure**

```powershell
npx vitest run tests/unit/rfq/malaysia-rfq-receiver.test.ts tests/unit/rfq/malaysia-rfq-template.test.tsx tests/unit/request-sample/malaysia-request-sample-receiver.test.ts tests/unit/request-sample/malaysia-request-sample-template.test.tsx tests/unit/request-documents/malaysia-request-documents-receiver.test.ts tests/unit/request-documents/malaysia-request-documents-template.test.tsx
```

Expected: FAIL on old server endpoints and old `receipt_confirmed` result names.

- [ ] **Step 4: Implement all three active adapters and form transitions**

Keep page-specific validation and mappings in their existing modules. Replace active endpoint calls with the shared transport. Use a request-token ref, reset it only after buyer data changes, keep it across a manual retry, and clear the completed guard only when a new attempt is valid.

```ts
if (result.kind === 'provider_accepted') {
  completedRef.current = true
  const thankYouRequest = workflow === 'rfq' ? 'quote' : workflow
  navigateToMalaysiaThankYou(thankYouRequest)
  return
}
setSubmissionState('retryable_failure')
```

- [ ] **Step 5: Prove retained server assets still compile and their existing tests pass**

```powershell
npx vitest run tests/integration/request-sample/server-receiver.test.ts tests/unit/rfq/malaysia-rfq-private-attribution.test.ts
npm run typecheck
```

Expected: PASS. These tests prove preservation only; they are not active-flow evidence.

- [ ] **Step 6: Run the complete form unit set**

```powershell
npx vitest run tests/unit/forms tests/unit/rfq tests/unit/request-sample tests/unit/request-documents tests/unit/thank-you
```

Expected: PASS with no active assertion using `receipt_confirmed`.

- [ ] **Step 7: Commit**

```powershell
git add lib/rfq/malaysia-rfq-receiver.ts lib/request-sample/malaysia-request-sample-receiver.ts lib/request-documents/malaysia-request-documents-receiver.ts components/sites/tio2-my/request-a-quote/malaysia-rfq-form.tsx components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx components/sites/tio2-my/request-documents/malaysia-request-documents-form.tsx tests/unit/rfq tests/unit/request-sample tests/unit/request-documents
git commit -m "feat: use browser direct forms for Malaysia workflows"
```

### Task 5: Activate Home, Product and Applications paths

Project-control interpretation: apply `D:/23MySec/docs/architecture/PRERELEASE_APPLICATION_FIVE_PROVISIONAL_METADATA_RULING_V1.0.md`. The five Application child routes become eligible relationship targets, while their child contracts remain `identity.provisional=true`; they continue to output no canonical, no `og:url`, no URL-bearing JSON-LD, `robots=noindex,nofollow`, and no release-sitemap entry.

**Files:**
- Modify: `wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json`
- Modify: `tests/unit/homepage/malaysia-template.test.tsx`
- Modify: `tests/unit/homepage/malaysia-dto.test.ts`
- Modify: `tests/unit/products/malaysia-product-hub-template.test.tsx`
- Modify: `tests/unit/applications/malaysia-application-hub-page.test.tsx`
- Modify: `tests/infrastructure/application-route-gating.test.ts`
- Modify: `tests/infrastructure/product-route-gating.test.ts`

**Interfaces:**
- Consumes: exact route-readiness meta seeded by Task 2.
- Produces: native Home links and existing Product/Application conditional link branches resolving the approved counts.

- [ ] **Step 1: Add exact rendered-link count tests**

Assert Home contains six native anchors for the exact labels/targets and none of those labels has `role=link` or `aria-disabled=true`. Assert Product renders fourteen Grade links, two Process links and three support links when readiness is true. Assert Applications renders five child links, thirty Grade link occurrences and three support links; Specialty has the CR-901 link and no child Application link.

```ts
expect(screen.getByRole('link', {name: 'Coatings information →'})).toHaveAttribute('href', '/applications/titanium-dioxide-for-coatings/')
expect(container.querySelectorAll('[aria-disabled="true"]')).toHaveLength(0)
expect(container.querySelectorAll('a[data-grade-link]')).toHaveLength(30)
```

For every activated Application child target, also assert the resolved page remains provisional:

```ts
expect(pageMetadata.alternates?.canonical).toBeUndefined()
expect(pageMetadata.openGraph?.url).toBeUndefined()
expect(applicationJsonLd).toEqual([])
expect(robots).toEqual({index: false, follow: false})
expect(releaseSitemapPaths).not.toContain(applicationPath)
```

- [ ] **Step 2: Run focused tests and verify failure**

```powershell
npx vitest run tests/unit/homepage/malaysia-template.test.tsx tests/unit/homepage/malaysia-dto.test.ts tests/unit/products/malaysia-product-hub-template.test.tsx tests/unit/applications/malaysia-application-hub-page.test.tsx tests/infrastructure/application-route-gating.test.ts tests/infrastructure/product-route-gating.test.ts
```

Expected: Home fails because six approved hrefs are null; Product/Application fail until the exact seeded readiness fixtures are used.

- [ ] **Step 3: Apply the six approved Home hrefs**

Change only the six null `href` values in `tio2-my-homepage.json`; preserve labels, descriptions and module order. The component's existing anchor branch should render them without an `UnresolvedAction`.

- [ ] **Step 4: Bind Product/Application tests and fixtures to exact readiness**

Do not remove fail-closed behavior. Keep `tio2_my_product_target_ready()` and `tio2_my_application_hub_route_readiness()` strict; supply true only for exact seeded Page ID/path/canonical records.

```php
$ready =
    $route['pageId'] === get_post_meta($post_id, TIO2_MY_ROUTE_PAGE_ID_META, true) &&
    $route['canonical'] === get_post_meta($post_id, TIO2_MY_ROUTE_CANONICAL_META, true) &&
    'LIVE_APPROVED' === get_post_meta($post_id, TIO2_MY_ROUTE_RELEASE_STATE_META, true);
```

- [ ] **Step 5: Run focused tests**

Run the command from Step 2. Expected: all PASS with exact counts and the existing false/ambiguous readiness cases still PASS.

- [ ] **Step 6: Commit**

```powershell
git add wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json tests/unit/homepage tests/unit/products/malaysia-product-hub-template.test.tsx tests/unit/applications/malaysia-application-hub-page.test.tsx tests/infrastructure/application-route-gating.test.ts tests/infrastructure/product-route-gating.test.ts
git commit -m "feat: activate approved Malaysia buyer paths"
```

### Task 6: Add the Documents Hub guide module

**Files:**
- Modify: `wordpress/plugins/tio2-site-model/config/tio2-my-documents-hub.json`
- Modify: `lib/wordpress/documents-hub-v01-types.ts`
- Modify: `lib/wordpress/documents-hub-v01-dto.ts`
- Modify: `components/sites/tio2-my/documents/malaysia-documents-hub.tsx`
- Modify: `components/sites/tio2-my/documents/malaysia-documents-hub.module.css`
- Modify: `tests/unit/documents/malaysia-documents-hub-contract.test.tsx`
- Modify: `tests/integration/documents/malaysia-documents-hub-queries.test.ts`
- Modify: `tests/integration/documents/malaysia-documents-hub-route.test.tsx`
- Modify: `tests/infrastructure/tio2-my-documents-hub-wordpress.test.ts`
- Modify: `tests/e2e/documents-hub.spec.ts`

**Interfaces:**
- Produces `documentGuides: {eyebrow,heading,intro,items[]}` with three items `{targetPageId,label,href}`.

- [ ] **Step 1: Add failing contract and rendering assertions**

```ts
expect(dto.documentGuides.items).toEqual([
  {targetPageId: 'DOC-TDS', label: 'TDS, SDS and COA Guide', href: '/documents/tds-sds-coa/'},
  {targetPageId: 'DOC-REACH', label: 'REACH Documentation Guide', href: '/documents/reach/'},
  {targetPageId: 'DOC-COO', label: 'Certificate of Origin Guide', href: '/documents/certificate-of-origin/'},
])
expect(moduleOrder).toEqual(['documentation-categories', 'document-guides', 'why-on-request'])
```

- [ ] **Step 2: Run focused tests and verify failure**

```powershell
npx vitest run tests/unit/documents/malaysia-documents-hub-contract.test.tsx tests/integration/documents/malaysia-documents-hub-queries.test.ts tests/integration/documents/malaysia-documents-hub-route.test.tsx tests/infrastructure/tio2-my-documents-hub-wordpress.test.ts
```

Expected: FAIL because `documentGuides` is absent.

- [ ] **Step 3: Implement the exact contract and compact module**

Use the exact eyebrow, heading, intro and three links from the approved spec. Validate item count, Page ID, label, absolute internal path and order in the DTO. Render a native `<a>` for every item and preserve the existing request workflow and category copy.

- [ ] **Step 4: Run unit, integration and Playwright checks**

```powershell
npx vitest run tests/unit/documents/malaysia-documents-hub-contract.test.tsx tests/integration/documents/malaysia-documents-hub-queries.test.ts tests/integration/documents/malaysia-documents-hub-route.test.tsx tests/infrastructure/tio2-my-documents-hub-wordpress.test.ts
npx playwright test tests/e2e/documents-hub.spec.ts --project=chromium --grep "Document Guides"
```

Expected: all PASS and no test asserts or executes 200%/forced-colors behavior as part of the current acceptance run.

- [ ] **Step 5: Commit**

```powershell
git add wordpress/plugins/tio2-site-model/config/tio2-my-documents-hub.json lib/wordpress/documents-hub-v01-types.ts lib/wordpress/documents-hub-v01-dto.ts components/sites/tio2-my/documents tests/unit/documents/malaysia-documents-hub-contract.test.tsx tests/integration/documents tests/infrastructure/tio2-my-documents-hub-wordpress.test.ts tests/e2e/documents-hub.spec.ts
git commit -m "feat: add document guide discovery links"
```

### Task 7: Replace Resources H0/Featured/Latest with grouped inventory

**Files:**
- Modify: `wordpress/plugins/tio2-site-model/config/tio2-my-resource-hub.json`
- Modify: `wordpress/plugins/tio2-site-model/config/tio2-my-resource-page-registry.json`
- Modify: `wordpress/plugins/tio2-site-model/includes/resource-hub-v01.php`
- Modify: `wordpress/seed/apply-tio2-my-resource-hub.php`
- Modify: `lib/wordpress/resource-hub-v01-types.ts`
- Modify: `lib/wordpress/resource-hub-v01-dto.ts`
- Modify: `lib/wordpress/resource-hub-v01-jsonld.ts`
- Modify: `components/sites/tio2-my/resources/malaysia-resource-hub.tsx`
- Modify: `components/sites/tio2-my/resources/malaysia-resource-hub.module.css`
- Modify: `tests/fixtures/tio2-my-resource-hub.ts`
- Modify: `tests/fixtures/tio2-my-resource-hub-states.ts`
- Modify: `tests/unit/resources/malaysia-resource-hub-dto.test.ts`
- Modify: `tests/unit/resources/malaysia-resource-hub-template.test.tsx`
- Modify: `tests/unit/resources/malaysia-resource-hub-jsonld.test.ts`
- Modify: `tests/unit/resources/malaysia-resource-hub-sitemap.test.ts`
- Modify: `tests/unit/resources/malaysia-resource-page-registry.test.ts`
- Modify: `tests/integration/resources/malaysia-resource-hub-queries.test.ts`
- Modify: `tests/integration/resources/malaysia-resource-hub-php-parity.test.ts`
- Modify: `tests/integration/resources/malaysia-resource-hub-route.test.tsx`
- Modify: `tests/infrastructure/php/resource-hub-projection.php`
- Modify: `tests/infrastructure/tio2-my-resource-hub-contract.test.ts`
- Modify: `tests/e2e/resource-hub.spec.ts`

**Interfaces:**
- Produces:

```ts
export type MalaysiaResourceGroupKey = 'sourcing' | 'technical-evaluation' | 'trade-market'
export interface MalaysiaResourceGroup {
  readonly key: MalaysiaResourceGroupKey
  readonly heading: 'Sourcing' | 'Technical Evaluation' | 'Trade & Market'
  readonly items: readonly MalaysiaResourceCard[]
}
export type MalaysiaResourcePublicState = 'H0_NO_QUALIFIED_RESOURCE' | 'H2_ONE_PUBLIC_RESOURCE' | 'H3_GROUPED_PUBLIC_RESOURCES'
```

`MalaysiaResourceHubDto` exposes `resourceGroups` and no longer exposes `featuredResources` or `latestResources`.

- [ ] **Step 1: Add failing group, order and parity tests**

Assert the exact state, group headings, Page ID order, eight unique hrefs, visible card count, ItemList order, sitemap set and PHP/TypeScript projection parity.

```ts
expect(dto.publicState).toBe('H3_GROUPED_PUBLIC_RESOURCES')
expect(dto.resourceGroups.map(group => [group.heading, group.items.map(item => item.pageId)])).toEqual([
  ['Sourcing', ['RES-ORIGIN']],
  ['Technical Evaluation', ['RES-PROC', 'RES-CHEMOURS', 'RES-R706']],
  ['Trade & Market', ['RES-TRADE-EU', 'RES-TRADE-UK', 'RES-TRADE-IN', 'RES-TRADE-BR']],
])
```

Also assert `RES-CHEMOURS` is publicly mapped to its exact canonical and `TechArticle`/`BreadcrumbList`, while `RES-R706` is publicly mapped to its exact canonical and only `WebPage`/`BreadcrumbList`.

- [ ] **Step 2: Run focused tests and verify failure**

```powershell
npx vitest run tests/unit/resources/malaysia-resource-hub-dto.test.ts tests/unit/resources/malaysia-resource-hub-template.test.tsx tests/unit/resources/malaysia-resource-hub-jsonld.test.ts tests/unit/resources/malaysia-resource-hub-sitemap.test.ts tests/unit/resources/malaysia-resource-page-registry.test.ts tests/integration/resources/malaysia-resource-hub-queries.test.ts tests/integration/resources/malaysia-resource-hub-php-parity.test.ts tests/infrastructure/tio2-my-resource-hub-contract.test.ts
```

Expected: FAIL on H0/Featured/Latest and candidate registry states.

- [ ] **Step 3: Update the approved Resource contract and registry**

Change the hero anchor to `#browse-resources`. Add eight `resourceRelations` with explicit `groupKey` and `displayOrder`. Copy each card title, summary and permitted visible metadata from that child's current approved contract; do not derive new marketing copy. Set registry mappings for all eight exact public candidate routes and keep indexing authorization false.

- [ ] **Step 4: Implement the TypeScript and PHP grouped projection**

Both projections must apply the same predicate: exact registered Page ID, path, scope, locale, canonical, approved relation state and permitted metadata. If none qualify, return H0; if one qualifies, H2; if two or more qualify, return H3 with nonempty groups in fixed order. Remove an ineligible item from cards, ItemList and sitemap together.

```ts
const publicState: MalaysiaResourcePublicState = cards.length === 0
  ? 'H0_NO_QUALIFIED_RESOURCE'
  : cards.length === 1
    ? 'H2_ONE_PUBLIC_RESOURCE'
    : 'H3_GROUPED_PUBLIC_RESOURCES'
```

- [ ] **Step 5: Implement the final module order**

Render Header, Breadcrumb, Hero, `Browse Procurement Resources`, `How We Use Evidence`, `Buyer Questions`, Footer. Do not render Featured, Latest, Current or ranking labels. Render trade freshness metadata only when the complete approved trade tuple exists.

- [ ] **Step 6: Run all Resource checks**

```powershell
npx vitest run tests/unit/resources tests/integration/resources tests/infrastructure/tio2-my-resource-hub-contract.test.ts
npx playwright test tests/e2e/resource-hub.spec.ts --project=chromium --grep "grouped inventory"
```

Expected: PASS with eight visible and machine-readable resources in identical order.

- [ ] **Step 7: Commit**

```powershell
git add wordpress/plugins/tio2-site-model/config/tio2-my-resource-hub.json wordpress/plugins/tio2-site-model/config/tio2-my-resource-page-registry.json wordpress/plugins/tio2-site-model/includes/resource-hub-v01.php wordpress/seed/apply-tio2-my-resource-hub.php lib/wordpress/resource-hub-v01-types.ts lib/wordpress/resource-hub-v01-dto.ts lib/wordpress/resource-hub-v01-jsonld.ts components/sites/tio2-my/resources tests/fixtures/tio2-my-resource-hub.ts tests/fixtures/tio2-my-resource-hub-states.ts tests/unit/resources tests/integration/resources tests/infrastructure/php/resource-hub-projection.php tests/infrastructure/tio2-my-resource-hub-contract.test.ts tests/e2e/resource-hub.spec.ts
git commit -m "feat: publish grouped Malaysia resource inventory"
```

### Task 8: Align prerelease tests and sanitized evidence

**Files:**
- Modify: `tests/e2e/prerelease-smoke.spec.ts`
- Modify: `tests/e2e/prerelease-live-forms.spec.ts`
- Create: `tests/e2e/prerelease-public-paths.spec.ts`
- Modify: `scripts/prerelease/Prerelease.Core.psm1`
- Modify: `scripts/prerelease.ps1`
- Modify: `tests/infrastructure/prerelease-test-actions.test.ts`
- Create: `tests/infrastructure/prerelease-evidence-scope.test.ts`
- Create: `scripts/prerelease/Confirm-PrereleaseInbox.ps1`
- Create: `tests/infrastructure/prerelease-inbox-confirmation.test.ts`

**Interfaces:**
- `Get-PrereleaseTestActionPlan -Action Test` returns both smoke and public-path specs.
- `TestLiveForms` runs only when `PRERELEASE_LIVE_FORMS_ENABLED=true` and expects three direct provider workflows.
- Evidence `result.json` contains explicit required checks and explicit removed-check records.
- `Confirm-PrereleaseInbox.ps1 -EvidenceRoot $evidenceRoot` reads the sanitized provider attempts, prompts for each matching inbox result, and writes `inbox-confirmation.json` without addresses or message content.

- [ ] **Step 1: Add failing action-plan and evidence-scope tests**

Assert required runtime widths `[1440,768,390]`, exact inventory counts, Chromium/Axe/keyboard checks, and these four excluded records:

```json
[
  {"check":"native_browser_200_percent","status":"NOT_TESTED","reason":"NO_LONGER_REQUIRED_BY_USER_DECISION"},
  {"check":"physical_or_touch_device","status":"NOT_TESTED","reason":"NO_LONGER_REQUIRED_BY_USER_DECISION"},
  {"check":"screen_reader_or_at","status":"NOT_TESTED","reason":"NO_LONGER_REQUIRED_BY_USER_DECISION"},
  {"check":"forced_colors","status":"NOT_TESTED","reason":"NO_LONGER_REQUIRED_BY_USER_DECISION"}
]
```

- [ ] **Step 2: Run infrastructure tests and verify failure**

```powershell
npx vitest run tests/infrastructure/prerelease-test-actions.test.ts tests/infrastructure/prerelease-evidence-scope.test.ts tests/infrastructure/prerelease-inbox-confirmation.test.ts
```

Expected: FAIL because the public-path suite and explicit scope records are absent.

- [ ] **Step 3: Remove the emulated 200% prerelease smoke test**

Delete the `Emulation.setPageScaleFactor` test block from `prerelease-smoke.spec.ts`. Do not change historical page-specific test files outside the current prerelease action; they remain historical checks and must not be invoked by this candidate's required suite.

- [ ] **Step 4: Add exact public-path runtime assertions**

At 1440, 768 and 390 widths, assert native links, exact counts, target 200 responses, no horizontal overflow, keyboard activation, visible focus and Axe results for Home, Product, Applications, Documents and Resources. Verify Browser Back/Return preserves the expected page identity and state on affected consumer paths. Verify the full 58-object internal-link scan treats only `/contact/` as the approved exception.

- [ ] **Step 5: Rewrite live form evidence around direct provider responses**

Submit RFQ, Sample and Documents from their public pages using the configured prerelease sender values. Record only workflow, Page ID, request token, provider HTTP status, provider category, Thank You request value and timestamp. Reject evidence containing `access_key`, email address, company, message or serialized form payload.

```ts
expect(attempt.providerCategory).toBe('accepted')
expect(attempt.httpStatus).toBe(200)
const thankYouRequestByWorkflow = {rfq: 'quote', sample: 'sample', documents: 'documents'} as const
expect(attempt.thankYouRequest).toBe(thankYouRequestByWorkflow[attempt.workflow])
expect(JSON.stringify(attempt)).not.toMatch(/access_key|@|company|message/i)
```

Destination-inbox receipt remains a separate operational evidence row keyed by `workflow + requestToken`; provider acceptance alone must not set `inboxReceived=true`.

- [ ] **Step 6: Add the inbox-correlation writer and redaction test**

The script must load the exact three provider-positive attempts from `result.json`, prompt the operator for `received` and UTC `receivedAt`, reject unknown or duplicate tokens, bind the output to the result's candidate commit, and write only `schemaVersion`, `candidateCommit` and `{workflow,requestToken,received,receivedAt}`. The test must fail if the output contains `@`, `access_key`, `receiver`, `company`, `message` or `payload`.

```powershell
param([Parameter(Mandatory)][string]$EvidenceRoot)
$result = Get-Content -Raw (Join-Path $EvidenceRoot 'result.json') | ConvertFrom-Json
$receipts = foreach ($attempt in $result.formAttempts) {
    $received = (Read-Host "Inbox received for $($attempt.workflow) / $($attempt.requestToken)? [yes/no]") -eq 'yes'
    $receivedAt = if ($received) { [DateTimeOffset]::Parse((Read-Host 'UTC receivedAt')).ToUniversalTime().ToString('o') } else { $null }
    [ordered]@{workflow=$attempt.workflow;requestToken=$attempt.requestToken;received=$received;receivedAt=$receivedAt}
}
```

- [ ] **Step 7: Run infrastructure and compile checks**

```powershell
npx vitest run tests/infrastructure/prerelease-test-actions.test.ts tests/infrastructure/prerelease-evidence-scope.test.ts tests/infrastructure/prerelease-inbox-confirmation.test.ts
npm run typecheck
```

Expected: PASS; test plan includes the new public-path suite and contains no required native-zoom/device/AT/forced-colors action.

- [ ] **Step 8: Commit**

```powershell
git add tests/e2e/prerelease-smoke.spec.ts tests/e2e/prerelease-live-forms.spec.ts tests/e2e/prerelease-public-paths.spec.ts scripts/prerelease/Prerelease.Core.psm1 scripts/prerelease.ps1 scripts/prerelease/Confirm-PrereleaseInbox.ps1 tests/infrastructure/prerelease-test-actions.test.ts tests/infrastructure/prerelease-evidence-scope.test.ts tests/infrastructure/prerelease-inbox-confirmation.test.ts
git commit -m "test: align prerelease evidence with approved scope"
```

### Task 9: Verify the D16 candidate before prerelease execution

Workflow authority: apply `D:/23MySec/docs/architecture/PRERELEASE_COMBINED_CANDIDATE_PREMERGE_ACCEPTANCE_RULING_V1.0.md`. Task 9 ends with a clean task-branch Gate 8 handoff; it does not move the branch directly to `main`.

**Files:**
- Modify only if a preceding test finds a defect in an already-listed implementation file.
- Create: `docs/verification/prerelease-public-paths/gate8_evidence_manifest.json`
- Create: `docs/verification/prerelease-public-paths/gate8_handoff_receipt.md`
- Evidence: D16 baseline, implementation/evidence commits, Build ID, runtime identity and clean-worktree output.

**Interfaces:**
- Consumes: Tasks 2-8.
- Produces: a clean task-branch Gate 8 handoff eligible for independent D23 pre-merge acceptance.

- [ ] **Step 1: Scan active client code for retained endpoint calls**

```powershell
rg -n "(/api/rfq/submit|/api/tio2-my/rfq-private-submit|/api/sample/submit)" components/sites/tio2-my/request-a-quote components/sites/tio2-my/request-sample components/sites/tio2-my/request-documents lib/rfq/malaysia-rfq-receiver.ts lib/request-sample/malaysia-request-sample-receiver.ts lib/request-documents/malaysia-request-documents-receiver.ts
```

Expected: no matches. Matches in retained server route files or inactive server-only modules are permitted.

- [ ] **Step 2: Run focused suites**

```powershell
npx vitest run tests/unit/forms tests/unit/rfq tests/unit/request-sample tests/unit/request-documents tests/unit/thank-you tests/unit/homepage tests/unit/products/malaysia-product-hub-template.test.tsx tests/unit/applications tests/unit/documents/malaysia-documents-hub-contract.test.tsx tests/unit/resources tests/integration/documents tests/integration/resources tests/infrastructure/prerelease-test-actions.test.ts tests/infrastructure/prerelease-evidence-scope.test.ts tests/infrastructure/tio2-my-prerelease-public-paths.test.ts
```

Expected: PASS.

- [ ] **Step 3: Run repository validation**

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

Expected: all commands exit 0.

- [ ] **Step 4: Confirm clean candidate identity**

```powershell
git status --short
git branch --show-current
git rev-parse HEAD
```

Expected before evidence packaging: branch `codex/prerelease-public-paths-forms` and no uncommitted implementation files.

- [ ] **Step 5: Generate and validate the Gate 8 machine handoff**

The Manifest must conform to `D:/23MySec/docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`, bind every evidence path and SHA-256, list all affected Page IDs and acceptance-condition IDs, and identify the four removed checks as not tested by user decision.

```powershell
python D:/23MySec/skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py docs/verification/prerelease-public-paths/gate8_evidence_manifest.json
```

Expected: `PASS`.

- [ ] **Step 6: Commit the machine handoff and confirm the final evidence identity**

```powershell
git add docs/verification/prerelease-public-paths/gate8_evidence_manifest.json docs/verification/prerelease-public-paths/gate8_handoff_receipt.md
git commit -m "test: package prerelease public path evidence"
git status --short
git rev-parse HEAD
```

Expected: empty status and one immutable task-branch evidence HEAD referenced by the handoff.

### Task 9A: Independent pre-merge acceptance and serial integration

**Files:**
- D23 Reviewer output: `D:/23MySec/docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0.md`
- D16 integration record: `docs/verification/prerelease-public-paths/local-integration-record.json`

**Interfaces:**
- Consumes: Task 9 machine handoff and held task runtime.
- Produces: `INTEGRATION_READY` or an exact return Finding; after PASS, a verified clean local `main` candidate for Task 10.

- [ ] **Step 1: Dispatch the exact handoff to the existing independent Reviewer**

Project Control sends the Manifest path, implementation/evidence commits, Build ID and runtime URL to D23 task `00-Gate9-01my开发`, thread `01a07e7e-24ef-7390-beab-f50fcbf169e0`.

- [ ] **Step 2: Run independent preflight and read-only acceptance**

The Reviewer runs:

```powershell
python D:/23MySec/skills/runtime-implementation-verification/scripts/validate_evidence_manifest.py D:/16Wordpress_nextjs/.worktrees/prerelease-public-paths-forms/docs/verification/prerelease-public-paths/gate8_evidence_manifest.json
python D:/23MySec/skills/runtime-implementation-verification/scripts/gate9_preflight.py D:/16Wordpress_nextjs/.worktrees/prerelease-public-paths-forms/docs/verification/prerelease-public-paths/gate8_evidence_manifest.json --rounds 2
```

It then independently inspects the exact diff, runtime buyer paths, form result boundaries, provisional Application behavior, grouped Resource parity and sanitized evidence. It writes all four statuses. PASS requires `INTEGRATION_STATUS=INTEGRATION_READY`; final page/batch Gate 9 remains not final.

- [ ] **Step 3: Merge accepted task commit into current develop**

The D16 serial integrator verifies no other integration is active, records current target/source identities, merges the exact accepted commit, and does not resolve a semantic conflict without returning it.

```powershell
git switch develop
git merge --no-ff codex/prerelease-public-paths-forms
```

- [ ] **Step 4: Run develop combination regression**

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npx playwright test tests/e2e/prerelease-public-paths.spec.ts --project=chromium --workers=1
npx vitest run tests/unit/forms tests/unit/rfq tests/unit/request-sample tests/unit/request-documents tests/unit/thank-you
```

Expected: all local checks PASS. Do not run the real-provider live-forms suite until Task 10.

- [ ] **Step 5: Record and return develop integration identity**

Write `local-integration-record.json` with source branch/commit, develop before/after commits, merge commit, conflicts, exact commands/results, Build ID and evidence hashes. Project Control verifies the accepted implementation is present and that the merge introduced no unreviewed semantic change.

- [ ] **Step 6: Merge verified develop into local main**

```powershell
git switch main
git merge --no-ff develop
npm run typecheck
npm run build
git status --short
```

Expected: clean local `main`, the accepted implementation reachable from HEAD, and successful typecheck/build. Do not push or deploy.

### Task 10: Execute targeted prerelease and collect evidence

**Files:**
- Generated evidence: `docs/verification/prerelease/runs/$evidenceId/result.json`
- Generated screenshots: `docs/verification/prerelease/runs/$evidenceId/screenshots/`
- Generated inbox correlation record: `docs/verification/prerelease/runs/$evidenceId/inbox-confirmation.json`

**Interfaces:**
- Consumes: clean D16 main candidate from Task 9 and local ignored prerelease credentials.
- Produces: runtime-bound evidence with run ID, commit, build ID, CMS identity hash, exact public-path counts and separated provider/inbox rows.

- [ ] **Step 1: Reset and start the exact candidate**

```powershell
npm run prerelease:stop
npm run prerelease:reset
npm run prerelease:status
```

Expected: HEALTHY runtime bound to the Task 9 commit and a new Build ID. If no prior stack exists, use `npm run prerelease:start` instead of reset.

- [ ] **Step 2: Run the required prerelease suite**

```powershell
npm run prerelease:test
```

Expected: PASS at 1440/768/390, exact 6/14/2/3/5/30/3/8/3 inventory counts, changed-page keyboard/focus/semantics/Axe checks, and only the approved `/contact/` exception in the 58-object internal-link scan.

- [ ] **Step 3: Run three controlled live submissions**

```powershell
npm run prerelease:test:forms-live
```

Expected: three provider-positive rows with HTTP 200, `providerCategory=accepted`, distinct workflow/request-token pairs and matching Thank You states. No evidence file contains secrets or buyer content.

- [ ] **Step 4: Record destination-inbox correlation separately**

After inspecting the configured inbox, run the correlation writer against the exact live-form evidence directory:

```powershell
$evidenceRoot = (Get-ChildItem 'docs/verification/prerelease/runs' -Directory | Sort-Object LastWriteTimeUtc -Descending | Select-Object -First 1).FullName
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prerelease/Confirm-PrereleaseInbox.ps1 -EvidenceRoot $evidenceRoot
```

Answer each prompt from the actual inbox. The script writes only candidate commit, workflow, request token, receipt boolean and UTC receipt time. If any receipt is absent, it records `received:false` and `THREE_FORM_PROVIDER_AND_INBOX` remains open.

- [ ] **Step 5: Verify evidence binds to one candidate**

```powershell
$status = npm run prerelease:status --silent | ConvertFrom-Json
$result = Get-Content -Raw $status.currentRun.evidencePath | ConvertFrom-Json
if ($status.currentRun.commit -ne $result.commit) { throw 'candidate mismatch' }
```

Expected: no exception; run, commit, Build ID and CMS identity refer to one candidate.

### Task 11: Perform D23 read-only closeout and internal-link analysis handoff

**Files:**
- Create: `D:/23MySec/docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_GATE9_REVIEW_V1.0.md`
- Create: one successor current Gate 9 Manifest for each materially changed owner: `HOME-001`, `PRODUCT-000`, `APP-000`, `DOC-000`, `RES-000`, `CONV-RFQ`, `CONV-SAMPLE`, `CONV-DOC`, `CONV-THANK`.
- Modify: `D:/23MySec/01_PROJECT_INDEX.md`
- Modify: `D:/23MySec/00_PROJECT_STATUS.md` only after evidence proves the change.

**Interfaces:**
- Consumes: Task 10 result, screenshots, sanitized form provider rows, inbox confirmation and inherited run `20260908T162630Z-98c2c573dd09`.
- Produces: evidence mapping and the exact closeout state; supplies the completed 58-object link report to the internal-link agent.

- [ ] **Step 1: Map inherited and new evidence without retesting unchanged pages**

Record the inherited run/commit/Build identity, the new run/commit/Build identity, changed surfaces and why each prior result remains valid or was replaced. Keep the six Resource child content/visual passes inherited unless their visible child implementation changed.

- [ ] **Step 2: Review retained acceptance conditions**

Verify route/scope/canonical/robots/sitemap/Schema parity, exact inventory counts, browser-direct endpoint behavior, provider/inbox separation, three Thank You states, three widths, overflow, keyboard/focus, semantics, Axe, Browser Back/Return and the internal-link result. For `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN` and `RES-TRADE-BR`, verify the applicable official-source URLs remain reachable and the source/review dates satisfy each current child contract. Explicitly list the four removed checks as not tested by user decision.

- [ ] **Step 3: Record outcomes from evidence**

Only when every retained condition passes and all three inbox receipts match, write:

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

If a retained condition fails, record the specific condition and affected Page IDs as open; do not issue a partial overall PASS.

- [ ] **Step 4: Send the complete link evidence to the internal-link agent**

Request analysis of missing, weak or misleading internal paths using the exact tested candidate and all 58 registered objects. The agent may recommend contract changes; it must not directly add links that lack a current approved page contract.

- [ ] **Step 5: Commit D23 closeout records**

```powershell
git add docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_GATE9_REVIEW_V1.0.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md
git diff --name-only -- pages/home pages/products pages/applications pages/documents pages/resources pages/conversion | ForEach-Object { git add -- $_ }
git commit -m "docs: record prerelease public path Gate 9 review"
```

Before committing, inspect `git diff --cached --name-only` and unstage every path that is not one of the nine newly created successor Manifests or the three exact files listed in the first `git add` command. Do not include unrelated staged or untracked D23 files.
