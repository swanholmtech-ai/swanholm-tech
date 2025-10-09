import HeroSection from "./home-sections/HeroSection";
import ProblemsSection from "./home-sections/ProblemsSection";
import SolutionSection from "./home-sections/SolutionSection";
import ROISection from "./home-sections/ROISection";
import TestimonialSection from "./home-sections/TestimonialSection";
import CredibilitySection from "./home-sections/CredibilitySection";
import NewsSection from "./home-sections/NewsSection";

export default function HomeView() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen">
        <HeroSection />
      </section>

      <section className="snap-start h-screen">
        <ProblemsSection />
      </section>

      <section className="snap-start h-screen">
        <SolutionSection />
      </section>

      <section className="snap-start h-screen">
        <ROISection />
      </section>

      <section className="snap-start h-screen">
        <TestimonialSection />
      </section>

      <section className="snap-start h-screen">
        <CredibilitySection />
      </section>

      <section className="snap-start h-screen">
        <NewsSection />
      </section>
    </main>
  );
}
