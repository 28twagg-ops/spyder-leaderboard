/** Editorial navigation scope only. These strings identify subjects, not medical conclusions, care instructions, or clinically reviewed guidance. */
export interface ReadingOverview {why:string;concepts:[string,string,string]}
const topics:[string,string,string,string][]=[
  [
    "Pregnancy preparation involves both partners. Learn how health history, daily habits and medical needs fit into your plans.",
    "Health history",
    "Daily habits",
    "Care planning"
  ],
  [
    "Folic acid is important in early development. Explore why the timing of this vitamin matters before pregnancy.",
    "Timing",
    "Early development",
    "Supplement choices"
  ],
  [
    "A father's health also matters before pregnancy. Explore workplace exposures, daily habits and the limits of fertility research.",
    "Father's health",
    "Work exposures",
    "Evidence limits"
  ],
  [
    "Fertility studies measure different outcomes. Learn how IVF and acupuncture research compares pregnancy rates with live birth rates.",
    "Treatment options",
    "Live birth rates",
    "Study limits"
  ],
  [
    "Food and prenatal supplements serve different purposes. Understand how your nutrient needs may change during pregnancy.",
    "Food choices",
    "Nutrients",
    "Supplements"
  ],
  [
    "Prenatal supplements vary in content and quality. Learn how ingredient labels, product testing and research can inform your questions.",
    "Ingredients",
    "Quality testing",
    "Care questions"
  ],
  [
    "Fish contains DHA, a type of omega-3 fat. Explore its role in brain development and what the studies can establish.",
    "Fish sources",
    "DHA",
    "Brain development"
  ],
  [
    "Choline and iodine are nutrients involved in development. Explore the evidence behind claims about their benefits.",
    "Choline",
    "Iodine",
    "Evidence limits"
  ],
  [
    "Calcium, iron, vitamin D and probiotics serve different roles. Learn where the evidence is strong or uncertain.",
    "Minerals",
    "Vitamin D",
    "Probiotics"
  ],
  [
    "Potential health risks exist at home and work. Learn about common exposures before buying specialty products.",
    "Home exposures",
    "Work exposures",
    "Health risks"
  ],
  [
    "PFAS and plastics are part of daily life. Explore how exposure occurs and what the research can tell us.",
    "Materials",
    "Exposure routes",
    "Cost and evidence"
  ],
  [
    "Food choices, air quality and extreme heat can affect daily life during pregnancy. Explore the related health research.",
    "Food choices",
    "Air quality",
    "Heat"
  ],
  [
    "Prenatal visits cover more than the baby's growth. Learn why health history, screening and follow-up are important.",
    "Prenatal visits",
    "Screening",
    "Follow-up"
  ],
  [
    "Organs and body systems develop throughout pregnancy. Explore typical stages rather than treating them as exact deadlines.",
    "Early development",
    "Placenta",
    "Later growth"
  ],
  [
    "Food safety matters alongside nutrition during pregnancy. Learn about foodborne illness and safe food preparation.",
    "Food types",
    "Preparation",
    "Infection risks"
  ],
  [
    "Physical activity and strength training are important topics in pregnancy. Learn why individual health and symptoms matter.",
    "Movement",
    "Strength",
    "Safety"
  ],
  [
    "Nausea and vomiting can affect pregnancy in different ways. Explore remedy research and when symptoms need medical care.",
    "Nausea",
    "Remedy evidence",
    "When to get help"
  ],
  [
    "Skin stretches and changes during pregnancy. Explore the evidence for skin comfort and stretch mark prevention.",
    "Skin structure",
    "Comfort",
    "Product claims"
  ],
  [
    "Pregnancy changes breast size and shape. Explore appearance concerns separately from decisions about infant feeding.",
    "Body changes",
    "Appearance",
    "Feeding"
  ],
  [
    "Pelvic floor muscles need strength and relaxation. Learn how pain, bladder symptoms and birth preparation fit together.",
    "Pelvic floor",
    "Pain",
    "Birth preparation"
  ],
  [
    "Birth preparation includes support, personal preferences and medical care. Explore how these topics fit together.",
    "Support",
    "Birth preferences",
    "Medical care"
  ],
  [
    "Explore research on herbs, dates and breech position. A breech baby is positioned bottom or feet first.",
    "Traditional practices",
    "Baby's position",
    "Safety"
  ],
  [
    "Understand what happens just after delivery. Explore newborn health checks, warmth and feeding.",
    "Newborn checks",
    "Warmth",
    "Feeding"
  ],
  [
    "Serious complications can occur during pregnancy and after birth. Knowing warning signs helps you recognize when urgent care is needed.",
    "Warning signs",
    "Get help",
    "Before and after birth"
  ],
  [
    "Postpartum recovery continues beyond the first checkup. Explore the role of follow-up care, rest and support.",
    "Follow-up care",
    "Rest",
    "Support"
  ],
  [
    "Healing after a cesarean birth or perineal tear involves different concerns. Explore recovery, comfort and physical activity.",
    "Cesarean healing",
    "Birth tears",
    "Activity"
  ],
  [
    "Pregnancy can stretch and separate abdominal muscles. Learn how diastasis recti, or muscle separation, relates to core strength.",
    "Abdominal muscles",
    "Muscle separation",
    "Core function"
  ],
  [
    "The pelvic floor supports bladder function. Explore how symptoms and physical recovery relate to returning to activity.",
    "Pelvic floor",
    "Symptoms",
    "Activity"
  ],
  [
    "Emotional health is part of postpartum recovery. Explore how sleep, mood and family support fit alongside physical healing.",
    "Mood",
    "Sleep",
    "Support"
  ],
  [
    "Intimacy after childbirth involves comfort, consent and healing. Explore contraception and planning for a future pregnancy.",
    "Comfort and consent",
    "Contraception",
    "Future pregnancy"
  ],
  [
    "Hair and skin can change after childbirth. Explore the evidence behind cosmetic treatments and product claims.",
    "Hair",
    "Skin",
    "Treatment evidence"
  ],
  [
    "Breastfeeding, formula and mixed feeding are different ways to feed a baby. Explore these options without pressure or guilt.",
    "Breastfeeding",
    "Formula",
    "Mixed feeding"
  ],
  [
    "Safe formula preparation involves more than mixing a bottle. Learn about clean equipment, water and storage.",
    "Preparation",
    "Storage",
    "Safety"
  ],
  [
    "Milk supply, feeding cues and growth describe different aspects of infant feeding. Explore why these measures matter together.",
    "Milk supply",
    "Feeding cues",
    "Growth"
  ],
  [
    "Infant nutrient needs vary with age and feeding method. Explore vitamin D and iron without assuming a universal dose.",
    "Vitamin D",
    "Iron",
    "Feeding"
  ],
  [
    "A baby's sleep environment matters for safety. Explore visual guidance on sleep surfaces, room-sharing and bed-sharing.",
    "Sleep surface",
    "Sleep environment",
    "Safety guide"
  ],
  [
    "Illness in young infants can be serious. Learn about fever, warning signs and when urgent care is needed.",
    "Illness",
    "Get help",
    "Care"
  ],
  [
    "Newborn screening includes several health checks. Explore hearing tests and jaundice, and why symptoms still need attention.",
    "Newborn screening",
    "Jaundice",
    "Hearing"
  ],
  [
    "Diaper choices and toilet learning are separate topics. Explore what studies can tell us about infant cues and later skills.",
    "Diapers",
    "Infant cues",
    "Toilet learning"
  ],
  [
    "Crying and colic can be stressful for families. Explore comforting contact and the importance of caregiver support.",
    "Crying",
    "Comforting contact",
    "Caregiver support"
  ],
  [
    "Skin-to-skin contact and gentle touch are different from specialized hospital care. Explore each type of contact and its research.",
    "Gentle touch",
    "Skin-to-skin",
    "Hospital care"
  ],
  [
    "Conversation, books and play offer chances for early learning. Explore what studies measure about these interactions.",
    "Conversation",
    "Reading",
    "Play"
  ],
  [
    "Infants develop movement skills at different rates. Explore supervised floor play without treating milestones as deadlines.",
    "Floor play",
    "Movement",
    "Development"
  ],
  [
    "Milestones help families observe new skills. Learn how they differ from formal screening and medical assessment.",
    "Milestones",
    "Observation",
    "Screening"
  ],
  [
    "Screen use and family languages are part of a child's environment. Explore research on shared activities and communication.",
    "Screens",
    "Language",
    "Interaction"
  ],
  [
    "Starting solid foods involves readiness, safe textures and continued milk feeding. Explore how these topics fit together.",
    "Milk feeding",
    "First foods",
    "Readiness"
  ],
  [
    "Food allergies and choking present different risks. Explore why food preparation and individual health needs matter.",
    "Food allergies",
    "Food texture",
    "Choking"
  ],
  [
    "Growth charts and eating habits provide different information. Explore nutrition and responsive feeding without setting body targets.",
    "Growth",
    "Meals",
    "Hunger and fullness"
  ],
  [
    "Childhood safety includes dental care, water supervision and car travel. Explore the research and guidance behind these topics.",
    "Dental care",
    "Water safety",
    "Travel safety"
  ],
  [
    "Preventive visits include more than vaccines. Explore how age, health history and current guidance shape childhood care.",
    "Checkups",
    "Vaccines",
    "Care questions"
  ],
  [
    "Toilet learning involves readiness and growing independence. Explore the evidence about timing without setting a deadline.",
    "Readiness",
    "Routines",
    "Support"
  ],
  [
    "Natural infant remedies still need evidence of safety. Explore how proposed benefits differ from proven outcomes.",
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
