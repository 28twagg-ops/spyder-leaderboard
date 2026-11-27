/** Stage-aware editorial directory, never a personalized medication or supplement plan. */
export const healthResearchGroups=[
 {title:'Essential nutrient roles',description:'Food, adequacy and developmental biology',items:[
 ['mother/nutrition/folic-acid','Folic acid','Preconception and early pregnancy · established prevention'],
 ['mother/nutrition/choline','Choline','Often overlooked · cell membranes and brain research'],
 ['mother/nutrition/iodine','Iodine','Thyroid hormones · avoid excess'],
 ['mother/nutrition/vitamin-b12','Vitamin B12','Blood and nervous-system function'],
 ['mother/nutrition/omega-3','DHA and omega-3','Fish choices and mixed outcome evidence'],
 ['mother/nutrition/iron','Iron','Blood formation and deficiency'],
 ['mother/nutrition/calcium','Calcium','Skeletal health and prevention debate'],
 ['mother/nutrition/vitamin-d','Vitamin D','Calcium regulation and deficiency'],
 ['mother/nutrition/vitamin-e','Vitamin E','Antioxidant function and dietary adequacy'],
 ['mother/nutrition/magnesium','Magnesium','Muscle and nerve function'],
 ['mother/nutrition/zinc','Zinc','Growth and enzyme function'],
 ['mother/nutrition/vitamin-a','Vitamin A','Essential nutrient · excess preformed vitamin A risk']
 ]},
 {title:'Medicines and symptom research',description:'Discuss the specific indication and timing with a clinician',items:[
 ['mother/checkups/medicines','Medication review','Before conception and throughout pregnancy'],
 ['mother/checkups/aspirin-prevention','Preventive aspirin','Risk-based · discuss early, not for everyone'],
 ['mother/checkups/pain-medicines','Pain and fever medicines','NSAID safety changes around week 20'],
 ['mother/digestion/b6-doxylamine','Vitamin B6 and doxylamine','Nausea research and clinical guidance']
 ]},
 {title:'Claims, quality and emerging research',description:'Compare evidence instead of adding products',items:[
 ['mother/nutrition/folate-forms','MTHFR and folate forms','Established prevention versus marketing claims'],
 ['mother/nutrition/supplements','Prenatal supplement quality','Label accuracy, testing and overlap'],
 ['mother/nutrition/emerging-supplements','Creatine and herbal products','Experimental evidence and unresolved safety'],
 ['mother/digestion/gut-health','Probiotics','Outcome-specific evidence and possible harms']
 ]}
] as const

/** Candidate descriptive population statistics. Not a clinical risk score, dosage or cleared chart. */
export const nutrientSpotlights=[
 {path:'mother/nutrition/choline',name:'Choline',stat:'93%',measure:'Did not exceed adequate intake',context:'Brain development and cell membranes · often overlooked in prenatals',source:'ECHO'},
 {path:'mother/nutrition/magnesium',name:'Magnesium',stat:'39–41%',measure:'Below estimated average requirement',context:'Muscle and nerve function',source:'ECHO'},
 {path:'mother/nutrition/vitamin-d',name:'Vitamin D',stat:'20–38%',measure:'Below estimated average requirement',context:'Calcium regulation and bones',source:'ECHO'},
 {path:'mother/nutrition/vitamin-e',name:'Vitamin E',stat:'17–22%',measure:'Below estimated average requirement',context:'Cell protection and food adequacy',source:'ECHO'}
] as const
export const priorityNutrientPaths=new Set<string>([...nutrientSpotlights.map(x=>x.path),'mother/nutrition/iron','mother/nutrition/iodine','mother/nutrition/folic-acid'])
