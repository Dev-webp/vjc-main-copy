"use client";
import dynamic from 'next/dynamic';
import Hero from "@/app/germany-opportunity-card/components/Hero";
import Footer from "@/app/germany-opportunity-card/components/Footer";

// Dynamically import non-critical components with { ssr: false } to ensure they load on the client side
const RoadmapComponent = dynamic(() => import("@/app/germany-opportunity-card/components/RoadmapComponent"), { ssr: false });
const Steps = dynamic(() => import("@/app/germany-opportunity-card/components/Steps"), { ssr: false });
const Requirements = dynamic(() => import("@/app/germany-opportunity-card/components/Requirements"), { ssr: false });
const Services = dynamic(() => import("@/app/germany-opportunity-card/components/Services"), { ssr: false });
const Why = dynamic(() => import("@/app/germany-opportunity-card/components/Why"), { ssr: false });
const Between = dynamic(() => import("@/app/germany-opportunity-card/components/Between"), { ssr: false });
const Book = dynamic(() => import("@/app/germany-opportunity-card/components/Book"), { ssr: false });
const Vjcinfo = dynamic(() => import("@/app/germany-opportunity-card/components/Vjcinfo"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Above-the-fold content */}
      <Hero />
      <RoadmapComponent />

      {/* Lazy-loaded components for better performance */}
      <Book />
      <Steps />
      <Between />
      <Requirements />
      <Services />
      <Why />
      <Vjcinfo />
      <Footer />

      {/* WhatsApp Icon (floating globally) */}
      {/* <a
        href="https://wa.me/+919160449000" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 bg-[#25D366] p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 z-[9999] animate-bounce"
      >
        <FaWhatsapp size={40} color="white" />
      </a> */}

    </>
  );
}
