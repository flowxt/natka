import { useState } from "react";
import Image from "next/image";
import { services } from "./data";

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpansion = (serviceId) => {
    if (expandedCards.includes(serviceId)) {
      setExpandedCards(expandedCards.filter((id) => id !== serviceId));
    } else {
      setExpandedCards([...expandedCards, serviceId]);
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-custom relative"
    >
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 filter blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary-light/50 filter blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full text-pink-600 mb-4 shadow-sm">
            Nos soins
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-600">
            Découvrez nos services de bien-être
          </h2>
          <p className="text-gray-700">
            Des soins personnalisés pour votre équilibre et votre santé
          </p>
        </div>

        {/* Section informative sur la réflexologie */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between p-6 border-b border-primary-light/20">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary-light/40 flex items-center justify-center mr-4">
                <Image
                  src="/image/pieds.jpg"
                  alt="Réflexologie"
                  width={45}
                  height={45}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-pink-600">
                Qu&apos;est-ce que la Réflexologie ?
              </h3>
            </div>
          </div>

          <div className="p-6">
            {/* Navigation par onglets */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-pink-200 pb-2 overflow-x-auto">
              <button
                className={`px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === "description"
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === "indications"
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
                onClick={() => setActiveTab("indications")}
              >
                Indications
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === "contreindications"
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
                onClick={() => setActiveTab("contreindications")}
              >
                Contre-indications
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === "seance"
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
                onClick={() => setActiveTab("seance")}
              >
                Déroulement d&apos;une séance
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === "bienfaits"
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
                onClick={() => setActiveTab("bienfaits")}
              >
                Bienfaits
              </button>
            </div>

            {/* Contenu des onglets */}
            <div className="animate-fade-in">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    La réflexologie est une technique manuelle qui considère les
                    pieds ou les mains, comme la représentation du corps humain
                    et de tout ce qui le compose.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    On retrouve sur les pieds des zones et des points appelés
                    <span className="text-pink-600"> réflexes</span>. En venant
                    faire une pression sur un point réflexe ou une zone réflexe,
                    cela crée un{" "}
                    <span className="text-pink-500">influx nerveux</span> qui va
                    induire dans l&apos;organisme des{" "}
                    <span className="text-pink-600">
                      réactions physiologiques{" "}
                    </span>
                    adaptées aux dérèglements de l&apos;organe, de la glande ou
                    d&apos;une partie spécifique du corps.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ainsi la réflexologie permet au corps de{" "}
                    <span className="text-pink-500">s&apos;autoréguler </span>
                    et active le process{" "}
                    <span className="text-pink-600">d&apos;auto-guérison</span>,
                    afin que le corps retrouve son équilibre naturel, que
                    l&apos;on appel
                    <span className="text-pink-600 font-medium">
                      {" "}
                      Homéostasie
                    </span>
                    .
                  </p>
                  <div className="flex justify-center mt-6">
                    <Image
                      src="/image/pied2.png"
                      alt="Carte des zones réflexes"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>
              )}

              {activeTab === "indications" && (
                <div className="space-y-4">
                  <p className="text-text-light leading-relaxed">
                    Les différentes pathologies pouvant être accompagnées en
                    Réflexologie :
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-4">
                    <div className="bg-primary-light/10 p-5 rounded-xl shadow-sm">
                      <h4 className="text-lg font-semibold text-pink-600 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2 text-xs text-pink-500">
                          ✓
                        </span>
                        Pour les adultes
                      </h4>
                      <ul className="space-y-1.5 list-inside text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Maux de tête, stress, épilepsie</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Insomnie, fatigue</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Sciatique, douleur articulaire</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Entorse, fracture, goutte</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Hernie discale, lumbago</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Ostéoporose, tendinite, torticolis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Problèmes de peau (eczéma, psoriasis)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Pathologies des yeux</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Acouphène</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Troubles cardio-vasculaires</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Troubles respiratoires</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Troubles digestifs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Troubles du système urinaire</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Endométriose, fibrome</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Ménopause</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Diabète, problèmes de thyroïde</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 p-5 rounded-xl shadow-sm">
                      <h4 className="text-lg font-semibold text-pink-600 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2 text-xs text-pink-500">
                          ✓
                        </span>
                        Pour les enfants
                      </h4>
                      <ul className="space-y-1.5 list-inside text-text-light text-sm">
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Troubles du sommeil</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Anxiété, stress</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Poussées dentaires</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Pathologies de la peau</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Acné</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Rhino, bronchiolite</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Coliques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Gastro-entérite</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Énurésie</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Renforcement du système immunitaire</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 p-5 rounded-xl shadow-sm">
                      <h4 className="text-lg font-semibold text-pink-600 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2 text-xs text-pink-500">
                          ✓
                        </span>
                        En oncologie
                      </h4>
                      <ul className="space-y-1.5 list-inside text-text-light text-sm">
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Nausées, vomissements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Fatigue</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Constipation, diarrhée</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent text-xs mr-2 mt-1">
                            ●
                          </span>
                          <span>Douleurs articulaires</span>
                        </li>
                      </ul>

                      <div className="mt-6 p-4 bg-white/50 rounded-lg border border-primary-light/30">
                        <p className="text-sm text-primary-dark italic">
                          Chaque personne est unique. La réflexologie
                          s&apos;adapte à vos besoins spécifiques et peut vous
                          aider à retrouver bien-être et équilibre, quelle que
                          soit la situation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "contreindications" && (
                <div className="space-y-4">
                  <p className="text-text-light leading-relaxed">
                    Il n&apos;y a pas de risque grave, mais il existe des cas
                    pour lesquels la réflexologie est déconseillée :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-light">
                    <li>
                      Les femmes enceintes lors du 1er trimestre de grossesse
                    </li>
                    <li>
                      Les personnes souffrant de phlébites ou de problème
                      circulatoire grave
                    </li>
                    <li>
                      Les personnes atteintes d&apos;un cancer qui touche les
                      ganglions lymphatiques ou le sang
                    </li>
                    <li>En cas de plaies et de fracture</li>
                  </ul>
                </div>
              )}

              {activeTab === "seance" && (
                <div className="space-y-4">
                  <p className="text-text-light leading-relaxed">
                    À votre arrivée, nous prenons quelques instants pour
                    discuter de vos besoins et vos attentes.
                  </p>
                  <p className="text-text-light leading-relaxed">
                    Vous serez ensuite confortablement installé(e) dans un
                    environnement calme et relaxant. Le soin commence par des
                    pressions douces sur les zones réflexes de vos pieds, ou de
                    vos mains, favorisant la détente et le rééquilibrage des
                    énergies dans l&apos;ensemble de votre corps. Chaque geste
                    est pensé pour vous apporter bien-être et apaisement.
                  </p>
                  <p className="text-text-light leading-relaxed">
                    Après la séance, nous échangeons sur vos impressions et vous
                    recevrez des conseils pour prolonger les bienfaits chez
                    vous.
                  </p>
                  <div className="flex justify-center mt-6">
                    <Image
                      src="/image/salon-natka.jpg"
                      alt="Espace de soins"
                      width={400}
                      height={200}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>
              )}

              {activeTab === "bienfaits" && (
                <div className="space-y-4">
                  <p className="text-text-light leading-relaxed">
                    Il n&apos;y a pas d&apos;âge pour faire une séance de
                    réflexologie et les bienfaits sont nombreux :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-light">
                    <li>
                      Stimule le corps et ses fonctions (grâce aux zones
                      réflexes sur les pieds et les mains)
                    </li>
                    <li>Diminue le stress et les tensions</li>
                    <li>Améliore la circulation sanguine et lymphatique</li>
                    <li>
                      Stimule l&apos;influx nerveux et aide à rétablir
                      l&apos;équilibre naturel du corps (Homéostasie)
                    </li>
                  </ul>

                  <p className="text-text-light leading-relaxed mt-4 font-medium">
                    Différentes applications :
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-primary-light/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Réflexologie plantaire ou palmaire
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-text-light text-sm">
                        <li>
                          Pour toutes les pathologies des mains (canal carpien,
                          tendinite...)
                        </li>
                        <li>
                          En cas d&apos;impossibilité de travailler sur les
                          pieds
                        </li>
                        <li>Pour les personnes ayant une activité manuelle</li>
                        <li>Pour un besoin de lâcher prise</li>
                        <li>Pour les personnes sensibles des pieds</li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Réflexologie et oncologie
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-text-light text-sm">
                        <li>
                          Soulager les personnes (effets secondaires des
                          traitements)
                        </li>
                        <li>Aide à éliminer les toxines</li>
                        <li>Renforcer les défenses immunitaires</li>
                        <li>Accompagner la personne à accepter la maladie</li>
                        <li>Apporter de l&apos;énergie</li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Réflexologie pédiatrique
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-text-light text-sm">
                        <li>Améliore la qualité du sommeil</li>
                        <li>
                          Apaise les douleurs de poussées dentaires, les
                          coliques
                        </li>
                        <li>Diminue les tensions musculaires</li>
                        <li>Renforce les défenses immunitaires</li>
                        <li>Apporte un bien être général</li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Réflexologie bien être
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-text-light text-sm">
                        <li>
                          Pour les personnes souffrant de sensation de jambes
                          lourdes
                        </li>
                        <li>
                          Pour ceux souffrant d&apos;œdèmes des membres
                          inférieurs
                        </li>
                        <li>Permet d&apos;améliorer la circulation sanguine</li>
                        <li>Pour se détendre et se sentir plus léger</li>
                        <li>
                          Convient aux femmes enceintes dès le début de la
                          grossesse
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="#contact"
                className="button-gradient px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium"
              >
                Réserver une séance de réflexologie
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <span className="text-pink-500 text-sm">✿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-pink-600">
                    {service.title}
                  </h3>
                </div>

                <div className="bg-pink-100 px-2 py-1 rounded-md inline-block w-fit mb-3">
                  <p className="text-xs font-medium text-pink-600">
                    {service.price}
                  </p>
                </div>

                <div className="text-sm text-gray-700 mb-4 overflow-auto flex-grow">
                  <p>{service.description}</p>
                </div>

                <div className="mt-auto flex justify-between items-center pt-3 border-t border-pink-200">
                  <a
                    href="#contact"
                    className="text-pink-500 hover:text-pink-600 transition-colors text-sm flex items-center"
                  >
                    Réserver <span className="ml-1">→</span>
                  </a>
                  {(service.forfait ||
                    service.forfaits ||
                    service.details ||
                    service.note) &&
                    service.id !== "drainage-lymphatique" && (
                      <button
                        onClick={() =>
                          setActiveService(
                            activeService === service.id ? null : service.id
                          )
                        }
                        className="text-pink-400 hover:text-pink-600 transition-colors text-xs"
                      >
                        {activeService === service.id
                          ? "Moins d'infos"
                          : "Plus d'infos"}
                      </button>
                    )}
                </div>

                {activeService === service.id && (
                  <div className="mt-4 pt-3 border-t border-pink-200 animate-fade-in">
                    {service.forfait && (
                      <div className="mb-2 text-xs text-gray-700 bg-pink-50 p-2 rounded">
                        <span className="font-medium text-pink-600">
                          Forfait :
                        </span>{" "}
                        {service.forfait.split("-")[1]}
                      </div>
                    )}

                    {service.note && (
                      <div className="mb-2 text-xs text-gray-700 bg-pink-50 p-2 rounded">
                        <span className="font-medium text-pink-600">
                          Note :
                        </span>{" "}
                        {service.note}
                      </div>
                    )}

                    {service.forfaits && (
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-pink-600 mb-1">
                          Forfaits disponibles :
                        </p>
                        {service.forfaits.map((forfait, i) => (
                          <div
                            key={i}
                            className="text-xs text-gray-700 flex items-start gap-1"
                          >
                            <span className="text-pink-500">•</span>
                            <span>{forfait}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.details && (
                      <div className="space-y-1 mt-2">
                        <p className="text-xs font-medium text-pink-600 mb-1">
                          Détails :
                        </p>
                        {service.details.map((detail, i) => (
                          <div
                            key={i}
                            className="text-xs text-gray-700 flex items-start gap-1"
                          >
                            <span className="text-pink-500">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="button-gradient py-3 px-6 rounded-full cta-button inline-block"
          >
            Prendre rendez-vous pour un soin
          </a>
        </div>
      </div>
    </section>
  );
}
