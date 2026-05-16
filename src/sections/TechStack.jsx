import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TechLogo from "../components/TechLogo";
import TitleHeader from "../components/TitleHeader";
import { backendSkillGroups, techStackImgs } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card, .backend-skill-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Backend Tech Stack and Skills"
          sub="What I use to build production backend systems"
        />
        <div className="tech-grid">
          {techStackImgs.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechLogo
                    name={techStackIcon.name}
                    className="tech-stack-icon"
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="backend-skills-grid">
          {backendSkillGroups.map((group) => (
            <article key={group.title} className="backend-skill-card">
              <div>
                <p className="backend-skill-label">Backend Focus</p>
                <h3>{group.title}</h3>
                <p className="backend-skill-summary">{group.summary}</p>
              </div>
              <div className="backend-skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
