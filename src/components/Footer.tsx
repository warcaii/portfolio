import logo from "@/assets/logo.png";
import { ArrowUpRight } from "lucide-react";

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
    <footer className="relative border-t border-border/30 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <img src={logo} alt="Devansh Logo" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Building at the intersection of design, technology, and artificial intelligence. 
              Let's create something extraordinary together.
            </p>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border/50 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-mono text-xs tracking-wide text-muted-foreground">Available for projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">Connect</h4>
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <li 
                  key={link.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <a 
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm text-foreground/80 
                      border border-border/40 rounded-full
                      bg-background/50 backdrop-blur-sm
                      shadow-[0_0_8px_rgba(255,255,255,0.05)]
                      hover:shadow-[0_0_16px_rgba(255,255,255,0.12)]
                      hover:border-accent/40 hover:text-accent
                      hover:-translate-y-0.5
                      transition-all duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mono text-xs text-muted-foreground">
            © {currentYear} Devansh. All rights reserved.
          </p>
          <p className="text-mono text-xs text-muted-foreground/60">
            Designed with precision · Built with purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;