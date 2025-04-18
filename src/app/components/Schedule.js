export default function Schedule() {
  return (
    <section className="py-16 md:py-20 bg-gradient-custom relative overflow-hidden">
      <div className="absolute inset-0 decorative-dots opacity-10"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent-light/10 rounded-full text-accent mb-4 shadow-sm">
            Planifiez votre séance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
            Horaires & Disponibilités
          </h2>
          <p className="text-text-light">Planifiez votre moment de détente</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="schedule-card animate-fade-in">
            <div className="schedule-card-badge"></div>
            <div className="schedule-card-icon">Lu-Je</div>
            <h3 className="day-label">Lundi à Jeudi</h3>
            <p className="time-label">17h - 19h</p>
          </div>

          <div className="schedule-card animate-fade-in animate-delay-100">
            <div className="schedule-card-badge"></div>
            <div className="schedule-card-icon">Ve</div>
            <h3 className="day-label">Vendredi</h3>
            <div className="space-y-2">
              <p className="time-label">9h - 12h</p>
              <p className="time-label">14h - 17h</p>
            </div>
          </div>

          <div className="schedule-card animate-fade-in animate-delay-200">
            <div className="schedule-card-badge"></div>
            <div className="schedule-card-icon">Sa</div>
            <h3 className="day-label">Samedi</h3>
            <p className="time-label">9h - 11h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
