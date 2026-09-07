# Legal / Privacy Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Site scope | `tio2-my` |
| Content model | External WordPress + Next.js implementation choice, constrained by this contract |

## 1. Root record contract

| Field | Type | Cardinality | Rule |
|---|---|---:|---|
| `site_scope` | enum/string | 1 | exact `tio2-my`; immutable; no cross-scope fallback |
| `page_id` | enum | 1 | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS` or `LEGAL-COOKIE-EN` |
| `route_key` | enum | 1 | `PRIVACY_EN`, `PRIVACY_MS` or `COOKIE_POLICY_EN` |
| `path` | route | 1 | exact registered path for the selected Page ID |
| `locale` | locale | 1 | `en` or `ms-MY` as mapped below |
| `page_type` | enum | 1 | `legal_policy` |
| `header_current_key` | null | 1 | always null; no Legal top-navigation item |
| `release_state` | enum | 1 | `no_optional_analytics` or `verified_google_analytics_active` |
| `effective_date` | date | 1 | source-approved visible date; update only through versioned content review |
| `title` | string | 1 | exact approved H1/title for locale |
| `sections` | ordered objects | exact by Page ID | exact source content and order only |

Root identity mismatch, missing required singleton, invalid release state or foreign-scope record fails closed and blocks rendering/release. Do not substitute another Legal page, stale copy or another site scope.

## 2. Page/route mapping

| Page ID | `route_key` | `path` | `locale` | Copy source and Buyer-visible boundary |
|---|---|---|---|---|
| `LEGAL-PRIV-EN` | `PRIVACY_EN` | `/privacy-policy/` | `en` | `LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.1.md` §1 only; SHA-256 `E40263FEC51ED9FD39C56C000AA244855E1CC0BE95B67BF2052112AAC0973626` |
| `LEGAL-PRIV-MS` | `PRIVACY_MS` | `/ms/privacy-policy/` | `ms-MY` | `LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.1.md` §1 only; SHA-256 `9FC9332CD6F1621AD658AAD861647E36E44623583618EE5ECD4A253DF499BC68` |
| `LEGAL-COOKIE-EN` | `COOKIE_POLICY_EN` | `/cookie-policy/` | `en` | `LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md` release-state-selected Buyer-visible section only; SHA-256 `F1C54257C5D682ED2A9DAA458A52119CEFB752CD35662F6243644F2A9E70DF46` |

`SHARED-CONSENT-TIO2-MY` is a shared component identity, not a page record. It has no Page ID, route, Canonical, sitemap entry, breadcrumb or indexability.

## 3. Common page fields

| Field | Type | Required rule |
|---|---|---|
| `breadcrumb.items` | ordered array | Home plus current page; visible and Schema-equivalent |
| `hero.h1` | string | exact source H1 |
| `hero.effective_date_label` | string | exact source visible label/date |
| `hero.intro` | rich text | exact approved paragraphs and inline links |
| `hero.actions` | ordered action refs | exact source actions; Cookie Settings is a control, not URL |
| `toc.items` | ordered anchor refs | Privacy pages only; matches rendered section IDs exactly |
| `sections[].stable_id` | string | page-unique, stable across presentation changes |
| `sections[].heading` | string | exact source heading |
| `sections[].body` | rich text | exact source body; no internal notes |
| `related_legal_links` | typed route refs | same-site registered Legal routes only |
| `contact.email` | email | exact `info@tio2malaysia.com` |
| `seo` | object | supplied by the Gate 7 SEO/GEO/Schema contract |

Rich text allowlist must support paragraphs, ordered/unordered lists, headings below H1, emphasis, same-site links, `mailto:` links and accessible tables. It must reject scripts, event handlers, embedded credentials, internal file paths and governance/status labels.

## 4. Privacy section cardinality and order

Both Privacy pages have exactly ten ordered body sections after the Hero.

| Order | EN stable ID / heading | BM stable ID / heading |
|---:|---|---|
| 1 | `who-we-are` / `Who We Are` | `siapa-kami` / `Siapa Kami` |
| 2 | `information-we-collect` / `Information We Collect` | `maklumat-yang-kami-kumpulkan` / `Maklumat yang Kami Kumpulkan` |
| 3 | `how-we-use-information` / `How We Use Information` | `cara-kami-menggunakan-maklumat` / `Cara Kami Menggunakan Maklumat` |
| 4 | `service-providers-and-international-processing` / exact source heading | `penyedia-perkhidmatan-dan-pemprosesan-antarabangsa` / exact source heading |
| 5 | `how-long-we-keep-information` / `How Long We Keep Information` | `tempoh-kami-menyimpan-maklumat` / exact source heading |
| 6 | `cookies-and-analytics` / `Cookies and Analytics` | `kuki-dan-analitik` / `Kuki dan Analitik` |
| 7 | `your-rights-and-choices` / `Your Rights and Choices` | `hak-dan-pilihan-anda` / `Hak dan Pilihan Anda` |
| 8 | `security-and-data-minimisation` / exact source heading | `keselamatan-dan-peminimuman-data` / exact source heading |
| 9 | `business-users-and-children` / `Business Users and Children` | `pengguna-perniagaan-dan-kanak-kanak` / exact source heading |
| 10 | `changes-and-contact` / `Changes and Contact` | `perubahan-dan-cara-menghubungi-kami` / exact source heading |

Heading/body text is not reconstructed from this table; the exact hashed source is authoritative. Missing, duplicated, reordered or foreign-language sections block release. EN and BM legal meaning must remain equivalent; a change in either page reopens the BM human-equivalence review.

## 5. Privacy actions and typed links

| Surface | Label source | Action type | Target |
|---|---|---|---|
| EN primary | `CONTACT US ABOUT PRIVACY` | native `mailto` | `info@tio2malaysia.com` |
| EN/BM secondary | source locale | shared control | `OPEN_COOKIE_SETTINGS` |
| EN language | `Bahasa Malaysia` | route ref | `PRIVACY_MS` |
| BM language | source English label | route ref | `PRIVACY_EN` |
| Both | source Cookie Policy label | route ref | `COOKIE_POLICY_EN` |

The Cookie Settings action must invoke the same shared Consent surface used by the Footer and restore focus to the invoking control after close.

## 6. Cookie Policy sections and release-state projection

The Cookie Policy has exactly seven ordered public sections: Cookies and Similar Technologies; Categories We Use; Current Cookie and Storage Inventory; How Advanced Consent Mode Works; Manage or Withdraw Your Choice; Browser Controls; Changes and Contact.

| State | Content projection |
|---|---|
| `no_optional_analytics` | Render §1 Buyer-visible copy and §3.1 shared Settings copy from Cookie V0.2. Do not show a first-visit Analytics banner. |
| `verified_google_analytics_active` | Start from §1 and atomically replace only the paragraphs/tables named in §2; use §3.2 Settings copy; insert production-observed inventory rows. |

The two release states must never render together. A partially proven or unknown state fails closed to release review; it must not merge both copies or invent a third public variant.

Inventory row shape:

```text
StorageInventoryRow {
  stable_id: string
  name_or_key: string
  provider: string
  storage_type: cookie | local_storage | session_storage | network_only | other_verified
  domain_or_scope: string
  purpose: string
  duration: string
  category: necessary | analytics | advertising_measurement
  consent_condition: string
  evidence_ref_internal: string
  verified_at: datetime
}
```

`evidence_ref_internal` and `verified_at` support QA and must not render as internal path/status text. Unknown or unverified rows are omitted atomically and block final release if the active technology would otherwise be undisclosed.

## 7. Shared Consent view model

```text
ConsentViewModel {
  site_scope: "tio2-my"
  release_state: no_optional_analytics | verified_google_analytics_active
  saved_choice: unset | necessary_only | analytics_accepted
  consent_version: string
  decision_time: datetime | null
  storage_available: boolean
  is_reopened: boolean
  trigger_element_ref: runtime reference
}
```

The public component never exposes internal event names, version IDs, decision timestamps or readiness records. Exact public strings come from Cookie V0.2 §3.1 or §3.2 according to release state.

## 8. Fail-closed and non-render rules

- Missing required copy, route, locale, section, action or same-scope dependency blocks release; no cross-scope fallback.
- Internal notes, Gate labels, evidence IDs, file paths, credentials and release blockers never render.
- Inactive providers and planned analytics do not render as active facts.
- No `/terms-of-use/` or `/legal/privacy-policy/` Page ID, route key, page record, link, Canonical or fallback is created.
- Missing media collapses; it never produces fact-bearing placeholder content.
- Cookie Settings remains functional even when no optional Analytics exists, but it must not ask visitors to consent to a nonexistent service.

## 9. Boundary

This mapping defines expected inputs and outputs only. It does not prescribe the final WordPress schema or Next.js file layout and does not authorize Gate 8 implementation.
