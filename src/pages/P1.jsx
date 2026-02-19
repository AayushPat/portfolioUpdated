import NavBar from "../components/NavBar";
import LazyImage from "../components/LazyImage";

export default function P1(){
    return(
      <main id="main-content" className="absolute bg-black w-full h-[100vh] overflow-auto">
        <NavBar textColor="text-yellow-200"/>
        <h1 className="text-white text-4xl lg:text-8xl text-center lg:text-left font-[poppins] mt-10 lg:max-w-[45vw]">
            Grand Cavern Simulation
        </h1>
        <LazyImage src="/cave.jpg" alt="3D visualization of Grand Caverns cave structure showing the exterior of the simulation" className='w-50 ml-20 lg:w-150 lg:ml-13 lg:mt-20' />
        <p className=" text-center lg:text-left relative text-white font-[poppins] lg:text-lg lg:ml-180 lg:max-w-[50vw] lg:bottom-130 mt-10 lh:mt-auto">
        As a Haynes Scholar at JMU, I completed a research project 
        during my freshman year simulating bat behavior and the spread
         of white-nose syndrome within a real cave environment.
          This image shows the exterior of our simulation,
           which accurately reflects the unique structure
            and formation of Grand Caverns, a local cave known to host bat populations.</p>
             <div className="flex justify-center">
             <a 
            href="https://github.com/AayushPat/grand-caverns-3d-model/tree/main" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:text-4xl relative top-10 lg:top-auto lg:left-90 lg:bottom-90 px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
            View on GitHub
            </a>
            </div>
      </main>  
    )
}