# SYS-404 Current Gate Baseline Manifest V0.15

Date: 2026-09-08. Sole current authority pointer. V0.15 supersedes V0.14 for lifecycle navigation; approved content and Gate 6 package remain unchanged.

| Field | Value |
|---|---|
| Page / route / scope | `SYS-404` / `RUNTIME_FALLBACK` / `tio2-my`; no independent indexable `/404/` page |
| Prior state | [V0.14](SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md); Repair 02 implementation `df21f96`, evidence `942d0f7`, Build `Z4ufy5ln0usxkwVFmmxuF`; code/build ready and final runtime pending |
| Contact dependency | `SCT-G9-F02-CONTACT-TARGET = USER_APPROVED_PRERELEASE_EXCEPTION / NON_BLOCKING_FOR_PRERELEASE_TEST_START`; [decision V1.0](../../../docs/architecture/SYS404_CONTACT_DEPENDENCY_PRERELEASE_EXCEPTION_V1.0.md), SHA-256 `2BF6E57FF096729BB4D66618F0B67974760FB1F5E30322DB48FC81966117FDCC` |
| Gate 9 | `NOT_PASS / PRERELEASE_TEST_AUTHORIZED`; all other `SCT-G9` Findings retain their actual status and must be tested |
| Prerelease scope | Include SYS-404 as one of 58 registered objects; verify `/404/`, representative root and nested unknown URLs, known-route non-interception, SEO and recovery actions; record `/contact/` as the approved exception |
| Release | The exception does not authorize publishing a broken `/contact/` destination; Gate 10, remote Preview, Production, DNS and indexing remain unauthorized |

The user has authorized local-main integration and prerelease testing as necessary to execute this decision. Test results do not automatically close Gate 9 or authorize release.
