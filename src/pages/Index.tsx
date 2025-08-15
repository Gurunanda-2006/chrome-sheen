import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WorkHubSection from '@/components/WorkHubSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import HireMeSection from '@/components/HireMeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <main>
        <HeroSection />
        <WorkHubSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <HireMeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
