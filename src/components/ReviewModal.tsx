import React, { useState } from 'react';
import { X, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO, Review } from '../data/doctorData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'bn';
  onSubmitNewReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSubmitNewReview,
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('Gastric & Digestion');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      location: location.trim() || 'Mirpur, Dhaka',
      rating,
      date: 'Just now',
      condition,
      category: 'all',
      comment: comment.trim(),
      verified: true,
    };

    onSubmitNewReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-stone-200 shadow-xl p-6 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-lg"
          aria-label="Close review dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-stone-900">
              {lang === 'en' ? 'Thank You for Your Feedback!' : 'আপনার মতামতের জন্য ধন্যবাদ!'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              {lang === 'en'
                ? 'Your review has been shared with Dr. Md. Ruhul Amin and added to the patient testimonials.'
                : 'আপনার অভিজ্ঞতা সফলভাবে জমা হয়েছে। সুস্থ ও দীর্ঘায়ু কামনা করছি।'}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                Patient Feedback & Rating
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                {lang === 'en' ? 'Rate & Review Dr. Md. Ruhul Amin' : 'ডাঃ মোঃ রুহুল আমিন-কে রিভিউ দিন'}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                4.6 ★ (119 Reviews on Google Profile)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'en' ? 'Your Rating *' : 'আপনার রেটিং *'}
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-stone-700 ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariqul Islam"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {lang === 'en' ? 'Location in Dhaka / BD' : 'এলাকা / জেলা'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mirpur-10, Dhaka"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>
              </div>

              {/* Health Condition */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'en' ? 'Condition Treated' : 'চিকিৎসা গ্রহণ করেছেন কোন বিষয়ে'}
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                >
                  <option value="Gastric & IBS">Gastric, IBS & Acidity</option>
                  <option value="Chronic Skin & Eczema">Chronic Skin / Eczema / Psoriasis</option>
                  <option value="Kidney Stone">Kidney Stone / Lithiasis</option>
                  <option value="Asthma & Allergies">Asthma & Respiratory Allergy</option>
                  <option value="Joint Pain & Arthritis">Arthritis, Knee Pain & Sciatica</option>
                  <option value="Pediatric Cold & Tonsil">Child Health & Tonsillitis</option>
                  <option value="General Consultation">General Homeopathic Care</option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'en' ? 'Your Experience & Recovery Story *' : 'আপনার আরোগ্য ও অভিজ্ঞতার বিবরণ *'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={lang === 'en' ? 'Describe your health before and how Dr. Ruhul Amin helped you...' : 'চিকিৎসার আগের অবস্থা ও ওষুধের ফলাফল সম্পর্কে লিখুন...'}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  {lang === 'en' ? 'Publish Review' : 'রিভিউ সাবমিট করুন'}
                </button>

                <a
                  href={DOCTOR_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'en' ? 'Open Google Profile' : 'গুগলে রেট দিন'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
