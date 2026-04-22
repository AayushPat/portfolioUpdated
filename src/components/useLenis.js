import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let _lenis = null;
export const getLenis = () => _lenis;

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,        // how long the inertia lasts — higher = more drag
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      smoothWheel: true,
      wheelMultiplier: 0.9, // slightly resist wheel input
      touchMultiplier: 1.5, // touch feels snappier
    });

    // Sync Lenis scroll position into GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Hook Lenis into GSAP's ticker so they run on the same frame
    _lenis = lenis;

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // Prevent GSAP from adding its own lag smoothing (Lenis handles this)
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      _lenis = null;
      gsap.ticker.remove(raf);
    };
  }, []);
}