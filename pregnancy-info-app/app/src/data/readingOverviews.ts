/** Editorial navigation scope only. These strings identify subjects, not medical conclusions, care instructions, or clinically reviewed guidance. */
export interface ReadingOverview {why:string;concepts:[string,string,string]}
const topics:[string,string,string,string][]=[
  [
    "Thinking about a baby? Learn what you and your partner can plan for.",
    "Your health",
    "Daily habits",
    "Care plans"
  ],
  [
    "Learn why this B vitamin matters before a baby starts to grow.",
    "When",
    "Baby's growth",
    "Vitamin choices"
  ],
  [
    "A dad's health is part of the story, too. Learn what to ask about at work and at home.",
    "Dad's health",
    "Work risks",
    "What we know"
  ],
  [
    "Learn how fertility care works. See what studies of IVF and acupuncture can tell us.",
    "Care choices",
    "Birth rates",
    "Study limits"
  ],
  [
    "Learn how food and vitamins fit together. More is not always better.",
    "Food",
    "Nutrients",
    "Vitamin labels"
  ],
  [
    "Not all prenatal vitamins are the same. Learn what a label can tell you.",
    "What's inside",
    "Product tests",
    "Questions to ask"
  ],
  [
    "Learn how fish and a fat called DHA fit into the baby's brain research.",
    "Fish",
    "DHA",
    "Brain studies"
  ],
  [
    "Learn about two nutrients that are studied in a baby's growth.",
    "Choline",
    "Iodine",
    "Study limits"
  ],
  [
    "Learn why the body needs different nutrients. See how they differ.",
    "Minerals",
    "Vitamin D",
    "Probiotics"
  ],
  [
    "Learn what risks to look for at home and at work.",
    "Home",
    "Work",
    "Health risks"
  ],
  [
    "Learn about plastics and PFAS, a group of chemicals that last a long time.",
    "Materials",
    "How they spread",
    "Cost and evidence"
  ],
  [
    "Learn about food, smoke in the air and hot days.",
    "Food",
    "Air",
    "Heat"
  ],
  [
    "Learn what happens at a pregnancy checkup and why tests are done.",
    "Visits",
    "Tests",
    "Next steps"
  ],
  [
    "See how a baby grows before birth. Every baby grows at their own pace.",
    "Early growth",
    "Placenta",
    "Later growth"
  ],
  [
    "Learn which food safety questions matter when you are pregnant.",
    "Food types",
    "Cooking",
    "Germs"
  ],
  [
    "Learn about staying active and getting stronger while pregnant.",
    "Movement",
    "Strength",
    "Safety"
  ],
  [
    "Feeling sick is a common topic in pregnancy. Learn about nausea and what needs care.",
    "Feeling sick",
    "Remedies",
    "When to get help"
  ],
  [
    "Learn how the skin changes as your belly grows. See what is known about skin products.",
    "Skin layers",
    "Comfort",
    "Product claims"
  ],
  [
    "Learn why breasts change in pregnancy and why looks and feeding are separate topics.",
    "Body changes",
    "Looks",
    "Feeding"
  ],
  [
    "Learn about the muscles at the bottom of your pelvis. They can be weak, tight or sore.",
    "Pelvic muscles",
    "Pain",
    "Birth prep"
  ],
  [
    "Learn what you can talk about before birth, from comfort to your care team.",
    "Support",
    "Your wishes",
    "Birth care"
  ],
  [
    "Learn what studies say about herbs, dates and a baby that is bottom-first.",
    "Traditions",
    "Baby's position",
    "Safety"
  ],
  [
    "Learn what the birth team checks just after your baby is born.",
    "Baby's checks",
    "Warmth",
    "Feeding"
  ],
  [
    "Know where to find signs that you need help right away during or after pregnancy.",
    "Warning signs",
    "Get help",
    "Before and after birth"
  ],
  [
    "Recovery does not end at one visit. Learn about rest, healing and support.",
    "Checkups",
    "Rest",
    "Support"
  ],
  [
    "Learn about healing after a C-section or a tear during birth.",
    "C-section",
    "Birth tears",
    "Movement"
  ],
  [
    "Learn about the belly muscles and the gap that can form between them.",
    "Belly muscles",
    "The gap",
    "Strength"
  ],
  [
    "Learn about the muscles that support your bladder and how movement fits into recovery.",
    "Pelvic muscles",
    "Symptoms",
    "Movement"
  ],
  [
    "Learn why sleep, feelings and help from others are part of healing.",
    "Mood",
    "Sleep",
    "Support"
  ],
  [
    "Learn about sex after birth, birth control and plans for another baby.",
    "Comfort and consent",
    "Birth control",
    "Future pregnancy"
  ],
  [
    "Learn about hair and skin changes after birth and what studies say about treatments.",
    "Hair",
    "Skin",
    "Treatment claims"
  ],
  [
    "Learn about the ways to feed a baby. All parents deserve support.",
    "Breast milk",
    "Formula",
    "Both"
  ],
  [
    "Learn about the steps and safety rules behind making a bottle of formula.",
    "Making bottles",
    "Storage",
    "Safety"
  ],
  [
    "Learn about breast milk supply, hunger signs and how babies grow.",
    "Milk supply",
    "Hunger signs",
    "Growth"
  ],
  [
    "Learn why a baby's need for vitamins and iron can change with age and feeding.",
    "Vitamin D",
    "Iron",
    "Feeding"
  ],
  [
    "Learn where to find pictures of a safe place for a baby to sleep.",
    "Sleep surface",
    "Sleep space",
    "Safety guide"
  ],
  [
    "Find the signs that a sick baby may need help right away.",
    "Illness",
    "Get help",
    "Care"
  ],
  [
    "Learn about tests after birth, yellow skin and hearing checks.",
    "Tests",
    "Yellow skin",
    "Hearing"
  ],
  [
    "Learn about diaper choices and signs a baby may need to go to the toilet.",
    "Diapers",
    "Signs",
    "Toilet learning"
  ],
  [
    "Learn about crying and ways to think about comfort and getting help.",
    "Crying",
    "Holding",
    "Support"
  ],
  [
    "Learn about gentle touch, skin-to-skin time and special care in the hospital.",
    "Touch",
    "Skin-to-skin",
    "Hospital care"
  ],
  [
    "Learn how talking, books and play fit into the way babies learn.",
    "Talking",
    "Reading",
    "Play"
  ],
  [
    "Learn about floor play and how babies learn to move.",
    "Floor play",
    "Movement",
    "Growth"
  ],
  [
    "Learn about skills to watch for as a child grows and when checks may help.",
    "Skills",
    "Watching growth",
    "Checkups"
  ],
  [
    "Learn about screen time and the ways a family talks and plays together.",
    "Screens",
    "Language",
    "Play"
  ],
  [
    "Learn about the move from milk to food and signs of being ready.",
    "Milk",
    "First foods",
    "Readiness"
  ],
  [
    "Learn the difference between food allergies and the risk of choking.",
    "Allergy",
    "Food texture",
    "Choking"
  ],
  [
    "Learn about growth, meals and how children show they are hungry or full.",
    "Growth",
    "Meals",
    "Hunger signs"
  ],
  [
    "Find safety topics for teeth, water and car rides.",
    "Teeth",
    "Water",
    "Car rides"
  ],
  [
    "Learn what to ask about vaccines and health visits for your child.",
    "Checkups",
    "Vaccines",
    "Questions"
  ],
  [
    "Learn about signs a child may be ready to use the toilet. It is not a race.",
    "Readiness",
    "Daily habits",
    "Support"
  ],
  [
    "Learn why a remedy that is natural still needs to be checked for safety.",
    "Remedies",
    "Study results",
    "Baby safety"
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
