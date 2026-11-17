import { Language } from './translations';

export type MenuCategory = 'entrees' | 'plats' | 'desserts';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface DishItem {
  id: string;
  name: LocalizedText;
  category: MenuCategory;
  categoryLabel: LocalizedText;
  originNote: LocalizedText;
  price: number;
  description: LocalizedText;
  pairing: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}

export interface GalleryPhoto {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  categoryKey: 'room' | 'cuisine';
  categoryLabel: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  featured?: boolean;
}

export const RESTAURANT_IMAGES = {
  heroInterior: '/src/assets/images/hero_bella_interior_1794923509399.jpg',
  aboutChef: '/src/assets/images/about_chef_table_1794923510180.jpg',
  burrata: '/src/assets/images/dish_burrata_entree_1794923509855.jpg',
  tartare: '/src/assets/images/dish_tartare_entree_1794923511466.jpg',
  risotto: '/src/assets/images/dish_risotto_main_1794923510846.jpg',
  filet: '/src/assets/images/dish_filet_main_1794923512153.jpg',
  bar: '/src/assets/images/dish_bar_main_1794923512330.jpg',
  tarte: '/src/assets/images/dish_tarte_dessert_1794923512715.jpg',
  panna: '/src/assets/images/dish_panna_dessert_1794923513678.jpg',
} as const;

