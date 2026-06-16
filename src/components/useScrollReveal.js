import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is 10% visible on the screen, trigger the animation
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once it animates in, stop tracking it so it stays visible
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // 0.1 means 10% visibility triggers it
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return elementRef;
}