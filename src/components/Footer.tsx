import { ArrowUpRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:warcai@duck.com" },
  ];

  return (
    <footer id="contact" className="relative border-t border-foreground/[0.06] bg-background px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto py-20 md:py-28">
        {/* Big CTA */}
        <ScrollReveal direction="up">
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Let's work together 🤝
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.15} direction="up">
          <p className="text-mono text-base md:text-lg text-muted-foreground max-w-lg mb-10">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something great.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up">
          <a 
            href="mailto:warcai@duck.com" 
            className="group inline-flex items-center gap-3 glass rounded-full px-6 py-3 hover:shadow-[0_0_30px_hsl(0_0%_100%/0.08)] transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-mono text-sm text-foreground">warcai@duck.com</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </ScrollReveal>

        {/* Social row */}
        <ScrollReveal delay={0.35} direction="up">
          <div className="flex flex-wrap gap-3 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground glass rounded-full hover:text-foreground transition-all duration-300"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-foreground/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mono text-xs text-muted-foreground/50">
            © {currentYear} Devansh. All rights reserved.
          </p>
          <p className="text-mono text-xs text-muted-foreground/30">
            Think less · Create more
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
