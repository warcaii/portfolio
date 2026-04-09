import { useState, useEffect } from "react";
import { Menu, X, Moon, Snowflake } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTheme } from "@/hooks/useTheme";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-sm border-[2px] border-foreground px-6 py-2'
            : 'px-2'
        }`}>
          {/* Logo */}
          <a 
            href="#" 
            className={`flex items-center gap-2 transition-all duration-300 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <img src={logo} alt="Logo" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-0 transition-all duration-300 ${
            scrolled ? '' : 'ml-auto'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-mono text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground hover:bg-foreground/[0.05] px-4 py-2 transition-all duration-200 font-bold"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
              className="ml-2 p-2 hover:bg-foreground/[0.05] transition-all duration-200 text-foreground/50 hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Snowflake className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
              className="p-2 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Snowflake className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background border-[2px] border-foreground p-6 space-y-0">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-4 py-4 border-b-[2px] border-foreground/20 last:border-0 transition-all duration-200 hover:bg-foreground hover:text-background hover:px-4"
            >
              <span className="text-mono text-xs text-foreground/40 group-hover:text-background/50 font-bold transition-colors">
                0{index + 1}
              </span>
              <span className="text-display text-2xl font-black tracking-tight uppercase group-hover:text-background transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
