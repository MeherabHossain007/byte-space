import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import CourseCatalog from "@/components/CourseCatalog";
import LearningPaths from "@/components/LearningPaths";
import StudentGrowthSection from "@/components/StudentGrowthSection";
import InstructorSection from "@/components/InstructorSection";
import CreatorCTA from "@/components/CreatorCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Partner Logos Bar */}
      <PartnerLogos />

      {/* 3. Discover Your Passion, Build Your Skills (Course Grid) */}
      <CourseCatalog />

      {/* 4. Explore Diverse Learning Paths */}
      <LearningPaths />

      {/* 5. Professional Growth (Student stats) */}
      <StudentGrowthSection />

      {/* 6. Create & Manage Courses Easily (Instructor perspective) */}
      <InstructorSection />

      {/* 7. Creator CTA Banner */}
      <CreatorCTA />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
