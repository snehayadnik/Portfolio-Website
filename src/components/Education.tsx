import { useEffect, useState, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const educationItems = [
  {
    icon: GraduationCap,
    title: 'B.Tech in Computer Science (Intelligent Systems)',
    organization: 'MIT ADT University, Pune',
    period: '2020 - 2024',
    description: 'CGPA: 8.28 | Specialized in Intelligent Systems and Mobile Application Development',
  },
];

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-8"
      style={{ backgroundColor: 'rgba(10, 17, 30, 1)' }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'rgba(82, 149, 228, 0.3)' }} />

          {educationItems.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative mb-16 pl-20 md:pl-0 md:pr-0"
              >
                <div
                  className="absolute left-8 md:left-1/2 top-0 w-16 h-16 rounded-full flex items-center justify-center text-white transform md:-translate-x-1/2 transition-all duration-700"
                  style={{
                    backgroundColor: 'rgba(82, 149, 228, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: `scale(${isVisible ? 1 : 0}) translateX(-50%)`
                  }}
                >
                  <Icon size={28} />
                </div>

                <div
                  className="rounded-xl shadow-lg p-6 transform transition-all duration-700 hover:shadow-xl md:ml-12"
                  style={{
                    backgroundColor: 'rgba(20, 30, 48, 1)',
                    border: '1px solid rgba(82, 149, 228, 0.3)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="text-sm font-semibold mb-2" style={{ color: 'rgba(82, 149, 228, 1)' }}>{item.period}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="text-lg font-medium mb-3" style={{ color: 'rgba(82, 149, 228, 0.8)' }}>{item.organization}</div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
