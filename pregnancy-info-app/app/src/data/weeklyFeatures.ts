/** Week-specific editorial selection is distinct from shared trimester research.
 * The evidence window is recorded separately from the week in which a topic is featured.
 * Never infer a new medical action, dose, or exact milestone from editorial placement. */
export type WeeklyFeature={title:string;description:string;path:string;art:string;window:string;source:string}
export const weeklyFeatures:Record<22|23,Record<'mother'|'baby',WeeklyFeature[]>>={
 22:{
  mother:[
   {title:'Stretch marks & changing skin',description:'Why marks may become noticeable as the abdomen grows, and what prevention studies actually found.',path:'mother/skin/prevention',art:'skin',window:'Around week 22 · timing varies',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/'},
   {title:'Back & pelvic comfort',description:'Explore movement, pelvic support and research on discomfort during the growing-bump stage.',path:'mother/movement/pain',art:'body',window:'Mid-pregnancy · featured this week',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/'},
   {title:'Choline, iodine & folate',description:'Learn about nutrient roles and mixed findings from additional supplementation studies.',path:'mother/nutrition/brain-nutrients',art:'brain',window:'Nutrition spotlight · not a week-specific requirement',source:'https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/'}
  ],
  baby:[
   {title:'Fine hair covers the body',description:'Lanugo is part of the changing fetal skin.',path:'baby/skin/lanugo',art:'skin',window:'Around week 22',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'The first stool begins to form',description:'Meconium develops in the intestinal tract before birth.',path:'baby/digestion/meconium',art:'digestion',window:'Around week 22',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Developing muscles & movement',description:'Explore the relationship between skeletal development and increasingly noticeable movement.',path:'baby/movement/muscles',art:'movement',window:'Around week 22',source:'https://medlineplus.gov/ency/article/002398.htm'}
  ]
 },
 23:{
  mother:[
   {title:'Breast changes & early milk',description:'Some parents notice colostrum leakage around this stage; timing and experience vary.',path:'mother/body/breasts',art:'breast',window:'Around week 23 · not universal',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'},
   {title:'Rib comfort & breathlessness',description:'Understand chest and rib changes, and when symptoms need urgent assessment.',path:'mother/body/rib-comfort',art:'ribs',window:'Around week 23 · timing varies',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'},
   {title:'Iron & blood formation',description:'Connect the developing blood-forming system with the role of iron in maternal nutrition.',path:'mother/nutrition/minerals',art:'blood',window:'Nutrition spotlight · not a new supplement requirement',source:'https://ods.od.nih.gov/factsheets/pregnancy-healthprofessional/'}
  ],
  baby:[
   {title:'Lower airways develop',description:'Branching lung structures continue to form before the baby can breathe air.',path:'baby/growth/lungs',art:'lungs',window:'Weeks 23–25',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Bone marrow & blood cells',description:'Bone marrow becomes a site of blood-cell production.',path:'baby/growth/blood',art:'marrow',window:'Weeks 23–25',source:'https://medlineplus.gov/ency/article/002398.htm'},
   {title:'Getting to know movement patterns',description:'Read about increasingly noticeable movement and when to contact the maternity team.',path:'baby/movement/patterns',art:'movement',window:'Mid-pregnancy · featured this week',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'}
  ]
 }
}
