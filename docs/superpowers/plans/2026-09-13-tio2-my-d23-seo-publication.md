# TiO2 Malaysia D23 Full-Public SEO Publication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan.

**Goal:** Close the D23 content, fact, URL, metadata, legal-disclosure, and delivery-contract gaps so all 59 registered objects have a public production implementation and the 57 standard pages are eligible for indexing at launch.

**Architecture:** D23 remains the authority for page contracts, content and facts, SEO/GEO, legal disclosure, and Gate 6 handoff. The execution updates each page’s current Manifest rather than creating a competing global page source. A single cross-page publication matrix controls the launch target, while page-specific Briefs and evidence registers control factual claims.

**Tech Stack:** Markdown and CSV governance artifacts in `D:\23MySec`; existing page Manifests, Briefs, keyword master, evidence registers, Gate workflows, and development handoff contracts.

**Spec:** `D:\23MySec\docs\architecture\TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md`

## Global Constraints

- Work only in `D:\23MySec`; do not modify, test, merge, deploy, or publish `D:\16Wordpress_nextjs`.
- Preserve user edits and current history. Before editing an existing file, read it again and confirm its content has not changed since review.
- Use the registered 59 page identities and URLs; do not add, remove, or rename a page without a separate approved architecture decision.
- Public eligibility never permits invented product, regulatory, certificate, tariff, equivalence, logistics, or contact facts.
- `SYS-404` and `CONV-THANK` remain the two search exceptions specified by the launch decision.
- Update `00_PROJECT_STATUS.md` and `01_PROJECT_INDEX.md` only after their current dirty edits have been reconciled with the task owner; never overwrite parallel work.

---

## Task 1: Establish a current-versus-target publication ledger

**Files:**
- Read: `D:\23MySec\research\keyword\11_page_keyword_master.csv`
- Read: `D:\23MySec\docs\architecture\PAGE_REGISTRY_V0.2.md`
- Read: each page’s current Manifest identified by `D:\23MySec\01_PROJECT_INDEX.md`
- Create: `D:\23MySec\docs\architecture\TIO2_MY_59_OBJECT_PUBLICATION_CURRENT_STATE_V1.0.csv`

- [ ] Create one row per registered object with `page_id`, final URL, current Gate, current Manifest, current public status, current indexing authorization, current Sitemap authorization, factual blockers, content blockers, D16 implementation status, and target state.
- [ ] Assert exactly 59 unique `page_id` values and exactly 58 URL-bearing objects plus one runtime fallback identity.
- [ ] Assert the target contains exactly 57 Sitemap URLs and excludes only `SYS-404` and `CONV-THANK`.
- [ ] Compare every row against `TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv` and name the responsible upstream artifact for each unresolved field.

## Task 2: Finalize provisional and planned page contracts

**Files:**
- Modify: current Manifests and Briefs for `MARKET-BR-PT`, `APP-000`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK`, `APP-PAPER`, `DOC-000`, `DOC-REACH`, `DOC-TDS`, `DOC-COO`, `CONV-DOC`, `RES-000`, `RES-CHEMOURS`, `RES-R706`, `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `CONV-RFQ`, `CONV-SAMPLE`, and `CONTACT-001`
- Modify: `D:\23MySec\research\keyword\11_page_keyword_master.csv` only when an existing registered status is formally finalized and the decision source is recorded

- [ ] For each listed page, close the final URL, unique page responsibility, visible buyer task, CTA destination, Title, Meta Description, H1, canonical, robots, Sitemap target, and internal-link sources.
- [ ] Complete Brazil Portuguese localization and reciprocal hreflang review without mechanically translating unapproved facts.
- [ ] Keep navigation hubs keyword-neutral where the master specifies `NO_PRIMARY_KEYWORD`; do not manufacture commercial primary keywords.
- [ ] Record the 2026-09-13 user decision as publication authorization separate from content/fact approval and separate from D16 release execution.

## Task 3: Resolve factual publication blockers without hiding pages

**Files:**
- Read/modify: `D:\23MySec\docs\architecture\EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md`
- Read/modify: affected page Briefs and current Manifests
- Create: `D:\23MySec\docs\architecture\TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md`

