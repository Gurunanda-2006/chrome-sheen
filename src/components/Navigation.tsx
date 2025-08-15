import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'work', 'experience', 'achievements', 'contact', 'hire'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact Me' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect backdrop-blur-lg' 
          : activeSection === 'home' 
            ? 'bg-background' 
            : 'glass-effect backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left - Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled || activeSection !== 'home' 
                ? 'text-foreground hover:neon-glow' 
                : 'text-foreground hover:bg-muted'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-inter font-medium transition-all duration-300 relative px-3 py-2 ${
                  activeSection === link.id
                    ? 'text-neon'
                    : isScrolled || activeSection !== 'home'
                      ? 'text-foreground hover:text-neon'
                      : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon animate-scale-in" />
                )}
              </button>
            ))}
          </div>

          {/* Right - Download Resume Button */}
          <Button
            variant="default"
            className="bg-golden text-dark-navy hover:bg-golden/90 hover:scale-105 transition-all duration-300 font-inter font-semibold rounded-full px-6 golden-glow"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1zwfjKPzVfcpfmBk-Czf4-KgqQeVwQFCs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-dark-navy/90 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)} />
          <div className="relative bg-background/95 backdrop-blur-xl h-full w-80 p-6 animate-slide-in-left">
            <div className="mt-16 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left font-inter font-medium text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-neon bg-neon/10'
                      : 'text-foreground hover:text-neon hover:bg-neon/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;