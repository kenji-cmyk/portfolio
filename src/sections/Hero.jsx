import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { resumeInfo, words } from "../constants";
import useInView from "../hooks/useInView";
import useHeroCanvasActive from "../hooks/useHeroCanvasActive";

const HeroExperience = lazy(() =>
  import("../components/models/hero_models/HeroExperience")
);

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [hero3dRef, shouldRenderHero3d] = useInView({
    rootMargin: "200px",
    once: false,
  });
  const isHeroCanvasActive = useHeroCanvasActive();

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt=""
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>for Scalable</h1>
              <h1>Backend Products</h1>
            </div>

            <p className="text-white-50 md:text-lg relative z-10 pointer-events-none max-w-3xl leading-8">
              Hi, I'm Nguyen Anh Khoi, a Backend Developer
            </p>
            <p className="text-white-50 md:text-base relative z-10 pointer-events-none max-w-3xl leading-7">
              I work with authentication and authorization systems including
              JWT, 2FA, and RBAC, and I am interested in Clean Architecture,
              backend performance optimization, distributed systems, DevOps,
              fintech backend engineering, and AI-powered architectures.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Button
                text="See My Projects"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
              <a
                href={resumeInfo.filePath}
                target="_blank"
                rel="noreferrer"
                className="md:w-56 md:h-16 w-60 h-12 border border-black-50 bg-black-100 rounded-lg flex-center text-white-50 font-semibold transition-colors duration-300 hover:bg-black-50"
              >
                Resume
              </a>
            </div>
          </div>
        </header>

        <figure className="hidden md:block">
          <div ref={hero3dRef} className="hero-3d-layout">
            {!isMobile && shouldRenderHero3d && isHeroCanvasActive && (
              <Suspense fallback={null}>
                <HeroExperience />
              </Suspense>
            )}
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
