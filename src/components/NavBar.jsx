import { useEffect, useRef, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 10;

        if (isScrolled !== scrolledRef.current) {
          scrolledRef.current = isScrolled;
          setScrolled(isScrolled);
        }

        frameRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Nguyen Anh Khoi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, newTab }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  target={newTab ? "_blank" : undefined}
                  rel={newTab ? "noreferrer" : undefined}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
