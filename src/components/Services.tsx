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
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">03 — Services</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={0.1 + index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative glass glass-border-glow rounded-2xl overflow-hidden">
                {/* Full-width glow sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.04] via-foreground/[0.08] to-foreground/[0.04]" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                </div>
                
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-display text-6xl md:text-8xl font-bold text-foreground/[0.06] group-hover:text-foreground/[0.15] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl glass group-hover:shadow-[0_0_20px_hsl(0_0%_100%/0.1)] transition-all duration-500">
                        <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                      </div>
                      <h3 className="text-display text-3xl md:text-4xl lg:text-5xl group-hover:text-foreground group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-mono text-sm md:text-base text-muted-foreground group-hover:text-foreground/60 max-w-2xl leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-xl glass group-hover:shadow-[0_0_25px_hsl(0_0%_100%/0.1)] transition-all duration-500">
                    <span className="text-xl text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">→</span>
                  </div>
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
