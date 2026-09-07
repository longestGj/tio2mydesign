# HOME-001 Gate 9 Read-Only QA Evidence V0.1

## 1. Review outcome

| Field | Value |
|---|---|
| Review ID | `HOME-001-G9-ROQA-01` |
| Review date | `2026-09-04` |
| Review state | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Recommended disposition | `CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 10 | `LOCKED / NOT AUTHORIZED` |

The implementation is materially present and several core contracts pass, but fresh browser and test evidence exposes blocking defects. This document does not declare Gate 9 passed.

## 2. Scope and method

The review used the actual clean development worktree at commit `49289d40fdb0b91d28f534776464403883d912ff`. It did not use the stale statement in `00_PROJECT_STATUS.md` that external development had not started. No WordPress, Next.js, CMS, component, style, test, deployment or production source was changed.

Fresh checks covered:

- locked content and implementation file hashes;
- focused HOME-001 unit, integration and infrastructure tests;
- TypeScript, targeted ESLint and a `SITE_ID=tio2-my` production build;
- shared Global Chrome end-to-end tests;
- browser-rendered 1440, 1024, 768, 390 and 320 views;
- Mobile Menu open/Escape focus return and Mobile Products expanded state;
- Axe, keyboard focus, touch target, overflow, image load and console/request failures;
- Title, Meta, Canonical, robots behavior, H1, language and JSON-LD;
- downstream link readiness and RFQ target readiness;
- `site_scope=tio2-my` isolation and cross-scope leakage scan.

## 3. Fresh command evidence

| Check | Command | Result |
|---|---|---|
| Focused HOME-001 contracts | `npx vitest run` with 8 Home/Chrome/SEO/GEO files | PASS — 8 files, 49 tests |
| Broad homepage tests | `npx vitest run tests/unit/homepage tests/integration/homepage ...` | FAIL — 23 files passed, 1 failed; 295 tests passed, 1 failed |
| Full repository suite | `npm test -- --reporter=dot` | FAIL — 208 files passed, 11 failed, 18 skipped; 2,087 tests passed, 28 failed, 47 skipped |
| TypeScript | `npm run typecheck` | PASS |
| Targeted ESLint | Home, Global Chrome, DTO, SEO/GEO and related tests | PASS — 0 errors |
| Production build | `SITE_ID=tio2-my`, isolated Next dist | PASS — compiled, TypeScript and 35-route generation completed |
| Global Chrome browser tests | `tio2-my-global-navigation.spec.ts` | PASS — 9/9 at 390, 768 and 1440 |
| Browser QA | custom Playwright + Axe audit | Completed — blocking findings recorded below |

The full-suite failures are not all HOME-001 defects. Most WordPress wrapper/runtime failures are caused by the worktree not containing the untracked local `wordpress/.env`; they are environment-dependent and were not bypassed. Separately reproducible failures remain in Site A revalidation, Application/Resource relationship contracts and a Product Hub asset-hash timeout. These broader failures must not be reported as a green repository suite.

## 4. Browser matrix

| Width | HTTP | Page height | Horizontal overflow | Header | Page RFQ | Mobile Products default | Keyboard | 44px failures | Axe serious/critical |
|---:|---:|---:|---:|---:|---:|---|---:|---:|---:|
| 1440 | 200 | 6247 | 0 | 84px | Visible | Four groups visible | 42/42 reached; 0 focus failures | 14 text links | 1 rule / 22 nodes |
| 1024 | 200 | 6740 | 0 | 84px | Visible | Four groups visible | 42/42 reached; 0 focus failures | 14 text links | 1 rule / 22 nodes |
| 768 | 200 | 7593 | 0 | 64px | Visible | Four groups visible | 36/36 reached; 0 focus failures | 13 text links | 1 rule / 22 nodes |
| 390 | 200 | 7602 | 0 | 64px | Hidden as approved | Four groups not visible | 36/36 reached; 0 focus failures | 0 | 1 rule / 13 nodes |
| 320 | 200 | 8396 | 0 | 64px | Hidden as approved | Four groups not visible | 36/36 reached; 0 focus failures | 0 | 1 rule / 13 nodes |

The 390 and 320 views satisfy the explicit ≥44px Buyer Clean target rule. Tablet text links remain below 44px and should be reviewed as touch targets, even though the Gate 7 package explicitly calls out the 390px threshold.

## 5. Contracts that passed

### 5.1 Content and responsive behavior

- One H1: `Malaysia Titanium Dioxide for Industrial Buyers`.
- Content sequence and copy are present for Hero, Start Here, Markets, Products, Applications, Company, Documents, Resources / Buyer Answers and the Desktop/Tablet page RFQ.
- 1440, 1024 and 768 render the page-level RFQ.
- 390 and 320 omit the page-level RFQ while Header, Hero and Footer RFQ remain present.
- No `Sample` CTA appears on Home.
- Mobile Products expanded state exposes all 14 unique model IDs once, grouped 6/5/2/1. M-2377 has no invented process label.
- No horizontal overflow was detected at any required width.
- Buyer Clean contains none of the scanned internal terms such as `CURRENT`, `PENDING`, `NOT LIVE`, `PROVISIONAL URL`, `page_id` or `evidence gate`.

### 5.2 Global Chrome, Logo and interaction

- Desktop current state is bold with a 3px teal underline and buyer-visible `CURRENT=0`.
- Mobile current state is bold with a 4px teal left marker.
- Inactive navigation is absent from the active viewport accessibility tree.
- Mobile Menu contains the approved eight destinations in order, focuses Home on open, and returns focus to Menu on Escape.
- Header heights are 84px at 1440/1024 and 64px at 768/390/320.
- Header and Footer use the approved production SVG Logo hashes.
- Keyboard traversal reached all visible focusable elements in each default view, and every reached element had a visible, unobscured focus indicator.

### 5.3 SEO, GEO and Schema

| Field | Browser / contract result |
|---|---|
| Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` |
| Meta Description | Exact approved 152-character value |
| Canonical | Browser serializes `https://tio2malaysia.com`; URL normalization equals `https://tio2malaysia.com/` |
| Language | `en` |
| H1 | Exact approved value; one instance |
| Local robots | `noindex, nofollow`, by intentional local safety policy |
| Production robots contract | Unit test with `VERCEL_ENV=production` passes `index, follow` |
| JSON-LD | One parseable script, 5 nodes |
| Relationships | All 5 approved relationships resolve to existing nodes |
| Forbidden fields | 0 matches |

