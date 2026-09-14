# TiO2 Malaysia Full Public SEO + GA4 Gate 9 Independent Review V1.0

## 1. Review control

| Field | Value |
|---|---|
| Review ID | `TIO2-MY-FULL-PUBLIC-SEO-GA4-G9-IR-01` |
| Review date | `2026-09-13` |
| Reviewer | Independent Gate 9 reviewer, separate from Gate 8 executor |
| Candidate worktree | `D:\16Wordpress_nextjs\.worktrees\tio2-my-full-public-seo-ga4` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `c5976a23ab1dc93618b0c79008c02fda69ed9f5a` |
| Implementation commit | `e0fa4fd1c3513bf90c7160a85b781f19650981ee` |
| Evidence commit | `b4ed9870c6413667a9c33d3d5c3e939d435ffc45` |
| Handoff HEAD | `503bf3fce50ff3dc9ad3cc4d06eff927445dae71` |
| Build ID / runtime | `tio2-my-seo-ga4-e0fa4fd1` / `http://127.0.0.1:3123` |
| Result | `RETURN / GATE_9_NOT_PASS` |
| Mandatory findings | `2 P0` |
| Gate 10 / deploy / release / DNS / indexing | `NOT_AUTHORIZED` |
| D16 modification by this review | None; read-only review only |

The candidate is not accepted at Gate 9 because current buyer-visible/runtime behavior conflicts with two approved Gate 6 inputs. The separately recorded production GTM/GA4 identifiers and atomic legal activation remain known release blockers and are not counted as new findings here.

## 2. Candidate and evidence integrity

- The worktree was clean and on the declared branch and handoff HEAD.
- Baseline, implementation and evidence commits are all ancestors of the handoff HEAD.
- `503bf3f` adds only `gate8_evidence_manifest.json` on top of `b4ed987`; this is the expected resolution of the manifest self-reference problem. The manifest's `evidence_head=b4ed987...` correctly identifies the commit containing the receipt and evidence, while final HEAD contains the manifest itself.
- The manifest validates against `GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`.
- All 12 declared evidence files exist and match their declared SHA-256 values. The receipt has exactly the same 12 evidence references.
- All 11 hashed Gate 6 normative inputs match the current D23 files.
- The implementation inventory has exactly 59 objects: 58 routable objects, 57 indexable/Sitemap pages, one `noindex, follow` runtime 404 and one `noindex, nofollow` Thank You page.
- Row bindings for URL, HTTP status, robots, Sitemap, Title, Meta, H1, canonical, Schema types and source Manifest match the D23 target and SEO delivery ledgers after normalising the deliberate `NONE` values for SYS-404.

## 3. Fresh independent verification

| Check | Result |
|---|---|
| Targeted Vitest: publication inventory, indexing, GA/GTM, consent, Thank You, production contracts and prerelease paths | `7 files / 31 tests PASS` |
| Full-public Playwright runtime test | `2 / 2 PASS`; all 58 routable identities and 57 Sitemap URLs verified |
| Evidence SHA verification | `12 / 12 MATCH` |
| Gate 6 normative input SHA verification | `11 / 11 MATCH` |
| Manifest JSON Schema | `PASS` |
| About 390px title | `4 lines`; no horizontal overflow |
| Static visual evidence | Home `1440×6524`; Privacy `768×8161`; Brazil PT-BR `390×6972`; all hashes match Manifest |
| Current blocked-analytics network state | No Google measurement request in delivered E2E evidence and fresh full-public Playwright run |

These passing checks do not override the two content/runtime contradictions below.

## 4. Mandatory findings

### P0-01 — Inactive Analytics UI still asks for and stores Analytics consent

**Approved/current state**

- `wordpress/plugins/tio2-site-model/config/tio2-my-legal-pages.json:5,10-14` sets `releaseState=no_optional_analytics` and `optionalAnalyticsAuthorized=false`.
- The same current public Cookie Policy states that while no optional Analytics technology is active, the interface will not ask the visitor to accept a non-existent Analytics service.
- Gate 6 requires Analytics runtime and active legal content to switch atomically; absent activation evidence, the no-Analytics runtime, copy and Cookie Settings state must remain together.

**Observed implementation**

