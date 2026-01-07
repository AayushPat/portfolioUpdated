// Import React hooks for side effects and location tracking
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * This component automatically scrolls the page to the top whenever
 * the user navigates to a different route. This provides a better
 * user experience by ensuring users start at the top of each page.
 * 
 * The component doesn't render anything visible - it only handles
 * the scroll behavior as a side effect.
 */
export default function ScrollToTop() {
  // Get the current pathname from React Router
  const { pathname } = useLocation();

  // useEffect hook: Runs whenever the pathname changes
  useEffect(() => {
    // Instantly scroll to the top of the page (instant is better for route changes)
    // This ensures users don't stay at the bottom of the previous page
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]); // Dependency array: effect runs when pathname changes

  // Return null since this component doesn't render anything
  return null;
}