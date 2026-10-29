/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoogleProfileHub } from './components/GoogleProfileHub';
import { DoctorProfile } from './components/DoctorProfile';
import { Treatments } from './components/Treatments';
import { AppointmentSection } from './components/AppointmentSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ChamberLocation } from './components/ChamberLocation';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ReviewModal } from './components/ReviewModal';
import { PhotosModal } from './components/PhotosModal';
import { DOCTOR_INFO, Review, REVIEWS_DATA } from './data/doctorData';
import { Phone, Clock, CheckCircle } from 'lucide-react';
import { getChamberStatus } from './utils/clinicHelpers';

export default function App() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const status = getChamberStatus();

  const handleToggleLang = () => {
    setLang(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
    setToastMessage('Your patient review has been submitted successfully!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-stone-50/50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col font-sans">
      
      {/* Top Clinical Announcement Bar */}
      <div className="bg-emerald-950 text-stone-300 text-xs py-2 px-4 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">
              {lang === 'en' ? DOCTOR_INFO.chamberName : DOCTOR_INFO.bnChamberName}
            </span>
            <span aria-hidden="true" className="text-emerald-700">·</span>
            <span className="hidden sm:inline text-stone-300">
              {DOCTOR_INFO.designation}, {DOCTOR_INFO.institution}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-stone-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{status.statusText}</span>
            </div>
            <a
              href={`tel:${DOCTOR_INFO.phone}`}
              className="font-mono text-emerald-300 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar (Navbar) */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
        />

        {/* 2. Interactive Google Business Profile Hub */}
        <section className="py-10 bg-stone-100/60 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 text-center">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Google Business Profile Overview
              </span>
            </div>
            <GoogleProfileHub
              lang={lang}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
              onOpenPhotosModal={() => setIsPhotosModalOpen(true)}
            />
          </div>
        </section>

        {/* 3. Doctor Qualifications & Academic Background */}
        <DoctorProfile
          lang={lang}
        />

        {/* 4. Treatments & Conditions */}
        <Treatments
          lang={lang}
        />

        {/* 5. Call to Make Appointment / Serial Guidance */}
        <AppointmentSection
          lang={lang}
        />

        {/* 6. Patient Reviews & Google Ratings */}
        <ReviewsSection
          lang={lang}
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
        />

        {/* 7. Chamber Location, Operating Hours & Directions Map */}
        <ChamberLocation
          lang={lang}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQSection
          lang={lang}
        />

      </main>

      {/* Footer */}
      <Footer
        lang={lang}
      />

      {/* Modals */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        lang={lang}
        onSubmitNewReview={handleNewReview}
      />

      <PhotosModal
        isOpen={isPhotosModalOpen}
        onClose={() => setIsPhotosModalOpen(false)}
        lang={lang}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
