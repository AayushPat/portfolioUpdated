import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = (png, text) => {
  if (!png || !text) return;

  // Continuous bounce — draws the eye before the user scrolls
  gsap.to(png, {
    y: 10,
    duration: 0.75,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // Fade out on scroll — opacity only so it doesn't fight the bounce y
  gsap.to(png, {
    opacity: 0,
    scrollTrigger: {
      trigger: '#scroll-trigger-line',
      start: '190px 400px',
      end: '200px top',
      scrub: true,
    },
  });

  gsap.to(text, {
    opacity: 0,
    scrollTrigger: {
      trigger: '#scroll-trigger-line',
      start: '160px 400px',
      end: '120px top',
      scrub: true,
    },
  });
};

export default Scroll;
