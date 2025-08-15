import React, { useEffect, useState } from 'react';
import { Code, Palette, Bot } from 'lucide-react';

const WorkHubSection = () => {
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

    const section = document.getElementById('work');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workItems = [
    {
      title: 'Web Development',
      icon: Code,
      targetSection: 'experience',
      delay: '0s',
      color: 'neon'
    },
    {
      title: 'Designing',
      icon: Palette,
      targetSection: 'achievements',
      delay: '0.2s',
      color: 'magenta'
    },
    {
      title: 'Automations',
      icon: Bot,
      targetSection: 'contact',
      delay: '0.4s',
      color: 'electric'
    }
  ];

  return (
    <section id="work" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dark-navy/40 relative">
          {/* Video Background Placeholder with animated overlay */}
          <div className="absolute inset-0 matrix-bg opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/60 via-transparent to-electric/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 animate-fade-in-down">
            Work Hub
          </h2>

          {/* Work Items Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {workItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: item.delay }}
                  onClick={() => scrollToSection(item.targetSection)}
                >
                  <div className="dark-glass-effect rounded-2xl p-8 md:p-12 transition-all duration-500 hover:scale-105 hover:rotate-1 breathing group-hover:neon-glow">
                    <div className="flex flex-col items-center space-y-6">
                      {/* Icon */}
                      <div className={`p-6 rounded-full ${
                        item.color === 'neon' ? 'bg-neon/20 text-neon' :
                        item.color === 'magenta' ? 'bg-magenta/20 text-magenta' :
                        'bg-electric/20 text-electric'
                      } transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent size={48} className="transition-all duration-300" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-inter font-semibold text-white">
                        {item.title}
                      </h3>
                      
                      {/* Hover Effect Line */}
                      <div className={`w-0 h-1 ${
                        item.color === 'neon' ? 'bg-neon' :
                        item.color === 'magenta' ? 'bg-magenta' :
                        'bg-electric'
                      } transition-all duration-500 group-hover:w-full rounded-full`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHubSection;