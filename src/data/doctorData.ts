export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  condition: string;
  category: 'all' | 'skin' | 'gastric' | 'joints' | 'pediatric' | 'chronic';
  comment: string;
  verified: boolean;
}

export interface Specialization {
  id: string;
  title: string;
  bnTitle: string;
  category: string;
  description: string;
  commonSymptoms: string[];
  approach: string;
}

export const DOCTOR_INFO = {
  name: "Dr. Md. Ruhul Amin",
  bnName: "ডাঃ মোঃ রুহুল আমিন",
  photo: "/assets/aistudio/image_29ed3578.png",
  clinicPhoto: "/assets/aistudio/image_c38ca877.png",
  chamberName: "Janani Homeo Medicare",
  bnChamberName: "জননী হোমিও মেডিকেয়ার",
  designation: "Senior Lecturer, Dept. of Chronic Diseases, Repertory & Medicine",
  bnDesignation: "সিনিয়র প্রভাষক, ক্রনিক ডিজিজ ও রেপার্টরি বিভাগ",
  institution: "Government Homeopathic Medical College & Hospital, Dhaka",
  bnInstitution: "সরকারি হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল, ঢাকা",
  qualifications: "BHMS (DU), MPH (BOU)",
  bnQualifications: "বিএইচএমএস (ঢাকা বিশ্ববিদ্যালয়), এমপিএইচ (বাউবি)",
  registration: "Reg. No: H-1249 (Govt. Registered Homeopathic Physician)",
  phone: "01627-585412",
  phoneFormatted: "+880 1627-585412",
  whatsappNumber: "8801627585412",
  rating: 4.6,
  totalReviews: 119,
  address: "House No 3, Road No 2, Mirpur-10, In the bag alley behind Shah Ali Market, Mirpur 10, Dhaka 1216",
  bnAddress: "বাড়ি নং ৩, রোড নং ২, মিরপুর-১০, শাহ আলী মার্কেটের পেছনের ব্যাগ গলি, ঢাকা ১২১৬",
  landmarks: "In the bag alley (লেডিস ব্যাগ গলি) behind Shah Ali Market & Plaza, 3 minutes walk from Mirpur-10 Metro Rail Station.",
  coordinates: {
    lat: 23.8071,
    lng: 90.3686,
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=23.8071,90.3686+(Dr.+Md.+Ruhul+Amin+Homeopathic+Doctor+Mirpur+Dhaka)",
  shareGoogleUrl: "https://share.google/ZyoGpnNuS0sdupynH",
  hours: [
    { day: "Saturday", bnDay: "শনিবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Sunday", bnDay: "রবিবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Monday", bnDay: "সোমবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Tuesday", bnDay: "মঙ্গলবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Wednesday", bnDay: "বুধবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Thursday", bnDay: "বৃহস্পতিবার", hours: "4:00 PM - 9:30 PM", isOpen: true },
    { day: "Friday", bnDay: "শুক্রবার", hours: "Closed (Prior Serial Call Only)", isOpen: false },
  ],
  consultationFees: {
    chamberNew: "৳ 600",
    chamberFollowup: "৳ 300",
    online: "৳ 500",
    medicineDispensing: "Original German & Standard Classical Dilutions",
  }
};

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: "chronic-diseases",
    title: "Chronic & Complex Diseases (Repertory Based)",
    bnTitle: "জটিল ও দীর্ঘস্থায়ী রোগ (রেপার্টরি ভিত্তিক)",
    category: "chronic",
    description: "In-depth constitutional treatment using clinical repertorization from the Senior Lecturer of Repertory & Chronic Diseases at Govt. Homeopathic Medical College, Dhaka.",
    commonSymptoms: ["Multi-system recurrent illnesses", "Unresponsive chronic ailments", "Post-viral systemic weakness", "Metabolic imbalances"],
    approach: "Repertorization of mental, physical generals, and pathological modalities to find the single matching simillimum."
  },
  {
    id: "anorectal-piles",
    title: "Piles, Fissures & Anorectal Disorders",
    bnTitle: "পাইলস, ফিশার ও ফিস্টুলা (বিনা অপারেশনে)",
    category: "gastric",
    description: "Highly reputable non-surgical homeopathic management for bleeding piles, painful anal fissures, constipation, and perianal itching.",
    commonSymptoms: ["Bleeding during stool", "Severe anal pain & burning", "Chronic hard stool", "Sentinel pile tags"],
    approach: "Healing local mucosal inflammation and venous engorgement while normalizing bowel motility."
  },
  {
    id: "skin-allergies",
    title: "Skin Diseases, Eczema & Psoriasis",
    bnTitle: "চর্মরোগ, একজিমা, সোরায়াসিস ও এলার্জি",
    category: "skin",
    description: "Safe, steroid-free healing of stubborn wet or dry eczema, psoriasis plaques, chronic urticaria, stubborn acne, fungal tinea, and lichen planus.",
    commonSymptoms: ["Intense nocturnal itching", "Flaking silvery plaques", "Weeping watery eczema eruptions", "Recurrent hives / rashes"],
    approach: "Reversing deep internal toxic and allergic dysregulations without surface steroid suppression."
  },
  {
    id: "respiratory-asthma",
    title: "Asthma, Sinusitis & Chronic Allergy",
    bnTitle: "হাঁপানি, সাইনোসাইটিস ও ব্রঙ্কাইটিস",
    category: "chronic",
    description: "Targeted constitutional therapy for bronchial asthma, allergic rhinitis, morning sneezing bouts, nasal polyps, and recurrent bronchitis.",
    commonSymptoms: ["Morning sneezing fits (20-30 times)", "Wheezing on cold weather exposure", "Sinus frontal headaches", "Dust intolerance"],
    approach: "Strengthening bronchial vitality and mucosal resistance against seasonal Dhaka smog and humidity."
  },
  {
    id: "digestive-liver",
    title: "Gastritis, IBS & Liver Disorders",
    bnTitle: "গ্যাস্ট্রিক, আইবিএস ও লিভারের সমস্যা",
    category: "gastric",
    description: "Long-term relief from hyperacidity, peptic ulcer pain, irritable bowel syndrome (IBS with alternating diarrhea/constipation), and fatty liver.",
    commonSymptoms: ["Heartburn & retrosternal burning", "Abdominal bloating & early satiety", "Mucus in stool / IBS", "Fatigue from fatty liver"],
    approach: "Regulating gastric secretion rhythm and restorative intestinal microbiome harmony."
  },
  {
    id: "joints-arthritis",
    title: "Joint Arthritis, Sciatica & Spondylosis",
    bnTitle: "বাতব্যথা, সায়াটিকা ও স্পন্ডিলাইটিস",
    category: "joints",
    description: "Natural remedies for knee osteoarthritis, cervical spondylosis, lumbar disc prolapse nerve pain (sciatica), gout, and frozen shoulder.",
    commonSymptoms: ["Knee joint crepitus & morning stiffness", "Radiating shooting sciatica pain", "Neck stiffness with dizziness", "High uric acid joint flares"],
    approach: "Reducing synovial effusion and preventing continuous cartilaginous degeneration."
  },
  {
    id: "renal-stones",
    title: "Kidney Stones & Urinary Complaints",
    bnTitle: "কিডনি ও মূত্রনালীর পাথর",
    category: "chronic",
    description: "Non-invasive expulsive management of nephrolithiasis and ureteric calculi with burning urine and recurrent urinary tract infections.",
    commonSymptoms: ["Sudden agonizing flank pain", "Burning sensation during urination", "Gravel / crystals in urine", "Urinary frequency"],
    approach: "Relaxing ureteral smooth muscle to facilitate painless expulsion and altering urinary pH."
  },
  {
    id: "pediatric-immunity",
    title: "Pediatric Care & Recurrent Infections",
    bnTitle: "শিশুর টনসিল, এডেনয়েড ও ঘনঘন ঠাণ্ডা",
    category: "pediatric",
    description: "Gentle, sweet globules loved by infants and children for recurrent tonsillitis, enlarged adenoids, poor appetite, and stunted immunity.",
    commonSymptoms: ["Enlarged tonsils with fever", "Mouth breathing & snoring due to adenoids", "Frequent colds every 2-3 weeks", "Poor weight gain"],
    approach: "Stimulating pediatric innate immune response without heavy antibiotics."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Engr. Tanvir Ahmed",
    location: "Mirpur DOHS, Dhaka",
    rating: 5,
    date: "2 weeks ago",
    condition: "Chronic Gastritis & IBS",
    category: "gastric",
    comment: "I had been suffering from terrible hyperacidity and stomach burning for over 3 years. Taking antacids daily became a habit. Dr. Ruhul Amin took more than 40 minutes listening to my full case history. Within 6 weeks of his homeopathic treatment, my digestion has completely stabilized. Truly a knowledgeable and compassionate doctor.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Nasrin Akhter",
    location: "Mirpur-10, Dhaka",
    rating: 5,
    date: "1 month ago",
    condition: "Severe Eczema",
    category: "skin",
    comment: "My 8-year-old daughter was suffering from weeping eczema on her elbows and neck. Corticosteroid ointments were giving only temporary relief and skin was getting dark. Dr. Ruhul Amin's gentle sweet pills healed her skin smoothly over 3 months. No side effects at all. Highly recommend him for child skin issues.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Mohammad Saiful Islam",
    location: "Pallabi, Mirpur",
    rating: 5,
    date: "2 months ago",
    condition: "Kidney Stone (6.5mm)",
    category: "chronic",
    comment: "Discovered a 6.5mm calculus in right kidney with unbearable pain. Consulted Dr. Ruhul Amin at Janani Homeo Medicare behind Shah Ali Market. Followed his medicine course strictly with lots of water. An ultrasound 40 days later confirmed the stone had passed completely. Saved me from costly surgery.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Farhana Yasmin",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    date: "3 months ago",
    condition: "Allergic Rhinitis & Sinusitis",
    category: "chronic",
    comment: "I used to sneeze 20-30 times every single morning whenever I turned on the fan or stepped into dust. Dr. Ruhul Amin's diagnosis was so accurate. He gives genuine German homeopathic remedies. My chronic morning allergies are now 90% gone. Very ethical practitioner.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Al-Amin Hossain",
    location: "Kallayanpur, Dhaka",
    rating: 4,
    date: "4 months ago",
    condition: "Piles with Bleeding",
    category: "gastric",
    comment: "Suffered from bleeding piles for 6 months. Had surgery fear. Visited his chamber at Mirpur 10 in the bag alley behind Shah Ali Market. Within 2 weeks of taking his dilution drops, the bleeding stopped completely. He is very patient and a true teacher of homeopathy.",
    verified: true
  },
  {
    id: "rev-6",
    author: "Dr. Kazi Mahfuzur Rahman",
    location: "Uttara, Dhaka",
    rating: 5,
    date: "5 months ago",
    condition: "Recurrent Tonsillitis in Child",
    category: "pediatric",
    comment: "As a fellow public health professional, I appreciate Dr. Ruhul Amin's scientific understanding of public health combined with classical homeopathy. He doesn't make tall false claims; he works systematically on physiological recuperation. Excellent doctor.",
    verified: true
  },
  {
    id: "rev-7",
    author: "Kamrul Hasan",
    location: "Mirpur-2, Dhaka",
    rating: 5,
    date: "6 months ago",
    condition: "Sciatica & Lower Back Pain",
    category: "joints",
    comment: "Severe lumbar pain radiating down my left leg. Could hardly walk or pray. Started treatment at Janani Homeo Medicare. Now almost 85% pain free. Highly respect his institutional background at Govt. Homeopathic College.",
    verified: true
  },
  {
    id: "rev-8",
    author: "Rasheda Begum",
    location: "Kazipara, Dhaka",
    rating: 4,
    date: "7 months ago",
    condition: "Knee Osteoarthritis",
    category: "joints",
    comment: "Could not bend knees for prayer without support. After starting Dr. Ruhul Amin's medicine, the swelling subsided and mobility improved a lot. Easy to reach right behind Shah Ali Market.",
    verified: true
  }
];

