// Import Link component from React Router for client-side navigation
import { Link } from 'react-router-dom';

/**
 * NavBar Component
 * 
 * This component renders the main navigation bar for the application.
 * It provides links to different pages and includes a resume download link.
 * 
 * @param {string} textColor - Optional prop to customize text color (defaults to 'text-black')
 * @returns {JSX.Element} Navigation bar with links to all main pages
 */
export default function NavBar({ textColor = 'text-black' }) {
    return (
    // Main navigation container with responsive styling
    // Uses Poppins font family and responsive text sizes
    <div className={`inline-flex font-["Poppins"] text-sm md:text-3xl gap-x-4 md:ml-9 md:gap-x-8 lg:gap-x-15 mt-4 lg:mt-10 ml-2 lg:ml-10 font-outline-2 bg-transparent ${textColor}`}
    role="group">
          {/* Home page link */}
          <Link to="/" className="hover:underline">Home</Link>
          
          {/* About page link */}
          <Link to="/about" className="hover:underline ">About</Link>
          
          {/* Projects page link */}
          <Link to="/projects" className="hover:underline">Projects</Link>
          
          {/* Contact link - uses state to trigger scroll to contact section */}
          <Link
            to="/"
            state={{ scrollToContact: true }}
            className="hover:underline"
          >
            Contact
          </Link>
          
          {/* Resume download link - opens in new tab */}
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
        </div>
    )
}
