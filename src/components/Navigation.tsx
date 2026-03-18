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
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Nav — pill shape like Rachel How */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-mono text-sm text-muted-foreground hover:text-foreground px-4 py-1.5 rounded-full hover:bg-foreground/[0.06] transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/[0.06] transition-all duration-300 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Snowflake className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setTheme(theme === "dark" ? "glacier" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/[0.06] transition-all duration-300 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Snowflake className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-foreground/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
