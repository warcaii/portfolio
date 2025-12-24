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

        {/* Large stacked layout */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={0.1 + index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative border border-border hover:border-accent transition-all duration-500 overflow-hidden">
                {/* Background fill on hover */}
                <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  {/* Number - large */}
                  <div className="flex-shrink-0">
                    <span className="text-display text-6xl md:text-8xl font-bold text-border group-hover:text-background/20 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-6 h-6 text-accent group-hover:text-background transition-colors duration-500" />
                      <h3 className="text-display text-3xl md:text-4xl lg:text-5xl group-hover:text-background transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-mono text-sm md:text-base text-muted-foreground group-hover:text-background/70 max-w-2xl leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 border border-border group-hover:border-background/30 transition-all duration-500">
                    <span className="text-2xl text-muted-foreground group-hover:text-background transition-colors duration-500">→</span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;