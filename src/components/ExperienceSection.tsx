import React, { useEffect, useState } from 'react';
import { Briefcase, Users, Code, Target } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: Briefcase,
      title: 'Graphic Designer',
      company: 'TheGoodGameTheory',
      period: 'Nov 4, 2024 – May 4, 2025',
      color: 'neon',
      delay: '0s'
    },
    {
      icon: Users,
      title: 'HR Intern',
      company: 'TEN',
      period: 'Jan 23, 2025 – Apr 23, 2025',
      color: 'electric',
      delay: '0.1s'
    },
    {
      icon: Code,
      title: 'Frontend Developer',
      company: 'Me Matdhar',
      period: 'Jun 23, 2025 – Sep 23, 2025',
      color: 'magenta',
      delay: '0.2s'
    },
    {
      icon: Target,
      title: 'Lead Graphic Designer',
      company: 'CADENZA Club (Campus)',
      period: 'Ongoing',
      color: 'golden',
      delay: '0.3s'
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-background py-20 flex items-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-4 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}>
            💼 My Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.title}
                className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: exp.delay }}
              >
                <div className="bg-muted/30 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 floating-shadow hover:neon-glow">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl ${
                      exp.color === 'neon' ? 'bg-neon/20 text-neon' :
                      exp.color === 'electric' ? 'bg-electric/20 text-electric' :
                      exp.color === 'magenta' ? 'bg-magenta/20 text-magenta' :
                      'bg-golden/20 text-golden'
                    } transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent size={32} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-poppins font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-inter font-medium text-primary mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground font-inter">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className={`w-0 h-1 mt-6 ${
                    exp.color === 'neon' ? 'bg-neon' :
                    exp.color === 'electric' ? 'bg-electric' :
                    exp.color === 'magenta' ? 'bg-magenta' :
                    'bg-golden'
                  } transition-all duration-500 group-hover:w-full rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;