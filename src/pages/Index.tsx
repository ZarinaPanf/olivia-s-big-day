import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import MapSection from "@/components/MapSection";
import GiftIdeas from "@/components/GiftIdeas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <MapSection />
      <GiftIdeas />
      <Footer />
    </div>
  );
};

export default Index;
