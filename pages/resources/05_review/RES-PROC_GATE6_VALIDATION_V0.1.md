# RES-PROC Gate 6 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Page | `RES-PROC` |
| URL | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-05 |
| Gate 6 fresh audit | `48 PASS / 0 FAIL` |
| Approved Gate 5 evidence | `61 PASS / 0 FAIL`; manual visual QA `PASS` |
| Result | `PASS` |
| Review ID | `RES-PROC-G6-PCR-01` |

## 1. Fresh Gate 6 Audit

The Gate 6 checker performed a fresh read-only validation of the approved authority chain and rendered HTML. All 48 checks passed:

- five locked Gate 2–5 authority files exist and match their SHA-256 values;
- Registry identity, URL, page type and keyword-master ownership align;
- the primary keyword has exactly one owner;
- the exact Gate 5 user approval and Gate 6 authorization are recorded;
- Gate 7–10 and `D:\16Wordpress_nextjs` operations remain excluded;
- exact title, meta description, canonical and one H1 are retained;
- Article, FAQPage, QAPage and HowTo remain suppressed;
- four Buyer Questions are present in the initial HTML;
- no unsupported Grade code or internal governance copy appears;
- the route-label / Grade-level conclusion boundary remains visible;
- all seven approved evidence destinations remain present;
- every anchor has a unique ID and an HTTPS or fragment destination;
- atomic Process-link eligibility logic remains encoded;
- all six approved image assets match their dimensions and SHA-256 values;
- Desktop, Tablet and Mobile pass viewport containment, typography, H1, target-size and default Process-link checks;
- Mobile Menu inertness, focus transfer and `Resources` current state pass;
- the two Process links fail closed atomically while Products remains visible and no placeholder text appears.

The first run exposed two validation-harness issues: an over-escaped Windows path assertion and a missing 100ms wait before reading the menu focus state. The checker was corrected and the complete audit was rerun. The final authoritative run exited `0` with `48 PASS / 0 FAIL`.

## 2. Authority Integrity

| Authority | SHA-256 | Result |
|---|---|---|
| Gate 2 Content V0.3 | `44383FC94BFA638061946452BFBBEB66E2501092F68871C851D744F72FD4DFE7` | PASS |
| Gate 2 SEO/GEO/Schema V0.3 | `DE1375AFD44E947D2F81183282ADEDA1F2129C7FF3247DF1D425282C8C419CE2` | PASS |
| Gate 3 Responsive Spec V0.1 | `12B18605AD3660FE1279CB4763402B04AD257C863494E4F37347A478A2EA8A03` | PASS |
| Gate 4 Visual Direction V0.1 | `9DD79210667501AC175DC8BED0A219C425039F97365DED23A7F0D276180D0B98` | PASS |
| Gate 5 HTML / Superdesign v8 | `66E3E0643CD649B471AAF3B5963A49E198DE4F20C4D996F0A464B0E060E4FADD` | PASS |

## 3. Visual Asset Integrity

| Asset | Dimensions | SHA-256 | Result |
|---|---:|---|---|
| Desktop | `1440 × 8905` | `89B3CC458AD0BC1A52B16DA8BF889ECAE00A303E7CF4CDC617D971280C00A35E` | PASS |
| Tablet | `768 × 13182` | `66E7D20E45775DA66535229C935635C14BDFCE58F50C0BE670E842B10526C5CD` | PASS |
| Mobile | `780 × 34398` (`390px logical @2x`) | `6059A857A57B13FE7F00CF490147CE94914A4A32241EA21039CDA425A4C9704A` | PASS |
| Mobile Menu | `780 × 1440` (`390px logical @2x`) | `A921F13A11EDACD3223060D16D308536E9C8E2DFAE116D00D9D5CEF5E283AEA5` | PASS |
| FAQ focus | `1440 × 900` | `DF3F9C9B48D60B692A418DC98727DA592217FA3A6A60858F1C93809354C9DABB` | PASS |
| Process routes off | `1440 × 720` | `C94E9AC294070F3490428CFFAC95109E8BB642424C5F7B2786AF323BA37B3DFA` | PASS |

## 4. Preserved Controls

- Article output remains conditional on real visible author, publisher, publication/review dates and maintenance ownership.
- `PRODUCT-PROC-CL` and `PRODUCT-PROC-SU` remain an atomic conditional pair and must fail closed until both routes are approved, live and same-scope.
- External source availability and statement-family alignment must be rechecked before Gate 7 handoff and at Gate 9.
- RES-000 inventory, sitemap, route activation, development and publication remain unchanged and unauthorized.

## 5. Gate Boundary

The validation supports `PROJECT_CONTROL_GATE_6_PASS / CLOSED` and delivery readiness only. It does not authorize or create Gate 7, access the development repository, activate a route, deploy, publish, change DNS or enable indexing.

