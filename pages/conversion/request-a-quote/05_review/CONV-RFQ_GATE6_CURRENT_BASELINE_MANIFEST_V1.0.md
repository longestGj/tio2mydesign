# CONV-RFQ Gate 6 Current Baseline Manifest V1.0

## 0. Current status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-01` |
| Gate 5 | `USER_APPROVED / CLOSED` |
| Gate 5 baseline | `CONV-RFQ-G5-APPROVED-BASELINE-01` |
| Gate 6 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 6 Manifest. Submission is not project-control approval.

## 1. Current Gate 6 authority set

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-RFQ_GATE5_USER_APPROVAL_CLOSURE_V1.0.md` | 2,995 | `AAEAFBBE442E446BFD0111B70D00A79629EF6D662CCBEF8CACF474840437DB93` | Gate 5 closure and Gate 6 authorization |
| `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md` | 5,034 | `1693D9D0F9C24E08854BE72DA42AFE40E7CA864009D8716A15FA1AE30F8D4139` | approved V1.0 spec and 12 asset hashes |
| `CONV-RFQ_GATE6_AUTHORITY_AND_PRECEDENCE_MANIFEST_V1.0.md` | 4,359 | `97C5AA99CD5F332951A64E40E7843D630E5869648DA51DC9ADA0355E3DF20D97` | authority, identity and conflict resolution |
| `CONV-RFQ_GATE6_AUDIT_AND_ACCEPTANCE_V1.0.md` | 6,138 | `EEC34C651EB0F86A23294A02BF818CA1449895FF697FAE1BFB02D4AD70DC8D21` | complete Gate 6 audit and open inputs |
| `CONV-RFQ_GATE6_SEO_GEO_SCHEMA_CONTRACT_V1.0.md` | 5,147 | `6ED3F86690B3EEB97162E6245B4BDF50933A2B98A102CB5E603204A56E446938` | visible/machine contract |
| `CONV-RFQ_GATE6_CMS_API_COMPONENT_FIELD_INVENTORY_V1.0.md` | 8,220 | `46609A81BBA63257CBA812C439DCC187891D42CFCC49E6B3D1BD59B74699C10C` | implementation-neutral fields/components |
| `CONV-RFQ_GATE6_RESPONSIVE_ACCESSIBILITY_CONVERSION_ACCEPTANCE_V1.0.md` | 5,215 | `A703D91DA55851571418F3FCF4BA615EC4C9AB52749D6EAB0E748A34FFDA738E` | responsive, keyboard, state and CTA acceptance |
| `CONV-RFQ_GATE6_GATE7_9_DELIVERY_ACCEPTANCE_V1.0.md` | 5,110 | `67C89C290694F1F62DBDC1C65010CC3DC98D393E3379C89D25B7E839CDF4F1FA` | later handoff/implementation/QA requirements |
| `CONV-RFQ_GATE6_FRESH_VALIDATION_V1.0.md` | 4,576 | `3F9191C67DCAF8EF6A10C7513A717D4013D3F19D1A3B94948B7A1F7E3ADC2D36` | fresh integrity and coverage validation |
| `CONV-RFQ_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | 4,750 | `BBC7E3891DB7EC2F819085B77FDB4CDCEA47E42D4A2EE69AF104D946ECC0A29A` | project-control review entry |

## 2. Approved visual/content root

All Gate 5 V1.0 specification and asset hashes remain frozen in `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md`. Gate 6 did not modify any approved visual or buyer-visible copy.

## 3. Gate 6 decision set

Project control is asked to decide G6-D01–D10:

- identity/keyword;
- Buyer Clean/minimum data;
- privacy and form state semantics;
- SEO/GEO/Schema parity;
- PRODUCT V0.3;
- Global Chrome/legal framework;
- responsive/accessibility;
- `site_scope` and field/component contracts;
- internal links/CTA;
- Gate 7/8/9 acceptance and open-item classification.

## 4. Open items

`RFQ-G6-O01`–`RFQ-G6-O07` remain later implementation, QA and release inputs. They do not authorize a Buyer Clean placeholder or Contact fallback and do not constitute Gate 7 authorization.

## 5. Historical disposition

`CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.8.md` is the historical pre-Gate6 current-state record. Gate 5 approval is now governed by the approved baseline Manifest; Gate 6 status is governed only by this file until project-control review produces a new closure/Manifest.

## 6. Stop boundary

Do not enter Gate 7, handoff, development, CMS implementation, testing, deployment, publication, DNS or indexing. Do not access or modify `D:\16Wordpress_nextjs`.