- `components/sites/tio2-my/consent/malaysia-cookie-settings.tsx:112` always renders the `Allow analytics` checkbox.
- `components/sites/tio2-my/consent/malaysia-cookie-settings.tsx:118` always renders `Accept analytics`, without an `analyticsActive` condition.
- `components/sites/tio2-my/consent/malaysia-cookie-settings.tsx:92-95` applies and stores `analytics_accepted` even in the blocked/no-Analytics state.
- `tests/unit/legal/consent-manager.test.tsx:49-63,80-90` currently locks this contradictory behavior into the test suite.
- Fresh runtime observation on `/cookie-policy/` showed the dialog simultaneously saying “No optional Analytics ... is currently active” and offering `Allow analytics` and `Accept analytics`. Clicking it stored `{"version":1,"choice":"analytics_accepted",...}` and set the shared consent snapshot to `analytics=granted`.

**Impact**

The currently visible legal promise and actual preference control disagree. A consent choice can also be captured for a service that is not yet active and then be reused when activation occurs, bypassing the intended atomic active-copy/active-runtime decision surface.

**Required correction and recheck**

1. When `analyticsActive=false`, do not render Analytics checkbox, `Accept analytics`, or another control capable of storing/granting `analytics_accepted`.
2. In the inactive state, stale or legacy `analytics_accepted` must not produce a granted shared consent state; the effective state remains `necessary_only`/denied.
3. Keep the current no-Analytics wording and zero Google requests until the separately listed activation conditions are all satisfied.
4. Replace the current unit expectations with negative tests for the inactive state, while retaining separate active-state tests under explicit legal authorization plus valid GTM and GA4 identifiers.
5. Return clean-browser runtime evidence for the inactive state and, only when activation is later attempted, the approved denied/accepted/withdrawn matrix.

### P0-02 — Trade freshness visible copy remains on the superseded 7 September snapshot

**Approved/current state**

- `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md:157-201,267` records the current official-source review on `2026-09-13`, requires every Trade page to show a visible `last reviewed` date and binds the UK and India source pages to their `2026-09-10` updates.
- The Gate 6 delivery requires the exact fact dispositions to be applied and visible content to remain aligned with machine-readable freshness.

**Observed implementation**

Fresh runtime inspection of all four Trade routes found:

- EU: “As checked on 7 September 2026” and `Last reviewed: 7 September 2026`.
- UK: the same 7 September check date and a stale TRA case-page update date of 2 September rather than 10 September.
- India: the same 7 September check date and a stale DGTR case-page update date of 2 September rather than 10 September.
- Brazil: the same 7 September check date and `Last reviewed: 7 September 2026`.

The stale source strings are in:

- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-eu.json:38`
- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-uk.json:38`
- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-in.json:38`
- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-br.json:38`
- Resources Hub summaries in `wordpress/plugins/tio2-site-model/config/tio2-my-resource-hub.json:223,256,289,322` also still say “As checked on 7 September 2026”.

Meanwhile the publication inventory records `lastReviewedDate=2026-09-13` for these objects and uses it for Sitemap `lastModified`. This produces a direct machine/reader freshness mismatch.

**Required correction and recheck**

1. Update all four Trade pages from the approved 13 September fact-closure source, including each visible check date, last-reviewed date and changed source-page fact—not merely the final date label.
2. Update the four Resources Hub Trade summaries to the same current checked date and approved propositions.
3. Preserve the official-source links and the existing prohibition on converting a proceeding, registration or recommendation into a final duty outcome.
4. Add runtime assertions for all four visible dates, the UK/India 10 September source update facts, official-source links and Resources Hub summary parity.
5. Re-run the 59-object SEO/runtime suite and verify that visible freshness, inventory freshness and Sitemap `lastModified` agree.

## 5. Known release blocker preserved separately

`REAL_GTM_GA4_IDS_AND_ATOMIC_LEGAL_ACTIVATION` remains open at the release layer. Current `optionalAnalyticsAuthorized=false` correctly keeps GTM unloaded, so the absence of real IDs is not itself a defect in this blocked runtime. Before any Analytics activation or Gate 10 release, the project still needs:

- real, site-specific GTM and matching GA4 identifiers;
- verified GTM-container-to-GA4-destination mapping and GTM-only load order;
- atomically active EN/BM Privacy, Cookie Policy and Cookie Settings content;
- denied, accepted and withdrawn network/storage/cookie evidence; and
- success-event cardinality and no-PII evidence.

## 6. Disposition

`TIO2-MY-FULL-PUBLIC-SEO-GA4-G9-IR-01 = RETURN / NOT_PASS`.

Gate 8 must return a targeted repair candidate for P0-01 and P0-02 with a fresh evidence Manifest. Gate 9 must independently recheck the repairs and the already-passing 59/57/2, SEO, hreflang, Schema, isolation and visual controls. No Gate 10, deploy, release, DNS, indexing or GSC action is authorized.
