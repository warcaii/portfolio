import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className={`max-w-5xl mx-auto px-4 transition-all duration-500 ${
        scrolled ? 'px-4' : 'px-6'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'glass-nav rounded-2xl px-6 py-2.5 shadow-[0_8px_32px_hsl(0_0%_0%/0.4)]'
            : 'px-2'
        }`}>
          {/* Logo */}
          <a 
            href="#" 
            className={`flex items-center gap-2 transition-all duration-500 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <img src={logo} alt="Logo" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-300 ${
            scrolled ? '' : 'ml-auto'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-foreground/[0.05] transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
              className="ml-2 p-2 rounded-lg hover:bg-foreground/[0.05] transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
              className="p-2 rounded-lg hover:bg-foreground/[0.05] transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-foreground/[0.05] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-heavy rounded-2xl p-6 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-4 py-4 border-b border-foreground/[0.06] last:border-0 transition-all duration-300 hover:pl-2"
            >
              <span className="text-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                0{index + 1}
              </span>
              <span className="text-display text-2xl font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
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
