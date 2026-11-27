# International academic expansion — Stage 1 discovery checkpoint

Date: 2026-11-27. Target: 200 additional relevant international publications. **Preliminary discovery target reached; full eligibility, funding and bias audits remain open.**

| Batch | Candidates | New PMID nonmatches | Existing PMID matches | Pending location or identity |
|---|---:|---:|---:|---:|
| [1](BATCH_01.json) | 113 | 92 | 6 | 15 |
| [2](BATCH_02.json) | 41 | 33 | 2 | 6 |
| [3](BATCH_03.json) | 45 | 37 | 2 | 6 |
| [4](BATCH_04.json) | 44 | 29 | 5 | 10 |
| [5](BATCH_05.json) | 16 | 10 | 0 | 6 |
| Total | 259 | 201 | 15 | 43 |

Re-read all five committed JSON files on main. Verified 201 distinct PMIDs within counted records; all 201 have clinical_review, publish and automation_allowed false. All baseline file reads succeeded. Exact PMID matching was performed against the app source index, canonical registry, earlier international and traditional-practice archives and preceding batches. This is not complete DOI/title/PMC/registry-level deduplication; 139 records have provisional study-family tags, and repeated publications must not be counted as independent trials. 43 pending candidates remain excluded from the target count. The 770-record baseline does not yet have reliable structured geography classification.

## Discovery methods
Targeted web-indexed PubMed title/abstract searches, with selected abstracts and full-text excerpts opened. Search themes included maternal nutrition, paternal fertility, pregnancy exercise, environmental exposures, childbirth and perineal recovery, infant growth, complementary feeding, lactation, skin care, infant sleep, mental health and developmental outcomes. Searches targeted Africa, South and East Asia, Latin America, Europe, Oceania, Middle East and Canada. This was not a systematic review and native-language bibliographic database searches were not completed. Short titles and design labels in JSON are provisional screening descriptors rather than final bibliographic metadata. Geographic labels describe reported study settings or population; all need final source-level verification before release. No claim-level recommendations or app source index changes were made.

## Topic counts
- nutrition: 46
- child development: 22
- breastfeeding: 17
- environment: 16
- child growth: 15
- gestational diabetes: 8
- postpartum rehabilitation: 6
- complementary feeding: 5
- child health: 4
- infant skin: 4
- child respiratory health: 4
- postpartum mood: 3
- preconception nutrition: 3
- nutrition and exercise: 3
- infant sleep: 3
- digital maternal education: 3
- research methodology: 3
- fertility: 3
- paternal fertility: 2
- paternal health: 2
- child allergy: 2
- postpartum support: 2
- birth preparation: 2
- newborn care: 2
- postpartum contraception: 2
- perinatal mental health: 2
- infant safe sleep: 2
- fetal development: 2
- postpartum recovery: 2
- skin pigmentation: 1
- fetal and child development: 1
- labor and breastfeeding: 1
- pregnancy exercise: 1
- labor comfort: 1
- child skin: 1
- birth safety: 1
- nutrition and environment: 1
- maternal health: 1
- pelvic floor: 1
- postpartum mental health: 1

## Funding and safety
Nine counted records contain a funding/disclosure note beyond unknown; notes can be partial and are not full sponsor-role or independence assessments. Remaining 192 have unknown/unverified disclosures. None is certified independent. Retain negative, null, mixed and harmful outcomes. Formal outcome-specific risk of bias, applicability, full-text funding, corrections and retractions remain to be checked. Retain all existing publication holds; no dosing, clinician-only procedures or individualized care recommendations. Media expansion is a separate stage.

## Examples for subsequent review
- [Bangladesh MDIG trial](https://pubmed.ncbi.nlm.nih.gov/30089075/): vitamin D biomarker improvements do not establish improved infant growth; reconcile erratum PMID 34706188 before clinical citation.
- [BEEP trial](https://pubmed.ncbi.nlm.nih.gov/32087126/): no clear preventive eczema benefit from routine emollients in this trial, higher reported skin infections; distinguish prevention from treatment. Already archived; no assumption of novelty.
- [Australia OPTIMISE](https://pubmed.ncbi.nlm.nih.gov/31810217/): dietary/lifestyle advice in normal-BMI pregnancy; extract outcome-level evidence.
- [Japan Smart Mama](https://pubmed.ncbi.nlm.nih.gov/40269899/): open-label app plus nursing support; separate content effects from clinician contact.

## Next actions
Complete DOI/PMC/title identity reconciliation against the entire archive, assign trial families, verify all study locations, full bibliographic metadata and corrections, and extract full-text funding and conflicts. Prioritize safety-sensitive topics and conflicting evidence for formal bias assessment. Perform geographic gap analysis of the 770 existing records and native-language searches. Resolve or exclude the 43 pending candidates. Do not merge staged records into published app content until approved.
