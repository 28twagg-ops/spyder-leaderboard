/** Curated editorial navigation only. No new clinical claims or recommendations. */
export type ReferenceRule={phrases:string[];to:string;label:string;weekPath?:string}
export const referenceRules:ReferenceRule[]=[
  {
    "phrases": [
      "folic acid",
      "methylfolate",
      "MTHFR"
    ],
    "to": "/research/EV-ART-002",
    "label": "Folate and preconception evidence",
    "weekPath": "mother/nutrition/folic-acid"
  },
  {
    "phrases": [
      "prenatal supplements",
      "prenatal vitamins",
      "prenatal vitamin"
    ],
    "to": "/research/EV-ART-006",
    "label": "Prenatal supplement research",
    "weekPath": "mother/nutrition/supplements"
  },
  {
    "phrases": [
      "omega-3",
      "omega 3",
      "DHA"
    ],
    "to": "/research/EV-ART-007",
    "label": "Fish and omega-3 evidence",
    "weekPath": "mother/nutrition/omega-3"
  },
  {
    "phrases": [
      "choline and iodine",
      "choline",
      "iodine"
    ],
    "to": "/research/EV-ART-008",
    "label": "Choline and iodine"
  },
  {
    "phrases": [
      "vitamin D",
      "calcium",
      "probiotics",
      "iron deficiency"
    ],
    "to": "/research/EV-ART-009",
    "label": "Minerals, vitamin D and probiotics"
  },
  {
    "phrases": [
      "dietary adequacy",
      "nutrient adequacy"
    ],
    "to": "/research/EV-ART-005",
    "label": "Food and nutrient adequacy"
  },
  {
    "phrases": [
      "food safety",
      "high-mercury fish",
      "foodborne illness"
    ],
    "to": "/research/EV-ART-015",
    "label": "Food safety in pregnancy",
    "weekPath": "mother/digestion/food-safety"
  },
  {
    "phrases": [
      "stretch mark prevention",
      "preventing stretch marks",
      "new stretch marks",
      "stretch marks",
      "striae"
    ],
    "to": "/research/EV-ART-018",
    "label": "Stretch mark prevention and comfort",
    "weekPath": "mother/skin/prevention"
  },
  {
    "phrases": [
      "collagen peptides",
      "collagen supplements",
      "collagen research"
    ],
    "to": "/research/EV-ART-018",
    "label": "Collagen and skin evidence",
    "weekPath": "mother/skin/prevention/collagen-and-supplements"
  },
  {
    "phrases": [
      "existing stretch marks",
      "established striae",
      "existing marks"
    ],
    "to": "/research/EV-ART-031",
    "label": "Postpartum skin treatment research",
    "weekPath": "mother/skin/treatment"
  },
  {
    "phrases": [
      "melasma",
      "skin pigmentation",
      "dark spots"
    ],
    "to": "/research/EV-ART-031",
    "label": "Skin pigmentation and treatment",
    "weekPath": "mother/skin/acne-pigmentation/dark-spots-and-sun-protection"
  },
  {
    "phrases": [
      "microneedling",
      "laser treatment",
      "elective procedures"
    ],
    "to": "/research/EV-ART-031",
    "label": "Elective treatment evidence",
    "weekPath": "mother/skin/treatment/laser-microneedling-and-other-procedures"
  },
  {
    "phrases": [
      "hair loss",
      "postpartum shedding",
      "hair cycle"
    ],
    "to": "/research/EV-ART-031",
    "label": "Hair and postpartum changes",
    "weekPath": "mother/skin/hair"
  },
  {
    "phrases": [
      "scar care",
      "wound healing",
      "healed scars",
      "cesarean healing"
    ],
    "to": "/research/EV-ART-026",
    "label": "Wound and scar recovery",
    "weekPath": "mother/skin/scar"
  },
  {
    "phrases": [
      "breast changes",
      "breast appearance"
    ],
    "to": "/research/EV-ART-019",
    "label": "Breast changes and appearance",
    "weekPath": "mother/body/breasts"
  },
  {
    "phrases": [
      "diastasis recti",
      "inter-rectus distance",
      "abdominal separation",
      "core strength"
    ],
    "to": "/research/EV-ART-027",
    "label": "Abdominal function and diastasis",
    "weekPath": "mother/body/core"
  },
  {
    "phrases": [
      "pelvic floor training",
      "pelvic floor muscle training",
      "pelvic floor",
      "urinary incontinence"
    ],
    "to": "/research/EV-ART-028",
    "label": "Pelvic floor recovery",
    "weekPath": "mother/body/pelvic-floor"
  },
  {
    "phrases": [
      "pelvic girdle pain",
      "pelvic pain",
      "lumbopelvic discomfort"
    ],
    "to": "/research/EV-ART-020",
    "label": "Pelvic pain and preparation",
    "weekPath": "mother/movement/pain"
  },
  {
    "phrases": [
      "resistance training",
      "strength training",
      "maternal activity",
      "exercise during pregnancy"
    ],
    "to": "/research/EV-ART-016",
    "label": "Movement and strength",
    "weekPath": "mother/movement/activity"
  },
  {
    "phrases": [
      "perineal massage",
      "perineal preparation"
    ],
    "to": "/research/EV-ART-020",
    "label": "Perineal preparation"
  },
  {
    "phrases": [
      "postpartum recovery",
      "postpartum visits"
    ],
    "to": "/research/EV-ART-025",
    "label": "Postpartum recovery"
  },
  {
    "phrases": [
      "mental wellbeing",
      "low mood",
      "postpartum depression",
      "mental health"
    ],
    "to": "/research/EV-ART-029",
    "label": "Mood and family support"
  },
  {
    "phrases": [
      "nausea and vomiting",
      "morning sickness",
      "ginger"
    ],
    "to": "/research/EV-ART-017",
    "label": "Nausea and traditional remedies",
    "weekPath": "mother/digestion/nausea"
  },
  {
    "phrases": [
      "prenatal screening",
      "anatomy scan",
      "prenatal visits"
    ],
    "to": "/research/EV-ART-013",
    "label": "Prenatal screening"
  },
  {
    "phrases": [
      "placental exchange",
      "placental circulation"
    ],
    "to": "/research/EV-ART-014",
    "label": "Placental development",
    "weekPath": "baby/placenta/exchange"
  },
  {
    "phrases": [
      "fetal development",
      "organ development"
    ],
    "to": "/research/EV-ART-014",
    "label": "How the baby develops"
  },
  {
    "phrases": [
      "fetal movement",
      "baby's movements",
      "baby’s movements"
    ],
    "to": "/research/EV-ART-014",
    "label": "Baby development and movement",
    "weekPath": "baby/movement/patterns"
  },
  {
    "phrases": [
      "preconception care",
      "preparing for pregnancy",
      "preconception health"
    ],
    "to": "/research/EV-ART-001",
    "label": "Pregnancy preparation"
  },
  {
    "phrases": [
      "male fertility",
      "paternal fertility",
      "sperm quality",
      "semen quality"
    ],
    "to": "/research/EV-ART-003",
    "label": "Fathers' health and fertility"
  },
  {
    "phrases": [
      "fertility treatment",
      "infertility treatment",
      "acupuncture"
    ],
    "to": "/research/EV-ART-004",
    "label": "Fertility treatment evidence"
  },
  {
    "phrases": [
      "workplace exposure",
      "work exposures",
      "occupational exposure"
    ],
    "to": "/research/EV-ART-010",
    "label": "Home and work exposures",
    "weekPath": "mother/checkups/home-work"
  },
  {
    "phrases": [
      "PFAS",
      "phthalates",
      "BPA",
      "plastic-associated biomarkers",
      "plastic exposure",
      "water filters"
    ],
    "to": "/research-pathways/environment",
    "label": "Plastic and water exposure evidence"
  },
  {
    "phrases": [
      "air pollution",
      "pesticide exposure",
      "heat exposure"
    ],
    "to": "/research/EV-ART-012",
    "label": "Produce, air and heat"
  },
  {
    "phrases": [
      "birth preferences",
      "labor support",
      "labor preparation"
    ],
    "to": "/research/EV-ART-021",
    "label": "Labor and birth preparation"
  },
  {
    "phrases": [
      "skin-to-skin"
    ],
    "to": "/research/EV-ART-041",
    "label": "Skin-to-skin and touch"
  },
  {
    "phrases": [
      "breastfeeding and formula",
      "mixed feeding",
      "feeding choices"
    ],
    "to": "/research/EV-ART-032",
    "label": "Feeding choices"
  },
  {
    "phrases": [
      "formula preparation",
      "powdered formula"
    ],
    "to": "/research/EV-ART-033",
    "label": "Safe formula preparation"
  },
  {
    "phrases": [
      "milk supply",
      "feeding cues"
    ],
    "to": "/research/EV-ART-034",
    "label": "Milk supply and cues"
  },
  {
    "phrases": [
      "infant vitamin D",
      "infant iron"
    ],
    "to": "/research/EV-ART-035",
    "label": "Infant nutrients"
  },
  {
    "phrases": [
      "safe sleep",
      "sleep surface"
    ],
    "to": "/research/EV-ART-036",
    "label": "Safe sleep research"
  },
  {
    "phrases": [
      "elimination communication",
      "diaper cues"
    ],
    "to": "/research/EV-ART-039",
    "label": "Diapers and elimination communication"
  },
  {
    "phrases": [
      "tummy time"
    ],
    "to": "/research/EV-ART-043",
    "label": "Infant movement"
  },
  {
    "phrases": [
      "developmental milestones",
      "developmental screening"
    ],
    "to": "/research/EV-ART-044",
    "label": "Milestones and screening"
  },
  {
    "phrases": [
      "baby-led weaning",
      "baby-led feeding",
      "complementary foods",
      "starting solids"
    ],
    "to": "/research/EV-ART-046",
    "label": "Complementary foods"
  },
  {
    "phrases": [
      "food allergy",
      "allergen introduction",
      "choking prevention"
    ],
    "to": "/research/EV-ART-047",
    "label": "Allergy and choking evidence"
  },
  {
    "phrases": [
      "eczema prevention",
      "infant eczema",
      "atopic dermatitis"
    ],
    "to": "/research-pathways/child-health",
    "label": "Infant eczema and allergy research"
  },
  {
    "phrases": [
      "birth control",
      "contraceptive methods",
      "contraception"
    ],
    "to": "/contraception",
    "label": "Contraception comparison"
  },
  {
    "phrases": [
      "copper IUD",
      "copper intrauterine device"
    ],
    "to": "/contraception/method-copper-iud",
    "label": "Copper IUD profile"
  },
  {
    "phrases": [
      "hormonal IUD",
      "LNG IUD",
      "levonorgestrel IUD"
    ],
    "to": "/contraception/method-hormonal-iud",
    "label": "Hormonal IUD profile"
  },
  {
    "phrases": [
      "progestin-only pill",
      "progesterone-only pill",
      "mini-pill"
    ],
    "to": "/contraception/method-mini-pill",
    "label": "Progestin-only pill profile"
  },
  {
    "phrases": [
      "combined pill",
      "combined oral contraceptives"
    ],
    "to": "/contraception/method-combined-pill",
    "label": "Combined pill profile"
  },
  {
    "phrases": [
      "arm implant",
      "contraceptive implant"
    ],
    "to": "/contraception/method-implant",
    "label": "Implant profile"
  },
  {
    "phrases": [
      "contraceptive injection",
      "depot injection",
      "DMPA"
    ],
    "to": "/contraception/method-injection",
    "label": "Injection profile"
  },
  {
    "phrases": [
      "fertility awareness",
      "cycle tracking"
    ],
    "to": "/contraception/fertility-awareness",
    "label": "Fertility awareness"
  },
  {
    "phrases": [
      "return to fertility",
      "fertility after stopping"
    ],
    "to": "/contraception/return-to-fertility",
    "label": "Return to fertility"
  },
  {
    "phrases": [
      "IUD placement",
      "insertion pain",
      "IUD insertion"
    ],
    "to": "/contraception/placement-pain",
    "label": "IUD placement and pain"
  },
  {
    "phrases": [
      "sexual function",
      "sexual satisfaction",
      "sexual wellbeing",
      "sexual pleasure",
      "libido"
    ],
    "to": "/contraception/sexual-health",
    "label": "Contraception and sexual wellbeing"
  },
  {
    "phrases": [
      "venous thromboembolism",
      "blood clot risk",
      "bone density"
    ],
    "to": "/contraception/physical-long-term",
    "label": "Long-term contraception research"
  },
  {
    "phrases": [
      "Phexxi"
    ],
    "to": "/contraception/product-phexxi",
    "label": "Phexxi product research"
  },
  {
    "phrases": [
      "Opill"
    ],
    "to": "/contraception/product-opill",
    "label": "Opill product research"
  },
  {
    "phrases": [
      "Slynd"
    ],
    "to": "/contraception/product-slynd",
    "label": "Slynd product research"
  },
  {
    "phrases": [
      "internal condom",
      "external condom",
      "spermicide"
    ],
    "to": "/contraception/barriers",
    "label": "Barrier methods and gels"
  },
{"phrases":["raspberry leaf","raspberry leaf tea","dates for labor","warm perineal compress"],"to":"/research-pathways/traditional-birth","label":"Traditional birth preparation"},
{"phrases":["aromatherapy","acupressure","lemon aroma"],"to":"/research-pathways/traditional-nausea","label":"Traditional nausea research"},
{"phrases":["cabbage leaves","abdominal binding","abdominal binder"],"to":"/research-pathways/traditional-recovery","label":"Traditional postpartum comfort"},
{"phrases":["pregnancy folklore","old wives' tales","old wives’ tales"],"to":"/research-pathways/folklore","label":"Pregnancy folklore research"},
{"phrases":["fennel oil","herbal colic remedies","honey for cough"],"to":"/research-pathways/traditional-child","label":"Traditional childhood remedies"}
]
export type TextPart={text:string;to?:string;label?:string}
const escapeRegExp=(text:string)=>text.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')
const normalized=(path:string)=>path.replace(/\/+$/,'')
/** Preserve the current gestational week where a verified detailed reading exists. */
export function referenceDestination(rule:ReferenceRule,pathname:string){
 const week=pathname.match(/^\/timeline\/week\/(\d+)(?:\/|$)/)?.[1]
 return week&&Number(week)>=1&&Number(week)<=40&&rule.weekPath?'/timeline/week/'+week+'/'+rule.weekPath:rule.to
}
export function referenceParts(text:string,pathname:string,maxLinks=2):TextPart[]{
 if(!text||maxLinks<=0)return [{text}]
 const self=normalized(pathname),candidates:{start:number;end:number;to:string;label:string}[]=[]
 for(const rule of referenceRules){
  const to=referenceDestination(rule,pathname)
  if(normalized(to)===self||normalized(rule.to)===self||self.startsWith(normalized(to)+'/'))continue
  for(const phrase of rule.phrases){
   const re=new RegExp('(^|[^\\p{L}\\p{N}_])('+escapeRegExp(phrase)+')(?=$|[^\\p{L}\\p{N}_])','giu')
   for(const match of text.matchAll(re)){const start=match.index!+match[1].length;candidates.push({start,end:start+match[2].length,to,label:rule.label})}
  }
 }
 candidates.sort((a,b)=>a.start-b.start||(b.end-b.start)-(a.end-a.start))
 const parts:TextPart[]=[],used=new Set<string>()
 let cursor=0
 for(const c of candidates){if(used.size>=maxLinks)break;if(c.start<cursor||used.has(c.to))continue;if(c.start>cursor)parts.push({text:text.slice(cursor,c.start)});parts.push({text:text.slice(c.start,c.end),to:c.to,label:c.label});used.add(c.to);cursor=c.end}
 if(cursor<text.length)parts.push({text:text.slice(cursor)})
 return parts.length?parts:[{text}]
}
