import { ArrowUpRight, Mail, Instagram, Twitter, Sparkles } from "lucide-react";
import { ScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: "warcai@duck.com",
      href: "mailto:warcai@duck.com",
      external: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@devansh.px",
      href: "https://www.instagram.com/devansh.px?igsh=bTZ3YnljZTFqMWx0",
      external: true,
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      value: "@GodWarcloud",
      href: "https://x.com/GodWarcloud",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] animate-breathe" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-foreground/[0.015] rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">04 — Contact</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left - CTA */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1} direction="left">
              <div className="relative">
                <h2 className="text-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8">
                  LET'S BUILD
                  <br />
                  <span className="text-gradient">SOMETHING</span>
                  <br />
                  <span className="relative inline-block">
                    AMAZING
                    <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-muted-foreground animate-pulse" />
                  </span>
                </h2>
                
                <p className="text-mono text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
                  Got a project in mind? Looking to collaborate on something innovative? 
                  I'm always open to discussing new ideas and creative opportunities.
                </p>

                {/* CTA Button */}
                <a
                  href="mailto:warcai@duck.com"
                  className="group inline-flex items-center gap-4 px-8 py-4 glass rounded-full hover:bg-foreground/[0.1] hover:shadow-[0_0_40px_hsl(0_0%_100%/0.08)] transition-all duration-500"
                >
                  <span className="text-mono font-medium text-foreground">Start a conversation</span>
                  <ArrowUpRight className="w-5 h-5 text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Social Cards */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2} direction="right">
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="group relative block p-5 glass rounded-2xl hover:shadow-[0_0_30px_hsl(0_0%_100%/0.05)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-foreground/[0.04] border border-foreground/[0.06] flex items-center justify-center group-hover:bg-foreground/[0.08] transition-colors duration-300">
                          <social.icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                            {social.label}
                          </p>
                          <p className="text-foreground/80 font-medium group-hover:text-foreground transition-colors text-sm">
                            {social.value}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="mt-6 p-4 glass rounded-xl border-dashed">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground/60" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-foreground/40 animate-ping" />
                  </div>
                  <span className="text-mono text-sm text-muted-foreground">
                    Currently available for new projects
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
