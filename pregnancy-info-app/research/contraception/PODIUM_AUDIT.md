# Podium audit — 2026-11-27

Scope: decision support only, not a medical eligibility or contraceptive safety ranking. Source records CT-01 (CDC typical-use failure), CT-03/20 (placement/bleeding), CT-07 (fertility), CT-41–50 (coverage and incomplete price examples). CDC 2024 SPR and BMJ 2020 cohort rechecked. No new quantitative safety or pain scores. The candidate graded fertility proxy (delay/8) was rejected because the observational cohorts do not support a clinical utility scale and the sensitivity run made barrier dominance worse. Normalizing score to 1000 changes readability, not rank. Essential comfort continues to exclude invasive placement/injection at 10.

### Backtest design
161,050 exhaustive nonzero combinations of five effective 0–10 weights (hormone, health proxy, comfort, effectiveness, fertility); default empty quotes make cost lower bound zero, so varying cost doesn't change lower-score ordering. Default budget $1000 and 8 condoms/month. No extra filter except comfort 10. Old: fixed first 3 in database order. Revised: competitive rank <=3 with all exact ties included. This deliberately includes more than three if tied; percentages need not sum to 300%. First rank includes ties. Possible without cost is interval upper bound >= third lower score, not clinical probability. Also 2,661 sparse-grid format cases (0,5,10 across 5 weights; nonzero; each of 12 format choices when eligible), and 7,260 artificial quote cases (one method at/below budget, all others above; 5/10 cost weight; rotated each method; sparse grid). These are stress tests, not market price estimates or distributions of actual users. Format conditional rates are within chosen format, not overall win frequencies. No forced redistribution of points. The same script can be rerun from repository root with node pregnancy-info-app/research/contraception/podium-audit.mjs. Independent formula reproduction, not a direct execution of React; CI unit tests check actual implementation parity on representative cases.

| Method | Old podium % | Tie-inclusive podium % | Shared first % | Possible (no cost) % | Hypothetical quotes podium % | Conditional format podium % |
|---|---:|---:|---:|---:|---:|---:|
| Copper IUD | 33.13 | 33.13 | 23.37 | 33.13 | 38.15 | 100.00 |
| LNG IUD | 6.84 | 6.84 | 0.07 | 9.94 | 17.88 | 100.00 |
| Arm implant | 9.94 | 9.94 | 2.70 | 9.94 | 20.29 | 100.00 |
| Injection | 0.00 | 0.00 | 0.00 | 0.00 | 0.72 | 100.00 |
| Combined pill | 0.12 | 0.12 | 0.01 | 0.12 | 2.81 | 100.00 |
| Patch | 0.10 | 0.12 | 0.01 | 0.12 | 2.81 | 100.00 |
| Vaginal ring | 0.00 | 0.12 | 0.01 | 0.12 | 2.81 | 100.00 |
| Progestin-only pill | 1.16 | 1.35 | 0.07 | 1.35 | 7.40 | 100.00 |
| External condom | 93.54 | 93.61 | 74.83 | 93.61 | 87.18 | 100.00 |
| Internal condom | 9.02 | 9.09 | 9.09 | 9.09 | 37.40 | 100.00 |
| Diaphragm | 89.06 | 89.97 | 9.09 | 89.97 | 75.63 | 100.00 |
| Cervical cap | 0.00 | 9.09 | 9.09 | 9.09 | 37.40 | 100.00 |
| Sponge | 57.10 | 89.97 | 9.09 | 89.97 | 75.63 | 100.00 |
| Spermicide / pH regulator | 0.00 | 9.09 | 9.09 | 9.09 | 37.40 | 100.00 |
| Fertility-awareness methods | 0.00 | 9.09 | 9.09 | 99.25 | 37.40 | 100.00 |

Each method has a nonzero podium opportunity in explicitly selected delivery formats and hypothetical cost quotes; injection still has no default unfiltered podium under the current features. This is an honest tradeoff rather than a clinical failure. Real-world choices depend on health eligibility, preferences and costs. For each method the exact axis counts, possible-cost bounds and raw counts are produced by script. Clinical review remains pending; test synthetic quote assumptions not user-specific.
