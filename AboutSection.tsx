import { RESTAURANT_IMAGES } from '../data/restaurantData';
import { Language, TRANSLATIONS } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  language: Language;
  onReserveClick: () => void;
}

export function AboutSection({ language, onReserveClick }: AboutSectionProps) {
  const t = TRANSLATIONS[language].about;

  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-[#F6F1E9] text-[#141210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Story */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#8C6823]">{t.kicker}</p>

              <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[#141210] [text-wrap:balance]">
                {t.title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#3E3832]">{t.paragraph1}</p>

              <p className="mt-4 text-base leading-relaxed text-[#3E3832]">{t.paragraph2}</p>
            </div>

            {/* Clean Editorial Numbered Pillars */}
            <div className="mt-10 pt-8 border-t border-[#141210]/12 space-y-6">
              {t.pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-base font-semibold text-[#141210]">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4F473F]">
                    {pillar.description}
                  </p>
                </div>
              ))}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onReserveClick}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#141210] hover:bg-[#2B2622] transition-colors rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6823]"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Full-height Framed Hospitality Photography */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-full overflow-hidden rounded-lg border border-[#141210]/12 bg-[#EAE1D3]">
              <ResilientImage
                src={RESTAURANT_IMAGES.aboutChef}
                alt={t.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-[#5E544A]">{t.imageCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
