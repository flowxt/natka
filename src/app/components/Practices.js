import Image from "next/image";
import { useState } from "react";

export default function Practices() {
  const [activeModal, setActiveModal] = useState(null);

  // Données pour les pratiques
  const practices = [
    {
      id: "reflexologie",
      title: "Réflexologie",
      icon: "/image/pieds.jpg",
      benefits: [
        "Stimule les zones réflexes des pieds ou mains",
        "Réduit stress et tensions",
        "Améliore la circulation et l'équilibre du corps",
      ],
      description:
        "La réflexologie est une technique de massage spécialisée qui cible les points réflexes situés sur vos pieds, vos mains ou votre visage. Chaque point correspond à une partie spécifique de votre corps, et en les stimulant, la réflexologie vise à rétablir l'équilibre et à améliorer votre bien-être général.",
      contraindications: [
        "Thrombose ou phlébite récente",
        "Fièvre ou infections",
        "Blessures ou fractures des pieds non guéries",
        "Certains cas de grossesse à risque (1er trimestre)",
      ],
      procedure:
        "Lors de votre séance de réflexologie, vous serez confortablement installé(e) sur une table de massage. Après une discussion sur vos besoins et antécédents, le praticien travaillera précisément sur les zones réflexes correspondant à vos besoins spécifiques. La séance, généralement d'une durée de 30 à 60 minutes, se termine par un moment de détente et des recommandations personnalisées.",
    },
    {
      id: "drainage",
      title: "Drainage lymphatique",
      icon: "/image/lymphe.png",
      benefits: [
        "Mouvements doux qui stimulent la circulation",
        "Élimine les toxines et réduit la rétention d'eau",
        "Sensation de légèreté et bien-être immédiat",
      ],
      description:
        "Le drainage lymphatique est une technique de massage douce et rythmée, conçue pour stimuler la circulation de la lymphe et aider le corps à éliminer naturellement les toxines. En favorisant le drainage des liquides, ce soin réduit la rétention d'eau, dégonfle les tissus, booste le système immunitaire et apporte une sensation de légèreté immédiate. Idéal pour ceux qui souhaitent se sentir mieux dans leur corps, retrouver une silhouette affinée et relancer leur énergie, le drainage lymphatique procure une profonde détente et un bien-être global.",
      contraindications: [
        "Infections aiguës (grippe, fièvre, infections bactériennes ou virales)",
        "Phlébite ou thrombose (risque de déplacement d'un caillot sanguin)",
        "Insuffisance cardiaque sévère (la stimulation du système lymphatique peut surcharger le cœur)",
        "Cancers en cours de traitement (sauf avis médical)",
        "Maladies rénales graves (la rétention d'eau peut être liée à un dysfonctionnement rénal)",
        "Hypertension non contrôlée",
      ],
      procedure:
        "Dès votre arrivée, nous prenons un moment pour échanger sur vos besoins et attentes afin d'adapter la séance à votre corps et votre bien-être. Vous êtes ensuite confortablement installée dans un espace calme et apaisant, propice à la relaxation. Le soin commence par l'application d'une huile de massage spécialement choisie pour favoriser la détente et optimiser les effets du drainage. À l'aide de mouvements doux, rythmés et précis sur l'ensemble du corps, ce massage stimule la circulation lymphatique, réduit la rétention d'eau et procure une agréable sensation de légèreté. À la fin de la séance, nous prenons le temps de discuter de vos ressentis, et vous recevrez quelques conseils pour prolonger les bienfaits du drainage lymphatique au quotidien.",
    },
    {
      id: "chi-nei-tsang",
      title: "Chi Nei Tsang",
      icon: "/image/spa.jpg",
      benefits: [
        "Massage abdominal profond d'origine taoïste",
        "Libère les tensions émotionnelles stockées dans les organes",
        "Améliore la digestion et renforce les fonctions vitales",
      ],
      description:
        "Le Chi Nei Tsang est un massage abdominal issu de la médecine traditionnelle chinoise, qui vise à libérer les tensions, les émotions refoulées et les blocages énergétiques accumulés dans le ventre. En agissant directement sur les organes internes, cette technique améliore la digestion, réduit le stress, renforce le système immunitaire et favorise un bien-être global. Idéal pour ceux qui souhaitent se reconnecter à leur corps et retrouver un équilibre intérieur, le Chi Nei Tsang offre une profonde détente physique et émotionnelle. Venez découvrir ce soin unique et libérez votre énergie vitale.",
      contraindications: [
        "Grossesse (surtout au début)",
        "Maladies aiguës (fièvre, infections, inflammations)",
        "Chirurgie abdominale récente",
        "Tumeurs ou cancer",
        "Problèmes cardiaques graves",
        "Troubles de la coagulation",
        "En période de menstruation",
      ],
      procedure:
        "Dès votre arrivée, nous prenons un moment pour échanger sur vos besoins et attentes. Vous êtes ensuite confortablement installé(e) dans un espace calme et apaisant, pour vous permettre de vous détendre pleinement. Le soin d'une heure, se concentre sur un massage doux et profond de la région abdominale, visant à libérer les tensions émotionnelles et énergétiques accumulées, tout en stimulant votre vitalité naturelle. À la fin de la séance, nous prenons le temps de discuter de vos ressentis, et vous recevrez quelques conseils pour prolonger les bienfaits du soin.",
    },
  ];

  // Composant Modal
  const PracticeModal = ({ practice, onClose }) => {
    if (!practice) return null;

    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white pt-4 px-6 flex justify-between items-center border-b border-primary-light/20 pb-4">
            <h3 className="text-2xl font-bold text-primary-dark flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center mr-3 overflow-hidden">
                <Image
                  src={practice.icon}
                  alt={practice.title}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              {practice.title}
            </h3>
            <button
              onClick={onClose}
              className="text-accent hover:bg-accent/10 p-2 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary-dark mb-3">
                Qu&apos;est-ce que {practice.title} ?
              </h4>
              <p className="text-text-light leading-relaxed">
                {practice.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary-dark mb-3">
                Les contre-indications
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {practice.contraindications.map((item, i) => (
                  <li key={i} className="text-text-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary-dark mb-3">
                Le déroulement d&apos;une séance
              </h4>
              <p className="text-text-light leading-relaxed">
                {practice.procedure}
              </p>
            </div>

            <div className="text-center mt-6">
              <a
                href="#contact"
                className="button-gradient py-3 px-8 rounded-full inline-block text-white font-medium"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-custom relative overflow-hidden">
      <div className="absolute inset-0 decorative-dots opacity-5"></div>
      <div className="absolute -top-40 left-40 w-72 h-72 rounded-full bg-primary-light/20 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-secondary-light/30 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full text-accent mb-4 shadow-sm">
            Pour mieux comprendre
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
            Nos pratiques de bien-être
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice) => (
            <div
              key={practice.id}
              className="bg-white/80 rounded-2xl shadow-lg overflow-hidden animate-fade-in hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setActiveModal(practice.id)}
            >
              <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-light/30 mr-4 overflow-hidden border-2 border-primary-light">
                    <div className="w-full h-full relative">
                      <Image
                        src={practice.icon}
                        alt={practice.title}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    {practice.title}
                  </h3>
                </div>

                <ul className="space-y-2 mb-4">
                  {practice.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✦</span>
                      <span className="text-text-light">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-3 px-5 py-2 bg-white rounded-full border border-accent/30 shadow-sm hover:shadow-md hover:border-accent/60 transition-all duration-300 text-accent flex items-center justify-center group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(practice.id);
                  }}
                >
                  <span className="mr-2">En savoir plus</span>
                  <span className="w-5 h-5 rounded-full bg-primary-light/40 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="button-gradient py-3 px-6 rounded-full cta-button inline-flex items-center"
          >
            <span className="mr-2">Réserver votre séance</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Affichage de la modal */}
      {activeModal && (
        <PracticeModal
          practice={practices.find((p) => p.id === activeModal)}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}
