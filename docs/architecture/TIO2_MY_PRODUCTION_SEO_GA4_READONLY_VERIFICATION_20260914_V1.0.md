# TiO2 Malaysia Production SEO / GTM-GA4 Read-only Verification 2026-09-14 V1.0

日期：2026-09-14（Asia/Shanghai）

Verification ID：`TIO2-MY-PROD-SEO-GA4-ROV-20260914-01`

## 1. Scope and authority

- 用户报告：网站已经上线，生产 GA4 Measurement ID 已完成。
- 生产目标：`https://tio2malaysia.com/`
- 本次权限：D23 只读生产验收与问题回传；未执行 D16 修改、生产写入、表单提交、GSC 写入或 GTM 修改。
- 目标合同：`TIO2_MY_FULL_PUBLIC_SEO_GA4_GSC_LAUNCH_DECISION_AND_SPEC_V1.0.md` 与 `TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv`。
- 观察到的生产发布头：`X-Tio2-Release: d5a061f60c7521a58b59292e337fe2788394cae9`。

## 2. Verification story

访客打开公开页面，页面应返回正确 HTTP、robots、canonical 与 Sitemap 状态；站点应先建立 Consent Mode v2 denied defaults，再加载站点专属 GTM，由 GTM 向批准的 GA4 Measurement ID 交付；Cookie/Privacy 文案必须与生产真实行为一致。

## 3. SEO production evidence

| Check | Result | Evidence |
|---|---|---|
| Production homepage | `PASS` | `200`; `index, follow`; canonical `https://tio2malaysia.com` |
| `robots.txt` | `PASS` | `200`; `Allow: /`; disallow `/api/` and `/preview/`; declares production Sitemap |
| Sitemap | `PASS` | `200 application/xml`; exactly 57 unique URLs; target matrix normalized comparison has no missing or extra URL |
| 57 standard pages | `PASS` | 57/57 return `200`; 57/57 `index, follow`; 57/57 self-canonical; 57/57 one Title and one H1 |
| Thank-you exception | `PASS` | `/thank-you/` returns `200`; `noindex, nofollow`; absent from Sitemap |
| Runtime 404 | `PASS_WITH_NONBLOCKING_CLEANUP` | slash-normalization `308` then real `404`; page emits both framework `noindex` and page `noindex, follow`; effective noindex is preserved, but duplicate robots tags should be consolidated in a later cleanup |

## 4. GTM / GA4 production evidence

| Check | Result | Evidence |
|---|---|---|
| Site-scoped identifiers in production HTML | `PASS` | Homepage contains `GTM-MWQVK7J4` and `G-QDHLMRH2WB` |
| Consent bootstrap source order | `PASS_AT_HTML_SOURCE_LEVEL` | Bootstrap script defines all four states as denied and is emitted before the GTM loader script |
| Published GTM container retrieval | `PASS` | `https://www.googletagmanager.com/gtm.js?id=GTM-MWQVK7J4` returns `200` |
| Container destination | `PASS_AT_CONTAINER_SOURCE_LEVEL` | Retrieved container contains `G-QDHLMRH2WB` |
| Approved event identities | `PASS_AT_CONTAINER_SOURCE_LEVEL` | Retrieved container contains `rfq_provider_accepted`, `documents_provider_accepted`, and `sample_provider_accepted` |
| Interactive first-visit / accept / reject / withdraw network behavior | `NOT_REVERIFIED_IN_PRODUCTION` | Codex in-app browser opened the homepage but its inspection control timed out; no form was submitted and no production consent choice was changed |

The source-level results prove that the production release and published container carry the intended identifiers and ordering inputs. They do not replace browser-level proof of request cardinality, cookies after consent, withdrawal cleanup, or absence of PII in live event requests.

## 5. Required production finding

### `TIO2-MY-PROD-GA4-F01` — active GA4 and inactive legal disclosure are inconsistent

- Priority: `P1 / REQUIRED BEFORE GA4 PRODUCTION CLOSURE`
- Status: `OPEN / RETURN_TO_01MY开发1`
- Responsibility: `01My开发1` performs development and testing; `09Gate9验收` performs independent read-only recheck; the deployment task only publishes an accepted delivery and must not develop this correction.
- Actual production behavior: homepage loads the site GTM configuration and exposes the approved GA4 Measurement ID; the published GTM container contains that destination and the three approved events.
- Actual Cookie Policy: still states `No optional Analytics technology is active in the currently verified TiO2 Malaysia configuration.`
- Actual Privacy EN/BM: still says Google Analytics and Google Tag Manager are not treated as active unless production implementation has been verified.
- Contract conflict: the Gate 6/Gate 9 launch contract requires GA4 activation, Cookie Settings, Privacy EN/BM, Cookie inventory, and production behavior to switch atomically.
- Risk: visitors receive a materially stale description of active Analytics processing and storage behavior.

Required correction:

1. Promote the approved Analytics-active Cookie Policy and Privacy EN/BM branches in the same production release.
2. Name Google Tag Manager as the delivery mechanism and Google Analytics 4 as the measurement service; preserve permanent denial of advertising storage, ad user data, and ad personalisation.
3. Replace the proposed/inactive storage inventory with the exact production-observed consent localStorage key and GA cookies, domains, consent condition, and durations.
4. Keep the Cookie Settings labels and accept/reject/withdraw behavior aligned with the already accepted Gate 9 contract.
5. Re-run production browser verification for first visit, Necessary only, Accept analytics, saved revisit, withdrawal, single page-view behavior, three success events, and no PII.

## 6. Overall result and stop condition

| Layer | Status |
|---|---|
| Public SEO and 57-page indexing surface | `PASS` |
| Production GTM/GA4 identifier and container publication | `PASS_AT_SOURCE_LEVEL` |
| Production legal/runtime parity | `FAIL / TIO2-MY-PROD-GA4-F01 / OWNER=01My开发1` |
| Full interactive production GA4 verification | `NOT_COMPLETE` |
| Overall | `RETURN_REQUIRED / DO_NOT_CLOSE_PRODUCTION_GA4_ACCEPTANCE` |

The end-to-end verification stops at the first confirmed broken boundary: production legal/runtime parity. GSC console actions and indexing requests are not part of this read-only verification and were not performed.

## 7. Recheck acceptance

The return may close only when a new production identity supplies all of the following:

- corrected Cookie Policy and Privacy EN/BM visible copy;
- exact runtime storage/Cookie inventory;
- 57/57 SEO regression still passing;
- browser/network proof for denied, accepted, rejected, revisited and withdrawn consent states;
- GA4 request cardinality and no-PII evidence;
- updated D16 Gate 8 evidence Manifest and D23 Gate 9 targeted recheck.
