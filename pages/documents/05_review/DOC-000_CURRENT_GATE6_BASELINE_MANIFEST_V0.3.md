# DOC-000 Current Gate 6 Baseline Manifest V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 5 | `APPROVED / CLOSED` |
| PCR-01 | `CONDITIONAL_RETURN / SUPERSEDED_BY_PCR_02` |
| PCR-02 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 6 outcome | `PROJECT_CONTROL_GATE_6_PASS` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |
| Date | 2026-09-02 |
| Package role | Sole current approved Gate 6 baseline root |

This Manifest records the post-review governance outcome without altering the immutable PCR-02 submission package or approved Gate 5 visual assets.

## 1. Gate 6 closure authority

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Project-Control Closure V0.1 | `pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md` | 3357 | `FDE47483747E6976E621623D99B86C798924D12746C1B6106514D9F192458F40` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Immutable reviewed package root V0.2 | `pages/documents/05_review/DOC-000_CURRENT_GATE6_REVIEW_MANIFEST_V0.2.md` | 6478 | `CF7C5FC5E78818056986E52CAB6C0A644BF8C82BE22D84D02ABDD4301D0ECB33` | `REVIEWED_AND_PASSED_BY_CLOSURE / IMMUTABLE_SUBMISSION_STATE` |

The V0.2 Manifest and payload files retain their draft labels as an accurate submission-time record. The closure above is the current status authority and does not rewrite their reviewed bytes or hashes.

## 2. Sole current page-owned inputs

| Order | Role | Path | Bytes | SHA-256 | Current status |
|---:|---|---|---:|---|---|
| 1 | Normalized Brief V0.6 | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md` | 11220 | `561438171421419ADFA50A20EBCAF26EBF4691EC85AC32A824CB2B2E81B4693F` | `CURRENT / GATE_6_APPROVED_BY_CLOSURE` |
| 2 | Normalized Content Architecture V0.9 | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.9.md` | 12103 | `4F5FA658C3310A5D342FEE4FDE11F857CFB13A79F7EFC2A7726F77BF8C44BE03` | `CURRENT / GATE_6_APPROVED_BY_CLOSURE` |

No later task may reconstruct current page behavior from Brief V0.5, Content V0.8, a separate Hero override, SEO V0.6 or Documents Playbook V0.3. Those remain historical traceability inputs only.

## 3. Reviewed PCR-02 payload

| Payload | SHA-256 |
|---|---|
| Gate 6 Review Package V0.2 | `40F2100B1E8916C9CE5214629B39308C2FE5DD51FBFEFA4DFF3CF8DF57D8F988` |
| Gate 7 Readiness Contract V0.2 | `0608037F466E4646ED5AA652371AAE68F43DA582C5B1B3D24DB0AD7451647B79` |
| SEO/GEO/Schema/Social/DOM Review V0.2 | `BF9E98A82A83B9B9B0C4C19934920DAA56DCD1DDA8809B0888559DA5CE3FDA93` |
| Validation V0.2 | `6BA57EFA600086F9A084600704563D0AC85B78EB63452DF917D8EE305AB5494F` |
| Project-Control Submission V0.2 | `C3FEB98DBEF38E06BD38CF5C5700D4CB2BAD28D27F72D8C96CE584E37D8B51FF` |

## 4. Approved legal/privacy and social boundary

Current legal authority remains:

1. `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md` — `9B01C3D086BCBED5CB3DE2ED74EE997FC671FE21B055F458AC0B8301D99127D1`.
2. `PAGE_REGISTRY_V0.2.md` — `B60E968D4D9DB0E80C0FF19EEFF194BE6B1ACB030A8F37207654E258617D8181`.
3. `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` — `C1F0011408ED1D87CFF6D36C11F7E9812CC9A803431A3F7030C771FAF41BF633`.

`/terms-of-use/` is not an approved route or dependency. OG/Twitter title and description remain derived from approved SEO fields. A social image may use only an approved shared-owner asset key; otherwise image tags are intentionally omitted, with no factual or cross-scope fallback.

## 5. Frozen Gate 5 visual integrity

| Surface | SHA-256 |
|---|---|
| Gate 5 Manifest V0.3 | `D0C8E49F09BC37ED7E13E88B9D5506E724CC7ADA5F53AB5396E795B528CCDE9D` |
| Desktop V0.7.1 | `6DD95749FE87FCCAEBE16AC8AFD8A3C21F1BAD1227A3BB7D5660234AE57A0A12` |
| Tablet V0.7.1 | `85A1A5810AFDE686ECD0D2160A40A45AB13F1125941A9FADADE3CBD0FCF0DF96` |
| Mobile V0.7 | `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282` |
| Selector / FAQ states V0.6 | `4E8EB8F3EA0A1996C028C0E5502E2FBA74DEE55EC3C079D72A8B0D6E58B6116D` |
| Mobile Menu V0.6 | `C4A7B133A0873308439F99174CC6D9595DEF489FB77C3771969C316E437EBDE0` |
| Global Chrome proof | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` |

No Gate 6 status synchronization modified these assets.

## 6. Open later dependencies

Request Documents route/receiver and editable prefill, Products/RFQ routes, English operational handling, Privacy EN/BM, Cookie Policy, Cookie Settings, production canonical/robots/FAQ parity and any optional shared social-image key remain future verification dependencies. They are not authorization for Gate 7 or implementation.

## 7. Lifecycle and stop

- Lifecycle is `DESIGN_IN_REVIEW`.
- No handoff lifecycle state applies.
- Gate 7 is `LOCKED / NOT_AUTHORIZED`.
- No Gate 7 handoff package is created.
- No D16 access, development, testing, deployment, publication, DNS or indexing is authorized.

The Manifest self-hash is external and must be recomputed after this file is finalized.
