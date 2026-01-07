import NavBar from "../components/NavBar";
import LazyImage from "../components/LazyImage";

export default function P4(){
    return(
      <main id="main-content" className="absolute bg-black w-full min-h-[100vh] lg:min-h-[200vh]">
        <NavBar textColor="text-purple-200"/>
        <h1 className="text-white text-4xl lg:text-8xl text-center lg:text-left font-[poppins] mt-10 lg:max-w-[45vw] lg:ml-15">
            AI File Organizer
        </h1>
        <p className="text-center lg:text-left mt-32 lg:mt-36 mb-0 pb-0 leading-tight relative text-white font-[poppins] lg:text-lg lg:ml-180 lg:max-w-[50vw] lg:bottom-65">
        This project began as a file-sorting assistant but evolved into a practical study of local LLM deployment and optimization using Ollama.
        I gained hands-on experience hosting AI models locally, experimenting with model parameters, and optimizing token usage to reduce latency. 
        One of the core challenges was shrinking prompts as much as possible to speed up responses while preserving enough context for accurate classification.
        Building this system taught me how prompt design, token limits, and model settings directly impact performance and accuracy, and how to integrate AI reasoning safely into real file system operations.
        </p>
        
        <div className="flex justify-center -mt-[70px] lg:-mt-[200px] mb-6">
          <a 
            href="https://github.com/AayushPat/AI-file-sorter-" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:text-4xl px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            aria-label="View AI File Organizer on GitHub (opens in new tab)"
          >
            View on GitHub
          </a>
        </div>

        {/* Before/After Desktop Comparison */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center -mt-[30px] lg:-mt-[30px] px-4">
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Before</h2>
            <LazyImage 
              src="/desktopbefore.png" 
              alt="Desktop before using AI File Organizer showing unorganized files" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">After</h2>
            <LazyImage 
              src="/desktopafrer.png" 
              alt="Desktop after using AI File Organizer showing organized files" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* GUI Screenshots */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center -mt-[30px] lg:-mt-[30px] px-4">
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Main Interface</h2>
            <LazyImage 
              src="/regularinUse.png" 
              alt="AI File Organizer main GUI interface with Windows 95 style design" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Action Confirmation</h2>
            <LazyImage 
              src="/confirm.png" 
              alt="AI File Organizer confirmation dialog showing file actions to be executed" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>  
    )
}

