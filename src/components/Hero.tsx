import { Cake } from "lucide-react";
import heroImage from "@/assets/hero-birthday.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-soft)' }} />
      
      <div className="relative z-10 text-center px-4 py-12 animate-in fade-in duration-1000">
        <div className="inline-flex items-center justify-center mb-6">
          <Cake className="w-16 h-16 text-primary animate-pulse" />
        </div>
        
        <h1 className="font-handwriting text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Оливии 1 годик!
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/80 font-light mb-8">
          Приглашаем вас разделить с нами радость
        </p>
        
        <div className="inline-block p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] backdrop-blur-sm border border-primary/20">
          <p className="text-xl md:text-2xl font-medium text-primary mb-2">
            6 ноября, четверг
          </p>
          <p className="text-3xl md:text-4xl font-bold" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            18:30
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-secondary/10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-accent/10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
    </section>
  );
};

export default Hero;
