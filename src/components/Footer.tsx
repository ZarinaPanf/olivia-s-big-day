import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
          <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.3s' }} />
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.6s' }} />
        </div>
        
        <p className="font-handwriting text-3xl md:text-4xl mb-4" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Будем рады видеть вас!
        </p>
        
        <p className="text-lg text-muted-foreground">
          Оливия, её сестра Амелия и родители
        </p>
      </div>
    </footer>
  );
};

export default Footer;
