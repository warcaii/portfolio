import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Services", href: "#services" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-accent/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group">
          <img 
            src={logo} 
            alt="Devansh Logo" 
            className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`} 
          />
          <div className="absolute -inset-2 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-5 py-2 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-full transition-all duration-300" />
              <span 
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-full flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-0 bg-background transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-accent/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-full flex flex-col justify-center px-8">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-5xl font-display font-light text-foreground hover:text-accent transition-colors py-3"
                style={{ 
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.5s ease ${index * 0.1}s`
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-12 inline-flex items-center gap-3 text-accent text-lg"
            style={{ 
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: `all 0.5s ease 0.4s`
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;