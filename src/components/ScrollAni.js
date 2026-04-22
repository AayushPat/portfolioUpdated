import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAni = (container, multiplier) => {
  const letters = container.querySelectorAll('span');

  // Precompute random values once per letter — shared across all breakpoints
  const data = Array.from(letters).map(letter => {
    const direction = Math.random() < 0.25 ? 1 : -1;
    return {
      el: letter,
      yValue:  (Math.random() * 130 + 60) * direction * multiplier,
      degrees: Math.random() * 30 * (multiplier / 2) - 20,
      rotateX: (Math.random() * 60  - 30) * (multiplier / 4),
      rotateY: (Math.random() * 90  - 45) * (multiplier / 4),
    };
  });

  // gsap.matchMedia ensures only the active breakpoint's animations exist at a time
  const mm = gsap.matchMedia();

  mm.add("(max-width: 639px)", () => {
    data.forEach(({ el, yValue, degrees, rotateX, rotateY }) => {
      gsap.fromTo(el,
        { y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
        {
          y: yValue * 0.4, rotate: degrees * 0.4,
          rotateX: rotateX * 0.4, rotateY: rotateY * 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: '100px 40%', end: 'top top', scrub: 1.5,
          },
        }
      );
    });
  });

  mm.add("(min-width: 640px) and (max-width: 767px)", () => {
    data.forEach(({ el, yValue, degrees, rotateX, rotateY }) => {
      gsap.fromTo(el,
        { y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
        {
          y: yValue * 0.6, rotate: degrees * 0.4,
          rotateX: rotateX * 0.6, rotateY: rotateY * 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center 30%', end: 'top top', scrub: 2,
          },
        }
      );
    });
  });

  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    data.forEach(({ el, yValue, degrees, rotateX, rotateY }) => {
      gsap.fromTo(el,
        { y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
        {
          y: yValue, rotate: degrees, rotateX, rotateY,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=90%', end: 'top top', scrub: 2,
          },
        }
      );
    });
  });

  mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
    data.forEach(({ el, yValue, degrees, rotateX, rotateY }) => {
      gsap.fromTo(el,
        { y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
        {
          y: yValue, rotate: degrees, rotateX, rotateY,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=70%', end: 'top top', scrub: 2,
          },
        }
      );
    });
  });

  mm.add("(min-width: 1280px)", () => {
    data.forEach(({ el, yValue, degrees, rotateX, rotateY }) => {
      gsap.fromTo(el,
        { y: 0, rotate: 0, rotateX: 0, rotateY: 0 },
        {
          y: yValue, rotate: degrees, rotateX, rotateY,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: 'center bottom-=70%', end: 'top top', scrub: 2,
          },
        }
      );
    });
  });
};

export const ScrollAniReverse = (container, multiplier, triggerEl) => {
  const letters = container.querySelectorAll('span');

  const data = Array.from(letters).map(letter => {
    const xSign = Math.random() < 0.5 ? 1 : -1;
    return {
      el: letter,
      xValue:  (Math.random() * 160 + 60) * xSign * multiplier,
      yValue:  (Math.random() * 130 + 60) * multiplier,
      degrees: Math.random() * 30 * (multiplier / 2) - 20,
      rotateX: (Math.random() * 60  - 30) * (multiplier / 4),
      rotateY: (Math.random() * 90  - 45) * (multiplier / 4),
    };
  });

  const mm = gsap.matchMedia();

  mm.add("(max-width: 639px)", () => {
    data.forEach(({ el, xValue, yValue, degrees, rotateX, rotateY }) => {
      gsap.set(el, {
        x: xValue * 0.4, y: yValue * 0.4,
        rotation: degrees * 0.4, rotateX: rotateX * 0.4, rotateY: rotateY * 0.4,
      });
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, rotateX: 0, rotateY: 0,
        ease: 'power2.out',
        scrollTrigger: { trigger: triggerEl, start: 'top 95%', end: 'top -10%', scrub: 4 },
      });
    });
  });

  mm.add("(min-width: 640px) and (max-width: 767px)", () => {
    data.forEach(({ el, xValue, yValue, degrees, rotateX, rotateY }) => {
      gsap.set(el, {
        x: xValue * 0.6, y: yValue * 0.6,
        rotation: degrees * 0.4, rotateX: rotateX * 0.6, rotateY: rotateY * 0.6,
      });
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, rotateX: 0, rotateY: 0,
        ease: 'power3.out',
        scrollTrigger: { trigger: triggerEl, start: 'top 95%', end: 'top -10%', scrub: 4 },
      });
    });
  });

  mm.add("(min-width: 768px)", () => {
    data.forEach(({ el, xValue, yValue, degrees, rotateX, rotateY }) => {
      gsap.set(el, { x: xValue, y: yValue, rotation: degrees, rotateX, rotateY });
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, rotateX: 0, rotateY: 0,
        ease: 'power3.out',
        scrollTrigger: { trigger: triggerEl, start: 'top 100%', end: 'top -20%', scrub: 4 },
      });
    });
  });
};

export default ScrollAni;
