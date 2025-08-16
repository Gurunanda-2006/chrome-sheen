import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WebDevelopmentProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('web-development-projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'LinkShrink CGN',
      description: 'A modern URL shortening service with analytics and custom domains. Built with Next.js, TypeScript, and Tailwind CSS.',
      image: '/placeholder.svg',
      liveUrl: 'https://tempo-deployment-066c3fe5-7238-486d-a41c-604803-cgn-8s-projects.vercel.app/',
      githubUrl: '#',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'Full Stack',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React, TypeScript, and Tailwind CSS.',
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Frontend',
      featured: false
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      featured: false
    }
  ];

  const goBack = () => {
    navigate('/');
  };

  return (
    <section id="web-development-projects" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dark-navy/40 relative">
          <div className="absolute inset-0 matrix-bg opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/60 via-transparent to-neon/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <Button
            onClick={goBack}
            variant="ghost"
            className="mb-8 text-white hover:text-neon transition-colors duration-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Work Hub
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6 animate-fade-in-down">
            Web Development Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            Explore my web development projects showcasing modern technologies, clean code, and exceptional user experiences.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={project.id} className="mb-20">
            <div className={`dark-glass-effect rounded-2xl p-8 md:p-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-neon/20 to-electric/20 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-golden/20 text-golden rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-electric/20 text-electric rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-neon text-dark-navy hover:bg-neon/90 transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Globe size={18} />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-electric text-electric hover:bg-electric/10 transition-all duration-300"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={18} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.id}
              className={`dark-glass-effect rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:rotate-1 group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-neon/20 to-electric/20 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-neon/20 text-neon rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-neon transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-electric/20 text-electric rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    asChild
                    className="bg-neon/20 text-neon hover:bg-neon/30 transition-all duration-300"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-electric/30 text-electric hover:bg-electric/10 transition-all duration-300"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentProjects;
