import { ParticleField } from './ParticleField';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Background effects */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float" />
      
      <div className="relative z-10 max-w-6xl">
        {/* Accent dot */}
        <div 
          className="accent-dot mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        />
        
        {/* Eyebrow */}
        <p 
          className="text-mono text-sm tracking-widest uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          AI Enthusiast & Creative Director
        </p>
        
        {/* Main Title */}
        <h1 
          className="text-display text-[3.5rem] sm:text-7xl md:text-9xl lg:text-[11rem] leading-[0.9] tracking-tight mb-4 opacity-0 animate-fade-in text-shimmer"
          style={{ animationDelay: '0.3s' }}
        >
          {'DEVANSH'.split('').map((letter, i) => (
            <span 
              key={i} 
              className="inline-block animate-letter-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        {/* Accent line with gradient */}
        <div 
          className="w-32 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8 opacity-0 animate-fade-in animate-line-pulse"
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Subtitle */}
        <p 
          className="text-mono text-lg md:text-xl max-w-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Building at the intersection of <span className="text-foreground">design</span>, 
          <span className="text-foreground"> technology</span>, and 
          <span className="text-accent"> artificial intelligence</span>.
        </p>
        
        {/* Stats */}
        <div 
          className="mt-12 md:mt-20 opacity-0 animate-fade-in max-w-4xl"
          style={{ animationDelay: '0.7s' }}
        >
          {/* Mobile & Tablet: Responsive grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:hidden">
            {[
              { label: 'Years Experience', value: '03' },
              { label: 'Ventures Founded', value: '04' },
              { label: 'Ideas Brewing', value: '∞' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-foreground/5 border border-border/30 rounded-xl p-4 sm:p-8 text-center"
              >
                <p className="text-display text-5xl sm:text-7xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-mono text-[9px] sm:text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <div className="group relative border border-border/30 p-8 hover:border-foreground/50 transition-all duration-500 hover:bg-foreground/5">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Years Experience</p>
              <p className="text-display text-8xl font-bold text-foreground group-hover:text-foreground transition-colors">03</p>
              <div className="w-full h-px bg-gradient-to-r from-foreground/50 to-transparent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
            
            <div className="group relative border border-border/30 p-8 hover:border-foreground/50 transition-all duration-500 hover:bg-foreground/5">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Ventures Founded</p>
              <p className="text-display text-8xl font-bold text-foreground group-hover:text-foreground transition-colors">04</p>
              <div className="w-full h-px bg-gradient-to-r from-foreground/50 to-transparent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
            
            <div className="group relative border border-border/30 p-8 hover:border-foreground/50 transition-all duration-500 hover:bg-foreground/5">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Ideas Brewing</p>
              <p className="text-display text-8xl font-bold text-foreground group-hover:text-foreground transition-colors">∞</p>
              <div className="w-full h-px bg-gradient-to-r from-foreground/50 to-transparent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;