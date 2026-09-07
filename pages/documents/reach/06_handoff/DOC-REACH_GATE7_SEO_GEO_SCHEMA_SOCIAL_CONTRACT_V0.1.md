# DOC-REACH Gate 7 SEO, GEO, Schema and Social Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Page / route | `DOC-REACH` / `/documents/reach/` |
| Site scope | `tio2-my` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Exact metadata

| Element | Required value |
|---|---|
| Title | `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia` |
| Meta description | `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.` |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Canonical candidate | `https://tio2malaysia.com/documents/reach/` |
| Language | `en` |
| Hreflang | none |
| Breadcrumb | `Home / Documents / Titanium Dioxide REACH` |
| Primary keyword | `titanium dioxide reach registration` |
| Robots | Gate 10 controlled; non-production must remain non-indexable |

Query/prefill variants use the same clean Canonical and never change Title, Meta, H1, robots, Schema IDs or social metadata.

## 2. Search intent and cannibalization

DOC-REACH owns EU REACH procurement-document evaluation intent for titanium dioxide. It does not own:

- exact Grade primary terms;
- country-supplier terms;
- broad European Union supplier/procurement intent;
- UK REACH commercial intent;
- dated trade measures;
- Request Documents transaction intent;
- public PDF/download intent;
- company-, importer-, Only Representative- or Grade-registration claims.

`reach compliant titanium dioxide` remains query-language-only and may not appear as a company/product assertion in visible or machine-readable output.

## 3. GEO answer contract

The visible answer must remain extractable in this meaning:

```text
EU REACH review → substance identity + relevant EEA legal entity/role + supply arrangement/use + source/scope/date
public substance information ≠ proof of supplier or arrangement coverage
```

The legal-role, jurisdiction, checklist, source and FAQ modules may be quoted only within the approved visible context. No AI-facing field may state the excluded EG-006 proposition, an unqualified compliance conclusion or UK/EU equivalence.

## 4. Schema allowlist

Render only:

- one `WebPage` for DOC-REACH;
- one `BreadcrumbList` matching the visible breadcrumb;
- references to existing approved site-wide `WebSite` and `Organization` IDs without extending their facts.

Required `WebPage` properties:

| Property | Source |
|---|---|
| `@id` | clean Canonical plus approved page-fragment convention |
| `url` | clean Canonical |
| `name` | exact SEO Title or approved page-name convention without factual expansion |
| `description` | exact Meta description |
| `inLanguage` | `en` |
| `breadcrumb` | DOC-REACH BreadcrumbList ID |

Breadcrumb items:

1. Home → `https://tio2malaysia.com/`;
2. Documents → `https://tio2malaysia.com/documents/`;
3. Titanium Dioxide REACH → current clean Canonical.

An eligible visible Request Documents link may appear as an ordinary page/related link only. Suppressing the visible link must suppress the equivalent machine relationship. This package does not authorize an Action node.

## 5. Prohibited machine-readable output

Do not render:

- `FAQPage`, `QAPage`, `HowTo`, `Product`, `Offer`, `DigitalDocument`, file `MediaObject`, `DownloadAction`, `SearchAction` or a request Action node;
- the excluded EG-006 proposition or a named importer/Only Representative relationship;
- registration number, registrant name, tonnage band, all-Grade coverage or `REACH compliant` status;
- UK REACH equivalence or cross-jurisdiction confirmation;
- document filename, public URL, revision, currentness, availability or delivery relations;
- buyer selections, prefill/query values, hidden source attribution, form errors or receiver outcomes;
- hidden/alternate text not present in the approved visible page.

## 6. Social metadata

- `og:title` and `twitter:title` use the exact SEO Title source.
- `og:description` and `twitter:description` use the exact Meta description source.
- `og:url` uses the clean Canonical; `og:type=website`.
- Query values and hidden source data never enter social metadata.
- No page-local social image is approved. Use an approved shared `tio2-my` Brand/SEO asset key only if that authority exists at implementation time; otherwise omit image tags and choose a compatible Twitter card behavior.
- Do not generate a factory, certificate, ECHA, EU-flag, compliance badge, PDF or document image solely for metadata.

## 7. Initial DOM and crawlability

- Exactly one H1 and an ordered heading hierarchy.
- All eleven eligible modules appear in server-rendered HTML.
- All five FAQ answers remain in initial DOM when visually collapsed.
- Primary content remains HTML text, not image-rendered text.
- Descriptive anchors identify official sources, EU Market and Documents Hub.
- Hidden responsive navigation is excluded from the accessibility tree and does not duplicate visible current-state meaning.

## 8. Freshness and atomic removal

Each visible official-source row exposes its approved scope and reviewed date; `source_updated_date` appears only when non-null. Gate 7, Gate 9 and pre-publication checks must revalidate sources.

If a time-sensitive jurisdiction statement becomes stale or unsupported, remove/update visible wording, derived metadata/GEO summary and machine relations together. Do not leave a newer Schema claim behind older visible copy.

