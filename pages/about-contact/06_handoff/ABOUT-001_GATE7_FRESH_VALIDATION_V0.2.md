# ABOUT-001 Gate 7 Fresh Validation V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-02` |
| Date | 2026-09-01 |
| Status | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Validation Scope

- Current PCR-02 files and Media Asset Handoff.
- User body-media authorization under root §2.3.
- Named media inventory, derivation methods, ALT, scope and OG/Schema selection.
- Three frozen PNG hashes and unchanged content/SEO/Schema/Chrome baseline.
- Conflict markers, trailing whitespace and false Gate 7/Gate 8/handoff status.

## 2. Authority Verification

| Check | Result |
|---|---|
| Root `AGENTS.md` §2.3 authority present | PASS |
| Root `AGENTS.md` SHA-256 | `2DB79CEF185D7FAA4C2C6326C1A333540AED63029E861476DFE77D94370A9318` |
| Gate 7 user-authorization record SHA-256 | `E7E2F0E21DB93091BF66B4651EE7412B1AA031E763C06BE649FD27857F322BAE` |
| Public-body visual use inherited from user approval | PASS |
| Repeat user approval required for named body media | NO |
| Gate 8 authorized | NO |
| Handoff completed | NO |

## 3. Package Scan

The current scan set contains eight PCR-02 package records plus the unchanged Responsive/Accessibility V0.1 contract. All nine files exist.

| Check | Result |
|---|---:|
| Conflict markers | 0 |
| Trailing-whitespace findings | 0 |
| False PCR-02 approval or closure declarations | 0 |
| Positive Gate 8 authorization declarations | 0 |
| Positive handoff-complete declarations | 0 |
| Superseded positive rule requiring separate/repeated body-media approval | 0 |
| Named media Asset keys | 12 |
| Required derivation methods present | 3/3 |

The 12 Asset keys cover the Hero composition and route map, Markets map, four market flags, four Application photos and final CTA background.

## 4. Media Contract Verification

| Requirement | Result |
|---|---|
| `approved_usage=ABOUT-001 public body` applies to every §3 inventory item | PASS |
| `site_scope=tio2-my` and no cross-scope fallback | PASS |
| `EXISTING_SOURCE` method available | PASS |
| `APPROVED_DERIVED_CROP` method available | PASS |
| `HTML_CSS_SVG_REBUILD` method available | PASS |
| Whole-page PNG prohibited as rendered implementation | PASS |
| Headings, body, links, cards, buttons and navigation remain semantic HTML | PASS |
| ALT/decorative semantics specified for every named media item | PASS |
| OG/Schema image output optional and omittable | PASS |
| Concrete asset/hash required if OG/Schema image is emitted | PASS |

## 5. Frozen Visual Integrity

| View | Dimensions | Bytes | SHA-256 | Result |
|---|---:|---:|---|---|
| Desktop V0.3 | 1440×3113 | 5495977 | `2EE18B00936CCB27C7608B2D2F02D893B3FD405F995EC59437314BB8F255E463` | MATCH |
| Tablet V0.3 | 768×1660 | 1909253 | `0499575828FDEDA0981B74C26F2FF5EB7520329D3997C2B77BA14836D652D35A` | MATCH |
| Mobile V0.3 | 390×4036 | 2235288 | `3569506CD704FC7AEDADC4956FDC455F8763C8637D3C46DD2F23B4D9D6C45856` | MATCH |

No visual PNG, visible copy, SEO/GEO/Schema fact, route, Global Chrome contract or Gate 6 conclusion changed in PCR-02.

## 6. Conclusion

`ABOUT-001-G7-PCR-02 = VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

The P0 media-governance return is addressed in the submission package: user-approved visible media is authorized for the ABOUT-001 public body, while implementation still requires traceable derived assets or semantic reconstruction. Validation is not project-control approval and does not authorize Gate 8, handoff, development, deployment, publication or indexing.
