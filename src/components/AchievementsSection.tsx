import React, { useEffect, useState } from 'react';
import { Brain, PenTool, Lightbulb, Network, Code2 } from 'lucide-react';

const AchievementsSection = () => {
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

    const section = document.getElementById('achievements');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Brain,
      title: 'Google Arcade Certificate – GenAI24',
      description: 'Completed advanced GenAI training program',
      color: 'neon',
      delay: '0s'
    },
    {
      icon: PenTool,
      title: 'Cadenza Club – Graphic Designer',
      description: 'Creative leadership in campus design initiatives',
      color: 'magenta',
      delay: '0.1s'
    },
    {
      icon: Lightbulb,
      title: 'Ideathon Participation – Smart College Assistant',
      description: 'Innovative AI solution for educational enhancement',
      color: 'golden',
      delay: '0.2s'
    },
    {
      icon: Network,
      title: '10-Day Machine Learning Workshop',
      description: 'Advanced ML algorithms and implementation',
      color: 'electric',
      delay: '0.3s'
    },
    {
      icon: Code2,
      title: 'Programming Skills – C, Advanced Java, Python, DSA (eBox)',
      description: 'Comprehensive programming expertise across multiple languages',
      color: 'neon',
      delay: '0.4s'
    }
  ];

  return (
    <section id="achievements" className="min-h-screen matrix-bg py-20 flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 pulse-glow ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}>
            Achievements
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full animate-pulse" />
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.title}
                className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: achievement.delay }}
              >
                <div className="dark-glass-effect rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:rotate-1 breathing group-hover:electric-glow h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className={`p-6 rounded-full ${
                      achievement.color === 'neon' ? 'bg-neon/20 text-neon' :
                      achievement.color === 'electric' ? 'bg-electric/20 text-electric' :
                      achievement.color === 'magenta' ? 'bg-magenta/20 text-magenta' :
                      'bg-golden/20 text-golden'
                    } transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent size={40} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-poppins font-semibold text-white">
                      {achievement.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-300 font-inter">
                      {achievement.description}
                    </p>
                    
                    {/* Holographic Border */}
                    <div className={`w-full h-px ${
                      achievement.color === 'neon' ? 'bg-gradient-to-r from-transparent via-neon to-transparent' :
                      achievement.color === 'electric' ? 'bg-gradient-to-r from-transparent via-electric to-transparent' :
                      achievement.color === 'magenta' ? 'bg-gradient-to-r from-transparent via-magenta to-transparent' :
                      'bg-gradient-to-r from-transparent via-golden to-transparent'
                    } transition-all duration-500 group-hover:shadow-lg`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Footer Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-neon to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;