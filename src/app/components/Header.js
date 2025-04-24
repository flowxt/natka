import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll et la section active
  useEffect(() => {
    const handleScroll = () => {
      // Ajout de classe pour l'effet de scroll
      setScrolled(window.scrollY > 50);

      // Détection de la section active basée sur la position de défilement
      const sections = [
        "contact",
        "qui-suis-je",
        "formules",
        "services",
        "accueil",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour le défilement fluide et fermeture du menu
  const handleNavClick = (e, section) => {
    e.preventDefault();

    const targetElement = document.getElementById(section);
    if (targetElement) {
      // Calcul de la position de défilement en tenant compte de l'en-tête fixe
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      // Animation de défilement fluide
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Mise à jour de la section active
      setActiveSection(section);

      // Fermeture du menu mobile
      setIsMenuOpen(false);
    }
  };

  // Définition des menus dans l'ordre correct
  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "qui-suis-je", label: "À propos" },
    { id: "services", label: "Services" },
    { id: "formules", label: "Formules" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg border-b border-primary-light/50 py-2"
          : "bg-white/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-sm"></div>
            <Image
              src="/image/logo-natka.png"
              alt="Logo Natka"
              width={80}
              height={80}
              className="h-16 w-auto relative z-10 rounded-full"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            <a href="#" className="text-gradient">
              La clef du bien-être
            </a>
          </h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 relative ${
                activeSection === item.id
                  ? "text-black font-medium text-shadow"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent rounded-full -z-10 animate-fade-in shadow-md"></span>
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:block button-gradient px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-shadow"
        >
          Prendre rendez-vous
        </a>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-md border border-primary/20 focus:outline-none z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-1 bg-primary rounded-full transition-all duration-300 shadow-sm ${
              isMenuOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-primary rounded-full transition-all duration-300 shadow-sm ${
              isMenuOpen ? "opacity-0" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-primary rounded-full transition-all duration-300 shadow-sm ${
              isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 shadow-xl backdrop-blur-sm transition-all duration-300 overflow-hidden z-40 ${
          isMenuOpen ? "max-h-96 border-b border-primary-light/50" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col divide-y divide-primary-light/20">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-3 transition-colors ${
                  activeSection === item.id
                    ? "text-accent font-medium"
                    : "text-foreground"
                }`}
              >
                {item.id === "qui-suis-je" ? "Qui suis-je" : item.label}
              </a>
            ))}
            <div className="py-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="button-gradient block text-center py-3 px-6 rounded-full text-shadow"
              >
                Prendre rendez-vous
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
