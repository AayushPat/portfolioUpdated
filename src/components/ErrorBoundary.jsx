// Import React for error boundary functionality
import React from 'react';

/**
 * ErrorBoundary Component
 * 
 * This component catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the entire app.
 * 
 * This is a class component because React error boundaries must be class components.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    // Reset error state and try rendering again
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Poppins']">
              Oops! Something went wrong
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 font-['Poppins']">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition font-['Poppins'] font-semibold"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-['Poppins'] font-semibold"
              >
                Refresh Page
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-gray-900 p-4 rounded-lg">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs overflow-auto text-red-400">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;

