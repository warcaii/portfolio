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
    <section id="services" className="py-24 md:py-40 section-padding relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Brutal header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <span className="text-display text-6xl md:text-8xl font-black text-foreground leading-none">03</span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.number} delay={0.1 + index * 0.1}>
                <div className="border-[2px] border-foreground -mt-[2px] first:mt-0">
                  {/* Accordion trigger */}
                  <button
                    onClick={() => toggle(index)}
                    className={cn(
                      "w-full text-left p-6 md:p-8 flex items-center gap-6 md:gap-10 group cursor-pointer transition-all duration-200",
                      isOpen && "bg-foreground text-background"
                    )}
                  >
                    {/* Number */}
                    <span className={cn(
                      "text-display text-3xl md:text-5xl font-black transition-colors",
                      isOpen ? "text-background/60" : "text-foreground/40"
                    )}>
                      {service.number}
                    </span>

                    {/* Icon */}
                    <Icon className={cn(
                      "w-6 h-6 flex-shrink-0 transition-colors",
                      isOpen ? "text-background/60" : "text-foreground/40 group-hover:text-foreground/70"
                    )} />

                    {/* Title */}
                    <h3 className={cn(
                      "text-display text-2xl md:text-4xl lg:text-5xl font-black flex-1 tracking-tight transition-colors",
                      isOpen ? "text-background" : "text-foreground group-hover:text-foreground"
                    )}>
                      {service.title}
                    </h3>

                    {/* Chevron */}
                    <ChevronDown className={cn(
                      "w-6 h-6 flex-shrink-0 transition-all duration-300",
                      isOpen ? "rotate-180 text-background/60" : "text-foreground/40"
                    )} />
                  </button>

                  {/* Accordion content */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 md:p-8 pt-0 md:pt-0 border-t-[2px] border-foreground/20 space-y-6">
                        <p className="text-mono text-sm md:text-base text-foreground/60 max-w-2xl leading-relaxed pt-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {service.details.map((detail, i) => (
                            <span
                              key={i}
                              className="text-mono text-xs tracking-wider uppercase px-5 py-2.5 border-[2px] border-foreground text-foreground/80 hover:bg-foreground hover:text-background transition-all duration-200"
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
