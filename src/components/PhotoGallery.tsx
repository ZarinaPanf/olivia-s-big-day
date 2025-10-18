import photo1 from "@/assets/olivia-photo-1.jpeg";
import photo2 from "@/assets/olivia-photo-2.jpeg";

const PhotoGallery = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02]">
            <img 
              src={photo1} 
              alt="Оливия празднует свой первый день рождения" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02]">
            <img 
              src={photo2} 
              alt="Оливия - счастливая именинница" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
