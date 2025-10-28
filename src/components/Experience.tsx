import { useEffect, useState, useRef } from "react";
import { Briefcase, Code } from "lucide-react";

const experienceItems = [
  {
    icon: Briefcase,
    title: "Software Engineer",
    organization: "Whirlpool GTEC, Pune",
    period: "Aug 2024 - Present",
    description:
      "● Engineered IoT-enabled cooktop features in native Android apps using Kotlin and MVVM, enhancing real-time appliance connectivity and user interaction.\n● Refactored legacy codebase to Jetpack Compose, improving UI rendering performance and reducing crash rates by 30%.\n● Led development of new features for KitchenAid Smart Thermometer, integrating Bluetooth communication and background services to improve reliability of temperature monitoring.\n● Diagnosed and resolved critical defects across modules, reducing issue backlog by 50% and improving production stability.\n● Collaborated with cross-functional teams across hardware and cloud divisions to deliver features on an Agile schedule, ensuring on-time product releases.\n● Implemented unit and integration testing with Mockito and JUnit, increasing code coverage and preventing regression failures.",
  },
  {
    icon: Code,
    title: "Android Application Development Intern",
    organization: "Whirlpool GTEC, Pune",
    period: "Jan 2024 - July 2024",
    description:
      "Maintained business applications for EMEA region, developed IoT-driven native Android applications, and collaborated with UI/UX designers for user-centric app design",
  },
];

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ backgroundColor: "rgba(10, 17, 30, 1)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Work Experience
        </h2>

        <div className="relative flex flex-col items-center">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "rgba(82, 149, 228, 0.3)" }}
          />

          {experienceItems.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative mb-16 w-full"
              >
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-700 z-10"
                  style={{
                    backgroundColor: "rgba(82, 149, 228, 1)",
                    opacity: isVisible ? 1 : 0,
                    transform: `translate(-50%, 0) scale(${isVisible ? 1 : 0})`,
                  }}
                >
                  <Icon size={28} />
                </div>

                <div
                  className="rounded-2xl shadow-2xl p-8 md:p-10 transform transition-all duration-700 hover:shadow-blue-500/10 hover:scale-[1.02] text-center mt-20"
                  style={{
                    backgroundColor: "rgba(20, 30, 48, 1)",
                    border: "1px solid rgba(82, 149, 228, 0.3)",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div
                    className="text-sm md:text-base font-semibold mb-3"
                    style={{ color: "rgba(82, 149, 228, 1)" }}
                  >
                    {item.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <div
                    className="text-lg md:text-xl font-medium mb-6"
                    style={{ color: "rgba(82, 149, 228, 0.8)" }}
                  >
                    {item.organization}
                  </div>
                  <p
                    className="whitespace-pre-line text-left text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
