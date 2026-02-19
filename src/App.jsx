// Import React Router components for navigation
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';

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

// All images to preload during the splash screen
const IMAGES_TO_PRELOAD = [
  '/background.png',
  '/AH.png',
  '/down.png',
  '/regularinUse.jpg',
  '/desktopbefore.jpg',
  '/desktopafrer.jpg',
  '/confirm.jpg',
  '/web.jpg',
  '/cave.jpg',
  '/google-calendar.jpg',
  '/url.png',
];

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // resolve on error too so we never get stuck
    img.src = url;
  });
}

// Suspense fallback for lazy-loaded chunks after initial load
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <p className="loader-text text-white text-3xl tracking-widest font-['Poppins'] uppercase opacity-60">
      AP
    </p>
  </div>
);

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show splash for at least 1s, and wait for all images + fonts
    const minTime = new Promise((resolve) => setTimeout(resolve, 1000));
    const assets = Promise.all([
      document.fonts.ready,
      ...IMAGES_TO_PRELOAD.map(preloadImage),
    ]);

    Promise.all([minTime, assets]).then(() => {
      setIsFadingOut(true);
      // Remove overlay after fade-out animation completes
      setTimeout(() => setIsPreloading(false), 500);
    });
  }, []);

  return (
    <>
      {/* Splash / preloader overlay — intentionally shown on every load */}
      {isPreloading && (
        <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center ${isFadingOut ? 'loader-exit' : ''}`}>
          <p className="loader-text text-white text-3xl tracking-widest font-['Poppins'] uppercase opacity-60">
            AP
          </p>
        </div>
      )}

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
      <div
        id="landscape-lock"
        className="hidden fixed inset-0 z-[9999] bg-black text-white items-center justify-center text-center text-xl p-10 show-in-landscape-lock"
      >
        Please rotate your device to portrait mode or expand your screen to view this site.
      </div>

      {/* React Router Routes */}
      <Suspense fallback={<LoadingFallback />}>
        <div className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/p1" element={<P1 />} />
            <Route path="/p2" element={<P2 />} />
            <Route path="/p3" element={<P3 />} />
            <Route path="/p4" element={<P4 />} />
          </Routes>
        </div>
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
