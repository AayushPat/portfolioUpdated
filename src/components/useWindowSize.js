// Import React hooks for state management and side effects
import { useState, useEffect } from 'react';

/**
 * useWindowSize Custom Hook
 * 
 * This hook tracks the current window dimensions and updates them
 * whenever the window is resized. It's used for responsive design
 * calculations throughout the application.
 * 
 * Features:
 * - Throttled resize events for better performance
 * - SSR-safe (handles server-side rendering)
 * - Debounced updates to prevent excessive re-renders
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
  // Initialize state with safe defaults for SSR
  const [size, setSize] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    // Default values for SSR
    return {
      width: 1920,
      height: 1080
    };
  });

  // Effect to handle window resize events
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    let timeoutId;
    
    // Throttled resize handler
    const onResize = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Debounce the state update
      timeoutId = setTimeout(() => {
        setSize({ 
          width: window.innerWidth, 
          height: window.innerHeight 
        });
      }, 150); // 150ms debounce for smooth performance
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', onResize, { passive: true });
    
    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', onResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Return current window dimensions
  return size;
}