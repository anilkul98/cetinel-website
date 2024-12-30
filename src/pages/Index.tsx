import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/AboutSection";
import Contact from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-bg to-white">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;