import { useRef, useEffect } from 'react';
import ScrollAni from './ScrollAni';

const ExtraFletters = () => {

    const letterRef = useRef();
  
    useEffect(() => {
      ScrollAni(letterRef.current,8);
    }, []);

    const word = "A X B J Y L M P Q R S H H A U P O M Y";


    return (
      <h1 ref={letterRef} className= "text-white font-['Bebas'] text-7xl md:text-[15vw] lg:text-[12rem] absolute top-[115vh] leading-none  tracking-widest text-right max-w-6xl">
                {word.split("").map((letter, index) => (
                <span key={index} className="inline-block">{letter}</span>
        ))}
    
    </h1>
  );
}
export default ExtraFletters;