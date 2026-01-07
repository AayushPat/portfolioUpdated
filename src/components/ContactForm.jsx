// Import React for component functionality
import React from "react";

// Import SweetAlert2 for user-friendly notifications
import Swal from 'sweetalert2';

/**
 * ContactForm Component
 * 
 * This component renders a contact form that allows users to send messages.
 * It integrates with Web3Forms API for form submission and provides
 * user feedback through SweetAlert2 notifications.
 * 
 * Features:
 * - Form validation with required fields
 * - API integration with Web3Forms
 * - Success/error notifications
 * - Responsive design
 * - Form reset on successful submission
 */
export default function ContactForm() {

  // State to store form submission result message
  const [result, setResult] = React.useState("");
  
  // State to track submission success/failure
  const [isSuccess, setIsSuccess] = React.useState(null);
  
  // State to track loading state
  const [isLoading, setIsLoading] = React.useState(false);

  /**
   * Handle form submission
   * @param {Event} event - Form submission event
   */
  const onSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Prevent double submission
    if (isLoading) return;
    
    // Show sending message to user
    setResult("Sending....");
    setIsLoading(true);
    
    try {
      // Create FormData object from form inputs
      const formData = new FormData(event.target);

      // Add Web3Forms access key for API authentication
      // Use environment variable if available, fallback to hardcoded value for backwards compatibility
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "75f5b362-6dbb-48b7-ba32-9b36ec39df5a";
      formData.append("access_key", accessKey);

      // Submit form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse response JSON
      const data = await response.json();

      // Handle successful submission
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Clear form fields
        setIsSuccess(true);     
        // Show success notification
        Swal.fire("Success!", "Your message was sent!", "success");
      } else {
        // Handle submission error
        console.error("Error", data);
        setResult(data.message || "An error occurred");
        setIsSuccess(false);
        // Show error notification
        Swal.fire("Oops!", data.message || "Something went wrong.", "error");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Form submission error:", error);
      setResult("Network error. Please try again.");
      setIsSuccess(false);
      Swal.fire("Oops!", "Network error. Please check your connection and try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

    return (
      // Main form container with transparent background
      <form onSubmit={onSubmit}
        className="bg-transparent"
      >
        {/* Form title with responsive sizing */}
        <h2 className="ml-13 text-[5rem] md:text-[12rem] md:ml-5 lg:text-[15rem] text-white font-[Bebas] lg:ml-10">CONTACT ME</h2>
        
        {/* Form fields container with responsive grid layout */}
        <div className="mt-40 sm:mt-0 sm:top-30 ml-10 max-w-[80vw] lg:max-w-[70vw] lg:top-70 absolute grid md:gap-y-2 lg:gap-4 md:top-120 lg:ml-70 md:gap-x-30 md:ml-20 grid-cols-2 md:max-w-[100vw]">
        
        {/* Name field label */}
        <label
          className="mb-2  text-xl md:text-5xl font-[Poppins] font-medium text-gray-100"
          htmlFor="name"
        >
          Name
        </label>  
        
        {/* Email field label */}
        <label
          className="mb-2 text-xl md:text-5xl font-[Poppins] font-medium text-gray-100"
          htmlFor="email"
        >
          Email
        </label>
        
        {/* Name input field */}
        <input
          className="w-[30vw] mb-4 p-2 border border-gray-100 rounded shadow-blue-300 shadow-xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          autoComplete="name"
        />
        
        {/* Email input field */}
        <input
          className="w-full mb-4 p-2 border border-gray-100 rounded shadow-blue-300 shadow-xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          autoComplete="email"
        />
  
        {/* Message field label */}
        <label
          className="mb-2 md:text-5xl font-[Poppins] font-medium text-gray-100"
          htmlFor="message"
        >
          Message
        </label>
        
        {/* Submit button */}
        <button
          className="bg-blue-600 text-white md:text-5xl mt-20 font-[Poppins] md:px-8 md:py-8 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          aria-label="Submit contact form"
          disabled={result === "Sending...."}
        >
          {result === "Sending...." ? "Sending..." : "Send"}
        </button>
        </div>
        
        {/* Message textarea with responsive positioning */}
        <textarea
          className="absolute mt-70 sm:mt-30 w-30 sm:w-50 ml-10 lg:left-60 lg:mt-0 lg:top-125 lg:w-90 lg:h-30 lg:mb-50 md:top-145 md:left-10 md:w-70 border border-gray-300 rounded shadow-blue-300 shadow-xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
          id="message"
          name="message"
          rows="4"
          required
          aria-required="true"
          aria-label="Message"
        ></textarea>
      </form>
    );
  }
