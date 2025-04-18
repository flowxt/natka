export default function Introduction() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-16 decorative-dots opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 decorative-dots opacity-20"></div>

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="text-accent text-4xl">❀</span>
          </div>
        </div>
        <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 animate-fade-in bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
          Que vous souhaitez vous détendre, libérer des tensions ou simplement
          faire une pause, je propose des services adaptés à vos besoins. Dans
          une atmosphère douce et apaisante, chaque soin est pensé pour vous
          apporter détente et sérénité, afin de faire de ce moment un instant
          unique rien que pour vous.
        </p>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>
      </div>
    </section>
  );
}
