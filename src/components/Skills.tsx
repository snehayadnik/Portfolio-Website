import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    items: ['Kotlin', 'Java', 'XML', 'Dart'],
  },
  {
    category: 'Android Development',
    items: ['Jetpack Compose', 'MVVM', 'View Binding', 'Navigation Component'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Android Studio', 'Firebase', 'Flutter', 'Jira'],
  },
  {
    category: 'Backend & IoT',
    items: ['Firebase Firestore', 'IoT Integration', 'RESTful APIs', 'Dialogflow'],
  },
  {
    category: 'Architecture & Testing',
    items: ['Clean Architecture', 'Unit Testing', 'Material Design', 'Agile/Scrum'],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-8"
      style={{ backgroundColor: 'rgba(10, 17, 30, 1)' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className="rounded-2xl p-8 md:p-12 text-white transform transition-all duration-700"
                    style={{
                      background: 'linear-gradient(135deg, rgba(82, 149, 228, 0.2), rgba(82, 149, 228, 0.1))',
                      border: '1px solid rgba(82, 149, 228, 0.3)',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'rgba(82, 149, 228, 1)' }}>{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                      {skill.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="backdrop-blur-sm rounded-lg p-4 text-center font-medium transition-colors"
                          style={{
                            backgroundColor: 'rgba(82, 149, 228, 0.15)',
                            border: '1px solid rgba(82, 149, 228, 0.2)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(82, 149, 228, 0.25)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(82, 149, 228, 0.15)'}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  backgroundColor: index === currentIndex ? 'rgba(82, 149, 228, 1)' : 'rgba(82, 149, 228, 0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
