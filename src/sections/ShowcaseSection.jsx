import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const primaryProjectRef = useRef(null);
  const secondProjectRef = useRef(null);
  const thirdProjectRef = useRef(null);
  const [primaryProject, ...secondaryProjects] = projects;

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      primaryProjectRef.current,
      secondProjectRef.current,
      thirdProjectRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={primaryProjectRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={primaryProject.image} alt={primaryProject.title} />
            </div>
            <div className="text-content">
              <div className="badges">
                <span>{primaryProject.type}</span>
                <span>{primaryProject.year}</span>
              </div>
              <h2>{primaryProject.title}</h2>
              <p className="text-white-50 md:text-xl">
                {primaryProject.description}
              </p>
              <div className="tech-badges">
                {primaryProject.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {secondaryProjects.map((project, index) => (
              <div
                className="project"
                ref={index === 0 ? secondProjectRef : thirdProjectRef}
                key={project.title}
              >
                <div className="image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="badges">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h2>{project.title}</h2>
                <p className="text-white-50">{project.description}</p>
                <div className="tech-badges compact">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
