import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollAniElement - Apply scroll-triggered flying animation to a single element
 * Matches the same animation style as ScrollAni for letters
 */
const ScrollAniElement = (element, multiplier = 2) => {
  if (!element) return;

  const direction = Math.random() < 0.25 ? 1 : -1;
  const yValue = (Math.random() * 130 + 60) * direction * multiplier;
  const degrees = Math.random() * 30 * (multiplier / 2) - 20;

  const mm = ScrollTrigger.matchMedia({
    "(max-width: 640px)": () => {
      gsap.fromTo(element,
        { y: 0, rotate: 0, opacity: 1 },
        {
          y: yValue * 0.6,
          rotate: degrees * 0.6,
          opacity: 0,
          duration: 0.3,
          ease: 'expoScale(0.5,7, none)',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: '100px 40%',
            end: 'top top',
            scrub: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    },
    "(min-width: 640px) and (max-width: 768px)": () => {
      gsap.fromTo(element,
        { y: 0, rotate: 0, opacity: 1 },
        {
          y: yValue * 0.6,
          rotate: degrees * 0.4,
          opacity: 0,
          duration: 0.3,
          ease: 'expoScale(0.5,7, none)',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center 30%',
            end: 'top top',
            scrub: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    },
    "(min-width: 768px) and (max-width: 1023px)": () => {
      gsap.fromTo(element,
        { y: 0, rotate: 0, opacity: 1 },
        {
          y: yValue,
          rotate: degrees,
          opacity: 0,
          duration: 0.3,
          ease: 'expoScale(0.5,7, none)',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=90%',
            end: 'top top',
            scrub: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    },
    "(min-width: 1024px) and (max-width: 1279px)": () => {
      gsap.fromTo(element,
        { y: 0, rotate: 0, opacity: 1 },
        {
          y: yValue,
          rotate: degrees,
          opacity: 0,
          duration: 0.3,
          ease: 'expoScale(0.5,7, none)',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=70%',
            end: 'top top',
            scrub: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    },
    "(min-width: 1280px)": () => {
      gsap.fromTo(element,
        { y: 0, rotate: 0, opacity: 1 },
        {
          y: yValue,
          rotate: degrees,
          opacity: 0,
          duration: 0.3,
          ease: 'expoScale(0.5,7, none)',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=70%',
            end: 'top top',
            scrub: 2,
            invalidateOnRefresh: true,
          }
        }
      );
    }
  });
};

export default ScrollAniElement;

