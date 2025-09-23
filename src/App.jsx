// Import React Router components for navigation
import { Routes, Route } from 'react-router-dom';

// Import page components for different routes
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import P1 from './pages/p1';
import P2 from './pages/p2';
import P3 from './pages/p3';

/**
 * Main App Component
 * 
 * This is the root component that sets up:
 * - React Router navigation
 * - Scroll behavior management
 * - Landscape mode detection
 * - All application routes
 */
export default function App() {
  return (
    <>
      {/* ScrollToTop Component: Automatically scrolls to top when navigating between routes */}
      <ScrollToTop />

      {/* Landscape Mode Blocker: Prevents viewing on mobile devices in landscape mode */}
      {/* This ensures optimal viewing experience on mobile devices */}
      <div
        id="landscape-lock"
        className="hidden fixed inset-0 z-[9999] bg-black text-white items-center justify-center text-center text-xl p-10 show-in-landscape-lock"
      >
        Please rotate your device to portrait mode or expand your screen to view this site.
      </div>

      {/* React Router Routes: Define all navigation paths in the application */}
      <Routes>
        {/* Home page - Main landing page */}
        <Route path="/" element={<Home />} />
        
        {/* About page - Personal information and background */}
        <Route path="/about" element={<About />} />
        
        {/* Projects page - Portfolio of work */}
        <Route path="/projects" element={<Projects />} />
        
        {/* Individual project pages - Detailed project showcases */}
        <Route path="/p1" element={<P1 />} />
        <Route path="/p2" element={<P2 />} />
        <Route path="/p3" element={<P3 />} />
      </Routes>
    </>
  );
}
