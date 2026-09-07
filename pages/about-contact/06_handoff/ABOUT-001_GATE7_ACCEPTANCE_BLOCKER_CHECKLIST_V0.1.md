# ABOUT-001 Gate 7 Acceptance / Blocker Checklist V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Gate 7 Package Acceptance

| Domain | Required acceptance |
|---|---|
| Identity | ABOUT-001, `/about/`, Trust/company page, Primary Keyword and `tio2-my` match Registry/master |
| Baseline | Gate 6 PCR-03 closed authorities and all three V0.3 visual hashes match |
| Content | Source Map includes current Hero, facts, ten-module order, CTAs and links |
| Authorization | Root §2.3 applied; approved visible facts may enter SEO/GEO/social/Schema |
| Schema | Organization `name`/`description`/`location`/`areaServed`; no `legalName` or frozen fields |
| CMS/API | Fields, public state model, atomic omission and same-source output defined |
| Components | Shared Header/Footer consumed; no local fork |
| Responsive/a11y | Desktop/Tablet/Mobile, keyboard, focus, targets, overflow and ALT defined |
| Routes | Child fallback and required-action release behavior defined |
| Isolation | Content, media, routes, cache, metadata, Schema and forms scoped to `tio2-my` |
| Phase | Gate 8, handoff, development and release remain unauthorized |

## 2. Gate 8 Implementation Blockers

The external development task must not claim implementation readiness if any of the following is missing:

- exact current content model and `tio2-my` scope filter;
- shared Global Chrome V0.5 integration;
- required routes or approved Hub fallbacks;
- metadata/Schema same-source rendering;
- restricted-field atomic omission;
- individual media source/right/usage records;
- environment robots/canonical controls;
- responsive and accessibility behavior.

## 3. Gate 9 / Release Blockers

| ID | Blocking condition |
|---|---|
| `ABOUT-RB-01` | `/about/`, canonical, required visible CTA or shared RFQ route fails |
| `ABOUT-RB-02` | Malaysia content, media, navigation, metadata or Schema leaks across `site_scope` |
| `ABOUT-RB-03` | Visible HTML, SEO, GEO/social or Schema facts diverge |
| `ABOUT-RB-04` | `legalName`, SSM/registration, ISO/QMS, traceability, rating, Offer or hidden guarantee appears |
| `ABOUT-RB-05` | Taiping is represented as registered address rather than location Place |
| `ABOUT-RB-06` | Area served contains an unapproved market or fabricates customer/export entities |
| `ABOUT-RB-07` | Required body image lacks source/right/usage approval or ALT overclaims identity |
| `ABOUT-RB-08` | OG/Schema image emitted without eligibility approval |
| `ABOUT-RB-09` | Header/Footer is locally forked, RFQ hidden, current state wrong or visible `CURRENT` appears |
| `ABOUT-RB-10` | 390/375/430px overflow, crop, unreadable type, target below 44px or keyboard/focus failure |
| `ABOUT-RB-11` | Provisional child route renders as broken link instead of approved Hub fallback |
| `ABOUT-RB-12` | Production indexes without explicit release/indexing authorization |

## 4. Non-Blocking Internal Controls

- Review IDs, evidence states and approval notes remain internal and absent from buyer-visible output.
- Preview-only diagnostic labels and draft asset paths remain outside public payloads.
- Lack of an optional Schema/OG image does not block HTML if project control approves a rights-cleared body/media implementation that does not require that optional output; using an uncleared image does block release.

## 5. Stop Condition

This checklist supports project-control review of the Gate 7 package. It does not close Gate 7, authorize Gate 8 or mark `HANDED_OFF=YES`.
