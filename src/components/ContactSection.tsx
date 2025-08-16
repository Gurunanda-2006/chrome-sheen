import React, { useState, useEffect } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 matrix-bg flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}>
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Let's create something amazing together
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Form Fields */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="dark-glass-effect rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-neon" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-12 bg-dark-navy/50 border-neon/30 text-white placeholder:text-gray-400 focus:border-neon focus:ring-neon focus:neon-glow transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-electric" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 bg-dark-navy/50 border-electric/30 text-white placeholder:text-gray-400 focus:border-electric focus:ring-electric focus:electric-glow transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-magenta" />
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="pl-12 bg-dark-navy/50 border-magenta/30 text-white placeholder:text-gray-400 focus:border-magenta focus:ring-magenta focus:magenta-glow transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Message Field */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="dark-glass-effect rounded-2xl p-8 h-full">
                <div className="h-full flex flex-col">
                  <Textarea
                    name="message"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex-1 bg-dark-navy/50 border-golden/30 text-white placeholder:text-gray-400 focus:border-golden focus:ring-golden focus:golden-glow transition-all duration-300 resize-none min-h-[200px]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <Button
                type="submit"
                className={`bg-gradient-to-r from-neon to-electric hover:from-electric hover:to-magenta text-dark-navy font-poppins font-semibold text-lg px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 neon-glow hover:electric-glow ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;