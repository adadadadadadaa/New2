import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Building, Sparkles, Stethoscope } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'bn';
}

interface PhotoItem {
  id: string;
  url: string;
  title: string;
  bnTitle: string;
  category: 'chamber' | 'doctor' | 'dispensary';
  description: string;
}

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'doctor' | 'chamber'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  if (!isOpen) return null;

  const photos: PhotoItem[] = [
    {
      id: 'photo-1',
      url: '/assets/aistudio/image_29ed3578.png',
      title: 'Dr. Md. Ruhul Amin at Janani Homeo Medicare',
      bnTitle: 'জননী হোমিও মেডিকেয়ার চেম্বারে ডাঃ মোঃ রুহুল আমিন',
      category: 'doctor',
      description: 'BHMS (DU), MPH (BOU) · Senior Lecturer, Dept. of Chronic Diseases & Repertory, Govt. Homeopathic Medical College & Hospital.'
    },
    {
      id: 'photo-2',
      url: '/assets/aistudio/image_c38ca877.png',
      title: 'Janani Homeo Medicare Consultation Chamber',
      bnTitle: 'জননী হোমিও মেডিকেয়ার চেম্বারে রোগী দেখার টেবিল',
      category: 'chamber',
      description: 'Equipped with digital repertory workstation, x-ray illuminator, and comprehensive homeopathic reference library at House No 3, Road No 2, Mirpur-10.'
    }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <span>Google Business Profile Gallery</span>
              <span aria-hidden="true">·</span>
              <span>Janani Homeo Medicare</span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 mt-0.5">
              {lang === 'en' ? 'Clinic & Doctor Photos' : 'চেম্বার ও চিকিৎসকের ছবি'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
            aria-label="Close photos dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter buttons */}
        <div className="px-5 py-3 border-b border-stone-100 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {lang === 'en' ? 'All Photos (2)' : 'সকল ছবি (২)'}
          </button>
          <button
            onClick={() => setActiveCategory('doctor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'doctor' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {lang === 'en' ? 'Doctor Profile' : 'চিকিৎসক'}
          </button>
          <button
            onClick={() => setActiveCategory('chamber')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'chamber' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {lang === 'en' ? 'Chamber Interior' : 'চেম্বার'}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all bg-stone-100"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-3.5 bg-white">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                    {lang === 'en' ? photo.title : photo.bnTitle}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                    {photo.description}
                  </p>
                </div>

                <div className="absolute top-2 right-2 bg-stone-900/70 text-white p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Location Landmark reminder in modal */}
          <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                {DOCTOR_INFO.address}
              </span>
            </div>
            <a
              href={DOCTOR_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-800 font-bold hover:underline shrink-0 ml-4"
            >
              Open Maps
            </a>
          </div>
        </div>

        {/* Enlarged Single Photo Modal Viewer */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-60 bg-black/90 p-4 flex flex-col items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto rounded-lg object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 text-center text-white">
                <div className="text-base font-bold">{lang === 'en' ? selectedPhoto.title : selectedPhoto.bnTitle}</div>
                <div className="text-xs text-stone-400 mt-0.5">{selectedPhoto.description}</div>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-10 right-0 text-white p-2 hover:text-stone-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
