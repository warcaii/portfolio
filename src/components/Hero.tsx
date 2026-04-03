import { useEffect, useState } from 'react';
import InteractiveCanvas from './InteractiveCanvas';

const stats = [
  { value: '3+', label: 'Years' },
  { value: '04', label: 'Ventures' },
  { value: '50+', label: 'Projects' },
];

const pillars = ['Brand Systems', 'Product Design', 'AI Workflows'];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-28 pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.12), transparent 28%),
            radial-gradient(circle at 80% 30%, hsl(var(--foreground) / 0.06), transparent 26%),
            linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center px-6 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center lg:gap-10">
        <div className="text-center lg:text-left">
          <div
            className="mb-8 flex items-center justify-center gap-4 lg:justify-start"
            style={{
              animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none',
            }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-foreground/40" />
            <span className="text-mono text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
              Creative Director
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-foreground/40" />
          </div>

          <h1
            className="text-display text-[3.5rem] font-bold leading-[0.86] tracking-[-0.05em] text-foreground sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem]"
            style={{
              animation: mounted ? 'heroLetterIn 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both' : 'none',
              textShadow: '0 8px 30px hsl(var(--background) / 0.45)',
            }}
          >
            DEVANSH
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-mono text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
            style={{
              animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' : 'none',
            }}
          >
            Building at the intersection of <span className="font-medium text-foreground">design</span>,{' '}
            <span className="font-medium text-foreground">technology</span>, and{' '}
            <span className="font-medium text-foreground">AI</span>.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{
              animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' : 'none',
            }}
          >
            {pillars.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/70 bg-card/35 px-4 py-2 text-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <div
            className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md lg:max-w-lg"
            style={{
              animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both' : 'none',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/60 bg-card/20 px-3 py-4 text-center">
                <p className="text-display text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 lg:mt-0"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both' : 'none',
          }}
        >
          <div className="relative mx-auto h-[300px] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-border/60 bg-card/15 shadow-[0_20px_80px_hsl(var(--background)/0.28)] sm:h-[360px] lg:h-[500px]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 35%, hsl(var(--primary) / 0.2), transparent 22%),
                  radial-gradient(circle at 68% 58%, hsl(var(--foreground) / 0.08), transparent 24%),
                  linear-gradient(140deg, hsl(var(--background)), hsl(var(--card) / 0.45))
                `,
              }}
            />

            <InteractiveCanvas />

            <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-border/60 bg-background/75 px-3 py-1.5 text-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Interactive zone
            </div>
            <div className="pointer-events-none absolute bottom-5 right-5 rounded-full border border-border/60 bg-background/75 px-3 py-1.5 text-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Mobile scroll stays free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
