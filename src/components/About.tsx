import { ScrollReveal } from '@/hooks/useScrollReveal';

const DataMetric = ({ value, label, suffix = '' }: { value: string; label: string; suffix?: string }) => (
  <div className="group cursor-default">
    <div className="flex items-baseline gap-1">
      <span className="text-display text-5xl md:text-7xl font-bold text-foreground group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500">
        {value}
      </span>
      {suffix && (
        <span className="text-display text-2xl md:text-3xl font-bold text-foreground/50">{suffix}</span>
      )}
    </div>
    <div className="mt-2 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />
      <span className="text-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
        {label}
      </span>
    </div>
  </div>
);

const timelineEvents = [
  { year: '2022', title: 'Creative Spark', desc: 'Discovered the power of visual storytelling through graphic design.' },
  { year: '2023', title: 'Motion & Brand', desc: 'Expanded into video editing and brand identity — building visual worlds.' },
  { year: '2024', title: 'AI × Design', desc: 'Integrated AI tools into creative workflows, pushing boundaries of what\'s possible.' },
  { year: '2025', title: 'Ventures & Vision', desc: 'Launching ventures at the intersection of design, technology, and AI.' },
];

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-foreground/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20 md:mb-28">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">01 — About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Editorial Hero — asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-20 md:mb-32">
          {/* Large statement - spans 7 cols */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-foreground mb-8">
                Where vision
                <br />
                meets
                <br />
                <span className="text-gradient">craft.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="max-w-lg mt-10">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
                  I'm <span className="text-foreground font-semibold">Devansh</span> — a creative director 
                  passionate about graphic design, video editing, and AI-driven creativity. Three years of 
                  crafting experiences that feel both human and futuristic.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Journey Timeline — spans 5 cols */}
          <div className="md:col-span-5 flex items-end">
            <ScrollReveal delay={0.3} direction="right">
              <div className="w-full relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent" />

                <div className="space-y-8">
                  {timelineEvents.map((event, i) => (
                    <div key={event.year} className="group relative cursor-default">
                      {/* Dot on the line */}
                      <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full border border-foreground/30 bg-background group-hover:bg-foreground/20 group-hover:border-foreground/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-400" />
                      
                      <div className="flex items-baseline gap-3 mb-1.5">
                        <span className="text-mono text-[10px] tracking-[0.25em] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors duration-300">
                          {event.year}
                        </span>
                        <span className="text-display text-base md:text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {event.title}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/50 group-hover:text-muted-foreground/70 leading-relaxed transition-colors duration-300">
                        {event.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Data metrics row */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32 py-10 border-t border-b border-foreground/[0.06]">
            <DataMetric value="3" suffix="+" label="Years Active" />
            <DataMetric value="4" suffix="" label="Ventures Built" />
            <DataMetric value="50" suffix="+" label="Projects Delivered" />
            <DataMetric value="∞" suffix="" label="Ideas Brewing" />
          </div>
        </ScrollReveal>

        {/* Bottom section: quote + skills */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Pull quote — 5 cols */}
          <div className="md:col-span-5 flex items-center">
            <ScrollReveal delay={0.2} direction="left">
              <blockquote className="relative pl-6 border-l-2 border-foreground/20">
                <p className="text-xl md:text-2xl lg:text-3xl leading-snug text-foreground/90 font-light italic">
                  "The best designs emerge when technology amplifies human vision."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-foreground/30" />
                  <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
                    Devansh
                  </span>
                </div>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Creative expertise — 7 cols */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.3} direction="right">
              <div className="glass rounded-2xl overflow-hidden border border-foreground/[0.06] p-6 md:p-8">
                <p className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
                  Creative Expertise
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '◈', name: 'Graphic Design', detail: 'Visual identity & layout' },
                    { icon: '▶', name: 'Video Editing', detail: 'Motion & storytelling' },
                    { icon: '✦', name: 'AI Tools', detail: 'Generative workflows' },
                    { icon: '◉', name: 'Brand Identity', detail: 'Strategy & systems' },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="group glass rounded-xl p-4 cursor-default hover:bg-foreground/[0.03] transition-all duration-300 border border-foreground/[0.04] hover:border-foreground/[0.1]"
                    >
                      <span className="text-lg text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300 block mb-2">
                        {skill.icon}
                      </span>
                      <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </p>
                      <p className="text-mono text-[10px] text-muted-foreground/40 mt-1">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;