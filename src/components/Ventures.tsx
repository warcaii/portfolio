import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "WARCAI",
    description: "An intelligent AI platform with dual capabilities: a smart chat agent that aggregated multiple AI APIs to deliver the best response for each query, and an advanced image generation system. Operations closed after 1 year.",
    role: "Founder",
    year: "2023–2024",
  },
  {
    name: "TEAM OG",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities. Operations closed in 2022.",
    role: "Co-Founder",
    year: "2022",
  },
  {
    name: "REITZ",
    description: "A small design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    role: "Founder",
    year: "2022–2023",
  },
  {
    name: "TEAM RARE",
    description: "My longest venture — started as a designer for 4 months before becoming a partner for 6 months. Left in 2022 to co-found Team OG, bringing valuable experience in creative direction and brand development.",
    role: "Designer → Partner",
    year: "2021–2022",
  },
];

const Ventures = () => {
  return (
    <section className="py-24 md:py-40 section-padding bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-mono text-xs tracking-widest uppercase text-background/50">02</span>
          <div className="h-px flex-1 bg-background/20" />
          <span className="text-mono text-xs tracking-widest uppercase text-background/50">Ventures</span>
        </div>

        <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-20">
          STARTUPS &<br />VENTURES
        </h2>

        {/* Ventures List */}
        <div className="space-y-0">
          {ventures.map((venture, index) => (
            <div
              key={venture.name}
              className="group py-10 border-t border-background/20 last:border-b cursor-pointer hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-mono text-xs text-background/50">0{index + 1}</span>
                    <h3 className="text-display text-4xl md:text-5xl group-hover:tracking-wider transition-all duration-500">
                      {venture.name}
                    </h3>
                  </div>
                  <p className="text-mono text-sm text-background/60 max-w-lg leading-relaxed">
                    {venture.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-mono text-xs text-background/50 uppercase tracking-wider">{venture.role}</p>
                    <p className="text-mono text-sm">{venture.year}</p>
                  </div>
                  <div className="w-12 h-12 border border-background/30 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