The graph contains WebSite, WebPage, Organization, Brand and Product. It satisfies WebPage→isPartOf→WebSite, WebSite→publisher→Organization, WebPage→about→Brand/Organization/Product, Product→brand→Brand and Product→manufacturer→Organization. `Organization.brand` is absent and `manufacturer` appears only on Product.

### 5.4 Site isolation

- Rendered root is `data-site-id="tio2-my"` and `data-site-scope="tio2-my"` at every viewport.
- Browser HTML contains no `tio2-a`, `tio2-b`, TIOVAR, `tio2products.com` or `tio2hub.com` leakage.
- The DTO rejects missing, duplicate or foreign scope and binds the exact immutable Home contract.
- Canonical and all Schema IDs use only `tio2malaysia.com`.

## 6. Blocking findings

### P0-01 — Accessible teal contract is not implemented

The current Home stylesheet defines `--teal: #009D91`. Axe reports the `color-contrast` rule as serious at every viewport:

- 22 failing nodes at 1440, 1024 and 768;
- 13 failing nodes at 390 and 320;
- `#009D91` on white is measured at approximately 3.36:1;
- `#009D91` on the pale section background is approximately 3.11:1;
- white on `#009D91` CTA backgrounds is approximately 3.36:1;
- the page-RFQ eyebrow on `#063873` is approximately 3.42:1.

This directly contradicts the approved V0.3 accessible palette and the 4.5:1 minimum.

Required correction:

1. Use approved deep teal `#007F77` for small text on white/pale backgrounds and for solid CTA backgrounds with white text.
2. On dark blue surfaces, use a separately tested light teal such as `#14B8A6` at 4.63:1 against `#063873`, or white; do not reuse dark teal without a fresh contrast calculation.
3. Keep brighter teal only for non-text decoration where appropriate.
4. Re-run Axe at 1440/1024/768/390/320 and require zero serious/critical violations.

Owner: external Home implementation.

### P0-02 — Mobile default Products state hides the four approved group choices

At 390 and 320 the default state exposes only one summary, `View product groups +`. The four group names and their 6/5/2/1 counts are not visible until the entire grid is opened. This conflicts with the approved Mobile behavior, which requires all four group names/counts at the first level and an accessible expansion path.

Required correction:

1. Render the four group names and counts in the default Mobile Products state.
2. Provide per-group or equivalently clear accessible expansion controls; do not create 14 large cards.
3. Preserve the expanded 14-model uniqueness and 6/5/2/1 grouping.
4. Keep the exact approved Product copy and CTA; do not shorten sentences to make the layout fit.

Owner: external Home implementation.

