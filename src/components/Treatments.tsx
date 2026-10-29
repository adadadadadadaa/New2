import React, { useState } from 'react';
import { SPECIALIZATIONS, Specialization, DOCTOR_INFO } from '../data/doctorData';
import { Phone, CheckCircle, Sparkles } from 'lucide-react';

interface TreatmentsProps {
  lang: 'en' | 'bn';
}

export const Treatments: React.FC<TreatmentsProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'All Treatments' : 'সকল চিকিৎসা' },
    { id: 'skin', label: lang === 'en' ? 'Skin & Allergy' : 'চর্ম ও এলার্জি' },
    { id: 'gastric', label: lang === 'en' ? 'Gastric & Gut' : 'গ্যাস্ট্রিক ও লিভার' },
    { id: 'chronic', label: lang === 'en' ? 'Asthma & Kidney' : 'হাঁপানি ও কিডনি' },
    { id: 'joints', label: lang === 'en' ? 'Joints & Arthritis' : 'বাত ও জয়েন্ট' },
    { id: 'pediatric', label: lang === 'en' ? 'Child Health' : 'শিশু স্বাস্থ্য' },
  ];

  const filteredList = selectedFilter === 'all'
    ? SPECIALIZATIONS
    : SPECIALIZATIONS.filter(item => item.category === selectedFilter);

  return (
    <section id="specializations" className="py-16 sm:py-20 bg-stone-50/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              {lang === 'en' ? 'Clinical Focus Areas' : 'বিশেষ চিকিৎসাসেবা'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
              {lang === 'en'
                ? 'Targeted Care for Chronic & Stubborn Diseases'
                : 'দীর্ঘস্থায়ী ও জটিল রোগের প্রাকৃতিক উপশম'}
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              {lang === 'en'
                ? 'Where conventional suppressive treatments fail or produce severe side effects, classical homeopathy stimulates the vital body recovery mechanism.'
                : 'পার্শ্বপ্রতিক্রিয়াহীন নিয়মে শরীরের রোগ প্রতিরোধ ব্যবস্থাকে সক্রিয় করে রোগমুক্তির স্থায়ী সমাধান।'}
            </p>
          </div>

          {/* Interactive Filter Control (Valid Button Segment per Skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item: Specialization, index: number) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Natural Editorial Index */}
                <div className="text-xs font-mono font-semibold text-emerald-800/80 mb-2">
                  0{index + 1}. {item.category.toUpperCase()}
                </div>

                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {lang === 'en' ? item.title : item.bnTitle}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Common Symptoms List */}
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="text-xs font-semibold text-stone-500 mb-2">
                    {lang === 'en' ? 'Common Indicators:' : 'সাধারণ উপসর্গ:'}
                  </div>
                  <div className="space-y-1.5">
                    {item.commonSymptoms.map((symptom, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Mechanism */}
                <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200/60 text-xs text-stone-600">
                  <span className="font-semibold text-stone-800">{lang === 'en' ? 'Approach: ' : 'চিকিৎসা পদ্ধতি: '}</span>
                  {item.approach}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="w-full flex items-center justify-between text-xs font-semibold text-emerald-800 hover:text-emerald-950 py-1 transition-colors group"
                >
                  <span>{lang === 'en' ? `Call for Consultation: ${DOCTOR_INFO.phone}` : `পরামর্শের জন্য কল করুন: ${DOCTOR_INFO.phone}`}</span>
                  <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-emerald-700" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Medicine Quality Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">
                {lang === 'en'
                  ? 'Pure Pharmacopeial Dilutions & Certified Biochemic Formulations'
                  : 'জার্মানির শতভাগ খাঁটি ডাইলিউশন ও মানসম্মত বায়োকেমিক ঔষধ'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {lang === 'en'
                  ? 'Medicines are dispensed in sealed amber glass containers. Zero mixing of unauthorized allopathic powders, heavy metals, or corticosteroids.'
                  : 'আমরা কোনো ভেজাল বা অনিবন্ধিত পাউডার ব্যবহার করি না। আন্তর্জাতিক মানসম্পন্ন অরিজিনাল জার্মান ওষুধ দিয়ে রোগীকে সেবা দেওয়া হয়।'}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <a
              href={`tel:${DOCTOR_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{lang === 'en' ? 'Ask Doctor:' : 'জিজ্ঞাসা করুন:'} {DOCTOR_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
