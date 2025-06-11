import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';

export const useTeamSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
    loop: true,
    created(s) {
      s.container.style.transitionDuration = '800ms';
      s.container.style.transitionTimingFunction =
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        instanceRef.current?.next();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToPrevious = () => {
    instanceRef.current?.prev();
  };

  const goToNext = () => {
    instanceRef.current?.next();
  };

  return {
    sliderRef,
    instanceRef,
    handleMouseEnter,
    handleMouseLeave,
    goToPrevious,
    goToNext,
  };
};