import { Card } from "@/components/ui/card";

const MapSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-center mb-12" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Как нас найти
      </h2>
      
      <Card className="overflow-hidden border-2 border-primary/20 shadow-[var(--shadow-card)]">
        <div className="relative w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.1707853716!2d37.65361731588396!3d55.75339998055517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a28a38c29%3A0x1e5c3f7e7e7e7e7e!2z0JPQvtC90YfQsNGA0L3QsNGPINGD0LsuLCAzMiwg0JzQvtGB0LrQstCwLCAxMDkwNzI!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта местоположения ресторана"
          />
        </div>
        <div className="p-6 bg-card">
          <p className="text-center text-lg font-medium text-foreground">
            📍 Гончарная улица, 32, 1 этаж, большой зал
          </p>
        </div>
      </Card>
    </section>
  );
};

export default MapSection;
