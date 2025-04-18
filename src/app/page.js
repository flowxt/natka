"use client";

import {
  Header,
  Hero,
  Introduction,
  AboutMe,
  Services,
  Formules,
  Practices,
  Salon,
  Schedule,
  ContactForm,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main>
        <Hero />
        <Introduction />
        <AboutMe />
        <Services />
        <Formules />
        <Practices />
        <Salon />
        <Schedule />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
