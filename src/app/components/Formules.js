import { formules } from "./data";

export default function Formules() {
  return (
    <section
      id="formules"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-light/30 filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary-light/40 filter blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent-light/10 rounded-full text-accent mb-4 shadow-sm">
            Pour votre bien-être
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
            Nos Formules Bien-être
          </h2>
          <p className="text-text-light">
            Des combinaisons parfaites pour une expérience complète
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {formules.map((formule, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-primary-light/40 to-transparent"></div>
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>

              <div className="p-5 flex flex-col h-full">
                <div className="mb-4 relative">
                  <h3 className="text-lg font-bold text-primary-dark group-hover:text-accent transition-colors pr-16">
                    {formule.title}
                  </h3>

                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      backgroundColor: "#E91E63",
                      color: "white",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      border: "2px solid white",
                    }}
                  >
                    {formule.price.split("-")[0].trim()}
                  </div>
                </div>

                <p className="text-sm text-text-light mb-3">
                  {formule.description}
                </p>

                <p className="text-xs text-primary-dark mb-3 italic">
                  <strong>Objectif:</strong> {formule.objectif}
                </p>

                <div className="mt-auto pt-3 border-t border-dashed border-primary-light/50">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-accent bg-primary-light/10 px-2 py-1 rounded-full">
                      {formule.price.includes("min")
                        ? formule.price.split("-")[1].trim()
                        : formule.price.split("-")[1].trim() ||
                          "Formule complète"}
                    </span>
                    <a
                      href="#contact"
                      className="text-primary hover:text-accent transition-colors text-sm flex items-center"
                    >
                      Réserver <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-gradient-custom p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                Offrez du bien-être à vos proches
              </h3>
              <p className="text-text-light">
                Nos chèques cadeaux sont disponibles pour toutes nos formules
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap py-2.5 px-5 bg-white text-primary-dark rounded-full hover:bg-primary-light/20 transition-colors font-medium"
            >
              Demander un chèque cadeau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
