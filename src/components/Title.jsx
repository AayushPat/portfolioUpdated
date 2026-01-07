// Import React hooks for DOM references and side effects
import { useRef, useEffect } from 'react';

// Import custom scroll animation utility
import ScrollAni from './ScrollAni';
import ScrollAniElement from './ScrollAniElement';

// Import GSAP for animations
import gsap from 'gsap';

/**
 * Title Component
 * 
 * This component renders the main portfolio title with animated text effects.
 * It displays "Welcome to my Portfolio" with each letter individually animated
 * based on scroll position. The component uses GSAP animations for smooth
 * text reveal effects.
 * 
 * Features:
 * - Responsive text sizing across different screen sizes
 * - Individual letter animations
 * - Scroll-triggered animations
 * - Custom font styling with Bebas font family
 */
const Title = () => {

    // Reference to the title element for animation targeting
    const titleRef = useRef();
    const roleRef = useRef();
    const valuePropRef = useRef();
  
  // Initialize scroll animations when component mounts
  useEffect(() => {
    // Apply scroll animation to the title with a delay of 3 seconds
    if (titleRef.current) {
      ScrollAni(titleRef.current, 3);
    }
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animate role with scroll-triggered flying effect
      const role = document.querySelector('.role-title');
      if (role) {
        ScrollAniElement(role, 2);
      }
      
      // Animate value proposition with scroll-triggered flying effect
      const valueProp = document.querySelector('.value-proposition');
      if (valueProp) {
        ScrollAniElement(valueProp, 2);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

    // Array of words that make up the name
    const nameWords = ["Aayush", "Patel"];

    return (
      <div className="absolute lg:top-40 lg:left-110 top-[16vh] sm:top-[20vh] md:top-[25vh] left-4 sm:left-8 md:ml-0 md:mr-[15vw] sm:mr-20 lg:mr-35 text-left sm:text-right max-w-[90vw] sm:max-w-3xl">
        {/* Main name with staggered letter animation */}
        <h1 ref={titleRef} className="text-white font-['Bebas'] lg:text-[13vw] md:text-[15vw] text-5xl sm:text-6xl md:text-7xl leading-none tracking-wide mb-2 md:mb-4">
          {nameWords.map((word, wi) => (
            <span key={wi} className="inline-block mr-2 sm:mr-4">
              {word.split("").map((letter, index) => (
                <span key={index} className="inline-block will-change-transform">{letter}</span>
              ))}
            </span>
          ))}
        </h1>
        
        {/* Role/Title */}
        <h2 ref={roleRef} className="role-title text-white font-['Poppins'] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-4 will-change-transform">
          Computer Science student thinking beyond standard patterns to build thoughtful software.
        </h2>
        
        {/* Value Proposition */}
        <p ref={valuePropRef} className="value-proposition text-white font-['Poppins'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 md:mt-4 max-w-full sm:max-w-2xl sm:ml-auto leading-relaxed will-change-transform">
          Exploring AI systems, abstract problem-solving, and modern web development.
        </p>
      </div>
  );
}

export default Title;