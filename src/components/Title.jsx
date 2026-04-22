import { useRef, useEffect } from 'react';
import ScrollAni from './ScrollAni';
import ScrollAniElement from './ScrollAniElement';

const Title = () => {

  const titleRef = useRef();

  useEffect(() => {
    if (titleRef.current) {
      ScrollAni(titleRef.current, 3);
    }

    const timer = setTimeout(() => {
      const role = document.querySelector('.role-title');
      if (role) ScrollAniElement(role, 2);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const nameWords = ["Aayush", "Patel"];

  // Shared position classes so both layers align to the same spot
  const posBase =
    "absolute lg:top-40 top-[16vh] sm:top-[20vh] md:top-[25vh] " +
    "left-4 sm:left-auto sm:right-20 md:right-[15vw] lg:right-[19.75rem] " +
    "text-left sm:text-right max-w-[90vw] sm:max-w-3xl";

  return (
    <>
      {/* ── Name — z:10, sits ABOVE clouds (z:1) ── */}
      <div className={posBase} style={{ zIndex: 10 }}>
        <h1
          ref={titleRef}
          className="title-3d text-white font-['Bebas'] lg:text-[12vw] md:text-[15vw] text-5xl sm:text-6xl md:text-7xl leading-[0.88] tracking-tight mb-2 md:mb-4"
        >
          {nameWords.map((word, wi) => (
            <span key={wi} className="block">
              {word.split("").map((letter, idx) => (
                <span key={idx} className="inline-block will-change-transform">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      {/*
        ── Subtitle — z:10, ABOVE floor/arches (z:5) but BELOW ruins (z:20) ──
        top is offset by the approximate rendered height of the name so
        the subtitle lands right below it visually.
        Formula: nameTop + fontSize(leading-none) + mb
          default : 16vh  + text-5xl(3rem/48px)   + mb-2(0.5rem/8px)
          sm      : 20vh  + text-6xl(3.75rem/60px) + mb-2(8px)
          md      : 25vh  + 15vw                   + mb-4(1rem/16px)
          lg      : 10rem + 13vw                   + mb-4(16px)
      */}
      <div
        className={
          "absolute " +
          "top-[calc(16vh+6rem)] sm:top-[calc(20vh+7.25rem)] " +
          "md:top-[calc(25vh+30vw-2.5rem)] lg:top-[calc(10rem+26vw-4.5rem)] " +
          "left-4 sm:left-auto sm:right-20 md:right-[15vw] lg:right-[19.75rem] " +
          "text-left sm:text-right max-w-[90vw] sm:max-w-3xl"
        }
        style={{ zIndex: 10 }}
      >
        <h2
          className="role-title text-white font-['Poppins'] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl will-change-transform"
        >
          Welcome to my Portfolio
        </h2>
      </div>
    </>
  );
};

export default Title;
