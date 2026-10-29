import React from 'react';
import { MapPin, Navigation, Phone, Clock, Train, Footprints, Car, AlertCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { getChamberStatus } from '../utils/clinicHelpers';

interface ChamberLocationProps {
  lang: 'en' | 'bn';
}

export const ChamberLocation: React.FC<ChamberLocationProps> = ({ lang }) => {
  const status = getChamberStatus();
  const currentDayIndex = new Date().getDay(); // 0 is Sun, 6 is Sat

  // Map JS day to our schedule array
  // Schedule array: [0: Sat, 1: Sun, 2: Mon, 3: Tue, 4: Wed, 5: Thu, 6: Fri]
  const todayScheduleIdx = currentDayIndex === 6 ? 0 : currentDayIndex + 1;

  return (
    <section id="chamber" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12" id="directions">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            {lang === 'en' ? 'Location & Operating Hours' : 'চেম্বারের অবস্থান ও সময়সূচি'}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'Chamber Address & Directions' : 'মিরপুর-১০ চেম্বারের সহজ যাতায়াত পথ'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Conveniently accessible via Dhaka Metro Rail (MRT Line 6) Mirpur-10 Station or central Mirpur bus stops.'
              : 'ঢাকা মেট্রোরেল ও যে কোনো গণপরিবহনে মিরপুর-১০ গোলচত্বর থেকে মাত্র ৩ মিনিটের হাঁটা দূরত্ব।'}
          </p>
        </div>

        {/* 2-Column Grid: Left Schedule & Transit, Right Interactive Vector Map & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Hours & Landmarks (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Address Banner */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-stone-900 text-base">
                    {lang === 'en' ? 'Official Chamber Address' : 'চেম্বারের ঠিকানা'}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed font-medium">
                    {lang === 'en' ? DOCTOR_INFO.address : DOCTOR_INFO.bnAddress}
                  </p>
                  <p className="text-xs text-stone-500 pt-1">
                    {lang === 'en'
                      ? 'Detailed Landmark: Behind Shah Ali Market (লেডিস ব্যাগ গলি / Ladies Bag Alley). House 3, Road 2, Mirpur 10, Dhaka 1216.'
                      : 'সহজ চেনার উপায়: শাহ আলী মার্কেটের ঠিক পেছনে লেডিস ব্যাগ গলির ভেতরে বাড়ি নং ৩, রোড নং ২।'}
                  </p>
                </div>
              </div>

              {/* Action Buttons for Directions */}
              <div className="mt-5 pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-3">
                <a
                  href={DOCTOR_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Open in Google Maps' : 'গুগল ম্যাপসে দেখুন'}</span>
                </a>

                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{lang === 'en' ? 'Call for Directions' : 'রাস্তা জানতে কল করুন'}</span>
                </a>
              </div>
            </div>

            {/* Consultation Hours Table */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-800" />
                  <h3 className="font-bold text-stone-900 text-sm">
                    {lang === 'en' ? 'Weekly Consultation Hours' : 'সাপ্তাহিক রোগী দেখার সময়'}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {status.statusText}
                </span>
              </div>

              <div className="divide-y divide-stone-100 text-xs sm:text-sm">
                {DOCTOR_INFO.hours.map((item, idx) => {
                  const isToday = idx === todayScheduleIdx;
                  return (
                    <div
                      key={item.day}
                      className={`py-2.5 px-2 flex items-center justify-between transition-colors rounded-lg ${
                        isToday ? 'bg-emerald-50/70 font-semibold text-emerald-950' : 'text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>}
                        <span>{lang === 'en' ? item.day : item.bnDay}</span>
                        {isToday && <span className="text-[10px] text-emerald-800 font-bold uppercase">(Today)</span>}
                      </div>

                      <div className="text-right text-stone-600">
                        <span className={`font-medium ${item.isOpen ? 'text-stone-900' : 'text-stone-400 italic'}`}>
                          {item.hours}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
                {lang === 'en'
                  ? '* Friday morning is reserved for research & patient file audits. Friday evening open 4:30 PM to 9:30 PM.'
                  : '* শুক্রবার সকালে চেম্বার বন্ধ থাকে। শুক্রবার বিকেলে ৪:৩০ থেকে রাত ৯:৩০ পর্যন্ত রোগী দেখা হয়।'}
              </div>
            </div>

            {/* How to Reach Guide */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900">
                {lang === 'en' ? 'How to Reach the Chamber' : 'কীভাবে আসবেন'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <Train className="w-4 h-4 text-emerald-700" />
                    <span>Via Metro Rail</span>
                  </div>
                  <p>Get down at Mirpur-10 Metro Station. Walk south towards Shah Ali Market (3 min walk).</p>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <Footprints className="w-4 h-4 text-emerald-700" />
                    <span>Shah Ali Market Entry</span>
                  </div>
                  <p>Go directly to the back alley behind Shah Ali Market, widely known as the ladies bag alley.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Visual Map Rendering of Mirpur-10 (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs bg-stone-50">
              
              {/* Interactive Vector Map Header */}
              <div className="px-5 py-3.5 bg-stone-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Interactive Local Map
                  </h4>
                  <p className="text-sm font-medium text-stone-200">
                    Mirpur-10 Sector & Chamber Location
                  </p>
                </div>
                <a
                  href={DOCTOR_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-300 hover:text-white flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              {/* Graphic Vector Schematics of Mirpur 10 */}
              <div className="p-6 relative bg-emerald-950/5">
                <svg viewBox="0 0 500 360" className="w-full h-auto rounded-xl bg-stone-100 border border-stone-300">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="500" height="360" fill="url(#grid)" />

                  {/* Main Roads */}
                  {/* Mirpur 10 Main Roundabout Road */}
                  <circle cx="160" cy="180" r="45" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="6" />
                  <circle cx="160" cy="180" r="22" fill="#cbd5e1" />
                  <text x="160" y="184" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">
                    Mirpur-10 Circle
                  </text>

                  {/* Road from circle to south */}
                  <line x1="160" y1="225" x2="160" y2="360" stroke="#cbd5e1" strokeWidth="26" />
                  <line x1="160" y1="225" x2="160" y2="360" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 4" />

                  {/* Road from circle to north (Metro Rail Line) */}
                  <line x1="160" y1="0" x2="160" y2="135" stroke="#cbd5e1" strokeWidth="26" />
                  <line x1="160" y1="0" x2="160" y2="135" stroke="#10b981" strokeWidth="4" />
                  <text x="175" y="60" fontSize="9" fontWeight="bold" fill="#047857">
                    MRT Line 6 (Metro)
                  </text>

                  {/* Road from circle to east (towards Shah Ali Market) */}
                  <line x1="205" y1="180" x2="500" y2="180" stroke="#cbd5e1" strokeWidth="24" />
                  <text x="260" y="174" fontSize="9" fontWeight="bold" fill="#64748b">
                    Main Market Road
                  </text>

                  {/* Road 2 branch to Chamber */}
                  <path d="M 310 192 L 310 270 L 410 270" fill="none" stroke="#e2e8f0" strokeWidth="18" strokeLinecap="round" />
                  <text x="320" y="235" fontSize="8" fontWeight="bold" fill="#64748b">
                    Road No 2
                  </text>

                  {/* Shah Ali Market Block */}
                  <rect x="250" y="100" width="130" height="65" rx="6" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="2" />
                  <text x="315" y="130" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">
                    Shah Ali Market
                  </text>
                  <text x="315" y="145" textAnchor="middle" fontSize="8" fill="#3b82f6">
                    & Shopping Complex
                  </text>

                  {/* The Bag Alley (লেডিস ব্যাগ গলি) */}
                  <path d="M 380 130 L 430 130 L 430 240" fill="none" stroke="#f59e0b" strokeWidth="6" strokeDasharray="4 3" />
                  <rect x="375" y="150" width="105" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
                  <text x="427" y="166" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#92400e">
                    Bag Alley (ব্যাগ গলি)
                  </text>

                  {/* House No 3 Chamber Target Destination Pin */}
                  <circle cx="410" cy="270" r="14" fill="#047857" />
                  <circle cx="410" cy="270" r="6" fill="#ffffff" />
                  <rect x="320" y="295" width="170" height="45" rx="6" fill="#ffffff" stroke="#047857" strokeWidth="1.5" />
                  <text x="405" y="312" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">
                    Dr. Md. Ruhul Amin Chamber
                  </text>
                  <text x="405" y="327" textAnchor="middle" fontSize="8" fill="#475569">
                    House No 3, Road No 2, Mirpur 10
                  </text>

                  {/* Mirpur 10 Metro Rail Station Pin */}
                  <rect x="110" y="80" width="100" height="28" rx="4" fill="#047857" />
                  <text x="160" y="98" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">
                    Metro Station (Mirpur-10)
                  </text>
                </svg>

                {/* Map Guidance Footer */}
                <div className="mt-4 p-3 bg-white rounded-xl border border-stone-200/80 text-xs text-stone-700 space-y-1">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>How to locate inside the bag alley:</span>
                  </div>
                  <p className="text-stone-600">
                    Enter the alley directly behind Shah Ali Market. Walk 50 paces to House No 3 (Road No 2). Look for Dr. Md. Ruhul Amin's nameplate on the ground floor entrance.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
