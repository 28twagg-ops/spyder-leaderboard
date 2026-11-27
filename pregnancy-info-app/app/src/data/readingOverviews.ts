/** Editorial navigation scope only. These strings identify subjects, not medical conclusions, care instructions, or clinically reviewed guidance. */
export interface ReadingOverview {why:string;concepts:[string,string,string]}
const topics:[string,string,string,string][]=[
  [
    "Understand which preparation questions concern you and your partner before conception.",
    "Health history",
    "Everyday habits",
    "Care planning"
  ],
  [
    "Understand why folic acid is discussed before pregnancy and what to ask about supplements.",
    "Timing",
    "Development",
    "Supplement questions"
  ],
  [
    "Include the father's health and workplace conditions in family preparation.",
    "Father's health",
    "Work exposures",
    "Research limits"
  ],
  [
    "Understand fertility treatment options and the difference between an IVF outcome and a claim about acupuncture.",
    "Treatment options",
    "Outcome measures",
    "Evidence limits"
  ],
  [
    "Make sense of food and supplement choices without assuming more products are better.",
    "Food",
    "Nutrients",
    "Supplement labels"
  ],
  [
    "Compare prenatal supplement labels, ingredients and quality questions.",
    "Ingredients",
    "Product testing",
    "Care discussion"
  ],
  [
    "Understand the research linking fish, DHA and early brain development.",
    "Food sources",
    "DHA",
    "Development evidence"
  ],
  [
    "Learn what research examines about choline and iodine in early development.",
    "Choline",
    "Iodine",
    "Evidence limits"
  ],
  [
    "Distinguish nutrient questions instead of treating every supplement as interchangeable.",
    "Minerals",
    "Vitamin D",
    "Probiotics"
  ],
  [
    "Identify the kinds of everyday and occupational exposures worth learning about.",
    "Home",
    "Workplace",
    "Exposure context"
  ],
  [
    "Understand where questions about PFAS and plastics fit into practical household choices.",
    "Materials",
    "Exposure routes",
    "Costs and evidence"
  ],
  [
    "Understand environmental questions that can affect everyday decisions during pregnancy.",
    "Produce",
    "Air quality",
    "Heat"
  ],
  [
    "Know the purpose of prenatal visits, screening and follow-up discussions.",
    "Visits",
    "Screening",
    "Follow-up"
  ],
  [
    "Understand the sequence of fetal development without treating a timeline as an individual prediction.",
    "Early development",
    "Placenta and circulation",
    "Later growth"
  ],
  [
    "Recognize the food-safety topics that are especially relevant when preparing meals during pregnancy.",
    "Food types",
    "Preparation",
    "Infection questions"
  ],
  [
    "Understand what the research considers when discussing movement during pregnancy.",
    "Movement",
    "Strength",
    "Safety context"
  ],
  [
    "Distinguish common nausea questions from questions about remedies and when symptoms require care.",
    "Symptoms",
    "Remedy evidence",
    "Care and safety"
  ],
  [
    "Understand skin changes, comfort questions and what evidence is needed for product claims.",
    "Skin structure",
    "Comfort",
    "Product evidence"
  ],
  [
    "Understand why breast changes and appearance are discussed separately from feeding choices.",
    "Body changes",
    "Appearance",
    "Feeding questions"
  ],
  [
    "Locate the body structures and understand why strength, relaxation and pain are separate questions.",
    "Pelvic floor",
    "Pain and comfort",
    "Birth preparation"
  ],
  [
    "Understand what can be discussed before labor, including preferences and support.",
    "Support",
    "Preferences",
    "Birth care"
  ],
  [
    "Distinguish traditional birth-related practices from questions that require professional assessment.",
    "Traditional claims",
    "Breech position",
    "Safety limits"
  ],
  [
    "Know what topics are involved in the baby's transition immediately after birth.",
    "Clinical checks",
    "Warmth",
    "Feeding"
  ],
  [
    "Recognize that urgent maternal warning signs are a distinct topic, not something to sort by popularity.",
    "Warning signs",
    "Getting help",
    "Pregnancy and recovery"
  ],
  [
    "Understand why postpartum recovery includes follow-up, rest and changing needs.",
    "Follow-up",
    "Rest",
    "Support"
  ],
  [
    "Understand the different healing questions after cesarean birth or perineal injury.",
    "Cesarean healing",
    "Perineal healing",
    "Activity questions"
  ],
  [
    "Understand the abdominal structures and the difference between muscle function and separation.",
    "Abdominal wall",
    "Muscle separation",
    "Function"
  ],
  [
    "Understand recovery questions about pelvic floor function and returning to activity.",
    "Pelvic floor",
    "Symptoms",
    "Activity"
  ],
  [
    "Recognize mood, sleep and family support as distinct parts of postpartum wellbeing.",
    "Mood",
    "Sleep",
    "Support"
  ],
  [
    "Understand the personal and health questions around intimacy, contraception and another pregnancy.",
    "Comfort and consent",
    "Contraception",
    "Future pregnancy"
  ],
  [
    "Compare common appearance concerns with evidence questions about elective treatments.",
    "Hair",
    "Skin",
    "Treatment evidence"
  ],
  [
    "Understand the different feeding approaches without turning feeding into a competition.",
    "Breastfeeding",
    "Formula",
    "Mixed feeding"
  ],
  [
    "Understand the topics involved in preparing and handling infant formula safely.",
    "Preparation",
    "Handling",
    "Safety"
  ],
  [
    "Understand the distinction between milk supply, feeding cues and growth questions.",
    "Milk supply",
    "Feeding cues",
    "Growth"
  ],
  [
    "Recognize why infant nutrient questions depend on age and feeding context.",
    "Vitamin D",
    "Iron",
    "Feeding context"
  ],
  [
    "Find the original visual guidance about an infant's sleep environment.",
    "Sleep surface",
    "Sleep setting",
    "Original safety guidance"
  ],
  [
    "Know where to find urgent infant illness information rather than relying on search results for triage.",
    "Illness",
    "Urgent help",
    "Care context"
  ],
  [
    "Understand the purpose of newborn screening and follow-up for jaundice and hearing.",
    "Screening",
    "Jaundice",
    "Hearing"
  ],
  [
    "Compare diapering options and understand where optional cue-based toileting fits.",
    "Diapers",
    "Cues",
    "Toileting"
  ],
  [
    "Understand crying and colic questions alongside caregiver comfort and support.",
    "Crying",
    "Carrying",
    "Caregiver support"
  ],
  [
    "Understand the different contexts of gentle contact and clinical kangaroo care.",
    "Gentle touch",
    "Awake contact",
    "Clinical context"
  ],
  [
    "Find everyday interaction topics that relate to early communication and play.",
    "Talking",
    "Reading",
    "Playing"
  ],
  [
    "Understand the movement and floor-play topics used in early developmental reading.",
    "Floor play",
    "Movement",
    "Development"
  ],
  [
    "Understand the difference between everyday milestone observation and formal screening.",
    "Observation",
    "Milestones",
    "Screening"
  ],
  [
    "Explore screen-use questions and communication in the family's languages.",
    "Screens",
    "Language",
    "Interaction"
  ],
  [
    "Understand the transition from milk feeding to complementary foods.",
    "Milk feeding",
    "Food introduction",
    "Readiness questions"
  ],
  [
    "Distinguish allergy questions from choking-prevention questions when learning about foods.",
    "Allergens",
    "Food texture",
    "Choking safety"
  ],
  [
    "Understand growth and mealtime questions without turning food into a performance score.",
    "Growth",
    "Meals",
    "Hunger and fullness"
  ],
  [
    "Find child-safety topics for teeth, water and travel.",
    "Dental care",
    "Water safety",
    "Travel"
  ],
  [
    "Understand preventive visits and how to locate vaccine information for discussion with a clinician.",
    "Checkups",
    "Immunization",
    "Care questions"
  ],
  [
    "Explore toilet-learning readiness and caregiver questions without treating age as a deadline.",
    "Readiness",
    "Routines",
    "Support"
  ],
  [
    "Understand why natural or experimental infant remedies need careful evidence and safety review.",
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
