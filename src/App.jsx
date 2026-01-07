// Import React Router components for navigation
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Import ScrollToTop component (small, no need to lazy load)
import ScrollToTop from './components/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';

// Lazy load page components for code splitting and better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const P1 = lazy(() => import('./pages/P1'));
const P2 = lazy(() => import('./pages/P2'));
const P3 = lazy(() => import('./pages/P3'));
const P4 = lazy(() => import('./pages/P4'));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-xl font-['Poppins']">Loading...</p>
    </div>
  </div>
);

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
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      
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
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/p4" element={<P4 />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
