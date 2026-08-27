// hooks/useScrollNavigation.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollNavigation = ({
  totalSlides,
  onSlideChange,
  onNavigateForward,
  onNavigateBackward,
  forwardTarget,
  backwardTarget = '/',
  initialSlide = 0,
  debounceDelay = 700,
  touchThreshold = 20,
  wheelThreshold = 5
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const isScrolling = useRef(false);
  const navigate = useNavigate();

  // Go to next slide
  const goToNext = useCallback(() => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setCurrentSlide(prev => {
      const next = prev + 1;
      
      // If we're at the last slide, navigate forward
      if (next >= totalSlides) {
        if (onNavigateForward) {
          onNavigateForward();
        }
        if (forwardTarget) {
          // Pass the last slide index when navigating forward
          setTimeout(() => {
            navigate(forwardTarget, { 
              state: { fromSlide: totalSlides - 1 } 
            });
          }, 300);
        }
        return prev;
      }

      if (onSlideChange) {
        onSlideChange(next, 'forward');
      }

      return next;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, debounceDelay);
  }, [totalSlides, onSlideChange, onNavigateForward, forwardTarget, navigate, debounceDelay]);

  // Go to previous slide
  const goToPrevious = useCallback(() => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setCurrentSlide(prev => {
      const next = prev - 1;
      
      // If we can go to previous slide
      if (next >= 0) {
        if (onSlideChange) {
          onSlideChange(next, 'backward');
        }
        return next;
      }
      
      // We're on the FIRST slide - tell the page
      if (onSlideChange) {
        onSlideChange(0, 'backward-at-start');
      }
      
      return prev;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, debounceDelay);
  }, [onSlideChange, debounceDelay]);

  // Wheel event handler
  const handleWheel = useCallback((e) => {
    e.preventDefault();

    if (e.deltaY > wheelThreshold) {
      goToNext();
    } else if (e.deltaY < -wheelThreshold) {
      goToPrevious();
    }
  }, [goToNext, goToPrevious, wheelThreshold]);

  // Touch event handlers
  let touchStartY = 0;
  
  const handleTouchStart = useCallback((e) => {
    touchStartY = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (deltaY > touchThreshold) {
      goToNext();
    } else if (deltaY < -touchThreshold) {
      goToPrevious();
    }
  }, [goToNext, goToPrevious, touchThreshold]);

  // Keyboard arrow key support
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    }
  }, [goToNext, goToPrevious]);

  // Set up event listeners
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    window.addEventListener('wheel', handleWheel, { passive: false, signal });
    window.addEventListener('touchstart', handleTouchStart, { passive: true, signal });
    window.addEventListener('touchend', handleTouchEnd, { passive: true, signal });
    window.addEventListener('keydown', handleKeyDown, { signal });

    return () => {
      abortController.abort();
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  // Reset slide when component unmounts
  useEffect(() => {
    return () => {
      isScrolling.current = false;
    };
  }, []);

  return {
    currentSlide,
    setCurrentSlide,
    goToNext,
    goToPrevious
  };
};