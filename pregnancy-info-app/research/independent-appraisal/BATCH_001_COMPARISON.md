# Batch 001 — comparison with archived Everwell data

2026-11-27. Original-source appraisal was recorded first in BATCH_001.md, commit 7d0a079cd1eb4157c15a47a52abfe3b9d041e336. Prior context exposure was declared in that appraisal; this is not a blinded review.

## Numeric reconciliation (seven existing rows)

| Row ID | Original-source result | Classification |
|---|---|---|
| O002 | MD 1 mm, 95% CI −1 to 4 | Matches |
| O003 | MD 9 Nm, 95% CI 3 to 16 | Matches |
| IA-N04 | MD 0.7 mm, 95% CI 0.1 to 1.3 | Matches |
| O014 | RR 0.28, 95% CI 0.12 to 0.71 | Matches; duplicate effect of P5-E02 |
| P5-E02 | RR 0.28, 95% CI 0.12 to 0.71 | Matches; duplicate effect of O014 |
| PED-E27 | BMI z-score adjusted difference 0.21, 95% CI −0.07 to 0.48, 12 months | Matches |
| PED-E28 | BMI z-score adjusted difference 0.16, 95% CI −0.13 to 0.45, 24 months | Matches |

Sources and locators: BATCH_001.md. Seven matching stored rows represent six distinct effect estimates, not seven independent results. Neither numeric agreement nor the limited appraisal clears clinical publication.

## Identity and funding findings

- S089 and P5-02 share PMID 1677062. Both numerical recurrence rows above represent the same published result, not replication. Retain provenance and add an explicit duplicate mapping; no pooling.
- PED-BLISSGROW and PED-BLISSCHOKE belong to ACTRN12612001133820. Distinct outcomes from one NZ trial; do not count as independent cohorts. The source index currently has null cohort and funding fields for both. Growth-paper mixed commercial/trade/in-kind and other funding is directly reported. Choking paper complete funding statement not independently accessible; distinguish shared trial funding from individual publication disclosures.
- S028 source-index funding is null. Indexed publisher support statement and investigator conference record name Norwegian Women's Public Health Association, grant H1/2018. Preserve access caveat and keep sponsor-role/indirect ties unknown.
- S087 funding null is appropriate pending primary disclosure. P5-02 existing funding text names MRC research group but full support/donations remain unknown; no stronger conclusion.
- Brazil PMID 37400061 was not found by PMID/title in the checked canonical index; a candidate, not a confirmed novel entry. Confirm DOI/title/alias identity before registry addition.

## Archived article comparisons

- EV-ART-002: partial agreement. Direction of prevention is supported, but first-occurrence combination and recurrence-specific folic acid trials do not establish personalized dosing or superiority of other forms. Existing wording not clinically reviewed.
- EV-ART-027: partial agreement. S028 supports strength gains without clear gap reduction in a specific later-postpartum group. It does not justify early-postpartum or universal recommendations. S028 was not directly linked in the inspected stage-09 article source_ids; add candidate source link only after review of exact claim and source mapping.
- EV-ART-046: not comparable to the general timing claim from these two BLISS publications alone. They inform modified feeding growth and choking questions, not standalone age recommendations. No new safety claims from this batch.

## Next actions

Record identity and funding as proposed overlays rather than overwriting original provenance; app-facing promotion remains disabled. Complete full-text access, outcome-specific RoB, retraction/correction search, broader contrary evidence, source-level funding audit and clinical review before consideration of release. No claim that 770 source records were appraised.
