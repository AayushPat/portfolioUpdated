import React from 'react';
import NavBar from '../components/NavBar';
import Threads from '../components/Threads';

export default function About() {
  return (
    <main id="main-content" className="w-full overflow-hidden bg-[#A0A0A0] max-h-[100vh] lg:max-h-[150vh]">
        {/* adjusted navbar to so i can change its color for every page remember to use for other pages*/}
        <NavBar textColor='text-white' className='relative z-10'/>
      <div className='absolute bottom-[65vh] sm:bottom-[47vh] lg:bottom-30 sm:h-[100vh] lg:h-[145vh] h-[60vh] w-full z-0 pointer-events-none'>
        {/* tried to kinda look like the waves from about me section of home page just another angle*/}
        <Threads
          amplitude={1.8}
          distance={0.5}
          enableMouseInteraction={false}
          />
      </div>
      <div className='flex flex-col flex-wrap'>
      <div className='text-white'>
        {/* mt works for xs and lg*/}
        {/* title for about me page much larger than regular text*/}
        <h1 className='text-3xl md:text-7xl md:ml-5 md:max-w-[70vw] md:text-left lg:text-9xl lg:mt-20 mt-10 ml-2 max-w-[65vw] lg:max-w-[70vw] lg:ml-10 relative font-[poppins] sm:text-right sm:ml-0 lg:pr-0  lg:text-left sm:pr-15 z-10'>
        Hi, my name's Aayush Patel
        </h1>
        {/* couple links i thought i might as well add on*/}
          <a
          href="https://github.com/AayushPat"
          target="_blank"
          rel="noopener noreferrer"
          className="relative left-3 top-115 lg:top-auto lg:bottom-40 z-10 lg:mb-10 inline-block lg:left-260 rounded bg-[#636262] px-4 py-2 lg:px-15 lg:py-7 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#3d3d3d] focus:shadow-lg focus:bg-[#3d3d3d] focus:ring-0 active:bg-[#2e2e2e]">
          <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/aayush-patel-zegoat"
          target="_blank"
          rel="noopener noreferrer"
          className="relative left-3 top-115 lg:bottom-40 lg:top-auto z-10 lg:mb-10 inline-block lg:left-260 rounded bg-[#0077b5] px-4 py-2 lg:px-15 lg:py-7 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#005f91] focus:bg-[#005f91] active:bg-[#004e78] focus:outline-none focus:ring-0"
          >
          <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>
         </a>

        {/*spotify area just to make page a lil more personal and about me might not have it show on smaller screen*/}
        {/*will be adjusting it for smaller screens*/}

        <div className="order-1 px-3 lg:px-10 relative z-10 text-white w-[40vw] sm:w-[50vw] lg:w-[55vw] lg:bottom-20">
        <h1 className="lg:text-5xl font-mono mb-3 lg:mb-6">My Top Working Music</h1>

        <div className="flex flex-wrap sm:gap-3 lg:gap-12">
          <iframe  className="w-full h-96 sm:w-[40vw] sm:h-[60vh] lg:w-[45vw] lg:h-[55vh] rounded-lg"
           src="https://open.spotify.com/embed/playlist/37i9dQZF1FbCZVYWLrZZeo?utm_source=generator"
           frameBorder="0" allowfullscreen=""
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
             loading="lazy"
             style={{ borderRadius: '12px' }}></iframe>
        </div>
      </div>
      
          {/* primary text*/}

        <div className='text-[0.9rem] indent-15 lg:indent-30 md:indent-22 max-w-[70vw] sm:max-w-[55vw] md:max-w-[45vw] md:mt-[18%] md:ml-110 md:text-[1.1rem] sm:ml-80 lg:max-w-[50vw] lg:left-[25vw] ml-40 lg:text-2xl lg:mr-4 top-32 lg:top-25 absolute font-[poppins] z-10'>
        <p>
        ,I'm a computer science major at James Madison University with a minor in Economics,
        combining technical skills with a broader understanding of how technology influences our world.
        I'm especially drawn to the possibilities within artificial intelligence and motivated to keep 
        learning how it can be applied to solve real world problems. Outside of academics, I play soccer
        and tennis, where I enjoy the mental focus and strategic thinking they require. These sports have
        taught me the importance of discipline, patience, and staying sharp under pressure.
        </p>
        <p className='indent-8'>
            I grew up in Roanoke, Virginia, where I spent countless hours hiking in 
        the Blue Ridge Mountains. Exploring the outdoors taught me resilience and adaptability,
        which I now bring to every challenge I take on. Whether it's debugging a program or collaborating on a group project,
        I take pride in pushing through obstacles with creativity and persistence. I'm always looking for opportunities to grow, 
        contribute meaningfully, and bring energy to the work I care about.
        </p>
        </div>
        </div>
      </div>
      </main>
  );
}