export const MENU_DISHES: DishItem[] = [
  {
    id: 'burrata-figues',
    name: {
      fr: 'Burrata Crémeuse & Figues Rôties',
      en: 'Creamy Burrata & Roasted Figs',
    },
    category: 'entrees',
    categoryLabel: {
      fr: 'Entrée',
      en: 'Starter',
    },
    originNote: {
      fr: 'Fait maison · Végétarien',
      en: 'Homemade · Vegetarian',
    },
    price: 16,
    description: {
      fr: 'Burrata artisanale servie sur lit de figues caramélisées au miel d’acacia, pignons de pin torréfiés, basilic frais et huile d’olive première pression.',
      en: 'Artisanal burrata served over acacia-honey caramelized figs, toasted pine nuts, fresh basil leaves, and first-press extra virgin olive oil.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Focaccia tiède au romarin',
      en: 'Suggested pairing: Warm rosemary focaccia',
    },
    image: RESTAURANT_IMAGES.burrata,
    imageAlt: {
      fr: 'Assiette de burrata crémeuse aux figues rôties, pignons de pin et basilic frais',
      en: 'Plate of creamy burrata with roasted figs, toasted pine nuts, and fresh basil',
    },
  },
  {
    id: 'carpaccio-dorade',
    name: {
      fr: 'Carpaccio de Dorade aux Agrumes',
      en: 'Citrus Sea Bream Carpaccio',
    },
    category: 'entrees',
    categoryLabel: {
      fr: 'Entrée',
      en: 'Starter',
    },
    originNote: {
      fr: 'Pêche côtière · Sans gluten',
      en: 'Coastal catch · Gluten-free',
    },
    price: 19,
    description: {
      fr: 'Fines tranches de dorade royale marinées au citron de Menton et pamplemousse rose, fenouil croquant, perles d’huile dorée et baies roses.',
      en: 'Delicate slices of royal sea bream marinated in Menton lemon and pink grapefruit, crisp shaved fennel, golden oil pearls, and pink peppercorns.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Verre de blanc sec minéral (fictif)',
      en: 'Suggested pairing: Crisp mineral dry white glass (fictional)',
    },
    image: RESTAURANT_IMAGES.tartare,
    imageAlt: {
      fr: 'Carpaccio de dorade royale aux agrumes, fenouil émincé et perles dorées sur assiette en grès beige',
      en: 'Sea bream carpaccio with citrus segments, shaved fennel, and golden oil pearls on beige stoneware',
    },
  },
  {
    id: 'risotto-safran-truffe',
    name: {
      fr: 'Risotto Doré au Safran & Truffe Noire',
      en: 'Golden Saffron & Black Truffle Risotto',
    },
    category: 'plats',
    categoryLabel: {
      fr: 'Plat principal',
      en: 'Main Course',
    },
    originNote: {
      fr: 'Signature du chef · Végétarien',
      en: 'Chef’s signature · Vegetarian',
    },
    price: 29,
    description: {
      fr: 'Riz Carnaroli cuit lentement au bouillon infusé au safran, copeaux généreux de truffe noire de saison et tuile dentelle au parmesan affiné 24 mois.',
      en: 'Slow-simmered Carnaroli rice in saffron-infused stock, generous shavings of seasonal black truffle, and 24-month aged parmesan lace crisp.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Émulsion de beurre noisette',
      en: 'Suggested pairing: Brown butter emulsion',
    },
    image: RESTAURANT_IMAGES.risotto,
    imageAlt: {
      fr: 'Risotto doré au safran garni de lamelles de truffe noire et tuile de parmesan dans un bol noir',
      en: 'Golden saffron risotto topped with shaved black truffle and parmesan crisp in a black bowl',
    },
  },
  {
    id: 'filet-boeuf-jus',
    name: {
      fr: 'Médaillons de Filet de Bœuf & Mousseline',
      en: 'Seared Beef Tenderloin & Parsnip Purée',
    },
    category: 'plats',
    categoryLabel: {
      fr: 'Plat principal',
      en: 'Main Course',
    },
    originNote: {
      fr: 'Cuisson basse température · Jus corsé',
      en: 'Slow-cooked · Rich shallot jus',
    },
    price: 36,
    description: {
      fr: 'Tendre filet de bœuf saisi au beurre demi-sel, réduction corsée aux échalotes confites, mousseline de panais veloutée et carottes fanes glacées au thym.',
      en: 'Tender beef tenderloin seared in salted butter, rich confit shallot reduction, velvety parsnip mousseline, and thyme-glazed baby carrots.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Poivre noir concassé & fleur de sel',
      en: 'Suggested pairing: Cracked black pepper & sea salt flakes',
    },
    image: RESTAURANT_IMAGES.filet,
    imageAlt: {
      fr: 'Médaillons de filet de bœuf saisis avec mousseline de panais et carottes glacées sur assiette beige',
      en: 'Seared beef tenderloin medallions with parsnip purée and glazed baby carrots on a beige plate',
    },
  },
  {
    id: 'bar-sauvage-safran',
    name: {
      fr: 'Filet de Bar Sauvage & Beurre Blanc',
      en: 'Wild Sea Bass & Saffron Beurre Blanc',
    },
    category: 'plats',
    categoryLabel: {
      fr: 'Plat principal',
      en: 'Main Course',
    },
    originNote: {
      fr: 'Peau croustillante · Produit de saison',
      en: 'Crispy skin · Seasonal catch',
    },
    price: 33,
    description: {
      fr: 'Bar sauvage rôti côté peau jusqu’à obtenir un croustillant doré, servi sur poireaux nouveaux grillés et beurre blanc parfumé au safran et huile d’herbes.',
      en: 'Wild sea bass pan-roasted skin-side down until golden and crisp, served over charred baby leeks with saffron beurre blanc and herb oil.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Citron rôti & herbes du jardin',
      en: 'Suggested pairing: Charred lemon & garden herbs',
    },
    image: RESTAURANT_IMAGES.bar,
    imageAlt: {
      fr: 'Filet de bar sauvage peau croustillante sur poireaux grillés et sauce safranée',
      en: 'Crispy-skin wild sea bass fillet over grilled leeks and saffron beurre blanc sauce',
    },
  },
  {
    id: 'tarte-chocolat-or',
    name: {
      fr: 'Tartelette Chocolat Noir & Praliné Noisette',
      en: 'Dark Chocolate & Hazelnut Praline Tartlet',
    },
    category: 'desserts',
    categoryLabel: {
      fr: 'Dessert',
      en: 'Dessert',
    },
    originNote: {
      fr: 'Pâtisserie maison · Éclat doré',
      en: 'House pastry · Gold leaf accent',
    },
    price: 14,
    description: {
      fr: 'Pâte sucrée au cacao, ganache onctueuse au chocolat noir 70 %, éclats de noisettes torréfiées, feuille d’or comestible et quenelle de glace vanille Bourbon.',
      en: 'Cocoa sweet pastry shell, silky 70% dark chocolate ganache, roasted hazelnut praline, edible gold leaf flake, and Bourbon vanilla ice cream quenelle.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Espresso arabica ou infusion verveine',
      en: 'Suggested pairing: Arabica espresso or verbena herbal tea',
    },
    image: RESTAURANT_IMAGES.tarte,
    imageAlt: {
      fr: 'Tartelette au chocolat noir, praliné noisette, feuille d’or et quenelle de glace vanille',
      en: 'Dark chocolate tartlet with roasted hazelnuts, gold leaf, and vanilla ice cream quenelle',
    },
  },
  {
    id: 'panna-cotta-poire',
    name: {
      fr: 'Panna Cotta Vanille & Poire Pochée',
      en: 'Vanilla Bean Panna Cotta & Poached Pear',
    },
    category: 'desserts',
    categoryLabel: {
      fr: 'Dessert',
      en: 'Dessert',
    },
    originNote: {
      fr: 'Douceur lactée · Caramel au miel',
      en: 'Silky cream · Honeyed caramel',
    },
    price: 12,
    description: {
      fr: 'Crème prise infusée à la gousse de vanille de Madagascar, quartiers de poire pochés aux épices douces, caramel ambré et tuile croquante aux amandes effilées.',
      en: 'Silky cream infused with Madagascar vanilla bean, gently spiced poached pear slices, amber caramel drizzle, and crisp toasted almond tuile.',
    },
    pairing: {
      fr: 'Accompagnement suggéré : Thé blanc aux fleurs',
      en: 'Suggested pairing: Floral white tea',
    },
    image: RESTAURANT_IMAGES.panna,
    imageAlt: {
      fr: 'Panna cotta à la vanille avec poire pochée, caramel doré et tuile aux amandes dans un bol noir',
      en: 'Vanilla panna cotta with poached pear, amber caramel, and almond tuile in a dark stoneware bowl',
    },
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-salle',
    title: {
      fr: 'La Grande Salle sous les Arches',
      en: 'The Main Room Beneath the Arches',
    },
    subtitle: {
      fr: 'Travertin clair, bois sombre et lampes dorées à la tombée du soir.',
      en: 'Pale travertine stone, dark wood, and brushed gold lamps at dusk.',
    },
    categoryKey: 'room',
    categoryLabel: {
      fr: 'Salle',
      en: 'Dining Room',
    },
    image: RESTAURANT_IMAGES.heroInterior,
    imageAlt: {
      fr: 'Intérieur du Bella Restaurant avec arches en pierre beige, tables noires et lampes dorées',
      en: 'Bella Restaurant interior with beige stone arches, black tables, and golden lamps',
    },
    featured: true,
  },
  {
    id: 'gal-chef',
    title: {
      fr: 'Le Passe & le Dressage',
      en: 'The Pass & Plating',
    },
    subtitle: {
      fr: 'Chaque assiette est finalisée à la minute devant la salle.',
      en: 'Every dish is finished à la minute beside the dining room.',
    },
    categoryKey: 'room',
    categoryLabel: {
      fr: 'Salle',
      en: 'Dining Room',
    },
    image: RESTAURANT_IMAGES.aboutChef,
    imageAlt: {
      fr: 'Chef effectuant le dressage minutieux d’un plat au passe de la cuisine ouverte',
      en: 'Chef carefully plating a gourmet dish at the open kitchen pass',
    },
  },
  {
    id: 'gal-risotto',
    title: {
      fr: 'Risotto Safran & Truffe',
      en: 'Saffron & Truffle Risotto',
    },
    subtitle: {
      fr: 'Service du soir à la lueur des bougies en laiton.',
      en: 'Evening service by the glow of brass candlesticks.',
    },
    categoryKey: 'cuisine',
    categoryLabel: {
      fr: 'Cuisine',
      en: 'Cuisine',
    },
    image: RESTAURANT_IMAGES.risotto,
    imageAlt: {
      fr: 'Risotto au safran et à la truffe noire servi sur table en pierre beige à la bougie',
      en: 'Saffron and black truffle risotto served on a beige stone table by candlelight',
    },
  },
  {
    id: 'gal-filet',
    title: {
      fr: 'Filet de Bœuf & Légumes Glacés',
      en: 'Beef Tenderloin & Glazed Vegetables',
    },
    subtitle: {
      fr: 'Cuisson maîtrisée et jus réduit plusieurs heures.',
      en: 'Precision searing and slow-reduced jus.',
    },
    categoryKey: 'cuisine',
    categoryLabel: {
      fr: 'Cuisine',
      en: 'Cuisine',
    },
    image: RESTAURANT_IMAGES.filet,
    imageAlt: {
      fr: 'Médaillons de filet de bœuf servis sur céramique artisanale beige',
      en: 'Beef tenderloin medallions plated on artisanal beige ceramic',
    },
  },
  {
    id: 'gal-bar',
    title: {
      fr: 'Bar Sauvage Rôti',
      en: 'Roasted Wild Sea Bass',
    },
    subtitle: {
      fr: 'Beurre blanc safrané et poireaux nouveaux grillés.',
      en: 'Saffron beurre blanc and charred baby leeks.',
    },
    categoryKey: 'cuisine',
    categoryLabel: {
      fr: 'Cuisine',
      en: 'Cuisine',
    },
    image: RESTAURANT_IMAGES.bar,
    imageAlt: {
      fr: 'Filet de bar sauvage et sa sauce beurre blanc au safran',
      en: 'Wild sea bass fillet with saffron beurre blanc sauce',
    },
  },
  {
    id: 'gal-tarte',
    title: {
      fr: 'Tartelette Chocolat & Or',
      en: 'Chocolate & Gold Tartlet',
    },
    subtitle: {
      fr: 'L’alliance du cacao intense, de la noisette et de la vanille.',
      en: 'Intense dark cocoa, roasted hazelnut, and Bourbon vanilla.',
    },
    categoryKey: 'cuisine',
    categoryLabel: {
      fr: 'Cuisine',
      en: 'Cuisine',
    },
    image: RESTAURANT_IMAGES.tarte,
    imageAlt: {
      fr: 'Dessert tartelette au chocolat noir et noisettes torréfiées avec glace vanille',
      en: 'Dark chocolate tartlet with toasted hazelnuts and vanilla ice cream',
    },
  },
];

