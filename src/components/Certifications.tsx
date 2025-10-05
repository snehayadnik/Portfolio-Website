import { useEffect, useState, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: '#',
  },
  {
    title: 'Agile Project Management',
    issuer: 'Google',
    date: '2024',
    link: '#',
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'Online Course',
    date: '2024',
    link: '#',
  },
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: 'rgba(10, 17, 30, 1)' }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group rounded-xl p-6 border-2 transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                backgroundColor: 'rgba(20, 30, 48, 1)',
                borderColor: 'rgba(82, 149, 228, 0.3)',
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(82, 149, 228, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(82, 149, 228, 0.3)'}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}>
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="mb-1" style={{ color: 'rgba(82, 149, 228, 0.8)' }}>{cert.issuer}</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{cert.date}</div>
                </div>
                <a
                  href={cert.link}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink size={20} style={{ color: 'rgba(82, 149, 228, 0.7)' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
