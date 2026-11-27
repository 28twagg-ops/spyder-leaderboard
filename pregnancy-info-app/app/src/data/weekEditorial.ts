/** Editorial research drafts for the two-week visual pilot. References point to the existing source registry.
 * No new dosage recommendations, quantitative outcome release, or clinical clearance. */
export type ReadingSection={title:string;body:string;refs:string[]}
export type TopicEditorial={sections:ReadingSection[];visual?:{title:string;items:[string,string][];caption:string}}
const section=(title:string,body:string,...refs:string[]):ReadingSection=>({title,body,refs})
const make=(sections:ReadingSection[],visual?:TopicEditorial['visual']):TopicEditorial=>({sections,visual})
export const topicEditorial:Record<string,TopicEditorial>={
 'mother/movement/activity':make([
 section('How pregnancy changes movement','As pregnancy progresses, a changing center of gravity and the growing uterus can change how familiar movements feel. Regular activity can support fitness in uncomplicated pregnancies, but individual restrictions and symptoms matter.','P3-33'),
 section('What the strength research actually tested','A study of heavy resistance and supine exercise examined short-term fetal responses during a particular protocol. Acute observations cannot establish the safety of every load, position or repeated training program. The archive records nonprofit funding; the full disclosure still needs confirmation.','P3-18'),
 section('Planning ahead','Discuss the type of exercise you already do, symptoms and any pregnancy-specific restrictions with your care team. Do not use a normal response in a study as personal exercise clearance.','P3-33')
 ]),
 'mother/movement/pain':make([
 section('Why the pelvis can feel different','Pregnancy-related low-back and pelvic girdle pain can affect walking, changing position and everyday activities. Pain and function are separate from the strength of a muscle.','P3-34'),
 section('Comparing approaches','A randomized study compared stabilizing exercises and acupuncture alongside standard care. A separate sham-controlled acupuncture trial is useful for judging how much benefit can be attributed to the specific treatment. These designs are not interchangeable.','P3-21','P3-22'),
 section('What to discuss','A pelvic-health assessment can help distinguish the source of pain and decide whether a tailored rehabilitation approach is appropriate. New or severe pain deserves clinical attention rather than self-treatment.','P3-34')
 ]),
 'mother/movement/baby-movement':make([
 section('Movement is part of development','As muscles and the nervous system develop, fetal movements become more noticeable. What a parent feels can vary with position and other factors. A weekly reference does not predict a particular movement count.','PED-GESTATION','PED-FETUS'),
 section('When a change matters','If your baby’s usual movements slow, stop or change, contact your maternity care team immediately. Do not wait for the next appointment or rely on a home heartbeat check to reassure yourself.','P9-G04')
 ]),
 'mother/movement/mood':make([
 section('Activity and emotional wellbeing','Movement, sleep and mental wellbeing can interact during pregnancy. Reviews examine whether exercise changes symptoms of depression or anxiety, but these outcomes differ from recovery from a diagnosed condition.','P7-61','P7-62'),
 section('What evidence cannot tell us','Different exercise programs, measures and populations make it difficult to prescribe a single approach. The research does not establish that someone who experiences distress simply needs more exercise.','P7-61','P7-62'),
 section('Support matters','Bring persistent anxiety, low mood or difficulty functioning to your care team. Movement may be part of support, not a replacement for mental health care.','S147')
 ]),
 'mother/digestion/nausea':make([
 section('Nausea and vomiting are different outcomes','An intervention may affect the sensation of nausea without reducing vomiting. Studies can measure symptom severity, episodes of vomiting or ability to eat and drink, so a promising result on one measure is not a complete treatment answer.','P7-01','P7-03'),
 section('Ginger and other approaches','Reviews have found more support for ginger in reducing nausea than for vomiting. A network meta-analysis compares multiple approaches indirectly, with limited confidence in some estimates. Its authors reported no external funding and no competing interests; that does not remove methodological limitations.','P7-02','P7-03'),
 section('When comfort measures are not enough','Inability to keep fluids down, dehydration or severe vomiting needs prompt medical attention. Concentrated herbal products should not be assumed equivalent to ordinary food use.','P7-04','P7-63')
 ]),
 'mother/digestion/food-safety':make([
 section('Two goals at once','Adequate nutrition supports pregnancy, while safe storage and preparation reduce exposure to foodborne pathogens. A food can be nutritious and still require careful handling.','P9-G06','P5-28'),
 section('Fish is a good example','Seafood can provide valuable nutrients, including omega-3 fats. Species differ in mercury levels. FDA and EPA guidance distinguishes lower-mercury choices from fish to avoid during pregnancy.','P5-29'),
 section('Useful next steps','Use the original food-safety and fish guidance for specific choices. Talk with your care team if symptoms follow a suspected unsafe meal.','P9-G06')
 ],{title:'Three separate questions',items:[['Nutrition','What nutrients does the food provide?'],['Preparation','How is it stored and cooked?'],['Exposure','Does the choice introduce a relevant hazard?']],caption:'Conceptual framework, not a food ranking.'}),
 'mother/digestion/gut-health':make([
 section('What makes probiotic research complicated','Probiotic products contain different organisms and combinations. A result for one preparation does not automatically apply to another product marketed for gut health.','P5-11'),
 section('Pregnancy outcomes are not settled','Trials and reviews have examined gestational diabetes and hypertensive disorders. They do not establish a routine probiotic strategy to prevent complications. The SPRING trial archive records public and hospital-foundation support and donated study products; report-specific disclosure verification is pending.','P5-11','P5-12','P5-13'),
 section('What to discuss','Consider the specific reason a product is being proposed, whether the relevant outcome was measured, and any safety concerns. Do not substitute a probiotic for indicated screening or care.','P5-11')
 ]),
 'mother/nutrition/food':make([
 section('Nutrients work together','Pregnancy requires energy, protein, fats and many micronutrients. Food supplies a mixture of these, while supplements may help fill particular gaps. The total amount consumed and a supplement label are different things.','P5-28'),
 section('Beyond the usual prenatal vitamin','Choline, iodine and omega-3 fats are worth understanding alongside folate and iron. Food patterns, including vegetarian or vegan diets, can change which nutrient questions are most relevant.','P5-28','P5-29'),
 section('A practical discussion','Review the foods you regularly eat and the label of any prenatal product with a clinician or dietitian. Look for gaps rather than treating each nutrient as another pill to add.','P5-28')
 ],{title:'From food to development',items:[['Food','A varied mix of nutrients'],['Maternal circulation','Nutrients are processed and transported'],['Placenta','Exchange supports fetal growth']],caption:'Simplified relationship; does not quantify nutrient transfer.'}),
 'mother/nutrition/supplements':make([
 section('What a prenatal label can tell you','The ingredient list and amount per serving help identify what a product is intended to supply. They do not guarantee that the measured contents match the label or that more is beneficial.','P5-24','P5-28'),
 section('An independent product-testing example','The U.S. Government Accountability Office commissioned testing of 12 selected prenatal supplements. Some measured amounts differed from labels. This was not a representative ranking of every brand, and the tested products were not named. The investigation was government commissioned rather than funded by a supplement manufacturer.','P5-24','P5-25'),
 section('How to use the information','A clinician or dietitian can compare total food and supplement intake with individual needs. Do not stop a needed prenatal or add overlapping products solely because of this product-testing report.','P5-28')
 ]),
 'mother/nutrition/omega-3':make([
 section('What DHA does','DHA is a long-chain omega-3 fatty acid used in cell membranes, including the developing nervous system. Fish can provide DHA and other nutrients, but mercury guidance also matters.','P5-28','P5-29'),
 section('Birth timing versus brain development','The ORIP trial examined early preterm birth, whereas the DOMInO follow-up examined child cognition. The latter found no clear overall IQ benefit. A finding on birth timing should not be translated into a promise of higher intelligence.','P5-14','P4-12'),
 section('Read funding carefully','ORIP received public and foundation support as well as donated capsules. DOMInO had public grants, donated capsules and disclosed nutrition-industry relationships. These are relevant to transparency, but do not by themselves determine the validity of either result.','P5-14','P4-12')
 ]),
 'mother/nutrition/brain-nutrients':make([
 section('Different nutrients, different roles','Choline supports cell membranes and nervous-system development. Iodine supports thyroid hormone production, which is important for brain development. Folate supports cell division, and folic acid has an established role in neural tube defect prevention before and early in pregnancy.','P5-28','P5-01','P5-02'),
 section('What the choline research found','A small controlled feeding trial reported faster infant information processing, and follow-up of the same cohort reported a benefit on an attention task. A separate trial did not find improved infant cognition. These are not three independent replications of a single benefit.','P4-08','P4-09','P4-10'),
 section('Funding and interpretation','The positive feeding study reported food-industry promotion funding alongside public support. Its follow-up lists public funding and Balchem support. The null trial also reported mixed foundation, public and egg-industry support. Funding patterns deserve scrutiny, but this is not a clean independent-versus-industry experiment.','P4-08','P4-09','P4-10'),
 section('What to explore next','Food sources and total intake are the starting point; eggs and other foods provide choline, and iodine sources depend on the diet. No extra dose or cognitive-performance goal is established here.','P5-28')
 ],{title:'Three roles in development',items:[['Choline','Cell membranes & neural signaling'],['Iodine','Thyroid hormones'],['Folate','Cell division & early neural tube development']],caption:'Biological roles, not proof of benefits from extra supplementation.'}),
 'mother/nutrition/minerals':make([
 section('Iron, calcium and vitamin D','Iron helps form hemoglobin for oxygen transport. Calcium supports the skeleton and other physiological functions. Vitamin D helps regulate calcium metabolism. They are related to development in different ways.','P5-28','P5-19'),
 section('Evidence depends on the outcome','Iron studies address anemia and other pregnancy outcomes. Calcium research on hypertensive disorders is a separate question, with reviews differing in trial selection and trustworthiness assessment. Vitamin D records with unresolved numerical conflicts remain held.','P5-19','P5-05','P5-06','P5-07'),
 section('A starting point for discussion','Food, prenatal products and medical conditions all affect the next decision. Review relevant laboratory results and existing prescriptions with your care team before adding or changing supplements.','P5-28')
 ],{title:'Nutrients have different jobs',items:[['Iron','Oxygen transport'],['Calcium','Bone and muscle function'],['Vitamin D','Calcium regulation']],caption:'Concept summary, not a dosage schedule.'}),
 'mother/body/core':make([
 section('What the abdominal wall does','The abdominal muscles and connective tissues support the trunk. As the uterus grows, the wall adapts; the distance between the two sides of the rectus muscles is one measure researchers use.','P3-14','P3-15'),
 section('What training studies examined','Pregnancy trials have studied abdominal and pelvic floor activation and changes in inter-recti distance. A postpartum curl-up trial reported improved strength without worsening distance. These different stages and protocols cannot establish universal clearance for a specific exercise.','P3-14','P3-15','S028'),
 section('Look beyond a single measurement','Comfort, function, symptoms and individual assessment matter alongside distance. A pelvic-health professional can help with concerns; no home diagnostic cutoff or prescribed routine is provided.','S029','S032')
 ]),
 'mother/body/pelvic-floor':make([
 section('More than strength','The pelvic floor contributes to support and bladder and bowel function. Muscles also need to relax and coordinate. Pain, leakage and excessive tension can require different approaches.','S069','P3-34'),
 section('What the reviews say','A Cochrane review investigated pelvic floor muscle training for urinary and fecal incontinence during and after pregnancy. The registry records publicly funded, unfunded and undeclared-funding studies; unknown support is not independence. Results for leakage do not establish protection from every birth injury.','S069'),
 section('Preparation without a deadline','Perineal massage is a separate, later-stage research topic. This week is an opportunity to understand pelvic health and ask about assessment, not a deadline for a particular internal exercise or massage.','P3-20')
 ]),
 'mother/body/breasts':make([
 section('Pregnancy changes breast tissue','Breast size and shape can change during pregnancy. Feeding decisions and appearance are separate health questions, and there is no single expected cosmetic outcome.','S203'),
 section('What the appearance study can show','An observational study among people seeking breast surgery did not identify breastfeeding as an independent predictor of ptosis. Its selected population and retrospective design limit conclusions about all parents.','S044'),
 section('Comfort without pressure','Supportive garments may be useful for comfort or activity, but no bra or exercise approach guarantees preservation of shape. Feeding choices should not be driven by cosmetic pressure.','S202','S203')
 ]),
 'mother/body/circulation':make([
 section('Why circulation changes are relevant','Pregnancy can affect blood flow and the pressure on veins returning blood from the legs. Swelling and vein symptoms are not the same thing as a blood clot.','S129','S132'),
 section('Compression studies ask specific questions','Some research examines symptoms or leg swelling, while other studies examine venous flow or new varicose veins. A change in one outcome is not proof of prevention of all vein problems. Funding of the original prophylaxis trial remains unverified.','P3-27','S128','S130'),
 section('When to seek help','Painful swelling in one leg, chest pain or difficulty breathing can indicate an urgent problem. Seek immediate medical assessment rather than trying a garment or massage to manage those symptoms.','S131','S132')
 ]),
 'mother/body/birth-preparation':make([
 section('Preparation can start with understanding','Birth support, pain relief, communication and flexibility are distinct parts of preparation. Learning about them now is different from initiating a later-stage intervention.','P7-12'),
 section('What has been studied','Reviews consider continuous support, massage, relaxation and acupuncture or acupressure during labor. They use different comparisons and outcomes; a possible benefit for comfort does not establish that a method changes the course of labor.','P7-12','P7-13','P7-14','P7-15'),
 section('Questions for later','Explore support preferences and care options with your maternity team. Do not use the research to attempt labor induction or a fetal-position maneuver at home.','P7-12')
 ]),
 'mother/checkups/prenatal':make([
 section('What a prenatal visit is for','Prenatal visits combine health history, examination, screening and follow-up. Timing varies with pregnancy circumstances, and a screening test is not the same as a diagnosis.','P9-G02'),
 section('Oral health is worth discussing','Trials have examined whether periodontal treatment changes preterm-birth outcomes. Oral care can be valuable even when a particular pregnancy-outcome benefit is not established.','S152','S153','S157'),
 section('Bring your questions','Ask which follow-up tests, nutritional concerns, symptoms or preventive care apply to you. New warning signs should not wait for a scheduled visit.','P9-G02','P9-G04')
 ]),
 'mother/checkups/urgent':make([
 section('Know the warning signs','Severe headache, vision changes, chest pain, breathing trouble, heavy bleeding, leaking fluid, severe abdominal pain, or reduced usual fetal movement need prompt assessment. This is not a complete list.','P9-G04'),
 section('Do not wait for routine reading','Call emergency services for life-threatening symptoms or immediate danger. Otherwise seek urgent maternity advice as appropriate. The app cannot rule out a complication.','P9-G04','P3-32')
 ]),
 'mother/checkups/home-work':make([
 section('Start with known exposures','Home and workplace risks can include lead, solvents and pesticides. The type, amount, duration and route of exposure matter; not every chemical contact creates the same risk.','P6-01','P6-G05','P6-G06'),
 section('Prevention without expensive gadgets','Workplace exposure assessment, appropriate protective controls and checking known lead hazards are more meaningful starting points than broad detox claims. Research on occupational exposures is often observational, so methods and confounding matter.','P6-46','P6-G05'),
 section('What to discuss','If a particular exposure is suspected, bring the product name, workplace circumstances or water report to the relevant professional. Do not attempt unsafe lead removal yourself.','P6-G05','P6-04')
 ]),
 'mother/checkups/plastics-water':make([
 section('Different substances, different evidence','PFAS, phthalates and microplastics are not a single exposure. Studies measure different chemicals, biological markers and outcomes. Finding a substance in tissue does not establish the effect of an individual exposure.','P6-14','P6-15','P6-21','P6-32'),
 section('What observational studies can and cannot do','Pooled studies can examine associations with birth weight or preterm birth, but exposure measurement, confounding and the direction of causation require careful appraisal. They cannot alone establish that a consumer product will improve pregnancy outcomes.','P6-14','P6-21'),
 section('A practical starting point','Use local water-quality information and contaminant-specific advice when a problem is identified. Avoid detox products or changing necessary medical or infant-feeding safety practices because of plastics concerns.','P6-17','P6-18')
 ]),
 'mother/checkups/air-heat':make([
 section('Exposure is not the same as outcome','Pesticide, particulate matter and heat research asks different questions. Reducing a measured exposure does not automatically demonstrate improved long-term development.','P6-07','P6-37','P6-38'),
 section('Air-filter research and sponsorship','The UGAAR randomized trial studied portable HEPA cleaners during pregnancy, with separate reports on growth and later cognition. The archive records Canadian public funding and discounted study cleaners from Coway. These reports come from the same trial, not independent replications.','P6-37','P6-38'),
 section('Prioritize everyday safety','Discuss meaningful exposure concerns and heat or breathing symptoms with your care team. Use established environmental safety guidance rather than purchasing products on the assumption that they guarantee healthier development.','P6-07','P6-38')
 ]),
 'baby/skin/lanugo':make([
 section('A temporary covering','Lanugo is very fine hair that appears on the developing body. It is part of the normal fetal developmental sequence and is not the same as the hair growth pattern of an older child.','PED-GESTATION','PED-FETUS'),
 section('Why this is interesting','The skin is also developing alongside movement, the intestinal tract and other body systems. The reference identifies fine hair around week 22; developmental timing varies. This is not a milestone parents need to verify independently.','PED-GESTATION')
 ]),
 'baby/skin/skin-development':make([
 section('Skin is a developing organ','Skin is more than a covering: the outer barrier and deeper supporting tissue have different roles. The fetal skin changes over pregnancy, including fine hair and the developing protective surface.','PED-FETUS','PED-GESTATION'),
 section('Reading the illustration','The original skin cross-section helps locate layers and structures. It is general anatomy, not a depiction of the thickness or maturity of an individual fetus at this week.','PED-GESTATION')
 ]),
 'baby/movement/muscles':make([
 section('From developing muscles to movement','As muscles and skeletal structures develop, movement becomes part of the ongoing interaction with the developing nervous system. MedlinePlus describes increasing activity in the week-22 window.','PED-GESTATION'),
 section('A reference, not a target','The original skeleton illustration helps explain body structure. It does not measure the strength of an individual fetus, and there is no home exercise goal for the baby.','PED-FETUS'),
 section('The mother’s experience','Read about movement patterns separately from maternal exercise. A change in usual movements takes priority over general developmental information.','P9-G04')
 ]),
 'baby/movement/patterns':make([
 section('Development and perception','Fetal movement reflects developing muscles and nervous-system activity. The movements a parent notices are an individual experience, not an exact measure of a weekly developmental milestone.','PED-GESTATION','PED-FETUS'),
 section('When the pattern changes','Do not use a weekly illustration, fixed movement target or home heartbeat device as reassurance. If usual movements slow, stop or change, contact your maternity care team immediately.','P9-G04')
 ]),
 'baby/movement/maternal-activity':make([
 section('Two related but distinct questions','Maternal exercise can be investigated for fitness, pregnancy outcomes or child development. Each requires a different study and follow-up period.','P3-33','P4-13','P4-14'),
 section('The research is not an intelligence program','Randomized trials and follow-ups have examined early neurodevelopment, including a seven-year follow-up reporting no effect of the studied exercise intervention. These findings do not justify a fetal training program or guarantee developmental improvement.','P4-13','P4-14'),
 section('What matters practically','Any maternal exercise plan depends on the parent’s individual health and pregnancy circumstances. A child-development study is not clearance for a particular exercise session.','P3-33')
 ]),
 'baby/digestion/meconium':make([
 section('What is meconium?','Meconium is material that accumulates in the fetal intestines and becomes the first stool. The developmental reference describes it in the bowel around week 22.','PED-GESTATION'),
 section('Before and after birth','This is part of development before birth, not evidence that the baby eats meals the way a newborn does. Nutrition and oxygen arrive through exchange across the placenta.','PED-FETUS'),
 section('Continue the story','The related placenta and nutrition readings explain how the mother’s intake connects with fetal development.','PED-FETUS','P5-28')
 ]),
 'baby/digestion/nutrition-connection':make([
 section('A different route from eating','Before birth, fetal nourishment depends on placental exchange. The mother digests food and nutrients enter her circulation; the placenta supports exchange with the fetal circulation.','PED-FETUS','P5-28'),
 section('Why maternal diet matters','The developing baby needs nutrients for growth and normal organ function. This is not proof that increasing any individual nutrient beyond adequate intake improves development.','P5-28','P5-21'),
 section('Related research','Explore the maternal food and nutrient readings for the difference between total dietary intake, evidence for extra supplementation and individualized care.','P5-28')
 ],{title:'The route before birth',items:[['Maternal food','Digestion and absorption'],['Placental exchange','Movement of nutrients between circulations'],['Fetal development','Use of nutrients by growing tissues']],caption:'Simplified mechanism, not a model of transfer rates.'}),
 'baby/placenta/exchange':make([
 section('Two circulations connected by an organ','The placenta supports exchange of oxygen, nutrients and waste between the maternal and fetal circulations. The umbilical cord connects the baby with the placenta. This is different from the baby breathing air or eating food directly.','PED-FETUS'),
 section('What the original anatomy shows','The labeled illustration helps locate the placenta, cord and relationships between vessels. It is an educational reference, not an assessment of placental function in a specific pregnancy.','PED-FETUS'),
 section('The next connection','Read about fetal circulation and maternal nutrition to understand the other parts of the exchange system.','PED-FETUS','P5-28')
 ],{title:'The exchange system',items:[['Mother','Oxygen and nutrients'],['Placenta','Exchange interface'],['Baby','Fetal circulation and growing tissues']],caption:'Separate circulations; simplified conceptual sequence.'}),
 'baby/placenta/circulation':make([
 section('Why fetal circulation is different','Before birth, the placenta supports gas exchange. The fetal circulation is organized for this environment, rather than relying on breathing air with the lungs.','PED-FETUS'),
 section('Explore the original anatomy','A fetal circulation illustration identifies the cord, heart and vascular pathways. The diagram is a general reference and does not interpret ultrasound measurements or establish a diagnosis.','PED-FETUS'),
 section('Looking ahead','The related lungs article explains the developing respiratory system, while the placenta article explains the continuing role of exchange before birth.','PED-GESTATION')
 ]),
 'baby/placenta/exposures':make([
 section('Detection is a first step, not a conclusion','Researchers have detected microplastics in placental tissue and examined markers of chemical exposure. Detection is evidence of presence; it does not establish how much harm, if any, results from a particular exposure.','P6-32','P6-35'),
 section('Research on birth outcomes','PFAS analyses consider birth weight and other outcomes. Different chemicals, timing and exposure measurements make the studies difficult to combine into a single causal claim.','P6-12','P6-13','P6-14'),
 section('Useful context for parents','The maternal exposure articles prioritize known hazards and targeted precautions. They do not recommend detox products or assume a costly consumer product improves fetal health.','P6-02','P6-17')
 ]),
 'baby/senses/hearing':make([
 section('Hearing develops in stages','The structures and pathways involved in hearing mature over time. Developmental references describe ranges of weeks, rather than a moment at which all babies begin hearing in the same way.','PED-FETUS','PED-GESTATION'),
 section('What researchers can measure','Some prenatal sound experiments examine responses to familiar speech or music after birth. A response provides information about a particular neural process, not a test of intelligence or overall developmental health.','P4-06','P4-07'),
 section('No training requirement','Ordinary interaction and a research exposure protocol are not equivalent. There is no sound-training schedule or volume prescription in this reading.','P4-07')
 ]),
 'baby/senses/voice-music':make([
 section('Why sound experiments are interesting','Researchers have studied whether prenatal sound exposure is associated with measurable responses after birth. These studies help explore how neural pathways respond to experience.','P4-06','P4-07'),
 section('What the outcome means','A difference in measured brain responses to familiar sounds is not evidence of a higher IQ or improved language ability. The 2013 music study had academic and foundation support and reported no competing interests, but sample size and outcome choice still matter.','P4-07'),
 section('No performance goal','Talking or listening to music need not become a developmental training program. No exposure routine or safety threshold is established by these results.','P4-07')
 ]),
 'baby/senses/brain-nutrients':make([
 section('Normal development needs adequate nutrition','DHA, choline, iodine and folate support different aspects of biology. Being essential to normal development does not establish that extra intake above an adequate level improves a child’s cognition.','P5-28'),
 section('A mixed research picture','A small choline feeding trial and its follow-up found benefits on specific tasks, while another randomized trial did not find improved infant cognition. The DHA seven-year follow-up did not establish an overall IQ benefit.','P4-08','P4-09','P4-10','P4-12'),
 section('Funding matters, but so does design','Choline trials include mixed public and commercial or commodity-industry support; the same cohort contributes more than one positive report. The maternal nutrient reading explains why this is not a simple causal test of funding bias.','P4-08','P4-09','P4-10')
 ]),
 'baby/growth/anatomy':make([
 section('Many systems, one developing body','Muscles, skin, the digestive tract, circulation and nervous system develop in overlapping stages. The week reference identifies typical changes but not a complete anatomy of an individual fetus.','PED-GESTATION','PED-FETUS'),
 section('What an illustration can and cannot do','Original textbook and anatomical references help identify structures and their relationships. They are not personal size estimates, ultrasound interpretations or evidence of health.','PED-FETUS'),
 section('Follow the developing systems','Explore skin, movement, placenta, lungs and blood-cell formation separately for a more complete picture of development.','PED-GESTATION')
 ]),
 'baby/growth/growth-research':make([
 section('What does a growth outcome mean?','Birth timing, birth weight, fetal growth and later learning are distinct outcomes. A trial may be designed for one but not another.','P5-14','P6-38'),
 section('Different interventions, different evidence','Omega-3 trials investigate nutritional interventions; the UGAAR air-cleaner trial reports growth and later cognition in separate publications from one cohort. They should not be pooled as though they test one intervention.','P5-14','P6-37','P6-38'),
 section('Transparency in comparison','Both the omega-3 and air-cleaner research records include public support and commercial product contributions. This warrants disclosure, not an automatic inference of biased results.','P5-14','P6-37')
 ]),
 'baby/growth/screening':make([
 section('Population references versus individual assessment','A week-by-week developmental description explains typical changes. Clinical assessment uses pregnancy dates, examination and relevant tests rather than treating an app’s size analogy as an individual measurement.','PED-GESTATION','P9-G02'),
 section('Screening and follow-up','Screening can identify a reason for further evaluation. Your care team determines how to interpret a result and what, if any, follow-up is needed.','P9-G02'),
 section('When a concern cannot wait','A change in usual movements or another warning sign takes priority over this reading or a future appointment.','P9-G04')
 ])
}