export const FICTIONAL_CONTACT = {
  brandName: 'Bella Restaurant',
  addressLine1: {
    fr: '42 Avenue de l’Exemple',
    en: '42 Example Avenue',
  },
  addressLine2: {
    fr: '75000 Ville-Démo (Adresse fictive)',
    en: '75000 Demo City (Fictional address)',
  },
  phoneDisplay: '01 00 00 00 00',
  phoneNote: {
    fr: 'Numéro fictif de démonstration',
    en: 'Fictional demonstration number',
  },
  whatsappDisplay: '+33 6 00 00 00 00',
  whatsappNote: {
    fr: 'WhatsApp fictif de démonstration',
    en: 'Fictional demonstration WhatsApp',
  },
  emailDisplay: 'contact@bella-restaurant-demo.fr',
  emailNote: {
    fr: 'E-mail fictif de démonstration',
    en: 'Fictional demonstration email',
  },
  hours: [
    {
      days: { fr: 'Mardi – Vendredi', en: 'Tuesday – Friday' },
      time: { fr: '12h00 – 14h30 · 19h00 – 22h30', en: '12:00 – 14:30 · 19:00 – 22:30' },
    },
    {
      days: { fr: 'Samedi', en: 'Saturday' },
      time: { fr: '12h00 – 15h00 · 19h00 – 23h00', en: '12:00 – 15:00 · 19:00 – 23:00' },
    },
    {
      days: { fr: 'Dimanche', en: 'Sunday' },
      time: {
        fr: '12h00 – 15h30 (Déjeuner uniquement)',
        en: '12:00 – 15:30 (Lunch only)',
      },
    },
    {
      days: { fr: 'Lundi', en: 'Monday' },
      time: { fr: 'Fermé', en: 'Closed' },
    },
  ],
};

export function pickText(text: LocalizedText, language: Language): string {
  return text[language];
}
