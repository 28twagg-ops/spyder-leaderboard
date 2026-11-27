/** Additional focused research drafts. External guidance records are candidate references; no chart/dose release.
 * Existing registry-backed sources retain alias/hold checks. No individual clinical clearance. */
export type MidReference={title:string;url:string;sourceId?:string}
export type MidReading={title:string;art:string;window:string;sections:{title:string;body:string;refs:string[]}[];related:[string,string][]}
export const midReferences:Record<string,MidReference>={
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
