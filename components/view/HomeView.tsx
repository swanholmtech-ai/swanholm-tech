import HeroSection from "./home-sections/HeroSection";
import ProblemsSection from "./home-sections/ProblemsSection";
import SolutionSection from "./home-sections/SolutionSection";
import ROISection from "./home-sections/ROISection";
import TestimonialSection from "./home-sections/TestimonialSection";

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ROISection />
      <TestimonialSection />
    </>
  );
}
