// Import navigation component
import NavBar from '../components/NavBar';

// Import decorative and UI components
import ExtraFletters from '../components/ExtraFletters';
import Title from '../components/Title';
import Scroll from '../components/Scroll';
import Paragraph from '../components/Paragraph';
import AboutMe from '../components/AboutMe';
import CardSwap from '../components/CardSwap';
import { Card } from '../components/CardSwap';
import TextPressure from '../components/TextPressure';
import ContactForm from '../components/ContactForm';

// Import React hooks and utilities
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../components/useWindowSize';

// Import GSAP for animations
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis, getLenis } from '../components/useLenis';


// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

export default function Home(){

  const location = useLocation();
  const contactRef = useRef(null);
  const { width, height } = useWindowSize()

  const BP = { sm: 640, md: 768, lg: 1024 }

  let scale
  if (width < BP.sm) {
    scale = 0.95
  } else if (width < BP.md) {
    scale = 0.8
  } else if (width < BP.lg) {
    scale = 0.6
  } else {
    scale = null
  }

  const cardWidth  = scale != null ? width * scale  : 680
  const cardHeight = scale != null ? height * scale : 600
  const verticalDistance = height * 0.2

  useLenis(); 

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const arrowRef = useRef();
  const scrollTextRef = useRef();
  const heroRef = useRef();
  const aboutSectionRef = useRef();
  const projectsRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    Scroll(arrowRef.current, scrollTextRef.current);
  }, []);

  // Snap to nearest section shortly after the wheel goes quiet
  useEffect(() => {
    const getSections = () =>
      [heroRef, aboutSectionRef, projectsRef, contactRef]
        .map(r => r.current)
        .filter(Boolean);

    let snapTimer;
    let isSnapping = false;

    const onWheel = () => {
      if (isSnapping) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        const lenis = getLenis();
        if (!lenis) return;

        const scrollY = lenis.scroll;
        const sections = getSections();
        let nearest = sections[0];
        let minDist = Infinity;

        sections.forEach(s => {
          const dist = Math.abs(s.offsetTop - scrollY);
          if (dist < minDist) { minDist = dist; nearest = s; }
        });

        if (minDist < 24) return;

        isSnapping = true;
        lenis.scrollTo(nearest.offsetTop, {
          duration: 1.15,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          force: true,
          onComplete: () => { isSnapping = false; },
        });
      }, 90);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      clearTimeout(snapTimer);
    };
  }, []);

  useEffect(() => {
    if (!headingRef.current || !aboutSectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: 'top 100%',
            end: 'top 25%',
            scrub: 2.5,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content" className="flex flex-col overflow-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative w-full min-h-[120svh] lg:min-h-[100svh] overflow-x-hidden overflow-y-hidden">

        {/* scroll-trigger-line: outside the scene tilt so scroll positions stay accurate */}
        <div id="scroll-trigger-line" className="absolute top-[39vh] md:top-[25vh] lg:top-[35vh] left-0 w-full" style={{ zIndex: 1 }} />

        {/*
          All layers in ONE tilted container — every image shares the same
          perspective matrix so they are always perfectly aligned with zero gaps.
          Letters sit between the background and foreground layers inside this same space.
        */}
        <div className="absolute inset-0">
          <img src="/newbg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          {width >= 768 && (
            <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
              <ExtraFletters />
            </div>
          )}
        </div>

        {/* UI chrome — above everything */}
        <div style={{ position: 'relative', zIndex: 50 }}>
          <NavBar />
        </div>
        <Title />

        <div className="absolute flex items-center top-80 left-[75vw] sm:top-[25vh] sm:left-[84vw] lg:top-40 lg:left-[83%]" style={{ zIndex: 50 }}>
          <img src="/down.png" alt="three down arrows" className="w-13 md:w-[10vw] lg:w-40 xl:w-45 max-h-28 md:max-h-40 lg:max-h-72 object-contain" ref={arrowRef}/>
          <span className="text-white font-['Bebas'] text-md sm:text-[3vw] lg:text-[4rem] tracking-[-0.3em]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright'}} ref={scrollTextRef}>
            Scroll
          </span>
        </div>

        {/* Wavy fade at hero bottom — irregular edge breaks the hard horizontal cut */}
        <svg
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          style={{ zIndex: 35, width: '100%', height: '22vh' }}
        >
          <defs>
            <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050505" stopOpacity="0" />
              <stop offset="100%" stopColor="#050505" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 110 L1440 110 L1440 30 C1280 8 1080 48 880 22 C680 -4 440 38 220 18 C140 10 70 14 0 22 Z"
            fill="url(#heroFade)"
          />
        </svg>
      </div>

      {/* ── 2. ABOUT ME ─────────────────────────────────────────── */}
      <div ref={aboutSectionRef} className="relative min-h-[100vh] lg:min-h-[85vh] w-full z-30 overflow-hidden" style={{ background: '#050505' }}>

        {/* Background image */}
        <img
          src="/about.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ zIndex: 0, opacity: 0.9 }}
        />

        {/* Wavy top fade — organic edge at the seam, complements the hero wave below */}
        <svg
          className="absolute inset-x-0 top-0 pointer-events-none"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          style={{ zIndex: 8, width: '100%', height: '20%' }}
        >
          <defs>
            <linearGradient id="aboutFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050505" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 0 L1440 0 L1440 82 C1260 105 1020 68 800 90 C580 112 360 72 160 94 C100 100 50 98 0 92 Z"
            fill="url(#aboutFade)"
          />
        </svg>

        {/* Bottom vignette so paragraph text stays readable */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ zIndex: 7, height: '35%', background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.92))' }}
        />

        {/* Aurora blobs */}
        <div className="aurora-bg" style={{ zIndex: 1, background: 'transparent' }}>
          <div className="aurora-mid-blob" />
        </div>


        {/* "About ME" heading — top of section */}
        <div ref={headingRef} className="absolute top-[6vh] sm:top-[13vh] md:top-[9vh] lg:top-[13vh] w-full" style={{ zIndex: 11 }}>
          <Link to="/about" className="group relative flex items-center justify-center w-full h-[20vh] sm:h-[27vh]
            overflow-hidden text-[10vh] sm:text-[14vw] md:text-[12vw] lg:text-[18vh] text-neutral-300 will-change-[transform]">
            <div className="z-0 mr-0 w-0 -translate-x-[30%] translate-z-0 opacity-0 transition-all
              duration-500 group-hover:mr-1 group-hover:w-15 group-hover:translate-x-0 group-hover:opacity-100">
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </div>
            <span className="block w-full pointer-events-auto relative z-10 text-center">
              <AboutMe />
            </span>
          </Link>
        </div>

        <Paragraph />
      </div>

      {/* ── 3. PROJECTS ─────────────────────────────────────────── */}
      <div ref={projectsRef} className='group relative min-h-[100vh] sm:min-h-[80vh] w-full overflow-hidden sm:overflow-visible text-white bg-black z-30'>

        <CardSwap
            width={cardWidth}
            height={cardHeight}
            cardDistance={100}
            verticalDistance={verticalDistance}
            delay={1800}
            pauseOnHover={true}
          >
          <Card>
            <Link to="/p5">
              <h3 className='font-[quick] text-4xl flex items-center justify-center bg-gradient-to-t from-blue-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh] md:h-[7vw] border-2'>
              Wake Up</h3>
              <p className='text-center pt-6 font-[Poppins]'>
                An audio-first exploration game built around accessibility, allowing players to navigate,
                discover checkpoints, and avoid danger using sound instead of visuals. Every mechanic is
                driven by spatial audio — no sight required.</p>
              <img src="/gameforB.png" alt="Wake Up gameplay screenshot showing the audio-based exploration map" className='w-full mt-[4vh] m-7' />
            </Link>
          </Card>
          <Card className>
            <Link to="/p4">
              <h3 className='font-[quick] text-4xl flex items-center justify-center bg-gradient-to-t from-purple-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh] md:h-[7vw] border-2'>
              AI File Organizer</h3>
              <p className='text-center pt-6 font-[Poppins]'>
                A practical study of local LLM deployment and optimization using Ollama. This project taught me how prompt design,
                token limits, and model settings directly impact performance and accuracy, and how to integrate AI reasoning safely into real file system operations.</p>
              <img src="/regularinUse.jpg" alt="AI File Organizer GUI interface with Windows 95 style design" className='w-full mt-[4vh] m-7' />
            </Link>
          </Card>
          <Card className>
            <Link to="/p3">
              <h3 className='font-[quick] text-4xl flex items-center justify-center bg-gradient-to-t from-red-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh] md:h-[7vw] border-2'>
              Canvas To-Do List</h3>
              <p className='text-center pt-6 font-[Poppins]'>
                This project automates the process of syncing assignments
                from canvas to Google Calendar. It retrieves assignments
                using the Canvas API and adds them to Google Calendar,
                making it easier to manage deadlines and events.</p>
              <img src="/google-calendar.jpg" alt="Canvas to Google Calendar sync tool interface showing calendar integration" className='w-full mt-[4vh] m-7' />
            </Link>
          </Card>
          <Card>
            <Link to="/p2">
              <h3 className='font-[quick] text-4xl flex items-center justify-center bg-gradient-to-t from-green-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh] md:h-[7vw] border-2'>
              First Website</h3>
              <p className='text-center pt-6 font-[Poppins]'>This was my first personal website, built using only HTML and CSS.
                It's simple but shows where I began, learning how to create and
                style everything from scratch. Revisiting it now reminds me how much
                I've grown, moving mostly from basic static pages to more advanced, responsive designs.
              </p>
              <img src="/web.jpg" alt="Screenshot of first personal website built with HTML and CSS" className='w-full m-6' />
            </Link>
          </Card>
          <Card>
            <Link to="p1">
              <h3 className='font-[quick] text-4xl pt-4 text-center mr-10 inset-0 bg-gradient-to-t from-yellow-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh] md:h-[7vw] md:text-3xl border-2'>
              Grand Caverns Sim</h3>
              <p className='text-center pt-6 font-[Poppins]'>For this project, we used NetLogo 3D to
                recreate Grand Caverns as an exact digital model.
                We mapped the cave structure point by point, turning
                real survey data into a detailed 3D environment.
                The final simulation shows bats flying through the space
                just as they do in the real cave, giving an accurate
                look at their movement and behavior underground.</p>
              <img src="/cave.jpg" alt="3D visualization of Grand Caverns cave structure" className='w-full mb-10' />
            </Link>
          </Card>
        </CardSwap>

        <div className='p-2 max-w-[50vw] sm:max-w-[53vw] md:max-w-[45vw] md:h-40 lg:max-w-[50%] lg:h-50 lg:ml-10'>
          <TextPressure
            text="Click to"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#757575"
            strokeColor="#ff0000"
            minFontSize={18}
          />
          <TextPressure
            text="View Projects"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#757575"
            strokeColor="#ff0000"
            minFontSize={30}
          />
        </div>
        <Link
          to="/projects"
          className="
            flex items-center justify-center
            font-[Bebas] text-xl text-white bg-black border-white border-4 rounded-lg
            hover:text-black hover:bg-white hover:border-black transition duration-700
            ml-4 mt-3 w-[55vw] h-[8vh]
            sm:ml-[19vw] sm:w-[15vw] sm:h-[8vh] mb-2
            md:text-4xl md:ml-20 md:mt-40 md:w-[18vw] md:h-[10vh]
            lg:text-7xl lg:ml-[17vw] lg:mt-[20vh] lg:w-[20vw] lg:h-[12vh]
          "
        >
          Projects
        </Link>
        {/* Hover hint — below the Projects button, fades in on section hover */}
        <p className="
          ml-4 w-[55vw]
          sm:ml-[19vw] sm:w-[15vw]
          md:ml-20 md:w-[18vw]
          lg:ml-[17vw] lg:w-[20vw]
          mt-2 text-center text-[10px] tracking-widest text-white/30
          font-[Poppins] select-none pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase
        ">
          Hover cards to pause
        </p>
      </div>

      {/* ── 4. CONTACT ──────────────────────────────────────────── */}
      <div className='h-[100vh] relative z-40'>
        <div className="absolute inset-0 z-0 h-full" style={{background: 'linear-gradient(160deg, #06060f 0%, #0b0b1e 45%, #070712 100%)'}} />
        <section ref={contactRef} id="contact">
          <div className='relative z-10'>
            <ContactForm/>
          </div>
        </section>
      </div>

    </main>
  )
}
