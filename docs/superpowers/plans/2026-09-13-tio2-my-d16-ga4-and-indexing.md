# TiO2 Malaysia D16 GA4 and Full-Indexing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan.

**Goal:** Implement, test, and release the D23-approved 59-object public site state in D16, with 57 indexable Sitemap pages, two deliberate search exceptions, site-scoped GA4 Advanced Consent Mode, accurate legal disclosure, and Gate 9-ready evidence.

**Architecture:** D16 consumes the versioned D23 Gate 6 package. Page-level release controls remain authoritative, while the Sitemap derives from an explicit typed publication inventory. GA4 loads only in the `tio2-my` site scope, uses a dedicated public environment variable, and receives a denied Consent Mode v2 default before any measurement command. Existing consent and safe-event modules are extended rather than replaced.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Vitest, Playwright, WordPress site-model JSON, Docker/Oracle release adapters, Google Analytics 4 and Consent Mode v2.

**Spec:** `D:\23MySec\docs\architecture\TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md`

## Global Constraints

- Execute only in `D:\16Wordpress_nextjs` after `00预发布测试与部署` completes; first read its root `AGENTS.md`, current branch/status, D23 Gate 6 package, and local Next.js 16 documentation relevant to Script and analytics.
- Do not overwrite concurrent work or reuse another site’s release controls, GA ID, routes, cache, menu, forms, media, or legal content.
- Use test-driven development for each behavior change and run production-equivalent validation before claiming completion.
- Keep all 59 objects publicly implemented; exactly 57 standard URLs are indexable/Sitemap members. `SYS-404` and `CONV-THANK` are the only exceptions.
- Do not activate public GA4 disclosure until runtime evidence verifies the matching production behavior.

---

## Task 1: Add a typed 59-object publication inventory

**Files:**
- Create: `D:\16Wordpress_nextjs\lib\seo\tio2-my-publication-inventory.ts`
- Test: `D:\16Wordpress_nextjs\tests\unit\seo\tio2-my-publication-inventory.test.ts`
- Modify: page/site contracts that currently set `releaseControls.indexingAuthorized` or `sitemapAuthorized` false, using the D23 Gate 6 mapping

- [ ] Write failing tests asserting 59 unique object identities, 57 indexable URL entries, and two exact exceptions.
- [ ] Implement a typed inventory with `pageId`, `pathname`, `publicAccess`, `indexingAuthorized`, `sitemapAuthorized`, `robots`, `expectedStatus`, `siteScope`, and optional locale relation.
- [ ] Assert every standard URL begins and ends correctly, has no query/fragment, and maps to an implemented route/page contract.
- [ ] Assert `SYS-404` has no indexable route and `CONV-THANK` is public but absent from Sitemap.
- [ ] Update page release controls from the approved D23 Gate 6 package without bypassing their contract layer.

## Task 2: Generate complete metadata, robots, and Sitemap behavior

**Files:**
- Modify: `D:\16Wordpress_nextjs\app\(en)\sitemap.ts`
- Modify: `D:\16Wordpress_nextjs\app\(en)\robots.ts`
- Modify: `D:\16Wordpress_nextjs\lib\seo\metadata.ts`
- Test: existing SEO/Sitemap tests plus `D:\16Wordpress_nextjs\tests\unit\seo\tio2-my-public-indexing.test.ts`

- [ ] Write failing tests for exactly 57 unique production Sitemap URLs, canonical equality, and exclusion of redirects, unknown routes, API/preview paths, runtime 404, and `/thank-you/`.
- [ ] Refactor the Sitemap builder to consume the typed publication inventory and approved page metadata, not a hand-maintained partial route list.
- [ ] Preserve the production-only indexing safety switch and preview/non-production `Disallow: /` behavior.
- [ ] Ensure production `robots.txt` allows standard pages, blocks private API/preview surfaces, and declares `https://tio2malaysia.com/sitemap.xml`.
- [ ] Add assertions for self-canonical and `index, follow` on all 57 standard pages, `noindex, follow` on real 404 responses, and `noindex, nofollow` on `/thank-you/`.
- [ ] Add reciprocal canonical/hreflang tests for the approved English/Portuguese Brazil pages and English/Malay Privacy pages.

## Task 3: Add site-scoped GA4 configuration and loader

**Files:**
- Create: `D:\16Wordpress_nextjs\lib\analytics\malaysia-ga4.ts`
- Create: `D:\16Wordpress_nextjs\components\sites\tio2-my\analytics\malaysia-google-analytics.tsx`
- Modify: `D:\16Wordpress_nextjs\app\(en)\layout.tsx`
- Test: `D:\16Wordpress_nextjs\tests\unit\analytics\malaysia-ga4.test.tsx`

- [ ] Write failing tests for a valid `G-` Measurement ID, absence when the variable is missing/invalid, and absence on every non-`tio2-my` site scope.
- [ ] Implement `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID` parsing and a single site-scoped loader using the existing Next.js dependency surface; do not add `@next/third-parties` unless local Next.js 16 docs and tests prove consent-default ordering.
- [ ] Insert the Consent Mode v2 denied default before `gtag('config', measurementId)` or any event/page-view command.
- [ ] Configure one page-view strategy and test that App Router navigation does not duplicate `page_view`.
- [ ] Keep the tag absent when no valid Measurement ID is supplied so local/test environments remain deterministic.

## Task 4: Extend consent persistence and withdrawal safely

**Files:**
- Modify: `D:\16Wordpress_nextjs\lib\consent\malaysia-consent.ts`
- Modify: `D:\16Wordpress_nextjs\components\sites\tio2-my\consent\malaysia-cookie-settings.tsx`
- Test: `D:\16Wordpress_nextjs\tests\unit\legal\consent-manager.test.tsx`

