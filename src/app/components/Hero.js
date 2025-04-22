import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-custom"
    >
      {/* Image de fond avec effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background-natka.jpg"
          alt="Natka - La clé du bien-être"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-transparent z-10"></div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-accent/20 filter blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-primary-light/30 filter blur-3xl z-0"></div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-20 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-white font-medium">
                Votre bien-être est notre priorité
              </span>
            </div>

            <h1 className="font-bold mb-8 relative">
              <span className="block text-5xl md:text-7xl text-white drop-shadow-lg mb-3 tracking-wide">
                Natka
              </span>
              <span className="block text-3xl md:text-4xl text-white/90 drop-shadow-md">
                La clef du bien-être
              </span>
              <div className="absolute -bottom-3 left-0 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h1>

            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-xl backdrop-blur-sm bg-primary-dark/10 p-4 rounded-xl">
              Votre source pour une santé et un bien-être optimal. Offrez-vous
              une véritable parenthèse de bien-être et retrouvez votre équilibre
              grâce à nos soins personnalisés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="button-gradient px-7 py-4 rounded-full cta-button text-center group"
              >
                <span className="relative z-10">Découvrir nos services</span>
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-7 py-4 rounded-full transition-all duration-300 text-center"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Espace réservé pour du contenu additionnel si nécessaire */}
          </div>
        </div>
      </div>

      {/* Élément décoratif bas de page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-dark/50 to-transparent z-10"></div>
    </section>
  );
}
