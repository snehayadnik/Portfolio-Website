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
      className="min-h-screen flex items-center justify-center relative pt-12"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Profile Image */}
<div className="mb-10 inline-block">
  <div className="w-44 h-44 rounded-full overflow-hidden shadow-xl">
    <img
      src="/Screenshot_2025-10-25_110652-removebg-preview.png"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
  Software Engineer
</h1>

<div className="text-2xl md:text-3xl font-medium mb-6" style={{ color: 'rgba(82, 149, 228, 1)' }}>
  Mobile App Developer | AI Enthusiast
</div>

<p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-justify" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
  Building user-focused, scalable mobile applications with Kotlin, MVVM, and Jetpack Compose. Currently developing IoT-enabled Android applications at Whirlpool, creating seamless experiences for connected devices. Passionate about integrating AI into mobile to drive personalization, automation, and intelligent decision-making.
</p>


          {/* Icons */}
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
