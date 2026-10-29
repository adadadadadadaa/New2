import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/doctorData';

interface FAQSectionProps {
  lang: 'en' | 'bn';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-50/70 border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Patient Information' : 'প্রয়োজনীয় তথ্যাবলী'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা ও উত্তর'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            {lang === 'en'
              ? 'Clear, transparent facts about Dr. Ruhul Amin’s clinical practice, degrees, and consultation process.'
              : 'চিকিৎসা গ্রহণ, চেম্বার ও ওষুধ সম্পর্কিত সাধারণ প্রশ্নের স্পষ্ট উত্তর।'}
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm hover:text-emerald-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{lang === 'en' ? faq.q : faq.bnQ}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {lang === 'en' ? faq.a : faq.bnA}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
