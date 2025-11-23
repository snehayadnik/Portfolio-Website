import { useEffect, useState, useRef } from "react";
import { Github, ExternalLink, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Mood Mate",
    description:
      "Developed a native Android journaling app that analyzes user mood using on-device sentiment detection via Google ML Kit, providing personalized wellness recommendations. ",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MLKit", "Java"],
    github: "#",
    demo: "#",
  },
  {
    title: "Campus Connect",
    description:
      "Full-stack college engagement app with attendance tracking, timetables, notices, real-time chat community using Firebase Firestore, and AI-powered Dialogflow chatbot for student FAQs",
    tech: ["Flutter", "Firebase", "Firestore", "Dialogflow"],
    github: "#",
    demo: "#",
  },
  {
    title: "SIP Calculator",
    description:
      "Intuitive Android investment app with SIP, Step-Up, Lumpsum, and SWP calculators enabling seamless user interactions and accurate financial projections with in-app educational module",
    tech: [
      "Kotlin",
      "XML",
      "RecyclerView",
      "ViewPager2",
      "Fragments",
      "View Binding",
    ],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-4"
      style={{ backgroundColor: "rgba(10, 17, 30, 1)" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Personal Projects
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 pb-4" style={{ minWidth: "min-content" }}>
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform flex-shrink-0 w-96 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  backgroundColor: "rgba(20, 30, 48, 1)",
                  border: "1px solid rgba(82, 149, 228, 0.3)",
                  transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
              <div
                className="flex items-center justify-center transition-all duration-500"
                style={{
                  height: hoveredIndex === index ? "224px" : "192px",
                  background:
                    "linear-gradient(135deg, rgba(82, 149, 228, 0.3), rgba(82, 149, 228, 0.1))",
                }}
              >
                <Smartphone size={64} className="text-white opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p
                  className="mb-4"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: "rgba(82, 149, 228, 0.2)",
                        color: "rgba(82, 149, 228, 1)",
                        border: "1px solid rgba(82, 149, 228, 0.3)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors"
                    style={{ backgroundColor: "rgba(82, 149, 228, 1)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(82, 149, 228, 0.8)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(82, 149, 228, 1)")
                    }
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-colors"
                    style={{
                      borderColor: "rgba(82, 149, 228, 1)",
                      color: "rgba(82, 149, 228, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(82, 149, 228, 1)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(82, 149, 228, 1)";
                    }}
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
