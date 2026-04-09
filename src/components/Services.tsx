import { useState } from "react";
import { Palette, Film, Sparkles, ChevronDown } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "GRAPHIC DESIGN",
    description: "Brand identity, visual systems, print & digital collateral crafted with precision and purpose.",
    details: [
      "Brand Identity & Logo Design",
      "Visual Systems & Guidelines",
      "Print & Digital Collateral",
      "UI/UX Design",
    ],
    icon: Palette,
  },
  {
    number: "02",
    title: "VIDEO EDITING",
    description: "Compelling visual narratives through seamless editing, motion graphics, and color grading.",
    details: [
      "Post-Production Editing",
      "Motion Graphics & VFX",
      "Color Grading & Correction",
      "Sound Design & Mixing",
    ],
    icon: Film,
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description: "Leveraging cutting-edge AI tools to enhance creative workflows and unlock new possibilities.",
    details: [
      "AI-Powered Workflows",
      "Generative Content Creation",
      "Automation & Optimization",
      "Custom AI Solutions",
    ],
    icon: Sparkles,
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-32 md:py-48 section-padding relative">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">03 — Services</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.number} delay={0.1 + index * 0.1}>
                <div
                  className={cn(
                    "border-b border-border/40 transition-colors duration-500",
                    isOpen && "border-border/80"
                  )}
                >
                  {/* Accordion trigger */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left py-8 md:py-10 flex items-center gap-6 md:gap-10 group cursor-pointer"
                  >
                    {/* Number */}
                    <span className={cn(
                      "text-mono text-sm tracking-widest text-muted-foreground transition-colors duration-500",
                      isOpen && "text-foreground"
                    )}>
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className={cn(
                      "p-3 rounded-xl glass transition-all duration-500",
                      isOpen && "shadow-[0_0_20px_hsl(var(--foreground)/0.08)]"
                    )}>
                      <Icon className={cn(
                        "w-5 h-5 text-muted-foreground transition-colors duration-500",
                        isOpen ? "text-foreground" : "group-hover:text-foreground/70"
                      )} />
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                      "text-display text-2xl md:text-4xl lg:text-5xl flex-1 transition-all duration-500",
                      isOpen
                        ? "text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        : "text-foreground/50 group-hover:text-foreground/80"
                    )}>
                      {service.title}
                    </h3>

                    {/* Chevron */}
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-all duration-500 flex-shrink-0",
                      isOpen && "rotate-180 text-foreground"
                    )} />
                  </button>

                  {/* Accordion content */}
                  <div
                    className={cn(
                      "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-10 pl-[4.5rem] md:pl-[6.5rem] space-y-6">
                        <p className="text-mono text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {service.details.map((detail, i) => (
                            <span
                              key={i}
                              className="text-mono text-xs tracking-wide px-4 py-2 rounded-full border border-border/60 text-foreground/60 bg-foreground/[0.03]"
                              style={{
                                animationDelay: `${i * 80}ms`,
                              }}
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
