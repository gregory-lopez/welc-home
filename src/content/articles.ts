import { articlesAfterLinen, articlesBeforeLinen } from "./additionalArticles";

export type ArticleStatus = "draft" | "published";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; ordered?: boolean; items: readonly string[] }
  | { type: "checklist"; items: readonly string[] }
  | { type: "callout"; title: string; text: string }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    };

export type AdviceArticle = {
  slug: string;
  status: ArticleStatus;
  category: string;
  title: string;
  seoTitle: string;
  description: string;
  introduction: string;
  image: string;
  imageAlt: string;
  blocks: readonly ArticleBlock[];
  relatedSlugs: readonly string[];
  sources: readonly { label: string; url: string }[];
};

export const articles: readonly AdviceArticle[] = [
  {
    slug: "checklist-nettoyage-entre-deux-voyageurs",
    status: "draft",
    category: "Nettoyage",
    title: "Comment construire une checklist utile entre deux voyageurs ?",
    seoTitle:
      "Checklist de nettoyage d’une location courte durée entre deux voyageurs",
    description:
      "Des conseils pour créer une checklist courte, adaptée à votre logement et réellement utile entre deux voyageurs.",
    introduction:
      "Une checklist peut éviter certains oublis, mais elle ne doit pas transformer le nettoyage en une succession mécanique de cases à cocher. Pour être vraiment utile, elle doit rester courte, tenir compte du logement et laisser une place à l’observation.",
    image: "/images/conseils/checklist-nettoyage.png",
    imageAlt: "Checklist de nettoyage posée avec un crayon",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "role-checklist",
        text: "Une checklist sert d’abord à libérer l’esprit",
      },
      {
        type: "paragraph",
        text: "Entre le départ d’un voyageur et l’arrivée du suivant, l’attention est sollicitée de toutes parts. Il faut avancer dans le nettoyage, préparer les couchages et garder un œil sur les détails inhabituels. Dans ce contexte, une checklist n’a pas vocation à décrire chaque geste : elle sert surtout à éviter que les quelques points faciles à oublier disparaissent dans l’urgence.",
      },
      {
        type: "paragraph",
        text: "Une liste interminable produit souvent l’effet inverse. Elle ralentit la lecture, met tous les éléments au même niveau et encourage à suivre un ordre sans regarder réellement le logement. Une bonne base doit pouvoir être comprise rapidement, y compris par une personne qui découvre les consignes.",
      },
      {
        type: "callout",
        title: "Le bon niveau de détail",
        text: "Si la checklist ressemble au mode d’emploi complet du logement, elle est probablement trop longue. Elle doit rappeler les points sensibles, pas remplacer le regard porté sur les lieux.",
      },
      {
        type: "heading",
        level: 2,
        id: "observer-avant-agir",
        text: "Observer le logement avant de commencer",
      },
      {
        type: "paragraph",
        text: "Le premier tour du logement est souvent plus important que la première tâche de nettoyage. Avant de déplacer le linge ou de remettre les objets en place, il permet de repérer un oubli, une casse visible ou une situation inhabituelle. Cette observation donne aussi une idée plus juste du travail à réaliser.",
      },
      {
        type: "paragraph",
        text: "Dans un studio, l’attention peut se porter sur le couchage principal, la salle de bain et la petite cuisine. Dans un appartement familial, les zones de vigilance seront différentes : plusieurs lits, davantage de serviettes, des rangements plus nombreux ou un espace extérieur. La checklist doit refléter ces différences plutôt que proposer le même parcours partout.",
      },
      {
        type: "heading",
        level: 2,
        id: "quelques-reperes",
        text: "Choisir quelques repères qui comptent vraiment",
      },
      {
        type: "paragraph",
        text: "Les meilleurs repères sont généralement ceux qui ne sautent pas immédiatement aux yeux. Il peut s’agir d’un espace sous le lit où des objets sont parfois oubliés, d’un stock de papier rangé dans un placard précis ou d’une télécommande qui doit retrouver sa place. Ces détails sont propres au logement et méritent davantage d’attention qu’une longue énumération de tâches évidentes.",
      },
      {
        type: "paragraph",
        text: "La salle de bain offre un bon exemple. Il n’est pas nécessaire d’écrire chaque mouvement de nettoyage. Quelques indications peuvent suffire : vérifier les zones fréquemment oubliées, préparer les serviettes propres prévues et s’assurer que les essentiels fournis par le propriétaire sont disponibles.",
      },
      {
        type: "paragraph",
        text: "La même logique s’applique aux couchages. La consigne utile n’est pas simplement de « faire le lit », mais de préciser quel linge correspond à quel couchage, où il est rangé et si un canapé convertible doit être préparé pour la prochaine réservation.",
      },
      {
        type: "heading",
        level: 2,
        id: "faire-evoluer",
        text: "Faire évoluer la liste avec le logement",
      },
      {
        type: "paragraph",
        text: "Une checklist utile n’est jamais complètement figée. Les premières rotations permettent de découvrir les consignes trop vagues, les informations manquantes et les points qui ne méritent finalement pas d’être rappelés. Elle gagne en qualité lorsqu’elle est raccourcie et précisée au fil de l’expérience.",
      },
      {
        type: "paragraph",
        text: "Il est également utile de distinguer la préparation habituelle d’un entretien plus occasionnel. Les vitres, certaines zones difficiles d’accès ou un dégraissage approfondi ne relèvent pas nécessairement de chaque rotation. Les intégrer systématiquement brouillerait la charge réelle du passage.",
      },
      {
        type: "callout",
        title: "Avant l’arrivée suivante",
        text: "Le dernier regard doit rester simple : parcourir le logement comme le ferait un voyageur qui entre, vérifier l’impression générale et signaler tout point visible qui demande l’attention du propriétaire.",
      },
    ],
    relatedSlugs: [
      "rotation-meme-jour",
      "combien-jeux-linge-location-courte-duree",
    ],
    sources: [
      {
        label: "Règles de base pour les hôtes Airbnb",
        url: "https://www.airbnb.fr/help/article/2895",
      },
      {
        label: "INRS — Prévention des risques chimiques",
        url: "https://www.inrs.fr/risques/chimiques/ce-qu-il-faut-retenir.html",
      },
    ],
  },
  {
    slug: "rotation-meme-jour",
    status: "draft",
    category: "Rotations",
    title: "Comment organiser une rotation le même jour ?",
    seoTitle:
      "Comment organiser une rotation entre deux voyageurs le même jour ?",
    description:
      "Horaires, linge, accès et imprévus : une méthode réaliste lorsque deux séjours s’enchaînent dans la même journée.",
    introduction:
      "Entre un départ le matin et une arrivée quelques heures plus tard, la difficulté n’est pas seulement de nettoyer rapidement. Une rotation réussie dépend surtout de ce qui a été anticipé avant l’ouverture de la porte.",
    image: "/images/conseils/rotation-meme-jour.png",
    imageAlt: "Clés préparées pour organiser une rotation le même jour",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "creneau-reel",
        text: "Le créneau annoncé n’est pas toujours le créneau réel",
      },
      {
        type: "paragraph",
        text: "Sur le papier, un départ à 10 heures et une arrivée à 16 heures semblent laisser six heures. Dans la réalité, le logement n’est pas toujours libéré exactement à l’heure, l’accès peut prendre du temps et l’intervention doit se terminer suffisamment tôt pour effectuer un dernier contrôle.",
      },
      {
        type: "paragraph",
        text: "Il faut donc raisonner à partir du temps réellement disponible dans le logement. Le trajet, la récupération des clés, l’installation du matériel et le rangement final réduisent le créneau utile. Cette différence paraît minime lorsque tout se déroule normalement, mais elle devient importante au premier retard.",
      },
      {
        type: "callout",
        title: "Aucune durée universelle",
        text: "Un studio avec un seul couchage ne demande pas la même organisation qu’un appartement familial avec plusieurs lits et salles de bain. Le bon créneau se construit à partir du logement réel.",
      },
      {
        type: "heading",
        level: 2,
        id: "avant-depart",
        text: "La rotation se prépare avant le départ des voyageurs",
      },
      {
        type: "paragraph",
        text: "Ce qui manque pendant l’intervention coûte toujours plus de temps que ce qui a été préparé en amont. Le linge propre doit être disponible dans les bonnes dimensions, les consommables fournis par le propriétaire doivent être accessibles et les consignes ne doivent pas dépendre d’un échange de dernière minute.",
      },
      {
        type: "paragraph",
        text: "Prenons un appartement comprenant un lit double et un canapé convertible. Savoir que le canapé sera utilisé lors du prochain séjour change immédiatement la quantité de linge à prévoir et le temps de préparation. Cette information paraît simple, mais découverte trop tard, elle peut désorganiser toute la rotation.",
      },
      {
        type: "paragraph",
        text: "L’accès mérite la même attention. Un trousseau difficile à récupérer, un code erroné ou un stationnement compliqué à proximité du logement peuvent réduire la marge avant même que le nettoyage commence.",
      },
      {
        type: "heading",
        level: 2,
        id: "priorites",
        text: "Garder un ordre clair sans travailler mécaniquement",
      },
      {
        type: "paragraph",
        text: "À l’entrée dans le logement, un rapide état des lieux visuel permet de repérer ce qui pourrait modifier l’intervention. Le linge utilisé, les déchets et les éventuels objets oubliés donnent une première lecture de la situation. Le nettoyage peut ensuite avancer selon un parcours adapté à la configuration des pièces.",
      },
      {
        type: "paragraph",
        text: "L’objectif n’est pas d’accélérer chaque geste, mais d’éviter les allers-retours et les décisions tardives. Lorsque le linge propre, le matériel et les consignes ont une place connue, davantage de temps reste disponible pour le nettoyage lui-même et pour la vérification finale.",
      },
      {
        type: "heading",
        level: 2,
        id: "marge",
        text: "La marge protège la prochaine arrivée",
      },
      {
        type: "paragraph",
        text: "Un départ tardif, un couchage supplémentaire ou une anomalie visible peuvent modifier le déroulement prévu. Sans marge, le moindre imprévu oblige à choisir entre terminer dans la précipitation et empiéter sur l’arrivée suivante.",
      },
      {
        type: "paragraph",
        text: "Certaines journées ne se prêtent tout simplement pas à une rotation serrée. C’est notamment le cas lorsqu’une remise en état exceptionnelle est prévisible, que le linge propre n’est pas disponible ou que l’accès reste incertain. Renoncer à un créneau irréaliste est parfois la décision la plus fiable.",
      },
      {
        type: "callout",
        title: "Une organisation à confirmer",
        text: "Décrire précisément le logement, les couchages et les horaires permet d’étudier la faisabilité d’une rotation. Cela ne constitue pas une garantie d’intervention ou de disponibilité.",
      },
    ],
    relatedSlugs: [
      "checklist-nettoyage-entre-deux-voyageurs",
      "combien-jeux-linge-location-courte-duree",
    ],
    sources: [
      {
        label: "Airbnb — Définir les heures d’arrivée et de départ",
        url: "https://www.airbnb.fr/help/article/1296",
      },
      {
        label: "Règles de base pour les voyageurs Airbnb",
        url: "https://www.airbnb.fr/help/article/2894",
      },
    ],
  },
  ...articlesBeforeLinen,
  {
    slug: "combien-jeux-linge-location-courte-duree",
    status: "draft",
    category: "Linge",
    title: "Combien de jeux de linge prévoir par couchage ?",
    seoTitle: "Combien de jeux de linge prévoir pour une location courte durée ?",
    description:
      "Une méthode simple pour dimensionner le linge selon vos couchages, le lavage et le rythme des réservations.",
    introduction:
      "Le bon stock de linge n’est pas nécessairement le plus important. C’est celui qui permet de préparer chaque couchage sans attendre qu’un lavage ou un séchage se termine au dernier moment.",
    image: "/images/conseils/jeux-linge-couchage.png",
    imageAlt:
      "Plusieurs jeux de linge propre préparés pour les couchages d’un logement",
    blocks: [
      {
        type: "heading",
        level: 2,
        id: "repere-depart",
        text: "Partir d’un repère, puis l’adapter",
      },
      {
        type: "paragraph",
        text: "Deux jeux complets par couchage peuvent constituer une base pratique lorsque les rotations sont espacées et que l’entretien du linge est rapide. Un jeu supplémentaire apporte une réserve utile lorsque les séjours s’enchaînent, que le lavage est réalisé ailleurs ou qu’un élément doit être écarté.",
      },
      {
        type: "callout",
        title: "Un repère, pas une règle",
        text: "Le nombre adapté dépend du rythme réel des réservations, du temps de lavage et de séchage, des tailles de lits et de la place disponible. Il doit être ajusté après les premières rotations.",
      },
      {
        type: "heading",
        level: 2,
        id: "jeu-complet",
        text: "Définir ce que contient un jeu complet",
      },
      {
        type: "table",
        headers: ["À prévoir", "Comment le compter"],
        rows: [
          ["Drap et housse de couette", "Un ensemble adapté à chaque lit préparé"],
          ["Taies d’oreiller", "Selon le nombre d’oreillers installés"],
          ["Serviettes", "Selon le nombre de voyageurs attendu"],
          ["Tapis de bain", "Par salle de bain ou selon vos consignes"],
          ["Torchons", "Par séjour, indépendamment du nombre de couchages"],
        ],
      },
      {
        type: "paragraph",
        text: "Un canapé convertible utilisé ponctuellement mérite son propre jeu identifié. Les différentes tailles de lits doivent également être séparées pour éviter de découvrir une incompatibilité pendant la préparation.",
      },
      {
        type: "heading",
        level: 2,
        id: "facteurs-stock",
        text: "Les facteurs qui font varier le stock nécessaire",
      },
      {
        type: "checklist",
        items: [
          "Le nombre, la taille et l’utilisation réelle des couchages.",
          "La fréquence des rotations et les changements le même jour.",
          "Le lieu où le linge est lavé et le temps de séchage habituel.",
          "La capacité de stockage propre et protégée dans le logement.",
          "La possibilité qu’une pièce soit tachée, abîmée ou manquante.",
          "Les périodes plus chargées pendant lesquelles plusieurs cycles se chevauchent.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "formule-stock",
        text: "Une formule simple pour raisonner",
      },
      {
        type: "callout",
        title: "Stock utile",
        text: "Linge installé + linge en cours d’entretien + réserve de sécurité.",
      },
      {
        type: "paragraph",
        text: "Cette formule aide à visualiser les trois états du linge. La réserve doit augmenter si plusieurs couchages sont souvent utilisés, si le linge quitte le logement pour être entretenu ou si les rotations sont rapprochées.",
      },
      {
        type: "heading",
        level: 2,
        id: "exemples",
        text: "Quelques configurations possibles",
      },
      {
        type: "table",
        headers: ["Situation", "Base envisageable", "Point de vigilance"],
        rows: [
          ["Studio avec un lit double", "Deux jeux complets", "Ajouter une réserve si les rotations se rapprochent"],
          ["Appartement familial", "Deux jeux par couchage utilisé", "Séparer les tailles et les ensembles"],
          ["Lavage réalisé à l’extérieur", "Ajouter une réserve", "Tenir compte du délai réel de retour"],
          ["Canapé-lit occasionnel", "Un jeu dédié", "Ne pas le mélanger au lit principal"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "organiser-linge",
        text: "Organiser le linge pour éviter les erreurs",
      },
      {
        type: "checklist",
        items: [
          "Séparer clairement le linge propre du linge utilisé.",
          "Étiqueter les ensembles par taille, pièce ou couchage.",
          "Conserver les jeux complets ensemble plutôt que les pièces isolées.",
          "Contrôler régulièrement les taches, accrocs et éléments manquants.",
          "Utiliser un emplacement fixe, propre et facilement accessible.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "prestation-standard",
        text: "Ce qui doit être disponible pour une intervention standard",
      },
      {
        type: "paragraph",
        text: "Dans le fonctionnement actuel de Welc’Home, le linge propre nécessaire aux couchages est fourni par le propriétaire et mis à disposition dans le logement. Son entretien peut être étudié comme un service complémentaire selon le besoin.",
      },
    ],
    relatedSlugs: [
      "rotation-meme-jour",
      "checklist-nettoyage-entre-deux-voyageurs",
    ],
    sources: [
      {
        label: "Airbnb — Conseils de nettoyage pour les hôtes",
        url: "https://www.airbnb.fr/resources/hosting-homes/a/matrisez-lart-du-nettoyage-en-suivant-ces-conseils-dexperts-663",
      },
      {
        label: "Airbnb — Préparer son logement",
        url: "https://www.airbnb.com/resources/hosting-homes/a/prepare-your-space-656",
      },
    ],
  },
  ...articlesAfterLinen,
];

export const isAdvicePreviewEnabled = process.env.NODE_ENV !== "production";

export function getVisibleArticles() {
  return isAdvicePreviewEnabled
    ? articles
    : articles.filter((article) => article.status === "published");
}

export function getArticleBySlug(slug: string) {
  return getVisibleArticles().find((article) => article.slug === slug);
}

export function hasVisibleAdvice() {
  return getVisibleArticles().length > 0;
}
