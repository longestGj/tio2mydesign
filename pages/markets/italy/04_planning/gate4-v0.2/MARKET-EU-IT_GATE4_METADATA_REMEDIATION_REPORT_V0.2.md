# MARKET-EU-IT Gate 4 Metadata Remediation Report V0.2

Workset `IT-G4-COMPLETE-20260907-02`; freeze `IT-G4-FREEZE-20260907-02`; response `IT-G4-PC-R01-R1`.

The V0.2 producer reads each PNG after capture with Pillow and records the decoded physical width and height plus DPR 1. It no longer treats CSS clip geometry as PNG metadata. This produces the required `1440×436` direction record and complete dimensions for the 18 targeted normal/hover/focus records: Request Documents is 980×120, 724×120 and 370×120 at logical widths 1440, 768 and 390; Federchimica is 1156×120, 700×120 and 346×120.

All 56 V0.1 image files were decoded and rehashed. Results are `56/56` byte/SHA matches, `56/56` complete physical metadata records and `19/19` intended corrections, with no unexpected correction. Candidate source identity remains 28,199 bytes and SHA-256 `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615`.

The three-width runtime rerun passed `20/20`. Document heights remain 5050, 6114 and 7698 CSS pixels. The diagnostic full-page images decode to 1440×5051, 768×6114 and 390×7699 physical pixels; the one-pixel element-screenshot rounding at 1440 and 390 is recorded as diagnostic capture metadata and does not replace the 56 inherited formal evidence files.

The new input index binds 60 current identities. V0.1 artifacts, the independent review, the Project Control Finding and Manifest V0.9 are preserved as inputs and history. No page source, approved content, URL, module, visual rule or shared contract changed.

This report is an executor artifact for independent rereview. Gate 4 remains open; Gate 6, development, deployment and publication are not started.
