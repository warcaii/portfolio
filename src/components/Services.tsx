const services = [
  {
    number: "01",
    title: "GRAPHIC DESIGN",
    description: "Brand identity, visual systems, print & digital collateral crafted with precision and purpose.",
  },
  {
    number: "02",
    title: "VIDEO EDITING",
    description: "Compelling visual narratives through seamless editing, motion graphics, and color grading.",
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description: "Leveraging cutting-edge AI tools to enhance creative workflows and unlock new possibilities.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-40 section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">03</span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">Services</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 border border-border hover:bg-foreground hover:text-background transition-all duration-500 cursor-default"
            >
              <span className="text-mono text-xs text-muted-foreground group-hover:text-background/50 transition-colors">
                {service.number}
              </span>
              <h3 className="text-display text-3xl md:text-4xl mt-6 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-mono text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
