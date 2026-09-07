# Raw web search capture - official expanded queries

- Tool: project web search and fetch/open
- Run date: 2026-09-06
- Queries:
  - `site:dgtr.gov.in titanium dioxide 3 August 2026 final findings China PR`
  - `site:taxinformation.cbic.gov.in titanium dioxide Customs ADD August 2026`
  - `site:cbic.gov.in titanium dioxide anti dumping notification 2026`
  - `site:egazette.gov.in titanium dioxide August 2026 customs anti dumping`
  - `site:icegate.gov.in 28230010 customs duty 2026 titanium dioxide`
  - `site:taxinformation.cbic.gov.in 28230010 customs rate`
  - `site:cbic-gst.gov.in 28230010 titanium dioxide GST 18`
  - `site:indiabudget.gov.in 28230010 customs tariff 2026`

## Returned official results used

1. DGTR case page: `https://dgtr.gov.in/en/anti-dumping-cases/anti-dumping-investigation-concerning-imports-titanium-dioxide-originating-or`. The captured page lists the 3 August 2026 final findings and shows `Last Updated: 02/09/2026 14:36`. The page's legacy File No. field is not used to identify the 2024 case; the linked final finding itself carries `F. No. 6/03/2024-DGTR` and `Case No. AD(OI)-03/2024`.
2. DGTR 3 August 2026 final finding: `https://dgtr.gov.in/sites/default/files/2026-08/Titanium%20eng%20ncv_signed%20(1).pdf`. Full official PDF preserved locally.
3. Gazette of India historical Notification No. 12/2025-Customs (ADD): `https://egazette.gov.in/WriteReadData/2025/263034.pdf`. Search result exposes the historical imposition text. Direct local retrieval failed because the Gazette server reset the connection; the later DGTR final finding itself records the notification and its quashing.
4. CBIC Tax Information portal: `https://taxinformation.cbic.gov.in/`. It is the Department of Revenue/CBIC official notification and instruction portal.
5. CBIC GST goods rates: `https://cbic-gst.gov.in/hindi/gst-goods-services-rates.html`. Captured rows show Schedule III, Chapter 28 general inorganic chemicals at CGST 9% + SGST/UTGST 9% and IGST 18%, and heading 3206 at the same rates.
6. ICEGATE import duty enquiry: `https://www.icegate.gov.in/Webappl/index_imp.jsp`. The official interface accepts CTH, description and optional country of origin, with origin used for preferential or anti-dumping enquiries.
7. ICEGATE custom duty calculator: `https://www.icegate.gov.in/services/custom-duty-calculator`. Result says the service calculates applicable customs duty; it requires login.
8. Customs Tariff Act section 3(7)-(8) on the CBIC Tax Information portal: `https://taxinformation.cbic.gov.in/content-page/explore-act/1000542/1000002`. Result distinguishes integrated tax on imports and its value base from basic/additional customs charges.

## Official negative search result

The 2026 official-domain searches returned the DGTR recommendation but no Department of Revenue or CBIC `Customs (ADD)` notification that implements that remand recommendation for Titanium Dioxide. This is a bounded research result, not proof that no notification can exist. The page must say `recommended, not verified in force` and must require a fresh CBIC/ICEGATE check before publication and transaction.

## Access limits preserved

- CBIC Instruction locator `https://taxinformation.cbic.gov.in/view-pdf/1000568/ENG/Instructions` returned the JavaScript application shell rather than instruction text in direct fetch; no claim in the Gate 1 package depends on unverified instruction wording.
- ICEGATE's calculator requires login; no Basic Customs Duty percentage was obtained and none is inferred.
- Google-controlled rank/local controls and Semrush metrics were not accessed.

