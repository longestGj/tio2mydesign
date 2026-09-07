# RES-ORIGIN Gate 5 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` |
| Date | 2026-09-05 |
| Automated result | `23 PASS / 0 FAIL` |
| Manual visual QA | `PASS` |
| Source/refetch integrity | `PASS / BYTE_IDENTICAL` |
| Status | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW` |

## 1. Automated Checks

The fresh Playwright run passed all checks:

1. complete document and single root;
2. all thirteen modules present and ordered;
3. exact approved Buyer Clean copy, including closed FAQ answers;
4. forbidden and internal terms absent;
5. one H1;
6. six-item Hero index;
7. six complete due-diligence checks;
8. five technical steps;
9. five application routes;
10. eight evidence-request items;
11. four destination cards;
12. three decision cards;
13. nine FAQ questions and nine answers;
14. unique valid anchor IDs and hrefs;
15. production logo roles only;
16. `Resources` current in Desktop and Mobile navigation;
17. exact metadata;
18. Desktop no horizontal overflow and compliant targets;
19. Tablet no horizontal overflow and compliant targets;
20. Mobile no horizontal overflow and compliant targets;
21. Mobile typography;
22. Mobile Menu open state;
23. Buyer Clean conditional-route absence.

## 2. Measurements

| View | Logical width | Scroll width | Page height | Min visible target | Body type | H1 |
|---|---:|---:|---:|---:|---|---|
| Desktop | 1440 | 1440 | 7175 | 44px | 16px / 25.92px | 58px |
| Tablet | 768 | 768 | 10023 | 44px | 16px / 25.92px | 50px |
| Mobile | 390 | 390 | 13577 | 44px | 16px / 25.6px | 39px |

The decorative Hero circle is intentionally clipped by its containing section; document `scrollWidth` remains exactly equal to each viewport width.

## 3. DOM Evidence

| Item | Count / Result |
|---|---:|
| H1 | 1 |
| Modules | 13, ordered |
| Qualification-path rows | 6 |
| Due-diligence checks | 6 |
| Technical steps | 5 |
| Application routes | 5 |
| Evidence-request items | 8 |
| Destinations | 4 |
| Decisions | 3 |
| FAQ questions / answers | 9 / 9 |
| Open FAQs | 1 |
| Anchors / unique IDs | 48 / 48 |
| Invalid hrefs | 0 |
| Primary / reverse logos | 2 / 1 |
| Forbidden phrases | 0 |

## 4. Manual Visual QA

- Desktop: hierarchy, long-page rhythm, evidence density, CTA contrast and shared chrome passed.
- Tablet: stacking, two-column checks, destination cards, readable line length and Footer passed.
- Mobile: Hero, full-width CTAs, six-check stack, technical sequence, destination cards, FAQ and final action passed.
- Mobile Menu open: production logo, current navigation, RFQ and Close presentation passed.
- FAQ: open answer and visible focus treatment passed.
- No clipped content, accidental overlap, unreadable text, decorative empty gap or horizontal scroll was observed.

## 5. Superdesign Integrity

| Artifact | SHA-256 |
|---|---|
| Local complete HTML | `34E19F52C6FE6B205F9257337B6568AAB4BAAEA4831D6BE4284E68220A7D6A13` |
| Superdesign v3 refetch | `34E19F52C6FE6B205F9257337B6568AAB4BAAEA4831D6BE4284E68220A7D6A13` |

The files are byte-identical. The active Superdesign draft is `30e63865-ca3f-408a-9d5f-202783d09e7d`, version `v3`.

## 6. Boundary

Validation demonstrates conformance of the Gate 5 candidate. It is not user approval and does not authorize Gate 6–10 or any implementation, route, deployment or publication activity.

