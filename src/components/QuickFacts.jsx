// Import React hooks for animations
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * QuickFacts Component
 * 
 * Displays key information in a scannable format:
 * - Technical Skills
 * - Education & Achievements
 * 
 * Features:
 * - Clean, card-based layout
 * - Generous white space
 * - Scroll-triggered animations
 * - Mobile-first responsive design
 */
export default function QuickFacts() {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const [expandedCategories, setExpandedCategories] = useState(['Thinking Style', 'AI & Intelligence']);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Register ScrollTrigger if not already registered
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll
    const cards = container.querySelectorAll('.quick-fact-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Animate badges
    const badges = container.querySelectorAll('.skill-badge');
    badges.forEach((badge, index) => {
      gsap.fromTo(
        badge,
        {
          opacity: 0,
          scale: 0,
          rotation: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          delay: index * 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: badge.closest('.quick-fact-card'),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const technicalSkills = [
    {
      category: 'Thinking Style',
      skills: [
        { name: 'Systems Thinking', description: 'Understanding how components interact within larger systems.' },
        { name: 'Performance Optimization', description: 'Identifying and eliminating bottlenecks for faster execution.' },
        { name: 'Problem Decomposition', description: 'Breaking complex problems into manageable, solvable pieces.' }
      ]
    },
    {
      category: 'AI & Intelligence',
      skills: [
        { name: 'Local-First AI Systems', description: 'Building AI applications that run entirely on-device for privacy and speed.' },
        { name: 'Prompt Engineering', description: 'Crafting effective prompts to get optimal results from LLMs.' },
        { name: 'Model Tuning', description: 'Adjusting model parameters and hyperparameters for better performance.' },
        { name: 'Ollama', description: 'Deploying and managing local LLMs using Ollama for efficient inference.' }
      ]
    },
    {
      category: 'Engineering',
      skills: [
        { name: 'Data Structures & Algorithms', description: 'Selecting the right data structures and algorithms for optimal solutions.' },
        { name: 'OOP', description: 'Designing maintainable code using object-oriented principles and patterns.' },
        { name: 'Debugging & Profiling', description: 'Systematically finding and fixing issues while optimizing performance.' },
        { name: 'State Management', description: 'Managing application state efficiently across components and interactions.' }
      ]
    },
    {
      category: 'Web & Tools',
      skills: [
        { name: 'React', description: 'Building interactive UIs with component-based architecture and hooks.' },
        { name: 'JavaScript', description: 'Writing clean, efficient code for both frontend and backend applications.' },
        { name: 'Python', description: 'Developing scripts, APIs, and data processing pipelines.' },
        { name: 'Java', description: 'Building robust, scalable applications with strong typing and OOP.' },
        { name: 'Git', description: 'Version control and collaborative development workflows.' },
        { name: 'Linux', description: 'System administration, shell scripting, and server management.' },
        { name: 'API Integration', description: 'Connecting applications with RESTful APIs and handling data exchange.' }
      ]
    }
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-black"
      aria-label="Quick Facts"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white font-['Bebas'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-8 sm:mb-12 md:mb-16">
          At a Glance
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Technical Skills Card */}
          <div 
            ref={skillsRef}
            className="quick-fact-card bg-white/5 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 will-change-transform relative z-0"
          >
            <h3 className="text-white font-['Poppins'] text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-semibold">
              Technical Skills
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {technicalSkills.map((category) => {
                const isExpanded = expandedCategories.includes(category.category);
                return (
                  <div key={category.category} className="mb-6 sm:mb-8">
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full flex items-center justify-between text-left mb-3 sm:mb-4 pb-2 border-b border-white/10 group"
                    >
                      <h4 className="text-white/70 font-['Poppins'] text-xs uppercase tracking-[0.08em] opacity-70">
                        {category.category}
                      </h4>
                      <svg
                        className={`w-4 h-4 text-white/70 opacity-70 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-50'
                      }`}
                    >
                      <div className="flex flex-wrap gap-6 sm:gap-7 md:gap-8 pt-4 pb-4">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="relative"
                            onMouseEnter={(e) => {
                              setHoveredSkill(skill.name);
                              const rect = e.currentTarget.getBoundingClientRect();
                              setTooltipPosition({
                                top: rect.top - 10,
                                left: rect.left + rect.width / 2
                              });
                            }}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <span
                              className={`skill-badge bg-white/10 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-sm sm:text-base font-['Poppins'] border border-white/20 transition-all duration-300 cursor-default will-change-transform my-3 ${
                                hoveredSkill === skill.name
                                  ? 'bg-white/20 scale-105 shadow-lg shadow-white/20 translate-y-[-2px]'
                                  : 'hover:bg-white/20 hover:scale-110'
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Achievements Card */}
          <div 
            ref={educationRef}
            className="quick-fact-card bg-white/5 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 will-change-transform"
          >
            <h3 className="text-white font-['Poppins'] text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-semibold">
              Education & Achievements
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10">
                <p className="text-white font-['Poppins'] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  James Madison University
                </p>
                <p className="text-white/80 font-['Poppins'] text-sm sm:text-base md:text-lg">
                  Computer Science Major
                </p>
                <p className="text-white/80 font-['Poppins'] text-sm sm:text-base md:text-lg">
                  Economics Minor
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10">
                <p className="text-white font-['Poppins'] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  Haynes Scholar
                </p>
                <p className="text-white/80 font-['Poppins'] text-sm sm:text-base md:text-lg">
                  Research Excellence Award
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hoveredSkill && (() => {
        const skill = technicalSkills
          .flatMap(cat => cat.skills)
          .find(s => s.name === hoveredSkill);
        if (!skill) return null;
        return createPortal(
          <div 
            ref={tooltipRef}
            className="fixed w-72 sm:w-80 p-4 bg-white text-black text-sm font-['Poppins'] rounded-lg shadow-2xl pointer-events-none leading-relaxed z-[999999]"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              transform: 'translate(-50%, calc(-100% - 12px))',
            }}
          >
            <p className="whitespace-normal">{skill.description}</p>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>,
          document.body
        );
      })()}
    </section>
  );
}

