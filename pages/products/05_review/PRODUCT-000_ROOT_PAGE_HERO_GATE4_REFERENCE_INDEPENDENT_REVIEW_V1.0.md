# PRODUCT-000 Root Page Hero · Independent Review V1.0

## Control

| Field | Value |
|---|---|
| Review ID | `PRODUCT-ROOT-HERO-G4-REFERENCE-INDEPENDENT-01` |
| Candidate | `PRODUCT-ROOT-HERO-G4-REFERENCE-01` |
| Reviewer | Independent reviewer; did not create the candidate |
| Date | 2026-09-11 |
| Result | `PROJECT_CONTROL_REVIEW_PASS` |
| Required findings | `0` |
| Candidate status | Remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; this review does not close Gate 4/5, alter the current Manifest, or authorize Gate 6/8. |

## Review scope

This is an additive Wave 2 reference binding under `ROOT-HERO-G4-7P-V1`, not a PRODUCT-000 redesign. Reviewed inputs were the Root Page Hero shared contract, seven-page control and progress records, six-page preflight, PRODUCT-000 Brief V0.4, current Gate 6 baseline Manifest V0.1, Gate 2/V0.3 and Gate 3 inputs consumed by the approved V0.13 specification, approved V0.13 / Desktop V0.17 / Mobile V0.16 references, the binding and candidate records, all V1.0 capture sources, freeze record, runtime report, and the three supplied candidate images.

## Independent result

The candidate preserves the existing open-white PRODUCT Hero rather than creating another Hero design. It retains the exact approved eyebrow, H1, three paragraphs, two actions, four-card `6/5/2/1` portfolio summary, and the `Start with Your Application` transition.

| Requirement | Result |
|---|---|
| Exact Hero copy and actions | PASS — `Start Grade Selection` resolves to `#grade-selector`; `Request a Quote` remains `/request-a-quote/` without a live-route claim. |
| Hero/first-module boundary | PASS — the summary precedes `Start with Your Application`; the selected Coatings state exposes the approved eight neutral grades. |
| PRODUCT V0.3 scope | PASS — M-2377 is neutral in Coatings; M-996/M-2196 comparison language is absent; Rubber is absent; grade-result rows create no child href. |
| Global Chrome context | PASS — desktop order is `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`; compact header is `Logo | RFQ | Menu`; visible `CURRENT=0`; Products retains the semantic current mapping. |
| Shared Hero geometry | PASS — open-white surface has no Hero-wide border, radius, background, shadow, or left pseudo-decoration. |
| Responsive checks | PASS — 1440/768/390 measure H1 `56/44/36px`, weight 700, 3/2/3 lines, header `84/64/64px`, minimum visible action 44px, and no horizontal overflow. |
| Freeze/evidence integrity | PASS — the existing verifier and a separate read-only browser replay passed; all three supplied evidence hashes match the freeze record. |

## Findings

| Severity | Count | Disposition |
|---|---:|---|
| P0 | 0 | None |
| P1 | 0 | None |
| P2 | 0 | None |

The compact screenshots show the closed mobile Header, as appropriate for this limited reference binding. Open-mobile-menu semantics and current-marker behavior remain inherited from the already approved Global Chrome owner contract and are not claimed as newly implemented by this standalone evidence.

## Evidence

- [Independent validation JSON](PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_INDEPENDENT_VALIDATION_V1.0.json)
- `pages/products/04_planning/visual-designs/product-root-page-hero-v1.0/PRODUCT-000_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.0.png`
- `pages/products/04_planning/visual-designs/product-root-page-hero-v1.0/PRODUCT-000_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.0.png`
- `pages/products/04_planning/visual-designs/product-root-page-hero-v1.0/PRODUCT-000_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.0.png`

The review is limited to the frozen reference binding. Wave 1 is frozen, so this PRODUCT reference binding validly enters Wave 2 in the approved sequence; this page-local PASS does not close the seven-page workset or authorize Gate 6/8.