/** Additional visible sections for each skin reading; evidence remains research-only. */
export const skinSpecific:Record<string,ReadingSection[]>={
 'natural-oils-and-massage':[section('Why oils and massage are different interventions','An oil changes the product applied to the skin; massage adds mechanical contact. The 2012 comparison combined them in one group but did not include massage without oil, so it cannot isolate massage as the active component.','S010','P3-03'),section('What remains unanswered','Other oil preparations have different ingredients and research designs. A favorable result for one combined intervention does not establish efficacy or safety for another oil. Do not copy a bitter almond oil protocol from a study.','S003','S005','P3-03')],
 'collagen-and-supplements':[section('Collagen in skin versus collagen as a supplement','Collagen is part of the structural matrix of skin. Oral collagen trials investigate ingested products and often measure adult skin hydration, elasticity or wrinkles. These outcomes are not equivalent to preventing pregnancy stretch marks.','S011','S013'),section('Why the funding comparison matters','The 2025 adult skin-aging review reports different findings when grouping trials by pharmaceutical funding and methodological quality. Group significance alone cannot demonstrate a causal sponsorship effect. Pregnancy-specific effectiveness and safety remain unestablished.','S011','P3-05')],
 'why-stretch-marks-develop':[section('What changes beneath the surface','Stretch marks involve changes in the supportive tissue beneath the outer skin. Pregnancy-related stretching and individual susceptibility interact; genetics and other risk factors do not determine an individual outcome.','S023','S206','S216'),section('Prevention and appearance','A moisturizing product may help with comfort while having no established effect on the formation of new marks. Once marks exist, their appearance can change over time. Treatment evidence answers a different question.','S216','S023')],
 'dryness-itching-and-skin-changes':[section('Comfort is a meaningful outcome','Dryness and mild itching can occur as skin changes during pregnancy. Moisturizers may make skin more comfortable even if they do not prevent stretch marks.','S106','S205'),section('Itching can also be a medical symptom','Severe or persistent itching, especially on the palms or soles or without a rash, warrants prompt assessment for pregnancy-specific conditions such as cholestasis. Do not rely on a cosmetic product to treat it.','S106')],
 'acne-and-ingredient-safety':[section('Why pregnancy changes ingredient decisions','Hormonal changes can affect acne. A topical treatment may have different pregnancy safety considerations from its use outside pregnancy; absorption and formulation matter.','S105','P3-30'),section('Retinoids need particular caution','Avoid elective topical retinoids during pregnancy. Studies of inadvertent exposure do not establish clearance to start a treatment. Discuss a specific product and any exposure with your clinician. Held safety records remain excluded.','P3-30')],
 'dark-spots-and-sun-protection':[section('What pigmentation research studies','Melasma involves dark patches of pigmentation. Light exposure and pregnancy-related changes can contribute, making photoprotection a relevant topic. It is distinct from a structural stretch mark.','S104','S212'),section('Separate prevention from treatment','Research on sunscreen use and melasma prevention does not establish the safety of every lightening ingredient. Pregnancy and breastfeeding require separate ingredient assessments.','S104')],
 'existing-stretch-marks-and-creams':[section('The stage of the mark matters','Treatment studies may distinguish earlier reddish marks from later paler marks and measure appearance or texture rather than prevention. A change in appearance is not equivalent to restoring normal skin.','S023','S216'),section('Why not start treatment during pregnancy?','Some adult treatment studies involve retinoids, procedures or proprietary products. Elective retinoids should be avoided during pregnancy, and unresolved treatment findings cannot support a recommendation.','S216','P3-30')],
 'laser-microneedling-and-other-procedures':[section('Different procedures, different outcomes','Studies compare fractional laser techniques and microneedling for existing marks. Outcomes can include texture, appearance and adverse effects, with differences in equipment, participants and follow-up.','S018','S020','S022'),section('Timing and safety','Adult cosmetic-treatment evidence does not establish pregnancy or breastfeeding safety. Elective treatment decisions should be made with an appropriately qualified clinician after individual assessment.','S018','S020')],
 'hair-cycle-and-postpartum-shedding':[section('A changing hair cycle','The proportion of hairs in growth and shedding phases can change during pregnancy and after birth. Postpartum shedding is a different process from stretch marks or wound healing.','S110','S111'),section('When other explanations matter','Persistent, patchy or otherwise concerning hair loss may have another cause. Hair treatment safety varies with pregnancy and lactation; this reading does not recommend a medicine.','S110','S112')],
 'healed-scar-care-and-massage':[section('A scar is not an open wound','Studies of scar sheets, gels and tissue mobilization concern selected healed scars. Appearance, stiffness and discomfort are different outcomes.','S118','S119','S208'),section('What research cannot clear','A comparison of two scar products does not establish benefit for every scar type. Review confidence varies. Do not apply scar products to an open wound or start massage before individualized healing assessment.','S121')],
 'birth-injuries-and-wound-concerns':[section('Healing is the first priority','Wound breakdown after birth may involve increasing pain, bleeding, discharge or wound opening. It requires assessment rather than a cosmetic recovery plan.','S123'),section('What clinical research studies','Research compares resuturing with expectant care for selected patients and considers care for different types of perineal injuries. These decisions require clinical assessment; a small trial is not a home treatment protocol.','S124','S125')]
}
