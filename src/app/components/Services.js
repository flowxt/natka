import { useState } from "react";
import Image from "next/image";
import { services } from "./data";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-custom relative"
    >
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 filter blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary-light/50 filter blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full text-accent mb-4 shadow-sm">
            Nos soins
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
            Découvrez nos services de bien-être
          </h2>
          <p className="text-text-light">
            Des soins personnalisés pour votre équilibre et votre santé
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="bg-white/80 hover:bg-white text-primary-dark px-4 py-2 rounded-full shadow-sm transition-all border border-primary-light/30 font-medium">
            Tous les soins
          </button>
          <button className="bg-white/40 hover:bg-white text-primary-dark px-4 py-2 rounded-full shadow-sm transition-all hover:border hover:border-primary-light/30 font-medium">
            Réflexologie
          </button>
          <button className="bg-white/40 hover:bg-white text-primary-dark px-4 py-2 rounded-full shadow-sm transition-all hover:border hover:border-primary-light/30 font-medium">
            Drainage
          </button>
          <button className="bg-white/40 hover:bg-white text-primary-dark px-4 py-2 rounded-full shadow-sm transition-all hover:border hover:border-primary-light/30 font-medium">
            Massages
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center mr-3">
                    <span className="text-accent text-sm">✿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {service.title}
                  </h3>
                </div>

                <div className="bg-accent/10 px-2 py-1 rounded-md inline-block w-fit mb-3">
                  <p className="text-xs font-medium text-accent">
                    {service.price}
                  </p>
                </div>

                <p className="text-sm text-text-light line-clamp-3 mb-4">
                  {service.description.substring(0, 100)}...
                </p>

                <div className="mt-auto flex justify-between items-center pt-3 border-t border-primary-light/20">
                  <a
                    href="#contact"
                    className="text-primary hover:text-accent transition-colors text-sm flex items-center"
                  >
                    Réserver <span className="ml-1">→</span>
                  </a>
                  <button
                    onClick={() =>
                      setActiveService(
                        activeService === service.id ? null : service.id
                      )
                    }
                    className="text-accent-light hover:text-accent transition-colors text-xs"
                  >
                    {activeService === service.id
                      ? "Moins d'infos"
                      : "Plus d'infos"}
                  </button>
                </div>

                {activeService === service.id && (
                  <div className="mt-4 pt-3 border-t border-primary-light/20 animate-fade-in">
                    {service.forfait && (
                      <div className="mb-2 text-xs text-text-light bg-secondary-light/10 p-2 rounded">
                        <span className="font-medium text-primary-dark">
                          Forfait :
                        </span>{" "}
                        {service.forfait.split("-")[1]}
                      </div>
                    )}

                    {service.forfaits && (
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-primary-dark mb-1">
                          Forfaits disponibles :
                        </p>
                        {service.forfaits.map((forfait, i) => (
                          <div
                            key={i}
                            className="text-xs text-text-light flex items-start gap-1"
                          >
                            <span className="text-accent">•</span>
                            <span>{forfait}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.details && (
                      <div className="space-y-1 mt-2">
                        <p className="text-xs font-medium text-primary-dark mb-1">
                          Détails :
                        </p>
                        {service.details.map((detail, i) => (
                          <div
                            key={i}
                            className="text-xs text-text-light flex items-start gap-1"
                          >
                            <span className="text-accent">•</span>
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
