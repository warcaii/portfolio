import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Starfield from "@/components/Starfield";

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
        <section id="services">
          <Services />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
