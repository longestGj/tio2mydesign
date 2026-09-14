# TiO2 Malaysia · Full Public SEO + GA4 Gate 6 independent review V1.0

## 0. Review control

| Field | Value |
|---|---|
| Review ID | `TIO2-MY-FULL-PUBLIC-SEO-GA4-G6-IR-01` |
| Review date | `2026-09-13` |
| Reviewer role | Independent D23 project-control reviewer; different from the Gate 6 package executor |
| Scope | Full Public SEO + GA4 Gate 6 delivery for all 59 registered objects |
| Review result | `PROJECT_CONTROL_REVIEW_PASS` |
| Required finding count at final review | `0` |
| Gate 6 disposition | `PASS / ELIGIBLE_FOR_DELEGATED_CLOSURE` |
| Gate 8 | May start only from the closed Gate 6 package and the existing user authorization through Gate 9 |
| Gate 10 / publication / DNS / GSC / indexing | `NOT_AUTHORIZED / NOT_STARTED` |
| D16 activity by this review | None; this review did not read, modify, test or otherwise operate `D:\16Wordpress_nextjs` |

This review applies the current Gate workflow, the Gate 5→6 acceptance contract, the Gate 8→9 evidence-handoff contract and the standing Gate 3/4/6 closure authority. It does not treat executor self-checks as independent approval and does not approve production publication.

## 1. Reviewed authority set

The final review snapshot was bound to the following principal files:

| Artifact | SHA-256 at final review |
|---|---|
| `docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` | `685077EA909918DAAD71FE8B59F4246615F0E4916B86E72A3B48E4688E90E17D` |
| `docs/architecture/TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv` | `C53505FAD93697A235D6152252E797A9EE9D9572DBDAB3211D6FD6448F3262C3` |
| `docs/architecture/TIO2_MY_59_OBJECT_PUBLICATION_CURRENT_STATE_V1.0.csv` | `FAF3FC7DB0C2F283E595DD56082F6CF729498E3D810C3488B1980DACDE1ADC0B` |
| `docs/architecture/TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv` | `31AF7C04D77CF19204FE2B6BDDA95590D49B360BE5A686DF4FF8ACCCB2B20CE3` |
| `docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` | `FBB4AC2BCF3C93A9A0AC833E5880AFA2C329B3A65C5AD8E4278CD6EF93D655CF` |
| `docs/architecture/TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md` | `56974A5F9508A28512CB71D52F5E9BB7FC7210F7DD0A03D3544FAAD07721557C` |
| `docs/architecture/TIO2_MY_GA4_LEGAL_CONTENT_DELIVERY_V1.0.md` | `7D2457B87BE87E527B9218382E1B5F7D1926CC17061E1784F5E56B04E43695FE` |
| `docs/architecture/LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.1.md` | `F06FC653D72DB917FA2544BCBEA9BBEABAF348D411E9353D0AF177B990D9D80F` |
| `pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.4.md` | `04C7DB364175F24D7D9FB9CD4AA56414ED3339659932C401B2FEFB3210C069AE` |
| `pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.4.md` | `6D63A920314220A56D2914BC9B3C8A399362DD7C4C42F0B7B938521AD870698A` |
| `pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE6_GA4_DELIVERY_MANIFEST_V1.2.md` | `A0D40684E9A7D3DE50F595CF2EBC0C5AA7DC10B373D6760EECDC8BE4B2BAFDC7` |
| `research/keyword/11_page_keyword_master.csv` | `AD86E336FF7F77B1DC9B7EB120A89ADC13463D70E73FC84AD4F16A36247DD6B0` |
| `docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.md` | `167D2CF4726F0A259B645BA040ECF13EDB4CB8F738FD02DDD2FF942CCB2EB3E9` |
| `docs/architecture/TIO2_MY_FULL_PUBLIC_SEO_GA4_GATE6_DELIVERY_V1.0.json` | `A439A2C4614463A24B6B5F9A4E36007E96C95122B28823D9E9D20636E4AA4087` |

The review also read the 23 page-specific current Manifests named by the finalization overlay and the applicable workflow and governance contracts. Historical versions were used only to test authority continuity and were not treated as the current delivery.

## 2. Independent verification result

A fresh read-only PowerShell audit completed with:

`INDEPENDENT_CHECK PASS=1687 FAIL=0`

The audit did not call or rely on an executor verifier. It independently imported the four tabular registers, parsed the Gate 6 JSON, resolved every current/upstream Manifest path, compared Page ID sets and projections, recomputed normative hashes, inspected the 23 finalization bindings, and tested the required cross-contract clauses.

