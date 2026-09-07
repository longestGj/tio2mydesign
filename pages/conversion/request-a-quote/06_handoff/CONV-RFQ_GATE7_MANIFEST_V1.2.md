# CONV-RFQ Gate 7 Manifest V1.2

## 0. Control

| Field | Value |
|---|---|
| Manifest | `CONV-RFQ-G7-MANIFEST-03` |
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review | `CONV-RFQ-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Page lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff | `HANDED_OFF=NO` |
| Gate 8 / development / D16 | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 7 Manifest. It records an approved-for-handoff specification, not an executed handoff or development authorization.

## 1. Current approved authority set

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `05_review/CONV-RFQ_GATE7_PROJECT_CONTROL_CLOSURE_V1.0.md` | 4,211 | `2C0693F2E6E3574C4895C7EA43C36EE07CC32D062E3CC32A8CBD8FFC486AD084` | PCR-02 closure and lifecycle boundary |
| `06_handoff/CONV-RFQ_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md` | 3,280 | `6EBB73E77513CD42C64AA34BACF52E9A9F0BEBEEAEA84D2FBE95225EE5D02D5C` | reviewed PCR-02 submission |
| `06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md` | 6,809 | `264156A38CC88F0926BB9EB6B0BC7CA3DDC500A8B47D3FF63EACC50510930D15` | approved responsibility matrix and scope correction |
| `06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.1.md` | 4,703 | `3675984183ED0D86848CAE2635517B80E6FAE50E59A0B9400AFE4AD6F5010F2A` | approved owner/readiness/component mapping |
| `06_handoff/CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.1.md` | 4,412 | `961EBED064C009B3C0A3F98D8B42EDAD66B42FDB7946872EBD01DC6D7043D7F2` | approved owner-specific Gate 8/9 acceptance/blockers |
| `06_handoff/CONV-RFQ_GATE7_FRESH_VALIDATION_V1.1.md` | 3,546 | `74388D11DC000B04609C7C86362A582F17486C6AEB1B8DCF859870135BE93053` | PCR-02 validation: `12/12 PASS`; 32 owner/scope assertions |

## 2. Exact contracts carried forward unchanged

| File/root | SHA-256 | Active role |
|---|---|---|
| `06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.0.md` | `7644CC0F33E47AD2DB7921CD820BF8AFB7B40A4C69A3C9D68A618BF1A9119F38` | exact approved page/SEO/state/privacy/product/responsive contract, subject to V1.1 owner correction |
| `06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` | `219665FCF1E6B7D8B4C6E5673924D5FF820356481335B7DF78E70EB5D7642CBF` | exact fields/options/errors/prefill/request-response mapping, subject to V1.1 owner correction |
| `06_handoff/CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.0.md` | `ED6491883B2C04F4944BDC2FE82DCAF3877EDF9E967274EDF9C6E0E351C3CE49` | unchanged QA/rollback requirements, subject to V1.1 owner correction |
| `05_review/CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md` | `1693D9D0F9C24E08854BE72DA42AFE40E7CA864009D8716A15FA1AE30F8D4139` | approved visual/content root |
| `05_review/CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.2.md` | `55ED7463334DF3D97F5506263A76D8F52FAE9E6AA6F3E26E3192A132AADFF29B` | approved Gate 6 root |

The approved Gate 2 body copy remains unchanged. The later unapproved Hero rewrite remains excluded by the recorded user rebase to the original Hero copy.

## 3. Responsibility seal

| Surface/dependency | Implementation owner | CONV-RFQ role |
|---|---|---|
| `/request-a-quote/` + form/receiver/local outputs | CONV-RFQ | implement only after separate Gate 8 authorization |
| Privacy Policy page/body | independent Legal/Privacy Page ID | short notice/link, RFQ data-flow facts, readiness consumption and integration verification |
| Header/Footer/Menu/legal links | Home/Global Chrome/Legal shared owner | consume/verify; no fork |
| Cookie Banner/Settings/CMP/consent | shared consent owner | consume signal; gate local events |
| `/request-sample/` | CONV-SAMPLE | render required link; consume readiness |
| `/request-documents/` | CONV-DOC | render required link; consume readiness |

## 4. Required route and release seal

```text
CONV-RFQ renders: Request a Sample  -> /request-sample/      REQUIRED_FINAL_SYSTEM
CONV-SAMPLE implements:             /request-sample/

CONV-RFQ renders: Request Documents -> /request-documents/   REQUIRED_FINAL_SYSTEM
CONV-DOC implements:                 /request-documents/
```

Privacy Policy, shared Global Chrome/CMP/consent and both sibling routes remain external owner responsibilities. If any required dependency is not ready, Gate 9 and complete-site release are blocked. No placeholder, hide, disable, remove, merge, Contact/email/phone fallback or RFQ-local sibling implementation is authorized.

## 5. Scope and authorization seal

- Gate 7 specification is approved and the page lifecycle is `APPROVED_FOR_HANDOFF`.
- `HANDED_OFF=NO`; no package has been sent to an external development task.
- Gate 8, development and `D:\16Wordpress_nextjs` remain `LOCKED / NOT_AUTHORIZED`.
- Gate 9, Gate 10, deployment, publication, DNS and indexing remain separately controlled.
- The next possible action requires an explicit user decision on Gate 8 and actual handoff.

## 6. Historical disposition

- Manifest V1.1 is `HISTORICAL PCR-02 REVIEW CANDIDATE / SUPERSEDED_BY_V1.2`.
- Manifest V1.0 is `HISTORICAL PCR-01 / SUPERSEDED_BY_V1.1`.
- V1.0 exact-contract documents remain active only through §2 and are overridden by V1.1 on owner/scope responsibility.

## 7. Hash rule

The finalized V1.2 Manifest hash must be recorded in the current page index and project governance records. Any semantic change requires a new version and hash.
