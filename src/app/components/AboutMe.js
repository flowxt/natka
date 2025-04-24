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
                Passionnée par le bien-être et le soin, j&apos;accompagne mes
                clients vers un équilibre physique et émotionnel. Après de
                nombreuses années dans l&apos;horlogerie, j&apos;ai transformé
                ma sensibilité naturelle pour les soins en une véritable
                vocation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Mon approche mêle réflexologie, soins énergétiques et techniques
                de drainage, pour vous offrir un accompagnement personnalisé qui
                répond à vos besoins spécifiques. Chaque séance est une
                parenthèse où votre corps et votre esprit retrouvent harmonie et
                vitalité.
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
          </div>
        </div>
      </div>
    </section>
  );
}
