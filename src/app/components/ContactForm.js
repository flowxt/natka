import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    contact: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation basique
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.contact.trim())
      newErrors.contact = "L'adresse mail ou téléphone est requise";
    if (!formData.consent)
      newErrors.consent = "Veuillez accepter les conditions";

    if (Object.keys(newErrors).length === 0) {
      // Simulation d'envoi réussi
      setFormSubmitted(true);
      // En production, vous ajouteriez ici l'appel à votre API pour envoyer l'email
    } else {
      setErrors(newErrors);
    }
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-primary-light/10"
    >
      {/* Formes décoratives */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-light/40 to-accent-light/40 rounded-full text-primary-dark font-medium mb-4 shadow-sm">
            <span className="mr-1">✨</span> Prenez contact avec moi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Réservez votre séance</span>
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-xl mx-auto">
            Offrez-vous un moment de détente et de bien-être. Remplissez le
            formulaire ci-dessous et je vous recontacterai rapidement pour
            organiser votre séance.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-green-200 animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-accent flex items-center justify-center text-white shadow-lg animate-floating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gradient">
              Message envoyé avec succès!
            </h3>
            <p className="text-center text-foreground/80 mb-6">
              Merci pour votre message. Je vous recontacterai dans les plus
              brefs délais pour confirmer votre rendez-vous.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2 rounded-full bg-white border border-primary text-primary hover:bg-primary-light/10 transition-all duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Retour au formulaire
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-2 md:p-3 animate-fade-in max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/5 rounded-2xl p-8 md:p-10 border border-primary-light/30">
              {/* Icône décorative */}
              <div className="mx-auto w-20 h-20 mb-8 relative">
                <div className="absolute inset-0 bg-white rounded-full shadow-lg animate-pulse-slow"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div
                  className={`transition-all duration-300 ${
                    activeField === "nom" ? "scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex items-center mb-2 font-medium text-primary-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <label htmlFor="nom">
                      Nom<span className="text-accent">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("nom")}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 pl-12 rounded-xl border-2 ${
                        errors.nom
                          ? "border-red-400"
                          : activeField === "nom"
                          ? "border-accent shadow-md"
                          : "border-primary-light/30"
                      } focus:outline-none focus:ring-0 bg-white shadow-sm transition-all duration-300`}
                      placeholder="Votre nom"
                    />
                    <div
                      className={`absolute left-4 top-4 transition-all duration-300 ${
                        activeField === "nom"
                          ? "text-accent scale-110"
                          : "text-primary/60"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.nom && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.nom}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div
                  className={`transition-all duration-300 ${
                    activeField === "contact" ? "scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex items-center mb-2 font-medium text-primary-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <label htmlFor="contact">
                      Contact<span className="text-accent">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("contact")}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 pl-12 rounded-xl border-2 ${
                        errors.contact
                          ? "border-red-400"
                          : activeField === "contact"
                          ? "border-accent shadow-md"
                          : "border-primary-light/30"
                      } focus:outline-none focus:ring-0 bg-white shadow-sm transition-all duration-300`}
                      placeholder="Votre email ou téléphone"
                    />
                    <div
                      className={`absolute left-4 top-4 transition-all duration-300 ${
                        activeField === "contact"
                          ? "text-accent scale-110"
                          : "text-primary/60"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div
                  className={`transition-all duration-300 ${
                    activeField === "message" ? "scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex items-center mb-2 font-medium text-primary-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    <label htmlFor="message">Message</label>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      rows="4"
                      className={`w-full px-5 py-4 pl-12 rounded-xl border-2 ${
                        activeField === "message"
                          ? "border-accent shadow-md"
                          : "border-primary-light/30"
                      } focus:outline-none focus:ring-0 resize-none bg-white shadow-sm transition-all duration-300`}
                      placeholder="Dites-moi ce dont vous avez besoin"
                    ></textarea>
                    <div
                      className={`absolute left-4 top-4 transition-all duration-300 ${
                        activeField === "message"
                          ? "text-accent scale-110"
                          : "text-primary/60"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Consentement */}
                <div className="bg-gradient-to-r from-primary-light/10 to-accent-light/5 p-4 rounded-xl border border-primary-light/20">
                  <label className="flex items-start cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="opacity-0 absolute h-6 w-6"
                      />
                      <div
                        className={`border-2 rounded-md w-6 h-6 flex flex-shrink-0 justify-center items-center mr-3 ${
                          formData.consent
                            ? "bg-primary border-transparent"
                            : "bg-white border-primary-light/50 group-hover:border-accent/50"
                        } transition-all duration-300`}
                      >
                        {formData.consent && (
                          <svg
                            className="fill-white w-4 h-4 pointer-events-none"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-foreground/80">
                      Je consens par la présente à ce que mes données soient
                      stockées et traitées pour établir un contact. Je sais que
                      je peux révoquer mon consentement à tout moment.
                      <span className="text-accent">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-sm mt-1 ml-9 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  className="w-full button-gradient py-4 px-6 rounded-xl text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] text-shadow transition-all duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Envoyer ma demande
                </button>

                {/* Options de contact alternatif */}
                <div className="flex flex-col md:flex-row gap-4 mt-6 pt-6 border-t border-primary-light/30">
                  <a
                    href="tel:+33123456789"
                    className="flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-full bg-white border border-primary-light hover:bg-primary-light/10 transition-all text-primary-dark text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +33 (0)1 23 45 67 89
                  </a>
                  <a
                    href="mailto:contact@natka-bien-etre.fr"
                    className="flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-full bg-white border border-primary-light hover:bg-primary-light/10 transition-all text-primary-dark text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    contact@natka-bien-etre.fr
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
