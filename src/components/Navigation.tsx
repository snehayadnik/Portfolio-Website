import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(10, 17, 30, 0.9)',
        borderColor: 'rgba(120, 150, 200, 0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end w-full">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-all text-white"
            style={{
              backgroundColor: isOpen
                ? 'rgba(120, 150, 200, 0.15)'
                : 'transparent',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                'rgba(120, 150, 200, 0.25)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = isOpen
                ? 'rgba(120, 150, 200, 0.15)'
                : 'transparent')
            }
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative text-sm font-medium transition-all tracking-wide ${
                  activeSection === section.id
                    ? 'text-white'
                    : 'hover:text-white'
                }`}
                style={{
                  color:
                    activeSection === section.id
                      ? '#ffffff'
                      : 'rgba(180, 200, 230, 0.7)',
                }}
              >
                {section.label}
                {activeSection === section.id && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(180, 200, 230, 1)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-all"
                style={{
                  backgroundColor:
                    activeSection === section.id
                      ? 'rgba(180, 200, 230, 0.2)'
                      : 'transparent',
                  color: '#ffffff',
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;