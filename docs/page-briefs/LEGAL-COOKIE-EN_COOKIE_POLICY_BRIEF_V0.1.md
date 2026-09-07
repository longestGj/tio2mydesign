# LEGAL-COOKIE-EN Cookie Policy Brief V0.1

## 0. Control and identity

| Field | Value |
|---|---|
| Page ID / version | `LEGAL-COOKIE-EN` / V0.1 |
| Date / status | 2026-09-02 / `HANDED_OFF / GATE_1_CLOSED / GATE_2_CLOSED / GATE_3_CLOSED / GATE_4_CLOSED / GATE_5_CLOSED / GATE_6_CLOSED / GATE_7_CLOSED / GATE_8_IN_EXTERNAL_DEVELOPMENT` |
| Page / URL | Cookie Policy — `/cookie-policy/` |
| Canonical | `https://tio2malaysia.com/cookie-policy/` |
| Language / priority | EN / P0 |
| Mapping / verification | `APPROVED_LEGAL_ARCHITECTURE` / `FACT_EVIDENCE_REQUIRED` |
| User approval | Independent Cookie Policy, Gate 1–5 and targeted Buyer Clean V0.2 revision approved; Gate 7 authorised 2026-09-02 |

## 1. Page Intent Card

| Item | Value |
|---|---|
| Audience | Visitors reviewing browser storage, analytics and preference choices |
| Buyer problem | Understand what technologies are used and change optional choices |
| Core message | TiO2 Malaysia lists only verified storage/measurement technology and keeps optional Analytics under user control |
| Must include | Necessary/Analytics categories, actual inventory, Advanced Mode behaviour, Settings/withdrawal and contact |
| Must exclude | Terms, generic cookie catalogue, internal credentials, inactive tools as current, false claim that rejection sends nothing to Google |
| Primary CTA | `MANAGE COOKIE SETTINGS` button |
| Secondary CTA | `READ OUR PRIVACY POLICY` → `/privacy-policy/` |
| Ownership | Detailed browser storage and consent behaviour; Privacy owns broader personal-data processing |

Checkpoint: `CONTENT_INTENT_CONFIRMED / 2026-09-02`.

## 2. SEO / GEO / Schema

| Field | Value |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| H1 | `Cookie Policy` |
| Title | `Cookie Policy | TiO2 Malaysia` |
| Meta direction | Explain Cookies, similar technologies and how visitors manage Analytics preferences |
| Robots | `index,follow` subject to release review |
| Hreflang | `NOT_APPLICABLE` |
| Schema | `WebPage` + `BreadcrumbList`; `inLanguage=en` |
| Cannibalization | Storage/consent transparency only; Privacy owns broader processing |

## 3. Questions the page must answer

| ID | Question | Module |
|---|---|---|
| Q01 | What are Cookies and similar technologies? | M01 |
| Q02 | Which categories does this site use? | M02 |
| Q03 | Which exact Cookies/Local Storage/providers are active? | M03 |
| Q04 | What happens before I choose or when I reject Analytics? | M04 |
| Q05 | How do I accept, reject or withdraw? | M05 |
| Q06 | What happens if browser storage is unavailable or cleared? | M06 |
| Q07 | How are changes communicated and who can I contact? | M07 |

## 4. Gate 2 content skeleton

| Order | ID | Heading direction | Purpose | Required content / condition |
|---:|---|---|---|---|
| 1 | HERO | `Cookie Policy` | Define scope | Last updated; Cookies and similar storage; link Privacy Policy |
| 2 | M01 | `Cookies and Similar Technologies` | Explain technology plainly | Cookies, Local Storage and consent signals; avoid saying every item is a Cookie |
| 3 | M02 | `Categories We Use` | Explain choices | Necessary always active; Analytics optional; Advertising appears only if actually enabled; no personalization |
| 4 | M03 | `Current Cookie and Storage Inventory` | Provide auditable table | Name/key, provider, type, purpose, duration, category and consent state from production capture |
| 5 | M04 | `How Advanced Consent Mode Works` | Explain denied-state behaviour | Four denied defaults; limited cookieless signals may occur when Google measurement is active; full Analytics only after choice |
| 6 | M05 | `Manage or Withdraw Your Choice` | Make control actionable | Accept Analytics, Necessary only, reopen Footer Settings; consent updates without bundling marketing |
| 7 | M06 | `Browser Controls` | Explain local controls/limits | Clearing/blocking storage may reset preferences or affect necessary functions; no responsibility-shifting language |
| 8 | M07 | `Changes and Contact` | Close policy | Inventory update trigger, last-updated date and `info@tio2malaysia.com` |

