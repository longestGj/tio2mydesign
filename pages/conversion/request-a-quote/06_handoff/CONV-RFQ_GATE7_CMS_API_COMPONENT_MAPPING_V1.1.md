# CONV-RFQ Gate 7 CMS / API / Component Mapping V1.1

## 0. Control

| Field | Value |
|---|---|
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review | `CONV-RFQ-G7-PCR-02` |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Supersedes | V1.0 responsibility mapping only |

V1.0 remains the exact authoritative field/option/error/prefill/response/layer inventory. V1.1 corrects ownership and external-readiness projection without changing any Buyer Clean value.

## 1. Ownership types

| Owner key | Scope |
|---|---|
| `conv_rfq_owner` | `/request-a-quote/`, RFQ form/receiver/local metadata/a11y/analytics |
| `legal_privacy_page_owner` | Privacy Policy Page ID/route/body and final disclosures |
| `global_chrome_owner` | shared Header/Footer/Mobile Menu and Production SVG consumption |
| `consent_platform_owner` | Cookie Banner/Settings, CMP and shared consent state |
| `conv_sample_owner` | `/request-sample/` page/workflow |
| `conv_doc_owner` | `/request-documents/` page/workflow |

## 2. Route/reference mapping

| Semantic field | Required | Value | Implementation owner | CONV-RFQ behavior |
|---|---:|---|---|---|
| `rfq_route_ref` | yes | `/request-a-quote/` | `conv_rfq_owner` | implement |
| `privacy_route_ref` | yes | shared approved Privacy Policy route | `legal_privacy_page_owner` | render link, consume readiness, verify actual RFQ data-flow parity |
| `sample_link_label` | yes | `Request a Sample` | CONV-RFQ content contract | render exact label |
| `sample_route_ref` | yes | `/request-sample/` / `REQUIRED_FINAL_SYSTEM` | `conv_sample_owner` | render link, consume readiness; do not implement page |
| `documents_link_label` | yes | `Request Documents` | CONV-RFQ content contract | render exact label |
| `documents_route_ref` | yes | `/request-documents/` / `REQUIRED_FINAL_SYSTEM` | `conv_doc_owner` | render link, consume readiness; do not implement page |

## 3. Shared component mapping

| Component/reference | Owner | CONV-RFQ mapping |
|---|---|---|
| Desktop/Mobile Header, Mobile Menu, Footer | `global_chrome_owner` | consume by shared reference; page-local fork prohibited |
| Footer legal links | `global_chrome_owner` + `legal_privacy_page_owner` | consume; verify final routes |
| Cookie Banner/Settings/CMP | `consent_platform_owner` | consume shared UI/state; no RFQ-private implementation |
| consent signal | `consent_platform_owner` | gate local GA4/GTM events according to approved behavior |
| Production SVG | shared Brand/Global Chrome owner | reference approved asset key/path |

## 4. External readiness input

```text
DependencyReadiness {
  dependency_key
  owner_key
  status: not_implemented | implemented_not_verified | verified_public | revoked
  evidence_ref_internal
  checked_at
}
```

Allowed dependencies:

- `privacy_policy`;
- `global_chrome`;
- `shared_consent_platform`;
- `request_sample_route`;
- `request_documents_route`.

Readiness records are internal. They cannot enter HTML, accessible names, URL/query, analytics labels, metadata or Schema and cannot drive hide/disable/remove/fallback behavior for approved final-reader surfaces.

## 5. RFQ-owned receiver/data fields

CONV-RFQ owns integration of its visible form payload with the verified receiver/Web3Forms configuration. It records actual endpoint class, owner, positive receipt mapping, failure observability and data flow for Legal/Privacy owner consumption. It does not own shared policy text, CMP or sibling workflow implementation.

## 6. Analytics responsibility

- Shared owner supplies consent state and GTM/GA4 platform configuration.
- CONV-RFQ defines only its page-local privacy-safe event semantics.
- `rfq_receipt_confirmed` may occur only after explicit positive receiver acknowledgement and applicable shared consent.
- click/attempt/failure events do not equal conversion success.
- no form value, field error, grade/application/destination, email, phone, URL or free text enters event parameters/dataLayer/ad payload.

## 7. Site-scope and fallback

RFQ-local content/form/receiver/cache/metadata use `site_scope=tio2-my`. External readiness references point to the registered same-site Page ID/shared owner. Missing dependencies block later release; they do not authorize cross-scope lookup, local cloning, stale fallback or Contact substitution.

## 8. Preserved exact mapping

All V1.0 exact page/content/form fields, option order, 15 error conditions, state messages, prefill rules, request/response mapping and view-model invariants remain unchanged and are incorporated into the current package.

## 9. Boundary

This mapping is implementation-neutral and does not authorize another owner, Gate 8 or development.

