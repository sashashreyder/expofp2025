import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return ref;
};

export default useScrollAnimation;