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
  debounceDelay = 700,
  touchThreshold = 20,
  wheelThreshold = 5
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
          setTimeout(() => navigate(forwardTarget), 300);
        }
        return prev;
      }

      // Call the onSlideChange callback
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
      
      // If we're at the first slide, navigate backward
      if (next < 0) {
        if (onNavigateBackward) {
          onNavigateBackward();
        }
        if (backwardTarget) {
          setTimeout(() => navigate(backwardTarget), 300);
        }
        return prev;
      }

      // Call the onSlideChange callback
      if (onSlideChange) {
        onSlideChange(next, 'backward');
      }

      return next;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, debounceDelay);
  }, [onSlideChange, onNavigateBackward, backwardTarget, navigate, debounceDelay]);

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

    // Add listeners immediately (no delay!)
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