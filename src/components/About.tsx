import { ScrollReveal } from '@/hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';

const TerminalText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, text, delay]);

  return (
    <span ref={ref} className="text-mono">
      {displayed}
      <span className="animate-pulse text-foreground/60">▌</span>
    </span>
  );
};

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

const About = () => {
  const capabilities = [
    { id: 'GFX', name: 'Graphic Design', status: 'ACTIVE' },
    { id: 'VFX', name: 'Video Editing', status: 'ACTIVE' },
    { id: 'AIX', name: 'AI Integration', status: 'ACTIVE' },
    { id: 'BRD', name: 'Brand Identity', status: 'ACTIVE' },
  ];

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
                Where code
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
                  operating at the intersection of artificial intelligence and visual design. Three years of 
                  crafting experiences that feel both human and futuristic.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Terminal card — spans 5 cols */}
          <div className="md:col-span-5 flex items-end">
            <ScrollReveal delay={0.3} direction="right">
              <div className="glass rounded-2xl overflow-hidden w-full border border-foreground/[0.06]">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-foreground/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <span className="text-mono text-[9px] tracking-widest uppercase text-muted-foreground/40 ml-3">
                    devansh.sys
                  </span>
                </div>
                {/* Terminal body */}
                <div className="p-5 md:p-6 space-y-3 text-sm">
                  <div className="text-muted-foreground/40">
                    <span className="text-foreground/60">$</span>{' '}
                    <TerminalText text="cat profile.json" delay={200} />
                  </div>
                  <div className="pl-4 space-y-1.5 text-muted-foreground/70 text-mono text-xs leading-relaxed">
                    <p>{'{'}</p>
                    <p className="pl-3">
                      <span className="text-foreground/50">"role"</span>: <span className="text-foreground/80">"Creative Director"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-foreground/50">"focus"</span>: <span className="text-foreground/80">"Design × AI"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-foreground/50">"experience"</span>: <span className="text-foreground/80">"3+ years"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-foreground/50">"philosophy"</span>: <span className="text-foreground/80">"Technology amplifies vision"</span>
                    </p>
                    <p>{'}'}</p>
                  </div>
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

        {/* Capabilities table — tech-forward grid */}
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

          {/* Capabilities — 7 cols */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.3} direction="right">
              <div className="glass rounded-2xl overflow-hidden border border-foreground/[0.06]">
                {/* Table header */}
                <div className="grid grid-cols-12 px-5 md:px-7 py-3 border-b border-foreground/[0.06] text-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">
                  <span className="col-span-2">ID</span>
                  <span className="col-span-7">Module</span>
                  <span className="col-span-3 text-right">Status</span>
                </div>
                {/* Table rows */}
                {capabilities.map((cap, i) => (
                  <div
                    key={cap.id}
                    className="group grid grid-cols-12 px-5 md:px-7 py-4 border-b border-foreground/[0.04] last:border-0 hover:bg-foreground/[0.02] transition-colors duration-300 cursor-default"
                  >
                    <span className="col-span-2 text-mono text-xs text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                      {cap.id}
                    </span>
                    <span className="col-span-7 text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      {cap.name}
                    </span>
                    <span className="col-span-3 text-right flex items-center justify-end gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 group-hover:bg-green-400 group-hover:shadow-[0_0_6px_rgba(74,222,128,0.5)] transition-all duration-300" />
                      <span className="text-mono text-[10px] tracking-wider text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                        {cap.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;