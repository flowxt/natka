import { useEffect, useRef } from "react";

export default function LegalModal({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white relative rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-primary-light to-accent-light/20">
          <h2 className="text-2xl font-bold text-black">Mentions Légales</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="text-gray-800">
            <h3 className="text-xl font-bold text-primary mb-4">
              1. Informations légales :
            </h3>
            <p className="mb-3 text-gray-800">
              Le site internet www.natkalaclefdubienetre.fr est l&apos;unique
              propriété de l&apos;Auto-entreprise Nathalie Cochin, qui
              l&apos;édite.
            </p>
            <p className="mb-3 text-gray-800">
              <strong className="font-bold">
                Nathalie Cochin - N° Tel : +33601499327
              </strong>
              <br />
              192 route de Collonge 74800 Etaux
              <br />
              SIREN: 924650971
            </p>
            <p className="mb-3 text-gray-800">
              Numéro de TVA Intracommunautaire : FR81924650971
              <br />
              Adresse email : nathalieboupha@gmail.com
            </p>
            <p className="mb-3 text-gray-800">
              Le Fabriquant du site internet : Cochin Nathalie
              <br />
              Le Décideur de publication est : Cochin Nathalie
              <br />
              Ou contacter le Chef de publication : nathalieboupha@gmail.com
            </p>
            <p className="mb-3 text-gray-800">
              Le Concepteur est : Cochin Nathalie
              <br />
              Ou entrer en contact avec le Développeur :
              nathalieboupha@gmail.com
            </p>
            <p className="mb-6 text-gray-800">
              <strong className="font-bold">
                Hébergeur du site web : Ionos EURL
              </strong>
              <br />
              Immatriculation RCS Sarreguemines B 431 303 775
              <br />
              Code APE (INSEE) 6311Z
              <br />
              Numéro de TVA : FR 13 431 303 775
              <br />
              Adresse du siège : 7 place de la Gare - 57200 Sarreguemines -
              France
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">
              2. Introduction :
            </h3>
            <p className="mb-3 text-gray-800">
              Tout internaute qui utilise le site internet :
              www.natkalaclefdubienetre.fr est considéré comme usagé du site
              internet. Le site internet www.natkalaclefdubienetre.fr regroupe
              un ensemble de services, en l&apos;état, disponible pour les
              utilisateurs. Il est précisé que ceux-ci doivent rester honnête et
              faire preuve de bonne foi tant envers les autres usagés
              qu&apos;envers le Concepteur du site www.natkalaclefdubienetre.fr.
              Le site www.natkalaclefdubienetre.fr est mis à jour de façon
              régulière par Cochin Nathalie.
            </p>
            <p className="mb-6 text-gray-800">
              Cochin Nathalie s&apos;efforce de fournir sur le site web
              www.natkalaclefdubienetre.fr des informations les plus claires
              possibles (sous réserve de modifications), mais ne peuvent assurer
              l&apos;exactitude, la finitude et les informations transmises sur
              son site web, qu&apos;elles soient de son fait ou non. En
              répercussion, l&apos;utilisateur reconnaît utiliser ces
              informations données sous son unique responsabilité.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">
              3. Accessibilité :
            </h3>
            <p className="mb-6 text-gray-800">
              Le site suivant www.natkalaclefdubienetre.fr est généralement
              accessible aux usagés 24/7, excepté en cas d&apos;interruption,
              programmée ou non, pour les besoins de la maintenance ou force
              majeure. En cas d&apos;impossibilité d&apos;accès au service,
              www.natkalaclefdubienetre.fr se dévouera à faire son maximum afin
              de rétablir l&apos;accès au site suivant et s&apos;efforcera alors
              de communiquer préalablement aux utilisateurs informations de
              l&apos;interruption. N&apos;étant subordonné qu&apos;à une
              redevance de moyen, www.natkalaclefdubienetre.fr ne saurait être
              tenu comme responsable de tout dommage, quelle qu&apos;en soit sa
              nature, résultant d&apos;une indisponibilité du service.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">
              4. Propriété intellectuelle :
            </h3>
            <p className="mb-3 text-gray-800">
              Cochin Nathalie est propriétaire unique de tous les droits de
              propriété intellectuelle ou détient les droits et autorisations
              d&apos;usage sur tous les éléments accessibles sur le site
              internet, tant structurellement que sur les articles et textes,
              images, graphismes, logo, bande sonore, logiciels etc…
            </p>
            <p className="mb-6 text-gray-800">
              Toute reproduction même partielle du site web
              www.natkalaclefdubienetre.fr, représentation, modification,
              adaptation totale ou partielle de l&apos;un de ces éléments, peu
              importe le moyen ou la technique utilisé, est strictement
              interdite, sauf acceptation préalable de Cochin Nathalie,
              responsable du site internet même partielle du site suivant
              natkalaclefdubienetre.fr, représentation, modification, adaptation
              totale ou partielle de l&apos;un de ces éléments, quel que soit le
              moyen ou le procédé utilisé, est formellement interdite, sauf
              autorisation préalable de Cochin Nathalie, directeur du site web
              au mail suivant : nathalieboupha@gmail.com, à défaut elle sera
              désigné comme constitutive d&apos;une contrefaçon et passible de
              poursuite selon les dispositions des différents articles L.335-2
              et suivants du Code de Propriété Intellectuelle.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">
              5. Cookies et Liens Hypertextes :
            </h3>
            <p className="mb-3 text-gray-800">
              Le site www.natkalaclefdubienetre.fr comporte différents liens
              hypertextes vers d&apos;autres sites (partenariats, informations
              etc.) mis en place avec l&apos;accord de Cochin Nathalie.
              Cependant, Cochin Nathalie ne peut pas contrôler l&apos;ensemble
              du contenu des sites consultés et décline donc l&apos;entière
              responsabilité de ce fait concernant les risques éventuels de
              contenus interdits.
            </p>
            <p className="mb-3 text-gray-800">
              L&apos;usager est mis au courant que durant de ses utilisations
              sur le site web www.natkalaclefdubienetre.fr, un ou de multiples
              cookies peuvent s&apos;installer mécaniquement sur son site grâce
              à son logiciel informatique de navigation. Un cookie est un
              assemblage de données informatique qui ne permettra jamais
              d&apos;identifier l&apos;utilisateur, néanmoins qui sauvegarde des
              indications en lien avec la navigation de l&apos;utilisateur sur
              le site interne.
            </p>
            <p className="mb-6 text-gray-800">
              La configuration du logiciel de navigation tolère de renseigner de
              la compagnie de cookie et potentiellement, de contester de la
              manière décrite à l&apos;adresse suivante :
              www.natkalaclefdubienetre.fr. La mise en place à la possibilité
              néanmoins de configurer le navigateur de son pc pour contester
              l&apos;installation des cookies, sachant que le refus de la mise
              en place d&apos;un cookie peut potentiellement entraîner
              l&apos;incapacité d&apos;avoir accès à différents secteurs.
              Concernant tout blocage de cookies, cherchez dans votre moteur de
              recherche : blocage des cookies et appliquez les explications en
              lien avec votre navigateur.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">
              6. Protection des personnes & biens - Maniement des données
              personnelles :
            </h3>
            <p className="mb-3 text-gray-800">
              En France, les données personnelles sont notamment protégées par
              la loi n° 78-87 du 6 janvier 1978 et la loi n° 2004-801 datant du
              6 août 2004, l&apos;article L. 226-13 du Code pénal et la
              Directive Européenne datant du 24 octobre 1995.
            </p>
            <p className="mb-3 text-gray-800">
              Sur le site www.natkalaclefdubienetre.fr, Cochin Nathalie ne
              collecte pas d&apos;informations personnelles (suivant
              l&apos;article 4 loi n°78-17 du 06 janvier 1978) relatives à
              l&apos;utilisateur que pour le besoin de certains services offerts
              par le site suivant www.natkalaclefdubienetre.fr.
              L&apos;utilisateur donne les données en toute conscience de cause,
              particulièrement lorsqu&apos;il procède par lui-même à leur
              saisie. Il est alors détaillé à l&apos;usager du site suivant
              www.natkalaclefdubienetre.fr le devoir ou non de rentrer ces
              informations.
            </p>
            <p className="mb-3 text-gray-800">
              Conformément aux dispositions des articles 38 et autres de la loi
              78-17 du 6 janvier 1978 en lien avec l&apos;informatique, aux
              fichiers et aux libertés, tout utilisateur possède un droit
              d&apos;accès, de rectification, de suppression et
              d&apos;opposition à toutes les données personnelles le concernant.
              Pour l&apos;exercer, adressez une demande à
              www.natkalaclefdubienetre.fr par mail : nathalieboupha@gmail.com
              ou alors via écrit dûment signée, jointe d&apos;une copie de pièce
              d&apos;identité ainsi qu&apos;une signature du titulaire de la
              pièce, en mentionnant l&apos;adresse à laquelle la réponse devra
              être envoyée.
            </p>
            <p className="mb-3 text-gray-800">
              Sans information personnelle de l&apos;usager du site
              www.natkalaclefdubienetre.fr ne sera publiée à l&apos;insu de
              l&apos;utilisateur, troquée, transférée, cédée sur un support
              quelconque à des tiers. Uniquement l&apos;hypothèse du rachat du
              site internet www.natkalaclefdubienetre.fr et de tous ses droits
              autorise Cochin Nathalie à joindre les informations personnelles à
              l&apos;acquéreur qui serait donc à son tour tenu à la même
              nécessité de conservation et de modification des données relative
              à l&apos;utilisateur du site suivant www.natkalaclefdubienetre.fr.
              Le site internet www.natkalaclefdubienetre.fr est en conformité
              avec le RGPD voir notre politique RGPD.
            </p>
            <p className="mb-3 text-gray-800">
              Les bases de données sont sécurisées par les obligations de la loi
              du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
              concernant la protection juridique des BDD (bases de données).
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#E91E63",
              color: "white",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
