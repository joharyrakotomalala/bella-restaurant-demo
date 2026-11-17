import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto, pickText } from '../data/restaurantData';
import { Language, TRANSLATIONS } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface GallerySectionProps {
  language: Language;
}

type GalleryFilter = 'all' | 'room' | 'cuisine';

export function GallerySection({ language }: GallerySectionProps) {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[language].gallery;

  const filterTabs: { id: GalleryFilter; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'room', label: t.filters.room },
    { id: 'cuisine', label: t.filters.cuisine },
  ];

  const visiblePhotos: GalleryPhoto[] =
    filter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.categoryKey === filter);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length,
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <section id="galerie" className="py-20 sm:py-28 bg-[#141210] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Gallery Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-[#E4C27A]">{t.kicker}</p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[#FAF7F2] [text-wrap:balance]">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#FAF7F2]/75">{t.subtitle}</p>
          </div>

          <div
            role="tablist"
            aria-label={t.filterAriaLabel}
            className="inline-flex items-center gap-1.5 p-1.5 bg-[#1E1B18] border border-white/10 rounded-lg self-start md:self-auto"
          >
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setFilter(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] ${
                    isActive
                      ? 'bg-[#C69C4E] text-[#141210] font-semibold'
                      : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2] hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => {
            const isHeroTile = photo.featured && filter === 'all' && index === 0;
            const photoTitle = pickText(photo.title, language);
            return (
              <figure
                key={photo.id}
                className={`group relative overflow-hidden rounded-lg border border-white/10 bg-[#1E1B18] ${
                  isHeroTile ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="block w-full h-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E]"
                  aria-label={`${t.enlargeAria} ${photoTitle}`}
                >
                  <ResilientImage
                    src={photo.image}
                    alt={pickText(photo.imageAlt, language)}
                    fallbackTitle={photoTitle}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/25 to-transparent"
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-[#E4C27A]">
                        {pickText(photo.categoryLabel, language)}
                      </p>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#FAF7F2]">
                        {photoTitle}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#FAF7F2]/80 line-clamp-1">
                        {pickText(photo.subtitle, language)}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="w-9 h-9 rounded-md bg-[#141210]/70 border border-white/15 inline-flex items-center justify-center text-[#E4C27A] shrink-0 group-hover:bg-[#C69C4E] group-hover:text-[#141210] transition-colors"
                    >
                      <Expand className="w-4 h-4" />
                    </span>
                  </figcaption>
                </button>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Keyboard-Accessible Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={pickText(activePhoto.title, language)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0A09]/92 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1E1B18] border border-[#C69C4E]/30 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <p className="text-xs sm:text-sm font-medium text-[#E4C27A] tabular-nums">
                {pickText(activePhoto.categoryLabel, language)} · {lightboxIndex + 1} /{' '}
                {visiblePhotos.length}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={t.closeAria}
                className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#FAF7F2]/85 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-[#141210]">
              <ResilientImage
                src={activePhoto.image}
                alt={pickText(activePhoto.imageAlt, language)}
                fallbackTitle={pickText(activePhoto.title, language)}
                className="w-full h-full object-contain"
              />

              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length,
                      )
                    }
                    aria-label={t.prevAria}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-md bg-[#141210]/80 border border-white/15 text-[#FAF7F2] hover:bg-[#C69C4E] hover:text-[#141210] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)
                    }
                    aria-label={t.nextAria}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center rounded-md bg-[#141210]/80 border border-white/15 text-[#FAF7F2] hover:bg-[#C69C4E] hover:text-[#141210] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-4 bg-[#1E1B18]">
              <h3 className="font-display text-2xl font-semibold text-[#FAF7F2]">
                {pickText(activePhoto.title, language)}
              </h3>
              <p className="mt-1 text-sm text-[#FAF7F2]/75">
                {pickText(activePhoto.subtitle, language)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
