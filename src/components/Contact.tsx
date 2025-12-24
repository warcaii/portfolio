import { ArrowUpRight, Mail, Instagram, Twitter } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">04 — Contact</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal delay={0.1} direction="left">
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              LET'S
              <br />
              <span className="text-gradient">CREATE</span>
              <br />
              TOGETHER
            </h2>
          </ScrollReveal>

          <div className="flex flex-col justify-end">
            <ScrollReveal delay={0.2} direction="right">
              <p className="text-mono text-base text-muted-foreground leading-relaxed mb-12">
                Got a project in mind? Looking to collaborate on something innovative? 
                I'm always open to discussing new ideas and creative opportunities.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <div className="space-y-4">
                <a
                  href="mailto:warcai@duck.com"
                  className="group flex items-center justify-between py-5 border-b border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-mono text-sm group-hover:text-accent transition-colors">warcai@duck.com</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a
                  href="https://www.instagram.com/devansh.px?igsh=bTZ3YnljZTFqMWx0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Instagram className="w-4 h-4 text-accent" />
                    <span className="text-mono text-sm group-hover:text-accent transition-colors">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a
                  href="https://x.com/GodWarcloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Twitter className="w-4 h-4 text-accent" />
                    <span className="text-mono text-sm group-hover:text-accent transition-colors">Twitter / X</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;