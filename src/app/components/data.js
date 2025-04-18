// Données des services
export const services = [
  {
    id: "reflexologie-plantaire",
    title: "Réflexologie plantaire",
    price: "60€ - 60 min",
    description:
      "Plongez dans l'univers apaisant de la réflexologie plantaire, une technique de massage spécialisée qui cible les points réflexes situés sur vos pieds. Chaque point correspond à une partie spécifique de votre corps, et en les stimulant, la réflexologie plantaire vise à rétablir l'équilibre et à améliorer votre bien-être général.",
    forfait:
      "Forfait suivi: 250€ les 5 séances - Un suivi personnalisé, avec une attention particulière aux besoins spécifiques du client à chaque séance.",
  },
  {
    id: "reflexologie-palmaire",
    title: "Réflexologie palmaire",
    price: "30€ - 30 min",
    description:
      "Découvrez les bienfaits de la réflexologie palmaire, une technique de massage thérapeutique centrée sur les mains. En appliquant des pressions précises sur des points réflexes spécifiques, cette méthode vise à stimuler les zones correspondantes de votre corps, favorisant ainsi l'équilibre et le bien-être général.",
  },
  {
    id: "reflexologie-pediatrique",
    title: "Réflexologie pédiatrique",
    price: "15€ à 45€ selon l'âge",
    description:
      "Découvrez la réflexologie pédiatrique, une approche douce et naturelle spécialement conçue pour les enfants. En utilisant des techniques adaptées aux plus jeunes, cette méthode vise à stimuler des points réflexes spécifiques sur les pieds, les mains de votre enfant, contribuant ainsi à son bien-être global.",
    details: [
      "0 à 3 ans: 15€ - 15 min",
      "4 à 11 ans: 30€ - 30 min",
      "12 à 17 ans: 45€ - 45 min",
    ],
  },
  {
    id: "reflexologie-oncologie",
    title: "Réflexologie et oncologie",
    price: "60€ - 60 min",
    description:
      "Explorez les bienfaits de la réflexologie en oncologie, une méthode complémentaire et apaisante destinée aux personnes atteintes de cancer. Spécifiquement adaptée aux besoins des patients en traitement oncologique, cette technique douce vise à stimuler des points réflexes sur les pieds.",
    note: "30€ - 30 min la 1ère séance",
  },
  {
    id: "bien-etre",
    title: "Réflexologie bien être",
    price: "30€ - 30 min",
    description:
      "Venez découvrir un massage doux et relaxant, spécialement conçu pour les demi jambes et les pieds. Profitez d'une profonde détente et d'un merveilleux sentiment de légèreté.",
  },
  {
    id: "magnetisme",
    title: "Le Magnétisme",
    price: "Tarifs sur demande",
    description:
      "Découvrez le magnétisme, une méthode de soin énergétique qui vise à harmoniser et rééquilibrer les énergies du corps. En utilisant l'imposition des mains ou des gestes spécifiques, le praticien de magnétisme canalise et transmet de l'énergie vitale pour soulager divers maux physiques, émotionnels et mentaux.",
  },
  {
    id: "chi-nei-tsang",
    title: "Chi Nei Tsang",
    price: "65€ - 60 min",
    description:
      "Que vous soyez sujet à des troubles digestifs, des tensions émotionnelles, du stress ou simplement à la recherche d'une méthode naturelle pour rétablir l'équilibre dans votre corps, le Chi Nei Tsang est une approche idéale pour retrouver votre bien-être.",
    forfaits: [
      "Forfait Libération: 3 séances de 60 min - 175€",
      "Forfait Harmonie: 5 séances de 60 min - 305€",
    ],
  },
  {
    id: "drainage-lymphatique",
    title: "Drainage lymphatique",
    price: "80€ - 75 min",
    description:
      "Prenez un moment pour vous et laissez vous envelopper par une sensation de légèreté. Le drainage lymphatique est une technique douce qui stimule la circulation, réduit la rétention d'eau et favorise l'élimination des toxines. Idéal pour retrouver un corps dégonflé, une peau plus lisse et une énergie renouvelée !",
    forfait: "Forfait 5 séances: 350€ sur 5 semaines consécutives",
  },
];

// Données des formules
export const formules = [
  {
    title: "Détox & Libération émotionnelle",
    description:
      "Drainage lymphatique (60 min) et réflexologie plantaire (30 min)",
    price: "95€ - 90 min",
    objectif:
      "Éliminer les toxines physiques et émotionnelles, soulager les tensions profondes et retrouver un équilibre intérieur.",
  },
  {
    title: "Légèreté & Evasion",
    description:
      "Drainage lymphatique (75 min) + Réflexologie plantaire (30 min)",
    price: "110€ - 105 min",
    objectif:
      "Détoxification physique et émotionnelle, relâchement des tensions et légèreté intérieure.",
  },
  {
    title: "Corps & Esprit en Harmonie",
    description:
      "Drainage lymphatique (75 min) + Réflexologie plantaire (45 min)",
    price: "120€ - 120 min",
    objectif:
      "Rééquilibrage global du corps et de l'esprit, détoxification et apaisement profond.",
  },
  {
    title: "Programme bien-être – 3 séances",
    description: "3 séances de 90 min réparties sur 1 mois",
    price: "250€ - les 3 séances",
    objectif: "Accompagnement sur 1 mois pour un rééquilibrage progressif",
    seances: [
      "Séance 1: Détox & relaxation (Drainage + réflexologie ciblée sur digestion & stress)",
      "Séance 2: Ancrage & équilibre émotionnel (Drainage + réflexologie sur système nerveux)",
      "Séance 3: Stimulation de l'énergie vitale (Drainage + réflexologie générale)",
    ],
  },
];
