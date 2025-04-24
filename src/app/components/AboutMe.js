import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="qui-suis-je"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Formes décoratives d'arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary-light/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="inline-block px-4 py-1 bg-primary-light/20 backdrop-blur-sm rounded-full text-accent mb-4 shadow-sm">
            Votre praticienne
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Qui suis-je ?</span>
            <div className="absolute -bottom-3 w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full"></div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Colonne photo */}
          <div className="relative lg:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-20 z-10"></div>
              <Image
                src="/image/natka.jpg"
                alt="Nathalie, votre praticienne bien-être"
                width={600}
                height={900}
                className="w-full h-auto object-cover"
              />

              {/* Badge avec logo */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full p-2 shadow-lg animate-floating">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-2 border-accent">
                  <Image
                    src="/image/logo-natka.png"
                    alt="Logo Natka"
                    width={50}
                    height={50}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bulle de citation chakra */}
            <div className="mt-16 relative bg-white rounded-2xl shadow-xl p-4 border border-primary-light/30 transform -rotate-2">
              <div className="absolute -top-12 -left-8 w-20 h-20 bg-white rounded-full p-1 shadow-md border border-primary-light/30">
                <Image
                  src="/image/chakra.png"
                  alt="Chakras et énergies"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <p className="italic text-foreground/80 pl-4 py-2">
                &ldquo;Le bien-être n&apos;est pas juste une absence de maladie,
                c&apos;est un équilibre harmonieux entre le corps, l&apos;esprit
                et l&apos;énergie.&rdquo;
              </p>
            </div>
          </div>

          {/* Colonne contenu principal */}
          <div className="lg:col-span-2 space-y-10">
            {/* Carte de présentation */}
            <div className="bg-gradient-to-br from-white to-primary-light/10 p-8 rounded-3xl shadow-xl border border-primary-light/20">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">
                Bonjour, je suis Nathalie
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                Je suis passionnée par le bien-être et le soin à la personne.
                Après 17 ans d&apos;expérience dans l&apos;horlogerie, j&apos;ai
                décidé de donner un nouveau sens à ma carrière en me tournant
                vers les soins énergétiques et la réflexologie, des disciplines
                qui me permettent d&apos;allier passion et vocation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Dès mon plus jeune âge, j&apos;étais fascinée par l&apos;idée de
                prendre soin des autres. Mon rêve d&apos;être infirmière ne
                s&apos;est pas concrétisé, mais la vie m&apos;a offert une autre
                voie tout aussi enrichissante. Après des années en logistique,
                et suite à des problèmes de santé qui m&apos;ont fait découvrir
                les bienfaits des thérapies douces, j&apos;ai ressenti le besoin
                profond de me réorienter vers des pratiques qui apportent un
                réel bien-être.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Aujourd&apos;hui, je suis praticienne certifiée en réflexologie,
                une méthode douce qui m&apos;a immédiatement séduite par son
                efficacité sur de nombreuses pathologies. J&apos;ai également
                suivi des formations en magnétisme et en soin énergétique, des
                techniques que j&apos;affine chaque jour pour vous offrir un
                accompagnement sur mesure, adapté à vos besoins.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Ma priorité est votre bien-être. Que vous souhaitiez apaiser des
                douleurs physiques ou émotionnelles, ou simplement prendre un
                moment pour vous reconnecter à vous-même, je suis là pour vous
                guider. En poursuivant des formations régulières, je
                m&apos;assure de vous proposer des soins adaptés, alliant
                expertise et écoute.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Laissez-moi vous accompagner vers un mieux-être global, avec des
                méthodes naturelles et bienveillantes.
              </p>

              <div className="flex justify-center mt-8">
                <a
                  href="#contact"
                  className="button-gradient py-3 px-8 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-shadow"
                >
                  Réservez votre séance découverte
                </a>
              </div>
            </div>

            {/* Expertises et espace de soins */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Expertises */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-primary-light/20 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light/30 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-dark"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-primary-dark">
                    Mes expertises
                  </h4>
                </div>

                <ul className="space-y-3 pl-4">
                  {[
                    "Réflexologie plantaire, palmaire et pédiatrique",
                    "Magnétisme et soins énergétiques",
                    "Chi Nei Tsang (massage du ventre)",
                    "Drainage lymphatique",
                    "Accompagnement spécifique en oncologie",
                  ].map((expertise, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent text-xl mr-2 transform -translate-y-1">
                        •
                      </span>
                      <span className="text-foreground/90">{expertise}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Espace de soins */}
              <div className="bg-white p-2 rounded-3xl shadow-xl border border-primary-light/20 overflow-hidden flex">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[320px]">
                  <Image
                    src="/image/salon-natka.jpg"
                    alt="Espace de soins Natka"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h4 className="text-white text-xl sm:text-2xl font-semibold mb-2 drop-shadow-md">
                        Mon espace de soins
                      </h4>
                      <p className="text-white/90 text-sm sm:text-base backdrop-blur-sm bg-primary-dark/30 p-3 rounded-xl shadow-md">
                        Un havre de paix conçu pour votre bien-être et votre
                        confort. Chaque détail a été pensé pour vous offrir une
                        expérience apaisante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formations et parcours */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-primary-light/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-light/30 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-dark"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-dark">
                  Mon parcours de formation
                </h4>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary-light pl-4 ml-2">
                  <h5 className="font-medium text-primary-dark">
                    Réflexologie
                  </h5>
                  <ul className="space-y-2 mt-2">
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Praticien en réflexologie plantaire, palmaire et
                        pédiatrique - Septembre 2022 à 2023
                      </span>
                      <span className="text-foreground/70 text-sm">
                        Centre de formation Réflexo Naturel à La Roche sur Foron
                        (Léopoldine Coupry)
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Réflexologie et Oncologie - Février 2024
                      </span>
                      <span className="text-foreground/70 text-sm">
                        Centre de formation Réflexo Naturel à La Roche sur Foron
                        (Fanny Blanc)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-accent-light pl-4 ml-2">
                  <h5 className="font-medium text-primary-dark">
                    Magnétisme et soins énergétiques
                  </h5>
                  <ul className="space-y-2 mt-2">
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Formation au magnétisme - Octobre 2022
                      </span>
                      <span className="text-foreground/70 text-sm">
                        CAP Liberté, Sérénité, Vitalité à La Roche sur Foron
                        (Patricia Pasquier)
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Initiation à l&apos;Énergétique - Avril à Juin 2023
                      </span>
                      <span className="text-foreground/70 text-sm">
                        Modules : Énergie vitale, Soin énergétique, Nettoyage
                        énergétique - La Roche Sur Foron (Lucie Bourgoin)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary-light pl-4 ml-2">
                  <h5 className="font-medium text-primary-dark">
                    Autres formations spécialisées
                  </h5>
                  <ul className="space-y-2 mt-2">
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Massage de ventre Chi Nei Tsang - Octobre 2024
                      </span>
                      <span className="text-foreground/70 text-sm">
                        Bien être en formation, à Reignier-Esery (Béatrice
                        Vachoux)
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-foreground/90">
                        Drainage lymphatique - Février 2025
                      </span>
                      <span className="text-foreground/70 text-sm">
                        Bien-être en formation, à Reignier-Esery (Béatrice
                        Vachoux)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
