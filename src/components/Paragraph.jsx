import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Paragraph = () => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 32, opacity: 0 },
      {
        y: 0, opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current.parentElement,
          start: 'top 70%',
          end: 'top 10%',
          scrub: 2.5,
        },
      }
    );
  }, []);

  return (
    <h1
      ref={ref}
      className="text-[#F4F9F2] px-7 py-4 text-xl sm:text-xl md:text-[3.2vh] lg:text-[2.8vh] max-w-[50rem] text-center font-['Poppins'] absolute left-0 right-0 bottom-[32vh] md:bottom-[38vh] lg:bottom-[18vh] z-10 mx-auto rounded-2xl"
      style={{
        textShadow: '0 2px 24px rgba(0,0,0,1), 0 0 48px rgba(0,0,0,0.7)',
        background: 'rgba(0,0,0,0.22)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      I'm Aayush Patel, a CS major with an Economics minor at JMU, exploring AI and how tech shapes our world. I love playing soccer and tennis and grew up hiking
      the Blue Ridge Mountains — a mix of focus, strategy, and resilience I bring to every project.
    </h1>
  );
};

export default Paragraph;
