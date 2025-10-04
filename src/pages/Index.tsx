import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import AboutOlivia from "@/components/AboutOlivia";
import GiftIdeas from "@/components/GiftIdeas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <AboutOlivia />
      <GiftIdeas />
      <Footer />
    </div>
  );
};

export default Index;
