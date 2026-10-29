import React from 'react';
import { Phone, Calendar, Clock, MapPin, Award, CheckCircle2, Star } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { getChamberStatus } from '../utils/clinicHelpers';

interface HeroProps {
  lang: 'en' | 'bn';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const status = getChamberStatus();

  return (
    <section className="relative overflow-hidden bg-stone-50/80 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata (Rule: No pill enclosures) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600">
              <span className="text-emerald-800 font-bold uppercase tracking-wide">
                {lang === 'en' ? 'Classical Homeopathy & Public Health' : 'উচ্চতর হোমিওপ্যাথিক চিকিৎসা'}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Mirpur-10, Dhaka</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-amber-800 font-medium">★ 4.6 (119 Google Reviews)</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
              {lang === 'en' ? (
                <>
                  Holistic, Individualized Medical Care by{' '}
                  <span className="text-emerald-900">Dr. Md. Ruhul Amin</span>
                </>
              ) : (
                <>
                  সঠিক রোগ নির্ণয় ও পার্শ্বপ্রতিক্রিয়াহীন হোমিওপ্যাথি চিকিৎসা —{' '}
                  <span className="text-emerald-900">ডাঃ মোঃ রুহুল আমিন</span>
                </>
              )}
            </h1>

            {/* Sub-headline & Qualifications */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-emerald-900">
                {lang === 'en' ? DOCTOR_INFO.qualifications : DOCTOR_INFO.bnQualifications}
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {lang === 'en' ? (
                  'University-trained homeopathic physician offering deep constitutional treatment for stubborn skin diseases, asthma, digestive disorders, kidney stones, and joint arthritis without toxic suppression.'
                ) : (
                  'ঢাকা বিশ্ববিদ্যালয় থেকে বিএইচএমএস ও বাউবি থেকে এমপিএইচ ডিগ্রিধারী। দীর্ঘস্থায়ী গ্যাস্ট্রিক, একজিমা, সোরিয়াসিস, হাঁপানি, বাতব্যথা ও কিডনি পাথরের সফল ক্লাসিক্যাল চিকিৎসা।'
                )}
              </p>
            </div>

            {/* Trust Highlights (Quiet text with checkmarks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>5-Year Regular BHMS Degree (Dhaka University)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Original German Dilutions & Biochemic Remedies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Deep 30-45 Min Holistic Case History Taking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Open Daily until 9:30 PM (Behind Shah Ali Market)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="px-6 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'en' ? `Call for Appointment: ${DOCTOR_INFO.phone}` : `সিরিয়ালের জন্য কল: ${DOCTOR_INFO.phone}`}</span>
              </a>

              <a
                href="#appointment"
                className="px-5 py-3 text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-xs"
              >
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'en' ? 'Serial Hours & Info' : 'সিরিয়ালের তথ্য'}</span>
              </a>

              <a
                href="#directions"
                className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>{lang === 'en' ? 'Find Chamber' : 'অবস্থান দেখুন'}</span>
              </a>
            </div>

            {/* Chamber Status Bar Below Actions */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-600">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-stone-800">{status.statusText}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>House No 3, Road No 2, Mirpur-10</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Doctor Image Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinical Image Frame */}
              <div className="overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/90 shadow-md">
                <img
                  src={DOCTOR_INFO.photo}
                  alt="Dr. Md. Ruhul Amin, Homeopathic Doctor in chamber"
                  className="w-full h-[440px] sm:h-[480px] lg:h-[520px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Info Tag */}
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-stone-200/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">Dr. Md. Ruhul Amin</h4>
                      <p className="text-xs text-stone-500">BHMS (DU), MPH (BOU) · Classical Homeopath</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>4.6 / 5.0</span>
                      </div>
                      <span className="text-[11px] text-stone-400">119 patient ratings</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Verified Trust Seal */}
              <div className="absolute -top-3 -right-3 bg-stone-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Govt. Reg. Homeopath</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
