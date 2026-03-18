import { Palette, Film, Sparkles, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    tag: "GRAPHIC DESIGN",
    title: "I design clean visuals that tell your brand's story.",
    description: "Brand identity, visual systems, print & digital collateral crafted with precision.",
    icon: Palette,
    image: "🎨",
  },
  {
    tag: "VIDEO EDITING",
    title: "I craft compelling narratives through motion.",
    description: "Seamless editing, motion graphics, color grading, and visual storytelling.",
    icon: Film,
    image: "🎬",
  },
  {
    tag: "AI INTEGRATION",
    title: "I build smarter workflows with AI tools.",
    description: "Leveraging cutting-edge AI to enhance creative processes and unlock new possibilities.",
    icon: Sparkles,
    image: "⚡",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-mono text-sm text-muted-foreground mb-4">I turn complex ideas into intuitive experiences.</p>
        </ScrollReveal>

        {/* Service cards grid — Rachel How style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.tag} delay={0.1 + index * 0.15} direction="up">
              <div className="group relative glass rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_0%_100%/0.06)]">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                </div>

                {/* Top */}
                <div>
                  <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
                    {service.tag}
                  </span>
                  <h3 className="text-display text-xl md:text-2xl font-bold text-foreground mt-4 leading-snug group-hover:text-foreground transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-mono text-sm text-muted-foreground mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <span className="text-4xl">{service.image}</span>
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
