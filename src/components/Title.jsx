// Import React hooks for DOM references and side effects
import { useRef, useEffect } from 'react';

// Import custom scroll animation utility
import ScrollAni from './ScrollAni';

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
  
    // Initialize scroll animations when component mounts
    useEffect(() => {
      // Apply scroll animation to the title with a delay of 3 seconds
      ScrollAni(titleRef.current, 3);
    }, []);

    // Array of words that make up the title
    const words = ["Welcome", "to","my", "Portfolio"];

    return (
      // Main title element with responsive styling and animation reference
      <h1 ref={titleRef} className= "text-white font-['Bebas'] lg:text-[13vw] top-80 sm:top-50 sm:mr-20 md:top-[38vh] md:ml-0 md:mr-[15vw] md:text-[15vw] text-7xl sm:text-7xl absolute lg:top-60 lg:left-110 lg:mr-35 leading-none max-w-3xl tracking-wide text-right">
        {/* Map through each word in the title */}
        {words.map((word, wi) => (
             <span key={wi} className="inline-block mr-4">
                {/* Split each word into individual letters for animation */}
                {word.split("").map((letter, index) => (
                <span key={index} className="inline-block">{letter}</span>
        ))}
        </span>
      ))}
      </h1>
  );
}

export default Title;