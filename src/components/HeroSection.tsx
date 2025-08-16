import React from 'react';
import profilePhoto from '@/assets/gurunanda-profile.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24 max-w-7xl mx-auto">
          
          {/* Left Side - 2 Titles with simple animations */}
          <div className="flex-shrink-0 hidden lg:flex flex-col gap-16 md:gap-20 lg:gap-24 ml-8 md:ml-12 lg:ml-16">
            {/* Top Left Title - Web Developer */}
            <div className="text-center transform -translate-x-4 -translate-y-2 animate-slide-in-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins italic text-muted-foreground opacity-80 transform -rotate-6">
                Web Developer
              </h2>
            </div>
            
            {/* Bottom Left Title - Automator */}
            <div className="text-center transform translate-x-2 translate-y-4 animate-slide-in-left-delayed">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins italic text-muted-foreground opacity-80 transform rotate-8">
                Automator
              </h2>
            </div>
          </div>
          
          {/* Center - Large Profile Photo with perfect centering */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
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
            
            {/* Name and Title below the image - perfectly centered */}
            <div className="text-center mt-8 space-y-4 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold tracking-[0.2em] text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-8 py-4 rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                GURUNANDA
              </h1>
              <p className="text-xl md:text-2xl font-inter italic text-electric font-light">
                AI Enthusiast
              </p>
            </div>
          </div>
          
          {/* Right Side - 2 Titles with simple animations */}
          <div className="flex-shrink-0 hidden lg:flex flex-col gap-16 md:gap-20 lg:gap-24 mr-8 md:mr-12 lg:mr-16">
            {/* Top Right Title - Designer */}
            <div className="text-center transform translate-x-4 -translate-y-2 animate-slide-in-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins italic text-muted-foreground opacity-80 transform rotate-6">
                Designer
              </h2>
            </div>
            
            {/* Bottom Right Title - Coder */}
            <div className="text-center transform -translate-x-2 translate-y-4 animate-slide-in-right-delayed">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins italic text-muted-foreground opacity-80 transform -rotate-8">
                Coder
              </h2>
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet Titles - Displayed below the image with simple animations */}
        <div className="lg:hidden mt-16 px-4">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="text-center transform -translate-y-2 animate-slide-in-up">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins italic text-muted-foreground opacity-80 transform -rotate-6">
                Web Developer
              </h2>
            </div>
            <div className="text-center transform translate-y-2 animate-slide-in-up-delayed">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins italic text-muted-foreground opacity-80 transform rotate-6">
                Designer
              </h2>
            </div>
            <div className="text-center transform translate-y-2 animate-slide-in-up-delayed-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins italic text-muted-foreground opacity-80 transform rotate-6">
                Automator
              </h2>
            </div>
            <div className="text-center transform -translate-y-2 animate-slide-in-up-delayed-3">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins italic text-muted-foreground opacity-80 transform -rotate-6">
                Coder
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;