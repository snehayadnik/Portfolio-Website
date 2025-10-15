import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface ContactInfo {
  email: string;
  linkedin: string;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: '',
    linkedin: ''
  });

  useEffect(() => {
    setIsVisible(true);
    loadContactInfo();
  }, []);

  const loadContactInfo = () => {
    const stored = localStorage.getItem('contactInfo');
    if (stored) {
      const info = JSON.parse(stored);
      setContactInfo(info);
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(82, 149, 228, 1), rgba(82, 149, 228, 0.7))' }}>
              SE
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Software Engineer
          </h1>

          <div className="text-2xl md:text-3xl font-medium mb-6" style={{ color: 'rgba(82, 149, 228, 1)' }}>
            Android Developer
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Specializing in IoT-enabled Android applications at Whirlpool GTEC. Passionate about building scalable mobile solutions with Kotlin, Jetpack Compose, and modern architecture patterns.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white rounded-full hover:scale-110 transition-transform"
              style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
            >
              <Github size={24} />
            </a>
            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
              >
                <Linkedin size={24} />
              </a>
            )}
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-3 text-white rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
              >
                <Mail size={24} />
              </a>
            )}
          </div>

          <button
            onClick={scrollToNext}
            className="animate-bounce inline-block"
          >
            <ChevronDown size={32} style={{ color: 'rgba(82, 149, 228, 0.7)' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
