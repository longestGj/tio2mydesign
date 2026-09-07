# Legal / Privacy Gate 2 Content Skeleton Submission V0.1

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Scope | Privacy EN, Privacy BM, Cookie Policy and shared Advanced Consent UI |
| Status | `USER_APPROVED / CLOSED` |
| Review ID | `LEGAL-PRIVACY-G2-SKELETON-PCR-01` |
| Gate 1 | `APPROVED / CLOSED` by user on 2026-09-02 |
| Gate 2 authority | User authorised Gate 2 on 2026-09-02 |
| User approval | 2026-09-02 — approved the Gate 2 skeleton and authorised full-copy work; also approved retaining `2026` in the Footer copyright line |
| Current checkpoint | Full copy project-control review and user approval |

## 1. Decision summary presented to the user

This submission asks the user to approve what the three pages and shared Consent interface will say and in what order. It does not ask for visual, development, deployment or publication approval.

Changes from the earlier architecture stage:

- 57-page Registry and keyword master are now consolidated;
- Terms and `/terms-of-use/` are absent;
- `/privacy-policy/` is the only English Privacy route;
- BM Privacy is a complete equivalent page, not a summary;
- Cookie Policy shows only verified active technology;
- the first Consent interface follows the TITAN `Accept analytics / Necessary only` pattern;
- Advertising is hidden while Google Ads is inactive and Personalisation is never granted;
- public copy states retention but does not reveal internal storage media.

## 2. Proposed page skeletons

### 2.1 English Privacy Policy

| Item | Proposed value |
|---|---|
| URL | `/privacy-policy/` |
| H1 | `Privacy Policy` |
| Hero core copy | `This Privacy Policy explains how IKHLAS TITANIUM (MALAYSIA) SDN. BHD., operating the TiO2 Malaysia website, collects, uses, shares and retains personal data when you browse the site or contact us.` |
| Primary CTA | `CONTACT US ABOUT PRIVACY` → `info@tio2malaysia.com` |
| Secondary CTA | `MANAGE COOKIE SETTINGS` |
| Supporting links | BM Privacy and Cookie Policy |

Module order:

1. Who We Are
2. Information We Collect
3. How We Use Information
4. Service Providers and International Processing
5. How Long We Keep Information
6. Cookies and Analytics
7. Your Rights and Choices
8. Security and Data Minimisation
9. Business Users and Children
10. Changes and Contact

Each module's purpose:

- identify the controller and direct privacy contact;
- list actual inquiry and technical data categories;
- explain inquiry, site-delivery/security and consent-dependent measurement purposes;
- explain Web3Forms and verified provider/international-processing relationships;
- distinguish company three-year retention from processor retention;
- link the detailed Cookie Policy and preference control;
- provide applicable access/correction/withdrawal/objection/deletion request routes;
- describe safeguards without disclosing internal storage topology;
- state the B2B audience and unnecessary-sensitive-data boundary;
- explain updates and repeat the privacy contact.

### 2.2 Bahasa Malaysia Privacy Policy

| Item | Proposed value |
|---|---|
| URL | `/ms/privacy-policy/` |
| H1 | `Dasar Privasi` |
| Hero core copy | `Dasar Privasi ini menerangkan cara IKHLAS TITANIUM (MALAYSIA) SDN. BHD., sebagai pengendali laman web TiO2 Malaysia, mengumpul, menggunakan, berkongsi dan menyimpan data peribadi apabila anda melayari laman ini atau menghubungi kami.` |
| Primary CTA | `HUBUNGI KAMI MENGENAI PRIVASI` → `info@tio2malaysia.com` |
| Secondary CTA | `URUS TETAPAN KUKI` |
| Supporting links | English Privacy and Cookie Policy |

Module order mirrors English exactly:

1. Siapa Kami
2. Maklumat yang Kami Kumpulkan
3. Cara Kami Menggunakan Maklumat
4. Penyedia Perkhidmatan dan Pemprosesan Antarabangsa
5. Tempoh Kami Menyimpan Maklumat
6. Kuki dan Analitik
7. Hak dan Pilihan Anda
8. Keselamatan dan Peminimuman Data
9. Pengguna Perniagaan dan Kanak-kanak
10. Perubahan dan Cara Menghubungi Kami

BM must preserve every approved fact, qualifier, period, provider and right from English. Final release requires legal-language equivalence review rather than machine translation alone.

### 2.3 Cookie Policy

| Item | Proposed value |
|---|---|
| URL | `/cookie-policy/` |
| H1 | `Cookie Policy` |
| Hero core copy | `This Cookie Policy explains how TiO2 Malaysia uses Cookies and similar technologies, which technologies are active, and how you can manage optional Analytics preferences.` |
| Primary CTA | `MANAGE COOKIE SETTINGS` |
| Secondary CTA | `READ OUR PRIVACY POLICY` → `/privacy-policy/` |

Module order:

1. Cookies and Similar Technologies
2. Categories We Use
3. Current Cookie and Storage Inventory
4. How Advanced Consent Mode Works
5. Manage or Withdraw Your Choice
6. Browser Controls
7. Changes and Contact

