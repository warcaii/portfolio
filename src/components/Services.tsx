import { Palette, Film, Sparkles } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    number: "01",
    title: "GRAPHIC DESIGN",
    description: "Brand identity, visual systems, print & digital collateral crafted with precision and purpose.",
    icon: Palette,
  },
  {
    number: "02",
    title: "VIDEO EDITING",
    description: "Compelling visual narratives through seamless editing, motion graphics, and color grading.",
    icon: Film,
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description: "Leveraging cutting-edge AI tools to enhance creative workflows and unlock new possibilities.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 md:py-48 section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">03 — Services</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={0.1 + index * 0.15}>
              <div className="group p-8 card-hover relative overflow-hidden h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-mono text-xs text-muted-foreground group-hover:text-accent transition-colors">
                      {service.number}
                    </span>
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-display text-2xl md:text-3xl mb-4 leading-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-mono text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;