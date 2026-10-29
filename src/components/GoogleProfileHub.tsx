import React, { useState } from 'react';
import { 
  Phone, 
  Navigation, 
  Globe, 
  Share2, 
  Bookmark, 
  Star, 
  Clock, 
  MapPin, 
  Check, 
  MessageSquare,
  Sparkles,
  Camera,
  Layers
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { downloadVCard, getChamberStatus } from '../utils/clinicHelpers';

interface GoogleProfileHubProps {
  lang: 'en' | 'bn';
  onOpenReviewModal: () => void;
  onOpenPhotosModal: () => void;
  onSelectTab?: (tab: 'overview' | 'reviews' | 'photos') => void;
}

export const GoogleProfileHub: React.FC<GoogleProfileHubProps> = ({
  lang,
  onOpenReviewModal,
  onOpenPhotosModal,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'photos'>('overview');
  const [shareCopied, setShareCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const status = getChamberStatus();

  const handleShare = async () => {
    const shareData = {
      title: 'Dr. Md. Ruhul Amin - Homeopathic Doctor (Mirpur-10, Dhaka)',
      text: 'Dr. Md. Ruhul Amin, BHMS(DU), MPH(BOU) - 4.6 ★ (119 Reviews). House 3, Road 2, Mirpur-10, Dhaka. Phone: 01627-585412',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 3000);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 3000);
    }
  };

  const handleSaveContact = () => {
    downloadVCard();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-7 max-w-4xl mx-auto">
      {/* Top Identity Block */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-stone-100">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs shrink-0 bg-stone-100">
            <img
              src={DOCTOR_INFO.photo}
              alt="Dr. Md. Ruhul Amin"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-0.5">
              <span>Google Verified Listing</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">Doctor Open</span>
              <span aria-hidden="true">·</span>
              <span>Mirpur 10, Dhaka</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              {DOCTOR_INFO.name}
            </h2>
            <p className="text-sm font-semibold text-emerald-800 mt-0.5">
              (Homeopathic Doctor) {DOCTOR_INFO.qualifications}
            </p>

          {/* Rating Proof Block */}
          <div className="flex items-center gap-2.5 mt-2.5 text-sm">
            <span className="font-bold text-stone-900 text-base">{DOCTOR_INFO.rating}</span>
            <div className="flex items-center text-amber-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-4 h-4 ${s <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/60 text-amber-400'}`} 
                />
              ))}
            </div>
            <span className="text-stone-500">({DOCTOR_INFO.totalReviews} Reviews)</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={onOpenReviewModal}
              className="text-xs text-emerald-700 hover:text-emerald-900 font-medium underline underline-offset-2"
            >
              {lang === 'en' ? 'Rate and Review' : 'রিভিউ দিন'}
            </button>
            </div>
          </div>
        </div>

        {/* Live Open / Close Badge */}
        <div className="sm:text-right shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>{status.statusText}</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            {status.nextTimeInfo}
          </p>
        </div>
      </div>

      {/* Nav Tabs: Overview · Reviews · Photos */}
      <div className="flex items-center gap-2 pt-4 pb-4 border-b border-stone-100">
        <button
          onClick={() => {
            setActiveTab('overview');
            const el = document.getElementById('overview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'overview'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          {lang === 'en' ? 'Overview' : 'সারসংক্ষেপ'}
        </button>

        <button
          onClick={() => {
            setActiveTab('reviews');
            const el = document.getElementById('reviews');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'reviews'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          {lang === 'en' ? `Reviews (${DOCTOR_INFO.totalReviews})` : `রিভিউ (${DOCTOR_INFO.totalReviews})`}
        </button>

        <button
          onClick={() => {
            setActiveTab('photos');
            onOpenPhotosModal();
          }}
          className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'photos'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Photos & Gallery' : 'ছবি ও চেম্বার'}</span>
        </button>
      </div>

      {/* Action Buttons Hub: Call · Directions · Website · Share · Save */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 py-5 border-b border-stone-100">
        {/* 1. Call */}
        <a
          href={`tel:${DOCTOR_INFO.phone}`}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 text-stone-800 hover:text-emerald-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-1.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap">{lang === 'en' ? 'Call' : 'কল করুন'}</span>
          <span className="text-[11px] text-stone-500 font-mono mt-0.5">{DOCTOR_INFO.phone}</span>
        </a>

        {/* 2. Directions */}
        <a
          href={DOCTOR_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 text-stone-800 hover:text-emerald-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-800 mb-1.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap">{lang === 'en' ? 'Directions' : 'যাতায়াত'}</span>
          <span className="text-[11px] text-stone-500 mt-0.5">Mirpur-10</span>
        </a>

        {/* 3. Call for Appointment / Serial */}
        <a
          href={`tel:${DOCTOR_INFO.phone}`}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 text-stone-800 hover:text-emerald-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-amber-100/80 flex items-center justify-center text-amber-800 mb-1.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap">{lang === 'en' ? 'Serial Call' : 'সিরিয়াল কল'}</span>
          <span className="text-[11px] text-stone-500 font-mono mt-0.5">{DOCTOR_INFO.phone}</span>
        </a>

        {/* 4. Share */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 text-stone-800 hover:text-emerald-800 transition-colors group relative"
        >
          <div className="w-8 h-8 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-800 mb-1.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            {shareCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </div>
          <span className="text-xs font-bold whitespace-nowrap">
            {shareCopied ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Share' : 'শেয়ার')}
          </span>
          <span className="text-[11px] text-stone-500 mt-0.5">{lang === 'en' ? 'Profile link' : 'লিংক'}</span>
        </button>

        {/* 5. Save Contact */}
        <button
          onClick={handleSaveContact}
          className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 text-stone-800 hover:text-emerald-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 mb-1.5 group-hover:bg-stone-800 group-hover:text-white transition-colors">
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-600" /> : <Bookmark className="w-4 h-4" />}
          </div>
          <span className="text-xs font-bold whitespace-nowrap">
            {savedSuccess ? (lang === 'en' ? 'Saved!' : 'সেভ হয়েছে!') : (lang === 'en' ? 'Save Contact' : 'সেভ করুন')}
          </span>
          <span className="text-[11px] text-stone-500 mt-0.5">{lang === 'en' ? '.VCF Card' : 'ভি-কার্ড'}</span>
        </button>
      </div>

      {/* Address & Operational Details as in Google Listing */}
      <div className="pt-4 space-y-3 text-sm text-stone-700">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-stone-900">
              {lang === 'en' ? DOCTOR_INFO.address : DOCTOR_INFO.bnAddress}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              {lang === 'en'
                ? 'Landmark: Behind Shah Ali Market (in the bag alley / লেডিস ব্যাগ গলি). Near Mirpur 10 roundabout.'
                : 'ল্যান্ডমার্ক: শাহ আলী মার্কেটের ঠিক পেছনে লেডিস ব্যাগ গলি। মিরপুর ১০ গোলচত্বর সংলগ্ন।'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-emerald-800">
              {status.isOpen ? 'Open now' : 'Closed'}
            </span>
            <span className="text-stone-400">·</span>
            <span>Closes 9:30 PM (Sat–Thu: 10:00 AM–1:30 PM & 4:30 PM–9:30 PM, Fri: 4:30 PM–9:30 PM)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`}
              className="font-mono font-medium text-emerald-800 hover:underline"
            >
              {DOCTOR_INFO.phone}
            </a>
            <span className="text-xs text-stone-400">·</span>
            <span className="text-xs text-stone-500">Official Chamber & Serial Hotline</span>
          </div>
        </div>
      </div>
    </div>
  );
};
