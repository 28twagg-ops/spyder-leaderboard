/** Week-specific editorial selection is distinct from shared trimester research.
 * The evidence window is recorded separately from the week in which a topic is featured.
 * Never infer a new medical action, dose, or exact milestone from editorial placement. */
export type PilotWeek=14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40
export const isPilotWeek=(week:number):week is PilotWeek=>week>=14&&week<=40&&Number.isInteger(week)
export type WeeklyFeature={title:string;description:string;path:string;art:string;window:string;source:string}
export const weeklyFeatures:Record<PilotWeek,Record<'mother'|'baby',WeeklyFeature[]>>={
"20": {
    "mother": [
      {
        "title": "Anatomy scan and prenatal care",
        "description": "Understand why screening and clinical assessment serve different purposes.",
        "path": "mother/checkups/anatomy-scan",
        "art": "checkups",
        "window": "Mid-pregnancy · verify individual plan",
        "source": "https://www.acog.org/womens-health/faqs/ultrasound-exams"
      },
      {
        "title": "Changing posture and pelvic support",
        "description": "Explore the research on activity and lumbopelvic discomfort.",
        "path": "mother/movement/pain",
        "art": "body",
        "window": "Ongoing mid-pregnancy learning",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-20/"
      },
      {
        "title": "Food safety and nutrient quality",
        "description": "Explore fish, food preparation and dietary adequacy without a new dose schedule.",
        "path": "mother/digestion/food-safety",
        "art": "nutrition",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      }
    ],
    "baby": [
      {
        "title": "Swallowing before birth",
        "description": "Understand how the developing baby practices swallowing while nourishment still depends on placental exchange.",
        "path": "baby/digestion/swallowing",
        "art": "digestion",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "A protective layer on the skin",
        "description": "Learn about vernix and the fetal skin surface.",
        "path": "baby/skin/vernix",
        "art": "vernix",
        "window": "Around week 20 · timing varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-20/"
      },
      {
        "title": "Movement becomes noticeable",
        "description": "Explore muscle activity and the first movement sensations, with clear safety context.",
        "path": "baby/movement/patterns",
        "art": "movement",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "21": {
    "mother": [
      {
        "title": "Feeling your baby move",
        "description": "Understand usual movement and why a change deserves prompt attention.",
        "path": "mother/movement/baby-movement",
        "art": "movement",
        "window": "Mid-pregnancy · timing varies",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Skin pigmentation and sun protection",
        "description": "Learn about pigmentation rather than treating all skin changes as stretch marks.",
        "path": "mother/skin/acne-pigmentation/dark-spots-and-sun-protection",
        "art": "skin",
        "window": "Ongoing skin research spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-21/"
      },
      {
        "title": "Everyday environmental exposures",
        "description": "Learn to separate evidence of exposure from evidence of harm.",
        "path": "mother/checkups/plastics-water",
        "art": "environment",
        "window": "Ongoing prevention spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-21/"
      }
    ],
    "baby": [
      {
        "title": "Hearing and familiar voices",
        "description": "Learn how hearing develops and what sound studies actually measure.",
        "path": "baby/senses/hearing",
        "art": "senses",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "The placenta's continuing work",
        "description": "Follow oxygen and nutrient exchange as the baby grows.",
        "path": "baby/placenta/exchange",
        "art": "placenta",
        "window": "Ongoing fetal physiology",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-21/"
      },
      {
        "title": "Fine hair begins to spread",
        "description": "Learn about lanugo as a continuing process, not a precise weekly deadline.",
        "path": "baby/skin/lanugo",
        "art": "skin",
        "window": "Developing across mid-pregnancy",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-21/"
      }
    ]
  },

 22:{
  mother:[
   {title:'Stretch marks & changing skin',description:'Why marks may become noticeable as the abdomen grows, and what prevention studies actually found.',path:'mother/skin/prevention',art:'skin',window:'Around week 22 · timing varies',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/'},
   {title:'Back & pelvic comfort',description:'Explore movement, pelvic support and research on discomfort during the growing-bump stage.',path:'mother/movement/pain',art:'body',window:'Mid-pregnancy · featured this week',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/'},
   {title:'Choline, iodine & folate',description:'Learn about nutrient roles and mixed findings from additional supplementation studies.',path:'mother/nutrition/brain-nutrients',art:'brain',window:'Nutrition spotlight · not a week-specific requirement',source:'https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/'}
  ],
  baby:[
   {title:'Fine hair covers the body',description:'Lanugo is part of the changing fetal skin.',path:'baby/skin/lanugo',art:'skin',window:'Around week 22',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'The first stool begins to form',description:'Meconium develops in the intestinal tract before birth.',path:'baby/digestion/meconium',art:'digestion',window:'Around week 22',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Developing muscles & movement',description:'Explore the relationship between skeletal development and increasingly noticeable movement.',path:'baby/movement/muscles',art:'movement',window:'Around week 22 · continuing muscle development',source:'https://medlineplus.gov/ency/article/002398.htm'}
  ]
 },
 23:{
  mother:[
   {title:'Breast changes & early milk',description:'Some parents notice colostrum leakage around this stage; timing and experience vary.',path:'mother/body/early-milk',art:'breast',window:'Around week 23 · not universal',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'},
   {title:'Rib comfort & breathlessness',description:'Understand chest and rib changes, and when symptoms need urgent assessment.',path:'mother/body/rib-comfort',art:'ribs',window:'Around week 23 · timing varies',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'},
   {title:'Iron & blood formation',description:'Connect the developing blood-forming system with the role of iron in maternal nutrition.',path:'mother/nutrition/minerals',art:'blood',window:'Nutrition spotlight · not a new supplement requirement',source:'https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/'}
  ],
  baby:[
   {title:'Lower airways develop',description:'Branching lung structures continue to form before the baby can breathe air.',path:'baby/growth/lungs',art:'lungs',window:'Weeks 23–25',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Bone marrow & blood cells',description:'Bone marrow becomes a site of blood-cell production.',path:'baby/growth/blood',art:'marrow',window:'Weeks 23–25',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Getting to know movement patterns',description:'Read about increasingly noticeable movement and when to contact the maternity team.',path:'baby/movement/patterns',art:'movement',window:'Mid-pregnancy · featured this week',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'}
  ]
 },
"24": {
    "mother": [
      {
        "title": "Understanding glucose screening",
        "description": "Why blood sugar is commonly assessed during weeks 24–28.",
        "path": "mother/checkups/glucose-screening",
        "art": "glucose",
        "window": "Weeks 24–28 · US guidance",
        "source": "https://www.acog.org/womens-health/faqs/gestational-diabetes"
      },
      {
        "title": "Food and energy",
        "description": "Explore nutrient adequacy and the difference between appetite and an intake prescription.",
        "path": "mother/nutrition/food",
        "art": "nutrition",
        "window": "Nutrition spotlight · mid-pregnancy",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Pelvic floor function",
        "description": "Understand support, coordination and the evidence on leakage.",
        "path": "mother/body/pelvic-floor",
        "art": "body",
        "window": "Mid-pregnancy learning spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-24/"
      }
    ],
    "baby": [
      {
        "title": "The developing airway tree",
        "description": "Follow the branches of the lungs rather than treating week 24 as a new milestone.",
        "path": "baby/growth/airway-branches",
        "art": "lungs",
        "window": "Weeks 23–25",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Oxygen before the first breath",
        "description": "Discover why the placenta remains the exchange organ before birth.",
        "path": "baby/placenta/exchange",
        "art": "placenta",
        "window": "Ongoing fetal physiology",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Early fat stores",
        "description": "Learn how developing tissues begin storing fat.",
        "path": "baby/growth/fat-stores",
        "art": "fat",
        "window": "Weeks 23–25",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "25": {
    "mother": [
      {
        "title": "Indigestion and heartburn",
        "description": "Why reflux can become noticeable and when discomfort needs assessment.",
        "path": "mother/digestion/heartburn",
        "art": "reflux",
        "window": "Around this stage · timing varies",
        "source": "https://www.nhs.uk/pregnancy/common-symptoms/indigestion-and-heartburn/"
      },
      {
        "title": "Iron and maternal circulation",
        "description": "Understand hemoglobin and why clinical iron status matters.",
        "path": "mother/nutrition/minerals",
        "art": "blood",
        "window": "Nutrition spotlight · not a new dose",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Preparing your birth preferences",
        "description": "Explore support and comfort research without a mandatory deadline.",
        "path": "mother/body/birth-preparation",
        "art": "checkups",
        "window": "Read ahead · optional preparation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-25/"
      }
    ],
    "baby": [
      {
        "title": "Where blood cells form",
        "description": "Explore the changing role of the bone marrow.",
        "path": "baby/growth/blood",
        "art": "marrow",
        "window": "Weeks 23–25",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Amniotic fluid and the kidneys",
        "description": "Learn how fetal urine contributes to the fluid environment.",
        "path": "baby/digestion/amniotic-fluid",
        "art": "fluid",
        "window": "Around week 25 · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-25/"
      },
      {
        "title": "Activity and familiar sounds",
        "description": "Explore responses to sound without treating them as intelligence training.",
        "path": "baby/senses/voice-music",
        "art": "senses",
        "window": "Mid-pregnancy research spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-25/"
      }
    ]
  },
  "26": {
    "mother": [
      {
        "title": "Rest and emotional wellbeing",
        "description": "Explore sleep, activity and support as pregnancy progresses.",
        "path": "mother/movement/mood",
        "art": "rest",
        "window": "Mid-pregnancy learning spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-26/"
      },
      {
        "title": "Safer home and work environments",
        "description": "Review established exposure concerns and practical controls.",
        "path": "mother/checkups/home-work",
        "art": "environment",
        "window": "Ongoing prevention spotlight",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-26/"
      },
      {
        "title": "Brain-supporting nutrients",
        "description": "Understand DHA, iodine and choline research without extra-dose promises.",
        "path": "mother/nutrition/brain-nutrients",
        "art": "brain",
        "window": "Nutrition spotlight · ongoing",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      }
    ],
    "baby": [
      {
        "title": "Developing eyes",
        "description": "Explore eye structures and the gradual development of visual function.",
        "path": "baby/senses/eyes",
        "art": "eye",
        "window": "Around week 26",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Responding to sound",
        "description": "A startle response may occur as sensory systems develop.",
        "path": "baby/senses/startle",
        "art": "senses",
        "window": "Around week 26",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Air sacs take shape",
        "description": "Understand the distinction between developing air sacs and mature breathing.",
        "path": "baby/growth/air-sacs",
        "art": "alveoli",
        "window": "Around week 26",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "27": {
    "mother": [
      {
        "title": "Looking ahead to birth",
        "description": "Explore care choices, continuous support and preferences.",
        "path": "mother/body/birth-preparation",
        "art": "checkups",
        "window": "Read ahead · approaching third trimester",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-27/"
      },
      {
        "title": "Back and core comfort",
        "description": "Explore changing abdominal support and individualized rehabilitation.",
        "path": "mother/body/core",
        "art": "body",
        "window": "Ongoing physical adaptation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-27/"
      },
      {
        "title": "Prenatal follow-up",
        "description": "Review care questions and screening windows, not a rigid appointment schedule.",
        "path": "mother/checkups/prenatal",
        "art": "glucose",
        "window": "Ongoing care · individualized",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-27/"
      }
    ],
    "baby": [
      {
        "title": "Rapid brain growth",
        "description": "Explore nervous-system maturation as a continuing developmental process.",
        "path": "baby/growth/brain-growth",
        "art": "brain",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Surfactant and the developing lungs",
        "description": "Learn why this substance matters to future air breathing.",
        "path": "baby/growth/surfactant",
        "art": "alveoli",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Eyelid movements",
        "description": "Discover opening and closing of eyelids without predicting visual ability.",
        "path": "baby/senses/eyelids",
        "art": "eye",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
"28": {
    "mother": [
      {
        "title": "The third trimester begins",
        "description": "Explore how preparation, physical comfort and care questions change.",
        "path": "mother/body/third-trimester",
        "art": "body",
        "window": "Weeks 28–40 · new stage",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-28/"
      },
      {
        "title": "Whooping cough protection",
        "description": "Understand the US vaccination window and how antibodies protect newborns.",
        "path": "mother/checkups/tdap",
        "art": "antibodies",
        "window": "US guidance · weeks 27–36",
        "source": "https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/"
      },
      {
        "title": "Preparing a safe sleep space",
        "description": "Learn about newborn sleep safety before birth.",
        "path": "mother/checkups/sleep-preparation",
        "art": "crib",
        "window": "Read ahead · newborn preparation",
        "source": "https://www.cdc.gov/sudden-infant-death/sleep-safely/"
      }
    ],
    "baby": [
      {
        "title": "A changing heartbeat",
        "description": "Understand the developing heart and why a reference is not a home monitoring target.",
        "path": "baby/growth/heart-development",
        "art": "heart",
        "window": "Around week 28 · ongoing development",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-28/"
      },
      {
        "title": "Surfactant and air sacs",
        "description": "Explore the changing lungs as they prepare for breathing after birth.",
        "path": "baby/growth/surfactant",
        "art": "alveoli",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Antibodies from mother to baby",
        "description": "Explore temporary passive immune protection before birth.",
        "path": "baby/placenta/antibody-transfer",
        "art": "antibodies",
        "window": "Ongoing placental physiology",
        "source": "https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/vaccinating-pregnant-patients.html"
      }
    ]
  },
  "29": {
    "mother": [
      {
        "title": "Balance and changing posture",
        "description": "Explore why familiar movements may feel different as your bump grows.",
        "path": "mother/movement/balance",
        "art": "balance",
        "window": "Around week 29 · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
      },
      {
        "title": "Birth preferences and support",
        "description": "Compare research on labor support, comfort and communication.",
        "path": "mother/body/birth-preparation",
        "art": "checkups",
        "window": "Read ahead · optional preparation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
      },
      {
        "title": "Feeding choices before birth",
        "description": "Explore breastfeeding, formula and mixed feeding without pressure.",
        "path": "mother/body/feeding-preparation",
        "art": "breast",
        "window": "Read ahead · feeding preparation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
      }
    ],
    "baby": [
      {
        "title": "Nervous-system control",
        "description": "Explore how the growing brain participates in body function.",
        "path": "baby/growth/neural-control",
        "art": "brain",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "The changing skin covering",
        "description": "Learn how vernix and fine hair change as development continues.",
        "path": "baby/skin/vernix-later",
        "art": "vernix",
        "window": "Around week 29 · timing varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
      },
      {
        "title": "Organ maturation and growth",
        "description": "Connect tissue growth with ongoing brain and lung development.",
        "path": "baby/growth/maturation",
        "art": "fat",
        "window": "Later pregnancy · continuing process",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-29/"
      }
    ]
  },
"30": {
    "mother": [
      {
        "title": "Sleep and vivid dreams",
        "description": "Understand late-pregnancy sleep disruption and emotional support.",
        "path": "mother/movement/sleep-changes",
        "art": "rest",
        "window": "Around week 30 · experience varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-30/"
      },
      {
        "title": "Breathing and rib comfort",
        "description": "Distinguish common physical changes from symptoms that need urgent assessment.",
        "path": "mother/body/rib-comfort",
        "art": "ribs",
        "window": "Ongoing late-pregnancy comfort",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-30/"
      },
      {
        "title": "Planning support after birth",
        "description": "Consider meals, practical help, feeding support and recovery before delivery.",
        "path": "mother/body/postpartum-planning",
        "art": "checkups",
        "window": "Read ahead · optional preparation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-30/"
      }
    ],
    "baby": [
      {
        "title": "Developing visual focus",
        "description": "Explore the connection between eyes and the developing brain.",
        "path": "baby/senses/visual-focus",
        "art": "eye",
        "window": "Around week 30 · visual maturation continues",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-30/"
      },
      {
        "title": "Brain and body communication",
        "description": "Understand how nervous-system control develops.",
        "path": "baby/growth/neural-control",
        "art": "brain",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Preparing the lungs for air",
        "description": "Explore surfactant and why lung maturity is gradual.",
        "path": "baby/growth/surfactant",
        "art": "alveoli",
        "window": "Weeks 27–30",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "31": {
    "mother": [
      {
        "title": "Practice contractions and preterm labor",
        "description": "Understand uterine tightening and when to contact the maternity team.",
        "path": "mother/body/contractions",
        "art": "uterus",
        "window": "Around week 31 · urgent signs override reading",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-31/"
      },
      {
        "title": "Calcium, iron and vitamin D",
        "description": "Explore nutrient adequacy and the evidence behind supplementation.",
        "path": "mother/nutrition/bone-minerals",
        "art": "nutrition",
        "window": "Nutrition spotlight · not a new dose schedule",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Measuring growth and position",
        "description": "Learn what clinicians assess and why fetal position can still change.",
        "path": "mother/checkups/growth-position",
        "art": "checkups",
        "window": "Late-pregnancy care context",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-31/"
      }
    ],
    "baby": [
      {
        "title": "Building mineral reserves",
        "description": "Understand accumulation of iron, calcium and phosphorus.",
        "path": "baby/growth/mineral-stores",
        "art": "mineral",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Bones are formed but still soft",
        "description": "Explore ongoing skeletal development.",
        "path": "baby/movement/bone-maturation",
        "art": "bone",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Practising breathing movements",
        "description": "Discover how the diaphragm and respiratory system develop before birth.",
        "path": "baby/growth/breathing-practice",
        "art": "lungs",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
"14": {
    "mother": [
      {
        "title": "Entering the second trimester",
        "description": "Understand changing symptoms and care needs.",
        "path": "mother/body/second-trimester",
        "art": "body",
        "window": "Weeks 14–27",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/"
      },
      {
        "title": "Pelvic support and coordination",
        "description": "Explore pelvic floor evidence without a prescribed exercise deadline.",
        "path": "mother/body/pelvic-floor",
        "art": "body",
        "window": "Ongoing learning",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/"
      },
      {
        "title": "Food and nutrient adequacy",
        "description": "Review diet and prenatal nutrition.",
        "path": "mother/nutrition/food",
        "art": "nutrition",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      }
    ],
    "baby": [
      {
        "title": "Developing tooth buds",
        "description": "Discover early tooth structures.",
        "path": "baby/growth/tooth-buds",
        "art": "bone",
        "window": "Weeks 11–14",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Blood formation in the liver",
        "description": "Learn how blood-forming sites change.",
        "path": "baby/growth/liver-blood",
        "art": "blood",
        "window": "Weeks 11–14",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Growing and moving",
        "description": "Explore changing body proportions.",
        "path": "baby/growth/anatomy",
        "art": "growth",
        "window": "Ongoing development",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-14/"
      }
    ]
  },
  "15": {
    "mother": [
      {
        "title": "Balance as your body changes",
        "description": "Explore changing posture and mobility.",
        "path": "mother/movement/balance",
        "art": "balance",
        "window": "Experience varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-15/"
      },
      {
        "title": "Skin and hair changes",
        "description": "Understand comfort and ingredient safety.",
        "path": "mother/skin",
        "art": "skin",
        "window": "Ongoing skin research",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-15/"
      },
      {
        "title": "Calcium and vitamin D",
        "description": "Explore nutrient roles and limitations.",
        "path": "mother/nutrition/bone-minerals",
        "art": "mineral",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      }
    ],
    "baby": [
      {
        "title": "The developing skeleton",
        "description": "Understand early skeletal structures.",
        "path": "baby/movement/early-bones",
        "art": "bone",
        "window": "Weeks 15–18",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Fine hair and the skin",
        "description": "Learn about continuing skin development.",
        "path": "baby/skin/lanugo",
        "art": "skin",
        "window": "Developing over time",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-15/"
      },
      {
        "title": "Early sensory pathways",
        "description": "Explore gradual hearing development.",
        "path": "baby/senses/hearing",
        "art": "senses",
        "window": "Broad developmental context",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-15/"
      }
    ]
  },
  "16": {
    "mother": [
      {
        "title": "Moving and staying active",
        "description": "Compare exercise research and individual circumstances.",
        "path": "mother/movement/activity",
        "art": "movement",
        "window": "Ongoing activity research",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-16/"
      },
      {
        "title": "Nutrient roles in brain development",
        "description": "Compare choline and iodine research.",
        "path": "mother/nutrition/brain-nutrients",
        "art": "brain",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Support for the growing abdomen",
        "description": "Explore the abdominal wall and physical adaptation.",
        "path": "mother/body/core",
        "art": "body",
        "window": "Ongoing adaptation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-16/"
      }
    ],
    "baby": [
      {
        "title": "Facial and limb movements",
        "description": "Explore early muscle and nervous system activity.",
        "path": "baby/movement/early-facial-movement",
        "art": "movement",
        "window": "Around week 16",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-16/"
      },
      {
        "title": "Muscles and bones together",
        "description": "Learn how movement depends on developing structures.",
        "path": "baby/movement/muscles",
        "art": "bone",
        "window": "Weeks 15–18",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "The placenta supplies nourishment",
        "description": "Explore oxygen and nutrient exchange.",
        "path": "baby/placenta/exchange",
        "art": "placenta",
        "window": "Ongoing physiology",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "17": {
    "mother": [
      {
        "title": "Birth settings and preferences",
        "description": "Begin exploring options without a decision deadline.",
        "path": "mother/body/birth-preparation",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-17/"
      },
      {
        "title": "Prenatal supplement quality",
        "description": "Understand label accuracy and evidence.",
        "path": "mother/nutrition/supplements",
        "art": "nutrition",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Workplace and home exposures",
        "description": "Identify relevant hazards and controls.",
        "path": "mother/checkups/home-work",
        "art": "environment",
        "window": "Ongoing prevention",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-17/"
      }
    ],
    "baby": [
      {
        "title": "Sucking movements",
        "description": "Discover developing oral movement.",
        "path": "baby/digestion/sucking",
        "art": "digestion",
        "window": "Weeks 15–18",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Developing fingertips",
        "description": "Understand nail and hand development.",
        "path": "baby/growth/early-nails",
        "art": "skin",
        "window": "Continuing development",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-17/"
      },
      {
        "title": "Eyes and sensory responses",
        "description": "Explore developing eye structures and function.",
        "path": "baby/senses/eyes",
        "art": "eye",
        "window": "Read ahead · later maturation",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-17/"
      }
    ]
  },
  "18": {
    "mother": [
      {
        "title": "Feeling new movements",
        "description": "Understand timing and individual variation.",
        "path": "mother/movement/baby-movement",
        "art": "movement",
        "window": "Around this stage · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-18/"
      },
      {
        "title": "Anatomy scan questions",
        "description": "Understand screening and its limits.",
        "path": "mother/checkups/anatomy-scan",
        "art": "checkups",
        "window": "Mid-pregnancy assessment",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-18/"
      },
      {
        "title": "Pelvic floor and comfort",
        "description": "Explore support, coordination and symptoms.",
        "path": "mother/body/pelvic-floor",
        "art": "body",
        "window": "Ongoing learning",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-18/"
      }
    ],
    "baby": [
      {
        "title": "Touch, sound and oral reflexes",
        "description": "Explore developing sensory and motor connections.",
        "path": "baby/senses/early-touch",
        "art": "senses",
        "window": "Around week 18",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-18/"
      },
      {
        "title": "Early swallowing and sucking",
        "description": "Understand oral movement before birth.",
        "path": "baby/digestion/sucking",
        "art": "digestion",
        "window": "Weeks 15–18",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Skeletal and muscular development",
        "description": "Connect structure with movement.",
        "path": "baby/movement/early-bones",
        "art": "bone",
        "window": "Weeks 15–18",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "19": {
    "mother": [
      {
        "title": "Everyday movement and discomfort",
        "description": "Explore activity and pelvic pain research.",
        "path": "mother/movement/pain",
        "art": "body",
        "window": "Ongoing comfort",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-19/"
      },
      {
        "title": "Fish and DHA",
        "description": "Distinguish nutrient adequacy from cognitive enhancement claims.",
        "path": "mother/nutrition/omega-3",
        "art": "nutrition",
        "window": "Nutrition spotlight",
        "source": "https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/"
      },
      {
        "title": "Preparing for the anatomy assessment",
        "description": "Explore what screening can and cannot show.",
        "path": "mother/checkups/anatomy-scan",
        "art": "checkups",
        "window": "Mid-pregnancy assessment",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-19/"
      }
    ],
    "baby": [
      {
        "title": "Hearing and the nervous system",
        "description": "Explore the gradual development of hearing.",
        "path": "baby/senses/hearing",
        "art": "senses",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Swallowing in the fluid environment",
        "description": "Follow early digestive function.",
        "path": "baby/digestion/swallowing",
        "art": "digestion",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Movement becomes more noticeable",
        "description": "Learn why perception varies.",
        "path": "baby/movement/patterns",
        "art": "movement",
        "window": "Weeks 19–21",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "32": {
    "mother": [
      {
        "title": "Walking and posture",
        "description": "Explore how changing body proportions affect comfort.",
        "path": "mother/movement/balance",
        "art": "balance",
        "window": "Around week 32 · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-32/"
      },
      {
        "title": "RSV protection before or after birth",
        "description": "Understand US prevention options and safety evidence.",
        "path": "mother/checkups/rsv",
        "art": "antibodies",
        "window": "US guidance · weeks 32–36, seasonal",
        "source": "https://www.cdc.gov/rsv/hcp/vaccine-clinical-guidance/pregnant-people.html"
      },
      {
        "title": "Preparing recovery support",
        "description": "Learn about flexible postpartum plans.",
        "path": "mother/body/postpartum-planning",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-32/"
      }
    ],
    "baby": [
      {
        "title": "Practice breathing movements",
        "description": "Explore movements before air breathing.",
        "path": "baby/growth/breathing-practice",
        "art": "lungs",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Fat stores and warmth",
        "description": "Understand why body composition changes.",
        "path": "baby/growth/temperature",
        "art": "fat",
        "window": "Late pregnancy",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-32/"
      },
      {
        "title": "Mineral accumulation",
        "description": "Follow continued mineral storage.",
        "path": "baby/growth/mineral-stores",
        "art": "mineral",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "33": {
    "mother": [
      {
        "title": "Uterine tightening",
        "description": "Know when possible preterm signs need care.",
        "path": "mother/body/contractions",
        "art": "uterus",
        "window": "Around this stage · safety first",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-33/"
      },
      {
        "title": "Safe transport preparation",
        "description": "Explore choosing and fitting an infant restraint.",
        "path": "mother/checkups/car-seat",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-33/"
      },
      {
        "title": "Rest and emotional support",
        "description": "Understand sleep and changing energy.",
        "path": "mother/movement/sleep-changes",
        "art": "rest",
        "window": "Ongoing comfort",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-33/"
      }
    ],
    "baby": [
      {
        "title": "Flexible skull structures",
        "description": "Learn how skull flexibility relates to growth.",
        "path": "baby/movement/skull",
        "art": "bone",
        "window": "Around week 33",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-33/"
      },
      {
        "title": "Bone and mineral development",
        "description": "Understand ongoing skeletal maturation.",
        "path": "baby/movement/bone-maturation",
        "art": "bone",
        "window": "Weeks 31–34",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Brain and body coordination",
        "description": "Explore maturation without a completion deadline.",
        "path": "baby/growth/neural-control",
        "art": "brain",
        "window": "Continuing development",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "34": {
    "mother": [
      {
        "title": "When the baby moves lower",
        "description": "Understand possible pressure changes.",
        "path": "mother/body/engagement",
        "art": "body",
        "window": "Late pregnancy · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-34/"
      },
      {
        "title": "Growth and position assessments",
        "description": "Learn what clinicians can assess.",
        "path": "mother/checkups/growth-position",
        "art": "checkups",
        "window": "Individual care",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-34/"
      },
      {
        "title": "Feeding support before birth",
        "description": "Explore feeding choices without pressure.",
        "path": "mother/body/feeding-preparation",
        "art": "breast",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-34/"
      }
    ],
    "baby": [
      {
        "title": "A curled position in the uterus",
        "description": "Explore changing physical space.",
        "path": "baby/growth/flexed-position",
        "art": "movement",
        "window": "Around week 34",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-34/"
      },
      {
        "title": "Oxygen before birth",
        "description": "Connect breathing movements and placental exchange.",
        "path": "baby/placenta/exchange",
        "art": "placenta",
        "window": "Ongoing physiology",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Lung maturation",
        "description": "Follow the respiratory system's continuing development.",
        "path": "baby/growth/surfactant",
        "art": "alveoli",
        "window": "Continuing maturation",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "35": {
    "mother": [
      {
        "title": "Early milk and breast comfort",
        "description": "Explore colostrum and feeding support.",
        "path": "mother/body/early-milk",
        "art": "breast",
        "window": "Experience varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-35/"
      },
      {
        "title": "Group B strep screening questions",
        "description": "Understand the upcoming US screening window.",
        "path": "mother/checkups/gbs",
        "art": "checkups",
        "window": "Read ahead · 36–37 weeks US",
        "source": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns"
      },
      {
        "title": "Preparing practical support",
        "description": "Consider help and recovery needs.",
        "path": "mother/body/postpartum-planning",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-35/"
      }
    ],
    "baby": [
      {
        "title": "Fat under the skin",
        "description": "Explore body composition and warmth.",
        "path": "baby/growth/temperature",
        "art": "fat",
        "window": "Weeks 35–37",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Activity and sleep patterns",
        "description": "Understand emerging patterns and movement safety.",
        "path": "baby/growth/sleep-patterns",
        "art": "rest",
        "window": "Weeks 35–37",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Continuing movement",
        "description": "Know why usual movements remain important.",
        "path": "baby/movement/patterns",
        "art": "movement",
        "window": "Throughout late pregnancy",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "36": {
    "mother": [
      {
        "title": "Group B strep and newborn protection",
        "description": "Learn why US screening is offered.",
        "path": "mother/checkups/gbs",
        "art": "checkups",
        "window": "US guidance · 36 0/7–37 6/7 weeks",
        "source": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns"
      },
      {
        "title": "When the baby is not head down",
        "description": "Understand clinical options and their limits.",
        "path": "mother/body/breech-discussion",
        "art": "body",
        "window": "Individual clinical discussion",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-36/"
      },
      {
        "title": "Birth support and preferences",
        "description": "Review flexible choices and communication.",
        "path": "mother/body/birth-preparation",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-36/"
      }
    ],
    "baby": [
      {
        "title": "Sucking and feeding coordination",
        "description": "Learn about oral development before birth.",
        "path": "baby/digestion/feeding-readiness",
        "art": "digestion",
        "window": "Late pregnancy",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-36/"
      },
      {
        "title": "Respiratory maturation",
        "description": "Understand ongoing lung development.",
        "path": "baby/growth/surfactant",
        "art": "alveoli",
        "window": "Continuing maturation",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Sleep and activity patterns",
        "description": "Explore emerging patterns, not a home test.",
        "path": "baby/growth/sleep-patterns",
        "art": "rest",
        "window": "Weeks 35–37",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      }
    ]
  },
  "37": {
    "mother": [
      {
        "title": "Early term and birth timing",
        "description": "Understand US gestational-age terminology.",
        "path": "mother/checkups/due-date",
        "art": "checkups",
        "window": "US term context",
        "source": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      },
      {
        "title": "Possible labor signs",
        "description": "Learn when to contact maternity care.",
        "path": "mother/body/labor-signs",
        "art": "uterus",
        "window": "Late pregnancy",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-37/"
      },
      {
        "title": "Emotional support after delivery",
        "description": "Prepare for changing needs and mood.",
        "path": "mother/movement/mood",
        "art": "rest",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-37/"
      }
    ],
    "baby": [
      {
        "title": "Early term versus full term",
        "description": "Understand why 37 weeks is not full term.",
        "path": "baby/growth/term-context",
        "art": "growth",
        "window": "US definitions",
        "source": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      },
      {
        "title": "Maturing muscles and bones",
        "description": "Explore ongoing skeletal development.",
        "path": "baby/movement/bone-maturation",
        "art": "bone",
        "window": "Continuing maturation",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Facial movements and expression",
        "description": "Learn why movements do not prove emotion.",
        "path": "baby/movement/early-facial-movement",
        "art": "movement",
        "window": "Ongoing movement",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-37/"
      }
    ]
  },
  "38": {
    "mother": [
      {
        "title": "Labor and when to call",
        "description": "Review signs and individual contact instructions.",
        "path": "mother/body/labor-signs",
        "art": "uterus",
        "window": "Late pregnancy",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-38/"
      },
      {
        "title": "Your care plan near the due date",
        "description": "Explore follow-up and options.",
        "path": "mother/checkups/due-date",
        "art": "checkups",
        "window": "Individual care",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-38/"
      },
      {
        "title": "Newborn sleep preparation",
        "description": "Review a safe sleeping environment.",
        "path": "mother/checkups/sleep-preparation",
        "art": "crib",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-38/"
      }
    ],
    "baby": [
      {
        "title": "Fine hair thins",
        "description": "Discover changing lanugo.",
        "path": "baby/skin/lanugo-late",
        "art": "skin",
        "window": "Weeks 38–40",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Meconium near birth",
        "description": "Understand the first stool and clinical context.",
        "path": "baby/digestion/meconium-birth",
        "art": "digestion",
        "window": "Near birth",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-38/"
      },
      {
        "title": "Preparing for newborn circulation",
        "description": "Connect placental and newborn physiology.",
        "path": "baby/growth/newborn-transition",
        "art": "placenta",
        "window": "Read ahead",
        "source": "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy"
      }
    ]
  },
  "39": {
    "mother": [
      {
        "title": "Changes in discharge and pressure",
        "description": "Understand possible labor signs and urgent concerns.",
        "path": "mother/body/labor-signs",
        "art": "uterus",
        "window": "Near birth · varies",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-39/"
      },
      {
        "title": "Full term and care preferences",
        "description": "Discuss the individual plan around the due date.",
        "path": "mother/checkups/due-date",
        "art": "checkups",
        "window": "US full-term window",
        "source": "https://www.acog.org/womens-health/faqs/when-pregnancy-goes-past-your-due-date"
      },
      {
        "title": "Feeding choices and support",
        "description": "Review available options before delivery.",
        "path": "mother/body/feeding-preparation",
        "art": "breast",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-39/"
      }
    ],
    "baby": [
      {
        "title": "Changing skin and vernix",
        "description": "Learn about the surface coating near birth.",
        "path": "baby/skin/vernix-later",
        "art": "vernix",
        "window": "Near birth",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-39/"
      },
      {
        "title": "Nails and skin",
        "description": "Explore small changes in visible structures.",
        "path": "baby/skin/late-nails",
        "art": "skin",
        "window": "Weeks 38–40",
        "source": "https://medlineplus.gov/ency/article/002398.htm"
      },
      {
        "title": "Full term is an age category",
        "description": "Understand maturity and individual variability.",
        "path": "baby/growth/term-context",
        "art": "growth",
        "window": "US definitions",
        "source": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/11/definition-of-term-pregnancy"
      }
    ]
  },
  "40": {
    "mother": [
      {
        "title": "The estimated due date",
        "description": "Review follow-up and possible next steps with care.",
        "path": "mother/checkups/due-date",
        "art": "checkups",
        "window": "Due date is an estimate",
        "source": "https://www.acog.org/womens-health/faqs/when-pregnancy-goes-past-your-due-date"
      },
      {
        "title": "Labor and urgent symptoms",
        "description": "Know when to contact the maternity team.",
        "path": "mother/body/labor-signs",
        "art": "uterus",
        "window": "Immediate safety",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-40/"
      },
      {
        "title": "Planning the first days after birth",
        "description": "Explore recovery, practical help and feeding.",
        "path": "mother/body/postpartum-planning",
        "art": "checkups",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-40/"
      }
    ],
    "baby": [
      {
        "title": "From placenta to newborn life",
        "description": "Explore respiratory and circulatory transition.",
        "path": "baby/growth/newborn-transition",
        "art": "placenta",
        "window": "Birth transition",
        "source": "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy"
      },
      {
        "title": "Usual movement remains important",
        "description": "Do not dismiss reduced or changed movement.",
        "path": "baby/movement/patterns",
        "art": "movement",
        "window": "Until birth",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-40/"
      },
      {
        "title": "Feeding and warmth after birth",
        "description": "Explore individual transition and feeding support.",
        "path": "baby/digestion/feeding-readiness",
        "art": "digestion",
        "window": "Read ahead",
        "source": "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/3rd-trimester/week-40/"
      }
    ]
  }
}
