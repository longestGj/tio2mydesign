# TiO2 Malaysia Legal / Privacy Page Playbook V0.1

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Status | `USER_APPROVED_GATE_2_BASELINE / ACTIVE` |
| Scope | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`, `LEGAL-COOKIE-EN` and shared Consent/Cookie Settings |
| Gate authority | `PAGE_GATE_1_5_STANDARD_V1.0.md` |
| Gate 1 authority | `LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.0.md` — `APPROVED / CLOSED` |
| Architecture | `PAGE_REGISTRY_V0.2.md` — 57 pages, no Terms page |

This Playbook standardises the three approved legal/privacy pages. It does not provide legal advice, authorise implementation or turn planned providers into current facts.

## 1. Page family purpose

| Page ID | Primary reader task | Page responsibility | Must not become |
|---|---|---|---|
| `LEGAL-PRIV-EN` | Understand how inquiry and website data is handled | English privacy notice and rights/contact route | Terms, commercial landing page or copied provider policy |
| `LEGAL-PRIV-MS` | Read the same notice in Bahasa Malaysia | Substantively equivalent BM privacy notice | Shortened summary or separate policy with different facts |
| `LEGAL-COOKIE-EN` | Understand browser storage, analytics and choices | Verified Cookie/Local Storage inventory and preference controls | Generic cookie template or unverified provider list |

`Cookie Settings` is a shared Footer button, not a fourth page. `Terms of Use` is absent by user decision.

## 2. Common Page Intent Card

| Item | Approved direction |
|---|---|
| Audience | B2B visitors, inquiry submitters and people exercising privacy/cookie choices |
| Buyer problem | Understand what data is collected, why, who processes it, how long it is kept and how to exercise choices |
| Core message | TiO2 Malaysia explains its actual inquiry and website-data practices in plain language and provides a direct privacy contact |
| Must include | IKHLAS identity, `info@tio2malaysia.com`, actual form fields, Web3Forms, retention, transfers/recipients, rights, Cookie Settings and current-vs-planned technology status |
| Must exclude | Terms content, internal storage media, credentials, copied TITAN text, inactive tools as current facts and false 30-day Web3Forms deletion |
| Primary CTA | Page-specific privacy contact or Cookie Settings action |
| Secondary CTA | Cross-link between Privacy and Cookie Policy; no commercial CTA added to body |
| Ownership boundary | Legal/privacy transparency only; RFQ and other conversion pages own their actions and fields |

Checkpoint: `CONTENT_INTENT_CONFIRMED` by the user's Gate 1 approval on 2026-09-02.

## 3. Evidence and drafting hierarchy

1. Current user-approved business facts and decisions.
2. `LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.0.md`.
3. Production-equivalent network/storage evidence when available.
4. Current official Malaysia PDPA sources and applicable official EU/UK sources.
5. Current provider Privacy, Terms and DPA documents.
6. Local implementation evidence from D16 and the authorised TITAN source.
7. Competitor/source-site policies only as structure references, never as factual authority.

Where sources conflict, later-dated formal provider legal documents take precedence over older FAQs for provider retention and processing facts, subject to production verification.

## 4. Common content rules

- Use plain, direct English or equivalent professional Bahasa Malaysia.
- Distinguish the controller's three-year inquiry retention from Web3Forms' provider TTL and plan dashboard visibility.
- Describe data categories and purposes, not internal device or storage topology.
- Name material processors/providers where verified and group subprocessors where that is clearer to readers.
- Do not say that rejection sends no data to Google if Advanced Consent Mode is active.
- Do not present GA4, GTM, Google Ads or Vercel Web Analytics as active before production verification.
- Do not imply that website-form submission creates a contract, quotation approval, sample approval or marketing subscription.
- Do not request sensitive personal data in free text; add a concise instruction where appropriate.
- Do not copy mytio2.com or titantitanium.cn policy wording.
- Last-updated date, language path and privacy contact remain visible.

## 5. Standard modules

### 5.1 Privacy EN / BM

| Order | Module | Required purpose |
|---:|---|---|
| 1 | Hero / policy identity | Identify policy, controller and scope |
| 2 | Information collected | Explain form fields, correspondence and technical data |
| 3 | Purposes and lawful grounds | Explain inquiry handling, site delivery/security and consent-dependent measurement |
| 4 | Sharing and processors | Explain Web3Forms, hosting/email and material subprocessors/international processing |
| 5 | Retention | State company three-year rule and separate provider retention facts |
| 6 | Cookies and analytics | Summarise and link to Cookie Policy/Settings |
| 7 | Rights and choices | Explain applicable access, correction, objection/withdrawal and deletion/request routes with conditions |
| 8 | Security and data minimisation | State reasonable safeguards without exposing topology or promising absolute security |
| 9 | Children / B2B scope | State the site is intended for business users and does not knowingly seek children's data |
| 10 | Updates and contact | Last-updated treatment and `info@tio2malaysia.com` |

### 5.2 Cookie Policy

| Order | Module | Required purpose |
|---:|---|---|
| 1 | Hero / policy identity | Explain Cookies and similar browser technologies |
| 2 | Technologies and categories | Define Necessary and Analytics; show Advertising only if actually active |
| 3 | Current inventory | Provider, purpose, type, duration and consent category from verified production evidence |
| 4 | Advanced Consent behaviour | Explain denied defaults and limited cookieless signals when applicable |
| 5 | Manage or withdraw | Reopen Cookie Settings and explain effect of choices |
| 6 | Browser controls and limitations | Explain browser deletion/blocking without shifting the site's consent duty |
| 7 | Changes and contact | Update trigger, policy date and contact |

## 6. SEO, GEO and Schema

| Page | Title direction | Canonical | Hreflang | Schema |
|---|---|---|---|---|
| Privacy EN | `Privacy Policy | TiO2 Malaysia` | `https://tio2malaysia.com/privacy-policy/` | `en`, `ms-MY`, `x-default=en` | `WebPage` + `BreadcrumbList`; Organization reference only where visible |
| Privacy BM | `Dasar Privasi | TiO2 Malaysia` | `https://tio2malaysia.com/ms/privacy-policy/` | `ms-MY`, `en`, `x-default=en` | `WebPage` + `BreadcrumbList`; `inLanguage=ms-MY` |
| Cookie EN | `Cookie Policy | TiO2 Malaysia` | `https://tio2malaysia.com/cookie-policy/` | `NOT_APPLICABLE` | `WebPage` + `BreadcrumbList` |

