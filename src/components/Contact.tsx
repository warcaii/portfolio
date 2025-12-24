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
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">04 — Contact</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left - Big CTA */}
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
                    <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-accent animate-pulse" />
                  </span>
                </h2>
                
                <p className="text-mono text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
                  Got a project in mind? Looking to collaborate on something innovative? 
                  I'm always open to discussing new ideas and creative opportunities.
                </p>

                {/* Primary CTA */}
                <a
                  href="mailto:warcai@duck.com"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all hover:scale-105"
                >
                  <span className="text-mono font-medium">Start a conversation</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Social Cards */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2} direction="right">
              <div className="space-y-4">
                {socials.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="group relative block p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent group-hover:h-12 transition-all" />
                      <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-accent/50 to-transparent group-hover:w-12 transition-all" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <social.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {social.label}
                          </p>
                          <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                            {social.value}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Availability indicator */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="mt-8 p-4 border border-dashed border-accent/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping" />
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