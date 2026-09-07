# CONV-RFQ Gate 7 Manifest V1.0

## 0. Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-RFQ-G7-MANIFEST-01` |
| Package ID | `CONV-RFQ-G7-HANDOFF-01` |
| Review ID | `CONV-RFQ-G7-PCR-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 | `AUTHORIZED / IN_PROGRESS` |
| Handoff | `NO / NOT_AUTHORIZED` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Sealed Gate 7 payload

All payload files are in `D:\23MySec\pages\conversion\request-a-quote\06_handoff\`.

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.0.md` | 12,181 | `7644CC0F33E47AD2DB7921CD820BF8AFB7B40A4C69A3C9D68A618BF1A9119F38` | authority, identity, visual/content, state, privacy, analytics, isolation and phase contract |
| `CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md` | 12,724 | `219665FCF1E6B7D8B4C6E5673924D5FF820356481335B7DF78E70EB5D7642CBF` | exact fields/options/errors/prefill/receiver and layer mapping |
| `CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.0.md` | 9,988 | `ED6491883B2C04F4944BDC2FE82DCAF3877EDF9E967274EDF9C6E0E351C3CE49` | Gate 8 obligations, Gate 9 QA, blockers and rollback |
| `CONV-RFQ_GATE7_FRESH_VALIDATION_V1.0.md` | 4,249 | `90CE4EB9C35FC29BEE79370A28DE5753B6B36ACBF8AD9FDD0AB1D57C3A1B334A` | fresh integrity, coverage and boundary validation |

The project-control submission wrapper is outside the sealed payload so it can record this finalized Manifest's hash without circular reference.

## 2. Authorization and approved input seals

| Input | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `../05_review/CONV-RFQ_GATE7_USER_AUTHORIZATION_RECORD_V1.0.md` | 1,656 | `C80AA86203EC3DD841B92E0033FEE053AF376F85852EDD0A3A89379F1A6536D3` | Gate 7 preparation authorization and Gate 8 lock |
| `../05_review/CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md` | 5,034 | `1693D9D0F9C24E08854BE72DA42AFE40E7CA864009D8716A15FA1AE30F8D4139` | exact approved specification and all 12 visual hashes |
| `../05_review/CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.2.md` | 2,868 | `55ED7463334DF3D97F5506263A76D8F52FAE9E6AA6F3E26E3192A132AADFF29B` | closed Gate 6 authority and later-gate classification |

## 3. Shared authority seals

| Source | Bytes | SHA-256 |
|---|---:|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7,235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` |
| `docs/architecture/WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md` | 6,509 | `9E35DDFB3035EC996C1F3D4E403B47EAB866EB5AB536AF3D4FE99AFDBB3F8059` |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | 61,284 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md` | 4,178 | `338F2D4F2083E2E56B00637A4771982D08BFA15C1283022D6A28D506F0DEDEDB` |
| `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md` | 2,350 | `ED17610571BCEDABADC3EFF103E7DB99978D9BCA78971BCE2655D1DDC8500AF8` |
| `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md` | 2,012 | `900ACDC97767910139B3478DAD69DB9A734B933F8B2BAF9D8A8955B2CDF05A78` |

## 4. Required final-system route seal

```text
Request a Sample   -> /request-sample/      REQUIRED_FINAL_SYSTEM
Request Documents  -> /request-documents/   REQUIRED_FINAL_SYSTEM
```

Neither link may be conditional, hidden, disabled, removed or relinked. Gate 8 must implement both routes; Gate 9 and release readiness must verify them.

## 5. Current scope seal

- One page only: `CONV-RFQ` / `/request-a-quote/`.
- One site scope only: `tio2-my`.
- Approved Gate 5 visual/content remains unchanged and external to this handoff directory.
- No sibling page content/design package is included.
- No Global Chrome/Logo asset is copied.
- No WordPress, Next.js, API, CMS implementation, test, build, deployment or release code is included.
- No file from `D:\16Wordpress_nextjs` is included or accessed.

## 6. Manifest hash rule

The finalized Manifest SHA-256 is recorded in the Gate 7 project-control review submission. Any payload or Manifest change requires a new version and new hashes; do not overwrite this sealed candidate after submission.

## 7. Boundary

This Manifest seals a project-control review candidate only. It does not approve Gate 7, authorize handoff or open Gate 8/development.

