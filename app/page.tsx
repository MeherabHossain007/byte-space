import HeroSection from "@/components/sections/HeroSection";
import PartnerLogos from "@/components/sections/PartnersSection";
import CourseCatalog from "@/components/sections/CourseSection";
import LearningPaths from "@/components/sections/LearningPathsSection";
import StudentGrowthSection from "@/components/sections/StudentGrowthSection";
import CreatorCTA from "@/components/CreatorCTA";
import TestimonialsSection from "@/components/TestimonialsSection";

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

      {/* 5. Professional Growth & Creator Section */}
      <StudentGrowthSection />

      {/* 6. Creator CTA Banner */}
      <CreatorCTA />

      {/* 7. Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
