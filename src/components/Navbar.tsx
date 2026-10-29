import React, { useState } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface NavbarProps {
  lang: 'en' | 'bn';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-baseline gap-2.5 whitespace-nowrap shrink-0 group">
            <span className="font-display text-2xl font-bold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">
              {lang === 'en' ? 'Dr. Md. Ruhul Amin' : 'ডাঃ মোঃ রুহুল আমিন'}
            </span>
            <span className="hidden sm:inline text-xs text-stone-500 font-medium">
              BHMS (DU) · MPH (BOU)
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#overview" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Overview' : 'পরিচিতি'}
            </a>
            <a href="#specializations" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Treatments' : 'চিকিৎসা সমূহ'}
            </a>
            <a href="#appointment" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Call for Appointment' : 'সিরিয়ালের জন্য কল'}
            </a>
            <a href="#chamber" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Chamber & Hours' : 'চেম্বার ও সময়সূচি'}
            </a>
            <a href="#reviews" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Patient Reviews' : 'রোগীদের মতামত'}
            </a>
            <a href="#directions" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Directions' : 'যাতায়াত'}
            </a>
          </nav>

          {/* Zone 3: 1 primary action + Language switch */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
              title="Toggle Bengali / English"
            >
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <a
              href={`tel:${DOCTOR_INFO.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? `Call for Appointment: ${DOCTOR_INFO.phone}` : `সিরিয়ালের জন্য কল: ${DOCTOR_INFO.phone}`}</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="p-2 text-stone-600 hover:bg-stone-100 rounded-md text-xs font-semibold"
            >
              {lang === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-stone-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a 
              href="#overview" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Overview' : 'পরিচিতি'}
            </a>
            <a 
              href="#specializations" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Treatments & Specialties' : 'চিকিৎসা সমূহ'}
            </a>
            <a 
              href="#appointment" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Call to Make Appointment' : 'সিরিয়ালের জন্য কল'}
            </a>
            <a 
              href="#chamber" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Clinic & Hours' : 'চেম্বার ও সময়সূচি'}
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Patient Reviews (119)' : 'রোগীদের মতামত (১১৯)'}
            </a>
            <a 
              href="#directions" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              {lang === 'en' ? 'Map & Directions' : 'যাতায়াত ও অবস্থান'}
            </a>
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={`tel:${DOCTOR_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-emerald-800 rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'en' ? `Call ${DOCTOR_INFO.phone}` : `সিরিয়ালের জন্য কল: ${DOCTOR_INFO.phone}`}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
