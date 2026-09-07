# HOME-001 Gate 7 P0 Input Revision — Project-Control Review Submission V0.1

## 0. Submission control

| Field | Value |
|---|---|
| Existing package | `HOME-001-G7-HANDOFF-01` |
| P0 Amendment ID | `HOME-001-G7-P0-REV-01` |
| Current Manifest | `HOME-001-G7-MANIFEST-02` |
| User authorisation date | 2026-08-31 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Project-control result | `PENDING_PROJECT_CONTROL_REVIEW` |
| Existing page lifecycle | `APPROVED_FOR_HANDOFF`; current P0 revision not yet approved |
| `HANDED_OFF` | No |
| External development | Not started |
| Gate 8 / Gate 9 / Gate 10 | Not started; not authorised |

This submission requests review of two directed Gate input corrections only. It does not reopen Home content, architecture, visual direction, metadata values, Schema relations, products, CTA ownership or fact gates.

## 1. P0-1 Tablet evidence

New formal assets:

| Viewport | File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png` | 768×6844 | 444731 | `E642EA33FD0755884529AB35E3A80062A7F44F8A9D31E209F271176CCC5EA357` |
| 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png` | 1024×5220 | 448760 | `F81110344F7946185504D7A5D37E50CA0AC1E4DF72826F67F40EC528E8E3897C` |

Both preserve the previous evidence above Footer, add Resources / Buyer Answers and the page-level RFQ, and retain the original Footer with fixed Global RFQ. The 390px Home remains unchanged and continues to omit the page-level RFQ.

Historical Tablet V0.1 files remain present at their original paths and hashes. They are not overwritten.

## 2. P0-2 Canonical acceptance

The preferred emitted canonical remains `https://tio2malaysia.com/`. Acceptance now parses and compares URL components. `https://tio2malaysia.com` and `https://tio2malaysia.com/` are equivalent for Home.

The revised contract still requires exactly one canonical, HTTPS, hostname `tio2malaysia.com`, pathname `/`, no query, no fragment and no alternate site or `site_scope`. It explicitly forbids adding a second canonical for the alternate trailing-slash form.

## 3. Modified and added files

| File | Change type |
|---|---|
| `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png` | New formal Tablet evidence |
| `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png` | New formal Tablet evidence |
| `pages/home/04_planning/14_homepage_gate7_p0_tablet_evidence_v0.2.md` | New evidence description/version record |
| `pages/home/06_handoff/HOME-001_GATE7_P0_INPUT_AMENDMENT_V0.1.md` | New directed delivery amendment |
| `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` | New versioned acceptance layer |
| `pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.2.md` | New unique current P0 Manifest candidate |
| `pages/home/06_handoff/HOME-001_GATE7_P0_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | New mutable review cover |
| `00_PROJECT_STATUS.md` | Dynamic status synchronization only |
| `01_PROJECT_INDEX.md` | Current file and review-entry indexing only |

No existing V0.1 handoff document or visual asset is overwritten.

## 4. Review request

Project control should verify:

1. both V0.2 Tablet PNGs contain the complete contracted order through Resources / Buyer Answers, page-level RFQ and Footer;
2. original pre-Footer pixels and Footer pixels are retained from V0.1;
3. Tablet V0.1 files remain unchanged and available;
4. 390px assets and responsive RFQ distinction remain unchanged;
5. Canonical acceptance uses parsed normalized equivalence and still requires exactly one tag;
6. all Manifest records match dimensions, bytes and SHA-256;
7. unchanged Gate 7 V0.1 payload hashes remain unchanged;
8. RFQ, route, asset, fact, external implementation, QA and release blockers remain open;
9. no development, deployment or publication action occurred.

## 5. Directed validation

| Check | Result | Evidence |
|---|---|---|
| Automated directed checks | PASS | 124/124; failures 0 |
| Current Manifest records | PASS | 24/24 payload/input/visual/asset records match path, dimensions where applicable, bytes and SHA-256 |
| Manifest V0.2 identity | PASS | 8229 bytes; SHA-256 `E4CF1C5178B0B2C750C69441A2BAF71ED49F062B1187B4144CF39916D5D8647C`; self-hash kept outside Manifest to avoid a circular checksum |
| Tablet V0.2 dimensions | PASS | 768×6844 and 1024×5220 |
| V0.1 pre-Footer retention | PASS | Raw RGB pixels above the historical Footer boundary are identical at both widths |
| V0.1 Footer retention | PASS | Raw RGB Footer pixels are identical at both widths; Global RFQ retained |
| Historical Tablet assets | PASS | Both V0.1 files remain present with original dimensions, bytes and SHA-256 |
| 390px evidence | PASS | Mobile Buyer Clean, Menu Open and Products Expanded hashes unchanged; no page-level RFQ reintroduced |
| Canonical equivalence | PASS | Both accepted forms normalize to `https://tio2malaysia.com/`; five negative fixtures rejected |
| Canonical single-tag rule | PASS | Contract requires exactly one tag and explicitly forbids a second trailing-slash alternative |
| Markdown hygiene | PASS | Eight current revision/governance files: conflict markers 0, trailing whitespace 0 |
| Project references | PASS | All explicit project paths exist |
| Delivery boundary | PASS | Handoff directory contains Markdown specifications only; no implementation file |

Validation scripts and audit:

- `99_workspace/home-gate7-p0-revision/validate-home-gate7-p0-v0.1.mjs`
- `99_workspace/home-gate7-p0-revision/home-tablet-evidence-v0.2-audit.json`

Automated checks support but do not replace project-control visual review.

Until project control records a result, `HOME-001-G7-P0-REV-01` remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. The existing package is not `HANDED_OFF`, and no external development task may start from this candidate alone.
