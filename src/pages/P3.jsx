import NavBar from "../components/NavBar";

export default function P3(){
    return(
      <div className="absolute bg-black w-full h-[100vh] overflow-auto">
        <NavBar textColor="text-red-200"/>
        <h1 className="text-center lg:text-left text-white text-4xl lg:text-8xl font-[poppins] mt-5 lg:mt-20 lg:max-w-[45vw] lg:ml-15">
        Canvas to Google Calendar Sync Tool
        </h1>
        <p className="text-center lg:text-left mt-10 lg:mt-0 relative text-white font-[poppins] lg:text-lg lg:ml-180 lg:max-w-[50vw] lg:bottom-65">
        This Python-based automation tool connects the Canvas LMS with Google Calendar to help students
         stay organized by automatically syncing assignment due dates. It uses the Canvas API to fetch course 
         and assignment data, then authenticates with the Google Calendar API using a service account to 
         create events for each assignment. Built with robust error handling and logging, the script ensures
          that only valid due dates are processed and added to the user’s primary calendar</p>
          <div className="flex justify-center">
             <a 
            href="https://github.com/AayushPat/gcalander" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:text-4xl top-10 lg:top-auto relative lg:left-80 lg:bottom-40 px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
            View on GitHub
            </a>
            </div>
      </div>  
    )
}