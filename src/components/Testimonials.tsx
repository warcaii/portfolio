import { Quote } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Devansh has an incredible eye for design. His work on our gaming brand identity exceeded all expectations and truly captured our community's spirit.",
    name: "Alex Chen",
    role: "Founder, Nexus Gaming",
    highlight: true,
  },
  {
    quote: "Working with Devansh on WARCAI was a game-changer. His understanding of AI combined with creative vision made our product stand out in a crowded market.",
    name: "Sarah Mitchell",
    role: "CEO, Brain.ai",
  },
  {
    quote: "The video edits Devansh delivered were nothing short of cinematic. He transformed our raw footage into compelling stories that resonated with our audience.",
    name: "Marcus Rivera",
    role: "Content Director, Team Rare",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 md:py-48 section-padding bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <div className="accent-dot" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">05 — Testimonials</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-20">
            WHAT PEOPLE<br /><span className="text-gradient">SAY</span>
          </h2>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.15 + index * 0.1}>
              <div 
                className={`group p-8 h-full flex flex-col border transition-all duration-500 ${
                  testimonial.highlight 
                    ? "border-accent/50 bg-accent/5" 
                    : "border-border bg-card hover:border-accent/30"
                }`}
              >
                {/* Quote icon */}
                <Quote className={`w-8 h-8 mb-6 ${testimonial.highlight ? "text-accent" : "text-muted-foreground"}`} />
                
                {/* Quote text */}
                <p className="text-mono text-sm leading-relaxed text-muted-foreground flex-1 mb-8">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <p className={`text-display text-lg ${testimonial.highlight ? "text-accent" : "text-foreground"}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-mono text-xs text-muted-foreground mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;