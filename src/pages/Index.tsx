import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/AboutSection";
import Contact from "@/components/ContactSection";
import { useInView } from "react-intersection-observer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-bg to-white">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;