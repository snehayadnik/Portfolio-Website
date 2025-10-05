import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'journey', 'certifications', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: 'rgba(10, 17, 30, 1)' }}>
      <Navigation activeSection={activeSection} />
      <Hero />
      <Skills />
      <Journey />
      <Certifications />
      <Projects />
    </div>
  );
}

export default App;
