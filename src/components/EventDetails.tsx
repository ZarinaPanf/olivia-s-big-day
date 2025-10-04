import { MapPin, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-center mb-12" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Детали праздника
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)] transition-all hover:scale-105 hover:shadow-[var(--shadow-soft)]" style={{ transition: 'var(--transition-smooth)' }}>
          <CardContent className="pt-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'var(--gradient-primary)' }}>
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Дата</h3>
            <p className="text-lg text-muted-foreground">6 ноября</p>
            <p className="text-base text-muted-foreground">Четверг</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)] transition-all hover:scale-105 hover:shadow-[var(--shadow-soft)]" style={{ transition: 'var(--transition-smooth)' }}>
          <CardContent className="pt-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'var(--gradient-primary)' }}>
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Время</h3>
            <p className="text-2xl font-bold text-primary">18:30</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)] transition-all hover:scale-105 hover:shadow-[var(--shadow-soft)]" style={{ transition: 'var(--transition-smooth)' }}>
          <CardContent className="pt-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'var(--gradient-primary)' }}>
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Место</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Гончарная улица, 32<br />
              1 этаж, большой зал
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventDetails;
