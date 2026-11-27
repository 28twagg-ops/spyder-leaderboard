/** Additional focused research drafts. External guidance records are candidate references; no chart/dose release.
 * Existing registry-backed sources retain alias/hold checks. No individual clinical clearance. */
export type MidReference={title:string;url:string;sourceId?:string}
export type MidReading={title:string;art:string;window:string;summary?:string;question?:string;sections:{title:string;body:string;refs:string[]}[];related:[string,string][]}
export const midReferences:Record<string,MidReference>={
"ECHO": {
    "title": "ECHO Consortium, 2021: prenatal micronutrient intake",
    "url": "https://doi.org/10.1093/jn/nxab273"
  },
  "GAP2019": {
    "title": "Bailey et al., 2019: US pregnancy nutrient intakes (industry-funded comparison)",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31225890/"
  },
  "IRON2026": {
    "title": "Weyand et al., 2026: iron deficiency in US pregnancy",
    "url": "https://doi.org/10.1002/ajh.70207"
  },
  "IOD2024": {
    "title": "Sun and Weaver, 2024: iodine intake trends in US girls and women",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38218541/"
  },
"CHOL1": {
    "title": "Caudill et al. 2018: randomized choline feeding trial",
    "url": "https://pubmed.ncbi.nlm.nih.gov/29217669/",
    "sourceId": "P4-08"
  },
  "CHOL2": {
    "title": "Bahnfleth et al. 2022: seven-year follow-up",
    "url": "https://doi.org/10.1096/fj.202101217R",
    "sourceId": "P4-09"
  },
  "CHOL3": {
    "title": "Cheatham et al. 2012: randomized phosphatidylcholine trial",
    "url": "https://pubmed.ncbi.nlm.nih.gov/23134891/",
    "sourceId": "P4-10"
  },
  "IOD": {
    "title": "Gowachirapant et al. 2017: iodine supplementation and child neurodevelopment",
    "url": "https://pubmed.ncbi.nlm.nih.gov/29030199/",
    "sourceId": "P5-21"
  },
  "MTHFR": {
    "title": "CDC: MTHFR variants and folic acid",
    "url": "https://www.cdc.gov/folic-acid/data-research/mthfr/index.html",
    "sourceId": "P5-04"
  },
  "FOLREV": {
    "title": "Cochrane: periconceptional folate and birth defects",
    "url": "https://www.cochrane.org/evidence/CD007950_folic-acid-supplements-conception-and-early-pregnancy-12-weeks-prevention-birth-defects",
    "sourceId": "P5-01"
  },
  "IRON": {
    "title": "Cochrane 2024: daily oral iron supplementation",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11325660/",
    "sourceId": "P5-19"
  },
  "CALC": {
    "title": "Cochrane: calcium and hypertensive disorders",
    "url": "https://www.cochrane.org/evidence/CD001059_taking-calcium-supplements-during-pregnancy-effective-way-prevent-blood-pressure-disorders-and",
    "sourceId": "P5-05"
  },
  "CALCC": {
    "title": "2026 commentary on trial trustworthiness and calcium review",
    "url": "https://link.springer.com/article/10.1186/s12978-026-02395-w",
    "sourceId": "P5-06"
  },
  "VD": {
    "title": "Cochrane: vitamin D supplementation",
    "url": "https://www.cochrane.org/evidence/CD008873_does-vitamin-d-supplementation-benefit-harm-or-have-no-effects-pregnant-women-or-their-babies",
    "sourceId": "P5-17"
  },
  "GAO": {
    "title": "US GAO: prenatal supplement label accuracy",
    "url": "https://www.gao.gov/products/gao-24-106689",
    "sourceId": "P5-24"
  },
  "HERBAL": {
    "title": "MotherToBaby: herbal products",
    "url": "https://mothertobaby.org/fact-sheets/herbal-products-pregnancy/",
    "sourceId": "N319"
  },
  "ASP": {
    "title": "ACOG/SMFM: low-dose aspirin for prevention of preeclampsia",
    "url": "https://publications.smfm.org/publications/433-acog-smfm-practice-advisory-low-dose-aspirin-use/"
  },
  "ASPREV": {
    "title": "USPSTF 2021 evidence review: aspirin prevention",
    "url": "https://www.uspreventiveservicestaskforce.org/uspstf/document/final-evidence-summary/low-dose-aspirin-use-for-the-prevention-of-morbidity-and-mortality-from-preeclampsia-preventive-medication"
  },
  "NSAID": {
    "title": "FDA: NSAIDs from around 20 weeks and fetal renal risks",
    "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic"
  },
  "IBU": {
    "title": "MotherToBaby: ibuprofen",
    "url": "https://mothertobaby.org/fact-sheets/ibuprofen-pregnancy/"
  },
  "ACET": {
    "title": "MotherToBaby: acetaminophen",
    "url": "https://mothertobaby.org/fact-sheets/acetaminophen-pregnancy/"
  },
  "ACETSIB": {
    "title": "Ahlqvist et al. 2024: Swedish sibling-controlled study",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38592388/"
  },
  "NAUSEA": {
    "title": "ACOG: nausea and vomiting of pregnancy",
    "url": "https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy"
  },
  "DOX": {
    "title": "MotherToBaby: doxylamine-pyridoxine",
    "url": "https://mothertobaby.org/fact-sheets/doxylamine-succinate-pyridoxine-hydrochloride-diclegisdiclectin-pregnancy/"
  },
  "CREAT": {
    "title": "Open-label pregnancy creatine dose escalation study",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12291183/",
    "sourceId": "P5-23"
  },
"N4": {
    "title": "NHS: Week 4",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-4/"
  },
  "N5": {
    "title": "NHS: Week 5",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-5/"
  },
  "N6": {
    "title": "NHS: Week 6",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/"
  },
  "N7": {
    "title": "NHS: Week 7",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-7/"
  },
  "N8": {
    "title": "NHS: Week 8",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-8/"
  },
  "N9": {
    "title": "NHS: Week 9",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-9/"
  },
  "N10": {
    "title": "NHS: Week 10",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-10/"
  },
  "N11": {
    "title": "NHS: Week 11",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-11/"
  },
  "N12": {
    "title": "NHS: Week 12",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-12/"
  },
  "N13": {
    "title": "NHS: Week 13",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-13/"
  },
  "PLAN": {
    "title": "CDC: Planning for pregnancy",
    "url": "https://www.cdc.gov/pregnancy/about/index.html"
  },
  "FOLATE": {
    "title": "CDC: About folic acid",
    "url": "https://www.cdc.gov/folic-acid/about/"
  },
  "BLEED": {
    "title": "ACOG: Bleeding during pregnancy",
    "url": "https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy"
  },
  "ECTOPIC": {
    "title": "ACOG: Ectopic pregnancy",
    "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy"
  },
  "GENETIC": {
    "title": "ACOG: Prenatal genetic screening tests",
    "url": "https://www.acog.org/womens-health/faqs/prenatal-genetic-screening-tests"
  },
  "GENETIC_CURRENT": {
    "title": "ACOG: Screening for fetal chromosomal abnormalities (2026)",
    "url": "https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities"
  },
  "ROUTINE": {
    "title": "ACOG: Routine tests during pregnancy",
    "url": "https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy"
  },
"N14": {
    "title": "NHS: Week 14",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/"
  },
  "N15": {
    "title": "NHS: Week 15",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-15/"
  },
  "N16": {
    "title": "NHS: Week 16",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-16/"
  },
  "N17": {
    "title": "NHS: Week 17",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-17/"
  },
  "N18": {
    "title": "NHS: Week 18",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-18/"
  },
  "N19": {
    "title": "NHS: Week 19",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-19/"
  },
  "N32": {
    "title": "NHS: Week 32",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-32/"
  },
  "N33": {
    "title": "NHS: Week 33",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-33/"
  },
  "N34": {
    "title": "NHS: Week 34",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-34/"
  },
  "N35": {
    "title": "NHS: Week 35",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-35/"
  },
  "N36": {
    "title": "NHS: Week 36",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-36/"
  },
  "N37": {
    "title": "NHS: Week 37",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-37/"
  },
  "N38": {
    "title": "NHS: Week 38",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-38/"
  },
  "N39": {
    "title": "NHS: Week 39",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-39/"
  },
  "N40": {
    "title": "NHS: Week 40",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-40/"
  },
  "RSV": {
    "title": "CDC: Maternal RSV vaccine guidance",
    "url": "https://www.cdc.gov/rsv/hcp/vaccine-clinical-guidance/pregnant-people.html"
  },
  "RSVSAFE": {
    "title": "CDC: RSV vaccine safety",
    "url": "https://www.cdc.gov/vaccine-safety/vaccines/rsv.html"
  },
  "GBS": {
    "title": "ACOG: Prevention of group B streptococcal early-onset disease",
    "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns"
  },
  "TERM": {
    "title": "ACOG: Definition of term pregnancy",
    "url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
  },
  "LABOR": {
    "title": "ACOG: How to tell when labor begins",
    "url": "https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins"
  },
  "DUE": {
    "title": "ACOG: When pregnancy goes past your due date",
    "url": "https://www.acog.org/womens-health/faqs/when-pregnancy-goes-past-your-due-date"
  },
  "FETUS": {
    "title": "ACOG: How your fetus grows",
    "url": "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy"
  },
"N30": {
    "title": "NHS: Week 30",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-30/"
  },
  "N31": {
    "title": "NHS: Week 31",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-31/"
  },
  "PRETERM": {
    "title": "ACOG: Preterm labor and birth",
    "url": "https://www.acog.org/womens-health/faqs/preterm-labor-and-birth"
  },
"N28": {
    "title": "NHS: Week 28",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-28/"
  },
  "N29": {
    "title": "NHS: Week 29",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
  },
  "TDAP": {
    "title": "CDC: Vaccination guidelines during pregnancy",
    "url": "https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/"
  },
  "TDAP2": {
    "title": "CDC: Vaccinating pregnant patients against pertussis",
    "url": "https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/vaccinating-pregnant-patients.html"
  },
  "SLEEP": {
    "title": "CDC: Providing care for babies to sleep safely",
    "url": "https://www.cdc.gov/sudden-infant-death/sleep-safely/"
  },
  "AAP_SLEEP": {
    "title": "AAP: Sleep-related infant deaths, 2022 recommendations",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35726558/",
    "sourceId": "PED-SLEEP"
  },
"N20": {
    "title": "NHS: Week 20",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-20/"
  },
  "N21": {
    "title": "NHS: Week 21",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-21/"
  },
  "SCAN": {
    "title": "ACOG: Ultrasound exams",
    "url": "https://www.acog.org/womens-health/faqs/ultrasound-exams"
  },
  "MED": {
    "title": "MedlinePlus: Fetal development",
    "url": "https://medlineplus.gov/ency/article/002398.htm",
    "sourceId": "PED-GESTATION"
  },
  "N24": {
    "title": "NHS: Week 24",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-24/"
  },
  "N25": {
    "title": "NHS: Week 25",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-25/"
  },
  "N26": {
    "title": "NHS: Week 26",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-26/"
  },
  "N27": {
    "title": "NHS: Week 27",
    "url": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-27/"
  },
  "GDM": {
    "title": "ACOG: Gestational diabetes",
    "url": "https://www.acog.org/womens-health/faqs/gestational-diabetes"
  },
  "GDM2": {
    "title": "NIDDK: Tests and diagnosis for gestational diabetes",
    "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational/tests-diagnosis"
  },
  "REFLUX": {
    "title": "NHS: Indigestion and heartburn in pregnancy",
    "url": "https://www.nhs.uk/pregnancy/common-symptoms/indigestion-and-heartburn/"
  },
  "BREAST": {
    "title": "ACOG: Changes during pregnancy",
    "url": "https://www.acog.org/womens-health/infographics/changes-during-pregnancy"
  },
  "NUTR": {
    "title": "NIH ODS: Dietary supplements and pregnancy",
    "url": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/",
    "sourceId": "P5-28"
  },
  "PROBIO": {
    "title": "Cochrane: Probiotics to prevent gestational diabetes",
    "url": "https://www.cochrane.org/evidence/CD009951_probiotics-prevent-gestational-diabetes-mellitus",
    "sourceId": "P5-11"
  },
  "URG": {
    "title": "CDC: Urgent maternal warning signs",
    "url": "https://www.cdc.gov/hearher/maternal-warning-signs/",
    "sourceId": "P9-G04"
  },
  "SOUND": {
    "title": "Partanen et al. 2013: Prenatal music exposure and neural responses",
    "url": "https://doi.org/10.1371/journal.pone.0078946",
    "sourceId": "P4-07"
  },
  "DHA": {
    "title": "Makrides et al.: Prenatal DHA seven-year follow-up",
    "url": "https://jamanetwork.com/journals/jama/fullarticle/2612605",
    "sourceId": "P4-12"
  }
}
export const midReadings:Record<string,MidReading>={
  "mother/nutrition/choline": {
    "title": "Choline: membranes, signaling and brain research",
    "art": "brain",
    "window": "Throughout pregnancy; no established week-specific extra dose",
    "summary": "Choline is essential. Small cognitive trials are interesting, but the evidence for extra supplementation is mixed.",
    "question": "Does my usual diet and prenatal product provide adequate choline?",
    "sections": [
      {
        "title": "Where it comes from",
        "body": "Eggs, meat, fish, dairy and soy foods contribute choline. It participates in phospholipid formation and methyl-group metabolism. Check what a prenatal actually contains rather than assuming every prenatal includes it.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "How common is low intake?",
        "body": "In 15 US ECHO cohorts (1999–2019), only 7% exceeded the adequate-intake benchmark when supplements were included. The complement, 93%, did not exceed that benchmark; it is not a clinical deficiency rate. A separate 2019 NHANES analysis similarly found only 8% met the benchmark, but was funded by Nestlé Nutrition, with employee authors and a paid statistical analysis agreement. Agreement does not make the studies independent replications of clinical deficiency.",
        "refs": [
          "ECHO",
          "GAP2019"
        ]
      },
      {
        "title": "What the trials measured",
        "body": "A small controlled feeding trial reported faster infant information processing, and a seven-year follow-up reported differences on a sustained-attention task. These publications followed the same cohort. A separate randomized phosphatidylcholine trial did not establish a cognitive benefit. Different outcomes, populations and interventions are not interchangeable.",
        "refs": [
          "CHOL1",
          "CHOL2",
          "CHOL3"
        ]
      },
      {
        "title": "Why funding and study design matter",
        "body": "The archive records US public and egg/beef industry promotion support for the first trial, public and Balchem support for the follow-up, and mixed public/foundation/egg-industry support for the separate trial. Sponsor roles, attrition, small samples and outcome selection need independent appraisal. Positive and null results occurred with mixed funding; the funding alone does not establish the cause of the findings.",
        "refs": [
          "CHOL1",
          "CHOL2",
          "CHOL3"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/iodine",
        "Iodine"
      ],
      [
        "mother/nutrition/brain-nutrients",
        "Combined nutrient research"
      ],
      [
        "baby/senses/brain-nutrients",
        "Developmental outcomes"
      ]
    ]
  },
  "mother/nutrition/iodine": {
    "title": "Iodine: thyroid hormones and development",
    "art": "brain",
    "window": "Before conception and throughout pregnancy; diet and thyroid context matter",
    "summary": "Iodine supports thyroid hormone production. Both inadequate and excessive intake can cause problems.",
    "question": "Does my prenatal contain iodine, and do my thyroid history or dietary choices change the discussion?",
    "sections": [
      {
        "title": "Food and product sources",
        "body": "Iodized salt, dairy, eggs and seafood can contribute iodine. Salt used in packaged foods is not necessarily iodized. Seaweed iodine content can vary substantially. Adequacy is not a reason to add extra salt or concentrated kelp supplements.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "What population measurements show",
        "body": "NIH summarizes a 2017–2020 NHANES analysis in which pregnant participants had a median urinary iodine concentration of 131.4 mcg/L, below the population benchmark of 150 mcg/L. A spot urine result cannot diagnose individual iodine deficiency; the population median and dietary estimate answer different questions. Review thyroid history and intake rather than adding concentrated iodine.",
        "refs": [
          "IOD2024",
          "NUTR"
        ]
      },
      {
        "title": "What cognitive research can tell us",
        "body": "A randomized trial in mildly iodine-deficient pregnant participants did not establish a child neurodevelopmental benefit from the tested supplementation strategy. This does not negate the importance of iodine or establish the effect in severe deficiency. The registry records public, university and Nestlé Foundation support; company influence is not established by the foundation's origin.",
        "refs": [
          "IOD",
          "NUTR"
        ]
      },
      {
        "title": "Safety and context",
        "body": "Thyroid conditions, medications and other iodine sources matter. Review combined intake with a clinician rather than assuming higher intake is beneficial.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/choline",
        "Choline"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal product quality"
      ]
    ]
  },
  "mother/nutrition/vitamin-b12": {
    "title": "Vitamin B12: blood and nervous-system health",
    "art": "brain",
    "window": "Preconception, pregnancy and lactation; dietary restrictions matter",
    "summary": "B12 deserves particular attention when animal-derived or fortified foods are limited.",
    "question": "Do my diet, medical history or medicines warrant an assessment of B12 intake or status?",
    "sections": [
      {
        "title": "Role and sources",
        "body": "B12 supports normal red blood-cell formation, DNA synthesis and nervous-system function. Sources include meat, fish, eggs, dairy and fortified foods. Unfortified plant foods are not reliable sources.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Adequacy and absorption",
        "body": "A dietary pattern, gastrointestinal condition or medication can affect intake or absorption. Correcting a deficiency and adding extra B12 to an adequate diet are different clinical questions. No claim of enhanced child cognition follows from the nutrient's biological role.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Why this is easy to overlook",
        "body": "Folate and B12 participate in related pathways. High folic acid intake can obscure some hematologic signs of B12 deficiency without treating neurological injury. Individual evaluation matters; don't replace one nutrient with another.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/folic-acid",
        "Folic acid"
      ],
      [
        "mother/nutrition/food",
        "Food and prenatal nutrition"
      ]
    ]
  },
  "mother/nutrition/magnesium": {
    "title": "Magnesium: muscle, nerve and metabolic function",
    "art": "mineral",
    "window": "Throughout pregnancy; supplemental and food intake differ",
    "summary": "Magnesium is needed for normal physiology, but routine extra supplements for every symptom are not established.",
    "question": "What is the evidence for the particular reason I am considering magnesium?",
    "sections": [
      {
        "title": "Food sources and physiological roles",
        "body": "Nuts, seeds, beans, whole grains and leafy vegetables contribute magnesium. It participates in enzyme activity and normal nerve and muscle function.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "How common is low intake?",
        "body": "In ECHO, 39–41% had estimated total intake below the average requirement; a separate 2019 NHANES analysis estimated 47.5%. These are estimates from reported dietary intake, not blood-test diagnoses. The latter study had commercial funding; both have measurement limitations.",
        "refs": [
          "ECHO",
          "GAP2019"
        ]
      },
      {
        "title": "Do not confuse formulations and indications",
        "body": "Oral supplements studied for symptoms are not equivalent to intravenous magnesium sulfate used under clinical supervision for specific obstetric indications. Evidence of a biological role or a medical indication does not establish a routine oral prevention strategy.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Safety",
        "body": "Supplemental magnesium can cause gastrointestinal effects; kidney function and medicines can change safety. The US upper limit for magnesium applies to supplemental or medicinal magnesium, not magnesium naturally present in foods.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/bone-minerals",
        "Mineral overview"
      ],
      [
        "mother/nutrition/supplements",
        "Product labels"
      ]
    ]
  },
  "mother/nutrition/zinc": {
    "title": "Zinc: growth, cells and immune function",
    "art": "mineral",
    "window": "Throughout pregnancy; intake depends on diet",
    "summary": "Zinc supports growth, but more zinc is not automatically better.",
    "question": "Are there dietary or absorption concerns that make my zinc intake worth reviewing?",
    "sections": [
      {
        "title": "Foods and function",
        "body": "Meat, seafood, dairy, beans, nuts and seeds can supply zinc. Absorption varies with dietary composition. Zinc participates in many enzymes, protein synthesis and normal immune function.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Interpreting supplementation evidence",
        "body": "A trial of additional zinc addresses a different question from meeting dietary requirements. Outcomes such as birth weight or preterm birth require their own evidence; physiological importance is not proof of improved outcomes in well-nourished populations.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Excess and combined products",
        "body": "Excess zinc can impair copper status. Consider the combined amounts in prenatal vitamins, individual supplements and other products; no additional zinc protocol is established here.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/food",
        "Food and nutrition"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal label accuracy"
      ]
    ]
  },
  "mother/nutrition/vitamin-a": {
    "title": "Vitamin A: essential nutrient, important safety limits",
    "art": "eye",
    "window": "Throughout pregnancy; preformed vitamin A differs from carotenoids",
    "summary": "Vitamin A is essential, but excessive preformed vitamin A can harm development.",
    "question": "Does my prenatal or another product contain preformed vitamin A, and how does that affect total intake?",
    "sections": [
      {
        "title": "Two nutritional forms",
        "body": "Preformed vitamin A occurs in animal-derived foods and some supplements; carotenoids in colorful produce can be converted into vitamin A. Vitamin A participates in vision, differentiation and development.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Why the form matters",
        "body": "Excess preformed vitamin A during pregnancy can cause birth defects. The same upper-limit interpretation does not apply to food-derived beta-carotene. Review overlapping products and concentrated sources rather than assuming all forms have identical risk.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Medication safety is distinct",
        "body": "Retinoid medicines are a separate exposure question. A nutritional discussion cannot establish medication safety; review specific products with the prescribing clinician.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/skin/acne-pigmentation/acne-and-ingredient-safety",
        "Skin-care ingredient safety"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal product labels"
      ]
    ]
  },
  "mother/nutrition/folate-forms": {
    "title": "Folic acid, methylfolate and MTHFR claims",
    "art": "cells",
    "window": "Before conception and early pregnancy; established prevention",
    "summary": "Common MTHFR variants do not establish a need to avoid folic acid.",
    "question": "How should I interpret folate forms on my prenatal label and any individual risk factors?",
    "sections": [
      {
        "title": "An important evidence distinction",
        "body": "Folate is a family of compounds. Folic acid has direct preventive evidence for neural tube defects, including randomized research and systematic review evidence. CDC says common MTHFR variants do not prevent the body from processing folic acid.",
        "refs": [
          "FOLREV",
          "MTHFR"
        ]
      },
      {
        "title": "Marketing versus clinical outcomes",
        "body": "Differences in biochemical markers or methylation pathways are not proof that a marketed alternative prevents more neural tube defects. A claim of superiority requires direct clinical outcome evidence.",
        "refs": [
          "MTHFR",
          "FOLREV"
        ]
      },
      {
        "title": "Check the actual label",
        "body": "Food folate, dietary folate equivalents and the actual amount of folic acid are not identical label units. Clinical risk factors can change preventive advice. This reading does not give a personal regimen.",
        "refs": [
          "NUTR",
          "MTHFR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/folic-acid",
        "Folic acid prevention"
      ],
      [
        "mother/nutrition/vitamin-b12",
        "Vitamin B12"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal supplement quality"
      ]
    ]
  },
  "mother/nutrition/iron": {
    "title": "Iron: preventing and treating deficiency are different questions",
    "art": "blood",
    "window": "Throughout pregnancy; screening and individual iron status matter",
    "summary": "Iron supports oxygen transport; the right approach depends on intake, blood tests and clinical circumstances.",
    "question": "Should my iron intake or blood results be reviewed before considering an additional product?",
    "sections": [
      {
        "title": "Food and absorption",
        "body": "Meat and other animal foods contain heme iron; beans and fortified grains provide nonheme iron. Absorption varies. Iron is needed to make hemoglobin, but fatigue alone cannot diagnose deficiency.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "How common is laboratory-defined deficiency?",
        "body": "In a 2026 analysis of 726 pregnant NHANES participants (2003–2010 and 2015–2023), 52.9% had ferritin below 30 ng/mL (95% CI 47.6–58.1); 26.9% were below 15 ng/mL (95% CI 22.5–31.3). Iron-deficiency anemia was estimated at 6.9%. Gestational age was unavailable and inflammation can raise ferritin. Authors reported nothing under funding and declared no conflicts. Population estimates do not establish a personal diagnosis or an indication for extra iron.",
        "refs": [
          "IRON2026"
        ]
      },
      {
        "title": "What prevention research shows",
        "body": "A Cochrane review of daily oral supplementation examines maternal anemia and related pregnancy outcomes. Evidence for anemia prevention is distinct from claims of improved child development, and routine prevention trials should not be treated as treatment protocols for established deficiency.",
        "refs": [
          "IRON"
        ]
      },
      {
        "title": "Limitations and practical considerations",
        "body": "The review's trial funding and sponsor roles remain incompletely extracted in the archive. Iron can cause gastrointestinal effects; tolerability, laboratory assessment and clinical indications matter. Do not stack prenatal and separate iron products without checking total intake and advice.",
        "refs": [
          "IRON",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/minerals",
        "Existing iron and mineral evidence"
      ],
      [
        "baby/growth/blood",
        "Fetal blood formation"
      ]
    ]
  },
  "mother/nutrition/calcium": {
    "title": "Calcium: bones and the preeclampsia research debate",
    "art": "bone",
    "window": "Throughout pregnancy; baseline dietary intake affects interpretation",
    "summary": "Calcium is needed for skeletal health. Whether added calcium prevents pregnancy complications is a separate and evolving evidence question.",
    "question": "Is my calcium intake adequate, and which clinical guidance applies to my situation?",
    "sections": [
      {
        "title": "Adequacy",
        "body": "Dairy, fortified alternatives and other calcium-containing foods contribute to intake. Calcium participates in skeletal mineralization and muscle function.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Why reviews can disagree",
        "body": "The existing evidence archive includes the Cochrane calcium review and a later commentary about trial trustworthiness. Different inclusion decisions, baseline intake and study quality can change the pooled interpretation. An older summary is not a substitute for the current review.",
        "refs": [
          "CALC",
          "CALCC"
        ]
      },
      {
        "title": "Funding and uncertainty",
        "body": "The registry records WHO part-funding of the review and authors' prior-review involvement in the commentary. Those relationships are context, not proof of bias. Do not turn a disputed prevention result into an individual high-dose protocol.",
        "refs": [
          "CALC",
          "CALCC"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/bone-minerals",
        "Calcium, iron and vitamin D"
      ],
      [
        "mother/checkups/aspirin-prevention",
        "Separate evidence: aspirin for eligible risk groups"
      ]
    ]
  },
  "mother/nutrition/vitamin-d": {
    "title": "Vitamin D: adequacy, deficiency and outcome claims",
    "art": "bone",
    "window": "Throughout pregnancy; clinical status and intake matter",
    "summary": "Vitamin D supports calcium regulation, but universal extra doses for broad pregnancy outcomes are not established.",
    "question": "Do my diet, clinical circumstances or existing prenatal product warrant a discussion of vitamin D status?",
    "sections": [
      {
        "title": "Role and sources",
        "body": "Vitamin D supports calcium absorption and normal bone mineralization. Fatty fish and fortified foods can contribute, and skin can synthesize vitamin D in response to sunlight. Avoid equating intentional excess sun exposure with a treatment plan.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "How common is low intake?",
        "body": "ECHO estimated 20–38% below the average requirement including supplements, varying by assessment method. This is not the prevalence of low serum vitamin D. Sun exposure, metabolism and other factors influence status.",
        "refs": [
          "ECHO"
        ]
      },
      {
        "title": "Different evidence questions",
        "body": "Trials investigate specific outcomes including hypertensive disorders, gestational diabetes and birth outcomes. Review conclusions depend on eligible studies, certainty and baseline vitamin D status. Treating deficiency is distinct from routine high-dose supplementation.",
        "refs": [
          "VD"
        ]
      },
      {
        "title": "Safety and funding",
        "body": "The registry has not verified review-level funding and author ties. Unknown funding does not establish independence. Excess vitamin D can be harmful; do not extrapolate a study regimen to an individual.",
        "refs": [
          "VD",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/calcium",
        "Calcium"
      ],
      [
        "mother/nutrition/bone-minerals",
        "Mineral overview"
      ]
    ]
  },
  "mother/checkups/aspirin-prevention": {
    "title": "Low-dose aspirin: a risk-based preventive medication",
    "art": "heart",
    "window": "US guidance: start 12–28 weeks when indicated, preferably before 16 weeks",
    "summary": "This is a preventive medication for eligible risk groups, not a universal prenatal supplement.",
    "question": "Should my clinician assess whether I meet criteria for preventive aspirin?",
    "sections": [
      {
        "title": "What condition is being addressed?",
        "body": "Preeclampsia is a pregnancy-related hypertensive disorder that can affect multiple organs. ACOG and SMFM describe preventive aspirin for selected higher-risk patients; the decision depends on risk factors and contraindications.",
        "refs": [
          "ASP"
        ]
      },
      {
        "title": "The evidence",
        "body": "The USPSTF evidence review includes randomized comparisons in populations with different baseline risks. The review supports reduced preeclampsia-related outcomes in eligible populations; uncommon harms are harder to estimate precisely. Do not infer a universal benefit or dose from this finding.",
        "refs": [
          "ASPREV"
        ]
      },
      {
        "title": "Timing and exceptions",
        "body": "The guideline's initiation window is a reason to discuss eligibility early, not a reminder to start aspirin yourself. The FDA NSAID warning distinguishes clinician-directed low-dose aspirin for obstetric indications from other NSAID use. Do not stop a prescribed regimen without advice.",
        "refs": [
          "ASP",
          "NSAID"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/prenatal",
        "Prenatal care"
      ],
      [
        "mother/checkups/pain-medicines",
        "Pain medicines and NSAID safety"
      ]
    ]
  },
  "mother/checkups/pain-medicines": {
    "title": "Pain and fever medicines: why the active ingredient matters",
    "art": "checkups",
    "window": "Throughout pregnancy; FDA NSAID warning from around week 20",
    "summary": "Ibuprofen and other NSAIDs have gestational-age-specific risks. Do not assume an ordinary over-the-counter medicine is suitable.",
    "question": "Which ingredient is appropriate for the symptom, at my stage, considering my other medicines?",
    "sections": [
      {
        "title": "NSAIDs and gestational timing",
        "body": "FDA warns about fetal kidney problems and reduced amniotic fluid with NSAID use around 20 weeks or later; after around 30 weeks there is an additional fetal ductus arteriosus concern. Avoid self-directed use from 20 weeks. Clinician-directed low-dose aspirin for an obstetric indication is a distinct exception.",
        "refs": [
          "NSAID",
          "IBU"
        ]
      },
      {
        "title": "Acetaminophen and observational evidence",
        "body": "Acetaminophen is a different medicine. A large Swedish observational study reported that associations with autism, ADHD and intellectual disability were not present in its sibling-control analysis. This design addresses some shared familial confounding, not all sources of uncertainty. Fever, pain and the underlying reason for medicine use can themselves be relevant.",
        "refs": [
          "ACET",
          "ACETSIB"
        ]
      },
      {
        "title": "Practical safety",
        "body": "Check active ingredients in combination cold and pain products to avoid unintended duplication. Discuss persistent symptoms or medication choices with a pharmacist or clinician; seek prompt assessment for concerning fever, severe pain or urgent symptoms. No personal dosing instructions are provided.",
        "refs": [
          "ACET",
          "NSAID",
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/medicines",
        "Medication review"
      ],
      [
        "mother/checkups/aspirin-prevention",
        "Risk-based aspirin prevention"
      ]
    ]
  },
  "mother/digestion/b6-doxylamine": {
    "title": "Vitamin B6 and doxylamine for nausea",
    "art": "digestion",
    "window": "When nausea occurs; clinical severity and individual safety matter",
    "summary": "Vitamin B6 as a nutrient and B6 used for nausea are different questions. Doxylamine is a medicine.",
    "question": "Which nausea treatments are appropriate given my symptoms and other products?",
    "sections": [
      {
        "title": "The guidance",
        "body": "ACOG describes pyridoxine (vitamin B6), with or without doxylamine, as a first-line pharmacologic option for nausea and vomiting of pregnancy. The treatment decision depends on symptoms and circumstances.",
        "refs": [
          "NAUSEA",
          "DOX"
        ]
      },
      {
        "title": "Do not confuse products",
        "body": "Some sleep products contain doxylamine and others have different ingredients. Doxylamine can cause drowsiness; other sedating products can add to this. Excess supplemental B6 can damage nerves. A prenatal vitamin is not a self-directed nausea regimen.",
        "refs": [
          "DOX",
          "NUTR"
        ]
      },
      {
        "title": "When care is needed",
        "body": "Persistent vomiting, inability to keep liquids down or signs of dehydration need prompt clinical assessment. Traditional remedies and prescription options have distinct evidence and safety considerations.",
        "refs": [
          "NAUSEA",
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/digestion/nausea",
        "Ginger and nausea research"
      ],
      [
        "mother/nutrition/supplements",
        "Check combined products"
      ]
    ]
  },
  "mother/nutrition/emerging-supplements": {
    "title": "Emerging supplements: creatine, herbs and concentrated products",
    "art": "nutrition",
    "window": "Research only; not a pregnancy supplementation schedule",
    "summary": "Promising mechanisms and early safety studies do not establish routine pregnancy use.",
    "question": "Is this product supported by human pregnancy outcome evidence, and what is known about its safety?",
    "sections": [
      {
        "title": "Creatine as an example",
        "body": "A recent open-label dose-escalation study investigated creatine during pregnancy. This design is not a definitive randomized efficacy trial and does not establish prevention of neurological injury or improved birth outcomes. The archive has not verified its funding or full conflicts.",
        "refs": [
          "CREAT"
        ]
      },
      {
        "title": "Herbal and concentrated products",
        "body": "Food use, medicinal extracts and multi-ingredient supplements are different exposures. MotherToBaby notes the limited pregnancy data for many herbal products; ingredient variability, contamination and interactions matter.",
        "refs": [
          "HERBAL"
        ]
      },
      {
        "title": "Quality and research",
        "body": "The US GAO found label discrepancies in tested prenatal products. Product testing is not evidence of clinical efficacy; independently verified content, trial population, outcome and safety are separate questions. Do not self-start an experimental regimen.",
        "refs": [
          "GAO",
          "HERBAL"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/supplements",
        "Prenatal quality evidence"
      ],
      [
        "/research/EV-ART-022",
        "Traditional and emerging birth research"
      ]
    ]
  },
  "mother/checkups/pregnancy-dating": {
    "title": "Why pregnancy dating begins before conception",
    "art": "calendar",
    "window": "Gestational weeks 1–2 are a dating convention",
    "sections": [
      {
        "title": "Two ways of describing time",
        "body": "Gestational age commonly starts from the first day of the last menstrual period, rather than the day of fertilization. This makes weeks 1–2 a preparation and dating period in a typical cycle, not evidence that an embryo already exists.",
        "refs": [
          "MED",
          "FETUS"
        ]
      },
      {
        "title": "Cycles and dates differ",
        "body": "Ovulation and conception timing vary. Clinical dating may be updated using relevant information, including ultrasound. A calendar estimate cannot establish whether someone has conceived.",
        "refs": [
          "MED",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/conception-timing",
        "How ovulation and fertilization relate"
      ],
      [
        "/research/EV-ART-001",
        "Preparing for pregnancy"
      ],
      [
        "mother/nutrition/folic-acid",
        "Folic acid before conception"
      ]
    ]
  },
  "baby/growth/conception-timing": {
    "title": "Ovulation and the possibility of conception",
    "art": "calendar",
    "window": "Weeks 1–2 are a dating reference; ovulation varies",
    "sections": [
      {
        "title": "Preparation rather than fetal growth",
        "body": "Ovulation is release of an egg from an ovary. Pregnancy dating uses a menstrual-cycle reference; no fetus is developing during the typical first two gestational weeks. This page therefore does not show fetal size.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Avoid false precision",
        "body": "The timing of ovulation and fertilization is not identical in every cycle. This overview is not a fertility prediction, ovulation test or guarantee of conception.",
        "refs": [
          "MED",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/pregnancy-dating",
        "Pregnancy dating"
      ],
      [
        "baby/growth/fertilization",
        "What fertilization means"
      ],
      [
        "/research/EV-ART-003",
        "Fathers' health and work exposures"
      ]
    ]
  },
  "mother/nutrition/folic-acid": {
    "title": "Why folic acid matters before and early in pregnancy",
    "art": "nutrition",
    "window": "Preconception and early pregnancy",
    "sections": [
      {
        "title": "An established preventive role",
        "body": "CDC describes folic acid as important before and during early pregnancy because neural tube development occurs early, often before a pregnancy is recognized. Folic acid reduces the risk of certain neural tube defects; it does not eliminate all risk.",
        "refs": [
          "FOLATE",
          "PLAN"
        ]
      },
      {
        "title": "Different questions need different evidence",
        "body": "Food folate, fortified foods and folic acid supplements contribute to nutrition in different ways. Individual risk factors and medicines can change clinical advice. This research-only draft does not prescribe a personal amount or replace the existing reviewed intake record.",
        "refs": [
          "NUTR",
          "FOLATE"
        ]
      }
    ],
    "related": [
      [
        "/research/EV-ART-002",
        "Full folic acid evidence"
      ],
      [
        "baby/growth/neural-tube",
        "Early nervous-system development"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal product quality"
      ]
    ]
  },
  "mother/checkups/medicines": {
    "title": "Reviewing medicines and exposures",
    "art": "checkups",
    "window": "Before conception and throughout pregnancy",
    "sections": [
      {
        "title": "A useful discussion before pregnancy",
        "body": "CDC planning guidance highlights health conditions, medicines and exposures. Bring prescription drugs, nonprescription products and supplements to a clinician for review; some need adjustment and others are important to continue.",
        "refs": [
          "PLAN"
        ]
      },
      {
        "title": "Do not make abrupt changes",
        "body": "A substance's safety depends on dose, timing, indication and alternatives. Do not stop necessary medication or start a detox or supplement solely because of this educational reading.",
        "refs": [
          "PLAN",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/home-work",
        "Home and work exposures"
      ],
      [
        "/research/EV-ART-001",
        "Pregnancy preparation"
      ],
      [
        "mother/nutrition/supplements",
        "Supplement evidence"
      ]
    ]
  },
  "baby/growth/fertilization": {
    "title": "From egg and sperm to the first dividing cell",
    "art": "cells",
    "window": "Approximate gestational week 3",
    "sections": [
      {
        "title": "The beginning of a cell lineage",
        "body": "When an egg and sperm unite, the resulting cell is called a zygote. It contains genetic material from both parents. Repeated division produces a growing group of cells.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Dating is not confirmation",
        "body": "This developmental description is a general reference. It does not establish that fertilization occurred in a specific cycle or predict implantation or pregnancy outcome.",
        "refs": [
          "MED",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/cell-division",
        "Early cell division"
      ],
      [
        "mother/checkups/pregnancy-dating",
        "Gestational dating"
      ]
    ]
  },
  "baby/growth/cell-division": {
    "title": "How early cells divide and organize",
    "art": "cells",
    "window": "Around week 3, before implantation",
    "sections": [
      {
        "title": "From division to organization",
        "body": "The fertilized cell divides as it travels toward the uterus, eventually forming a blastocyst with an inner cell group and an outer layer. The groups contribute to different developing structures.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "An educational sequence",
        "body": "Cell counts and timing vary. A concept diagram is not a laboratory embryo assessment or evidence that a particular pregnancy has begun.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/fertilization",
        "Fertilization"
      ],
      [
        "baby/placenta/implantation",
        "Implantation"
      ]
    ]
  },
  "baby/placenta/implantation": {
    "title": "How implantation begins",
    "art": "cells",
    "window": "Approximate gestational week 4",
    "sections": [
      {
        "title": "Connection to the uterine lining",
        "body": "As the blastocyst reaches the uterus, it can attach to and embed in the lining. Developing outer cells contribute to the structures that later support exchange.",
        "refs": [
          "MED",
          "N4"
        ]
      },
      {
        "title": "Symptoms cannot establish implantation",
        "body": "Spotting or cramping is not proof that implantation occurred. Bleeding can have different causes, including pregnancy loss or ectopic pregnancy. Contact a clinician for bleeding or pain; severe symptoms need urgent assessment.",
        "refs": [
          "BLEED",
          "ECTOPIC"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/early-placenta",
        "Developing placental structures"
      ],
      [
        "mother/checkups/early-bleeding",
        "Bleeding and pain"
      ]
    ]
  },
  "mother/checkups/pregnancy-test": {
    "title": "What early pregnancy tests can and cannot tell us",
    "art": "checkups",
    "window": "Around weeks 4–5; test timing varies",
    "sections": [
      {
        "title": "A hormone-based test",
        "body": "Pregnancy tests detect hCG. Results depend on timing, test use and individual circumstances. Symptoms alone cannot confirm a pregnancy, and a test cannot show where the pregnancy is developing.",
        "refs": [
          "N4",
          "N5",
          "ECTOPIC"
        ]
      },
      {
        "title": "Follow-up and uncertainty",
        "body": "Follow the test instructions and discuss uncertainty or concerning symptoms with a clinician. Severe abdominal pain, fainting or heavy bleeding need urgent assessment regardless of a home test result.",
        "refs": [
          "ECTOPIC",
          "BLEED"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/early-care",
        "Early prenatal care"
      ],
      [
        "mother/checkups/early-bleeding",
        "Bleeding and pain"
      ]
    ]
  },
  "mother/checkups/early-bleeding": {
    "title": "Bleeding and pain in early pregnancy",
    "art": "uterus",
    "window": "Early pregnancy safety; do not use symptoms to self-diagnose",
    "sections": [
      {
        "title": "Several possible causes",
        "body": "Bleeding and pain can arise for different reasons. ACOG discusses early pregnancy loss, infection and ectopic pregnancy among possible explanations. An app cannot identify the cause.",
        "refs": [
          "BLEED"
        ]
      },
      {
        "title": "When to seek help",
        "body": "Contact the maternity or medical care team for bleeding or concerning pain. Severe pain, shoulder pain, fainting, heavy bleeding or signs of shock can indicate an emergency; seek emergency care. Do not assume bleeding is normal implantation.",
        "refs": [
          "BLEED",
          "ECTOPIC"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/urgent",
        "Urgent warning signs"
      ],
      [
        "mother/checkups/early-care",
        "Early prenatal care"
      ]
    ]
  },
  "mother/checkups/early-care": {
    "title": "Starting prenatal care",
    "art": "checkups",
    "window": "Early pregnancy; individual timing and care needs vary",
    "sections": [
      {
        "title": "Why the first conversation matters",
        "body": "An early care visit can include health history, medicines, pregnancy dating, symptoms and appropriate tests. Clinical circumstances determine timing and follow-up rather than a universal app schedule.",
        "refs": [
          "ROUTINE",
          "FETUS"
        ]
      },
      {
        "title": "Questions to bring",
        "body": "Discuss current medicines, prior health concerns, nutrition and available screening options. Genetic screening and diagnostic testing are distinct, and informed decisions are voluntary.",
        "refs": [
          "GENETIC",
          "GENETIC_CURRENT"
        ]
      },
      {
        "title": "Do not wait for urgent concerns",
        "body": "Bleeding, severe pain, fainting or inability to keep fluids down needs appropriate medical assessment before a routine appointment.",
        "refs": [
          "BLEED",
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/medicines",
        "Medicines and exposures"
      ],
      [
        "mother/checkups/genetic-screening",
        "Screening and diagnosis"
      ],
      [
        "mother/checkups/prenatal",
        "Prenatal visits"
      ]
    ]
  },
  "baby/growth/neural-tube": {
    "title": "The beginning of the brain and spinal cord",
    "art": "brain",
    "window": "Early embryonic development; around week 5",
    "sections": [
      {
        "title": "Early structures have long-term importance",
        "body": "During early embryonic development, the structures that become the brain and spinal cord are taking shape. Different cells begin specializing, and organs form over overlapping windows.",
        "refs": [
          "MED",
          "N5"
        ]
      },
      {
        "title": "The folic acid connection",
        "body": "CDC identifies folic acid as reducing the risk of some neural tube defects. This is a strong preventive evidence question, distinct from claims that extra nutrients improve cognition beyond adequate intake.",
        "refs": [
          "FOLATE"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/folic-acid",
        "Established folic acid evidence"
      ],
      [
        "baby/growth/early-brain",
        "Developing brain regions"
      ]
    ]
  },
  "baby/growth/early-heart": {
    "title": "How the earliest heart structures develop",
    "art": "heart",
    "window": "Weeks 5–7; timing and assessment vary",
    "sections": [
      {
        "title": "An organ taking shape",
        "body": "Early cardiac structures develop during the embryonic period. MedlinePlus describes ongoing development and rhythmic cardiac activity in the 6–7 week window. This is a developmental overview, not a statement that an individual pregnancy must show activity on a given date.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Clinical interpretation matters",
        "body": "Ultrasound findings depend on actual gestational age and examination context. No home monitor, symptom or illustration can establish viability or diagnose pregnancy loss.",
        "refs": [
          "FETUS",
          "ECTOPIC"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/neural-tube",
        "Other early structures"
      ],
      [
        "mother/checkups/early-care",
        "Early clinical assessment"
      ]
    ]
  },
  "baby/growth/early-gut": {
    "title": "How the early digestive tract forms",
    "art": "digestion",
    "window": "Around week 5; development continues",
    "sections": [
      {
        "title": "From early tissue to a complex system",
        "body": "MedlinePlus describes the beginning of the gastrointestinal tract during early organ formation. Tissue specialization and later changes in shape contribute to the developing organs.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Nourishment before birth",
        "body": "The developing embryo does not consume meals. Early supporting structures and later placental exchange are part of a different physiological environment.",
        "refs": [
          "N5",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/early-placenta",
        "Developing placental exchange"
      ],
      [
        "baby/digestion/swallowing",
        "Read ahead: swallowing"
      ]
    ]
  },
  "baby/movement/limb-buds": {
    "title": "The early beginnings of arms and legs",
    "art": "bone",
    "window": "Weeks 6–7",
    "sections": [
      {
        "title": "Small structures form before mature limbs",
        "body": "MedlinePlus describes arm and leg buds across the 6–7 week window. These tissues grow and change shape as muscles, skeletal structures and joints develop.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Development is gradual",
        "body": "An early limb bud is not a miniature mature arm or leg. Different illustrations may depict different stages; none establishes individual anatomy.",
        "refs": [
          "N6",
          "N7"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/early-extremities",
        "Hands and feet"
      ],
      [
        "baby/movement/early-bones",
        "Later skeletal development"
      ]
    ]
  },
  "baby/growth/early-brain": {
    "title": "Early brain regions and nervous-system development",
    "art": "brain",
    "window": "Weeks 6–7",
    "sections": [
      {
        "title": "Specialization over time",
        "body": "During this developmental window, MedlinePlus describes emerging brain regions and nerves. The nervous system continues developing across pregnancy and after birth.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Structure is not a cognitive outcome",
        "body": "Early biological development cannot be translated into an intelligence prediction. Nutrient adequacy and experimental cognitive enhancement are separate evidence questions.",
        "refs": [
          "NUTR",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/neural-tube",
        "Earlier nervous-system structures"
      ],
      [
        "mother/nutrition/brain-nutrients",
        "Nutrient roles and research"
      ]
    ]
  },
  "baby/senses/early-senses": {
    "title": "The earliest eye and ear structures",
    "art": "senses",
    "window": "Weeks 6–7; mature sensory function comes later",
    "sections": [
      {
        "title": "Structures before function",
        "body": "MedlinePlus describes the beginning of eye and ear formation across weeks 6–7. Small structures will undergo extensive changes before they support mature sensory functions.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Not yet a sensory training opportunity",
        "body": "An emerging organ is not evidence of mature hearing or vision. There is no weekly stimulus program or home sensory test implied by this description.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/eyes",
        "Read ahead: later eye development"
      ],
      [
        "baby/senses/hearing",
        "Read ahead: hearing"
      ]
    ]
  },
  "baby/movement/early-extremities": {
    "title": "Hands, feet and early joints",
    "art": "bone",
    "window": "Around weeks 8–9",
    "sections": [
      {
        "title": "From limb buds to more distinct structures",
        "body": "MedlinePlus describes development of hands and feet around week 8, with elbow and toe structures becoming more distinct by week 9. Development is overlapping and images are approximate.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Size and movement have limits as indicators",
        "body": "A weekly size comparison cannot show individual joint formation or movement. Clinical assessment is a separate process.",
        "refs": [
          "N8",
          "N9"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/limb-buds",
        "Earlier limb buds"
      ],
      [
        "baby/growth/early-nails",
        "Later nail development"
      ]
    ]
  },
  "baby/growth/early-lungs": {
    "title": "The early respiratory structures",
    "art": "lungs",
    "window": "Around week 8; later lung development spans pregnancy",
    "sections": [
      {
        "title": "Before a mature airway tree",
        "body": "MedlinePlus describes early lung development at this stage. Structures grow and branch across subsequent developmental windows, long before independent breathing is possible.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "The later connections",
        "body": "Later articles explain lower airways, air sacs, surfactant and breathing movements. Early development is not a viability prediction.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/airway-branches",
        "Read ahead: branching airways"
      ],
      [
        "baby/growth/surfactant",
        "Read ahead: surfactant"
      ]
    ]
  },
  "baby/placenta/early-placenta": {
    "title": "The developing placenta and supporting structures",
    "art": "placenta",
    "window": "Early pregnancy; the exchange system develops over time",
    "sections": [
      {
        "title": "Building the interface",
        "body": "Outer cells associated with the early embryo contribute to the developing placenta. The NHS week-8 and week-12 descriptions discuss changes in supporting structures and the developing exchange role.",
        "refs": [
          "N4",
          "N8",
          "N12"
        ]
      },
      {
        "title": "Separate circulations",
        "body": "As placental exchange develops, it supports transfer of oxygen and nutrients. This general explanation does not establish the timing or function of the placenta in an individual pregnancy.",
        "refs": [
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/implantation",
        "Implantation"
      ],
      [
        "baby/placenta/exchange",
        "Placental exchange"
      ],
      [
        "mother/checkups/home-work",
        "Exposure concerns"
      ]
    ]
  },
  "mother/digestion/bloating": {
    "title": "Why bloating and digestion may change",
    "art": "digestion",
    "window": "Early pregnancy; symptoms vary",
    "sections": [
      {
        "title": "A changing digestive system",
        "body": "NHS week 10 describes digestive discomfort associated with pregnancy-related hormonal changes. Bloating and reflux are different symptoms and may have different triggers.",
        "refs": [
          "N10"
        ]
      },
      {
        "title": "Comfort versus treatment",
        "body": "Simple changes to meal size or timing may be useful for some people. Persistent, severe or concerning symptoms need assessment; do not treat serious pain as ordinary bloating.",
        "refs": [
          "N10",
          "BLEED"
        ]
      }
    ],
    "related": [
      [
        "mother/digestion/heartburn",
        "Reflux and heartburn"
      ],
      [
        "mother/digestion/nausea",
        "Nausea evidence"
      ],
      [
        "mother/digestion/gut-health",
        "Gut-health research"
      ]
    ]
  },
  "baby/digestion/early-intestines": {
    "title": "How the intestines change shape",
    "art": "digestion",
    "window": "Around week 10 in the developmental reference",
    "sections": [
      {
        "title": "Forming an organ system",
        "body": "MedlinePlus describes intestinal rotation in the week-10 window. The digestive tract is developing in a changing body rather than functioning as a mature postnatal digestive system.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "A developmental reference is not a scan",
        "body": "The exact sequence and individual anatomy are matters for clinical assessment. A diagram cannot diagnose a structural condition.",
        "refs": [
          "MED",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/early-gut",
        "Earlier digestive structures"
      ],
      [
        "baby/digestion/swallowing",
        "Later swallowing"
      ]
    ]
  },
  "baby/growth/early-face": {
    "title": "How facial structures become more distinct",
    "art": "senses",
    "window": "Around weeks 9–10; maturation continues",
    "sections": [
      {
        "title": "Overlapping structural changes",
        "body": "The NHS week-9 and week-10 descriptions discuss developing eyes, mouth and outer facial structures. The head is proportionally large at this stage.",
        "refs": [
          "N9",
          "N10"
        ]
      },
      {
        "title": "An illustration is representative",
        "body": "Different structures mature at different rates. An educational face illustration cannot assess individual anatomy, predict appearance or establish sensory function.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/early-senses",
        "Earlier eye and ear structures"
      ],
      [
        "baby/growth/tooth-buds",
        "Developing tooth buds"
      ]
    ]
  },
  "mother/checkups/genetic-screening": {
    "title": "Prenatal genetic screening and diagnostic testing",
    "art": "checkups",
    "window": "Early pregnancy discussion; choices and timing are individualized",
    "sections": [
      {
        "title": "Screening is not diagnosis",
        "body": "Screening estimates the likelihood of selected conditions; diagnostic testing addresses a different question. ACOG guidance describes screening and diagnostic options and their limitations.",
        "refs": [
          "GENETIC",
          "GENETIC_CURRENT"
        ]
      },
      {
        "title": "Informed choice",
        "body": "Discuss benefits, limitations, possible uncertain results and available follow-up. A patient can accept or decline testing after counseling. The app does not rank choices, interpret a result or guarantee that a negative screen excludes all conditions.",
        "refs": [
          "GENETIC_CURRENT"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/early-care",
        "Early prenatal care"
      ],
      [
        "mother/checkups/anatomy-scan",
        "Later anatomy assessment"
      ]
    ]
  },
  "baby/growth/early-proportions": {
    "title": "Changing proportions in early development",
    "art": "growth",
    "window": "Weeks 11–14",
    "sections": [
      {
        "title": "Different tissues grow at different rates",
        "body": "MedlinePlus describes a relatively large head, developing face and lengthening limbs within this window. Proportions continue changing as organs and tissues grow.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Use size comparisons cautiously",
        "body": "The early NHS reference uses a head-to-bottom measurement or approximate length. Later references use head-to-heel length; they cannot be treated as a continuous clinical growth chart.",
        "refs": [
          "N11",
          "N12",
          "N13"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/screening",
        "Clinical growth assessment"
      ],
      [
        "baby/growth/early-nails",
        "Developing nails"
      ]
    ]
  },
  "mother/body/second-trimester": {
    "title": "Entering the second trimester",
    "art": "body",
    "window": "Weeks 14–27 in US trimester convention",
    "sections": [
      {
        "title": "A transition, not a switch",
        "body": "The second trimester is a useful way to organize learning. Nausea and fatigue may ease, but symptoms can continue or change. A week number is not a deadline to feel better.",
        "refs": [
          "N14",
          "FETUS"
        ]
      },
      {
        "title": "Keep care and nutrition individualized",
        "body": "Changes in appetite do not prescribe a fixed calorie intake or a new supplement regimen. Review existing food patterns, prenatal products and care questions with the maternity team.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "What to explore now",
        "body": "Read about pelvic support, food safety, movement and the growing fetus. Serious symptoms still need assessment, even if a general article describes them as possible pregnancy experiences.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/food",
        "Food and prenatal nutrition"
      ],
      [
        "mother/body/pelvic-floor",
        "Pelvic floor function"
      ],
      [
        "mother/digestion/nausea",
        "Nausea evidence"
      ]
    ]
  },
  "baby/growth/tooth-buds": {
    "title": "The first developing tooth structures",
    "art": "bone",
    "window": "Weeks 11–14; development continues",
    "sections": [
      {
        "title": "Before a tooth erupts",
        "body": "MedlinePlus describes tooth buds forming during weeks 11–14. The tissue that eventually forms teeth develops long before the first tooth is visible after birth.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Development is not eruption",
        "body": "Later teeth and jaw structures continue forming. This does not establish a precise future teething date or a special supplement requirement.",
        "refs": [
          "MED",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/bone-maturation",
        "Skeletal maturation"
      ],
      [
        "mother/nutrition/bone-minerals",
        "Maternal nutrient roles"
      ]
    ]
  },
  "baby/growth/liver-blood": {
    "title": "Blood formation in the developing liver",
    "art": "blood",
    "window": "Weeks 11–14; sites change across gestation",
    "sections": [
      {
        "title": "Different organs contribute",
        "body": "MedlinePlus describes fetal blood-cell formation in the liver during weeks 11–14. Later, marrow becomes a site of blood-cell production. These are overlapping biological processes rather than a sudden switch.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "A connection with maternal nutrition",
        "body": "Iron participates in hemoglobin formation. The developmental window does not establish a new maternal dose. Adequacy and individual clinical status matter.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/blood",
        "Later marrow development"
      ],
      [
        "mother/nutrition/minerals",
        "Maternal mineral evidence"
      ]
    ]
  },
  "baby/movement/early-bones": {
    "title": "How early skeletal structures develop",
    "art": "bone",
    "window": "Weeks 15–18",
    "sections": [
      {
        "title": "Forming a framework",
        "body": "Muscles and bones continue developing together across this period. Early skeletal structures are not equivalent to the mature skeleton after birth.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "What nutrition can and cannot establish",
        "body": "Calcium and vitamin D have physiological roles, but additional intake above adequate amounts cannot be assumed to improve an individual fetus's skeletal development.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/muscles",
        "Muscle development"
      ],
      [
        "mother/nutrition/bone-minerals",
        "Mineral nutrition"
      ]
    ]
  },
  "baby/movement/early-facial-movement": {
    "title": "Early facial and limb movements",
    "art": "movement",
    "window": "Around week 16; development continues",
    "sections": [
      {
        "title": "Movement is developing",
        "body": "The NHS describes early facial movements and changes in limb motion around this time. The nervous system and muscles mature together; these movements are not reliable indicators of emotional state.",
        "refs": [
          "N16"
        ]
      },
      {
        "title": "Movement versus perception",
        "body": "A parent may not yet feel movements. Timing varies, and feeling or not feeling a particular movement is not a developmental test. Discuss concerns with the maternity team.",
        "refs": [
          "MED",
          "N16"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/muscles",
        "Developing muscles"
      ],
      [
        "mother/movement/baby-movement",
        "Feeling movements"
      ]
    ]
  },
  "baby/digestion/sucking": {
    "title": "Sucking movements before birth",
    "art": "digestion",
    "window": "Weeks 15–18",
    "sections": [
      {
        "title": "Early oral movement",
        "body": "MedlinePlus describes sucking movements as muscles and bones develop during this window. These movements reflect changing coordination, not a baby feeding as they would after delivery.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "A different route for nutrition",
        "body": "The placenta supports fetal nourishment before birth. Later oral coordination is one part of feeding development, but does not predict an individual newborn's feeding success.",
        "refs": [
          "MED",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/digestion/swallowing",
        "Swallowing before birth"
      ],
      [
        "baby/placenta/exchange",
        "Placental nourishment"
      ],
      [
        "mother/body/feeding-preparation",
        "Read ahead: feeding choices"
      ]
    ]
  },
  "baby/senses/early-touch": {
    "title": "Developing sensory and motor connections",
    "art": "senses",
    "window": "Around week 18; multiple systems mature together",
    "sections": [
      {
        "title": "Senses and movement overlap",
        "body": "The NHS week-18 guide describes developing hearing, sensation, swallowing and sucking. These processes overlap, and the presence of a reflex does not demonstrate mature sensory function.",
        "refs": [
          "N18"
        ]
      },
      {
        "title": "No need for a training schedule",
        "body": "A measured response in an experiment is not proof of improved intelligence or a reason to stimulate a fetus. Ordinary family interaction need not become a performance goal.",
        "refs": [
          "SOUND",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/hearing",
        "Hearing development"
      ],
      [
        "baby/senses/voice-music",
        "Sound research"
      ],
      [
        "baby/digestion/sucking",
        "Sucking movements"
      ]
    ]
  },
  "baby/growth/early-nails": {
    "title": "Developing nails and fingertips",
    "art": "skin",
    "window": "Weeks 11–14 and continuing maturation",
    "sections": [
      {
        "title": "Small structures develop over time",
        "body": "MedlinePlus describes the appearance of nails in the 11–14 week period. NHS week 17 also discusses developing fingernails. Different descriptions can refer to different aspects of the same ongoing process.",
        "refs": [
          "MED",
          "N17"
        ]
      },
      {
        "title": "Not a precise age marker",
        "body": "An educational illustration of a hand cannot establish gestational age or individual developmental status. Nail growth continues before and after birth.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/skin/skin-development",
        "Developing skin"
      ],
      [
        "baby/movement/early-bones",
        "Early skeletal structures"
      ]
    ]
  },
  "mother/checkups/rsv": {
    "title": "Protecting newborns from severe RSV",
    "art": "antibodies",
    "window": "US CDC guidance: 32–36 weeks, seasonally; individual eligibility matters",
    "sections": [
      {
        "title": "Two approaches",
        "body": "CDC describes maternal vaccination and preventive antibodies administered to eligible infants as different approaches to reducing severe respiratory syncytial virus disease. Most infants do not need both approaches.",
        "refs": [
          "RSV"
        ]
      },
      {
        "title": "The window is not a universal task",
        "body": "In most of the continental US, maternal vaccination is offered in the specified gestational window during September–January. Prior vaccination, geography and infant circumstances may change the plan. This is a description of guidance, not an automated appointment or personal recommendation.",
        "refs": [
          "RSV"
        ]
      },
      {
        "title": "Benefits, harms and evidence",
        "body": "The original vaccine trials identified a numerical preterm-birth imbalance; subsequent surveillance has provided additional safety evidence. These are distinct evidence designs and require appraisal of methods, uncertainty and commercial involvement. No new comparative efficacy chart is authorized here.",
        "refs": [
          "RSVSAFE"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/antibody-transfer",
        "Placental antibody transfer"
      ],
      [
        "mother/checkups/tdap",
        "Pertussis prevention"
      ],
      [
        "/research/EV-ART-050",
        "Infant preventive care"
      ]
    ]
  },
  "baby/growth/temperature": {
    "title": "Fat stores and temperature regulation",
    "art": "fat",
    "window": "Late gestation; source describes 31–37 windows",
    "sections": [
      {
        "title": "Why body composition changes",
        "body": "MedlinePlus describes increasing fat stores across weeks 31–34 and changes in skin appearance across weeks 35–37. The NHS connects fat accumulation with maintaining temperature after birth.",
        "refs": [
          "MED",
          "N32",
          "N35"
        ]
      },
      {
        "title": "Before and after birth are different",
        "body": "The newborn moves into a different thermal environment after delivery. Body composition is only one part of that transition; a weekly fruit illustration cannot predict an infant's ability to regulate temperature.",
        "refs": [
          "N35",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/fat-stores",
        "Earlier fat accumulation"
      ],
      [
        "/research/EV-ART-023",
        "Newborn transition"
      ]
    ]
  },
  "baby/movement/skull": {
    "title": "Why the developing skull remains flexible",
    "art": "bone",
    "window": "Late pregnancy; NHS week 33 highlights skull flexibility",
    "sections": [
      {
        "title": "A developing protective structure",
        "body": "The skull bones and spaces between them allow continued growth and some flexibility. NHS week 33 distinguishes skull flexibility from ongoing hardening of other bones.",
        "refs": [
          "N33"
        ]
      },
      {
        "title": "Birth and later development",
        "body": "Flexibility can help during passage through the birth canal. It does not establish a particular birth outcome, and an illustration is not an assessment of head shape or individual anatomy.",
        "refs": [
          "N33",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/bone-maturation",
        "Bone maturation"
      ],
      [
        "baby/growth/screening",
        "Clinical growth assessment"
      ]
    ]
  },
  "mother/checkups/car-seat": {
    "title": "Preparing safe transport after birth",
    "art": "checkups",
    "window": "Read ahead · before the newborn travels",
    "sections": [
      {
        "title": "A practical preparation topic",
        "body": "NHS week 33 highlights choosing and understanding a car seat before leaving the birth setting. Use the appropriate rear-facing infant restraint and manufacturer instructions; local safety rules and fit matter.",
        "refs": [
          "N33"
        ]
      },
      {
        "title": "Separate product choice from safe use",
        "body": "Price and marketing are not evidence of correct installation or safety for a particular child. Obtain fitting support from a qualified local child passenger safety resource. No product ranking or universal fit claim is made here.",
        "refs": [
          "N33"
        ]
      }
    ],
    "related": [
      [
        "mother/body/postpartum-planning",
        "Postpartum planning"
      ],
      [
        "mother/checkups/sleep-preparation",
        "Safe sleep preparation"
      ]
    ]
  },
  "mother/body/engagement": {
    "title": "What it means when the baby moves lower",
    "art": "body",
    "window": "Late pregnancy; timing varies",
    "sections": [
      {
        "title": "A possible change in position",
        "body": "NHS week 34 describes descent toward the pelvis, sometimes called lightening, which can change pressure on the abdomen and bladder. It is not a reliable countdown to birth.",
        "refs": [
          "N34"
        ]
      },
      {
        "title": "Symptoms still require assessment",
        "body": "Breathing difficulty, chest pain, bleeding or changed usual fetal movements should not be attributed to position without assessment. The care team can assess position when appropriate.",
        "refs": [
          "URG",
          "N34"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/growth-position",
        "Growth and position assessment"
      ],
      [
        "mother/body/rib-comfort",
        "Breathing and rib comfort"
      ]
    ]
  },
  "baby/growth/flexed-position": {
    "title": "How the baby fits in the uterus",
    "art": "movement",
    "window": "Late pregnancy; NHS week 34 describes a flexed posture",
    "sections": [
      {
        "title": "A changing physical environment",
        "body": "As the baby grows, the available space changes. NHS week 34 describes a curled posture with legs bent. This is a representative description, not a scan of an individual baby.",
        "refs": [
          "N34"
        ]
      },
      {
        "title": "Movement remains important",
        "body": "Less space is not a reason to dismiss a reduction or change in the usual movement pattern. Contact the maternity team immediately for such a change.",
        "refs": [
          "URG",
          "N34"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/patterns",
        "Movement patterns"
      ],
      [
        "mother/checkups/growth-position",
        "Clinical assessment"
      ]
    ]
  },
  "mother/checkups/gbs": {
    "title": "Group B strep and newborn protection",
    "art": "checkups",
    "window": "US ACOG clinical guidance: routine screen 36 0/7–37 6/7 weeks; exceptions apply",
    "sections": [
      {
        "title": "Colonization is different from illness",
        "body": "Group B streptococcus can be present without symptoms in adults, but can cause serious early-onset illness in a newborn. US guidance uses screening and, when indicated, antibiotics during labor to reduce risk.",
        "refs": [
          "GBS"
        ]
      },
      {
        "title": "Timing and exceptions",
        "body": "ACOG's clinical guidance describes the screening range and exceptions, including some prior or current clinical findings. The care team interprets results and chooses care; there is no home testing or antibiotic protocol here.",
        "refs": [
          "GBS"
        ]
      },
      {
        "title": "Evidence and uncertainty",
        "body": "Clinical recommendations combine screening accuracy, clinical outcomes and harms. This is not a single randomized comparison; the underlying evidence, conflicts and applicability require separate review before quantitative claims are used.",
        "refs": [
          "GBS"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/prenatal",
        "Prenatal assessment"
      ],
      [
        "/research/EV-ART-023",
        "Newborn clinical care"
      ]
    ]
  },
  "baby/growth/sleep-patterns": {
    "title": "Developing activity and sleep patterns",
    "art": "rest",
    "window": "Weeks 35–37",
    "sections": [
      {
        "title": "Patterns before birth",
        "body": "MedlinePlus describes more definite fetal sleep patterns in the 35–37 week window. These patterns are different from postnatal sleep and cannot be used to diagnose a baby's wellbeing.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Do not dismiss changed movement",
        "body": "If usual fetal movements slow, stop or change, contact maternity care immediately; do not assume the baby is simply asleep. Safe newborn sleep guidance is a separate topic for after birth.",
        "refs": [
          "URG",
          "AAP_SLEEP"
        ]
      }
    ],
    "related": [
      [
        "baby/movement/patterns",
        "Movement patterns"
      ],
      [
        "mother/checkups/sleep-preparation",
        "Newborn safe sleep"
      ]
    ]
  },
  "baby/digestion/feeding-readiness": {
    "title": "How oral coordination develops before birth",
    "art": "digestion",
    "window": "Late pregnancy; maturity varies",
    "sections": [
      {
        "title": "A developing set of functions",
        "body": "The NHS week-36 guide discusses sucking and digestion. Oral movement, swallowing, respiratory coordination and clinical circumstances all affect feeding after birth.",
        "refs": [
          "N36",
          "MED"
        ]
      },
      {
        "title": "No prediction of individual feeding success",
        "body": "Some newborns need feeding support. A weekly developmental description is not a readiness assessment or a guarantee of breastfeeding success.",
        "refs": [
          "N36"
        ]
      }
    ],
    "related": [
      [
        "baby/digestion/sucking",
        "Earlier sucking movements"
      ],
      [
        "/research/EV-ART-032",
        "Feeding choices"
      ],
      [
        "/research/EV-ART-034",
        "Feeding cues and milk supply"
      ]
    ]
  },
  "mother/body/breech-discussion": {
    "title": "When the baby is not head down",
    "art": "body",
    "window": "Late-pregnancy discussion; clinical assessment required",
    "sections": [
      {
        "title": "Position can change",
        "body": "NHS week 36 describes clinical discussion of external cephalic version when the baby is not head down. Eligibility depends on pregnancy and clinical circumstances.",
        "refs": [
          "N36"
        ]
      },
      {
        "title": "Not a home maneuver",
        "body": "External cephalic version is performed by trained clinicians with assessment and monitoring. Evidence for traditional or positional techniques is a separate question, and no home turning or induction procedure is provided.",
        "refs": [
          "N36"
        ]
      },
      {
        "title": "Questions to bring",
        "body": "Ask about position, appropriate options, risks and what follow-up is needed. Birth decisions remain individualized.",
        "refs": [
          "N36"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/growth-position",
        "Growth and position"
      ],
      [
        "/research/EV-ART-022",
        "Dates, herbs and breech evidence"
      ]
    ]
  },
  "baby/growth/term-context": {
    "title": "Early term is not the same as full term",
    "art": "growth",
    "window": "US term definitions",
    "sections": [
      {
        "title": "Why terminology matters",
        "body": "ACOG distinguishes early term (37 weeks through 38 weeks 6 days) from full term (39 weeks through 40 weeks 6 days). Later categories include late term and postterm. These terms describe gestational age, not an individual guarantee of maturity.",
        "refs": [
          "TERM"
        ]
      },
      {
        "title": "Development continues",
        "body": "Organs and tissues continue maturing around birth. The NHS uses a broader term label in some week pages; Everwell uses the US clinical definitions and does not treat delivery at 37 weeks as equivalent to 39 weeks.",
        "refs": [
          "TERM",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/maturation",
        "Organ maturation"
      ],
      [
        "mother/body/birth-preparation",
        "Birth preparation"
      ]
    ]
  },
  "mother/body/labor-signs": {
    "title": "Recognizing possible labor and when to call",
    "art": "uterus",
    "window": "Late pregnancy; individual instructions govern",
    "sections": [
      {
        "title": "Possible signs",
        "body": "Contractions, changes in discharge and fluid leakage can be associated with labor. A mucus show does not reliably predict when birth will happen. ACOG describes clinical assessment when symptoms are uncertain.",
        "refs": [
          "LABOR",
          "N39"
        ]
      },
      {
        "title": "Contact care for concerns",
        "body": "Follow your maternity team's contact instructions. Suspected fluid leakage, heavy bleeding, reduced usual movement, severe pain or other urgent symptoms need prompt assessment. Before 37 weeks, possible labor signs need prompt maternity contact.",
        "refs": [
          "LABOR",
          "URG",
          "PRETERM"
        ]
      }
    ],
    "related": [
      [
        "mother/body/contractions",
        "Practice contractions and preterm signs"
      ],
      [
        "mother/checkups/urgent",
        "Urgent maternal signs"
      ],
      [
        "mother/body/birth-preparation",
        "Birth support"
      ]
    ]
  },
  "baby/skin/lanugo-late": {
    "title": "Why the fine body hair thins",
    "art": "skin",
    "window": "Weeks 38–40; individual variation",
    "sections": [
      {
        "title": "An earlier covering changes",
        "body": "Fine fetal hair can thin near the end of pregnancy. The NHS week-38 guide notes that some babies are born with patches remaining. The amount does not establish an individual gestational age or health status.",
        "refs": [
          "MED",
          "N38"
        ]
      },
      {
        "title": "Skin continues developing",
        "body": "Lanugo and vernix are distinct. Their changing appearance is part of the transition toward newborn skin, not a reason to start a maternal cosmetic or nutrient intervention.",
        "refs": [
          "N38",
          "N39"
        ]
      }
    ],
    "related": [
      [
        "baby/skin/lanugo",
        "Earlier fine body hair"
      ],
      [
        "baby/skin/vernix-later",
        "Vernix changes"
      ],
      [
        "baby/skin/skin-development",
        "Skin structure"
      ]
    ]
  },
  "baby/digestion/meconium-birth": {
    "title": "Meconium and the transition to newborn care",
    "art": "digestion",
    "window": "Near birth; first stool normally follows delivery",
    "sections": [
      {
        "title": "A continuing intestinal process",
        "body": "Meconium accumulates before birth and normally becomes the newborn's first stool. NHS week 38 describes how this material develops from substances swallowed during fetal life.",
        "refs": [
          "N38"
        ]
      },
      {
        "title": "Clinical context matters",
        "body": "Meconium in amniotic fluid during labor may need clinical monitoring. This article cannot diagnose fetal distress, interpret fluid or replace care-team assessment.",
        "refs": [
          "N38"
        ]
      }
    ],
    "related": [
      [
        "baby/digestion/meconium",
        "Earlier intestinal development"
      ],
      [
        "/research/EV-ART-023",
        "Newborn transition"
      ]
    ]
  },
  "baby/growth/newborn-transition": {
    "title": "The transition from placenta to newborn life",
    "art": "placenta",
    "window": "Birth transition; individual support needs vary",
    "sections": [
      {
        "title": "Changing physiological roles",
        "body": "Before birth, the placenta supports exchange. After birth the lungs and other systems participate in a changing circulatory and respiratory environment. Transition is a process, not proof of independent function at a particular week.",
        "refs": [
          "FETUS",
          "MED"
        ]
      },
      {
        "title": "Clinical support is individualized",
        "body": "The newborn may need help with breathing, warmth or feeding. The clinical team assesses what care is necessary. A size analogy or term category cannot predict support requirements.",
        "refs": [
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/circulation",
        "Fetal circulation"
      ],
      [
        "/research/EV-ART-023",
        "Newborn clinical care"
      ],
      [
        "/research/EV-ART-036",
        "Safe sleep"
      ]
    ]
  },
  "mother/checkups/due-date": {
    "title": "Understanding the estimated due date",
    "art": "checkups",
    "window": "Around weeks 39–40 and beyond",
    "sections": [
      {
        "title": "An estimate, not a deadline",
        "body": "An estimated due date uses dating information and often ultrasound confirmation. ACOG distinguishes full term from late term and postterm; birth does not have to occur on the estimated date.",
        "refs": [
          "TERM",
          "DUE"
        ]
      },
      {
        "title": "Discuss the plan beyond the due date",
        "body": "Follow-up, testing and possible induction depend on clinical circumstances and gestational age. Discuss options, benefits, harms and preferences with your care team. This reading does not prescribe induction or provide home methods.",
        "refs": [
          "DUE"
        ]
      },
      {
        "title": "Do not wait for the due date if concerned",
        "body": "Changed usual movement, suspected fluid leakage, bleeding or serious symptoms require appropriate prompt assessment regardless of date.",
        "refs": [
          "URG",
          "LABOR"
        ]
      }
    ],
    "related": [
      [
        "mother/body/labor-signs",
        "Possible labor signs"
      ],
      [
        "mother/body/birth-preparation",
        "Birth preparation"
      ],
      [
        "/research/EV-ART-022",
        "Research on proposed birth interventions"
      ]
    ]
  },
  "baby/skin/late-nails": {
    "title": "Fingernails and skin near birth",
    "art": "skin",
    "window": "Weeks 38–40",
    "sections": [
      {
        "title": "Small visible changes",
        "body": "MedlinePlus notes that fingernails may extend beyond the fingertips near birth. Skin and other tissues continue changing. Individual appearance varies.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Appearance is not a maturity test",
        "body": "Nail length or skin covering alone does not establish readiness for birth or a clinical age estimate. After delivery, newborn care is individualized.",
        "refs": [
          "MED",
          "FETUS"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/early-nails",
        "Earlier nail development"
      ],
      [
        "baby/skin/lanugo-late",
        "Fine hair near birth"
      ],
      [
        "/research/EV-ART-023",
        "Newborn care"
      ]
    ]
  },
  "mother/movement/sleep-changes": {
    "title": "Sleep changes and vivid dreams",
    "art": "rest",
    "window": "Late pregnancy; NHS week 30 highlights sleep",
    "sections": [
      {
        "title": "Why sleep may feel different",
        "body": "Physical discomfort, worries and changing routines can make rest difficult. The NHS week-30 guide describes disturbed sleep and vivid dreams as possible experiences, not universal signs.",
        "refs": [
          "N30"
        ]
      },
      {
        "title": "Emotional support matters",
        "body": "Dreams are not predictions. Discuss persistent sleep disruption or anxiety with the maternity care team. Seek support for distress rather than treating an app reading as a diagnosis or a reason to start sleep medicines or supplements.",
        "refs": [
          "N30"
        ]
      }
    ],
    "related": [
      [
        "mother/movement/mood",
        "Mood and emotional wellbeing"
      ],
      [
        "mother/body/rib-comfort",
        "Rib comfort and breathing"
      ]
    ]
  },
  "mother/body/postpartum-planning": {
    "title": "Preparing support for the first weeks after birth",
    "art": "checkups",
    "window": "Optional preparation during late pregnancy",
    "sections": [
      {
        "title": "Plan for flexibility",
        "body": "Preparing for the newborn includes making space for rest, meals, practical help and access to professional support. These are optional learning topics, not prerequisites for a good birth or a fixed recovery schedule.",
        "refs": [
          "N30",
          "N31"
        ]
      },
      {
        "title": "Know how to access care",
        "body": "Identify how to contact the maternity team, newborn clinician and feeding support. Recovery differs by birth circumstances and individual needs. Serious maternal symptoms can occur after birth as well as during pregnancy.",
        "refs": [
          "URG"
        ]
      },
      {
        "title": "Keep choices revisable",
        "body": "Feeding and sleep arrangements can be adapted as circumstances change. The linked research articles explain these questions in more detail without prescribing a personal plan.",
        "refs": [
          "N31"
        ]
      }
    ],
    "related": [
      [
        "mother/body/feeding-preparation",
        "Feeding preparation"
      ],
      [
        "mother/checkups/sleep-preparation",
        "Newborn sleep preparation"
      ],
      [
        "/research/EV-ART-025",
        "Maternal recovery and follow-up"
      ],
      [
        "/research/EV-ART-034",
        "Feeding cues and milk supply"
      ]
    ]
  },
  "baby/senses/visual-focus": {
    "title": "How visual function develops",
    "art": "eye",
    "window": "Around week 30 in NHS educational guidance; maturation continues",
    "sections": [
      {
        "title": "Eyes and brain work together",
        "body": "The developing eye receives visual information and the nervous system processes it. The NHS week-30 guide describes emerging focusing ability, but development before birth is not the same as mature vision after birth.",
        "refs": [
          "N30"
        ]
      },
      {
        "title": "A reference is not a home test",
        "body": "The rate of visual maturation differs among babies. There is no need to use lights or stimuli to test or train fetal vision; an illustration cannot assess individual sensory function.",
        "refs": [
          "N30",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/eyes",
        "Earlier eye development"
      ],
      [
        "baby/senses/eyelids",
        "Eyelid movements"
      ],
      [
        "baby/growth/brain-growth",
        "Brain growth"
      ]
    ]
  },
  "mother/body/contractions": {
    "title": "Uterine tightening and signs of preterm labor",
    "art": "uterus",
    "window": "Around week 31; symptoms and timing vary",
    "sections": [
      {
        "title": "What practice contractions are",
        "body": "The uterus is muscular and may tighten intermittently during pregnancy. The NHS week-31 guide describes Braxton Hicks contractions. Not every tightening can safely be identified as a practice contraction at home.",
        "refs": [
          "N31"
        ]
      },
      {
        "title": "When not to wait",
        "body": "Before 37 weeks, regular or frequent tightening, pelvic pressure, new persistent backache, fluid leakage or bleeding can be signs of preterm labor. Contact the maternity team promptly for possible signs; do not wait for a scheduled appointment or use this article to rule out labor.",
        "refs": [
          "PRETERM",
          "URG"
        ]
      },
      {
        "title": "Clinical assessment is different",
        "body": "The care team can assess symptoms and cervical changes. This educational article does not give a home contraction threshold, self-treatment method or labor-induction instructions.",
        "refs": [
          "PRETERM"
        ]
      }
    ],
    "related": [
      [
        "mother/body/birth-preparation",
        "Birth preparation"
      ],
      [
        "mother/checkups/urgent",
        "Urgent maternal signs"
      ]
    ]
  },
  "mother/nutrition/bone-minerals": {
    "title": "Calcium, iron and vitamin D in pregnancy",
    "art": "mineral",
    "window": "Nutrition spotlight · no new weekly supplement schedule",
    "sections": [
      {
        "title": "Different nutrients, different roles",
        "body": "Calcium is important for skeletal structure, iron supports hemoglobin and oxygen transport, and vitamin D participates in calcium regulation. The fetal mineral-storage window is a developmental description, not proof that a new supplement is required at week 31.",
        "refs": [
          "NUTR",
          "MED"
        ]
      },
      {
        "title": "Food, total intake and supplementation",
        "body": "The NIH Office of Dietary Supplements distinguishes reference intake targets from supplement amounts and upper limits. Dietary patterns, prenatal products, medical conditions and clinical findings all affect individual choices.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "Read the research by outcome",
        "body": "Trials on calcium and hypertensive disorders, iron and anemia, and vitamin D status address different questions. Do not combine them into a claim that a mineral stack improves every pregnancy outcome. Existing numerical holds and uncertainty remain in place.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/minerals",
        "Existing mineral and vitamin evidence"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal product quality"
      ],
      [
        "baby/growth/mineral-stores",
        "Developing fetal mineral reserves"
      ]
    ]
  },
  "mother/checkups/growth-position": {
    "title": "What growth and position assessments tell us",
    "art": "checkups",
    "window": "Late pregnancy; individual assessment and timing vary",
    "sections": [
      {
        "title": "Different measurements answer different questions",
        "body": "Clinicians may assess uterine size using fundal height, feel the abdomen or use ultrasound when indicated. The NHS week-31 guide describes these assessments. They are not the same as the app's approximate length comparison.",
        "refs": [
          "N31"
        ]
      },
      {
        "title": "Position may still change",
        "body": "The baby's position can change during pregnancy. A head-up position at this stage does not automatically determine the mode of birth. Clinical assessment and individual circumstances guide decisions; no home turning maneuver is prescribed.",
        "refs": [
          "N31"
        ]
      },
      {
        "title": "Keep movement safety separate",
        "body": "A previous reassuring measurement does not rule out a new concern. If usual baby movements slow, stop or change, contact the maternity team immediately.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/screening",
        "Growth assessment"
      ],
      [
        "mother/body/birth-preparation",
        "Birth preferences"
      ],
      [
        "baby/movement/patterns",
        "Movement patterns"
      ]
    ]
  },
  "baby/growth/mineral-stores": {
    "title": "How mineral reserves develop",
    "art": "mineral",
    "window": "Weeks 31–34",
    "sections": [
      {
        "title": "Building reserves over time",
        "body": "MedlinePlus describes storage of iron, calcium and phosphorus within the 31–34 week window. Minerals participate in multiple physiological processes, including blood formation and skeletal development.",
        "refs": [
          "MED",
          "NUTR"
        ]
      },
      {
        "title": "Adequate nourishment versus extra doses",
        "body": "Maternal nutrient adequacy supports development, but the timing of fetal mineral accumulation does not establish a need to increase supplementation on a particular day. Individual requirements and existing intake need context.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/bone-minerals",
        "Maternal mineral nutrition"
      ],
      [
        "baby/movement/bone-maturation",
        "Skeletal maturation"
      ],
      [
        "baby/growth/blood",
        "Blood-cell development"
      ]
    ]
  },
  "baby/movement/bone-maturation": {
    "title": "Why developing bones are still soft",
    "art": "bone",
    "window": "Weeks 31–34",
    "sections": [
      {
        "title": "Form and maturity are different",
        "body": "MedlinePlus describes bones as formed but still soft during this developmental window. Skeletal tissues continue changing after birth as well. A diagram of bone structure is not an exact representation of fetal mineral density.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "The nutritional connection",
        "body": "Calcium and phosphorus contribute to bone mineral, while vitamin D helps regulate calcium metabolism. The evidence for nutrient adequacy should not be transformed into a promise that extra supplementation produces stronger bones.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/mineral-stores",
        "Mineral reserves"
      ],
      [
        "mother/nutrition/bone-minerals",
        "Calcium, iron and vitamin D"
      ],
      [
        "baby/movement/muscles",
        "Muscle development"
      ]
    ]
  },
  "baby/growth/breathing-practice": {
    "title": "Practice breathing before birth",
    "art": "lungs",
    "window": "Weeks 31–34; respiratory maturation continues",
    "sections": [
      {
        "title": "Movement without breathing air",
        "body": "MedlinePlus describes rhythmic breathing movements during weeks 31–34, even though the lungs are not fully mature. These movements occur in the fluid environment before birth, while placental exchange continues supplying oxygen.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "A developing system",
        "body": "Airway structure, respiratory movements and surfactant production are related but distinct aspects of development. None alone predicts whether an individual infant can breathe without support after birth.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/surfactant",
        "Surfactant and lung maturation"
      ],
      [
        "baby/growth/airway-branches",
        "Earlier airway development"
      ],
      [
        "baby/placenta/exchange",
        "Placental oxygen exchange"
      ]
    ]
  },
  "mother/body/third-trimester": {
    "title": "Entering the third trimester",
    "art": "body",
    "window": "Weeks 28–40 · editorial orientation",
    "sections": [
      {
        "title": "What changes about this stage?",
        "body": "As pregnancy progresses, physical comfort, energy and everyday movement can change. The beginning of the third trimester is a useful navigation boundary, not a day when everyone's symptoms or needs change at once.",
        "refs": [
          "N28",
          "N29"
        ]
      },
      {
        "title": "Preparation can be flexible",
        "body": "This stage provides opportunities to learn about birth preferences, feeding options, newborn sleep safety and postpartum support. These are topics to explore, not a checklist that determines whether a family is ready.",
        "refs": [
          "N28",
          "N29"
        ]
      },
      {
        "title": "Keep ongoing care separate",
        "body": "Routine prenatal assessment and any individualized care plan remain important. Severe headache, vision changes, chest pain, difficulty breathing, bleeding, leaking fluid or changed usual fetal movement require prompt assessment rather than waiting for a scheduled visit.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/body/birth-preparation",
        "Birth support and preferences"
      ],
      [
        "mother/body/feeding-preparation",
        "Feeding choices"
      ],
      [
        "mother/checkups/sleep-preparation",
        "Newborn sleep preparation"
      ],
      [
        "mother/checkups/prenatal",
        "Prenatal care"
      ]
    ]
  },
  "mother/checkups/tdap": {
    "title": "Whooping cough protection in pregnancy",
    "art": "antibodies",
    "window": "US CDC guidance: weeks 27–36, preferably early in that window",
    "sections": [
      {
        "title": "Why protection before birth matters",
        "body": "Pertussis, or whooping cough, can be particularly serious for infants before they are old enough to complete early vaccination. CDC explains that maternal vaccination induces antibodies that can pass to the baby through the placenta.",
        "refs": [
          "TDAP",
          "TDAP2"
        ]
      },
      {
        "title": "Why guidance uses a range",
        "body": "US CDC guidance recommends Tdap during each pregnancy, preferably early in weeks 27–36. If it was given earlier in the same pregnancy, CDC says it should not be repeated simply because this window begins. Individual care and contraindications belong with the clinician.",
        "refs": [
          "TDAP",
          "TDAP2"
        ]
      },
      {
        "title": "Distinguish guidance from trial evidence",
        "body": "The linked CDC materials summarize evidence used in public health recommendations, not a new independent trial or a guarantee of protection. Separate study designs, effectiveness estimates, adverse-event evidence and funding disclosures need appraisal before new quantitative comparisons are published.",
        "refs": [
          "TDAP2"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/antibody-transfer",
        "How antibodies reach the baby"
      ],
      [
        "mother/checkups/prenatal",
        "Questions for prenatal care"
      ],
      [
        "/research/EV-ART-050",
        "Infant vaccines and preventive visits"
      ]
    ]
  },
  "mother/checkups/sleep-preparation": {
    "title": "Preparing a safe newborn sleep space",
    "art": "crib",
    "window": "Read ahead · infant guidance applies after birth",
    "sections": [
      {
        "title": "The sleep surface matters",
        "body": "CDC and the American Academy of Pediatrics describe a firm, flat, non-inclined surface intended for infant sleep. Place the baby on their back for sleep and keep loose bedding, pillows and soft objects out of the sleep area.",
        "refs": [
          "SLEEP",
          "AAP_SLEEP"
        ]
      },
      {
        "title": "A simple environment, not a product ranking",
        "body": "A separate infant sleep space near caregivers is compatible with room sharing. Expensive products, positioners or monitoring devices are not substitutes for an appropriate sleep environment. This article is preparation, not a recommendation of a particular commercial product.",
        "refs": [
          "SLEEP",
          "AAP_SLEEP"
        ]
      },
      {
        "title": "What evidence is being used",
        "body": "Safe-sleep guidance draws on multiple evidence sources, including observational research and safety surveillance. The guidance is distinct from a randomized comparison of every product on the market; the original evidence and applicability remain subject to independent review.",
        "refs": [
          "AAP_SLEEP"
        ]
      }
    ],
    "related": [
      [
        "/research/EV-ART-036",
        "Full safe-sleep research"
      ],
      [
        "/research/EV-ART-023",
        "Newborn transition"
      ],
      [
        "/research/EV-ART-037",
        "Infant illness and emergency help"
      ]
    ]
  },
  "mother/movement/balance": {
    "title": "Why balance and posture may change",
    "art": "balance",
    "window": "Around week 29 · symptoms and timing vary",
    "sections": [
      {
        "title": "The changing center of gravity",
        "body": "The NHS week-29 guide describes feeling less coordinated as the center of gravity changes. Changing body proportions can influence movement and comfort, but this does not mean every pregnant person experiences the same difficulty.",
        "refs": [
          "N29"
        ]
      },
      {
        "title": "Keep activity and safety individualized",
        "body": "A familiar movement can feel different later in pregnancy. Explore movement and pelvic-health research alongside any clinician restrictions rather than treating a weekly article as a clearance for specific exercise. After a fall, contact the maternity team for advice; urgent symptoms require prompt assessment.",
        "refs": [
          "N29",
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/movement/activity",
        "Activity and strength"
      ],
      [
        "mother/movement/pain",
        "Back and pelvic comfort"
      ],
      [
        "mother/body/pelvic-floor",
        "Pelvic floor function"
      ]
    ]
  },
  "mother/body/feeding-preparation": {
    "title": "Thinking about feeding before birth",
    "art": "breast",
    "window": "Read ahead · no required feeding decision this week",
    "sections": [
      {
        "title": "Different ways to feed a baby",
        "body": "Breastfeeding, formula and mixed feeding are different ways families meet an infant's nutritional needs. Support, clinical circumstances and preferences influence what is feasible. Breast appearance or early leakage does not establish later feeding success.",
        "refs": [
          "N28",
          "N29"
        ]
      },
      {
        "title": "Preparation is learning, not pressure",
        "body": "Before birth, it can be useful to understand how feeding support is accessed and what safe formula preparation involves. A family can revisit choices after birth as circumstances change. This page does not prescribe antenatal expression, an infant feeding schedule or a supplement dose.",
        "refs": [
          "N28",
          "N29"
        ]
      }
    ],
    "related": [
      [
        "/research/EV-ART-032",
        "Breastfeeding, formula and mixed feeding"
      ],
      [
        "/research/EV-ART-033",
        "Safe formula preparation"
      ],
      [
        "/research/EV-ART-034",
        "Milk supply and feeding cues"
      ],
      [
        "mother/body/early-milk",
        "Breast changes and early milk"
      ]
    ]
  },
  "baby/growth/heart-development": {
    "title": "How the fetal heartbeat changes",
    "art": "heart",
    "window": "Around week 28 · representative physiology",
    "sections": [
      {
        "title": "A developing circulatory system",
        "body": "The fetal heart pumps blood through vessels that connect growing tissues with the placenta. The NHS week-28 page discusses how heart rate changes across gestation as development progresses. A reference value is not a prediction for an individual baby.",
        "refs": [
          "N28",
          "MED"
        ]
      },
      {
        "title": "Why a number is not enough",
        "body": "Clinical assessment considers the context of the pregnancy and the pattern of findings. A heartbeat heard at home does not establish wellbeing and must not be used to dismiss a change in usual movement. Contact the maternity team immediately if usual movements slow, stop or change.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/circulation",
        "Fetal circulation"
      ],
      [
        "baby/placenta/exchange",
        "Placental exchange"
      ],
      [
        "baby/movement/patterns",
        "Movement patterns"
      ]
    ]
  },
  "baby/placenta/antibody-transfer": {
    "title": "How maternal antibodies reach the baby",
    "art": "antibodies",
    "window": "Placental physiology · not a week-specific onset",
    "sections": [
      {
        "title": "Passive immune protection",
        "body": "Some maternal antibodies cross the placenta and can provide temporary protection to the infant after birth. CDC explains this mechanism in the context of maternal vaccination against pertussis.",
        "refs": [
          "TDAP2"
        ]
      },
      {
        "title": "Protection is not the same as immune maturity",
        "body": "Maternal antibody transfer helps bridge a period when the infant is especially vulnerable. It does not establish that the baby's own immune system is fully mature or replace routine infant preventive care.",
        "refs": [
          "TDAP2"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/tdap",
        "US Tdap guidance"
      ],
      [
        "baby/placenta/exchange",
        "The placenta"
      ],
      [
        "/research/EV-ART-050",
        "Infant preventive visits and vaccines"
      ]
    ]
  },
  "baby/growth/neural-control": {
    "title": "A growing nervous system",
    "art": "brain",
    "window": "Weeks 27–30",
    "sections": [
      {
        "title": "From structure to function",
        "body": "MedlinePlus describes rapid brain growth and increasing nervous-system control of some body functions across weeks 27–30. This does not mean the nervous system has finished developing.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Evidence about cognition has limits",
        "body": "Research about maternal nutrient intake and later child cognition asks a different question from describing fetal development. A DHA trial follow-up did not establish an overall IQ benefit; the study's funding and product contributions belong alongside its design and outcomes. Do not infer an extra-dose or fetal training requirement from normal brain maturation.",
        "refs": [
          "DHA",
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/brain-growth",
        "Brain growth"
      ],
      [
        "baby/senses/brain-nutrients",
        "Nutrients and cognition"
      ],
      [
        "baby/senses/voice-music",
        "Prenatal sound research"
      ]
    ]
  },
  "baby/skin/vernix-later": {
    "title": "How the fetal skin covering changes",
    "art": "vernix",
    "window": "Around week 29; changes continue throughout late pregnancy",
    "sections": [
      {
        "title": "A changing surface layer",
        "body": "Vernix is a whitish coating associated with fetal skin. The NHS week-39 page describes variation in this covering near birth. The amount present varies, and it does not disappear at one fixed week for every baby.",
        "refs": [
          "N39"
        ]
      },
      {
        "title": "Different layers, different roles",
        "body": "Fine hair, vernix and the skin itself are distinct features of development. Earlier articles explain their roles and later development involves ongoing maturation. The appearance of a concept diagram cannot establish individual skin maturity or readiness for birth.",
        "refs": [
          "N20",
          "N29"
        ]
      }
    ],
    "related": [
      [
        "baby/skin/vernix",
        "What is vernix?"
      ],
      [
        "baby/skin/lanugo",
        "Fine body hair"
      ],
      [
        "baby/skin/skin-development",
        "Skin anatomy"
      ]
    ]
  },
  "baby/growth/maturation": {
    "title": "Growing and maturing before birth",
    "art": "fat",
    "window": "Later pregnancy · a continuing process",
    "sections": [
      {
        "title": "Development is more than size",
        "body": "The NHS week-29 guide describes continued organ maturation and fat accumulation. These processes overlap with the 27–30 week brain and respiratory development window, and no single measurement describes all aspects of fetal maturity.",
        "refs": [
          "N29",
          "MED"
        ]
      },
      {
        "title": "Nutrition, growth and clinical assessment",
        "body": "Nutrients support development, but a size analogy or change in tissue development does not establish a new supplement dose or personal growth target. The care team interprets individual growth measurements in context.",
        "refs": [
          "NUTR",
          "N29"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/brain-growth",
        "Brain growth"
      ],
      [
        "baby/growth/surfactant",
        "Lung maturation"
      ],
      [
        "baby/growth/screening",
        "Growth assessment"
      ],
      [
        "mother/nutrition/food",
        "Maternal nutrition"
      ]
    ]
  },
  "mother/checkups/anatomy-scan": {
    "title": "Understanding the anatomy scan",
    "art": "checkups",
    "window": "Mid-pregnancy assessment; individual timing and indications vary",
    "sections": [
      {
        "title": "What an ultrasound can help assess",
        "body": "A prenatal ultrasound uses sound waves to make images of the developing pregnancy. A standard examination in mid-pregnancy may assess anatomy, growth and the placenta. The care team determines the timing and what information is needed.",
        "refs": [
          "SCAN"
        ]
      },
      {
        "title": "A screening examination has limits",
        "body": "Ultrasound can identify some findings that need further assessment, but cannot exclude every condition. A weekly educational illustration is not an ultrasound image or a substitute for an individual clinical interpretation.",
        "refs": [
          "SCAN"
        ]
      },
      {
        "title": "Questions for your care team",
        "body": "Ask what the examination assessed, whether a follow-up is needed and what any uncertain finding means. This research reading does not interpret scans.",
        "refs": [
          "SCAN"
        ]
      }
    ],
    "related": [
      [
        "mother/checkups/prenatal",
        "Prenatal visits"
      ],
      [
        "baby/growth/screening",
        "Growth and clinical assessment"
      ],
      [
        "baby/growth/anatomy",
        "Developing body systems"
      ]
    ]
  },
  "baby/digestion/swallowing": {
    "title": "Why the baby practices swallowing",
    "art": "digestion",
    "window": "Weeks 19–21 in MedlinePlus; related processes continue",
    "sections": [
      {
        "title": "An early movement of the digestive system",
        "body": "The fetal nervous system and muscles coordinate movements as development progresses. MedlinePlus describes swallowing by the end of the 19–21 week window. This is not the same process as feeding a newborn.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "A different source of nourishment",
        "body": "Before birth, placental exchange is the main route for fetal nourishment. Swallowing takes place in the fluid environment around the baby, while the digestive system continues developing.",
        "refs": [
          "MED",
          "N20"
        ]
      },
      {
        "title": "Continue the connection",
        "body": "Later readings examine meconium in the intestinal tract and the contribution of fetal urine to amniotic fluid. The timing of these changes overlaps; they are not individual milestones to test at home.",
        "refs": [
          "MED",
          "N25"
        ]
      }
    ],
    "related": [
      [
        "baby/digestion/nutrition-connection",
        "How nutrients reach the baby"
      ],
      [
        "baby/digestion/meconium",
        "The first stool"
      ],
      [
        "baby/digestion/amniotic-fluid",
        "Amniotic fluid and kidneys"
      ]
    ]
  },
  "baby/skin/vernix": {
    "title": "What is vernix?",
    "art": "vernix",
    "window": "NHS week 20 describes this protective covering; timing varies",
    "sections": [
      {
        "title": "A protective surface",
        "body": "Vernix is a whitish, greasy covering associated with developing fetal skin. NHS educational guidance describes it around week 20 and notes its possible protective role in the amniotic fluid environment.",
        "refs": [
          "N20"
        ]
      },
      {
        "title": "Vernix and lanugo are different",
        "body": "Lanugo is fine fetal hair. Vernix is a surface covering. Both are aspects of skin development, but a representative illustration cannot show how much of either is present in an individual fetus.",
        "refs": [
          "MED",
          "N20",
          "N21"
        ]
      },
      {
        "title": "What this does not establish",
        "body": "There is no need to infer a fetal skin-care or supplement regimen from this developmental milestone. The baby’s skin changes throughout pregnancy and after birth.",
        "refs": [
          "N20",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/skin/lanugo",
        "Fine fetal hair"
      ],
      [
        "baby/skin/skin-development",
        "Skin development"
      ],
      [
        "mother/skin",
        "Maternal skin topics"
      ]
    ]
  },
  "mother/body/early-milk": {
    "title": "Breast changes and early milk",
    "art": "breast",
    "window": "Possible mid-pregnancy experience, not a week-specific requirement",
    "sections": [
      {
        "title": "What colostrum is",
        "body": "Breast tissue changes during pregnancy. Colostrum is the early milk that may appear as a small amount of yellowish fluid from the nipples. Leakage is one possible experience, not a requirement.",
        "refs": [
          "BREAST"
        ]
      },
      {
        "title": "Separate development from feeding predictions",
        "body": "Breast changes before birth are not a measure of how well someone will feed a baby later. Feeding support, preferences and individual circumstances matter. This reading does not recommend antenatal expression or a collection schedule.",
        "refs": [
          "BREAST"
        ]
      }
    ],
    "related": [
      [
        "mother/body/breasts",
        "Breast changes and appearance"
      ],
      [
        "mother/body/birth-preparation",
        "Preparing for birth"
      ],
      [
        "/research/EV-ART-032",
        "Feeding options and support"
      ]
    ]
  },
  "mother/checkups/glucose-screening": {
    "title": "Why glucose screening is offered",
    "art": "glucose",
    "window": "US guidance: generally 24–28 weeks, with individual exceptions",
    "sections": [
      {
        "title": "What the test is looking for",
        "body": "Gestational diabetes is diabetes first diagnosed during pregnancy in the relevant clinical context. Blood glucose testing helps identify problems in how the body regulates blood sugar. Screening is not the same as a diagnosis; a result may lead to additional testing.",
        "refs": [
          "GDM",
          "GDM2"
        ]
      },
      {
        "title": "Why this window matters",
        "body": "ACOG and NIDDK describe usual testing at 24–28 weeks for people not already diagnosed or otherwise assessed earlier. The care team determines which testing pathway applies. Do not interpret a home glucose reading as a substitute for clinical screening.",
        "refs": [
          "GDM",
          "GDM2"
        ]
      },
      {
        "title": "What about prevention research?",
        "body": "Probiotic studies have investigated prevention of gestational diabetes, but a product marketed for gut health does not establish a reliable substitute for screening or medical care. The existing review and trial archive retains uncertain findings and harms.",
        "refs": [
          "PROBIO"
        ]
      }
    ],
    "related": [
      [
        "mother/digestion/gut-health",
        "Probiotic research and limitations"
      ],
      [
        "mother/nutrition/food",
        "Food and prenatal nutrition"
      ],
      [
        "mother/checkups/prenatal",
        "Prenatal care questions"
      ]
    ]
  },
  "mother/digestion/heartburn": {
    "title": "Why pregnancy can cause heartburn",
    "art": "reflux",
    "window": "Common in pregnancy; NHS week 25 highlights this topic",
    "sections": [
      {
        "title": "How reflux happens",
        "body": "The stomach contains acid used in digestion. Pregnancy hormones and pressure from the growing uterus can contribute to stomach contents moving upward toward the esophagus. The resulting discomfort may feel like burning or indigestion.",
        "refs": [
          "REFLUX"
        ]
      },
      {
        "title": "What can make symptoms more manageable",
        "body": "NHS guidance describes smaller meals, remaining upright after eating and avoiding foods that trigger symptoms as possible comfort measures. Medication choices should be discussed with a pharmacist or maternity clinician rather than inferred from ordinary adult reflux advice.",
        "refs": [
          "REFLUX"
        ]
      },
      {
        "title": "When to seek medical assessment",
        "body": "Chest pain, difficulty breathing or severe symptoms may require urgent care and must not automatically be attributed to heartburn. Call emergency services for life-threatening symptoms. Persistent or concerning symptoms need individual assessment.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "mother/digestion/food-safety",
        "Food safety"
      ],
      [
        "mother/digestion/nausea",
        "Nausea research"
      ],
      [
        "mother/body/rib-comfort",
        "Rib comfort and breathing"
      ]
    ]
  },
  "baby/growth/airway-branches": {
    "title": "How the developing airways branch",
    "art": "lungs",
    "window": "Weeks 23–25",
    "sections": [
      {
        "title": "A branching network",
        "body": "The respiratory system forms a network of airways that will eventually carry air through the lungs. MedlinePlus describes development of the lower airways in the 23–25 week window, not a new event that occurs on the same day for every fetus.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "The placenta still supports exchange",
        "body": "Before birth, oxygen arrives via the maternal–placental–fetal exchange system. Development of the airway tree does not imply mature gas exchange in air. The later appearance of air sacs and surfactant is a separate part of the developmental story.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/exchange",
        "Oxygen and nutrient exchange"
      ],
      [
        "baby/growth/air-sacs",
        "Looking ahead: air sacs"
      ],
      [
        "baby/growth/surfactant",
        "Looking ahead: surfactant"
      ]
    ]
  },
  "baby/growth/fat-stores": {
    "title": "Why fat begins accumulating",
    "art": "fat",
    "window": "Weeks 23–25; continues through later pregnancy",
    "sections": [
      {
        "title": "Growing tissue, not a weight target",
        "body": "MedlinePlus describes the beginning of fat storage during the 23–25 week window. The tissue continues developing over subsequent weeks and contributes to changes in body appearance. These are population descriptions, not a way to judge an individual baby's size.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Nutrition is more than a single measurement",
        "body": "Normal development depends on adequate nourishment, but the appearance of fat stores does not mean a parent should add a fixed amount of calories or a new supplement at this week. Diet, health and clinical assessment matter.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/food",
        "Food and prenatal nutrition"
      ],
      [
        "baby/growth/screening",
        "Growth assessment"
      ],
      [
        "baby/placenta/exchange",
        "Placental exchange"
      ]
    ]
  },
  "baby/digestion/amniotic-fluid": {
    "title": "How amniotic fluid relates to the kidneys",
    "art": "fluid",
    "window": "Around week 25; broad developmental context",
    "sections": [
      {
        "title": "A fluid environment",
        "body": "The baby develops surrounded by amniotic fluid. The NHS week 25 description explains that fetal urine contributes substantially to this fluid by this stage. This is part of normal physiology, not a sign of waste accumulating in an unhealthy way.",
        "refs": [
          "N25"
        ]
      },
      {
        "title": "Different roles before birth",
        "body": "The placenta remains involved in exchange with maternal circulation, while the fetal kidneys and fluid environment develop. The amount of fluid in an individual pregnancy requires clinical assessment, not a home calculation or a fruit-size comparison.",
        "refs": [
          "N25",
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/placenta/exchange",
        "Placental exchange"
      ],
      [
        "baby/digestion/nutrition-connection",
        "How nutrients reach the baby"
      ],
      [
        "baby/growth/screening",
        "Clinical growth assessment"
      ]
    ]
  },
  "baby/senses/eyes": {
    "title": "How the eyes develop",
    "art": "eye",
    "window": "Around week 26; eye function matures over time",
    "sections": [
      {
        "title": "Structure and function",
        "body": "MedlinePlus identifies further eye development around week 26. The eye includes structures involved in focusing light and transmitting signals, but their development does not imply that vision is mature.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Timing varies between references",
        "body": "The NHS describes eye opening around week 26, while MedlinePlus places eyelid opening and closing within weeks 27–30. This illustrates why a developmental timeline should describe ranges and not precise deadlines.",
        "refs": [
          "MED",
          "N26"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/eyelids",
        "Eyelid movements"
      ],
      [
        "baby/growth/brain-growth",
        "Developing nervous system"
      ],
      [
        "baby/senses/hearing",
        "Hearing development"
      ]
    ]
  },
  "baby/senses/startle": {
    "title": "What a response to sound means",
    "art": "senses",
    "window": "Around week 26; responses vary",
    "sections": [
      {
        "title": "A developing response",
        "body": "MedlinePlus notes that a fetus may react to loud sounds at around week 26. A response involves sensory and motor systems, and the experience varies between individuals.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Research is not a training schedule",
        "body": "A prenatal music study investigated neural responses after birth. It does not establish an intelligence benefit or a need to expose a fetus to loud sound. The archive records academic and foundation support and no declared competing interests for the study; the outcome and small sample remain limitations.",
        "refs": [
          "SOUND"
        ]
      },
      {
        "title": "Avoid testing the baby at home",
        "body": "A startle is not a clinical test of hearing. If usual movements slow, stop or change, contact the maternity team immediately rather than trying to provoke a response.",
        "refs": [
          "URG"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/voice-music",
        "Voice and music research"
      ],
      [
        "baby/movement/patterns",
        "Movement patterns"
      ]
    ]
  },
  "baby/growth/air-sacs": {
    "title": "Why air sacs matter",
    "art": "alveoli",
    "window": "Around week 26; lungs remain immature",
    "sections": [
      {
        "title": "From branches to exchange structures",
        "body": "MedlinePlus describes formation of air sacs around week 26, while the lungs remain unable to function fully outside the womb. The structure of the lung continues changing across pregnancy.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Not a readiness test",
        "body": "The emergence of air sacs is not evidence that an individual fetus can breathe independently. Later development includes surfactant and continuing maturation. Neonatal outcomes depend on multiple clinical factors, so this page provides no viability prediction.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/airway-branches",
        "The developing airway tree"
      ],
      [
        "baby/growth/surfactant",
        "Surfactant and maturation"
      ],
      [
        "baby/placenta/exchange",
        "Oxygen before birth"
      ]
    ]
  },
  "baby/growth/brain-growth": {
    "title": "Why the brain grows rapidly",
    "art": "brain",
    "window": "Weeks 27–30",
    "sections": [
      {
        "title": "A developing nervous system",
        "body": "MedlinePlus describes rapid brain growth and increasing nervous-system control during weeks 27–30. Structure, connectivity and function mature together over time; there is no single week at which the brain becomes complete.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Adequacy is different from enhancement",
        "body": "DHA, choline and iodine have roles in normal development, but studies of additional intake ask separate questions. A seven-year DHA follow-up did not establish an overall IQ benefit. The registry records public funding, donated capsules and disclosed industry relationships; these require interpretation alongside methods and outcomes.",
        "refs": [
          "NUTR",
          "DHA"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/brain-nutrients",
        "Choline, iodine and folate research"
      ],
      [
        "mother/nutrition/omega-3",
        "DHA evidence"
      ],
      [
        "baby/senses/brain-nutrients",
        "Nutrient roles and cognition"
      ]
    ]
  },
  "baby/growth/surfactant": {
    "title": "What surfactant does in the lungs",
    "art": "alveoli",
    "window": "Weeks 27–30; maturation continues",
    "sections": [
      {
        "title": "The role of surfactant",
        "body": "Surfactant is a substance produced in the developing respiratory system that helps air sacs remain open when breathing air. MedlinePlus identifies production in the still immature lungs across weeks 27–30.",
        "refs": [
          "MED"
        ]
      },
      {
        "title": "Development is gradual",
        "body": "The presence of surfactant does not establish mature respiratory function. Before birth the placenta supports oxygen exchange. This general explanation cannot estimate an individual's readiness for birth or replace neonatal care.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/growth/air-sacs",
        "Air sacs take shape"
      ],
      [
        "baby/growth/airway-branches",
        "Earlier airway development"
      ],
      [
        "baby/placenta/exchange",
        "Placental oxygen exchange"
      ]
    ]
  },
  "baby/senses/eyelids": {
    "title": "Opening and closing the eyelids",
    "art": "eye",
    "window": "Weeks 27–30 in MedlinePlus; NHS describes opening around 26",
    "sections": [
      {
        "title": "A small part of sensory development",
        "body": "As the eyes and nervous system mature, the eyelids begin opening and closing. References describe overlapping periods, not a single day on which this happens.",
        "refs": [
          "MED",
          "N26"
        ]
      },
      {
        "title": "Eye movement is not a visual test",
        "body": "Eyelid movement does not establish mature vision or a particular developmental outcome. The eyes and brain continue to develop, and weekly illustrations cannot assess individual sensory function.",
        "refs": [
          "MED"
        ]
      }
    ],
    "related": [
      [
        "baby/senses/eyes",
        "Developing eye structures"
      ],
      [
        "baby/growth/brain-growth",
        "Brain growth"
      ],
      [
        "baby/senses/hearing",
        "Other developing senses"
      ]
    ]
  },
  "mother/nutrition/vitamin-e": {
    "title": "Vitamin E: antioxidant function and dietary gaps",
    "art": "nutrition",
    "window": "Throughout pregnancy · food adequacy is not a high-dose treatment",
    "summary": "Low estimated intake is relatively common; this does not establish a need for separate high-dose vitamin E.",
    "question": "Do my usual food choices and prenatal product cover vitamin E without unnecessary overlap?",
    "sections": [
      {
        "title": "Why it matters",
        "body": "Vitamin E helps protect cell membranes from oxidative damage. Nuts, seeds and vegetable oils are common food sources.",
        "refs": [
          "NUTR"
        ]
      },
      {
        "title": "How common is low intake?",
        "body": "ECHO estimated that 17–22% had total intake below the estimated average requirement, including supplements. A 2019 NHANES analysis estimated 43.3%, with industry funding. Different survey methods, populations and periods limit direct comparison. Neither statistic is a diagnosis.",
        "refs": [
          "ECHO",
          "GAP2019"
        ]
      },
      {
        "title": "What it does not mean",
        "body": "Meeting a nutrient requirement is distinct from taking high-dose antioxidant supplements to prevent pregnancy complications. Extra supplementation may have risks, and clinical outcome evidence and individual circumstances matter.",
        "refs": [
          "NUTR"
        ]
      }
    ],
    "related": [
      [
        "mother/nutrition/food",
        "Food and prenatal nutrition"
      ],
      [
        "mother/nutrition/supplements",
        "Prenatal supplement quality"
      ]
    ]
  }
}
