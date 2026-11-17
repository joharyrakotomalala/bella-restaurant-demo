import { ArrowRight } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';
import { Language, TRANSLATIONS } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  language: Language;
  onDiscoverMenu: () => void;
  onReserveClick: () => void;
}

export function HeroSection({
  language,
  onDiscoverMenu,
  onReserveClick,
}: HeroSectionProps) {
  const t = TRANSLATIONS[language].hero;

  return (
    <section
      id="accueil"
      className="relative min-h-[86vh] lg:min-h-[92vh] flex flex-col justify-end bg-[#141210] text-[#FAF7F2] overflow-hidden"
    >
      {/* Background 16:9 Architectural Dining Room Photography */}
      <div className="absolute inset-0">
        <ResilientImage
          src={RESTAURANT_IMAGES.heroInterior}
          alt={t.imageAlt}
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured scrim for crisp WCAG AA legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-[#141210]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#141210]/85 via-[#141210]/45 to-transparent"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pb-14">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-[#E4C27A] mb-4">{t.kicker}</p>

          <h1 className="font-display text-[clamp(2.75rem,5.5vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-[#FAF7F2] [text-wrap:balance]">
            Bella Restaurant
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#FAF7F2]/85 max-w-xl">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onDiscoverMenu}
              className="inline-flex items-center gap-2.5 min-h-[46px] px-7 py-3 text-sm sm:text-base font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D7B26B] transition-colors rounded-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
            >
              <span>{t.discoverMenu}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onReserveClick}
              className="inline-flex items-center min-h-[46px] px-4 py-3 text-sm sm:text-base font-medium text-[#FAF7F2] hover:text-[#E4C27A] border-b border-[#C69C4E]/60 hover:border-[#E4C27A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] rounded-sm"
            >
              {t.requestTable}
            </button>
          </div>
        </div>

        {/* Full-width 4-column Hospitality Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="text-xs font-medium text-[#E4C27A]">{t.highlights.serviceLabel}</p>
            <p className="mt-1 text-sm sm:text-base font-medium text-[#FAF7F2] tabular-nums">
              {t.highlights.serviceValue}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#E4C27A]">{t.highlights.philosophyLabel}</p>
            <p className="mt-1 text-sm sm:text-base font-medium text-[#FAF7F2]">
              {t.highlights.philosophyValue}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#E4C27A]">{t.highlights.capacityLabel}</p>
            <p className="mt-1 text-sm sm:text-base font-medium text-[#FAF7F2] tabular-nums">
              {t.highlights.capacityValue}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#E4C27A]">{t.highlights.ambianceLabel}</p>
            <p className="mt-1 text-sm sm:text-base font-medium text-[#FAF7F2]">
              {t.highlights.ambianceValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
