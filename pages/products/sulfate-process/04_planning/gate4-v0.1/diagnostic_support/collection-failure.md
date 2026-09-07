# Evidence collection correction

The first complete-records.cjs invocation failed before any write: Node CommonJS reserves `exports`, and the helper declared `const exports`. Renamed that local identifier to `exportRecord` and reran. This was a collection-script syntax failure, not a design failure; frozen HTML/CSS and existing PNGs did not change.
