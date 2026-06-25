import { useEffect } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Pitch from "./sections/Pitch";
import FeatureGrid from "./sections/FeatureGrid";
import AiSection from "./sections/AiSection";
import VideoSection from "./sections/VideoSection";
import Workflow from "./sections/Workflow";
import Formats from "./sections/Formats";
import Faq from "./sections/Faq";
import CtaBand from "./sections/CtaBand";
import Footer from "./sections/Footer";

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

export default function Landing() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Pitch />
      <FeatureGrid />
      <AiSection />
      <VideoSection />
      <Workflow />
      <Formats />
      <Faq />
      <CtaBand />
      <Footer />
    </div>
  );
}
