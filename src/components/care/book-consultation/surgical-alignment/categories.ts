interface Ailment {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  info: string;
  icon: string;
  ailments: Ailment[];
}

export const categories: Category[] = [
  {
    id: 'knee-joints',
    name: 'Knee and Joints related',
    info: 'Orthopedics',
    icon: '/icons/knee.svg',
    ailments: [
      { id: 'knee-replacement', name: 'Knee Replacement' },
      { id: 'hip-replacement', name: 'Hip Replacement' },
      { id: 'acl-reconstruction', name: 'ACL Reconstruction' },
      { id: 'arthroscopy', name: 'Arthroscopy' },
      { id: 'shoulder-replacement', name: 'Shoulder Replacement' },
      { id: 'spine-surgery', name: 'Spine Surgery' },
      { id: 'fracture-treatment', name: 'Fracture Treatment' },
    ],
  },
  {
    id: 'eye',
    name: 'Eye related',
    info: 'Ophthalmology',
    icon: '/icons/eye.svg',
    ailments: [
      { id: 'cataract-surgery', name: 'Cataract Surgery' },
      { id: 'lasik', name: 'LASIK Surgery' },
      { id: 'glaucoma-surgery', name: 'Glaucoma Surgery' },
      { id: 'retina-surgery', name: 'Retina Surgery' },
      { id: 'squint-surgery', name: 'Squint Surgery' },
      { id: 'cornea-transplant', name: 'Cornea Transplant' },
    ],
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    info: 'General Surgery',
    icon: '/icons/general.svg',
    ailments: [
      { id: 'hernia-surgery', name: 'Hernia Surgery' },
      { id: 'gallbladder-removal', name: 'Gallbladder Removal' },
      { id: 'appendix-surgery', name: 'Appendix Surgery' },
      { id: 'thyroid-surgery', name: 'Thyroid Surgery' },
      { id: 'breast-lump-surgery', name: 'Breast Lump Surgery' },
      { id: 'gallstone-surgery', name: 'Gallstone Surgery' },
    ],
  },
  {
    id: 'anus',
    name: 'Anus related',
    info: 'Proctology',
    icon: '/icons/anus.svg',
    ailments: [
      { id: 'piles-surgery', name: 'Piles Surgery' },
      { id: 'fistula-surgery', name: 'Fistula Surgery' },
      { id: 'fissure-surgery', name: 'Fissure Surgery' },
      { id: 'pilonidal-sinus-surgery', name: 'Pilonidal Sinus Surgery' },
      { id: 'rectal-prolapse-surgery', name: 'Rectal Prolapse Surgery' },
    ],
  },
  {
    id: 'cardiology',
    name: 'Cardiology related',
    info: 'Cardiology',
    icon: '/icons/cardio.svg',
    ailments: [
      { id: 'vascular-surgery', name: 'Vascular Surgery' },
      { id: 'pacemaker-surgery', name: 'Pacemaker Surgery' },
      { id: 'open-heart-surgery', name: 'Open Heart Surgery' },
      { id: 'angiography', name: 'Angiography' },
      { id: 'mics', name: 'Minimally Invasive Cardiovascular Surgery (MICS)' },
      { id: 'dsa', name: 'Digital Subtraction Angiography (DSA)' },
      { id: 'angioplasty', name: 'Angioplasty' },
      { id: 'bypass-surgery', name: 'Bypass Surgery (CABG)' },
      { id: 'valve-replacement', name: 'Heart Valve Replacement' },
    ],
  },
  {
    id: 'cosmetic-surgery',
    name: 'Cosmetic Surgery related',
    info: 'Cosmetic',
    icon: '/icons/cosmetic.svg',
    ailments: [
      { id: 'rhinoplasty', name: 'Rhinoplasty' },
      { id: 'liposuction', name: 'Liposuction' },
      { id: 'breast-augmentation', name: 'Breast Augmentation' },
      { id: 'tummy-tuck', name: 'Tummy Tuck' },
      { id: 'hair-transplant', name: 'Hair Transplant' },
      { id: 'face-lift', name: 'Face Lift' },
    ],
  },
  {
    id: 'kidney',
    name: 'Kidney related',
    info: 'Urology',
    icon: '/icons/kidney.svg',
    ailments: [
      { id: 'kidney-stone-removal', name: 'Kidney Stone Removal' },
      { id: 'kidney-transplant', name: 'Kidney Transplant' },
      { id: 'prostate-surgery', name: 'Prostate Surgery' },
      { id: 'urs', name: 'Ureteroscopy (URS)' },
      { id: 'pcnl', name: 'Percutaneous Nephrolithotomy (PCNL)' },
      { id: 'circumcision', name: 'Circumcision' },
    ],
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology related',
    info: 'Gynaecology',
    icon: '/icons/gynae.svg',
    ailments: [
      { id: 'hysterectomy', name: 'Hysterectomy' },
      { id: 'c-section', name: 'C-Section Delivery' },
      { id: 'laparoscopy', name: 'Laparoscopy' },
      { id: 'fibroid-removal', name: 'Fibroid Removal' },
      { id: 'ovarian-cyst-removal', name: 'Ovarian Cyst Removal' },
      { id: 'tubal-ligation', name: 'Tubal Ligation' },
    ],
  },
];
