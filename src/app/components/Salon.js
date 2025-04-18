import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Salon() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const photos = [
    {
      src: "/image/salon-natka.jpg",
      alt: "Salon de massage Natka - Espace principal",
    },
    {
      src: "/image/salon-natka2.jpg",
      alt: "Salon de massage Natka - Vue détaillée",
    },
    {
      src: "/image/salon-natka3.jpg",
      alt: "Salon de massage Natka - Ambiance zen",
    },
  ];

  // Gestion du diaporama
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  // Gestion de la vidéo
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <section
      id="salon"
      className="py-20 bg-gradient-to-b from-white to-primary-light/10 relative overflow-hidden"
    >
      {/* Formes décoratives */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block px-4 py-1 bg-primary-light/30 backdrop-blur-sm rounded-full text-accent mb-4 shadow-sm">
            Un lieu de détente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Mon espace de bien-être</span>
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mt-6">
            Découvrez un havre de paix dédié à votre détente et votre équilibre.
            Chaque élément de cet espace a été pensé pour vous offrir un moment
            d&apos;évasion et de sérénité.
          </p>
        </div>

        {/* Nouvelle mise en page intégrant mieux la vidéo */}
        <div className="relative mb-16">
          {/* Fond décoratif */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-accent-light/5 rounded-3xl -z-10 blur-xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-primary-light/30">
            {/* Photos à gauche */}
            <div className="lg:col-span-7 space-y-6">
              {/* Photo principale */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-primary-light/50 h-[350px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10 opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
                <Image
                  src={photos[activeSlide].src}
                  alt={photos[activeSlide].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
                  <p className="text-white text-shadow-sm">
                    {activeSlide === 0 &&
                      "Un cadre apaisant pensé pour votre relaxation et votre confort"}
                    {activeSlide === 1 &&
                      "Ambiance paisible et équilibrée pour un lâcher-prise complet"}
                    {activeSlide === 2 &&
                      "Chaque détail est soigneusement choisi pour créer une atmosphère zen"}
                  </p>
                </div>

                {/* Contrôles du diaporama */}
                <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeSlide === index
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Voir l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Rangée de petites photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-primary-light/50 h-32 lg:h-40">
                  <Image
                    src="/image/salon-natka2.jpg"
                    alt="Détail du salon de massage"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-60"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-primary-light/50 h-32 lg:h-40">
                  <Image
                    src="/image/salon-natka3.jpg"
                    alt="Ambiance du salon de massage"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Citation et tags */}
              <div className="bg-gradient-to-r from-primary-light/30 to-accent-light/10 rounded-2xl p-5 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-primary-dark font-serif">
                    &ldquo;
                  </div>
                  <div>
                    <p className="italic text-foreground/90 mb-2">
                      L&apos;espace dans lequel nous prenons soin de notre corps
                      est le reflet du respect que nous lui accordons.
                    </p>
                    <div className="text-right text-sm text-primary-dark font-medium">
                      — Nathalie
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-white/60 text-primary-dark text-xs px-3 py-1 rounded-full shadow-sm">
                    Luminosité douce
                  </span>
                  <span className="bg-white/60 text-primary-dark text-xs px-3 py-1 rounded-full shadow-sm">
                    Aromathérapie
                  </span>
                  <span className="bg-white/60 text-primary-dark text-xs px-3 py-1 rounded-full shadow-sm">
                    Musique relaxante
                  </span>
                  <span className="bg-white/60 text-primary-dark text-xs px-3 py-1 rounded-full shadow-sm">
                    Confort optimal
                  </span>
                </div>
              </div>
            </div>

            {/* Vidéo et description à droite */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Intégration de la vidéo de manière plus harmonieuse */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-primary-light/50 h-[398px] lg:h-[506px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/10 z-10 pointer-events-none"></div>
                <video
                  ref={videoRef}
                  onClick={handleVideoClick}
                  className="w-full h-full object-cover cursor-pointer"
                  poster="/image/salon-natka.jpg"
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="/image/video-salon-natka.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Indication discrète */}
                <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-20">
                  Touchez pour {isVideoPlaying ? "pause" : "play"}
                </div>

                {/* Titre de la vidéo */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/60 to-transparent z-20">
                  <p className="text-white text-sm font-medium">
                    Visite de l&apos;espace bien-être
                  </p>
                </div>
              </div>

              {/* Description et CTA */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-primary-light/30">
                <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary-light/40 flex items-center justify-center mr-3 text-primary-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Une expérience sensorielle complète
                </h3>

                <p className="text-foreground/80 mb-6">
                  Au-delà d&apos;un simple espace de massage, mon salon offre
                  une véritable parenthèse de détente où tous vos sens sont
                  invités à se ressourcer. L&apos;ambiance musicale douce, les
                  senteurs apaisantes et la chaleur enveloppante créent une
                  bulle de bien-être où corps et esprit peuvent se régénérer
                  pleinement.
                </p>

                <div className="text-center">
                  <a
                    href="#contact"
                    className="button-gradient w-full py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-shadow inline-flex items-center justify-center"
                  >
                    Réservez votre séance
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
