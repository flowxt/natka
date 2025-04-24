export default function Introduction() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/subtle-pattern.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-accent/20 animate-float-slow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-primary/20 animate-float-medium"></div>

      {/* Lignes décoratives */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Élément flottant décoratif */}
          <div className="w-24 h-24 mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 animate-pulse-slow"></div>
            <div className="absolute inset-1 rounded-full bg-white/90 backdrop-blur-sm"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <span className="text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                ❀
              </span>
            </div>
          </div>

          {/* Titre élégant */}
          <h2 className="text-3xl md:text-4xl font-light text-primary/90 mb-6 tracking-wider">
            Bienvenue chez <span className="font-medium italic">Natka</span>
          </h2>

          {/* Texte d'introduction avec style amélioré */}
          <div className="relative">
            <div className="absolute -inset-4 bg-white/80 rounded-2xl shadow-lg blur-sm"></div>
            <p className="relative text-lg md:text-xl text-text-dark leading-relaxed mb-10 p-8 rounded-xl bg-white/90 backdrop-blur-md shadow-xl border border-primary/10 font-light">
              <span className="text-2xl text-accent font-serif italic mr-2">
                &ldquo;
              </span>
              Que vous souhaitiez vous{" "}
              <span className="text-primary font-medium">détendre</span>,
              libérer des{" "}
              <span className="text-accent font-medium">tensions</span> ou
              simplement faire une{" "}
              <span className="text-primary font-medium">pause</span>, je
              propose des services adaptés à vos besoins. Dans une atmosphère
              douce et apaisante, chaque soin est pensé pour vous apporter{" "}
              <span className="text-accent font-medium">détente</span> et{" "}
              <span className="text-primary font-medium">sérénité</span>, afin
              de faire de ce moment un instant unique rien que pour vous.
              <span className="text-2xl text-accent font-serif italic ml-2">
                &rdquo;
              </span>
            </p>
          </div>

          {/* Séparateur stylisé */}
          <div className="w-40 h-1 mx-auto bg-gradient-to-r from-primary/40 via-accent to-primary/40 rounded-full shadow-sm mb-4"></div>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-bounce delay-200"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
