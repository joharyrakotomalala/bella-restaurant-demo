import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ language, onNavigate }: FooterProps) {
  const navT = TRANSLATIONS[language].nav;
  const t = TRANSLATIONS[language].footer;

  const links = [
    { id: 'accueil', label: navT.links.accueil },
    { id: 'a-propos', label: navT.links.aPropos },
    { id: 'menu', label: navT.links.menu },
    { id: 'galerie', label: navT.links.galerie },
    { id: 'reservation', label: navT.reserveCta },
    { id: 'contact', label: navT.links.contact },
  ];

  return (
    <footer className="bg-[#141210] text-[#FAF7F2] border-t border-[#C69C4E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-display text-2xl font-semibold text-[#FAF7F2]">Bella Restaurant</p>
            <p className="mt-1.5 text-sm text-[#FAF7F2]/70">{t.addressSummary}</p>
          </div>

          <nav
            aria-label={t.navAriaLabel}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className="text-sm text-[#FAF7F2]/80 hover:text-[#E4C27A] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>{t.copyright}</p>
          <p>{t.privacyNote}</p>
        </div>
      </div>
    </footer>
  );
}
