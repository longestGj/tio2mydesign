# ABOUT-001 Gate 5 Approved Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / About TiO2 Malaysia / `/about/` |
| Date | 2026-09-01 |
| Page type | Trust / company page |
| Primary Keyword | `malaysia titanium dioxide manufacturer` |
| Fact status | `FACT_EVIDENCE_REQUIRED` |
| Gate 5 | `USER_APPROVED / COMPLETE` |
| Gate 6 | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Review ID | `ABOUT-001-G6-PCR-01` |
| Development | Not authorized |

## 1. Approved Page Authorities

| Authority | Current role | SHA-256 |
|---|---|---|
| `D:\23MySec\docs\page-briefs\ABOUT-001_ABOUT_TIO2_MALAYSIA_BRIEF_V0.6.md` | Page contract, subject to the later authority addendum | `2054E6B28F4EFDF0AD662CA3570C82CB262BEDB1EC558C13C4F98F19F5681F5D` |
| `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_GATE5_FULL_VISUAL_SPEC_V0.1.md` | Gate 5 visual specification | `102B5B53FF956714160A1F03CBC4EF62146F10B6AED7533AC84CEA521E1C5F4B` |
| `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_GATE5_VALIDATION_V0.1.md` | Gate 5 validation record | `6FDBFCBB8798B8A3AAC5BEC1FB7ED91293B021919D94ABF81CB0BDC036CF250D` |
| `D:\23MySec\pages\about-contact\00_governance\ABOUT-001_GATE5_USER_APPROVAL_2026-09-01.md` | Gate 5 approval source | `EF3C08155E800B99980A3A2D89F69266E8FE2BC653A0FD323B14F6CA59F778D5` |
| `D:\23MySec\pages\about-contact\00_governance\ABOUT-001_DOCUMENT_LINK_DECISION_2026-09-01.md` | Documents link amendment | `35072D78383EB55306004590FE78F54A91223FB1114B86F1EA694F4EB043D996` |

## 2. Approved Visual Assets

| Surface | File | Dimensions | Bytes | SHA-256 | Gate 6 interpretation |
|---|---|---:|---:|---|---|
| Desktop full page | `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_DESKTOP_CTA_V0.4.png` | 853×1844 | 1695179 | `8704045F48E0DD9BB22C118E8F3FB52708E2FFE145278996329E0C15878F607C` | Approved body direction; not a native 1440px proof |
| Mobile full-page composite | `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_MOBILE_CTA_V0.3.png` | 833×1889 | 1641404 | `9D820C17B90DDA239C1C18FF1050CC7AEE72817D8EB29FAA3E7C8410288619B4` | Approved mobile direction; not a single continuous 390px logical proof |
| Mobile Menu | `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_GATE5_MOBILE_MENU_OPEN_V0.1.png` | 390×868 | 15926 | `FFF997AE57DE5E7B5841A32279149B598821BFB0CDD32E453A29AE1D7DFC3466` | Page-era reference only; visible `CURRENT` is superseded by Global Chrome V0.5 |
| Evidence states | `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_GATE5_EVIDENCE_STATES_V0.1.png` | 1440×903 | 91529 | `40BCD86ECCCF35C5473C89CD34DF28B1ABC156014B8DFC37F70175191DAE127F` | Evidence-state direction; shared Chrome pixels are not authoritative |
| Interaction / Schema | `D:\23MySec\pages\about-contact\04_visual\ABOUT-001_GATE5_INTERACTION_SCHEMA_V0.1.png` | 1440×900 | 58595 | `177604CEC2B025B7EB549E3CF98B186A50FA6A24484762ACD984BC01682F6325` | Interaction intent only; old CTA/current-state pixels are superseded |

## 3. Shared Global Chrome Authorities

ABOUT-001 consumes the shared authorities below and must not create a local Header, Mobile Header/Menu, Footer, RFQ route or Logo implementation:

- `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` — SHA-256 `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18`.
- `D:\23MySec\pages\home\04_planning\16_global_header_footer_current_state_component_states_v0.5.md` — SHA-256 `2214BF1BCBE7646E8727A8E75E5E2A1552047E838D861891D0441B4895401B94`.
- `D:\23MySec\docs\architecture\GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md`.
- `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md`.
- `D:\23MySec\brand\logo\production\PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` — SHA-256 `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894`.

Therefore the buyer-facing Header active state is weight plus underline/marker, with zero visible `CURRENT` text. Desktop Header is 84px; Mobile Header is 64px; Mobile Menu targets are at least 44px; Header and Footer permanently expose `Request a Quote` to `/request-a-quote/`.

## 4. Approved Body Direction

The approved body direction is:

Breadcrumb → Hero → Who We Are → Why Malaysia Matters → What We Do → Markets We Serve → Applications We Support → How We Work → Documentation & Transparency → Company Facts → Final CTA.

Body CTAs are `Request a Quote` → `/request-a-quote/` and `Contact Us` → `/contact/`. Documents links are TDS/SDS → `/documents/` and Other Documents → `/request-documents/`.

## 5. Approval Boundary

Gate 5 approval fixes the design direction and copy baseline. It does not independently verify the visible claims, media rights, routes, responsive runtime, accessibility, Schema or `site_scope` isolation. Those remain Gate 6 review subjects. This Manifest neither passes Gate 6 nor authorizes Gate 7.
