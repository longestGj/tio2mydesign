# Product TDS Document-Presence Validity Decision V0.1

## 1. Control

| Field | Value |
|---|---|
| Decision ID | `PRODUCT-TDS-VALIDITY-01` |
| Date | `2026-09-02` |
| User decision | `只要有文档，就是有效的啊` |
| Status | `USER_APPROVED / ACTIVE` |
| Scope | Product TDS documents present in the dedicated project product-technical-material directories |
| Development | `NOT_AUTHORIZED` |

## 2. Operative rule

For product-page evidence work, a product TDS document is valid evidence when:

1. the file exists in the dedicated project product-technical-material source directories;
2. the visible document identity can be matched to the Grade;
3. the relevant page is readable and the values/units can be extracted or visually verified.

An additional “current version” confirmation is not required merely because the visible footer year is earlier than the current project date.

This decision supersedes the prior M-510-only assumption that repository presence plus a readable Grade match was insufficient to establish TDS validity.

## 3. Rendering boundary

Valid evidence does not require every line in a TDS to appear on the webpage. Page responsibility and buyer usefulness still control field selection:

- product identity, description, applications, Key Features and decision-relevant technical rows may be used within their exact Grade scope;
- values retain their original unit and typical/minimum/maximum/range meaning;
- typical values are not rewritten as guaranteed specifications;
- the webpage may omit storage, packaging, loading, safety boilerplate and source-document contact/footer information when they do not serve the approved page role;
- omission for page-role reasons does not relabel the source as invalid;
- one Grade's data may not be copied to another Grade.

## 4. Multiple-version and conflict boundary

Document presence establishes validity, but it does not authorize merging values from multiple versions. If more than one document exists for the same Grade:

- bind each public technical table to one named source document;
- do not average, combine or silently select conflicting values;
- record the selected source and its hash in the page Manifest;
- escalate only an actual cross-document conflict or identity mismatch, not the age of a readable document by itself.

## 5. M-510 immediate effect

`TDS_M-510_TME TMP FREE.pdf`, visible footer V3 2023, is valid M-510 technical evidence under this decision. M-510 product description, listed applications, four Key Features and twelve TDS property rows may enter Gate 2 content and later visible technical presentation with the required typical-data disclaimer.

Packaging/container-loading and old `mytio2.com` contact details are not selected for the M-510 webpage. They are omitted by page-role and current-site-identity rules, not rejected as invalid source content.

## 6. Non-authorization statement

This evidence rule does not approve Gate 3+, development, route enablement, deployment, publication or indexing and does not modify `D:\16Wordpress_nextjs`.
