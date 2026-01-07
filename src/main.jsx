// Import React core library
import React from 'react'

// Import BrowserRouter for client-side routing
import { BrowserRouter } from 'react-router-dom'

// Import createRoot for React 18+ concurrent features
import { createRoot } from 'react-dom/client'

// Import global CSS styles
import './index.css'

// Import the main App component
import App from './App'

// Import ErrorBoundary for error handling
import ErrorBoundary from './components/ErrorBoundary'

/**
 * Application Entry Point
 * 
 * This is where the React application is initialized and mounted to the DOM.
 * The createRoot API is used for React 18+ concurrent features.
 */
createRoot(document.getElementById('root')).render(
  // React.StrictMode: Enables additional development checks and warnings
  <React.StrictMode>
    {/* ErrorBoundary: Catches and handles errors gracefully */}
    <ErrorBoundary>
      {/* BrowserRouter: Provides routing context for the entire application */}
      <BrowserRouter>
        {/* Main App component: The root component containing all routes and logic */}
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
