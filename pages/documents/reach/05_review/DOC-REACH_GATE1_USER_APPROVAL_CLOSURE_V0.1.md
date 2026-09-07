# DOC-REACH Gate 1 User Approval Closure V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Review ID | `DOC-REACH-G1-V03-USER-APPROVAL-01` |
| Date | 2026-09-04 |
| Decision source | User in current Controller conversation |
| Gate 1 | `USER_APPROVED / CLOSED` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Gate 2 | `USER_AUTHORIZED / QUEUED_SERIAL` |
| Gate 3–10 | `NOT_AUTHORIZED` |

## 1. Approved Gate 1 scope

The user approved the DOC-REACH V0.3 Page Intent Card contained in the combined three-page submission and separately authorized Gate 2.

The approved content intent is:

1. The page serves a global procurement audience while explaining the EU REACH subject; EU REACH evidence cannot be presented as UK REACH coverage.
2. The page supports evidence-led verification and controlled document request, not an unqualified company compliance claim.
3. `reach compliant titanium dioxide` remains `QUERY_LANGUAGE_ONLY` and cannot be rendered as a TiO2 Malaysia claim.
4. `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN`; no publishable substance-specific Direct Answer may be created until the evidence blocker is closed.
5. Company/legal entity, importer/Only Representative, registration-number and tonnage statements remain frozen.
6. `source_page=DOC-REACH` is hidden, system-controlled and non-editable; buyer context remains visible and editable.

## 2. Gate separation

This decision closes Gate 1 only. Gate 2 is authorized, but DOC-REACH remains `QUEUED_SERIAL` until the preceding DOC-TDS Gate 2 checkpoint is handled. Gate 2 work must preserve the Direct Answer publication blocker and may design only fail-closed conditional behavior around it.

This approval does not close any Evidence Hold, does not approve final copy, and does not authorize Gate 3, wireframes, visuals, development, `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing.

## 3. Authority chain

| Role | File | State after this decision |
|---|---|---|
| Combined Gate 1 submission | `pages/documents/05_review/DOCUMENT_CHILD_PAGES_GATE1_PROJECT_CONTROL_SUBMISSION_V0.3.md` | `USER_APPROVED / CLOSED_FOR_GATE1` |
| Independent Brief | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.3.md` | Gate 1 content intent approved through this closure |
| Gate 1 audit | `pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md` | Retained research/evidence baseline |
| Claim Register | `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv` | Retained; all fail-closed dispositions unchanged |
| Earlier Gate 1 pointer | `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.3.md` | Historical pre-approval pointer |

## 4. User decision record

User message: `批准 Gate 1 ，授权进入 Gate 2。`

Interpretation under project governance:

- `批准 Gate 1` approves the concrete V0.3 package for DOC-TDS, DOC-REACH and DOC-COO submitted immediately before the message.
- `授权进入 Gate 2` authorizes the three pages to proceed under the agreed serial order.
- DOC-REACH is authorized but not started; its place is after DOC-TDS.
- No publication blocker, Evidence Hold or later Gate is released.

## 5. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Recorded user approval of DOC-REACH Gate 1 and separate Gate 2 authorization | `USER_APPROVED / CLOSED` |