export const FAQS = [
  {
    q: "What are Dr. Md. Ruhul Amin's institutional credentials?",
    bnQ: "ডাঃ মোঃ রুহুল আমিনের প্রাতিষ্ঠানিক যোগ্যতা কী?",
    a: "Dr. Md. Ruhul Amin is a Senior Lecturer in the Department of Chronic Diseases, Repertory & Medicine at the prestigious Government Homeopathic Medical College & Hospital (GHMCH) in Dhaka. He earned his BHMS from the University of Dhaka (DU) and Master of Public Health (MPH) from Bangladesh Open University (BOU).",
    bnA: "ডাঃ মোঃ রুহুল আমিন ঢাকার স্বনামধন্য সরকারি হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতালের ক্রনিক ডিজিজ, রেপার্টরি ও মেডিসিন বিভাগের সিনিয়র প্রভাষক। তিনি ঢাকা বিশ্ববিদ্যালয় (DU) থেকে নিয়মিত ৫ বছর মেয়াদী বিএইচএমএস এবং বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় (BOU) থেকে জনস্বাস্থ্য বিষয়ে এমপিএইচ ডিগ্রি অর্জন করেছেন।"
  },
  {
    q: "What is the chamber name and exact location in Mirpur-10?",
    bnQ: "চেম্বারের নাম ও মিরপুর-১০ এর সঠিক অবস্থান কোথায়?",
    a: "His personal chamber is 'Janani Homeo Medicare', situated at House No 3, Road No 2, Mirpur-10 (in the bag alley / লেডিস ব্যাগ গলি directly behind Shah Ali Market & Plaza). It is just 3 minutes walking distance from Mirpur-10 Metro Rail Station.",
    bnA: "চেম্বারের নাম 'জননী হোমিও মেডিকেয়ার'। এটি মিরপুর-১০ এর শাহ আলী মার্কেটের পেছনের ব্যাগ গলির (লেডিস ব্যাগ গলি) ভেতরে বাড়ি নং ৩, রোড নং ২-এ অবস্থিত। মিরপুর-১০ মেট্রোরেল স্টেশন থেকে পায়ে হেঁটে মাত্র ৩ মিনিট।"
  },
  {
    q: "What are the visiting hours and how do I book a serial?",
    bnQ: "রোগী দেখার সময়সূচি এবং সিরিয়াল নেওয়ার নিয়ম কী?",
    a: "Consultations take place daily from 4:00 PM to 9:30 PM (Saturday through Thursday, Friday closed). Appointments and serial numbers are booked exclusively by calling the chamber hotline directly at 01627-585412 between 10:00 AM and 8:00 PM.",
    bnA: "শনিবার থেকে বৃহস্পতিবার প্রতিদিন বিকেল ৪:০০ টা থেকে রাত ৯:৩০ টা পর্যন্ত রোগী দেখা হয় (শুক্রবার বন্ধ)। সিরিয়ালের জন্য প্রতিদিন সকাল ১০:০০ টা থেকে রাত ৮:০০ টার মধ্যে সরাসরি হটলাইন ০১৬২৭-৫৮৫৪১২ নম্বরে কল করে সিরিয়াল নিশ্চিত করতে পারেন।"
  },
  {
    q: "Can patients from outside Dhaka or overseas consult?",
    bnQ: "ঢাকার বাইরের বা প্রবাসী রোগীরা কি অনলাইনে পরামর্শ নিতে পারেন?",
    a: "Yes. Dr. Ruhul Amin conducts remote video/audio consultations for patients across Bangladesh and overseas. Original German homeopathic medicines are dispatched securely via courier service (Sundarban, SA Paribahan, Steadfast) directly to your address.",
    bnA: "হ্যাঁ। ঢাকার বাইরে বা প্রবাসে থাকা রোগীরা ভিডিও/অডিও কলে বিস্তারিত কেস হিস্ট্রি দিয়ে পরামর্শ নিতে পারেন এবং সুন্দরবন, এসএ পরিবহন বা স্টেডফাস্ট কুরিয়ারের মাধ্যমে দেশের যেকোনো জেলায় ওষুধ সংগ্রহ করতে পারেন।"
  },
  {
    q: "How does classical repertory-based treatment differ from regular homeopathy?",
    bnQ: "রেপার্টরি ভিত্তিক চিকিৎসা সাধারণ চিকিৎসার চেয়ে কেন আলাদা?",
    a: "Repertorization is the advanced scientific method of analyzing hundreds of precise physical and mental symptom rubrics from classical medical literature. As a college lecturer in Repertory, Dr. Amin selects a deeply matched single constitutional remedy rather than guessing or mixing random patent tonics.",
    bnA: "রেপার্টরাইজেশন হলো রোগীর মানসিক, শারীরিক ও চারিত্রিক যাবতীয় লক্ষণের তুলনামূলক বৈজ্ঞানিক বিশ্লেষণ। সরকারি কলেজের রেপার্টরি বিভাগের শিক্ষক হিসেবে ডাঃ আমিন রোগীকে আন্দাজে পেটেন্ট টনিক না দিয়ে প্রকৃত একক সঠিক ওষুধ (Simillimum) নির্বাচন করেন।"
  }
];
