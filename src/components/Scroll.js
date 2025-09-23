import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = (png, text) =>{
    gsap.fromTo(
        png,
        { opacity: 1, y: 0 },
        {
        opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: '190px 400px',
            end: '200px top',
            scrub: true,
            //markers: true, 
          },
        }
      );
      gsap.fromTo(
        text,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: '#scroll-trigger-line',
            start: '160px 400px',
            end: '120px top',
            scrub: true,
           },
        }
      );
} 
export default Scroll;