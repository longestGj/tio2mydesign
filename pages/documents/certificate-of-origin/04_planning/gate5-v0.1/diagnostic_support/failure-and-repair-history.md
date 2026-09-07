# DOC-COO Gate 5 failure and repair history

## COO-G5-TOOL-01 — formal export ran without a completed source freeze

- First observed: 2026-09-07.
- Cause: `freeze-source.cjs` missed a closing parenthesis while reading the Gate 4 source freeze, so the freezer stopped with `SyntaxError` before writing `COO-G5-V01-SOURCE-01`.
- Sequence error: the combined shell invocation continued to the exporter, which produced 16 otherwise clean images without a valid preceding Gate 5 freeze.
- Disposition: all first-run PNGs and their export inventory were rejected from `approval_core` and moved intact to `diagnostic_support/rejected-pre-freeze/`. The syntax was fixed; the freeze must complete successfully before a new formal export is accepted.
- Candidate impact: none. HTML, CSS and durable dependencies were unchanged.
