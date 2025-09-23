// Import React hooks for state management and side effects
import { useState, useEffect } from 'react';

/**
 * useWindowSize Custom Hook
 * 
 * This hook tracks the current window dimensions and updates them
 * whenever the window is resized. It's used for responsive design
 * calculations throughout the application.
 * 
 * @returns {Object} An object containing the current window width and height
 * @returns {number} returns.width - Current window width in pixels
 * @returns {number} returns.height - Current window height in pixels
 * 
 * @example
 * const { width, height } = useWindowSize();
 * // width = 1920, height = 1080
 */
export function useWindowSize() {
  // Initialize state with current window dimensions
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Effect to handle window resize events
  useEffect(() => {
    // Function to update size state when window is resized
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    
    // Add event listener for window resize
    window.addEventListener('resize', onResize);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('resize', onResize);
  }, []); // Empty dependency array means this effect runs only once on mount

  // Return current window dimensions
  return size;
}