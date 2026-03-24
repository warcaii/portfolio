import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Starfield from "@/components/Starfield";
import SpaceDivider from "@/components/SpaceDivider";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <Starfield />
      <Navigation />
      <main>
        <Hero />
        <SpaceDivider variant="constellation" />
        <section id="about">
          <About />
        </section>
        <SpaceDivider variant="orbit" />
        <section id="ventures">
          <Ventures />
        </section>
        <SpaceDivider variant="planet" />
        <section id="services">
          <Services />
        </section>
        <SpaceDivider variant="constellation" />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
