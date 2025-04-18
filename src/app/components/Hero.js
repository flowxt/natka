import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-custom"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-light/30 filter blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent-light/20 filter blur-2xl -z-0"></div>

        <div className="animate-fade-in relative z-10">
          <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <span className="text-accent font-medium">
              Votre bien-être est notre priorité
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white text-4xl md:text-6xl drop-shadow-lg">
              Natka
            </span>
            <br />
            <span className="text-white drop-shadow-md">
              La clef du bien-être
            </span>
          </h1>
          <p className="text-text-light mb-8 text-lg leading-relaxed">
            Votre source pour une santé et un bien-être optimal. Offrez-vous une
            véritable parenthèse de bien-être et retrouvez votre équilibre grâce
            à nos soins personnalisés.
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
              className="border-2 border-primary bg-white/70 backdrop-blur-sm text-primary-dark hover:bg-primary/10 px-7 py-4 rounded-full transition-all duration-300 text-center"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in animate-delay-200 z-10">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/30 to-accent-light/20 rounded-2xl blur-xl animate-floating"></div>
          <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 gradient-overlay animate-gentle-shimmer"></div>
            <Image
              src="/image/background.webp"
              alt="Réflexologie plantaire"
              width={600}
              height={400}
              className="rounded-xl w-full object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