### P0-03 — Buyer-visible Home and Global Chrome links are not release-ready

Fresh GET checks after canonical redirects produced:

| Target | Result |
|---|---:|
| `/applications/` | 404 |
| `/markets/european-union/` | 404 |
| `/markets/united-kingdom/` | 404 |
| `/markets/india/` | 404 |
| `/markets/brazil/` | 404 |
| `/products/chloride-process-titanium-dioxide/` | 404 |
| `/products/sulfate-process-titanium-dioxide/` | 404 |
| `/request-documents/` | 500 |
| `/resources/non-china-titanium-dioxide/` | 500 |

The five provisional Application cards and `RES-PROC` are correctly withheld from navigation, but they remain buyer-visible pseudo-links using `role="link" aria-disabled="true"` and arrow labels. That presentation is not a completed buyer journey.

Required correction:

1. The owning page tasks must make every approved, buyer-visible target return a valid 2xx page before release.
2. Do not redirect across `site_scope`, use unrelated fallback content, or guess provisional URLs.
3. Until a target is approved and ready, render its card as plain informational content without link semantics/arrow, or obtain a specific content decision.
4. Re-run the Home link crawl and require no 4xx/5xx for rendered anchors.

Owners: Markets, Products Process, Applications, Documents/Conversion, Resources and Global Chrome owners; Home must consume only approved route readiness.

### P0-04 — Fixed RFQ route is reachable but the form is unavailable

`/request-a-quote` returns 200 and renders the correct H1, but its only conversion state says `The quotation request form is temporarily unavailable.` No form fields or submit control are present because `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY` is not configured in the reviewed runtime.

Required correction:

1. Configure the approved production-equivalent RFQ receiver boundary in a controlled environment.
2. Re-test validation, privacy link, error retention, success acknowledgment, duplicate submission handling and no cross-scope transmission with synthetic data.
3. Keep the unavailable state fail-closed until the receiver is truly configured; do not invent a Contact fallback.

Owner: CONV-RFQ external implementation/release configuration.

## 7. Important findings and governance issues

### P1-01 — Visual fidelity is materially different from the current Gate 7 images

The implementation page heights differ from the current visual evidence by +564px at 1440, +1,520px at 1024, +749px at 768 and −1,282px at 390. The desktop H1 renders at 72px and all navy, while the approved Home visual uses a more compact two-line hierarchy with teal emphasis and the project visual standard sets the desktop H1 range at 52–64px. The current 390 H1 is 38px while the V0.3 visual direction records 42px.

Required correction:

- restore the approved hierarchy, line-break behavior, color emphasis and spacing without changing the approved English sentence;
- correct the mobile Products default state before judging total page height;
- generate fresh implementation screenshots and compare section by section rather than treating an arbitrary overall height as the only fidelity measure.

Owner: external Home implementation, followed by Home visual owner review.

### P1-02 — Gate 7 Tablet authority contains a Start Here inconsistency

The Gate 7 package and Desktop/Mobile baselines include Start Here, while `HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` lists a Tablet order that omits it and the V0.2 Tablet images also omit it. The implementation retains Start Here at 768/1024.

Required governance decision: project control should explicitly confirm whether Tablet retains or merges Start Here, then update the authority before requiring pixel-level Tablet closure. Development must not guess.

### P1-03 — The broader repository verification is not green

The focused HOME-001 suite is green, but the broader suite is not:

- Site A `/products` revalidation is rejected as an unapproved Product path, failing an existing generic-page test.
- Three Application/Resource relationship query tests fail reproducibly.
- One Product Hub asset-hash test times out reproducibly at 5 seconds.
- Environment-bound WordPress tests fail because this worktree lacks its untracked `wordpress/.env`; these are not classified as product defects without a proper environment rerun.

Required correction: the external development owner must resolve the deterministic regressions and run environment-dependent tests in the intended local environment. HOME-001 cannot be used to claim a green repository suite.

## 8. Release blockers retained from Gate 7

- hero material image production-use clearance;
- all currently failing or provisional downstream routes;
- production-equivalent RFQ receiver/form;
- production host, DNS, deployment and index authorization;
- final production robots/sitemap behavior under the real host environment;
- factual fields that remain gated outside the approved visible Home copy;
- final visual and accessibility regression closure.

## 9. Closure recommendation

Submit `HOME-001-G9-ROQA-01` to project control as `CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED`. Gate 9 should remain open until P0-01 through P0-04 are fixed and freshly reverified. P1-01 and P1-02 require visual/governance resolution; P1-03 requires external development triage. Gate 10 remains locked regardless of later Gate 9 disposition.
