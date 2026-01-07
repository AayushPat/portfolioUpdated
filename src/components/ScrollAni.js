import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollAni = (container, multiplier) => {
  const letters = container.querySelectorAll('span');


  letters.forEach(letter => {
    const direction = (Math.random() < 0.25 ? 1 : -1)
    const yValue = (Math.random() * 130 + 60) * direction * multiplier; 
    const degrees = Math.random() * 30 * (multiplier/2) - 20;
    //console.log(`Animating letter: "${letter.textContent}", y: ${yValue}`);

    const mm = ScrollTrigger.matchMedia({
    
      "(max-width: 640px)": () => {
        // Reduced animation complexity for mobile performance
        gsap.fromTo(letter,
          { y: 0, rotate: 0 },
          {
            y: yValue * 0.4,         
            rotate: degrees * 0.4,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#scroll-trigger-line',
              start: '100px 40%',
              end: 'top top',
              scrub: 1.5,
              // markers: true,
            }
          }
        );
      },

      // Tablet & small desktops 
      "(min-width: 640px) and (max-width: 768px)": () => {
        gsap.fromTo(letter,
          { y: 0, rotate: 0 },
          {
            y: yValue * 0.6,
            rotate: degrees * 0.4,
            duration: 1.5,
            ease: 'expoScale(0.5,7, none)',
            scrollTrigger: {
              trigger: '#scroll-trigger-line',
              start: 'center 30%',
              end: 'top top',
              scrub: 2,
             markers: true,
            }
          }
        );
      },
      "(min-width: 768px) and (max-width: 1023px)": () => {
        gsap.fromTo(letter,
          { y: 0, rotate: 0 },
          {
            y: yValue,
            rotate: degrees,
            duration: 1.5,
            ease: 'expoScale(0.5,7, none)',
            scrollTrigger: {
              trigger: '#scroll-trigger-line',
              start: 'center bottom-=90% ',
              end: 'top top',
              scrub: 2,
              markers: true,
            }
          }
        );
      },
      "(min-width: 1024px) and (max-width:  1279px)": () => {
        gsap.fromTo(letter,
          { y: 0, rotate: 0 },
          {
            y: yValue,
            rotate: degrees,
            duration: 1.5,
            ease: 'expoScale(0.5,7, none)',
            scrollTrigger: {
              trigger: '#scroll-trigger-line',
              start: 'center bottom-=70% ',
              end: 'top top',
              scrub: 2,
              //markers: true,
            }
          }
        );
      },
      "(min-width: 1280px) and (max-width:  1536px)": () => {
        gsap.fromTo(letter,
          { y: 0, rotate: 0 },
          {
            y: yValue,
            rotate: degrees,
            duration: 1.5,
            ease: 'expoScale(0.5,7, none)',
            scrollTrigger: {
              trigger: '#scroll-trigger-line',
              start: 'center bottom-=70% ',
              end: 'top top',
              scrub: 2,
              //markers: true,
            }
          }
        );
      }
    });
  });
};

export default ScrollAni;

