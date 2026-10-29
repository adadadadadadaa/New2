import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface FooterProps {
  lang: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Doctor Identity & Chamber (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {DOCTOR_INFO.name}
              </span>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">
                {DOCTOR_INFO.qualifications} · {DOCTOR_INFO.chamberName}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Senior Lecturer in Chronic Diseases & Repertory at Government Homeopathic Medical College & Hospital, Dhaka. Providing university-trained classical homeopathic treatment for complex chronic ailments.'
                : 'সিনিয়র প্রভাষক, সরকারি হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল, ঢাকা। ঢাকা বিশ্ববিদ্যালয় থেকে বিএইচএমএস এবং বাউবি থেকে এমপিএইচ ডিগ্রিধারী।'}
            </p>

            <div className="flex items-center gap-3 pt-1 text-xs text-stone-400">
              <span className="text-amber-400 font-bold">★ 4.6 (119 Reviews)</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Govt. Reg. H-1249</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Quick Links' : 'দ্রুত লিংক'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Physician Credentials' : 'চিকিৎসক পরিচিতি'}
                </a>
              </li>
              <li>
                <a href="#specializations" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Treatments & Care' : 'চিকিৎসা সমূহ'}
                </a>
              </li>
              <li>
                <a href="#chamber" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Visiting Hours' : 'রোগী দেখার সময়'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Patient Reviews' : 'রোগীদের মতামত'}
                </a>
              </li>
              <li>
                <a href="#directions" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Map & Directions' : 'যাতায়াত ও ম্যাপ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Chamber Address & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'en' ? 'Mirpur-10 Chamber' : 'মিরপুর-১০ চেম্বার'}
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {DOCTOR_INFO.address}
                  <span className="block text-[11px] text-stone-500 mt-0.5">
                    (In the bag alley / লেডিস ব্যাগ গলি behind Shah Ali Market)
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${DOCTOR_INFO.phone}`} className="font-mono text-white hover:underline">
                  {DOCTOR_INFO.phone} (Hotline & Serial)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Visiting Hours: Sat - Thu (4:00 PM - 9:30 PM), Friday Closed</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={DOCTOR_INFO.shareGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={DOCTOR_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-300 text-xs font-medium transition-colors"
                >
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {DOCTOR_INFO.name}. All Rights Reserved. Janani Homeo Medicare.
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] text-stone-500">
            Medical Disclaimer: Information presented on this website is for educational and consultation serial booking purposes. In acute surgical or life-threatening emergencies, consult the nearest hospital casualty emergency ward.
          </div>
        </div>

      </div>
    </footer>
  );
};
