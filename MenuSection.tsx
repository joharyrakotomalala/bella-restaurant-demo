import { useEffect, useState } from 'react';
import { CalendarCheck, X } from 'lucide-react';
import { DishItem, MENU_DISHES, MenuCategory, pickText } from '../data/restaurantData';
import { Language, TRANSLATIONS } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface MenuSectionProps {
  language: Language;
  onSelectDishForReservation: (dishName: string) => void;
}

type FilterOption = 'all' | MenuCategory;

export function MenuSection({ language, onSelectDishForReservation }: MenuSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const t = TRANSLATIONS[language].menu;

  const filterTabs: { id: FilterOption; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'entrees', label: t.filters.entrees },
    { id: 'plats', label: t.filters.plats },
    { id: 'desserts', label: t.filters.desserts },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedDish(null);
      }
    };
    if (selectedDish) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDish]);

  const filteredDishes =
    activeFilter === 'all'
      ? MENU_DISHES
      : MENU_DISHES.filter((dish) => dish.category === activeFilter);

  return (
    <section
      id="menu"
      className="py-20 sm:py-28 bg-[#FAF7F2] text-[#141210] border-t border-[#141210]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#141210]/12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-[#8C6823]">{t.kicker}</p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[#141210] [text-wrap:balance]">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4F473F]">{t.subtitle}</p>
          </div>

          <div
            role="tablist"
            aria-label={t.filterAriaLabel}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE1D3] rounded-lg self-start md:self-auto"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[40px] px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6823] ${
                    isActive
                      ? 'bg-[#141210] text-[#FAF7F2]'
                      : 'text-[#3E3832] hover:text-[#141210] hover:bg-[#FAF7F2]/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dish Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => {
            const dishName = pickText(dish.name, language);
            return (
              <article
                key={dish.id}
                className="group flex flex-col bg-[#F6F1E9] border border-[#141210]/10 rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
              >
                <button
                  type="button"
                  onClick={() => setSelectedDish(dish)}
                  className="block w-full aspect-[4/3] overflow-hidden bg-[#EAE1D3] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8C6823]"
                  aria-label={`${t.viewDetailsAria} ${dishName}`}
                >
                  <ResilientImage
                    src={dish.image}
                    alt={pickText(dish.imageAlt, language)}
                    fallbackTitle={dishName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#8C6823]">
                      {pickText(dish.categoryLabel, language)} ·{' '}
                      {pickText(dish.originNote, language)}
                    </p>

                    <div className="mt-2 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold leading-snug text-[#141210]">
                        {dishName}
                      </h3>
                      <span className="text-base font-semibold text-[#141210] tabular-nums whitespace-nowrap shrink-0">
                        {dish.price} €
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#4F473F]">
                      {pickText(dish.description, language)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#141210]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedDish(dish)}
                      className="text-sm font-medium text-[#141210] hover:text-[#8C6823] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6823] rounded-sm py-1"
                    >
                      {t.detailsButton}
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectDishForReservation(dishName)}
                      className="text-sm font-semibold text-[#8C6823] hover:text-[#141210] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6823] rounded-sm py-1"
                    >
                      {t.chooseToReserve}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/75 backdrop-blur-xs"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#141210] rounded-lg border border-[#C69C4E]/35 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              aria-label={t.closeModalAria}
              className="absolute top-3 right-3 z-10 w-10 h-10 inline-flex items-center justify-center rounded-md bg-[#141210]/80 text-[#FAF7F2] hover:bg-[#141210] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#EAE1D3] overflow-hidden">
              <ResilientImage
                src={selectedDish.image}
                alt={pickText(selectedDish.imageAlt, language)}
                fallbackTitle={pickText(selectedDish.name, language)}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold text-[#8C6823]">
                {pickText(selectedDish.categoryLabel, language)} ·{' '}
                {pickText(selectedDish.originNote, language)}
              </p>

              <div className="mt-2 flex items-baseline justify-between gap-4">
                <h3
                  id="dish-modal-title"
                  className="font-display text-3xl font-semibold text-[#141210]"
                >
                  {pickText(selectedDish.name, language)}
                </h3>
                <span className="text-xl font-semibold text-[#141210] tabular-nums whitespace-nowrap shrink-0">
                  {selectedDish.price} €
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#3E3832]">
                {pickText(selectedDish.description, language)}
              </p>

              <p className="mt-4 text-sm text-[#5E544A] pt-4 border-t border-[#141210]/10">
                {pickText(selectedDish.pairing, language)}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#3E3832] hover:text-[#141210] border border-[#141210]/20 rounded-md transition-colors cursor-pointer"
                >
                  {t.closeButton}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = pickText(selectedDish.name, language);
                    setSelectedDish(null);
                    onSelectDishForReservation(name);
                  }}
                  className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D7B26B] rounded-md transition-colors cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{t.reserveWithDish}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
