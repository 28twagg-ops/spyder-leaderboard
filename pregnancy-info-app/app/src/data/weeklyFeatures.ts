/** Week-specific editorial selection is distinct from shared trimester research.
 * The evidence window is recorded separately from the week in which a topic is featured.
 * Never infer a new medical action, dose, or exact milestone from editorial placement. */
export type PilotWeek=20|21|22|23|24|25|26|27
export const isPilotWeek=(week:number):week is PilotWeek=>week>=20&&week<=27&&Number.isInteger(week)
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
  }
}