## 5. Initial category contract

| Category | First release direction | Google state |
|---|---|---|
| Necessary | Consent-state storage and genuinely required site/security operations only | Does not grant optional Google storage |
| Analytics | Shown only when an analytics stack is actually active or enabled at release | Controls `analytics_storage` |
| Advertising | Hidden while Google Ads measurement is inactive | `ad_storage=denied`, `ad_user_data=denied` |
| Personalisation | Never offered under current decision | `ad_personalization=denied` in every state |

If no optional analytics technology is active at production release, the public inventory must state the actual minimal necessary state and must not show a misleading consent category merely because it exists in a future plan.

## 6. Inventory evidence boundary

The current D16 worktree contains no GA4/GTM/Google Ads IDs, no Vercel Web Analytics package and no shared Consent implementation. Therefore M03 remains a controlled empty inventory template until Gate 8/9 production-equivalent capture.

Authorised reuse input:

- TITAN source: `D:\01AICode\01TitanTitan\website_src\static\assets\js\consent.js`;
- inspected SHA-256: `92E25B2E28F2FDDE3BEEC1B18F97DA14117E0082F53C8D06DD6ADC8570E9DD69`;
- reuse requires TiO2 Malaysia namespace/key, version/time handling, policy links and accessibility verification;
- TITAN production IDs, key names and text must not be copied.

## 7. CTA, conditions and responsive behaviour

| Action | Behaviour |
|---|---|
| Manage Cookie Settings | Footer/page button opens the same shared preference interface |
| Necessary only | Denies optional Analytics and all Advertising/Personalisation states |
| Accept analytics | Grants Analytics only when implemented; does not grant Advertising/Personalisation |
| Read Privacy Policy | `/privacy-policy/` |

- Inventory table must reflow to labelled cards at 390px if necessary.
- Buttons meet touch/focus requirements and restore focus on close.
- The first layer and detailed settings use consistent labels.
- No dark patterns, preselected optional consent or unequal rejection treatment.
- Route is Footer utility only; Header current key is none; breadcrumb is `Home / Cookie Policy`.

## 8. Development and Gate record

- Later CMS/model fields include effective date, category definitions, verified inventory rows, Advanced Mode disclosure, contact and SEO fields under `site_scope=tio2-my`.
- Unknown inventory rows do not render; they block release rather than display placeholders.
- D23 does not implement code or credentials.

| Gate | Status |
|---|---|
| Gate 0 | Approved identity |
| Gate 1 | `APPROVED / CLOSED` — shared evidence and user approval 2026-09-02 |
| Gate 2 skeleton | `USER_APPROVED / CLOSED` — user approval 2026-09-02 |
| Gate 2 full copy | `USER_APPROVED / CLOSED` — Review `LEGAL-PRIVACY-G2-FULL-COPY-PCR-01`; production inventory remains a release control |
| Gate 3 | `USER_APPROVED / CLOSED` — current package `LEGAL-PRIVACY-G3-PCR-02`; Cookie structure and behaviour unchanged |
| Gate 4 | `USER_APPROVED / CLOSED` — `LEGAL-PRIVACY-G4-PCR-02` |
| Gate 5 | `USER_APPROVED / CLOSED` — `LEGAL-PRIVACY-G5-PCR-01`; targeted shared-Footer evidence correction proposed at Gate 6 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — `LEGAL-PRIVACY-G6-PCR-01`; Option A correction validated; 20/20 audit checks PASS |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — `LEGAL-PRIVACY-G7-PCR-01`; approved authority unchanged |
| Gate 8 | `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS` — `LEGAL-PRIVACY-G8-HANDOFF-01`; lifecycle `HANDED_OFF`; `HANDED_OFF=YES`; destination `01My首页开发` / `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Gate 9–10 | `NOT_AUTHORIZED` |
