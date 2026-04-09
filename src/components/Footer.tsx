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
    <footer className="relative border-t-[3px] border-foreground bg-background overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo + Tagline */}
          <div className="md:col-span-5 space-y-6">
            <ScrollReveal direction="up">
              <a href="#" className="inline-block">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="up">
              <p className="text-mono text-foreground/60 text-sm leading-relaxed max-w-sm">
                Building at the intersection of design, technology, and artificial intelligence. 
                Let's create something extraordinary together.
              </p>
            </ScrollReveal>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <ScrollReveal delay={0.1} direction="up">
              <h4 className="text-display text-xs tracking-[0.4em] uppercase text-foreground font-black mb-6">NAVIGATE</h4>
            </ScrollReveal>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <ScrollReveal key={link.label} delay={0.15 + index * 0.05} direction="left">
                  <li>
                    <a 
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground font-mono uppercase tracking-wider transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </a>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <ScrollReveal delay={0.1} direction="up">
              <h4 className="text-display text-xs tracking-[0.4em] uppercase text-foreground font-black mb-6">CONNECT</h4>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm text-foreground/60 border-[2px] border-foreground font-mono uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.3} direction="up">
          <div className="py-6 border-t-[2px] border-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-mono text-xs text-foreground/50 uppercase tracking-wider">
              © {currentYear} DEVANSH. ALL RIGHTS RESERVED.
            </p>
            <p className="text-mono text-xs text-foreground/30 uppercase tracking-wider">
              DESIGNED WITH PRECISION · BUILT WITH PURPOSE
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
