/** Exact Commons file-page metadata checked 2026-11-27. Source file bytes not downloaded or clinically reviewed. */
export interface VisualPageReview {title:string;credit:string;license:string;version:string;page:string;oldid:number;sha1:string;width:number;height:number;description:string;limit:string}
export const visualPageReviews:Record<string,VisualPageReview>={
  "EV-V001": {
    "title": "Muscles of the abdomen",
    "credit": "OpenStax",
    "license": "CC BY 4.0",
    "version": "4.0",
    "page": "1112_Muscles_of_the_Abdomen.jpg",
    "oldid": 742741723,
    "sha1": "33fa36d780f23fa5ad21b00e8a38f3ef6ecb5428",
    "width": 1046,
    "height": 1351,
    "description": "Compare the front abdominal muscles with the muscles of the lower back.",
    "limit": "General muscle anatomy, not a diagram of diastasis recti or an exercise plan."
  },
  "EV-V002": {
    "title": "Muscles of the pelvic floor",
    "credit": "OpenStax",
    "license": "CC BY 4.0",
    "version": "4.0",
    "page": "1115_Muscles_of_the_Pelvic_Floor.jpg",
    "oldid": 742744678,
    "sha1": "1dd6a3f2b9fa2de6554e45cca22e5718268d000c",
    "width": 1917,
    "height": 1396,
    "description": "Locate the muscles that form the pelvic floor in the labeled anatomy illustration.",
    "limit": "General anatomy only; it does not show a person's symptoms or prescribe exercises."
  },
  "EV-V003": {
    "title": "Structure of the skin",
    "credit": "OpenStax College; J. Gordon Betts, Peter Desaix, Eddie Johnson (as credited on source page)",
    "license": "CC BY 3.0",
    "version": "3.0",
    "page": "501_Structure_of_the_skin.jpg",
    "oldid": 1167453981,
    "sha1": "e1b64e6dfe45407fa739cd27cf29a52a27d07e46",
    "width": 1200,
    "height": 941,
    "description": "Look at the outer skin layer, the deeper layer and the tissue beneath them.",
    "limit": "Normal skin structure, not a specific image of stretch marks or proof of a product's effects."
  },
  "EV-V004": {
    "title": "Size of uterus throughout pregnancy",
    "credit": "OpenStax College",
    "license": "CC BY 3.0",
    "version": "3.0",
    "page": "2917_Size_of_Uterus_Throughout_Pregnancy-02.jpg",
    "oldid": 1203988189,
    "sha1": "e718d47991c6d285568eff4af498bc564cc2961d",
    "width": 1312,
    "height": 1750,
    "description": "Compare the uterus at different stages of pregnancy in one textbook figure.",
    "limit": "Illustrative anatomy, not a way to measure individual growth or establish pregnancy dates."
  },
  "EV-V005": {
    "title": "The placenta",
    "credit": "OpenStax College",
    "license": "CC BY 3.0",
    "version": "3.0",
    "page": "2910_The_Placenta-02.jpg",
    "oldid": 1161649053,
    "sha1": "bb1057e3821ed5058d0a744b9fedc1bf95b36b94",
    "width": 2059,
    "height": 1068,
    "description": "Locate the placenta and its relationship to the developing baby in the original illustration.",
    "limit": "Textbook reference, not an interpretation of a person's ultrasound."
  },
  "EV-V011": {
    "title": "Milk let-down reflex",
    "credit": "OpenStax College",
    "license": "CC BY 3.0",
    "version": "3.0",
    "page": "2922_Let_Down_Reflex-new.jpg",
    "oldid": 1250302873,
    "sha1": "75a2ecfbb8e17ade7cfcff7595c410a6249ba2a0",
    "width": 2164,
    "height": 2765,
    "description": "Explore the textbook illustration of the mammary gland and milk let-down reflex.",
    "limit": "General physiology, not a feeding assessment or treatment plan."
  }
}
export function visualPageReview(id:string){return visualPageReviews[id]}
export function pinnedVisualPage(review:VisualPageReview){return 'https://commons.wikimedia.org/w/index.php?title=File:'+review.page+'&oldid='+review.oldid}
