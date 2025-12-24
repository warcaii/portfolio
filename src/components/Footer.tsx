import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 section-padding border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Devansh Logo" className="h-16 w-auto" />
          </a>
          
          {/* Credits */}
          <p className="text-mono text-xs text-muted-foreground text-center md:text-right">
            © 2024 Devansh. Designed with precision. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;