import React, { useEffect, useState } from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const HireMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('hire');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/punna-gurunanda-653432312/',
      color: 'electric',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      url: 'https://github.com/gurunanda2006',
      color: 'neon',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/gurunandapunna/',
      color: 'magenta',
      label: 'Instagram'
    }
  ];

  return (
    <section id="hire" className="min-h-screen bg-background py-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Social Links */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-8">
              Connect with me
            </h3>
            
            <div className="flex flex-col space-y-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-4 p-4 rounded-2xl bg-muted/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 floating-shadow ${
                      social.color === 'electric' ? 'hover:electric-glow' :
                      social.color === 'neon' ? 'hover:neon-glow' :
                      'hover:magenta-glow'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-4 rounded-xl ${
                      social.color === 'electric' ? 'bg-electric/20 text-electric' :
                      social.color === 'neon' ? 'bg-neon/20 text-neon' :
                      'bg-magenta/20 text-magenta'
                    } transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent size={32} />
                    </div>
                    
                    <span className="text-xl font-inter font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Hire Text */}
          <div className={`text-center md:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              {/* Large HIRE text */}
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-foreground leading-none">
                HIRE
              </h2>
              
              {/* Stylized "me" text */}
              <div className="relative">
                <h3 className="text-4xl md:text-6xl font-inter italic hero-gradient-text font-light -mt-4">
                  me
                </h3>
              </div>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground font-inter max-w-md mx-auto md:mx-0 mt-8">
                If my skills and expertise match your needs
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center md:justify-start space-x-4 mt-8">
                <div className="w-12 h-1 bg-neon rounded-full" />
                <div className="w-8 h-1 bg-electric rounded-full" />
                <div className="w-6 h-1 bg-magenta rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;