Conditional rules:

- Necessary lists only genuinely required operation/security/consent-state items.
- Analytics is shown only when an analytics technology is actually active at release.
- Advertising is hidden while Google Ads measurement is inactive.
- `ad_personalization` remains denied in every state.
- Unknown Cookie/Local Storage items never appear as placeholders; missing production inventory blocks release.

## 3. Proposed Consent UI skeleton

### 3.1 First layer when Google Analytics measurement is active

| Element | Proposed copy |
|---|---|
| Title | `Analytics preferences` |
| Body | `Optional analytics helps us understand how this website is used. If you choose Necessary only, optional storage remains off, but limited cookieless measurement signals may still be sent to Google.` |
| Primary button | `Accept analytics` |
| Equal alternative | `Necessary only` |
| Link | `Cookie Policy` |

If no optional analytics technology is active at production release, do not show a misleading first-visit Analytics request merely because analytics is planned. Cookie Settings and public inventory must reflect the actual minimal state.

### 3.2 Consent signals

| State | analytics_storage | ad_storage | ad_user_data | ad_personalization |
|---|---|---|---|---|
| Before choice | denied | denied | denied | denied |
| Necessary only | denied | denied | denied | denied |
| Accept analytics | granted | denied | denied | denied |
| Withdrawal | denied | denied | denied | denied |

## 4. Proposed SEO / GEO / Schema

| Page | Title | Meta direction | Canonical | Hreflang | Schema |
|---|---|---|---|---|---|
| Privacy EN | `Privacy Policy | TiO2 Malaysia` | How inquiry/site data is handled, retained and subject to privacy choices | `https://tio2malaysia.com/privacy-policy/` | `en`, `ms-MY`, `x-default=en` | `WebPage` + `BreadcrumbList`, `inLanguage=en` |
| Privacy BM | `Dasar Privasi | TiO2 Malaysia` | BM-equivalent explanation of inquiry data, retention and choices | `https://tio2malaysia.com/ms/privacy-policy/` | `ms-MY`, `en`, `x-default=en` | `WebPage` + `BreadcrumbList`, `inLanguage=ms-MY` |
| Cookie EN | `Cookie Policy | TiO2 Malaysia` | Active Cookies/similar technologies and Analytics preferences | `https://tio2malaysia.com/cookie-policy/` | Not applicable | `WebPage` + `BreadcrumbList`, `inLanguage=en` |

All three remain `NO_PRIMARY_KEYWORD`, `index,follow` direction subject to final release review, and have no Header current item. No FAQ Schema is proposed.

## 5. Footer and internal-link impact

Footer bottom row:

`© TiO2 Malaysia | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`

- Cookie Settings is a button, not a page.
- Forms link to `/privacy-policy/`.
- Privacy pages cross-link to one another and to Cookie Policy.
- Cookie Policy links back to English Privacy and opens Cookie Settings.
- No Terms link or `/legal/privacy-policy/` fallback exists.

## 6. Risks and limitations shown for approval

| Item | Current treatment |
|---|---|
| Exact Malaysia/EU/UK legal basis and rights wording | Structure approved at Gate 2 skeleton only; final legal wording requires current-law review and may require professional counsel |
| Web3Forms account key/receiver | Gate 8/9 production evidence; does not affect Gate 1 or skeleton |
| Sample/Documents form fields | Add to full policy only after those Briefs define actual fields |
| Vercel host/provider configuration | Render as current only after verified production configuration |
| Google/Vercel Analytics | Do not render as active until enabled and captured |
| BM text | Current Hero is a drafting direction; full BM copy requires equivalence review |
| Cookie inventory | Production capture required; no guessed table rows |

## 7. Project-control recommendation

Approve this skeleton. It provides clear page ownership, avoids a Terms page, keeps the public text focused, preserves Advanced Consent disclosure and prevents planned tools from being represented as active. After approval, write complete English Privacy and Cookie copy first, then produce the BM equivalent and parity review.

## 8. Approval effect

Approval creates checkpoint `LEGAL_PRIVACY_GATE2_CONTENT_SKELETON_CONFIRMED`. It authorises full Gate 2 copy only. It does not approve the future full copy, Gate 3, visual design, code, credentials, deployment, publication or indexing.

## 9. Project-control review

`LEGAL-PRIVACY-G2-SKELETON-PCR-01 = USER_APPROVED / CLOSED`

The approval confirms the three page skeletons, shared Consent skeleton and Footer legal-utility direction. It authorises Gate 2 full-copy work only; Gate 3, development, deployment, publication and indexing remain unauthorised.

Checks completed on 2026-09-02:

- all three Page IDs, URLs and `NO_PRIMARY_KEYWORD` records match Registry V0.2 and the 57-row master;
- Terms and `/legal/privacy-policy/` are excluded except where identified as rejected historical values;
- English/BM Privacy module parity is explicit;
- current and planned providers are separated;
- Advanced Consent states preserve denied Advertising/Personalisation;
- Footer, Canonical, hreflang, CTA and Schema directions are consistent;
- no Gate 3, code, credential, deployment or publication authority is inferred.
