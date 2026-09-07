# CONTACT-001 Search Observation — 2026-09-07

## 0. Capture control

| Field | Value |
|---|---|
| Page ID | `CONTACT-001` |
| Capture date | `2026-09-07` |
| Market / language | GLOBAL / EN |
| Tool path | `web_search` plus URL `open` as the available `web_fetch` equivalent |
| Purpose | Search-intent evidence only; not company-contact approval and not a Gate decision |

## 1. Original query: `"contact TiO2 Malaysia"`

The query was run independently before any direct page open. The returned order was:

| Rank | Title | URL | Selection / exclusion note |
|---:|---|---|---|
| 1 | Malaysia Rutile Titanium Dioxide Manufacturer — IKHLAS | `https://www.mytio2.com/` | Selected as the only returned IKHLAS first-party result; the snippet included a Contact section. |
| 2 | Products & Services — APCC | `https://www.apccm.com.my/products-services/` | Other Malaysian chemical company; excluded from IKHLAS facts. |
| 3 | Industrial Chemicals — Obetech Pacific | `https://obetechpacific.com/industrial-chemicals/` | Other supplier; excluded from IKHLAS facts. |
| 4 | S.A. Wood Chemicals Sdn Bhd — Home | `https://sawchemicals.lookchem.com/` | Directory profile; excluded from IKHLAS facts. |
| 5 | ACS CHEM LAB — Consultation | `https://www.acschemlab.com.my/services/consultation` | Other service provider; excluded from IKHLAS facts. |
| 6 | Tio2 Suppliers from Malaysia — Volza | `https://www.volza.com/p/tio2/manufacturers/manufacturers-in-malaysia/` | Commercial directory; intent context only. |
| 7 | Kaolin Clay — Sericite Supplier Malaysia | `https://kaolin.com.my/kaolin-clay/` | Other supplier; excluded from IKHLAS facts. |
| 8 | Titanium Dioxide — Moon Bright Resources | `https://moonbrightresources.com/es/product/precio-del-dioxido-de-titanio-por-tonelada/` | Other supplier; excluded from IKHLAS facts. |
| 9 | Oxidizer Buyers in Malaysia — Volza | `https://www.volza.com/p/oxidizer/buyers/buyers-in-malaysia/hsn-code-282300/` | Commercial directory; excluded from IKHLAS facts. |
| 10 | EVERGREEN journal PDF | `https://ris.unimap.edu.my/bitstreams/bffdd39b-d042-4b98-b5e3-eab185c22641/download` | Academic use of TiO2/contact terminology; irrelevant to company-contact intent. |
| 11 | TiO2 Rutile product listing — TradeIndia | `https://www.tradeindia.com/products/tio2-rutile-titanium-titanium-dioxide-7844665.html` | Marketplace listing; excluded from IKHLAS facts. |
| 12 | HSN 3206 suppliers in Malaysia — Volza | `https://www.volza.com/p/articles-or-use/hsn-code-3206/suppliers-directory/suppliers-in-malaysia/` | Commercial directory; excluded from IKHLAS facts. |
| 13 | University of Malaya CV | `https://umexpert.um.edu.my/cv/misni` | Incidental TiO2/contact terms; irrelevant. |
| 14 | Atatürk University journal issue | `https://dergipark.org.tr/en/download/issue-full-file/82713` | Academic incidental match; irrelevant. |
| 15 | WARSE journal PDF | `https://warse.org/IJATCSE/static/pdf/file/ijatcse27813sl2019.pdf` | Academic incidental match; irrelevant. |
| 16 | IRCASET proceedings | `https://www.egax.org/edu/proceedings/2023/74-4th-international-research-conference-on-applied-sciences-and-engineering-technology-4th-ircaset-2023/file` | Academic incidental match; irrelevant. |
| 17 | PolyU TiO2 solar-cell paper | `https://ira.lib.polyu.edu.hk/bitstream/10397/91027/1/Shahiduzzaman2021_Article_SprayPyrolyzedTiO2EmbeddedMult.pdf` | Academic incidental match; irrelevant. |
| 18 | Garuda photocatalyst paper | `https://download.garuda.kemdikbud.go.id/article.php?article=795032&title=Effect+of+Incorporating+TiO2+Photocatalyst+in+PVDF+Hollow+Fibre+Membrane+for+Photo-Assisted+Degradation+of+Methylene+Blue&val=7209` | Academic incidental match; irrelevant. |

Observation: the returned set was mostly unrelated to the exact brand/contact task. It provides qualitative support for a navigation/contact need, not a stable ranking claim or measurable keyword opportunity.

## 2. Secondary query: `"contact IKHLAS Titanium"`

This query was run separately. The returned set did not contain a relevant official IKHLAS TITANIUM company page. Results were unrelated uses of “Ikhlas” and “Titanium”, including a GAPENSI company directory, vehicle listings, academic profiles/papers, a Scribd supplier list and unrelated blogs.

Observation: the exact phrase did not produce a reliable company-contact result in this tool session. This does not prove zero demand or non-indexability. It supports keeping `NO_PRIMARY_KEYWORD` and treating the page as a utility/navigation destination.

## 3. Direct first-party page reads

### `https://www.mytio2.com/contact/`

The page was opened directly on 2026-09-07. The readable content showed:

- H1 `Contact IKHLAS TITANIUM`;
- separate routes for quotation, documents and samples;
- four role addresses: `sales@mytio2.com`, `technical@mytio2.com`, `logistics@mytio2.com`, `info@mytio2.com`;
- the operating-company name;
- the Taiping address labelled `Manufacturing Site`;
- no phone or WhatsApp in the readable page content.

This is a current first-party candidate source for exact contact values. It does not itself approve cross-domain use on `tio2malaysia.com`, and its page copy or module structure must not be copied.

### `https://www.mytio2.com/`

The homepage was opened directly and independently cross-checked the same operating-company name, Taiping address and four role email addresses. It also linked quotation, sample and document-request actions. This cross-check strengthens source identity but does not expand the approved TiO2 Malaysia use scope.

## 4. Tool limitations

- No Google browser session was used, so this record does not claim Google-local ordering, autocomplete, PAA or nationwide user behaviour.
- No Semrush browser session was used, so Search Volume, KD, CPC and trend are `Unavailable`, not zero.
- No login was required for the paths actually used.
- Search results are an observation from one session and may change.

