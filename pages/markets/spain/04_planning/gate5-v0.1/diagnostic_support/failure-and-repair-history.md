# Spain Gate 5 capture failure and repair history

## ES-G5-TOOL-01 — normal full-page capture inherited hover

- First formal export date: 2026-09-07.
- Observed: link-target runtime checks ended with the pointer over the final EU route. The first 768 and 390 normal full-page PNGs visibly retained the approved hover background; the 1440 image came from the same unsafe capture sequence.
- Classification: capture-state error, not a source, content, structure or visual-design defect.
- Disposition: all three first full-page PNGs were rejected. The exporter now moves the pointer to a blank top-right coordinate, blurs the active element and waits before the normal full-page capture. All formal assets are regenerated under the unchanged `ES-G5-V01-SOURCE-01` source freeze, reopened and inventoried.
- Scope: no candidate HTML, CSS or frozen dependency changed.

## ES-G5-TOOL-02 — finalizer used the CommonJS reserved `exports` name

- Observed: the first finalizer invocation stopped with `SyntaxError: Identifier 'exports' has already been declared` before writing the final receipt or asset inventory.
- Classification: evidence-assembly script error; it did not alter the frozen candidate or formal images.
- Disposition: renamed the local variable to `exportData`, reran the finalizer, and required all frozen/input/export identities to match before accepting the records.
