import React from 'react';
import { GraduationCap, ShieldCheck, HeartHandshake, Microscope, Stethoscope, Clock, Check } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface DoctorProfileProps {
  lang: 'en' | 'bn';
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ lang }) => {
  return (
    <section id="overview" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            {lang === 'en' ? 'Physician Credentials & Approach' : 'চিকিৎসকের পরিচিতি ও চিকিৎসা দর্শন'}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Scientific Foundations Combined with Pure Classical Homeopathy'
              : 'ঢাকা বিশ্ববিদ্যালয়ের ডিগ্রি ও আধুনিক জনস্বাস্থ্য সচেতনতার সমন্বয়'}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Homeopathy is not guesswork—it is a systematized clinical science. Dr. Md. Ruhul Amin brings institutional university education, rigorous diagnostic evaluation, and ethical medical standards to his practice in Mirpur, Dhaka.'
              : 'ডাঃ মোঃ রুহুল আমিন শুধু বংশগত বা অভিজ্ঞতানির্ভর প্রথাগত চর্চায় বিশ্বাসী নন। তিনি ঢাকা বিশ্ববিদ্যালয়ের চিকিৎসা অনুষদের অধীনে নিয়মিত ৫ বছর পড়াশোনা সম্পন্ন করে প্রাতিষ্ঠানিক চিকিৎসাসেবা প্রদান করছেন।'}
          </p>
        </div>

        {/* 2-Column Split: Credentials & Interior Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: 4 Foundational Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Qualification Card 1 */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    BHMS — Bachelor of Homeopathic Medicine and Surgery
                  </h3>
                  <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                    Faculty of Medicine, University of Dhaka (DU)
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A comprehensive 5-year academic curriculum covering human anatomy, physiology, pathology, gynecology, toxicology, and Hahnemannian therapeutics with hands-on hospital internship.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualification Card 2 */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    MPH — Master of Public Health
                  </h3>
                  <div className="text-xs text-blue-800 font-semibold mt-0.5">
                    Bangladesh Open University (BOU)
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Advanced postgraduate education in disease prevention, health hygiene, environmental epidemiology, and holistic health management for urban communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Principles of Classical Care */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-stone-900 mb-3">
                {lang === 'en' ? 'Core Clinical Commitments' : 'চিকিৎসা সেবায় আমাদের অঙ্গিকার'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span><strong>Zero Steroids:</strong> No secret mixing of allopathic steroids or unverified chemicals.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span><strong>Individualized Potency:</strong> Remedies selected based on your unique bodily constitution.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span><strong>German Standard:</strong> High purity authentic dilutions from trusted pharmacopoeias.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span><strong>Safe for All Ages:</strong> Gentle and non-toxic for newborn infants, pregnant mothers & seniors.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Modern Consultation Chamber Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm bg-stone-50 h-full flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={DOCTOR_INFO.clinicPhoto}
                  alt="Janani Homeo Medicare Consultation Chamber at Mirpur-10"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-stone-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm">
                  Janani Homeo Medicare · Mirpur-10 (Behind Shah Ali Market)
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-base">
                    {lang === 'en' ? 'A Calm, Confidential Consultation Space' : 'শান্ত ও নিরিবিলি পরামর্শকক্ষ'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                    {lang === 'en'
                      ? 'Every consultation is held in complete privacy. We take the necessary time to explore your sleep, emotional stressors, food preferences, and disease progression.'
                      : 'প্রতিটি রোগীকে পর্যাপ্ত সময় দিয়ে রোগের বিস্তারিত ইতিবৃত্ত, শারীরিক লক্ষণ, মানসিক অবস্থা ও পারিবারিক ইতিহাস পর্যালোচনা করা হয়।'}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-500">{lang === 'en' ? 'Serial Hotline' : 'সিরিয়াল হটলাইন'}</div>
                    <div className="font-mono text-sm font-bold text-stone-900">{DOCTOR_INFO.phone}</div>
                  </div>
                  <a
                    href={`tel:${DOCTOR_INFO.phone}`}
                    className="px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>{lang === 'en' ? 'Call for Serial' : 'সিরিয়ালের জন্য কল'}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
