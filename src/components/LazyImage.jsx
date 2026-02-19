// Import React hooks for lazy loading
import { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component
 * 
 * A performant image component that implements lazy loading and
 * provides loading states. Images are only loaded when they enter
 * the viewport, improving initial page load performance.
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Other image attributes
 */
export default function LazyImage({ src, alt, className = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If the image is already in the browser cache, skip the observer entirely
    const probe = new Image();
    probe.src = src;
    if (probe.complete) {
      setIsInView(true);
      setIsLoaded(true);
      return;
    }

    if (!imgRef.current) return;

    // Otherwise use IntersectionObserver to lazy load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before image enters viewport
        threshold: 0.01
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
      observer.disconnect();
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div ref={imgRef} className="relative inline-block">
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center ${className}`}>
          <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className={`absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400 text-sm ${className}`}>
          Failed to load image
        </div>
      )}
      
      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}

