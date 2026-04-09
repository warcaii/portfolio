import { ArrowUpRight, Mail, Instagram, Twitter } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const socials = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "warcai@duck.com",
      href: "mailto:warcai@duck.com",
      external: false,
    },
    {
      icon: Instagram,
      label: "INSTAGRAM",
      value: "@devansh.px",
      href: "https://www.instagram.com/devansh.px?igsh=bTZ3YnljZTFqMWx0",
      external: true,
    },
    {
      icon: Twitter,
      label: "TWITTER / X",
      value: "@GodWarcloud",
      href: "https://x.com/GodWarcloud",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Brutal header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <span className="text-display text-6xl md:text-8xl font-black text-foreground leading-none">04</span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left — CTA */}
          <div className="border-[2px] border-foreground p-8 md:p-12">
            <ScrollReveal delay={0.1}>
              <h2 className="text-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 uppercase">
                LET'S
                <br />
                BUILD
                <br />
                <span className="text-foreground/40">SOMETHING</span>
                <br />
                AMAZING.
              </h2>
              
              <p className="text-mono text-foreground/60 text-sm md:text-base leading-relaxed max-w-md mb-10">
                Got a project in mind? Looking to collaborate on something innovative? 
                I'm always open to discussing new ideas and creative opportunities.
              </p>

              <a
                href="mailto:warcai@duck.com"
                className="group inline-flex items-center gap-4 px-8 py-4 border-[2px] border-foreground bg-foreground text-background font-mono font-bold text-sm uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition-all duration-200"
              >
                START A CONVERSATION
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right — Socials */}
          <div className="border-[2px] border-foreground -mt-[2px] lg:mt-0 lg:-ml-[2px]">
            <ScrollReveal delay={0.2}>
              <div>
                {socials.map((social, i) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className={`group flex items-center justify-between p-6 md:p-8 border-b-[2px] border-foreground last:border-b-0 hover:bg-foreground hover:text-background transition-all duration-200`}
                  >
                    <div className="flex items-center gap-5">
                      <social.icon className="w-5 h-5 text-foreground/40 group-hover:text-background/60 transition-colors" />
                      <div>
                        <p className="text-mono text-xs tracking-[0.3em] uppercase text-foreground/40 group-hover:text-background/50 transition-colors mb-1">
                          {social.label}
                        </p>
                        <p className="text-display text-lg md:text-xl font-bold group-hover:text-background transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-6 md:p-8 border-t-[2px] border-foreground bg-foreground text-background">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-background/60" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-background/30 animate-ping" />
                  </div>
                  <span className="text-mono text-sm font-bold uppercase tracking-[0.2em]">
                    AVAILABLE FOR PROJECTS
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
