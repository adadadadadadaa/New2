import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, CheckCircle2, AlertCircle, FileText, Copy, Check } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { getChamberStatus } from '../utils/clinicHelpers';

interface AppointmentSectionProps {
  lang: 'en' | 'bn';
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const status = getChamberStatus();

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(DOCTOR_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppUrl = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Assalamu Alaikum Dr. Md. Ruhul Amin, I would like to book an appointment serial for consultation at Janani Homeo Medicare, Mirpur-10. Please let me know the available time slot.'
  )}`;

  return (
    <section id="appointment" className="py-16 sm:py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 flex items-center justify-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Direct Phone Appointment' : 'সিরিয়ালের জন্য ফোন করুন'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            {lang === 'en'
              ? 'Call to Book Your Consultation Serial'
              : 'সরাসরি ফোনে কথা বলে সিরিয়াল নিশ্চিত করুন'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            {lang === 'en'
              ? 'To provide each patient with adequate time for comprehensive case taking, consultations are conducted on a strict phone serial basis.'
              : 'প্রতিটি রোগীকে আন্তরিকতার সাথে পর্যাপ্ত সময় দিয়ে কেস হিস্ট্রি নেওয়ার জন্য সিরিয়াল সরাসরি ফোনের মাধ্যমেই নিশ্চিত করা হয়।'}
          </p>
        </div>

        {/* Central Call Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-emerald-700/80 bg-gradient-to-b from-emerald-50/70 to-stone-50/60 p-6 sm:p-10 shadow-sm">
            
            <div className="text-center space-y-4">
              
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-semibold shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>{status.statusText}</span>
              </div>

              {/* Large Telephone Number Display */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {lang === 'en' ? 'Official Chamber Hotline' : 'চেম্বার ও সিরিয়াল হটলাইন'}
                </div>
                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="font-mono text-3xl sm:text-5xl font-extrabold text-stone-950 hover:text-emerald-800 transition-colors tracking-tight block mt-2"
                >
                  {DOCTOR_INFO.phone}
                </a>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
                  {DOCTOR_INFO.chamberName} (Janani Homeo Medicare) · Mirpur-10, Dhaka
                </p>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-md flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Call Now to Book' : 'এখনই কল করুন'}</span>
                </a>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-sm font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-800" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyNumber}
                  className="w-full sm:w-auto p-3.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
                  title="Copy Phone Number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4 text-stone-600" />}
                  <span className="sm:hidden">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

            {/* Serial Guidelines & Hours Grid */}
            <div className="mt-8 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm text-stone-700">
              
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>{lang === 'en' ? 'Visiting & Calling Hours' : 'রোগী দেখার সময়সূচি'}</span>
                </div>
                <div className="text-xs text-stone-600 space-y-1">
                  <div><strong>Visiting Days:</strong> Saturday to Thursday</div>
                  <div><strong>Consultation Shift:</strong> 4:00 PM to 9:30 PM</div>
                  <div className="text-stone-500"><strong>Friday:</strong> Closed (Prior call only)</div>
                  <div className="pt-1 text-emerald-800 font-medium">
                    Call between 10:00 AM – 8:00 PM to confirm your evening serial.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>{lang === 'en' ? 'What to Bring on Your Visit' : 'চেম্বারে আসার সময় সাথে আনবেন'}</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                  <li>All previous prescriptions and medicine history</li>
                  <li>Recent blood tests, ultrasound, or X-ray reports</li>
                  <li>List of allopathic medicines currently being taken</li>
                  <li>Arrive 10-15 minutes prior to your serial time</li>
                </ul>
              </div>

            </div>

            {/* Address Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  {DOCTOR_INFO.address}
                </span>
              </div>
              <a
                href="#directions"
                className="text-emerald-800 font-bold hover:underline shrink-0 ml-4"
              >
                {lang === 'en' ? 'View Map' : 'ম্যাপ দেখুন'}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
