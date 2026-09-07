# CONV-RFQ Gate 6 Current Baseline Manifest V1.1

## 0. Current status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Parent | `PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Targeted P0 | `P0-01_COMPLETE_SITE_SIBLING_ROUTES` |
| Gate 5 | `USER_APPROVED / CLOSED` |
| Gate 6 | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

This is the only current Gate 6 Manifest.

## 1. Current targeted authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-RFQ_GATE6_PROJECT_CONTROL_RETURN_V1.0.md` | 1,562 | `3B16A18C87CE73DF35E809AE08D576EFA952ED4CFFC8E695912798F7A3702741` | PCR-01 sole return |
| `CONV-RFQ_GATE6_AUTHORITY_AND_PRECEDENCE_MANIFEST_V1.1.md` | 3,313 | `28D32F8D126ACEF7A5750FC9A73A266F2B1A1740C9EF01649B03BE622EFF28A8` | complete-site precedence/routing ruling |
| `CONV-RFQ_GATE6_AUDIT_AND_ACCEPTANCE_V1.1.md` | 4,223 | `B4A368FA839ACE9235A1E988FFFF0F2D879D955A6595A380EC43485EA514C3BF` | updated O06 and acceptance |
| `CONV-RFQ_GATE6_CMS_API_COMPONENT_FIELD_INVENTORY_V1.1.md` | 5,010 | `190A02DF82F825A399173CE8C047B0211FA2350C2656F5891BF4A3908B514A8D` | required route refs/module links |
| `CONV-RFQ_GATE6_GATE7_9_DELIVERY_ACCEPTANCE_V1.1.md` | 3,816 | `9E557E19955202429647850277831AC2E2B0BE010F25ECAAFD2FA07DB364FED7` | Gate 8 implementation and Gate 9/release blockers |
| `CONV-RFQ_GATE6_FRESH_VALIDATION_V1.1.md` | 3,205 | `0B16E7C3AE0C7F40A37373E686D2785056E08A207652AA76142AB361E179FE0D` | 10 targeted checks |
| `CONV-RFQ_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md` | 3,043 | `A7D91A30BB83D25A6DBCD2C03B2DCECD48E5C5F05BCEFE4C393CF29D8BCDFC77` | PCR-02 review entry |

## 2. Unchanged current authority

| File | SHA-256 | Role |
|---|---|---|
| `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md` | `1693D9D0F9C24E08854BE72DA42AFE40E7CA864009D8716A15FA1AE30F8D4139` | approved content/visual root |
| `CONV-RFQ_GATE6_SEO_GEO_SCHEMA_CONTRACT_V1.0.md` | `6ED3F86690B3EEB97162E6245B4BDF50933A2B98A102CB5E603204A56E446938` | unchanged SEO/GEO/Schema |
| `CONV-RFQ_GATE6_RESPONSIVE_ACCESSIBILITY_CONVERSION_ACCEPTANCE_V1.0.md` | `A703D91DA55851571418F3FCF4BA615EC4C9AB52749D6EAB0E748A34FFDA738E` | unchanged responsive/a11y/state/CTA |

## 3. PCR-02 invariant

Both approved final-reader links are required final-system entries:

- `/request-sample/`;
- `/request-documents/`.

They must be implemented at Gate 8 and verified at Gate 9 before release. A false readiness state cannot hide, disable, remove or relink either link. Any removal/change requires explicit user-approved change control.

## 4. Historical disposition

`CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.0.md` and V1.0 Gate 6 content documents are `HISTORICAL PCR-01 / SUPERSEDED_FOR_PCR-02` except the unchanged SEO/GEO/Schema and Responsive/Accessibility documents explicitly retained above. Gate 5 is not reopened.

## 5. Stop boundary

Gate 6 remains not approved until PCR-02 decision. Gate 7, handoff, development, tests, deployment, publication, DNS, indexing and D16 remain locked.

