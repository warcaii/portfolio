import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 md:py-40 section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">04</span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              LET'S<br />
              CREATE<br />
              TOGETHER
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-mono text-base text-muted-foreground leading-relaxed mb-12">
              Got a project in mind? Looking to collaborate on something innovative? 
              I'm always open to discussing new ideas and creative opportunities.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@devansh.com"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-mono text-sm">hello@devansh.com</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-mono text-sm">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-mono text-sm">Twitter / X</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
