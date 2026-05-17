import { useEffect, useRef, useState } from "react";

const useInView = ({ rootMargin = "300px", once = true } = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin]);

  return [ref, isInView];
};

export default useInView;
