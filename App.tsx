import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { ReservationSection } from './components/ReservationSection';
import { Language, TRANSLATIONS } from './data/translations';

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [suggestedDishNote, setSuggestedDishNote] = useState('');

  useEffect(() => {
    const seo = TRANSLATIONS[language].seo;
    const currentUrl = `${window.location.origin}${window.location.pathname}`;

    document.documentElement.lang = language;
    document.title = seo.title;

    upsertMetaTag('name', 'description', seo.description);
    upsertMetaTag('property', 'og:title', seo.title);
    upsertMetaTag('property', 'og:description', seo.description);
    upsertMetaTag('property', 'og:locale', seo.ogLocale);
    upsertMetaTag('property', 'og:url', currentUrl);
    upsertMetaTag('property', 'og:image:alt', seo.imageAlt);
    upsertMetaTag('name', 'twitter:title', seo.title);
    upsertMetaTag('name', 'twitter:description', seo.description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    const jsonLdScript = document.getElementById('restaurant-jsonld');
    if (jsonLdScript?.textContent) {
      try {
        const parsed = JSON.parse(jsonLdScript.textContent) as Record<string, unknown>;
        parsed.name = seo.schemaName;
        parsed.description = seo.schemaDescription;
        parsed.servesCuisine = seo.servesCuisine;
        parsed.url = currentUrl;
        jsonLdScript.textContent = JSON.stringify(parsed, null, 2);
      } catch {
        // Keep static JSON-LD intact if parsing fails
      }
    }
  }, [language]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectDishForReservation = (dishName: string) => {
    setSuggestedDishNote(dishName);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E9] text-[#141210]">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        <HeroSection
          language={language}
          onDiscoverMenu={() => scrollToSection('menu')}
          onReserveClick={() => scrollToSection('reservation')}
        />

        <AboutSection
          language={language}
          onReserveClick={() => scrollToSection('reservation')}
        />

        <MenuSection
          language={language}
          onSelectDishForReservation={handleSelectDishForReservation}
        />

        <GallerySection language={language} />

        <ReservationSection
          language={language}
          suggestedDishNote={suggestedDishNote}
          onClearSuggestedDishNote={() => setSuggestedDishNote('')}
        />

        <ContactSection language={language} />
      </main>

      <Footer language={language} onNavigate={scrollToSection} />
    </div>
  );
}
