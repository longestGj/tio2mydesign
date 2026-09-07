# CONV-RFQ Gate 7 Manifest V1.1

## 0. Control

| Field | Value |
|---|---|
| Manifest | `CONV-RFQ-G7-MANIFEST-02` |
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review | `CONV-RFQ-G7-PCR-02` |
| Parent | `PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| P0 | `P0-01_CROSS_PAGE_AND_SHARED_OWNER_SCOPE` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 / handoff / development | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 7 Manifest.

## 1. Current targeted payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-RFQ_GATE7_PROJECT_CONTROL_RETURN_V1.0.md` | 1,645 | `2016E31B8C8FA80486374266256AD7C4CCF90D510895B35E1F131153373A9A09` | PCR-01 return |
| `CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md` | 6,809 | `264156A38CC88F0926BB9EB6B0BC7CA3DDC500A8B47D3FF63EACC50510930D15` | responsibility matrix and scope correction |
| `CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.1.md` | 4,703 | `3675984183ED0D86848CAE2635517B80E6FAE50E59A0B9400AFE4AD6F5010F2A` | owner/readiness/component mapping |
| `CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.1.md` | 4,412 | `961EBED064C009B3C0A3F98D8B42EDAD66B42FDB7946872EBD01DC6D7043D7F2` | owner-specific Gate 8/9 acceptance/blockers |
| `CONV-RFQ_GATE7_FRESH_VALIDATION_V1.1.md` | 3,546 | `74388D11DC000B04609C7C86362A582F17486C6AEB1B8DCF859870135BE93053` | 12 P0 checks |

## 2. Unchanged exact contracts

| File | SHA-256 | Role retained |
|---|---|---|
| `CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.0.md` | `7644CC0F33E47AD2DB7921CD820BF8AFB7B40A4C69A3C9D68A618BF1A9119F38` | exact approved page/SEO/state/privacy/product/responsive contract |
| `CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` | `219665FCF1E6B7D8B4C6E5673924D5FF820356481335B7DF78E70EB5D7642CBF` | exact fields/options/errors/prefill/request-response mapping |
| `CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.0.md` | `ED6491883B2C04F4944BDC2FE82DCAF3877EDF9E967274EDF9C6E0E351C3CE49` | unchanged acceptance/QA/rollback requirements |
| Gate 5 Approved Baseline Manifest V1.0 | `1693D9D0F9C24E08854BE72DA42AFE40E7CA864009D8716A15FA1AE30F8D4139` | approved visual/content root |
| Gate 6 Current Baseline Manifest V1.2 | `55ED7463334DF3D97F5506263A76D8F52FAE9E6AA6F3E26E3192A132AADFF29B` | approved Gate 6 root |

## 3. Responsibility seal

| Surface/dependency | Implementation owner | CONV-RFQ role |
|---|---|---|
| `/request-a-quote/` + form/receiver | CONV-RFQ | implement |
| Privacy Policy page/body | independent Legal/Privacy Page ID | short notice/link, RFQ data-flow facts, readiness consumption |
| Header/Footer/Menu/legal links | Home/Global Chrome/Legal shared owner | consume/verify; no fork |
| Cookie Banner/Settings/CMP/consent | shared consent owner | consume signal; gate local events |
| `/request-sample/` | CONV-SAMPLE | render required link; consume readiness |
| `/request-documents/` | CONV-DOC | render required link; consume readiness |

## 4. Required route seal

```text
CONV-RFQ renders: Request a Sample  -> /request-sample/      REQUIRED_FINAL_SYSTEM
CONV-SAMPLE implements:             /request-sample/

CONV-RFQ renders: Request Documents -> /request-documents/   REQUIRED_FINAL_SYSTEM
CONV-DOC implements:                 /request-documents/
```

External route readiness false blocks Gate 9/complete-site release; it never authorizes placeholder, hide, disable, remove, merge, fallback or RFQ-local sibling implementation.

## 5. Scope/exclusions

Only CONV-RFQ's page/form/receiver/local outputs are in potential RFQ Gate 8 scope. Legal pages, shared Chrome/consent platform and sibling pages are external owner responsibilities. No code, implementation, test, handoff, Gate 8 or D16 operation is included.

## 6. Historical disposition

Manifest V1.0 is `HISTORICAL PCR-01 / SUPERSEDED_BY_V1.1`. Its three exact-contract payload documents remain current only as explicitly carried in §2 and are overridden by V1.1 on owner/scope responsibility.

## 7. Hash rule

The finalized V1.1 Manifest hash is recorded in the PCR-02 submission wrapper. Any change requires a new version/hash.

