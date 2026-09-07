# DOC-TDS Gate 2 Full Copy and Gate 3 Prerequisite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Execute inline because current developer instructions prohibit sub-agent delegation unless the user explicitly requests it.

**Goal:** Record approval of the DOC-TDS V0.2 content skeleton, produce the complete Buyer Clean copy required to close Gate 2, and preserve the user's Gate 3 authorization as prerequisite-pending until that copy is approved.

**Architecture:** Treat the skeleton checkpoint and the full-copy checkpoint as distinct states inside Gate 2. The full copy consumes the approved ten-module structure and current CONV-DOC single-Grade/multi-document contract; Gate 3 becomes executable only after `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` is approved.

**Tech Stack:** Markdown governance artifacts, existing CSV Claim Register, PowerShell SHA-256 and content-policy checks.

**Spec:** `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md`

## Global Constraints

- Gate 2 skeleton: `USER_APPROVED / CLOSED`.
- Full Buyer Clean copy: prepare and submit for separate user approval.
- Gate 3: `USER_AUTHORIZED / PREREQUISITE_PENDING` until `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=APPROVED`.
- Preserve the current CONV-DOC single `product_grade`, multi-select `document_types[]`, and hidden source attribution contracts.
- Preserve all Evidence Holds and no-availability/no-download boundaries.
- Do not create wireframes, visual design, code, development, deployment, publication or indexing in this execution.

---

### Task 1: Record the user decision

- [x] Create the Gate 2 skeleton approval and Gate 3 prerequisite-authorization record.
- [x] State that the user does not need to repeat Gate 3 authorization after the full-copy prerequisite closes.
- [x] Keep Gate 4–10 unauthorized.

### Task 2: Draft the complete Buyer Clean copy

- [x] Write all ten approved modules with complete English copy.
- [x] Include the 14-Grade selector content and current single-Grade behavior.
- [x] Include the complete comparison, request-context guidance, process and five FAQ answers.
- [x] Keep every visible sentence within the Claim Register.
- [x] Define CTA, route, empty-state, hidden-source, SEO/GEO/Schema and internal rendering controls separately from visible copy.

### Task 3: Review and submit the full copy

- [x] Run Buyer Clean, evidence, ownership, duplicate-content and contract checks.
- [x] Create the project-control review submission.
- [x] Create the current Gate 2 full-copy review Manifest with hashes.
- [x] Mark `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=PENDING_USER_APPROVAL`.

### Task 4: Synchronize governance

- [x] Update `00_PROJECT_STATUS.md` and `01_PROJECT_INDEX.md`.
- [x] Preserve the V0.2 skeleton and V0.2 review records as approved checkpoint history.
- [x] Verify all current and historical hashes and exact Gate boundaries.
