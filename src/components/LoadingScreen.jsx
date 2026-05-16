import { useEffect, useMemo, useState } from "react";
import { useProgress } from "@react-three/drei";

import { abilities, projects, socialImgs, words } from "../constants";

const loaderText = "ANH KHOI";
const minimumLoadTime = 1800;

const preloadImage = (src) =>
  new Promise((resolve) => {
    if (!src || src.startsWith("http")) {
      resolve();
      return;
    }

    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });

const LoadingScreen = ({ onComplete }) => {
  const { active, loaded, progress, total } = useProgress();
  const [pageReady, setPageReady] = useState(false);
  const [imageProgress, setImageProgress] = useState(0);
  const [textAnimationDone, setTextAnimationDone] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const imageSources = useMemo(() => {
    const sources = [
      "/images/bg.png",
      "/images/arrow-down.svg",
      "/images/star.png",
      ...words.map((word) => word.imgPath),
      ...abilities.map((ability) => ability.imgPath),
      ...projects.map((project) => project.image),
      ...socialImgs.map((social) => social.imgPath),
    ];

    return [...new Set(sources.filter(Boolean))];
  }, []);

  useEffect(() => {
    let cancelled = false;

    const waitForWindowLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => {
            window.addEventListener("load", resolve, { once: true });
          });

    const waitForFonts = document.fonts?.ready ?? Promise.resolve();
    const waitForMinimumTime = new Promise((resolve) =>
      window.setTimeout(resolve, minimumLoadTime)
    );

    const waitForImages = Promise.all(
      imageSources.map((src, index) =>
        preloadImage(src).then(() => {
          if (!cancelled) {
            setImageProgress(Math.round(((index + 1) / imageSources.length) * 100));
          }
        })
      )
    );

    Promise.all([
      waitForWindowLoad,
      waitForFonts,
      waitForMinimumTime,
      waitForImages,
    ]).then(() => {
      if (!cancelled) {
        setPageReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [imageSources]);

  useEffect(() => {
    const modelReady = !active && (total === 0 || loaded >= total || progress >= 100);

    if (!pageReady || !modelReady || !textAnimationDone) {
      return undefined;
    }

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 250);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 750);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [active, loaded, onComplete, pageReady, progress, textAnimationDone, total]);

  const modelProgress = total === 0 && !active ? 100 : progress;
  const combinedProgress = pageReady
    ? 100
    : Math.min(99, Math.round(modelProgress * 0.65 + imageProgress * 0.35));

  return (
    <div className={`loading-screen ${isLeaving ? "is-leaving" : ""}`}>
      <div className="loading-word" aria-label={loaderText}>
        {[...loaderText].map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={letter === " " ? "loading-space" : ""}
            style={{ "--letter-index": index }}
            onAnimationEnd={
              index === loaderText.length - 1
                ? () => setTextAnimationDone(true)
                : undefined
            }
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="loading-status" aria-hidden="true">
        {combinedProgress}% {active ? "loading" : "ready"}
      </div>
    </div>
  );
};

export default LoadingScreen;
