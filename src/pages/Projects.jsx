import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from '../components/useLenis';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Wake Up',
    description:
      'An audio-first exploration game built around accessibility. Players navigate checkpoints and avoid danger entirely through spatial sound — no visuals required.',
    image: '/gameforB.png',
    link: '/p5',
  },
  {
    title: 'AI File Organizer',
    description:
      'A practical study of local LLM deployment using Ollama — exploring how prompt design, token limits, and model settings shape performance, and how to wire AI reasoning safely into real file system operations.',
    image: '/regularinUse.jpg',
    link: '/p4',
  },
  {
    title: 'Grand Caverns Sim',
    description:
      'A NetLogo 3D recreation of Grand Caverns built from real survey data, with bats flying through the modeled space exactly as they do underground.',
    image: '/cave.jpg',
    link: '/p1',
  },
  {
    title: 'Canvas To-Do List',
    description:
      'Automates syncing Canvas assignments to Google Calendar via the Canvas API, so deadlines live where your schedule already does.',
    image: '/google-calendar.jpg',
    link: '/p3',
  },
  {
    title: 'First Website',
    description:
      'My first personal site, built from scratch in pure HTML and CSS. A snapshot of where it all started — and a reminder of how much the craft has grown since.',
    image: '/web.jpg',
    link: '/p2',
  },
];

const ArrowIcon = () => (
  <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 15 15" fill="none">
    <path
      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default function Projects() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line draws itself as you scroll through the timeline
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
            end: 'bottom 65%',
            scrub: 1,
          },
        }
      );

      const entries = containerRef.current.querySelectorAll('.project-entry');

      entries.forEach((entry, i) => {
        const isLeft = i % 2 === 0;
        const imgWrap = entry.querySelector('.img-wrap');
        const imgInner = entry.querySelector('.img-inner');
        const text = entry.querySelector('.project-text');
        const dot = entry.querySelector('.project-dot');
        const num = entry.querySelector('.project-num');

        // Dot + number pop in on scroll
        gsap.fromTo(
          [dot, num],
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            stagger: 0.1,
            scrollTrigger: { trigger: entry, start: 'top 83%' },
          }
        );

        // Desktop: slide + slight rotation on entry
        gsap.matchMedia().add('(min-width: 768px)', () => {
          gsap.fromTo(
            imgWrap,
            { x: isLeft ? -90 : 90, opacity: 0, rotation: isLeft ? -5 : 5 },
            {
              x: 0,
              opacity: 1,
              rotation: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: entry, start: 'top 78%' },
            }
          );
          gsap.fromTo(
            text,
            { x: isLeft ? 60 : -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              delay: 0.18,
              ease: 'power2.out',
              scrollTrigger: { trigger: entry, start: 'top 78%' },
            }
          );
        });

        // Mobile: fade up
        gsap.matchMedia().add('(max-width: 767px)', () => {
          gsap.fromTo(
            imgWrap,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: { trigger: entry, start: 'top 88%' },
            }
          );
          gsap.fromTo(
            text,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: 0.12,
              ease: 'power2.out',
              scrollTrigger: { trigger: entry, start: 'top 88%' },
            }
          );
        });

        // Parallax: image drifts at a slightly different rate than the container
        gsap.fromTo(
          imgInner,
          { y: -28 },
          {
            y: 28,
            ease: 'none',
            scrollTrigger: {
              trigger: entry,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#05050f] min-h-screen text-white overflow-x-hidden">
      {/* Persistent aurora glow behind everything */}
      <div
        className="aurora-bg"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      >
        <div className="aurora-mid-blob" />
      </div>

      <div className="relative z-50">
        <NavBar textColor="text-white" />
      </div>

      {/* Page heading */}
      <div className="relative z-10 pt-24 pb-4 text-center">
        <h1 className="font-['Bebas'] text-[22vw] md:text-[13vw] lg:text-[11vw] leading-none text-white/90">
          Projects
        </h1>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto px-6 pb-40">

        {/* The line */}
        <div
          ref={lineRef}
          className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px pointer-events-none"
          style={{
            transformOrigin: 'top center',
            background:
              'linear-gradient(to bottom, transparent, rgba(139,92,246,0.7) 5%, rgba(139,92,246,0.45) 90%, transparent)',
          }}
        />

        {projects.map((project, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="project-entry relative mb-20 sm:mb-28 md:mb-44">

              {/* Dot + number sitting on the line */}
              <div className="absolute left-3 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex flex-col items-center gap-1">
                <div
                  className="project-dot w-3 h-3 rounded-full bg-violet-500"
                  style={{
                    boxShadow:
                      '0 0 10px rgba(139,92,246,1), 0 0 22px rgba(139,92,246,0.5)',
                  }}
                />
              </div>

              {/* Content row — flex-row / flex-row-reverse alternates image & text */}
              <div
                className={`pl-10 sm:pl-8 md:pl-0 flex flex-col gap-5 md:items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div
                  className="img-wrap md:w-1/2 md:px-8 overflow-hidden rounded-2xl h-[180px] sm:h-[220px] md:h-[260px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-inner w-full h-full object-cover"
                    style={{ transform: 'scale(1.13)' }}
                  />
                </div>

                {/* Text */}
                <div className="project-text md:w-1/2 md:px-8">
                  <h2 className="font-['Bebas'] text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white leading-none mb-3">
                    {project.title}
                  </h2>
                  <p className="font-['Poppins'] text-white/55 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 font-['Poppins'] text-sm text-violet-400 hover:text-white border border-violet-500/40 hover:border-white/40 px-5 py-2.5 rounded-full transition-all duration-300 group"
                  >
                    View Project
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