- [ ] Enumerate each exact claim still blocked for `ABOUT-001`, `GRADE-M996`, `GRADE-M2196`, `GRADE-M2377`, `DOC-REACH`, `DOC-TDS`, `DOC-COO`, the four trade pages, and legal/contact pages.
- [ ] For each claim, record the use location, existing source, missing source, and one of: verified and retained; user-approved enterprise fact; removed; or replaced by approved neutral language.
- [ ] Re-check live trade/regulatory statements against current primary official sources and record source URL, publisher, effective date, checked date, and exact supported proposition.
- [ ] Confirm no page claims duty avoidance, certificate availability for an unknown shipment, process-derived grade performance, or competitor-grade equivalence without evidence.
- [ ] Keep the page public with a genuine buyer task after removing any unsupported claim; do not substitute an empty placeholder or internal governance warning.

## Task 4: Produce complete SEO/GEO field delivery

**Files:**
- Create: `D:\23MySec\docs\architecture\TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv`
- Modify: affected page Manifests

- [ ] Deliver 57 rows containing `page_id`, URL, Title, Meta Description, H1, canonical, robots, schema type, breadcrumb parent, primary internal-link sources, and last-reviewed date.
- [ ] Validate uniqueness of URLs, Titles, H1s, canonicals, and primary keyword ownership.
- [ ] Ensure visible copy and Schema express the same approved facts and entity relationships.
- [ ] Provide a passage-level concise answer block or decision aid on commercial and informational pages where it fits the approved buyer task; do not duplicate generic boilerplate across pages.
- [ ] Deliver separate explicit rows for `SYS-404` and `CONV-THANK` with their exception directives and no Sitemap inclusion.

## Task 5: Activate the GA4 legal and consent content contract

**Files:**
- Read/modify: current Manifests and approved content for `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`, and `LEGAL-COOKIE-EN`
- Read/modify: `D:\23MySec\docs\architecture\LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.0.md`
- Create: `D:\23MySec\docs\architecture\TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md`

- [ ] Replace the current “no optional Analytics active” state with conditional activation copy that becomes publishable only alongside verified GA4 production behavior.
- [ ] Disclose Google Analytics as recipient/provider, the measurement purpose, Advanced Consent Mode defaults, analytics-only grant, permanent denial of advertising states, withdrawal method, and limited cookieless measurement behavior.
- [ ] Record the exact production localStorage key after D16 chooses the migration result; the visible Cookie Policy, configuration JSON, and runtime must use the same string.
- [ ] Add the verified `_ga` and property-specific GA cookie inventory and durations after production capture; do not present anticipated cookies as observed until capture exists.
- [ ] Produce legally equivalent Bahasa Malaysia Privacy content and reciprocal hreflang fields.
- [ ] Keep GA4 activation status distinct from content approval: the public text may switch to active only when Gate 8 evidence proves the tag and consent behavior are live.

## Task 6: Build the Gate 6 delivery package for D16

**Files:**
- Create: `D:\23MySec\docs\architecture\TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md`
- Create: `D:\23MySec\docs\architecture\TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.json`
- Modify: affected current Manifests

- [ ] Include the 59-object target matrix, 57-page SEO delivery, page-specific content sources, final legal copy, consent state table, allowed analytics events/parameters, storage inventory, and explicit negative requirements.
- [ ] Map every delivered page to its current approved Manifest and effective review chain; do not give D16 a stale or aggregate-only source.
- [ ] Require D16 to return commit SHA, changed-file list, test commands/results, production-equivalent build result, route inventory, network evidence, and the Gate 8→9 evidence Manifest.
- [ ] Record unresolved runtime-only fields as Gate 8 evidence obligations, not as hidden content placeholders.

## Task 7: Independently review and close D23 delivery

**Files:**
- Create: `D:\23MySec\docs\architecture\TIO2_MY_FULL_PUBLIC_SEO_GA4_D23_INDEPENDENT_REVIEW_V1.0.md`
- Modify: `D:\23MySec\00_PROJECT_STATUS.md`
- Modify: `D:\23MySec\01_PROJECT_INDEX.md`

- [ ] Use an independent reviewer distinct from the executor to verify counts, page identity, fact status, keyword boundaries, legal equivalence, and Gate 6 package completeness.
- [ ] Reconcile the current dirty versions of Status and Index before applying minimal line edits.
- [ ] Close Gate 6 under current standing authority only after all mandatory review findings are resolved.
- [ ] Hand the package to `01My开发1` only after the active D16 deployment task finishes and the D16 executor confirms a clean starting point or an explicitly accepted working state.
