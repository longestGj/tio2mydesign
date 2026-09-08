# Gate 8 External Evidence Manifest Self-Reference Ruling V1.0

Date: 2026-09-09

Status: `PROJECT_CONTROL_CONTRACT_INTERPRETATION / EFFECTIVE`

Applies to: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## Decision

`gate8_evidence_manifest.json` is a post-commit verification wrapper. It is not one of the evidence files that it declares, and it is not required to be committed inside its own `evidence_head`.

Requiring the Manifest to contain the final commit that also contains that same Manifest creates an impossible commit-hash self-reference. The active validator instead requires:

- the repository HEAD to equal `manifest.git.evidence_head`;
- the worktree to be clean;
- every path in `manifest.evidence[]` to exist, match its declared SHA-256 and be committed at `evidence_head`;
- the receipt to exist and be committed at `evidence_head`;
- every `EVIDENCE:` line in the receipt to match `receipt_evidence_references`.

This interpretation follows the existing SYS-404 / CONV-THANK post-commit external Manifest pattern and does not weaken any identity or evidence check.

## Required generation order

1. Complete implementation, tests, Build and runtime evidence.
2. Write the human Gate 8 receipt with the exact `EVIDENCE:` paths that will appear in the Manifest.
3. Commit all declared evidence files and the receipt.
4. Confirm the task branch is clean and record the final `evidence_head`.
5. Generate the final Manifest outside the D16 Git worktree at:

```text
D:/16Wordpress_nextjs/.tmp/gate8-manifests/TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1/gate8_evidence_manifest.json
```

6. Run the current D23 Manifest validator and Gate 9 preflight against that external path.
7. Compute the external Manifest SHA-256.
8. At Gate 9 intake, copy the exact Manifest bytes into:

```text
D:/23MySec/docs/verification/intake/TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1/gate8_evidence_manifest.json
```

9. Record the source path, copied path, SHA-256 and byte-equality result in the D23 intake/review record.

The D23 copy is outside the D16 evidence HEAD and therefore does not create a self-reference. It preserves the exact reviewed Manifest as formal project evidence.

## Change handling

If implementation, evidence, receipt, Build or runtime identity changes after generation, the old Manifest remains historical. D16 commits any changed evidence, reaches a new clean `evidence_head`, generates a new external Manifest and returns a new SHA. No actor edits the prior Manifest's hash or commit fields to make validation appear successful.

This ruling does not authorize a merge, push, deployment, production write, release, indexing or Gate 10.
