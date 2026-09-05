import type { AdviceArticle } from "./articles";

export const articlesBeforeLinen: readonly AdviceArticle[] = [
  {
    slug: "nettoyage-ponctuel-ou-regulier",
    status: "draft",
    category: "Organisation",
    title: "Nettoyage ponctuel ou régulier : quelle organisation choisir ?",
    seoTitle:
      "Nettoyage ponctuel ou régulier en location courte durée : que choisir ?",
    description:
      "Comparez deux façons de vous organiser selon votre logement, votre proximité et le rythme réel de vos réservations.",
    introduction:
      "Certains propriétaires recherchent un renfort pour quelques dates difficiles. D’autres souhaitent installer des habitudes plus stables au fil des réservations. Le bon choix dépend moins d’une formule toute faite que de la place que le logement occupe dans votre quotidien.",
    image: "/images/conseils/nettoyage-ponctuel-regulier.png",
    imageAlt: "Calendrier mensuel préparé pour organiser les nettoyages d’un logement",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "deux-besoins",
        text: "Deux façons différentes de retrouver de la souplesse",
      },
      {
        type: "paragraph",
        text: "Une intervention ponctuelle répond à une situation précise. Elle peut être utile pendant une absence, lors d’une période chargée ou simplement lorsqu’une rotation ne peut pas être assurée par le propriétaire. Elle permet de demander de l’aide sans modifier toute l’organisation du logement.",
      },
      {
        type: "paragraph",
        text: "Une organisation régulière répond à un autre besoin : ne plus reconstruire les mêmes repères à chaque réservation. Les consignes, l’accès au logement et les particularités des couchages deviennent progressivement plus familiers. Cela ne signifie pas pour autant déléguer la gestion des annonces ou des voyageurs.",
      },
      {
        type: "heading",
        level: 2,
        id: "situation-proprietaire",
        text: "Partir de votre situation, pas d’une fréquence idéale",
      },
      {
        type: "paragraph",
        text: "Imaginons un propriétaire qui habite près de son logement et assure habituellement les rotations lui-même. Son besoin peut rester ponctuel : quelques dates rapprochées, une indisponibilité ou une période estivale plus intense. Dans ce cas, conserver la main et solliciter un renfort lorsque cela devient nécessaire peut être suffisant.",
      },
      {
        type: "paragraph",
        text: "À l’inverse, un propriétaire qui vit plus loin ou dont les réservations s’enchaînent régulièrement peut perdre beaucoup de temps à réexpliquer les mêmes éléments. Une organisation suivie apporte alors de la continuité, en particulier lorsque les consignes du logement sont stables.",
      },
      {
        type: "paragraph",
        text: "La fréquence réellement observée compte davantage que celle espérée. Une location encore irrégulière n’a pas besoin d’être enfermée trop tôt dans une organisation rigide. Quelques interventions permettent déjà de comprendre où se situent les difficultés.",
      },
      {
        type: "callout",
        title: "Ponctuel ne signifie pas improvisé",
        text: "Même pour un seul passage, l’accès, les consignes, le linge propre, les produits et le matériel doivent être préparés en amont.",
      },
      {
        type: "heading",
        level: 2,
        id: "regulier-confort",
        text: "Ce que la régularité change concrètement",
      },
      {
        type: "paragraph",
        text: "La régularité devient intéressante lorsque les mêmes questions reviennent à chaque rotation. Où se trouve le linge pour le second couchage ? Quels consommables doivent être vérifiés ? Quel détail visible mérite d’être signalé ? Une fois ces repères clarifiés, les échanges peuvent se concentrer sur les informations propres au prochain séjour.",
      },
      {
        type: "paragraph",
        text: "Cette continuité peut également faire apparaître des besoins qui passaient inaperçus. Un stock de linge trop juste, un placard difficile d’accès ou une consigne ambiguë deviennent plus faciles à identifier après plusieurs passages comparables.",
      },
      {
        type: "paragraph",
        text: "Une organisation régulière ne doit cependant pas être confondue avec une conciergerie complète. Le propriétaire continue de gérer ses réservations, ses annonces et ses voyageurs. Le service reste centré sur le nettoyage et la préparation du logement entre deux séjours.",
      },
      {
        type: "heading",
        level: 2,
        id: "commencer-simplement",
        text: "Commencer simplement, puis ajuster",
      },
      {
        type: "paragraph",
        text: "Il n’est pas nécessaire de décider immédiatement d’un fonctionnement définitif. Une première demande sur une rotation réelle permet de vérifier si les consignes sont assez claires, si le matériel est bien organisé et si le créneau correspond au logement.",
      },
      {
        type: "paragraph",
        text: "Le choix peut ensuite évoluer avec la saison. À Marseille, un propriétaire peut avoir besoin d’un soutien plus régulier pendant une période de forte activité, puis revenir à des demandes occasionnelles lorsque les réservations s’espacent. L’organisation doit suivre la réalité du logement plutôt qu’un cadre imposé à l’avance.",
      },
      {
        type: "callout",
        title: "Le bon rythme",
        text: "Le fonctionnement le plus adapté est celui qui réduit les urgences sans vous faire déléguer davantage que vous ne le souhaitez.",
      },
    ],
    relatedSlugs: [
      "checklist-nettoyage-entre-deux-voyageurs",
      "rotation-meme-jour",
    ],
    sources: [
      {
        label: "Airbnb — Règles de base pour les hôtes",
        url: "https://www.airbnb.fr/help/article/2895",
      },
      {
        label: "Airbnb — Conseils pour organiser le nettoyage",
        url: "https://www.airbnb.fr/resources/hosting-homes/a/matrisez-lart-du-nettoyage-en-suivant-ces-conseils-dexperts-663",
      },
    ],
  },
  {
    slug: "temps-entre-deux-voyageurs",
    status: "draft",
    category: "Rotations",
    title: "Combien de temps prévoir entre deux voyageurs ?",
    seoTitle:
      "Combien de temps prévoir entre deux voyageurs dans une location courte durée ?",
    description:
      "Une méthode pour estimer un créneau réaliste selon le logement, les couchages, l’accès et les tâches prévues.",
    introduction:
      "Il n’existe pas de durée valable pour toutes les locations. Le créneau nécessaire dépend du logement, de son état après le séjour et de la préparation attendue avant l’arrivée suivante.",
    image: "/images/conseils/temps-entre-voyageurs.png",
    imageAlt: "Horloge murale utilisée pour prévoir le temps entre deux voyageurs",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "pas-duree-universelle",
        text: "Pourquoi il n’existe pas de durée universelle",
      },
      {
        type: "paragraph",
        text: "Deux logements de même surface peuvent demander des organisations très différentes. Le nombre de couchages utilisés, les sanitaires, l’accès, l’extérieur et les consignes particulières ont souvent plus d’influence que la surface seule.",
      },
      {
        type: "callout",
        title: "Un chiffre générique peut être trompeur",
        text: "Une estimation trouvée en ligne ne tient pas compte de votre logement. Le meilleur repère reste le temps observé pendant plusieurs rotations comparables.",
      },
      {
        type: "heading",
        level: 2,
        id: "facteurs-duree",
        text: "Les éléments qui influencent la durée",
      },
      {
        type: "table",
        headers: ["Élément", "Pourquoi il compte"],
        rows: [
          ["Surface et configuration", "Les pièces et déplacements influencent le parcours"],
          ["Couchages utilisés", "Chaque lit ajoute du linge et des contrôles"],
          ["Salles de bain", "Les sanitaires demandent une attention spécifique"],
          ["État après le séjour", "Un état inhabituel peut sortir du standard"],
          ["Accès", "Clés, stationnement et étage réduisent le créneau utile"],
          ["Consignes particulières", "Certains équipements demandent plus de temps"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "temps-disponible",
        text: "Distinguer le temps disponible du temps d’intervention",
      },
      {
        type: "paragraph",
        text: "L’écart entre l’heure de départ et l’heure d’arrivée ne correspond pas entièrement au temps de nettoyage. Il faut accéder au logement, installer puis ranger le matériel et conserver un vrai temps de contrôle final.",
      },
      {
        type: "callout",
        title: "Créneau réellement utilisable",
        text: "Temps entre les horaires annoncés, moins l’accès, l’installation, le rangement, le contrôle final et une marge pour les imprévus.",
      },
      {
        type: "heading",
        level: 2,
        id: "estimer-creneau",
        text: "Construire une première estimation",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Lister les pièces et les couchages habituellement utilisés.",
          "Définir les tâches incluses dans la rotation standard.",
          "Séparer les tâches périodiques ou exceptionnelles.",
          "Ajouter le temps lié à l’accès et au matériel.",
          "Conserver une marge avant l’arrivée suivante.",
          "Comparer l’estimation au créneau réellement disponible.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "observer-rotations",
        text: "Observer les premières rotations et ajuster",
      },
      {
        type: "table",
        headers: ["Point observé", "Ajustement possible"],
        rows: [
          ["Matériel difficile à trouver", "Prévoir un emplacement fixe"],
          ["Linge non trié", "Préparer les ensembles par couchage"],
          ["Tâche supplémentaire récurrente", "La classer dans les consignes ou en complément"],
          ["Contrôle final écourté", "Augmenter la marge disponible"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "signes-creneau-serre",
        text: "Les signes d’un créneau trop serré",
      },
      {
        type: "checklist",
        items: [
          "Le contrôle final doit être supprimé pour terminer à temps.",
          "Le moindre retard de départ compromet toute l’organisation.",
          "Le linge ou les consommables sont recherchés pendant l’intervention.",
          "Les tâches périodiques sont toujours repoussées.",
          "L’intervention se termine au moment précis de l’arrivée suivante.",
        ],
      },
      {
        type: "paragraph",
        text: "Lorsque deux séjours s’enchaînent le même jour, l’accès, le linge propre, le matériel et les consignes doivent être confirmés. Si aucune marge ne subsiste, le créneau doit être réévalué plutôt que considéré comme automatiquement réalisable.",
      },
      {
        type: "callout",
        title: "Le temps estimé n’est pas une garantie",
        text: "Une durée observée aide à organiser les rotations futures, mais elle ne permet pas de prévoir exactement l’état laissé après chaque séjour ni les imprévus d’accès.",
      },
    ],
    relatedSlugs: [
      "rotation-meme-jour",
      "checklist-nettoyage-entre-deux-voyageurs",
    ],
    sources: [
      {
        label: "Airbnb — Définir les heures d’arrivée et de départ",
        url: "https://www.airbnb.fr/help/article/1296",
      },
      {
        label: "Airbnb — Règles de base pour les voyageurs",
        url: "https://www.airbnb.fr/help/article/2894",
      },
    ],
  },
];

export const articlesAfterLinen: readonly AdviceArticle[] = [
  {
    slug: "verifier-apres-depart-voyageurs",
    status: "draft",
    category: "Contrôle",
    title: "Que vérifier juste après le départ des voyageurs ?",
    seoTitle: "Que vérifier après le départ des voyageurs ? La checklist essentielle",
    description:
      "Les premiers contrôles à effectuer après un départ pour repérer les priorités avant de commencer le nettoyage.",
    introduction:
      "Avant de retirer le linge ou de déplacer les objets, un premier tour permet de comprendre la situation. Ce contrôle doit rester rapide, descriptif et distinct du nettoyage comme d’un état des lieux contractuel.",
    image: "/images/conseils/verification-apres-depart.png",
    imageAlt:
      "Objets et équipements contrôlés après le départ des voyageurs",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "observer-avant-nettoyage",
        text: "Pourquoi observer le logement avant de nettoyer ?",
      },
      {
        type: "paragraph",
        text: "Commencer immédiatement à ranger peut faire disparaître le contexte d’un objet oublié ou d’un élément déplacé. Un premier passage aide à distinguer la rotation normale de ce qui demande une décision ou un signalement.",
      },
      {
        type: "callout",
        title: "Un contrôle visuel, pas un diagnostic",
        text: "L’objectif est de relever les éléments évidents et accessibles. Ce passage ne garantit pas la détection de toutes les anomalies et ne remplace ni un diagnostic technique ni un état des lieux.",
      },
      {
        type: "heading",
        level: 2,
        id: "priorites-immediates",
        text: "Commencer par les priorités immédiates",
      },
      {
        type: "checklist",
        items: [
          "Vérifier que l’accès et les clés prévues sont disponibles.",
          "Repérer une fuite, une odeur anormale ou un risque visible.",
          "Identifier les objets oubliés sans les mélanger aux affaires du logement.",
          "Repérer une casse ou un élément manquant visible.",
          "Observer l’état général avant de déplacer le linge et les déchets.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "linge-stocks",
        text: "Vérifier le linge et les stocks disponibles",
      },
      {
        type: "checklist",
        items: [
          "Regrouper le linge utilisé dans la zone prévue.",
          "Vérifier que le linge propre nécessaire est disponible.",
          "Contrôler les tailles adaptées aux couchages à préparer.",
          "Repérer les consommables absents selon les consignes.",
          "Confirmer la présence du matériel et des produits nécessaires.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "controle-piece",
        text: "Faire un contrôle simple pièce par pièce",
      },
      {
        type: "table",
        headers: ["Zone", "Points à observer"],
        rows: [
          ["Entrée", "Clés, accès, objets oubliés et traces inhabituelles"],
          ["Pièce de vie", "Mobilier déplacé, objets manquants et casse visible"],
          ["Cuisine", "Vaisselle, déchets, appareils et traces inhabituelles"],
          ["Salle de bain", "Linge utilisé, écoulement et équipement endommagé"],
          ["Chambres", "Objets oubliés, couchages utilisés et linge disponible"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "classer-constats",
        text: "Classer les constats pour savoir quoi faire",
      },
      {
        type: "table",
        headers: ["Catégorie", "Exemple", "Action"],
        rows: [
          ["À intégrer", "Déchets ou linge utilisé", "Poursuivre selon les consignes"],
          ["À traiter si prévu", "Petit manque ou élément déplacé", "Corriger dans le cadre défini"],
          ["À signaler", "Objet cassé ou anomalie visible", "Informer de manière descriptive"],
          ["À sécuriser", "Fuite ou verre cassé", "Écarter le danger et prévenir"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "signalement-neutre",
        text: "Formuler un signalement descriptif et neutre",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Nommer la pièce et l’équipement concernés.",
          "Décrire le constat sans interprétation.",
          "Indiquer si le point gêne la préparation normale.",
          "Ajouter une photo seulement si cela a été prévu et si elle est utile.",
          "Demander une consigne lorsqu’une décision est nécessaire.",
        ],
      },
      {
        type: "callout",
        title: "Rester factuel",
        text: "Un constat visible ne suffit pas toujours à déterminer son origine ou la responsabilité d’une personne. Le signalement doit décrire, pas accuser.",
      },
      {
        type: "heading",
        level: 2,
        id: "trois-moments",
        text: "Distinguer contrôle initial, nettoyage et vérification finale",
      },
      {
        type: "table",
        headers: ["Moment", "Objectif"],
        rows: [
          ["Contrôle initial", "Comprendre l’état et repérer les priorités"],
          ["Nettoyage", "Effectuer les tâches prévues"],
          ["Vérification finale", "Contrôler le résultat visible"],
        ],
      },
    ],
    relatedSlugs: [
      "checklist-nettoyage-entre-deux-voyageurs",
      "temps-entre-deux-voyageurs",
    ],
    sources: [
      {
        label: "Airbnb — Garantie dommages des hôtes",
        url: "https://www.airbnb.fr/help/article/279",
      },
      {
        label: "Airbnb — Règles de base pour les hôtes",
        url: "https://www.airbnb.fr/help/article/2895",
      },
    ],
  },
  {
    slug: "organiser-placard-nettoyage-location-courte-duree",
    status: "draft",
    category: "Organisation",
    title: "Comment organiser efficacement le placard de nettoyage ?",
    seoTitle:
      "Comment organiser le placard de nettoyage d’une location courte durée ?",
    description:
      "Une méthode pratique pour ranger produits, matériel et réserves sans négliger la sécurité.",
    introduction:
      "Un placard bien organisé évite de perdre du temps, de découvrir un stock vide pendant une rotation ou d’utiliser un matériel inadapté. Il doit rester simple, accessible pour l’intervention et sécurisé pour les voyageurs.",
    image: "/images/conseils/placard-nettoyage.png",
    imageAlt: "Matériel et chiffons rangés dans un placard de nettoyage",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "role-du-placard",
        text: "Donner un rôle précis au placard de nettoyage",
      },
      {
        type: "paragraph",
        text: "Le placard ne doit pas devenir un espace où s’accumulent produits entamés, appareils inutilisés et réserves sans classement. Il réunit ce qui sert réellement à l’entretien, dans un ordre compréhensible dès l’ouverture.",
      },
      {
        type: "callout",
        title: "Un rangement pensé pour la rotation",
        text: "Les éléments utilisés à chaque passage doivent être immédiatement accessibles. Les réserves et le matériel occasionnel peuvent occuper une zone secondaire.",
      },
      {
        type: "heading",
        level: 2,
        id: "organiser-zones",
        text: "Répartir le placard en zones simples",
      },
      {
        type: "table",
        headers: ["Zone", "Contenu", "Objectif"],
        rows: [
          ["Usage courant", "Produits habituels et accessoires", "Accès rapide"],
          ["Matériel", "Aspirateur, balai, serpillière et seau", "Éviter l’encombrement"],
          ["Textiles propres", "Chiffons propres", "Les protéger des produits"],
          ["Réserve", "Recharges non ouvertes", "Remplacer sans encombrer"],
          ["À contrôler", "Matériel abîmé ou produit presque vide", "Isoler ce qui demande une décision"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "emplacements-fixes",
        text: "Créer des emplacements fixes et faciles à identifier",
      },
      {
        type: "checklist",
        items: [
          "Placer les produits courants à une hauteur accessible.",
          "Conserver les appareils lourds dans la partie basse.",
          "Regrouper les accessoires par usage.",
          "Prévoir un emplacement distinct pour les chiffons propres.",
          "Laisser le sol et l’ouverture du placard dégagés.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "securite-produits",
        text: "Ranger les produits sans négliger la sécurité",
      },
      {
        type: "paragraph",
        text: "Les conditions adaptées dépendent des produits et des indications du fabricant. Les étiquettes doivent rester lisibles et chaque produit doit conserver son emballage d’origine.",
      },
      {
        type: "checklist",
        items: [
          "Lire et conserver les étiquettes.",
          "Ne pas transvaser dans un récipient non identifié.",
          "Ne pas mélanger les produits.",
          "Refermer correctement les contenants.",
          "Éviter le soleil direct et les emplacements instables.",
          "Limiter l’accès des voyageurs et des enfants.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "inventaire-utile",
        text: "Suivre un inventaire utile, sans compter chaque objet",
      },
      {
        type: "table",
        headers: ["Élément", "Repère", "Action"],
        rows: [
          ["Produit courant", "Flacon bientôt vide", "Prévoir le remplacement"],
          ["Aspirateur", "Sac plein ou accessoire manquant", "Prévoir l’entretien"],
          ["Balai et serpillière", "Usure visible", "Isoler et remplacer"],
          ["Chiffons propres", "Quantité insuffisante", "Compléter le stock"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "routine-controle",
        text: "Mettre en place un contrôle régulier",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Remettre les éléments à leur place après le nettoyage.",
          "Écarter les contenants vides ou illisibles.",
          "Vérifier les niveaux des produits les plus utilisés.",
          "Signaler le matériel défectueux.",
          "Retirer périodiquement ce qui n’est jamais utilisé.",
        ],
      },
      {
        type: "callout",
        title: "Dans le fonctionnement Welc’Home",
        text: "Pour la prestation standard, le client met à disposition le matériel et les produits nécessaires. Leur fourniture peut être étudiée comme service complémentaire.",
      },
    ],
    relatedSlugs: [
      "checklist-nettoyage-entre-deux-voyageurs",
      "preparer-logement-haute-saison-marseille",
    ],
    sources: [
      {
        label: "INRS — Stockage des produits chimiques",
        url: "https://www.inrs.fr/risques/chimiques/stockage-produits-chimiques.html",
      },
      {
        label: "Anses — Risques liés au transvasement des produits ménagers",
        url: "https://vigilanses.anses.fr/fr/node/2101",
      },
    ],
  },
  {
    slug: "organiser-circuit-linge-propre-linge-utilise",
    status: "draft",
    category: "Linge",
    title: "Comment organiser le circuit du linge propre et du linge utilisé ?",
    seoTitle: "Comment organiser le circuit du linge en location courte durée ?",
    description:
      "Une méthode pour séparer, transporter, contrôler et ranger le linge entre deux séjours.",
    introduction:
      "Le circuit du linge décrit le chemin suivi par chaque textile après un départ : collecte, entretien, contrôle puis retour dans le stock propre. Une organisation claire limite les mélanges, les oublis et les ensembles incomplets.",
    image: "/images/conseils/circuit-linge.png",
    imageAlt: "Linge propre séparé du linge utilisé dans deux paniers",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "raisonner-en-flux",
        text: "Raisonner en flux plutôt qu’en simple stock",
      },
      {
        type: "paragraph",
        text: "Compter les jeux disponibles ne suffit pas. Il faut savoir où se trouve chaque ensemble et quelle est sa prochaine étape : installé, utilisé, en entretien, propre à contrôler ou disponible.",
      },
      {
        type: "callout",
        title: "Le sujet n’est pas la quantité",
        text: "Le nombre de jeux nécessaires dépend des couchages. Ici, l’objectif est de faire circuler le linge sans confusion entre les différents états.",
      },
      {
        type: "heading",
        level: 2,
        id: "quatre-etats",
        text: "Identifier clairement les états du linge",
      },
      {
        type: "table",
        headers: ["État", "Emplacement", "Prochaine action"],
        rows: [
          ["Installé", "Sur les lits", "Retrait après le séjour"],
          ["Utilisé", "Contenant dédié", "Transport vers l’entretien"],
          ["En entretien", "Lieu de lavage", "Séchage complet et contrôle"],
          ["Propre à contrôler", "Surface propre distincte", "Vérifier et plier"],
          ["Propre disponible", "Placard sec et fermé", "Préparer un couchage"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "collecter-linge-utilise",
        text: "Collecter le linge utilisé dès le début de la rotation",
      },
      {
        type: "checklist",
        items: [
          "Vérifier qu’aucun objet n’est resté dans les draps.",
          "Retirer le linge sans le poser sur le stock propre.",
          "Utiliser un contenant clairement identifié.",
          "Séparer un élément très humide.",
          "Repérer immédiatement un textile manquant ou abîmé.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "transport",
        text: "Organiser le transport sans croiser le propre et l’utilisé",
      },
      {
        type: "paragraph",
        text: "Lorsque le linge quitte le logement, son contenant doit être distingué immédiatement. Le linge propre destiné au retour voyage séparément ou dans un contenant propre et fermé.",
      },
      {
        type: "heading",
        level: 2,
        id: "entretien",
        text: "Préparer l’entretien sans mélanger les ensembles",
      },
      {
        type: "checklist",
        items: [
          "Contrôler les étiquettes d’entretien.",
          "Séparer couleurs et matières incompatibles.",
          "Vérifier les poches et petits objets.",
          "Éviter de surcharger le lave-linge.",
          "S’assurer que chaque textile est complètement sec.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "controle-retour",
        text: "Contrôler le linge avant son retour dans le stock propre",
      },
      {
        type: "checklist",
        items: [
          "Vérifier que le linge est propre, sec et sans odeur inhabituelle.",
          "Repérer les taches persistantes et les accrocs.",
          "Reconstituer les ensembles par couchage.",
          "Séparer les différentes tailles.",
          "Écarter les éléments à remplacer.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "rangement-propre",
        text: "Protéger le linge propre jusqu’à la prochaine rotation",
      },
      {
        type: "table",
        headers: ["Méthode", "Avantage", "Vigilance"],
        rows: [
          ["Ensemble par couchage", "Préparation rapide", "Remplacer toute pièce manquante"],
          ["Classement par taille", "Adapté à plusieurs lits", "Identifier chaque étagère"],
          ["Housse ou bac fermé", "Protection du linge", "Contenant propre et sec"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "signes-circuit-fragile",
        text: "Reconnaître un circuit qui doit être amélioré",
      },
      {
        type: "checklist",
        items: [
          "Le propre et l’utilisé se retrouvent dans le même espace.",
          "Les ensembles sont régulièrement incomplets.",
          "La taille d’un drap est découverte au dernier moment.",
          "Des textiles humides attendent dans un sac fermé.",
          "Personne ne sait où se trouve un élément manquant.",
        ],
      },
      {
        type: "callout",
        title: "Dans le fonctionnement Welc’Home",
        text: "Le linge propre est fourni par le client pour la prestation standard. Son entretien peut être étudié comme prestation complémentaire.",
      },
    ],
    relatedSlugs: [
      "combien-jeux-linge-location-courte-duree",
      "rotation-meme-jour",
    ],
    sources: [
      {
        label: "ADEME — Conseils pour l’entretien du linge",
        url: "https://agirpourlatransition.ademe.fr/particuliers/amenager-maison/entretenir/entretien-linge-conseils-sante-environnement",
      },
      {
        label: "Airbnb — Règles de base concernant la propreté",
        url: "https://www.airbnb.fr/help/article/2895",
      },
    ],
  },
  {
    slug: "sable-sel-chaleur-marseille-ete",
    status: "draft",
    category: "Entretien saisonnier",
    title: "Sable, sel et chaleur : entretenir un logement à Marseille en été",
    seoTitle: "Entretenir une location courte durée à Marseille en été",
    description:
      "Sable, traces salines et chaleur : adaptez l’entretien de votre logement pendant la saison estivale.",
    introduction:
      "L’été marseillais ne change pas seulement le rythme des réservations. Selon l’emplacement du logement, le sable, les traces salines et la chaleur peuvent demander quelques adaptations simples.",
    image: "/images/conseils/marseille-ete.png",
    imageAlt: "Main retirant du sable sur un sol en terre cuite à Marseille",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "adapter-entretien",
        text: "Adapter l’entretien à l’exposition réelle du logement",
      },
      {
        type: "table",
        headers: ["Situation", "Effet possible", "Adaptation"],
        rows: [
          ["Retours de plage", "Sable dans les pièces et textiles", "Renforcer les points d’entrée"],
          ["Fenêtres exposées", "Traces sur vitres ou métal", "Contrôler les surfaces exposées"],
          ["Logement ensoleillé", "Pièces et produits plus chauds", "Adapter aération et rangement"],
          ["Fenêtres ouvertes", "Poussières plus fréquentes", "Contrôler rebords et sols"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "limiter-sable",
        text: "Empêcher le sable de circuler dans tout le logement",
      },
      {
        type: "checklist",
        items: [
          "Contrôler l’entrée, les tapis et les seuils.",
          "Réunir les textiles utilisés avant de nettoyer les sols.",
          "Aspirer ou balayer le sable avant le lavage.",
          "Vérifier les coins et dessous de meubles accessibles.",
          "Retirer le sable de la douche sans encombrer l’évacuation.",
        ],
      },
      {
        type: "callout",
        title: "Limiter le sable dès l’entrée",
        text: "Un tapis facile à nettoyer et un emplacement prévu pour les chaussures ou accessoires de plage peuvent réduire sa dispersion.",
      },
      {
        type: "heading",
        level: 2,
        id: "traces-salines",
        text: "Traiter les traces salines sans abîmer les surfaces",
      },
      {
        type: "checklist",
        items: [
          "Identifier la surface avant d’utiliser un produit.",
          "Retirer les grains pouvant rayer un support fragile.",
          "Employer un chiffon doux et une solution compatible.",
          "Sécher les éléments métalliques.",
          "Signaler une marque persistante plutôt qu’utiliser un abrasif au hasard.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "chaleur-logement",
        text: "Tenir compte de la chaleur pendant la préparation",
      },
      {
        type: "paragraph",
        text: "L’aération doit être adaptée aux conditions extérieures. Faire entrer l’air aux moments les plus frais puis limiter l’exposition directe au soleil peut contribuer au confort du logement.",
      },
      {
        type: "checklist",
        items: [
          "Aérer lorsque l’air extérieur est plus frais.",
          "Utiliser les volets présents selon les consignes.",
          "Vérifier que les aérations ne sont pas obstruées.",
          "Éviter les appareils produisant inutilement de la chaleur.",
          "Contrôler l’impression générale avant de terminer.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "produits-ete",
        text: "Ranger correctement les produits de nettoyage",
      },
      {
        type: "checklist",
        items: [
          "Conserver les produits dans leur emballage d’origine.",
          "Maintenir les étiquettes lisibles.",
          "Respecter les conditions de stockage indiquées.",
          "Éviter le soleil direct et les sources de chaleur.",
          "Ne jamais mélanger les produits.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "routine-estivale",
        text: "Une routine estivale en cinq temps",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Repérer le sable et les poussières.",
          "Réunir les textiles utilisés.",
          "Commencer par un nettoyage à sec.",
          "Traiter les traces salines ou d’humidité.",
          "Terminer par l’aération et le contrôle visuel.",
        ],
      },
    ],
    relatedSlugs: [
      "checklist-nettoyage-entre-deux-voyageurs",
      "preparer-logement-haute-saison-marseille",
    ],
    sources: [
      {
        label: "Office de tourisme de Marseille — Quand partir ?",
        url: "https://www.marseille-tourisme.com/decouvrez-marseille/pourquoi-venir/quand-partir/",
      },
      {
        label: "ADEME — Garder son logement frais en période de chaleur",
        url: "https://agirpourlatransition.ademe.fr/particuliers/proteger-sante/periode-canicule/canicule-comment-garder-logement-frais",
      },
    ],
  },
  {
    slug: "preparer-logement-haute-saison-marseille",
    status: "draft",
    category: "Organisation",
    title: "Comment préparer son logement avant la haute saison à Marseille ?",
    seoTitle: "Préparer une location courte durée pour la haute saison à Marseille",
    description:
      "Stocks, linge, matériel et consignes : préparez votre organisation avant une période chargée.",
    introduction:
      "La période réellement chargée dépend de chaque logement. L’objectif n’est pas de prévoir chaque imprévu, mais de vérifier que les ressources et les consignes permettent d’enchaîner les séjours sans improvisation permanente.",
    image: "/images/conseils/haute-saison-marseille.png",
    imageAlt: "Linge, consommables et calendrier préparés avant la haute saison",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "etat-des-lieux",
        text: "Commencer par un état des lieux pratique",
      },
      {
        type: "checklist",
        items: [
          "Comparer les équipements présents avec ceux annoncés.",
          "Vérifier l’état visible des couchages et textiles.",
          "Contrôler le matériel de nettoyage.",
          "Identifier les produits manquants ou non étiquetés.",
          "Repérer les petites réparations à programmer.",
          "Mettre à jour les informations d’accès.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "standard-preparation",
        text: "Définir clairement le résultat attendu",
      },
      {
        type: "table",
        headers: ["Sujet", "Consigne à préciser"],
        rows: [
          ["Couchages", "Lits utilisés, tailles et linge propre"],
          ["Serviettes", "Quantité et emplacement"],
          ["Consommables", "Éléments et niveau de réassort attendu"],
          ["Remise en ordre", "Emplacement des éléments d’accueil"],
          ["Signalement", "Personne à prévenir"],
        ],
      },
      {
        type: "callout",
        title: "Une fiche courte vaut mieux qu’un historique de messages",
        text: "Conservez une version unique et à jour des consignes. Les exceptions liées à une réservation peuvent être transmises séparément.",
      },
      {
        type: "heading",
        level: 2,
        id: "dimensionner-stocks",
        text: "Dimensionner les stocks à partir de l’usage réel",
      },
      {
        type: "checklist",
        items: [
          "Lister les consommables réellement proposés.",
          "Observer leur consommation selon les séjours.",
          "Définir un seuil déclenchant le renouvellement.",
          "Séparer la réserve du stock accessible.",
          "Prévoir un emplacement fixe et facile à contrôler.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "linge-haute-saison",
        text: "Sécuriser le circuit du linge propre",
      },
      {
        type: "checklist",
        items: [
          "Compter les jeux réellement disponibles.",
          "Séparer les tailles de draps et de housses.",
          "Regrouper les éléments associés.",
          "Prévoir un espace protégé pour le propre.",
          "Utiliser un contenant distinct pour l’utilisé.",
          "Écarter les éléments usés ou incomplets.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "materiel-produits",
        text: "Vérifier le matériel avant que les rotations s’enchaînent",
      },
      {
        type: "checklist",
        items: [
          "Tester l’aspirateur et ses accessoires.",
          "Contrôler le balai, la serpillière et le seau.",
          "Vérifier les produits adaptés aux surfaces.",
          "Conserver les produits dans leur emballage identifié.",
          "Prévoir qui renouvelle chaque élément manquant.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "organiser-rotations",
        text: "Construire une organisation réaliste des rotations",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Identifier les réservations qui s’enchaînent le même jour.",
          "Confirmer l’heure d’accès réelle au logement.",
          "Évaluer le temps à partir des tâches prévues.",
          "Distinguer le standard des besoins complémentaires.",
          "Préserver une marge pour le contrôle final.",
          "Prévoir la personne qui décide en cas d’anomalie.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "planifier-approfondi",
        text: "Sortir les tâches approfondies des rotations serrées",
      },
      {
        type: "table",
        headers: ["Avant la période chargée", "Pendant les rotations"],
        rows: [
          ["Zones difficiles d’accès", "Nettoyage standard"],
          ["Contrôle des protections de literie", "Changement du linge prévu"],
          ["Détartrage approfondi", "Entretien courant"],
          ["Vérification complète du matériel", "Signalement d’un défaut"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "tester-organisation",
        text: "Effectuer une rotation test",
      },
      {
        type: "paragraph",
        text: "Une rotation dans des conditions normales permet de vérifier si les consignes, le matériel et les emplacements sont réellement adaptés. Notez ce qui a dû être recherché et corrigez la fiche à partir des difficultés rencontrées.",
      },
      {
        type: "callout",
        title: "Préparer ne signifie pas tout garantir",
        text: "Une bonne organisation réduit les oublis et facilite les décisions. Elle ne garantit pas l’absence de retard, d’anomalie ou de remise en état exceptionnelle.",
      },
    ],
    relatedSlugs: [
      "rotation-meme-jour",
      "organiser-circuit-linge-propre-linge-utilise",
    ],
    sources: [
      {
        label: "Office de tourisme de Marseille — Quand partir ?",
        url: "https://www.marseille-tourisme.com/decouvrez-marseille/pourquoi-venir/quand-partir/",
      },
      {
        label: "Airbnb — Préparer son logement avant d’accueillir",
        url: "https://www.airbnb.fr/help/article/1189",
      },
    ],
  },
];
