// Import navigation component
import NavBar from '../components/NavBar';

// Import decorative and UI components
import ExtraFletters from '../components/ExtraFletters';
import Title from '../components/Title';
import Scroll from '../components/Scroll';
import Paragraph from '../components/Paragraph';
import Waves from '../components/Waves';
import AboutMe from '../components/AboutMe';
import CardSwap from '../components/CardSwap';
import { Card } from '../components/CardSwap';
import TextPressure from '../components/TextPressure';
import ContactForm from '../components/ContactForm';
import Dither from '../components/FunnyBG';
import QuickFacts from '../components/QuickFacts';

// Import React hooks and utilities
import { useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../components/useWindowSize';

// Import GSAP for animations
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Home Page Component
 * 
 * This is the main landing page of the portfolio website.
 * It features a hero section with animated elements, interactive cards,
 * and various sections showcasing skills and projects.
 * 
 * The component includes:
 * - Responsive design with breakpoint-based scaling
 * - GSAP animations and scroll triggers
 * - Interactive card swapping functionality
 * - Contact form integration
 * - Background animations and effects
 */
export default function Home(){

  // Get current location for scroll-to-contact functionality
  const location = useLocation();
  
  // Reference to contact section for programmatic scrolling
  const contactRef = useRef(null);
  
  // Get current window dimensions for responsive design
  const { width, height } = useWindowSize()

  // Define Tailwind CSS breakpoints for responsive scaling
  const BP = { sm: 640, md: 768, lg: 1024 }
  
  // Calculate scaling factors based on screen size
  // These multipliers adjust card sizes for different screen sizes
  let scale
  let scale2
  if (width < BP.sm) {              // Mobile devices (base)
    scale = 1.7
    scale2 = 1 
  } else if (width < BP.md) {       // Small tablets (sm)
    scale = 0.8
    scale2 = 1 
  } else if (width < BP.lg) {       // Medium tablets (md)
    scale = 0.6
    scale2 = 1 
  } else {                          // Large screens and up (lg)
    scale = null                    // Use fixed pixel size instead of scaling
  }
  
  // Calculate card dimensions based on screen size and scaling
  const cardWidth  = scale != null
    ? width * scale 
    : 680  // Fixed width for large screens
  
  const cardHeight = scale != null
    ? height * scale
    : 600  // Fixed height for large screens
  
  // Calculate vertical spacing between sections
  const verticalDistance = height * 0.2 
  

  // Effect to handle scroll-to-contact functionality
  // Triggers when user clicks "Contact" in navigation
  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // References for scroll animation elements
  const arrowRef = useRef();
  const scrollTextRef = useRef();
  
  // Initialize scroll animations when component mounts
  useEffect(() => {
    Scroll(arrowRef.current, scrollTextRef.current);
  }, []);


  
  return (
    // Main container with flexbox layout and hidden overflow
    <main id="main-content" className="flex flex-col overflow-hidden">
      {/* Hero Section: Full-screen background with animated elements */}
      <div className="relative w-full min-h-[120svh] overflow-x-hidden overflow-y-hidden bg-[url('/background.png')] bg-cover bg-center ">
        {/* Scroll trigger line for GSAP animations */}
        <div id="scroll-trigger-line" className="absolute top-[39vh] md:top-[25vh] lg:top-[35vh] left-0 w-full"></div>
        
        {/* Navigation bar */}
        <NavBar />
        
        {/* Main title component */}
        <Title />
        
        {/* Decorative floating letters - disabled on mobile for performance */}
        {width >= 768 && <ExtraFletters />}
        
        {/* Scroll indicator arrow with responsive positioning */}
        <img src="/down.png" alt=" three down arrows" className=" w-13 ml-[75vw] mt-80 md:w-[10vw] sm:ml-[84vw] sm:mt-[25vh] xl:w-45 h-auto lg:w-40 lg:ml-[83%] lg:mt-40" ref={arrowRef}/>
        
        {/* Vertical "Scroll" text indicator */}
        <span className= "text-white font-['Bebas'] text-md left-[90vw] top-100 sm:text-sm sm:text-[3vw] sm:left-145 sm:top-35 lg:text-[4rem]  md:left-[95vw] md:top-[30vh] absolute lg:top-55 lg:left-357 tracking-[-0.3em]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright'}} ref={scrollTextRef}>
          Scroll
        </span>
      </div>
      
      {/* Quick Facts Section - Immediately after hero */}
      <QuickFacts />
      
        {/* Projects Showcase Section: Interactive card carousel */}
        <div className='relative min-h-[80vh] w-full overflow-visible text-white bg-black z-20'>
          {/* CardSwap component for interactive project cards */}
          <CardSwap
            width={cardWidth}
            height={cardHeight}
            cardDistance={100}
            verticalDistance={verticalDistance}
            delay={1800}
            pauseOnHover={true}
          >
        
          {/* Project Card 1: AI File Organizer */}
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
          {/* Project Card 2: Canvas To-Do List */}
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
          <h3 className='font-[quick] text-4xl flex items-center justify-center bg-gradient-to-t from-green-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh]  md:h-[7vw] border-2'>
          First Website</h3>
          <p className='text-center pt-6 font-[Poppins]'>This was my first personal website, built using only HTML and CSS.
             It’s simple but shows where I began, learning how to create and 
             style everything from scratch. Revisiting it now reminds me how much
              I’ve grown, moving mostly from basic static pages to more advanced, responsive designs.
          </p>
          <img src="/web.jpg" alt="Screenshot of first personal website built with HTML and CSS" className='w-full m-6' />
          </Link>
        </Card>   
        <Card>
          <Link to="p1">
          <h3 className='font-[quick] text-4xl pt-4 text-center mr-10 inset-0 bg-gradient-to-t from-yellow-200 to-transparent opacity-45 w-full h-[9vh] sm:h-[14vh]  md:h-[7vw] md:text-3xl border-2'>
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
      <div className='p-2 sm:max-w-[53vw] md:max-w-[45vw] md:h-40 lg:max-w-[50%] lg:h-50 lg:ml-10'>
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
    font-[Bebas] text-white bg-black border-white border-4 rounded-lg
    hover:text-black hover:bg-white hover:border-black transition duration-700
    /* base */
    ml-4 mt-3 w-[25vw] h-[4vh]
    sm:ml-[19vw] sm:w-[15vw] sm:h-[8vh] mb-2
    /* md */
    md:text-4xl md:ml-20 md:mt-40 md:w-[18vw] md:h-[10m vh]
    /* lg */
    lg:text-7xl lg:ml-[17vw] lg:mt-[20vh] lg:w-[20vw] lg:h-[12vh]
  "
>
  Projects
</Link>
      </div>
      
      {/* Content Section: Black background with animated waves */}
      <div className="relative min-h-[100vh] bg-black w-full z-30">
        {/* Animated wave background effect - optimized for mobile */}
        {width >= 768 ? (
          <Waves
            lineColor="#3C3CBD"
            backgroundColor="#A0A0A0"
            waveSpeedX={0.02}
            waveSpeedY={0.02}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.8}
            tension={0.01}
            maxCursorMove={500}
            yGap={36}
          />
        ) : (
          <Waves
            lineColor="#3C3CBD"
            backgroundColor="#A0A0A0"
            waveSpeedX={0.015}
            waveSpeedY={0.015}
            waveAmpX={20}
            waveAmpY={10}
            friction={0.9}
            tension={0.02}
            maxCursorMove={200}
            yGap={48}
            xGap={15}
          />
        )}
          
          {/* About Me Section: Large interactive link with hover animations */}
          <div className="absolute sm:top-[15vh] md:top-[10vh] lg:top-[20vh] md:left-2 lg:left-0 lg:right-[16%] top-[6vh] w-full items-center">
            {/* Interactive link to About page with hover effects */}
            <Link to="/about" className="group relative flex items-center justify-center w-full h-[20vh] sm:h-[27vh] lg:px-20
              overflow-hidden text-[9vh] sm:text-[14vw] md:text-[12vw] lg:text-[17vh] text-neutral-300 will-change-[transform] z-11 lg:ml-5">
              
              {/* Arrow icon that appears on hover */}
              <div className="z-0 mr-0 w-0 -translate-x-[30%] translate-z-0 opacity-0 transition-all 
                duration-500 group-hover:mr-1 group-hover:w-15 group-hover:translate-x-0 group-hover:opacity-100">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </div>
    
              {/* About Me text content */}
              <span className="block w-full pointer-events-auto relative z-10 lg:right-[5vw] text-center">
                <AboutMe />
              </span>
            </Link>
          </div>
          {/* Decorative arrow image with responsive sizing */}
          <img src="/AH.png" alt="arrow" className="xl:w-[450px] xl:h-[900px] lg:w-[18vw] lg:h-[70vh] lg:bottom-0  lg:top-0 lg:ml-[75%] lg:rotate-365 w-0 md:w-0 bottom-10 rotate-363 ml-[70vw] opacity-25 brightness-200 contrast-200"  style={{ position: 'relative', zIndex: 50 }}/>
          
          {/* Paragraph component for additional content */}
          <Paragraph />
        </div>
        
      <div className='h-[100vh] relative z-40'>
        <div className="absolute inset-0 z-0 h-full">
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={width < 768}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={width < 768 ? 2 : 4}
            waveAmplitude={width < 768 ? 0.15 : 0.3}
            waveFrequency={width < 768 ? 2 : 3}
            waveSpeed={width < 768 ? 0.03 : 0.05}
        />
        </div>
        <section ref={contactRef} id="contact">
        <div className='relative z-10'>
        <ContactForm/>
        </div>
         </section>
      </div>
    </main>
    )
}