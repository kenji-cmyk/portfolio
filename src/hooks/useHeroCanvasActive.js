import { useEffect, useState } from "react";

const useHeroCanvasActive = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let frameId = null;

    const update = () => {
      const hero = document.getElementById("hero");

      if (!hero) {
        setIsActive(true);
        frameId = null;
        return;
      }

      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const shouldBeActive = rect.bottom > -100 && rect.top < viewportHeight + 100;

      setIsActive((current) =>
        current === shouldBeActive ? current : shouldBeActive
      );

      frameId = null;
    };

    const scheduleUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return isActive;
};

export default useHeroCanvasActive;