- [ ] Write failing tests proving default denied precedes GA initialization, Accept grants only `analytics_storage`, Reject denies all four states, and withdrawal removes GA cookies and prevents consented custom events.
- [ ] Standardize the localStorage key with the D23 legal delivery. If the approved key is `tio2_my_consent_v1`, migrate valid values from `tio2-my:consent:v1`, write the new value, and remove the old key without losing the visitor choice.
- [ ] Keep `ad_storage`, `ad_user_data`, and `ad_personalization` denied in every transition.
- [ ] Update buyer-facing settings copy to accurately describe optional Analytics, the default state, and the ability to accept, reject, or change the choice.
- [ ] Implement bounded deletion of only the site’s known GA cookies on withdrawal; do not clear unrelated storage or cookies.

## Task 5: Preserve PII-free conversion analytics

**Files:**
- Modify: `D:\16Wordpress_nextjs\lib\rfq\malaysia-rfq-analytics.ts`
- Modify: `D:\16Wordpress_nextjs\lib\thank-you\malaysia-thank-you-session.ts`
- Test: `D:\16Wordpress_nextjs\tests\unit\rfq\malaysia-rfq-analytics.test.ts`
- Test: `D:\16Wordpress_nextjs\tests\unit\thank-you\source-success-events.test.ts`

- [ ] Add failing negative tests containing names, emails, phone numbers, company values, free text, file names, document selections, and query strings; assert none enters `dataLayer` or GA requests.
- [ ] Keep the approved fixed success events `rfq_provider_accepted`, `documents_provider_accepted`, and `sample_provider_accepted` behind Analytics consent and positive provider acknowledgement.
- [ ] Permit only fixed enum parameters approved by D23, including `site_scope`, `page_id`, `source`, and `form_type` where applicable.
- [ ] Assert direct/invalid `/thank-you/` access does not emit a success event.

## Task 6: Synchronize WordPress legal configuration and public copy

**Files:**
- Modify: `D:\16Wordpress_nextjs\wordpress\plugins\tio2-site-model\config\tio2-my-legal-pages.json`
- Modify: relevant legal page renderer/content source files identified from the D23 Gate 6 package
- Test: existing legal content/config tests plus `D:\16Wordpress_nextjs\tests\unit\legal\ga4-legal-parity.test.ts`

- [ ] Change the release state from `no_optional_analytics` only in the release that activates GA4.
- [ ] Set optional Analytics authorization to match runtime and include the exact provider, purposes, consent behavior, storage key, cookies, durations, and withdrawal control supplied by D23.
- [ ] Verify English Cookie/Privacy content, Malay Privacy content, Cookie Settings UI, JSON configuration, and runtime identifiers agree exactly.
- [ ] Assert no public copy claims advertising, personalization, CRM enrichment, user profiling, or unsupported international-transfer safeguards.

## Task 7: Wire production environment and release adapters

**Files:**
- Modify: production Dockerfile(s), compose/release configuration, and Oracle adapter files that currently pass public build arguments
- Modify: checked-in `.env.example` or environment documentation if present
- Test: release adapter and production image tests

- [ ] Add `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID` as a site-specific build/runtime input without printing its value in ordinary logs.
- [ ] Assert the production image retains `VERCEL_ENV=production` and that preview/test builds remain non-indexable by default.
- [ ] Build the exact production image/configuration and verify the GA variable reaches only the `tio2-my` frontend bundle.
- [ ] Do not deploy until Tasks 1–6 and their tests pass.

## Task 8: Run automated and browser verification

**Files:**
- Create: `D:\16Wordpress_nextjs\tests\e2e\tio2-my-public-indexing.spec.ts`
- Create: `D:\16Wordpress_nextjs\tests\e2e\tio2-my-ga4-consent.spec.ts`
- Create: `D:\16Wordpress_nextjs\artifacts\gate8\tio2-my-full-public-ga4\evidence-manifest.json`

- [ ] Run lint, typecheck, affected unit tests, full relevant SEO/legal/RFQ tests, and a production build.
- [ ] Crawl the production-equivalent deployment and assert all 57 standard URLs return `200`, self-canonical, `index, follow`, and appear exactly once in Sitemap.
- [ ] Assert random unknown URLs return real `404 + noindex, follow`; assert `/thank-you/` returns `200 + noindex, nofollow` and is absent from Sitemap.
- [ ] Capture browser/network evidence for first visit denied default, Reject, Accept, page navigation, event success, withdrawal, and revisit persistence.
- [ ] Assert GA requests contain no personal or free-text data and that no duplicate page views or success events occur.
- [ ] Record exact commands, exit codes, commit SHA, image/deployment identity, timestamps, route counts, screenshots, network traces, and hashes in the evidence Manifest.

## Task 9: Deploy, then hand off to Gate 9 and GSC

**Files:**
- Create/modify: the D16 Gate 8 handoff artifact required by `D:\23MySec\docs\architecture\GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`

- [ ] Deploy through the existing approved D16 release procedure and confirm the production deployment identity before DNS or GSC actions.
- [ ] Re-run the 57-page crawl, robots/Sitemap checks, legal parity checks, and GA4 consent network checks against `https://tio2malaysia.com/`.
- [ ] Send the evidence Manifest and accessible production result to `09Gate9验收`; do not self-approve Gate 9.
- [ ] After Gate 9 passes, use the user-authorized Google account to verify the GSC Domain Property and submit `https://tio2malaysia.com/sitemap.xml`.
- [ ] Record GSC Property, Sitemap status, discovered-URL count, and representative URL Inspection outcomes without treating Google’s processing delay as an implementation failure.