Common rules:

- Primary keyword: `NO_PRIMARY_KEYWORD`.
- Robots direction: `index,follow`, subject to final release review.
- Do not add FAQ Schema solely because a legal page contains headings or questions.
- Machine-readable data must not contain providers, rights or processing purposes absent from visible copy.
- No page receives a Header current-navigation item.

## 7. CTA and link contract

| Action | Component | Behaviour |
|---|---|---|
| Contact about privacy | `mailto:info@tio2malaysia.com` or equivalent accessible link | Opens the user's email client; no hidden form or marketing subscription |
| Manage Cookie Settings | Semantic button | Reopens shared Consent Manager and restores focus on close |
| Read Cookie Policy | Same-site link | `/cookie-policy/` |
| Switch Privacy language | Reciprocal same-topic link | EN ↔ BM URLs; preserve substantive equivalence |

The permanent shared Footer RFQ remains part of Global Chrome but is not reframed as a legal-page CTA.

## 8. Conditional rendering

| Condition | Required behaviour |
|---|---|
| Provider not active | Do not describe it as active |
| Cookie/storage item unverified | Keep it out of the public inventory and block release until verified |
| GA4/GTM inactive | Cookie Policy may describe planned activation only in internal notes, not as current public processing |
| Google Ads inactive | Do not show an active Advertising preference or advertising cookie table |
| Consent storage unavailable | Preference applies to the current page where possible; explain browser limitation only if observed |
| BM equivalence not reviewed | BM page remains blocked from release; do not publish a partial summary |
| Privacy route unavailable | Forms must not fabricate alternate routes; release remains blocked |

## 9. Responsive and accessibility baseline

- Long legal text uses clear section headings, readable line length and a table of contents on long pages.
- Desktop, Tablet and Mobile preserve every substantive section.
- Tables reflow to labelled cards or accessible horizontal handling without hiding content.
- Language switch and Cookie Settings remain keyboard accessible.
- Consent first layer provides comparable Accept and Necessary-only choices; preference details remain reachable.
- Focus enters the preference interface predictably and returns to the invoking Footer button.
- Links are descriptive without relying on colour alone.

## 10. Gate 2 completion rule

Gate 2 first requires user approval of H1, Hero direction, module order, CTA, SEO/GEO/Schema and conditions. Only then may complete legal copy be written. Full-copy approval must record `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` before Gate 3.

## 11. Development and release boundary

This Playbook describes content and behaviour for later D16 delivery. It authorises no code, CMS work, credential handling, deployment, DNS, publication or indexing. Final release requires production network/storage evidence and, where appropriate, professional legal review.
