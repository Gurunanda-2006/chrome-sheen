import React from 'react';
import profilePhoto from '@/assets/gurunanda-profile.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Animated Title Words */}
        <div className="relative max-w-6xl mx-auto">
          {/* Designer - Top Left */}
          <div className="absolute -top-16 -left-32 md:-top-24 md:-left-48 lg:-top-32 lg:-left-64">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins italic text-muted-foreground parallax-drift opacity-80 transform -rotate-12">
              Designer
            </h2>
          </div>
          
          {/* Automator - Bottom Left */}
          <div className="absolute -bottom-16 -left-32 md:-bottom-24 md:-left-48 lg:-bottom-32 lg:-left-64">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins italic text-muted-foreground parallax-drift opacity-80 transform rotate-12">
              Automator
            </h2>
          </div>
          
          {/* Web Developer - Top Right */}
          <div className="absolute -top-16 -right-32 md:-top-24 md:-right-48 lg:-top-32 lg:-right-64">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins italic text-muted-foreground parallax-drift opacity-80 transform rotate-12">
              Web Developer
            </h2>
          </div>
          
          {/* Coder - Bottom Right */}
          <div className="absolute -bottom-16 -right-32 md:-bottom-24 md:-right-48 lg:-bottom-32 lg:-right-64">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins italic text-muted-foreground parallax-drift opacity-80 transform -rotate-12">
              Coder
            </h2>
          </div>
          
          {/* Central Profile Photo */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon via-electric to-magenta animate-spin-slow opacity-75 blur-sm" 
                   style={{ animation: 'spin 8s linear infinite' }} />
              <img
                src={profilePhoto}
                alt="Gurunanda - AI Enthusiast"
                className="relative w-full h-full rounded-full object-cover border-4 border-background floating-shadow"
                onError={(e) => {
                  console.error('Failed to load profile image');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-orbitron font-bold tracking-[0.2em] metallic-text">
                GURUNANDA
              </h1>
              <p className="text-xl md:text-2xl font-inter italic text-electric font-light">
                AI Enthusiast
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;