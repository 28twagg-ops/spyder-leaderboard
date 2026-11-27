import { describe,expect,it } from 'vitest'
import { searchArticles } from './researchCatalog'

// Fixed synthetic queries. The fresh set is same-agent, not independent user evidence.
const development: [string,number][]=[
  [
    "getting ready to have a baby",
    1
  ],
  [
    "men preparing for conception",
    3
  ],
  [
    "prenatal multivitamin options",
    6
  ],
  [
    "omega three fatty acids",
    7
  ],
  [
    "workplace solvents",
    10
  ],
  [
    "pesticide exposure during pregnancy",
    12
  ],
  [
    "first obstetric visit",
    13
  ],
  [
    "baby development in womb",
    14
  ],
  [
    "food poisoning when pregnant",
    15
  ],
  [
    "lifting weights in pregnancy",
    16
  ],
  [
    "pregnancy nausea relief",
    17
  ],
  [
    "itchy stretching skin",
    18
  ],
  [
    "pelvic discomfort before delivery",
    20
  ],
  [
    "preparing for childbirth",
    21
  ],
  [
    "cesarean scar",
    26
  ],
  [
    "abdominal muscles split",
    27
  ],
  [
    "postnatal mental health",
    29
  ],
  [
    "starting contraception after childbirth",
    30
  ],
  [
    "baby drinking formula and breastmilk",
    32
  ],
  [
    "low milk production",
    34
  ],
  [
    "baby on stomach sleeping",
    36
  ],
  [
    "infant trouble breathing",
    37
  ],
  [
    "newborn hearing test",
    38
  ],
  [
    "infant crying for hours",
    40
  ],
  [
    "baby learning to roll",
    43
  ],
  [
    "how much screen time for toddlers",
    45
  ],
  [
    "first foods and food allergy",
    47
  ],
  [
    "toddler dentist",
    49
  ],
  [
    "baby shots schedule",
    50
  ],
  [
    "toilet training age",
    51
  ]
]
const fresh: [string,number][]=[
  [
    "planning a pregnancy as a couple",
    1
  ],
  [
    "folate tablets before trying",
    2
  ],
  [
    "male fertility at work",
    3
  ],
  [
    "ivf procedure information",
    4
  ],
  [
    "healthy meals before pregnancy",
    5
  ],
  [
    "DHA in fish",
    7
  ],
  [
    "iodine and brain health",
    8
  ],
  [
    "lead and cleaning chemicals",
    10
  ],
  [
    "PFAS in drinking water",
    11
  ],
  [
    "pregnancy in hot weather",
    12
  ],
  [
    "prenatal screenings",
    13
  ],
  [
    "growth of fetus",
    14
  ],
  [
    "raw eggs when pregnant",
    15
  ],
  [
    "strength workouts during pregnancy",
    16
  ],
  [
    "ginger for morning nausea",
    17
  ],
  [
    "skin stretchmarks",
    18
  ],
  [
    "breasts change shape",
    19
  ],
  [
    "massage perineum",
    20
  ],
  [
    "baby is breech",
    22
  ],
  [
    "what happens right after baby is born",
    23
  ],
  [
    "postpartum heavy bleeding",
    24
  ],
  [
    "postpartum check up",
    25
  ],
  [
    "csection recovery",
    26
  ],
  [
    "diastasis muscle repair",
    27
  ],
  [
    "leaking urine after childbirth",
    28
  ],
  [
    "depression after delivery",
    29
  ],
  [
    "hair falling out after pregnancy",
    31
  ],
  [
    "combination bottle feeding",
    32
  ],
  [
    "how to prepare baby formula",
    33
  ],
  [
    "breastfeeding milk supply problems",
    34
  ],
  [
    "vitamin d drops newborn",
    35
  ],
  [
    "infant crib safety",
    36
  ],
  [
    "newborn jaundise",
    38
  ],
  [
    "toilet cues for infants",
    39
  ],
  [
    "holding baby skin contact",
    41
  ],
  [
    "reading aloud to baby",
    42
  ],
  [
    "developmental delay screening",
    44
  ],
  [
    "complementary feeding",
    46
  ],
  [
    "toddler picky meals",
    48
  ],
  [
    "herbal tea for infant",
    52
  ]
]
function evaluate(cases:[string,number][]){
 const rows=cases.map(([query,n])=>{
  const id='EV-ART-'+String(n).padStart(3,'0')
  const results=searchArticles(query)
  return {query,id,rank:results.findIndex(a=>a.id===id)+1,results:results.length}
 })
 const top1=rows.filter(r=>r.rank===1).length
 const top3=rows.filter(r=>r.rank>0&&r.rank<=3).length
 console.info('Topic search evaluation:',{total:rows.length,top1,top3,zero:rows.filter(r=>!r.results).length,misses:rows.filter(r=>r.rank===0||r.rank>3)})
 return top3
}
describe('frozen ordinary-language search sets',()=>{
 it('retains improvement on the 30-query development set',()=>expect(evaluate(development)).toBeGreaterThanOrEqual(29))
 it('meets preliminary 90% target on the 40-query fresh set',()=>expect(evaluate(fresh)).toBeGreaterThanOrEqual(36))
 it('does not turn a generic word plus nonsense into a clinical match',()=>expect(searchArticles('baby spaceship')).toEqual([]))
})
