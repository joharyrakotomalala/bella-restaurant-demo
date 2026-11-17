import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ language, onLanguageChange, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { id: 'accueil', label: t.links.accueil },
    { id: 'a-propos', label: t.links.aPropos },
    { id: 'menu', label: t.links.menu },
    { id: 'galerie', label: t.links.galerie },
    { id: 'contact', label: t.links.contact },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#141210]/95 backdrop-blur-md border-b border-[#C69C4E]/25 text-[#FAF7F2]'
          : 'bg-gradient-to-b from-[#141210]/85 to-transparent text-[#FAF7F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line Brand Title */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('accueil');
          }}
          className="font-display text-xl sm:text-[1.75rem] font-semibold tracking-tight text-[#FAF7F2] hover:text-[#C69C4E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] rounded"
        >
          Bella Restaurant
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label={t.mainAriaLabel} className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className="text-sm font-medium text-[#FAF7F2]/85 hover:text-[#C69C4E] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C69C4E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Visible FR / EN Language Switcher + Primary CTA + Mobile Drawer Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={t.languageLabel}
            className="inline-flex items-center p-0.5 rounded-md bg-[#1E1B18]/90 border border-[#C69C4E]/30 shrink-0"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('fr')}
              aria-pressed={language === 'fr'}
              className={`min-h-[34px] sm:min-h-[36px] px-2.5 sm:px-3 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] ${
                language === 'fr'
                  ? 'bg-[#C69C4E] text-[#141210]'
                  : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`min-h-[34px] sm:min-h-[36px] px-2.5 sm:px-3 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E] ${
                language === 'en'
                  ? 'bg-[#C69C4E] text-[#141210]'
                  : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('reservation')}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-sm font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D5AE63] transition-colors rounded-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
          >
            {t.reserveCta}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.closeMenuAria : t.openMenuAria}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#FAF7F2] hover:text-[#C69C4E] hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4E]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label={t.mobileAriaLabel}
          className="lg:hidden bg-[#141210] border-t border-[#C69C4E]/20 px-4 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className="flex items-center min-h-[44px] px-3 text-base font-medium text-[#FAF7F2]/90 hover:text-[#C69C4E] hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleLinkClick('reservation')}
              className="w-full min-h-[44px] flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#141210] bg-[#C69C4E] hover:bg-[#D5AE63] transition-colors rounded-md cursor-pointer"
            >
              {t.reserveMobileCta}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
