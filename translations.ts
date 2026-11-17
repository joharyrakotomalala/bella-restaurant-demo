export type Language = 'fr' | 'en';

export interface SiteTranslations {
  seo: {
    title: string;
    description: string;
    ogLocale: string;
    imageAlt: string;
    schemaName: string;
    schemaDescription: string;
    servesCuisine: string[];
  };
  nav: {
    mainAriaLabel: string;
    mobileAriaLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
    links: {
      accueil: string;
      aPropos: string;
      menu: string;
      galerie: string;
      contact: string;
    };
    reserveCta: string;
    reserveMobileCta: string;
    languageLabel: string;
  };
  hero: {
    imageAlt: string;
    kicker: string;
    subtitle: string;
    discoverMenu: string;
    requestTable: string;
    highlights: {
      serviceLabel: string;
      serviceValue: string;
      philosophyLabel: string;
      philosophyValue: string;
      capacityLabel: string;
      capacityValue: string;
      ambianceLabel: string;
      ambianceValue: string;
    };
  };
  about: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    pillars: {
      title: string;
      description: string;
    }[];
    cta: string;
    imageAlt: string;
    imageCaption: string;
  };
  menu: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAriaLabel: string;
    filters: {
      all: string;
      entrees: string;
      plats: string;
      desserts: string;
    };
    viewDetailsAria: string;
    detailsButton: string;
    chooseToReserve: string;
    closeModalAria: string;
    closeButton: string;
    reserveWithDish: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAriaLabel: string;
    filters: {
      all: string;
      room: string;
      cuisine: string;
    };
    enlargeAria: string;
    closeAria: string;
    prevAria: string;
    nextAria: string;
  };
  reservation: {
    kicker: string;
    title: string;
    intro: string;
    serviceTitle: string;
    serviceText: string;
    groupsTitle: string;
    groupsText: string;
    demoBannerLabel: string;
    demoBannerText: string;
    confirmationKicker: string;
    confirmationTitle: string;
    confirmationBodyPrefix: string;
    confirmationBodySuffix: string;
    summaryName: string;
    summaryPhone: string;
    summaryDateTime: string;
    summaryAt: string;
    summaryGuests: string;
    summaryNote: string;
    editButton: string;
    resetButton: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    noteLabel: string;
    notePlaceholder: string;
    requiredHint: string;
    submitButton: string;
    dishNotePrefix: string;
    errors: {
      fullName: string;
      phone: string;
      dateRequired: string;
      datePast: string;
      time: string;
      guests: string;
    };
    guestOptions: { value: string; label: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    addressHeading: string;
    copyAddress: string;
    copiedAddress: string;
    phoneHeading: string;
    copyPhone: string;
    copiedPhone: string;
    emailHeading: string;
    copyEmail: string;
    copiedEmail: string;
    hoursHeading: string;
    whatsappKicker: string;
    whatsappTitle: string;
    whatsappDescription: string;
    displayedNumber: string;
    whatsappButton: string;
    modalTitle: string;
    modalSubtitle: string;
    closeModalAria: string;
    initialGreeting: string;
    autoReply: string;
    quickPromptsTitle: string;
    quickPrompts: string[];
    inputPlaceholder: string;
    sendAria: string;
  };
  footer: {
    navAriaLabel: string;
    addressSummary: string;
    copyright: string;
    privacyNote: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  fr: {
    seo: {
      title: 'Bella Restaurant – Cuisine de Saison & Table Contemporaine',
      description:
        'Découvrez Bella Restaurant : cuisine contemporaine de saison, entrées, plats principaux, desserts maison et demande de réservation pour déjeuner ou dîner.',
      ogLocale: 'fr_FR',
      imageAlt:
        'Salle principale du Bella Restaurant avec arches en pierre beige et luminaires dorés',
      schemaName: 'Bella Restaurant (Site de démonstration)',
      schemaDescription:
        'Site vitrine de démonstration pour l’entreprise fictive Bella Restaurant : cuisine contemporaine de saison, entrées, plats principaux et desserts faits maison. Toutes les coordonnées ci-dessous sont fictives.',
      servesCuisine: [
        'Cuisine contemporaine',
        'Cuisine méditerranéenne',
        'Cuisine de saison',
      ],
    },
    nav: {
      mainAriaLabel: 'Navigation principale',
      mobileAriaLabel: 'Navigation mobile',
      openMenuAria: 'Ouvrir le menu',
      closeMenuAria: 'Fermer le menu',
      links: {
        accueil: 'Accueil',
        aPropos: 'À propos',
        menu: 'Menu',
        galerie: 'Galerie',
        contact: 'Contact',
      },
      reserveCta: 'Réserver',
      reserveMobileCta: 'Demander une réservation',
      languageLabel: 'Choix de la langue',
    },
    hero: {
      imageAlt:
        'Salle à manger du Bella Restaurant aménagée avec arches en travertin beige, tables sombres et éclairage doré pour le dîner',
      kicker: 'Restaurant contemporain · Cuisine de saison · Déjeuner & dîner',
      subtitle:
        'Une table chaleureuse et raffinée dédiée à la cuisine de saison, façonnée chaque jour autour des meilleurs produits du marché dans un décor de pierre claire, bois sombre et laiton doré.',
      discoverMenu: 'Découvrir notre menu',
      requestTable: 'Demander une table',
      highlights: {
        serviceLabel: 'Service continu midi & soir',
        serviceValue: '12h00 – 14h30 · 19h00 – 22h30',
        philosophyLabel: 'Philosophie culinaire',
        philosophyValue: 'Carte courte renouvelée chaque saison',
        capacityLabel: 'Capacité d’accueil',
        capacityValue: '42 couverts en salle & salon privé',
        ambianceLabel: 'Cadre & atmosphère',
        ambianceValue: 'Déjeuners d’affaires & dîners intimes',
      },
    },
    about: {
      kicker: 'À propos du restaurant',
      title: 'L’art de recevoir autour d’une cuisine de saison sincère et lumineuse',
      paragraph1:
        'Imaginé comme un refuge gastronomique chaleureux, Bella Restaurant célèbre le plaisir de la table et du fait maison. Nos chefs cuisinent chaque matin des produits frais sélectionnés auprès de producteurs locaux pour composer des entrées, plats et desserts équilibrés.',
      paragraph2:
        'Entre pierre beige, boiseries sombres et touches dorées, notre salle de restaurant accueille aussi bien vos déjeuners d’affaires que vos dîners conviviaux.',
      pillars: [
        {
          title: '01. Saisonnalité & fraîcheur quotidienne',
          description:
            'Des arrivages côtiers et maraîchers renouvelés au fil des semaines pour garantir saveur et justesse dans chaque assiette.',
        },
        {
          title: '02. Dressage précis & cuisine ouverte',
          description:
            'Une brigade attentive aux cuissons minutes, aux jus longuement réduits et aux textures contrastées.',
        },
        {
          title: '03. Accueil sur mesure',
          description:
            'Un service discret et attentionné, adapté à vos envies alimentaires et à vos occasions particulières.',
        },
      ],
      cta: 'Réserver votre table',
      imageAlt:
        'Salle lumineuse du Bella Restaurant et chef dressant un plat gastronomique au passe de la cuisine ouverte',
      imageCaption:
        'La salle principale et le passe de dressage — service du midi et du soir.',
    },
    menu: {
      kicker: 'Menu & Carte du Restaurant',
      title: 'Entrées, plats principaux & desserts faits maison',
      subtitle: 'Tarifs indicatifs fictifs présentés à titre de démonstration, service inclus.',
      filterAriaLabel: 'Filtrer la carte par catégorie',
      filters: {
        all: 'Tout voir',
        entrees: 'Entrées',
        plats: 'Plats principaux',
        desserts: 'Desserts',
      },
      viewDetailsAria: 'Voir la fiche détaillée de',
      detailsButton: 'Détails du plat',
      chooseToReserve: 'Choisir pour réserver',
      closeModalAria: 'Fermer la fiche du plat',
      closeButton: 'Fermer',
      reserveWithDish: 'Réserver avec ce souhait',
    },
    gallery: {
      kicker: 'Galerie Photo du Restaurant',
      title: 'Ambiance en salle & assiettes de saison',
      subtitle: 'Cliquez sur une photographie pour l’afficher en grand format.',
      filterAriaLabel: 'Filtrer la galerie',
      filters: {
        all: 'Toutes',
        room: 'Salle',
        cuisine: 'Cuisine',
      },
      enlargeAria: 'Agrandir :',
      closeAria: 'Fermer la galerie',
      prevAria: 'Photo précédente',
      nextAria: 'Photo suivante',
    },
    reservation: {
      kicker: 'Réservation de table',
      title: 'Réserver une table au Bella Restaurant',
      intro:
        'Indiquez la date, l’heure et le nombre de convives souhaités pour simuler une demande de table dans notre salle principale.',
      serviceTitle: 'Services du déjeuner & du dîner',
      serviceText: 'Déjeuner entre 12h00 et 13h30 · Dîner entre 19h00 et 21h30.',
      groupsTitle: 'Groupes & demandes particulières',
      groupsText:
        'Allergies, menu végétarien ou occasion spéciale peuvent être précisés dans votre demande.',
      demoBannerLabel: 'Mode démonstration :',
      demoBannerText:
        'ce formulaire valide vos informations localement et affiche un récapitulatif interactif sans transmettre de réservation réelle.',
      confirmationKicker: 'Confirmation de démonstration',
      confirmationTitle: 'Demande enregistrée en simulation',
      confirmationBodyPrefix: 'Merci',
      confirmationBodySuffix:
        'Cette confirmation est affichée à titre de démonstration uniquement : aucune réservation réelle n’a été envoyée ni enregistrée sur un serveur.',
      summaryName: 'Nom',
      summaryPhone: 'Téléphone saisi',
      summaryDateTime: 'Date & heure',
      summaryAt: 'à',
      summaryGuests: 'Couverts',
      summaryNote: 'Note ajoutée',
      editButton: 'Modifier ma demande',
      resetButton: 'Nouvelle simulation',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex. Camille Laurent',
      phoneLabel: 'Téléphone',
      phonePlaceholder: '06 00 00 00 00 (fictif)',
      dateLabel: 'Date',
      timeLabel: 'Heure',
      guestsLabel: 'Personnes',
      noteLabel: 'Précision ou allergie (facultatif)',
      notePlaceholder: 'Allergie alimentaire, table calme, anniversaire...',
      requiredHint: '* Champs requis pour la simulation de demande.',
      submitButton: 'Envoyer la demande (démo)',
      dishNotePrefix: 'Intéressé(e) par :',
      errors: {
        fullName: 'Veuillez indiquer votre nom complet (2 caractères minimum).',
        phone:
          'Veuillez saisir un numéro de téléphone valide (ex. 06 00 00 00 00 fictif).',
        dateRequired: 'Veuillez choisir une date souhaitée.',
        datePast: 'La date sélectionnée ne peut pas être antérieure à aujourd’hui.',
        time: 'Veuillez sélectionner un horaire.',
        guests: 'Veuillez préciser le nombre de couverts.',
      },
      guestOptions: [
        { value: '1', label: '1 personne' },
        { value: '2', label: '2 personnes' },
        { value: '3', label: '3 personnes' },
        { value: '4', label: '4 personnes' },
        { value: '5', label: '5 personnes' },
        { value: '6', label: '6 personnes' },
        { value: '7', label: '7 personnes' },
        { value: '8+', label: '8 personnes ou plus' },
      ],
    },
    contact: {
      kicker: 'Contact & Accès · Coordonnées fictives',
      title: 'Nous joindre & préparer votre visite',
      subtitle:
        'Toutes les coordonnées affichées ci-dessous sont entièrement fictives et servent exclusivement à illustrer ce site vitrine de démonstration.',
      addressHeading: 'Adresse (fictive)',
      copyAddress: 'Copier l’adresse fictive',
      copiedAddress: 'Adresse fictive copiée',
      phoneHeading: 'Téléphone (fictif)',
      copyPhone: 'Copier le numéro fictif',
      copiedPhone: 'Numéro fictif copié',
      emailHeading: 'E-mail (fictif)',
      copyEmail: 'Copier l’e-mail fictif',
      copiedEmail: 'E-mail fictif copié',
      hoursHeading: 'Horaires d’ouverture',
      whatsappKicker: 'Messagerie directe · Démonstration',
      whatsappTitle: 'Échanger sur WhatsApp',
      whatsappDescription:
        'Testez le bouton WhatsApp de démonstration pour ouvrir une simulation de discussion avec la réception du Bella Restaurant.',
      displayedNumber: 'Numéro affiché :',
      whatsappButton: 'WhatsApp (Démonstration)',
      modalTitle: 'Bella Restaurant — WhatsApp Démo',
      modalSubtitle: 'Simulation locale',
      closeModalAria: 'Fermer la démonstration WhatsApp',
      initialGreeting:
        'Bonjour et bienvenue chez Bella Restaurant. Cet espace simule notre accueil WhatsApp de démonstration (aucun message réel n’est envoyé).',
      autoReply:
        'Message reçu en mode démonstration. Dans une version connectée, notre équipe vous répondrait sous quelques minutes. Aucune donnée n’a été transmise.',
      quickPromptsTitle: 'Messages rapides de démonstration :',
      quickPrompts: [
        'Bonjour, avez-vous une table pour 2 personnes ce vendredi soir ?',
        'Proposez-vous des plats sans gluten sur la carte actuelle ?',
        'Serait-il possible de réserver pour un dîner d’anniversaire ?',
      ],
      inputPlaceholder: 'Écrire un message de test...',
      sendAria: 'Envoyer le message de démonstration',
    },
    footer: {
      navAriaLabel: 'Navigation pied de page',
      addressSummary:
        '42 Avenue de l’Exemple, 75000 Ville-Démo · Coordonnées fictives de démonstration',
      copyright:
        '© 2026 Bella Restaurant — Entreprise fictive présentée à titre de démonstration.',
      privacyNote: 'Aucune donnée personnelle n’est conservée ni transmise.',
    },
  },
  en: {
    seo: {
      title: 'Bella Restaurant – Contemporary Seasonal Dining & Menu',
      description:
        'Discover Bella Restaurant: contemporary seasonal dining, homemade starters, main courses, desserts, gallery, and online table request simulation.',
      ogLocale: 'en_US',
      imageAlt:
        'Bella Restaurant main dining room featuring beige travertine arches and warm golden lamps',
      schemaName: 'Bella Restaurant (Demonstration Site)',
      schemaDescription:
        'Demonstration showcase website for the fictional business Bella Restaurant: contemporary seasonal cuisine, homemade starters, main courses, and desserts. All contact details are fictional.',
      servesCuisine: [
        'Contemporary cuisine',
        'Mediterranean cuisine',
        'Seasonal dining',
      ],
    },
    nav: {
      mainAriaLabel: 'Main navigation',
      mobileAriaLabel: 'Mobile navigation',
      openMenuAria: 'Open menu',
      closeMenuAria: 'Close menu',
      links: {
        accueil: 'Home',
        aPropos: 'About',
        menu: 'Menu',
        galerie: 'Gallery',
        contact: 'Contact',
      },
      reserveCta: 'Reserve',
      reserveMobileCta: 'Request a reservation',
      languageLabel: 'Language selector',
    },
    hero: {
      imageAlt:
        'Bella Restaurant dining room with warm beige stone arches, dark timber tables, and golden evening lamps',
      kicker: 'Contemporary Restaurant · Seasonal Cuisine · Lunch & Dinner',
      subtitle:
        'A warm, refined dining room celebrating seasonal cooking crafted daily from fresh market produce in a setting of pale stone, dark timber, and brushed gold.',
      discoverMenu: 'Explore our menu',
      requestTable: 'Request a table',
      highlights: {
        serviceLabel: 'Lunch & Dinner Service',
        serviceValue: '12:00 – 14:30 · 19:00 – 22:30',
        philosophyLabel: 'Culinary Philosophy',
        philosophyValue: 'Curated menu renewed each season',
        capacityLabel: 'Seating Capacity',
        capacityValue: '42 dining seats & private salon',
        ambianceLabel: 'Setting & Atmosphere',
        ambianceValue: 'Business lunches & intimate dinners',
      },
    },
    about: {
      kicker: 'About the Restaurant',
      title: 'The art of hospitality around sincere, seasonal dining',
      paragraph1:
        'Designed as a warm culinary sanctuary, Bella Restaurant celebrates homemade cooking and thoughtful hospitality. Every morning, our chefs craft balanced starters, main courses, and desserts from fresh ingredients sourced from dedicated growers.',
      paragraph2:
        'Framed by warm beige stone, dark wood paneling, and golden accents, our dining room welcomes both business lunches and intimate evening dinners.',
      pillars: [
        {
          title: '01. Seasonality & Daily Freshness',
          description:
            'Coastal catches and market produce refreshed week by week to guarantee vibrant flavor and precision on every plate.',
        },
        {
          title: '02. Precise Plating & Open Pass',
          description:
            'A dedicated brigade focused on à la minute cooking, slow-reduced jus, and contrasting textures.',
        },
        {
          title: '03. Tailored Hospitality',
          description:
            'Attentive, understated service adapted to your dietary preferences and special occasions.',
        },
      ],
      cta: 'Reserve your table',
      imageAlt:
        'Sunlit Bella Restaurant dining room and chef delicately plating a seasonal dish at the open kitchen pass',
      imageCaption: 'The main dining room and open plating pass — lunch and dinner service.',
    },
    menu: {
      kicker: 'Restaurant Menu',
      title: 'Seasonal Starters, Main Courses & Homemade Desserts',
      subtitle: 'Fictional indicative prices shown for demonstration purposes, service included.',
      filterAriaLabel: 'Filter menu by category',
      filters: {
        all: 'View all',
        entrees: 'Starters',
        plats: 'Main Courses',
        desserts: 'Desserts',
      },
      viewDetailsAria: 'View full details for',
      detailsButton: 'Dish details',
      chooseToReserve: 'Select to reserve',
      closeModalAria: 'Close dish details',
      closeButton: 'Close',
      reserveWithDish: 'Reserve with this preference',
    },
    gallery: {
      kicker: 'Restaurant Photo Gallery',
      title: 'Dining Room Atmosphere & Seasonal Plates',
      subtitle: 'Click any photograph to view it in full size.',
      filterAriaLabel: 'Filter gallery',
      filters: {
        all: 'All',
        room: 'Dining Room',
        cuisine: 'Cuisine',
      },
      enlargeAria: 'Enlarge:',
      closeAria: 'Close gallery',
      prevAria: 'Previous photo',
      nextAria: 'Next photo',
    },
    reservation: {
      kicker: 'Table Reservation',
      title: 'Book a table at Bella Restaurant',
      intro:
        'Select your preferred date, time, and party size to simulate a table request in our main dining room.',
      serviceTitle: 'Lunch & Dinner Services',
      serviceText: 'Lunch from 12:00 to 13:30 · Dinner from 19:00 to 21:30.',
      groupsTitle: 'Groups & Special Requests',
      groupsText:
        'Dietary allergies, vegetarian options, or celebratory notes can be included with your request.',
      demoBannerLabel: 'Demonstration mode:',
      demoBannerText:
        'this form validates your details locally and displays an interactive summary without sending a real reservation.',
      confirmationKicker: 'Demonstration Confirmation',
      confirmationTitle: 'Request recorded in simulation',
      confirmationBodyPrefix: 'Thank you',
      confirmationBodySuffix:
        'This confirmation is displayed for demonstration purposes only: no real reservation has been sent or stored on a server.',
      summaryName: 'Name',
      summaryPhone: 'Phone entered',
      summaryDateTime: 'Date & time',
      summaryAt: 'at',
      summaryGuests: 'Party size',
      summaryNote: 'Added note',
      editButton: 'Edit my request',
      resetButton: 'New simulation',
      nameLabel: 'Full name',
      namePlaceholder: 'e.g. Camille Laurent',
      phoneLabel: 'Phone number',
      phonePlaceholder: '+33 6 00 00 00 00 (fictional)',
      dateLabel: 'Date',
      timeLabel: 'Time',
      guestsLabel: 'Guests',
      noteLabel: 'Dietary note or special request (optional)',
      notePlaceholder: 'Food allergy, quiet table, anniversary...',
      requiredHint: '* Required fields for the booking simulation.',
      submitButton: 'Send request (demo)',
      dishNotePrefix: 'Interested in:',
      errors: {
        fullName: 'Please enter your full name (at least 2 characters).',
        phone:
          'Please enter a valid phone number (e.g. 06 00 00 00 00 fictional).',
        dateRequired: 'Please select a preferred date.',
        datePast: 'The selected date cannot be earlier than today.',
        time: 'Please choose a time slot.',
        guests: 'Please select the number of guests.',
      },
      guestOptions: [
        { value: '1', label: '1 guest' },
        { value: '2', label: '2 guests' },
        { value: '3', label: '3 guests' },
        { value: '4', label: '4 guests' },
        { value: '5', label: '5 guests' },
        { value: '6', label: '6 guests' },
        { value: '7', label: '7 guests' },
        { value: '8+', label: '8 guests or more' },
      ],
    },
    contact: {
      kicker: 'Contact & Access · Fictional Details',
      title: 'Reach Out & Plan Your Visit',
      subtitle:
        'All contact details shown below are completely fictional and serve solely to illustrate this showcase website.',
      addressHeading: 'Address (fictional)',
      copyAddress: 'Copy fictional address',
      copiedAddress: 'Fictional address copied',
      phoneHeading: 'Phone (fictional)',
      copyPhone: 'Copy fictional number',
      copiedPhone: 'Fictional number copied',
      emailHeading: 'Email (fictional)',
      copyEmail: 'Copy fictional email',
      copiedEmail: 'Fictional email copied',
      hoursHeading: 'Opening Hours',
      whatsappKicker: 'Direct Messaging · Demonstration',
      whatsappTitle: 'Chat on WhatsApp',
      whatsappDescription:
        'Try the demonstration WhatsApp button to open a simulated conversation with the Bella Restaurant reception desk.',
      displayedNumber: 'Displayed number:',
      whatsappButton: 'WhatsApp (Demo)',
      modalTitle: 'Bella Restaurant — WhatsApp Demo',
      modalSubtitle: 'Local simulation',
      closeModalAria: 'Close WhatsApp demonstration',
      initialGreeting:
        'Hello and welcome to Bella Restaurant. This window simulates our demonstration WhatsApp reception (no real message is sent).',
      autoReply:
        'Message received in demonstration mode. In a live deployment, our team would reply within minutes. No data was transmitted.',
      quickPromptsTitle: 'Quick demonstration messages:',
      quickPrompts: [
        'Hello, do you have a table for 2 this Friday evening?',
        'Do you offer gluten-free options on the current menu?',
        'Would it be possible to book for a birthday dinner?',
      ],
      inputPlaceholder: 'Write a test message...',
      sendAria: 'Send demonstration message',
    },
    footer: {
      navAriaLabel: 'Footer navigation',
      addressSummary:
        '42 Example Avenue, 75000 Demo City · Fictional demonstration details',
      copyright:
        '© 2026 Bella Restaurant — Fictional business presented for demonstration purposes.',
      privacyNote: 'No personal data is stored or transmitted.',
    },
  },
};
