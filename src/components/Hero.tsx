import { ParticleField } from './ParticleField';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-5" />
      
      {/* Floating accent orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-accent/8 rounded-full blur-[80px] animate-float" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Top section with role badge */}
        <div 
          className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Creative Director & AI Enthusiast
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Main name - massive editorial typography */}
        <div className="relative mb-8">
          <h1 
            className="text-display text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-[0.85] tracking-[-0.04em] font-bold opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block overflow-hidden">
              {'DEVANSH'.split('').map((letter, i) => (
                <span 
                  key={i} 
                  className="inline-block hover:text-accent transition-colors duration-300 cursor-default"
                  style={{ 
                    animationDelay: `${0.3 + i * 0.05}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Decorative line under name */}
          <div 
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 animate-fade-in"
            style={{ 
              animationDelay: '0.5s',
              width: '40%'
            }}
          />
        </div>

        {/* Tagline with refined typography */}
        <div 
          className="max-w-2xl mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Building at the intersection of{' '}
            <span className="text-foreground font-normal">design</span>,{' '}
            <span className="text-foreground font-normal">technology</span>, and{' '}
            <span className="text-accent font-normal">artificial intelligence</span>.
          </p>
        </div>

        {/* Stats row - horizontal layout */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
            {[
              { value: '03', label: 'Years Experience' },
              { value: '04', label: 'Ventures Founded' },
              { value: '∞', label: 'Ideas Brewing' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative flex items-center gap-4 md:gap-6 bg-foreground/[0.02] backdrop-blur-sm border border-border/40 rounded-full px-6 py-4 md:px-8 md:py-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-500"
              >
                <span className="text-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-mono text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div 
          className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
