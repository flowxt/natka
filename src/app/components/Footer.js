import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-gradient text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/image/pied.png')] opacity-10 bg-center bg-cover mix-blend-overlay"></div>

      {/* Vagues décoratives */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto translate-y-[-85%]"
        >
          <path
            fill="rgba(255,255,255,0.15)"
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,154.7C840,139,960,85,1080,69.3C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-sm"></div>
              <Image
                src="/image/logo-natka.png"
                alt="Logo Natka"
                width={50}
                height={50}
                className="h-16 w-auto relative z-10 rounded-full"
              />
            </div>
            <div className="ml-4">
              <span className="text-2xl font-medium text-white text-shadow">
                Natka
              </span>
              <p className="text-sm text-white/90">La clef du bien-être</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-white text-shadow mb-2">
              © {new Date().getFullYear()} Natka - La clef du bien-être
            </p>
            <p className="text-white/90 text-sm">Tous droits réservés</p>
            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section promotion développeur */}
        <div className="pt-6 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">
                    Site réalisé par
                  </p>
                  <Link
                    href="https://atypikcode.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-gradient-purple-blue hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                  >
                    ATYPIKCODE
                  </Link>
                </div>
              </div>
              <div className="text-sm text-white/80 max-w-md text-center md:text-right">
                <p>
                  Vous cherchez un développeur pour créer votre site web
                  professionnel et sur-mesure?{" "}
                  <span className="font-semibold text-blue-300">
                    ATYPIKCODE
                  </span>{" "}
                  est la solution parfaite pour donner vie à vos projets
                  digitaux avec créativité et expertise.
                </p>
                <Link
                  href="https://atypikcode.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-xs font-medium text-blue-300 hover:text-blue-200 transition-colors"
                >
                  Visitez atypikcode.fr
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cercles décoratifs */}
      <div className="absolute bottom-5 left-5 w-20 h-20 bg-white/5 rounded-full"></div>
      <div className="absolute top-20 right-10 w-16 h-16 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
    </footer>
  );
}
