# TiO2 Malaysia Full-Public SEO + GA4 Gate 6 Delivery V1.0

## Document control

| Field | Value |
|---|---|
| Delivery ID | `TIO2-MY-FULL-PUBLIC-SEO-GA4-G6-01` |
| Site scope | `tio2-my` |
| Date | `2026-09-13` |
| Gate | `6` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED / CLOSED` |
| Review | `TIO2_MY_FULL_PUBLIC_SEO_GA4_D23_INDEPENDENT_REVIEW_V1.0.md`; `1687 PASS / 0 FAIL`; no open mandatory Finding |
| Approval basis | `USER_STANDING_AUTHORITY` |
| Decision source | User approved all 59 registered objects for public production implementation and authorized continuous Gate 6 through Gate 9 execution |
| Implementation owner | Existing D16 task `01My开发1` after the active D16 deployment task confirms an accepted starting state |
| Release authority | Not included; Gate 10 publication, DNS, indexing and GSC execution remain separate |

This package is the D23 delivery contract for the full-public launch increment. It does not replace any page's current Manifest. The row-level `source_manifest` and `current_manifest` fields in the attached CSVs bind every object to its page-specific authority and effective review chain.

## 1. Normative input set

| Artifact | Role | SHA-256 |
|---|---|---|
| `TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` | User-approved full-public, SEO, GTM/GA4 and GSC launch decision; Gate 6–9 scope and Gate 10 separation | `685077EA909918DAAD71FE8B59F4246615F0E4916B86E72A3B48E4688E90E17D` |
| `TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv` | User-approved public, HTTP, robots and Sitemap target for all 59 objects | `C53505FAD93697A235D6152252E797A9EE9D9572DBDAB3211D6FD6448F3262C3` |
| `TIO2_MY_59_OBJECT_PUBLICATION_CURRENT_STATE_V1.0.csv` | 59-row current-to-target ledger; current Manifest and responsible upstream artifact per object | `FAF3FC7DB0C2F283E595DD56082F6CF729498E3D810C3488B1980DACDE1ADC0B` |
| `TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv` | Complete SEO delivery for 57 standard pages plus explicit SYS-404 and CONV-THANK exception rows | `31AF7C04D77CF19204FE2B6BDDA95590D49B360BE5A686DF4FF8ACCCB2B20CE3` |
| `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md` | Claim-level fact closure and current official trade-source review | `56974A5F9508A28512CB71D52F5E9BB7FC7210F7DD0A03D3544FAAD07721557C` |
| `EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md` | Current user fact decisions, including the DOC-COO propagation of EG-001 | Current working-tree file; Gate 8 must consume the delivered file, not an older checkout |
| `TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` | Atomic EN/BM/Cookie/Cookie Settings active-content contract | `7D2457B87BE87E527B9218382E1B5F7D1926CC17061E1784F5E56B04E43695FE` |
| `LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` | GA4/GTM/Consent Mode data-flow and evidence boundary | `F06FC653D72DB917FA2544BCBEA9BBEABAF348D411E9353D0AF177B990D9D80F` |
| `LEGAL-PRIV-EN_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.4.md` | English Privacy Gate 6 authority | `04C7DB364175F24D7D9FB9CD4AA56414ED3339659932C401B2FEFB3210C069AE` |
| `LEGAL-PRIV-MS_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.4.md` | Bahasa Malaysia Privacy Gate 6 authority | `6D63A920314220A56D2914BC9B3C8A399362DD7C4C42F0B7B938521AD870698A` |
| `LEGAL-COOKIE-EN_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.2.md` | Cookie Policy Gate 6 authority | `A0D40684E9A7D3DE50F595CF2EBC0C5AA7DC10B373D6760EECDC8BE4B2BAFDC7` |
| `TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` | Approved successor overlay for the 22 provisional/planned page contracts plus ABOUT-001 390px approval | `E28DE105BA35628365C0C0DC3DAC272C5F6FE2B19589F6888CADE0A26AB09213` |

Relative paths above are under `D:\23MySec\docs\architecture\` unless a page path is shown. D16 must record the exact D23 snapshot or file hashes actually consumed.

## 2. Publication and SEO requirements

1. Implement all 59 registered objects as public production behavior.
2. Exactly 57 standard pages return HTTP 200, use `index, follow`, have self-referencing canonical URLs and appear in the XML Sitemap.
3. `SYS-404` is the runtime fallback, returns a real HTTP 404, uses `noindex, follow`, has no canonical and is excluded from the Sitemap.
4. `CONV-THANK` returns HTTP 200, uses `noindex, nofollow`, is excluded from the Sitemap, exposes no submitted personal or request data, and never treats a page view or query value as conversion success.
5. Implement the exact Title, Meta Description, H1, canonical, robots, Schema type, breadcrumb parent and primary internal-link sources in the SEO delivery CSV. `NO_PRIMARY_KEYWORD` rows remain keyword-neutral.
6. Visible content and Schema must express the same approved facts and relationships. Do not manufacture facts, relationships, rankings, equivalence, availability, certificates, duties or release status.
7. Preserve each page's current Manifest, Brief, approved content/visual sources and page-specific review chain. The ledger supplies the complete row-to-Manifest binding; no aggregate copy may replace a page source.
8. ABOUT-001 at 390px may use the user-approved four-line title wrap. This approval changes only the responsive line wrap, not the title text or other breakpoint styling.

## 3. Fact and content requirements

- Apply the exact dispositions in `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md` and the decision register. Evidence gaps must not hide a whole page.
- DOC-COO may state the site-wide EG-001 fact that TiO2 Malaysia products are of Malaysian origin. Do not extend EG-002's “Certificate of Origin is available upon request” claim to DOC-COO; on this page the controlled document request is a request for human review, not a promise that a certificate is available or will be issued.
- Product facts for M-996, M-2196 and M-2377 remain individual facts. Do not add comparison, superiority, equivalence, substitution or inferred application/process relationships.
- Trade pages must use the checked official propositions and dates in the fact-closure file. Do not convert an investigation, registration, recommendation or public-interest process into a definitive duty outcome.
- Brazil Portuguese content must remain fact-equivalent to its approved source, and reciprocal hreflang must be implemented and verified.
- Contact and conversion pages must preserve their approved buyer task, real receiver behavior and receipt-only success semantics.

## 4. GA4, GTM, consent and legal content

### 4.1 Runtime boundary

- Load GA4 through GTM only when `site_scope=tio2-my` and valid `NEXT_PUBLIC_TIO2_MY_GTM_CONTAINER_ID` and `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID` values are supplied by the environment. The first identifies the site-specific GTM container; the second must match the GA4 destination delivered by that container. Do not use the Measurement ID as a Container ID, load a separate direct-gtag path, commit either production identifier or reuse either value in another site scope.
- Runtime order is mandatory: create `dataLayer` and set all four denied defaults → add site-scoped configuration → load the site-scoped GTM container → let that container deliver the matching GA4 tag. No measurement command may precede the denied defaults.
- Before any GTM/GA4 configuration or measurement command, set `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` to `denied`.
- **Accept analytics** may grant only `analytics_storage`. Necessary only, rejection and withdrawal keep or restore it to `denied`. Advertising states remain denied in every state.
- Do not enable remarketing, audiences, Customer Match, personalised advertising, Google Ads measurement, reCAPTCHA/Turnstile or Vercel Web Analytics through this increment.
- GA4 must not receive names, email addresses, telephone numbers, company names, free text, form data, document names, request contents, personal query data or unfiltered URLs.

### 4.2 Events and parameters

- Preserve the existing approved, source-flow-specific RFQ, Request Documents and Request a Sample success-event identities; D16 must return their exact names in the evidence Manifest.
- Send a success event exactly once only after the corresponding backend/receiver positive acknowledgement, a valid short-lived current-session marker and granted Analytics consent.
- Allowed parameters are enumerated, non-personal identifiers only: `site_scope`, `page_id`, `source` and `form_type`. No free-text or form-field value is allowed.
- Direct Thank You visits, query-only state, refresh, back navigation, validation errors, receiver/network failures and ambiguous responses emit no success event.

### 4.3 Atomic legal activation

The active GA4 text for Privacy EN, Privacy BM, Cookie Policy and Cookie Settings must switch together with the verified runtime. Never publish active-GA4 copy while the tag is inactive, and never run GA4 while the approved visible policies still state that optional Analytics is inactive. If the activation evidence is incomplete, keep the existing no-Analytics runtime and copy together and fail the release candidate.

## 5. Gate 8 implementation obligations

D16 must implement the complete contract and return:

1. commit SHA and parent SHA;
2. complete changed-file list and explicit site-scope confirmation;
3. exact test/build commands and unabridged results, including a production-equivalent build;
4. 59-object route inventory with actual HTTP status, canonical, robots, Sitemap presence, Title, Meta, H1 and Schema result;
5. rendered-source evidence for page fields, hreflang and legal-content parity;
6. final GTM Container ID binding and matching GA4 Measurement ID destination, source/network load ordering, proof that GTM is the only GA4 delivery path, and cross-scope absence;
7. final consent Local Storage key, value shape, version, persistence, withdrawal and any legacy migration;
8. actual `_ga` and property-specific GA cookie names, domains, consent condition and configured durations;
9. clean-browser network/storage captures for default denied, Necessary only, Accept analytics and withdrawal;
10. one-page-view-per-valid-view evidence;
11. exact conversion event names plus positive/negative cardinality and no-PII evidence;
12. the Gate 8→9 evidence Manifest required by `GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`.

Runtime-only values remain implementation/evidence obligations. They must not appear to buyers as placeholders.

## 6. Explicit negative requirements

- No cross-scope query, route, content, cache, menu, media, form, analytics, metadata or Sitemap fallback.
- No hidden page, placeholder page, generic internal warning or fake success substituted for a public page.
- No stale title/meta/canonical/robots value from an earlier provisional contract.
- No `CURRENT` buyer-visible navigation label.
- No page-private Header/Footer fork; consume the shared Global Chrome implementation.
- No PII in URLs, browser markers, analytics parameters, logs, screenshots or evidence.
- No Gate 10 publication, DNS, production promotion, GSC property action or indexing request under this Gate 6–9 authorization.

## 7. Gate 9 acceptance

An independent Gate 9 task must validate the returned Gate 8 evidence and accessible production-equivalent result. Mandatory acceptance includes the 59/57/2 object counts, route/status/canonical/robots/Sitemap projection, visible/Schema parity, `tio2-my` isolation, page-specific approved sources, forms and Thank You semantics, responsive/a11y behavior, GA4 consent ordering, four consent states, storage/cookie inventory, event no-PII/cardinality and legal-content/runtime parity.

Any missing evidence, mismatch or unverified production-only field is a Gate 9 release blocker, not grounds to silently remove content or mark the page complete.

## 8. Current disposition

Gate 6 is `APPROVED / CLOSED`. Gate 8 is authorized by the user's continuous Gate 6–9 instruction and starts after the D16 starting state is explicitly accepted. Gate 9 starts only from the returned Gate 8 evidence package.
