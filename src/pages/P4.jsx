import NavBar from "../components/NavBar";
import LazyImage from "../components/LazyImage";

export default function P4(){
    return(
      <main id="main-content" className="bg-black w-full min-h-screen">
        <NavBar textColor="text-purple-200"/>

        {/* Header */}
        <div className="px-6 lg:px-16 pt-10 pb-8">
          <h1 className="text-white text-4xl lg:text-8xl font-[poppins] mb-8">
            AI File Organizer
          </h1>
          <p className="text-white font-[poppins] text-base lg:text-lg leading-relaxed max-w-3xl">
            This project began as a simple file sorting assistant but evolved into a practical study of local LLM deployment and optimization using Ollama.
            I gained hands-on experience hosting AI models locally, experimenting with model parameters, and optimizing token usage to reduce latency.
            One of the core challenges was shrinking prompts as much as possible to speed up responses while preserving enough context for accurate classification.
            My first attempt probably would have sorted files beautifully but my prompt was so long I never got to see it even load.
            Building this system taught me how prompt design, token limits, and model settings directly impact performance and accuracy, and how to integrate AI reasoning safely into real file system operations.
          </p>
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center pb-12">
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
        <div className="px-6 lg:px-16 pb-16">
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
            <div className="text-center w-full lg:w-auto">
              <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Before</h2>
              <LazyImage
                src="/desktopbefore.jpg"
                alt="Desktop before using AI File Organizer showing unorganized files"
                className="w-full max-w-xl rounded-lg shadow-2xl"
              />
            </div>
            <div className="text-center w-full lg:w-auto">
              <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">After</h2>
              <LazyImage
                src="/desktopafrer.jpg"
                alt="Desktop after using AI File Organizer showing organized files"
                className="w-full max-w-xl rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* GUI Screenshots */}
        <div className="px-6 lg:px-16 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
            <div className="text-center w-full lg:w-auto">
              <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Main Interface</h2>
              <LazyImage
                src="/regularinUse.jpg"
                alt="AI File Organizer main GUI interface with Windows 95 style design"
                className="w-full max-w-xl rounded-lg shadow-2xl"
              />
            </div>
            <div className="text-center w-full lg:w-auto">
              <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Action Confirmation</h2>
              <LazyImage
                src="/confirm.jpg"
                alt="AI File Organizer confirmation dialog showing file actions to be executed"
                className="w-full max-w-xl rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>
    )
}

