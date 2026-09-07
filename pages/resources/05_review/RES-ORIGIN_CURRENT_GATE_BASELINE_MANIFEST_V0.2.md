# RES-ORIGIN Current Gate Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` / Non-China Titanium Dioxide Supply Guide |
| URL | `/resources/non-china-titanium-dioxide/` |
| Page type | Buying guide |
| Date | 2026-09-05 |
| Lifecycle | `APPROVED_FOR_DESIGN` |
| Gate 0/1 | `USER_APPROVED / CLOSED` |
| Gate 1 checkpoint | `CONTENT_INTENT_CONFIRMED = USER_APPROVED / CLOSED` |
| Gate 2 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED = NOT_SET` |
| Gate 3 | Closed; not authorized |
| Public state | Not live, not indexed, not public inventory |
| Supersedes | `RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` |
| Superseded by | `RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md`; retained as pre-normalization history |

## 1. Current Authority Order

1. Current user decisions and root `AGENTS.md`.
2. `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`.
3. `docs/architecture/PAGE_REGISTRY_V0.2.md` and `research/keyword/11_page_keyword_master.csv`.
4. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
5. `docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md`.
6. Gate 0/1 approval record and current approved Brief/Audit.
7. Gate 2 review artifacts in Section 3, pending user approval.
8. V0.1 Brief/Audit and Manifest V0.1 as history only.

## 2. Approved Gate 0/1 Baseline

| Role | File | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Brief / Page Intent Card | `docs/page-briefs/RES-ORIGIN_NON_CHINA_TITANIUM_DIOXIDE_BRIEF_V0.2.md` | 26490 | `CB3311AF86F5B3CE4446E315CD779097519D46246BC316599C1544A712AA9BE7` | Submission-state file; approved by the separate decision record below |
| Gate 1 audit | `pages/resources/01_research/RES-ORIGIN_GATE1_KEYWORD_CLAIM_EVIDENCE_AUDIT_V0.2.md` | 7896 | `11151B2AFBE1E2855036E75998AB6FD9427F99480060DF297EB41D59505CCDA5` | Submission-state file; Gate 0/1 closed by the separate decision record below |
| Approval decision | `pages/resources/05_review/RES-ORIGIN_GATE0_GATE1_APPROVAL_DECISION_V0.1.md` | 3490 | `9C62C30ECA4144EC32F52E0D35A42C9F4D564557E53FD9F41A6CDE7820769670` | `USER_APPROVED / CLOSED`; Gate 2 authorized |

## 3. Current Gate 2 Review Baseline

| Role | File | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Complete Buyer Clean copy / module order | `pages/resources/04_planning/RES-ORIGIN_CONTENT_ARCHITECTURE_V0.1.md` | 20638 | `D77FD116D0DCE74F4DE84663AEAEB4236FD868CBC4AC4D7D085EF49A30CBDCBA` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| SEO/GEO/Schema contract | `pages/resources/04_planning/RES-ORIGIN_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | 11049 | `A97C83A92AC6A3B726F87F6B190A25B4A25899044102A8A3C8F2AA26D9C28CEF` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control submission | `pages/resources/05_review/RES-ORIGIN_GATE2_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 4711 | `73594D80C85AC2254ADC7B3890AD1E59ACE7CF9DF7E8000DEBFC37E99E483F31` | Historical submitted state |
| Project-control review | `pages/resources/05_review/RES-ORIGIN_GATE2_PROJECT_CONTROL_REVIEW_V0.1.md` | 3263 | `791BEED9D09A3F4A66F9E60ECEEA9BCC11032F69BD42AEDDD677935791F619EB` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

No Gate 3 wireframe, Gate 4 visual direction or Gate 5 visual asset exists for this page.

## 4. Shared Authorities for Later Gates

- Global Chrome: `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`.
- Current-state registry: `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md`.
- Production Logo: `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
- Parent Hub baseline: `pages/resources/05_review/RES-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`.
- Product relationships: `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and its approved unified audit.

RES-ORIGIN consumes these shared authorities. It does not fork or redesign them.

## 5. Open Controls

- Site-wide Malaysia-origin Claim Hold.
- Real author/publisher/date/review and maintenance owner.
- Downstream route eligibility.
- Current official-source package for any future jurisdiction-specific trade statement.
- M-996/M-2196 comparison freeze.
- RES-000 public inventory remains 0 until all child public gates pass.

## 6. Approval Boundary

Project control has passed the Gate 2 package for user decision. The user has not yet approved the Gate 2 full copy or module order, and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` is not set. Gate 3, Superdesign, wireframes, visuals, code, CMS, development, deployment, publication, DNS and indexing remain unauthorized.
