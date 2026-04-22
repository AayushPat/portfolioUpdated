import NavBar from '../components/NavBar';
import { useWindowSize } from '../components/useWindowSize';
import { useLenis } from '../components/useLenis';

export default function About() {
  const { width } = useWindowSize();
  useLenis();

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden" style={{ background: '#07051a' }}>


      {/* ── NavBar ── */}
      <div className="relative z-50">
        <NavBar textColor="text-white" />
      </div>

      {/* ── Main content ── */}
      <section className="relative z-10 flex flex-col items-center min-h-[calc(100vh-5rem)] px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-16">

        <div className="flex flex-col items-center w-full">
          {/* Title */}
          <h1 className="font-['Poppins'] font-black text-white leading-[0.92] mb-6 md:mb-8 text-center
            text-5xl sm:text-6xl md:text-7xl lg:text-[9vw]">
            Hi, my name's<br />Aayush Patel
          </h1>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10">
            <a
              href="https://github.com/AayushPat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/10 backdrop-blur-sm
                         px-4 py-2 text-xs font-medium uppercase text-white
                         hover:bg-white/20 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" className="h-4 w-4">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-patel-zegoat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#0077b5]/60 bg-[#0077b5]/70 backdrop-blur-sm
                         px-4 py-2 text-xs font-medium uppercase text-white
                         hover:bg-[#005f91] transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-4 w-4">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Bio */}
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl space-y-5
            font-['Poppins'] text-white/80
            text-sm sm:text-base md:text-[1.05rem] lg:text-xl
            leading-relaxed text-center">
            <p>
              I'm a computer science major at James Madison University with a minor in Economics,
              combining technical skills with a broader understanding of how technology influences our world.
              I'm especially drawn to the possibilities within artificial intelligence and motivated to keep
              learning how it can be applied to solve real-world problems. Outside of academics, I play soccer
              and tennis — sports that demand mental focus, strategy, and resilience under pressure.
            </p>
            <p>
              I grew up in Roanoke, Virginia, spending countless hours hiking the Blue Ridge Mountains.
              That time outdoors taught me adaptability and persistence, qualities I bring to every challenge
              I face. Whether it's debugging a stubborn program or collaborating on a group project, I push
              through with creativity and care. I'm always looking for opportunities to grow, contribute
              meaningfully, and bring real energy to the work I care about.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
