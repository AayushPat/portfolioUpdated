import NavBar from "../components/NavBar";

export default function P2(){
    return(
      <div className="absolute bg-black w-full h-[100vh] lg:h-[160vh]">
        <NavBar textColor="text-green-200"/>
        <h1 className="text-white text-4xl lg:text-8xl font-[poppins]  text-center lg:text-left mt-10 lg:max-w-[20vw] lg:ml-15">
                First/ Original Portfolio Website
         </h1>
        <p className="mt-10 text-center lg:text-left relative text-white font-[poppins] lg:text-lg lg:ml-180 lg:max-w-[50vw] lg:bottom-90">
        This was the first personal website I ever built, created entirely with vanilla HTML and CSS.
         It marked my introduction to web development and served as a hands-on way to explore structure, 
         styling, and responsive design from the ground up. While simple in function, it laid the foundation 
         for my growth as a developer—teaching me the importance of clean code, layout design, and
          user experience. Looking back, it’s a great reminder of how far I’ve come.</p>
          <div className="flex justify-center">
             <a 
            href="https://github.com/AayushPat/portfolio-webOLD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:text-4xl relative top-10 sm:top-2 lg:left-[20vw] lg:top-auto lg:bottom-60 px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
            View on GitHub
            </a>
            </div>
            <p className="hidden lg:block relative text-white font-[poppins] text-lg lg:ml-40 max-w-[50vw] bottom-40">
              Scroll down and click on the gray to check it out!
            </p>

            {/* Show only on small screens */}
            <p className="block lg:hidden relative text-white font-[poppins] text-lg text-center mt-[7vh] px-6">
              Open this page in a bigger window to check it out!
            </p>
            <iframe
            src="/oldsite/index.html"
            className="relative h-0 lg:w-full lg:h-[100vh] bottom-40"
            title="Old Portfolio"
            ></iframe>
      </div>  
    )
}