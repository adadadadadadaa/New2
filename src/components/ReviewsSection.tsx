import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp, Filter } from 'lucide-react';
import { DOCTOR_INFO, REVIEWS_DATA, Review } from '../data/doctorData';

interface ReviewsSectionProps {
  lang: 'en' | 'bn';
  onOpenReviewModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, onOpenReviewModal }) => {
  const [filter, setFilter] = useState<string>('all');
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);

  const filteredReviews = filter === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.category === filter);

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-stone-50/70 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Proof Score */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              {lang === 'en' ? 'Verified Patient Feedback' : 'রোগীদের বাস্তব অভিজ্ঞতা'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
              {lang === 'en' ? 'Google Patient Ratings & Experiences' : 'গুগল রেটিং ও চিকিৎসার ফলাফল'}
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              {lang === 'en'
                ? 'Authentic feedback from patients across Dhaka and Bangladesh who sought homeopathic relief for long-standing conditions.'
                : 'দীর্ঘদিন বিভিন্ন জটিল রোগে ভুগে সুস্থ হওয়া রোগীদের প্রকৃত মতামত ও অভিজ্ঞতা।'}
            </p>
          </div>

          {/* Google Scorecard Box (Clean unboxed style) */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-6 shrink-0">
            <div className="text-center pr-6 border-r border-stone-100">
              <div className="text-3xl font-bold text-stone-900 tabular-nums">4.6</div>
              <div className="flex items-center text-amber-500 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-stone-500 mt-1 font-medium">119 Verified Reviews</div>
            </div>

            <div className="space-y-2">
              <button
                onClick={onOpenReviewModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Write a Patient Review' : 'আপনার মতামত লিখুন'}</span>
              </button>

              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{lang === 'en' ? 'Rate on Google Maps' : 'গুগল ম্যাপসে রেট দিন'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl mb-8 w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'All Reviews' : 'সব রিভিউ'}
          </button>
          <button
            onClick={() => setFilter('skin')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'skin' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'Skin & Eczema' : 'চর্ম ও একজিমা'}
          </button>
          <button
            onClick={() => setFilter('gastric')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'gastric' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'Gastric & IBS' : 'গ্যাস্ট্রিক ও আইবিএস'}
          </button>
          <button
            onClick={() => setFilter('chronic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'chronic' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'Kidney Stones & Allergy' : 'কিডনি পাথর ও এলার্জি'}
          </button>
          <button
            onClick={() => setFilter('joints')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'joints' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'Joints & Arthritis' : 'বাতব্যথা'}
          </button>
          <button
            onClick={() => setFilter('pediatric')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'pediatric' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang === 'en' ? 'Child Health' : 'শিশু স্বাস্থ্য'}
          </button>
        </div>

        {/* Reviews Cards Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header: Author + Star rating */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{rev.author}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                      <span>{rev.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500 shrink-0">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Condition Treated Label (unboxed inline text) */}
                <div className="text-xs text-emerald-800 font-semibold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Treated for: {rev.condition}</span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google Patient Review</span>
                </span>
                <span className="text-[11px] text-stone-400">Verified Visit</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
