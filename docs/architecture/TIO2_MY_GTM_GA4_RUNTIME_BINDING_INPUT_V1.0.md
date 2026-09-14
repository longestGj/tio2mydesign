# TiO2 Malaysia GTM / GA4 Runtime Binding Input V1.0

| Field | Value |
|---|---|
| Date | `2026-09-13` |
| Site scope | `tio2-my` |
| Status | `USER_PROVIDED_FOR_GATE8_INTEGRATION / NOT_RELEASED` |
| GTM Container ID | `GTM-MWQVK7J4` |
| GA4 Measurement ID | `G-QDHLMRH2WB` |
| Delivery path | GA4 through the site-specific GTM container only |
| GTM workspace state | Tags saved by the user; container not yet published |

## Approved use

The two public identifiers may be supplied through the TiO2 Malaysia build/deployment environment as:

- `NEXT_PUBLIC_TIO2_MY_GTM_CONTAINER_ID=GTM-MWQVK7J4`
- `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID=G-QDHLMRH2WB`

They must not be reused as another site scope's Analytics configuration or converted into a direct `gtag.js` delivery path.

The GTM workspace contains a Google Tag for `G-QDHLMRH2WB` and the three intended event identities `rfq_provider_accepted`, `documents_provider_accepted` and `sample_provider_accepted`. Their parameters are limited to `site_scope`, `page_id`, `source` and `form_type`.

## Remaining verification

This input authorizes Gate 8 integration and preview preparation. It does not by itself prove the container-to-destination mapping, published-container version, Consent Mode ordering, event cardinality, absence of PII, legal-content/runtime parity or production operation. Those remain Gate 9 acceptance evidence.

No merge, deployment, GTM publication, website publication, DNS, GSC verification action, indexing request or Gate 10 action is authorized by this record.

