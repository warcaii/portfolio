import logo from "@/assets/logo.png";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative border-t border-foreground/[0.08] bg-background overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <ScrollReveal direction="up">
              <a href="#" className="inline-block">
                <img src={logo} alt="Logo" className="h-10 w-auto opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300" />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="up">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Building at the intersection of design, technology, and artificial intelligence. 
                Let's create something extraordinary together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                <span className="w-2 h-2 bg-foreground/50 rounded-full animate-pulse shadow-[0_0_6px_hsl(0_0%_100%/0.3)]" />
                <span className="text-mono text-xs tracking-wide text-muted-foreground">Available for projects</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-3">
            <ScrollReveal delay={0.1} direction="up">
              <h4 className="text-mono text-xs tracking-widest uppercase text-muted-foreground/50 mb-6">Navigate</h4>
            </ScrollReveal>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <ScrollReveal key={link.label} delay={0.15 + index * 0.05} direction="left">
                  <li>
                    <a 
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <ScrollReveal delay={0.1} direction="up">
              <h4 className="text-mono text-xs tracking-widest uppercase text-muted-foreground/50 mb-6">Connect</h4>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm text-foreground/50 glass rounded-full hover:text-foreground hover:shadow-[0_0_25px_hsl(0_0%_100%/0.08)] transition-all duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.3} direction="up">
          <div className="py-6 border-t border-foreground/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-mono text-xs text-muted-foreground/50">
              © {currentYear} Devansh. All rights reserved.
            </p>
            <p className="text-mono text-xs text-muted-foreground/30">
              Designed with precision · Built with purpose
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
