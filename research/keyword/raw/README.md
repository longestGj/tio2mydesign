# Raw Research Evidence

This directory contains source-preserving captures collected for the TiO₂ Malaysia keyword-research project.

## Mandatory rule

No keyword metric, SERP observation, policy status, competitor observation, or discovery keyword may be used in downstream selection until the source has been saved here, registered in `00_source_manifest.csv`, and checked for capture completeness.

Raw files are append-only evidence. Do not clean, translate, deduplicate, score, cluster, or editorially filter content in this directory. Derived files belong in `D:\23MySec\keyword-research\processed\` or in the final 01–10 deliverables.

## Directory routing

- `semrush/YYYY-MM-DD/<database-or-market>/<batch_id>/`: Semrush native exports, complete structured page captures, screenshots where useful, and batch manifest.
- `serp/YYYY-MM-DD/<market>/<language>/<query_id>/`: complete captured result rows and SERP-feature evidence for one query.
- `official/YYYY-MM-DD/<jurisdiction>/<source_id>/`: complete official webpage exports, publications, notices, and PDFs.
- `competitors/YYYY-MM-DD/<domain>/<source_id>/`: complete competitor or industry page captures.
- `discovery/YYYY-MM-DD/<source>/<batch_id>/`: complete unfiltered autocomplete, PAA, related-query, or other discovery output.

## Batch manifest

Every leaf capture directory must contain `manifest.json` with:

```json
{
  "source_id": "stable unique identifier",
  "source_type": "semrush | serp | official | competitor | discovery",
  "source_name": "human-readable source name",
  "source_url": "exact URL",
  "query_or_keyword_set": [],
  "market": "market tag",
  "language": "language tag",
  "database": "database displayed by source",
  "device": "device displayed by source",
  "captured_at": "ISO-8601 timestamp with timezone",
  "data_date_shown_by_source": "date shown by source or Unavailable",
  "capture_method": "native export | page export | structured DOM | downloaded PDF | other documented method",
  "files": [],
  "completeness_status": "COMPLETE | PARTIAL | FAILED",
  "limitations": [],
  "sha256": {}
}
```

## Source manifest columns

`00_source_manifest.csv` uses these columns:

```text
source_id,source_type,source_name,source_url,market,language,database,device,captured_at,data_date_shown_by_source,capture_method,raw_directory,files,completeness_status,limitations,sha256_verified,eligible_for_analysis,notes
```

Only rows with `completeness_status=COMPLETE`, `sha256_verified=YES`, and `eligible_for_analysis=YES` may feed the normal keyword-selection pipeline. Partial captures may be cited only as limitations or may be reacquired.

## Completeness expectations

- Prefer a native CSV/XLSX export when the source provides one.
- Preserve every exported row and column from the requested batch.
- Preserve the exact query set, database, device, currency, and displayed data date.
- Preserve pagination by using an all-row export or by capturing every page.
- Save the original-language official publication; a translation is derived material.
- Screenshots supplement structured captures but do not replace them.
- If a source cannot be captured completely, mark it `PARTIAL` and document the missing content.

