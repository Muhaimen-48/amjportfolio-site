import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ResearchSection } from "@/components/research-section";
import { PublicationsSection } from "@/components/publications-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { LeadershipSection } from "@/components/leadership-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ResearchMap } from "@/components/research-map";
import { PhotoGallery } from "@/components/photo-gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ResearchMap />
        <PublicationsSection />
        <SkillsSection />
        <EducationSection />
        <LeadershipSection />
        <PhotoGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
