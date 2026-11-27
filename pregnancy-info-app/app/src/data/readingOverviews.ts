/** Editorial navigation scope only. These strings identify subjects, not medical conclusions, care instructions, or clinically reviewed guidance. */
export interface ReadingOverview {why:string;concepts:[string,string,string]}
const topics:[string,string,string,string][]=[
  [
    "Preparing for pregnancy gives both partners a chance to review their health, daily habits and medical needs.",
    "Health history",
    "Daily habits",
    "Care planning"
  ],
  [
    "Explore the role of folic acid in early development and why the timing of supplementation matters.",
    "Timing",
    "Early development",
    "Supplement choices"
  ],
  [
    "A father's health and workplace exposures are part of pregnancy preparation, not just the mother's health.",
    "Father's health",
    "Work exposures",
    "Evidence limits"
  ],
  [
    "Compare fertility treatments and acupuncture research, including the important difference between pregnancy and live birth rates.",
    "Treatment options",
    "Live birth rates",
    "Study limits"
  ],
  [
    "A balanced diet and prenatal supplements serve different purposes. Understand how nutrient needs change before and during pregnancy.",
    "Food choices",
    "Nutrients",
    "Supplements"
  ],
  [
    "Compare prenatal supplements by their ingredients, quality testing and evidence rather than price or marketing alone.",
    "Ingredients",
    "Quality testing",
    "Care questions"
  ],
  [
    "Explore how fish and DHA, an omega-3 fat, relate to early brain development and the limits of the research.",
    "Fish sources",
    "DHA",
    "Brain development"
  ],
  [
    "Choline and iodine are important nutrients during development. Explore what studies can and cannot establish about their benefits.",
    "Choline",
    "Iodine",
    "Evidence limits"
  ],
  [
    "Understand the different roles of calcium, iron, vitamin D and probiotics, including where evidence remains uncertain.",
    "Minerals",
    "Vitamin D",
    "Probiotics"
  ],
  [
    "Identify potential health risks from environmental exposures at home and work before spending money on specialty products.",
    "Home exposures",
    "Work exposures",
    "Health risks"
  ],
  [
    "Explore where PFAS and plastics enter daily life, what exposure studies show and which practical questions deserve attention.",
    "Materials",
    "Exposure routes",
    "Cost and evidence"
  ],
  [
    "Understand how food choices, air quality and extreme heat relate to pregnancy health and everyday decisions.",
    "Food choices",
    "Air quality",
    "Heat"
  ],
  [
    "Prenatal visits cover more than the baby's growth. Learn why screening, medical history and follow-up are important.",
    "Prenatal visits",
    "Screening",
    "Follow-up"
  ],
  [
    "Explore how organs and body systems develop throughout pregnancy, without treating a typical timeline as an individual prediction.",
    "Early development",
    "Placenta",
    "Later growth"
  ],
  [
    "Food safety and good nutrition are both important during pregnancy. Learn about foodborne illness and common preparation concerns.",
    "Food types",
    "Preparation",
    "Infection risks"
  ],
  [
    "Explore how physical activity and strength training fit into pregnancy, including why individual health and symptoms matter.",
    "Movement",
    "Strength",
    "Safety"
  ],
  [
    "Compare research on nausea remedies and learn why severe vomiting requires a different approach from mild symptoms.",
    "Nausea",
    "Remedy evidence",
    "When to get help"
  ],
  [
    "Understand how skin structure changes during pregnancy, and why comfort and stretch mark prevention are different research questions.",
    "Skin structure",
    "Comfort",
    "Product claims"
  ],
  [
    "Pregnancy changes breast size and shape. Explore the evidence about appearance separately from decisions about infant feeding.",
    "Body changes",
    "Appearance",
    "Feeding"
  ],
  [
    "The pelvic floor involves both muscle strength and relaxation. Understand how pain, bladder symptoms and birth preparation fit together.",
    "Pelvic floor",
    "Pain",
    "Birth preparation"
  ],
  [
    "Explore how birth preferences, emotional support and medical care fit together when preparing for labor.",
    "Support",
    "Birth preferences",
    "Medical care"
  ],
  [
    "Compare evidence on traditional birth practices and understand why a breech baby, positioned bottom or feet first, requires medical assessment.",
    "Traditional practices",
    "Baby's position",
    "Safety"
  ],
  [
    "Understand the newborn's transition after delivery, including the role of clinical checks, warmth and feeding.",
    "Newborn checks",
    "Warmth",
    "Feeding"
  ],
  [
    "Pregnancy and postpartum complications can require urgent care. Recognizing warning signs matters more than following a routine schedule.",
    "Warning signs",
    "Get help",
    "Before and after birth"
  ],
  [
    "Postpartum recovery continues beyond the first checkup. Explore the role of follow-up care, rest and family support.",
    "Follow-up care",
    "Rest",
    "Support"
  ],
  [
    "Understand the different healing needs after a cesarean delivery or a perineal tear, including comfort and returning to activity.",
    "Cesarean healing",
    "Birth tears",
    "Activity"
  ],
  [
    "Pregnancy can stretch and separate abdominal muscles. Explore how diastasis recti, or muscle separation, relates to core function and recovery.",
    "Abdominal muscles",
    "Muscle separation",
    "Core function"
  ],
  [
    "Explore how pelvic floor function relates to bladder symptoms, physical recovery and returning to regular activities after birth.",
    "Pelvic floor",
    "Symptoms",
    "Activity"
  ],
  [
    "Sleep, emotional health and family support are important parts of postpartum recovery, alongside physical healing.",
    "Mood",
    "Sleep",
    "Support"
  ],
  [
    "Understand how comfort, consent, contraception and future pregnancy plans relate to intimacy after childbirth.",
    "Comfort and consent",
    "Contraception",
    "Future pregnancy"
  ],
  [
    "Explore common postpartum hair and skin changes, and compare the evidence behind cosmetic treatments and product claims.",
    "Hair",
    "Skin",
    "Treatment evidence"
  ],
  [
    "Breastfeeding, formula and mixed feeding are different ways to nourish a baby. Explore the evidence without pressure or guilt.",
    "Breastfeeding",
    "Formula",
    "Mixed feeding"
  ],
  [
    "Understand why proper formula preparation, clean equipment and storage are important for infant feeding safety.",
    "Preparation",
    "Storage",
    "Safety"
  ],
  [
    "Milk supply, feeding cues and infant growth are related but different measures. Learn why they need to be considered together.",
    "Milk supply",
    "Feeding cues",
    "Growth"
  ],
  [
    "Infant nutrient needs vary with age and feeding method. Explore the role of vitamin D and iron without assuming a universal dose.",
    "Vitamin D",
    "Iron",
    "Feeding"
  ],
  [
    "Explore visual guidance on infant sleep environments, including sleep surfaces and the difference between room-sharing and bed-sharing.",
    "Sleep surface",
    "Sleep environment",
    "Safety guide"
  ],
  [
    "Recognizing serious illness in a young infant is important. Find information on fever, warning signs and when urgent care is needed.",
    "Illness",
    "Get help",
    "Care"
  ],
  [
    "Understand newborn screening, hearing checks and jaundice, including why a normal test cannot rule out every health concern.",
    "Newborn screening",
    "Jaundice",
    "Hearing"
  ],
  [
    "Compare diaper choices and cue-based toilet learning, including what research can establish about later independent toilet use.",
    "Diapers",
    "Infant cues",
    "Toilet learning"
  ],
  [
    "Explore research on infant crying, colic and comforting contact, while recognizing the importance of support for caregivers.",
    "Crying",
    "Comforting contact",
    "Caregiver support"
  ],
  [
    "Explore the differences between everyday skin-to-skin contact, gentle infant massage and specialized hospital-based kangaroo care.",
    "Gentle touch",
    "Skin-to-skin",
    "Hospital care"
  ],
  [
    "Everyday conversation, reading and play offer opportunities for early learning. Explore what research measures about these interactions.",
    "Conversation",
    "Reading",
    "Play"
  ],
  [
    "Understand how supervised floor play relates to infant movement and why developmental skills are not fixed deadlines.",
    "Floor play",
    "Movement",
    "Development"
  ],
  [
    "Developmental milestones help families observe emerging skills. Learn how they differ from formal screening and medical assessment.",
    "Milestones",
    "Observation",
    "Screening"
  ],
  [
    "Explore research on screen use, shared activities and multilingual families without turning development into a competition.",
    "Screens",
    "Language",
    "Interaction"
  ],
  [
    "Starting complementary foods involves readiness, safe textures and continued milk feeding. Explore how these topics fit together.",
    "Milk feeding",
    "First foods",
    "Readiness"
  ],
  [
    "Food allergy prevention and choking prevention are different safety questions. Understand why food type, preparation and individual risk matter.",
    "Food allergies",
    "Food texture",
    "Choking"
  ],
  [
    "Explore childhood growth patterns, nutrition and responsive feeding without using weight or meal completion as a performance score.",
    "Growth",
    "Meals",
    "Hunger and fullness"
  ],
  [
    "Understand everyday childhood safety topics, including dental care, water supervision and appropriate car seat use.",
    "Dental care",
    "Water safety",
    "Travel safety"
  ],
  [
    "Preventive visits include more than vaccinations. Explore how age, medical history and current guidance shape childhood care.",
    "Checkups",
    "Vaccines",
    "Care questions"
  ],
  [
    "Toilet learning involves readiness and growing independence. Explore what research says about timing without treating age as a deadline.",
    "Readiness",
    "Routines",
    "Support"
  ],
  [
    "Natural and experimental infant remedies deserve careful review. Explore the difference between a proposed benefit and evidence of safety.",
    "Remedy claims",
    "Evidence quality",
    "Infant safety"
  ]
]
const byId=new Map(topics.map(([why,...concepts],index)=>['EV-ART-'+String(index+1).padStart(3,'0'),{why,concepts}] as const))
export function readingOverview(id:string):ReadingOverview|undefined{return byId.get(id)}
/** Source-page links only. No reproduction or embedded third-party images. */
export const textbookLinks:Record<string,[string,string,string][]>={
  "EV-ART-014": [
    [
      "OpenStax · Fetal development",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-3-fetal-development",
      "Textbook diagrams of development and circulation"
    ]
  ],
  "EV-ART-018": [
    [
      "OpenStax · Layers of the skin",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/5-1-layers-of-the-skin",
      "Textbook cross-sections of skin"
    ]
  ],
  "EV-ART-020": [
    [
      "OpenStax · Abdominal wall and pelvic floor",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax",
      "Labeled muscle illustrations"
    ]
  ],
  "EV-ART-027": [
    [
      "OpenStax · Abdominal wall and pelvic floor",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax",
      "Labeled abdominal muscle illustrations"
    ]
  ],
  "EV-ART-028": [
    [
      "OpenStax · Abdominal wall and pelvic floor",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax",
      "Labeled pelvic muscle illustrations"
    ]
  ],
  "EV-ART-032": [
    [
      "OpenStax · Lactation",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-6-lactation",
      "Milk production and breast anatomy illustrations"
    ]
  ],
  "EV-ART-034": [
    [
      "OpenStax · Lactation",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-6-lactation",
      "Lactation physiology illustrations"
    ]
  ],
  "EV-ART-036": [
    [
      "NICHD · Safe sleep environment",
      "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment",
      "Official diagrams and guidance"
    ]
  ],
  "EV-ART-043": [
    [
      "CDC · Milestones in Action",
      "https://www.cdc.gov/act-early/milestones-in-action/index.html",
      "Original age-organized photos and videos"
    ]
  ],
  "EV-ART-044": [
    [
      "CDC · Milestones in Action",
      "https://www.cdc.gov/act-early/milestones-in-action/index.html",
      "Original age-organized photos and videos"
    ]
  ]
}