| Area | Independent result |
|---|---|
| Object projection | `59` unique registered objects; `57` indexable/Sitemap pages; `2` search exceptions |
| HTTP projection | `58` HTTP 200 objects and one true runtime HTTP 404 |
| Exceptions | `SYS-404 = 404 + noindex, follow + no canonical + no Sitemap`; `CONV-THANK = 200 + noindex, nofollow + no Sitemap` |
| Page identity | Target, current-state, SEO delivery and keyword-master Page ID sets are identical: 59/59 |
| Row binding | Page ID, URL, target access, robots, HTTP and Sitemap projections match across the target/current/SEO registers |
| Manifest integrity | All current Manifests, all pipe-delimited upstream artifacts and all SEO source Manifests exist; SEO/current Manifest bindings match for 59/59 rows |
| SEO completeness | All 57 standard pages have non-empty Title, Meta, H1, canonical, robots, Schema, breadcrumb parent and internal-link source fields |
| SEO uniqueness | 57/57 unique Titles, Meta descriptions, H1s and canonicals |
| Keyword boundary | Keyword-master URLs and primary keywords match the SEO delivery for 59/59; non-neutral primary keywords are unique |
| 23-page finalization | 23 unique current Manifest rows; 23/23 files exist, point to the finalization overlay and match the current-state ledger |
| Hash closure | Gate 6 JSON contains 11 normative inputs; 11/11 paths exist and 11/11 SHA-256 values match current files |
| PT-BR | Reciprocal `en` and `pt-BR` alternates are explicit; `x-default` is expressly excluded from the Brazil pair |
| Trade resources | EU, UK, India and Brazil retain dated official-source contracts and `Last reviewed: 13 September 2026`; investigation/registration/recommendation states are not converted into unsupported duty outcomes |
| Legal languages | English and Bahasa Malaysia GA4/consent changes preserve the same provider, purpose, denied/granted state, cookieless-signal, withdrawal and activation meaning; reciprocal legal hreflang remains a Gate 8/9 acceptance item |
| GA4/GTM | Separate site-scoped GTM Container ID and GA4 Measurement ID fields are required; GTM is the only GA4 delivery path; direct-gtag bypass and cross-scope reuse are prohibited |
| Consent/data boundary | Four denied defaults precede GTM/measurement; only Analytics may become granted; advertising states stay denied; conversion events require consent plus server-confirmed success; PII and free text are prohibited from analytics |
| Gate 8 return | Commit/parent, changed files, build/test results, 59-object route inventory, source/Schema/hreflang evidence, consent/storage/network captures, event cardinality/no-PII evidence and the Gate 8→9 evidence Manifest are required |
| About responsive exception | Approval is restricted to the unchanged About H1 naturally wrapping to four lines at 390px; no other copy, component, media or breakpoint change is inferred |
| Release separation | Gate 10, production promotion, DNS, GSC and indexing requests remain explicitly unauthorized |

Official-source URLs in the Trade contract were opened independently during review. The EU regulation remains marked in force; the EU reinvestigation, UK import registration and India final-finding records retain their distinct procedural meanings. Brazil remains bound to the two named MDIC/CAMEX sources and the narrow correction/proceeding wording in the package. Gate 9 must still verify the rendered source labels, dates and outbound links in the implementation.

## 3. Findings raised and closed during review

The following issues were found before the final snapshot. They were returned to the executor and independently rechecked after correction; none remains open.

### `G6-IR-F01` · DOC-COO fact-scope overreach · closed

An earlier Gate 6 sentence incorrectly treated `EG-001` Malaysia-origin authority as permission for DOC-COO to state that a Certificate of Origin is available on request. The corrected package now permits only the Malaysia-origin proposition on DOC-COO and expressly prohibits extending the page-specific `EG-002` availability claim to that page. This now matches the fact-closure report, the claim row and the user-decision register.

### `G6-IR-F02` · Legal current-Manifest and hash closure · closed

An intermediate snapshot still bound the three legal rows to their pre-GA4 Gate 9 Manifests, and later temporarily retained obsolete hashes after the binding correction. The final current-state and SEO delivery rows now use Privacy EN V1.4, Privacy MS V1.4 and Cookie V1.2 as the current Gate 6 delivery pointers, while retaining the prior Gate 9 Manifests in the historical/upstream chain. The Gate 6 JSON was regenerated; all 11 normative hashes now match.

### `G6-IR-F03` · GTM delivery path under-specified · closed

An earlier contract named Google Tag Manager in legal copy but supplied only a GA4 Measurement ID and allowed a direct-loader interpretation. The corrected authority set now requires both `NEXT_PUBLIC_TIO2_MY_GTM_CONTAINER_ID` and `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID`, requires the container to deliver the matching GA4 destination, prohibits a direct-gtag bypass, and adds `GA4-E10` ordering/source/network evidence. This is consistent with the approved Advanced Consent Mode path.

## 4. Gate 6 decision and downstream controls

No required Gate 6 finding remains. The package is sufficiently complete and internally consistent for development handoff. Accordingly:

`TIO2-MY-FULL-PUBLIC-SEO-GA4-G6-IR-01 = PROJECT_CONTROL_REVIEW_PASS`

The Project Orchestrator may close Gate 6 under `USER_STANDING_AUTHORITY` and proceed to Gate 8 under the user's existing continuous Gate 6→9 authorization. This decision does not assert that D16 implementation exists or that runtime fields are already known.

Gate 8 must return the exact production-equivalent evidence required by the package, including the site-scoped GTM Container ID binding, matching GA4 destination, consent order, storage/network observations, exact event names, 59-object SEO projection and legal-copy activation identity. Gate 9 must independently validate that evidence and the accessible result. Any mismatch in routes, current official-source state, legal equivalence, analytics storage/network behavior, PII exclusion, event cardinality, `site_scope=tio2-my` isolation, responsive behavior or Page ID/Manifest consumption blocks Gate 9.

Gate 9 acceptance is not Gate 10 permission. Public release, production promotion, DNS, GSC verification, Sitemap submission and indexing requests remain outside this review and require their own authorization.
