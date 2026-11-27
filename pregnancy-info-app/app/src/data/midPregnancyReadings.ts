/** Additional focused research drafts. External guidance records are candidate references; no chart/dose release.
 * Existing registry-backed sources retain alias/hold checks. No individual clinical clearance. */
export type MidReference={title:string;url:string;sourceId?:string}
export type MidReading={title:string;art:string;window:string;sections:{title:string;body:string;refs:string[]}[];related:[string,string][]}
export const midReferences:Record<string,MidReference>={
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
        "body": "Vernix is a whitish coating associated with fetal skin. The NHS week-29 page describes changes in this covering as development progresses. The amount present varies, and it does not disappear at one fixed week for every baby.",
        "refs": [
          "N29"
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
  }
}
