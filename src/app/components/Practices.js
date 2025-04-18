import Image from "next/image";

export default function Practices() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden animate-fade-in hover:shadow-xl transition-all">
            <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-light/30 mr-4">
                  <Image
                    src="/image/pieds.jpg"
                    alt="Réflexologie"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">
                  Réflexologie
                </h3>
              </div>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Stimule les zones réflexes des pieds ou mains
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Réduit stress et tensions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Améliore la circulation et l&apos;équilibre du corps
                  </span>
                </li>
              </ul>

              <a
                href="#services"
                className="inline-block text-accent hover:text-primary-dark transition-colors mt-2"
              >
                Découvrir nos soins de réflexologie →
              </a>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden animate-fade-in animate-delay-100 hover:shadow-xl transition-all">
            <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-light/30 mr-4">
                  <Image
                    src="/image/pieds.jpg"
                    alt="Drainage lymphatique"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark">
                  Drainage lymphatique
                </h3>
              </div>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Mouvements doux qui stimulent la circulation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Élimine les toxines et réduit la rétention d&apos;eau
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✦</span>
                  <span className="text-text-light">
                    Sensation de légèreté et bien-être immédiat
                  </span>
                </li>
              </ul>

              <a
                href="#services"
                className="inline-block text-accent hover:text-primary-dark transition-colors mt-2"
              >
                Découvrir nos soins de drainage →
              </a>
            </div>
          </div>
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
    </section>
  );
}
