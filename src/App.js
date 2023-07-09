import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import SocialLinks from "./components/SocialLinks";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const sections = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScroll = () => {
    const scrollPosition =
      document.querySelector(".right-side").scrollTop + 300; // Adjust the offset if needed

    const active = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        return (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        );
      }
      return false;
    });

    if (active) {
      setActiveSection(active.id);
    }
  };

  useEffect(() => {
    const rightSideDiv = document.querySelector(".right-side");

    rightSideDiv.addEventListener("scroll", handleScroll);

    return () => {
      rightSideDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" App container-fluid pt-5">
      <div className="row pt-5">
        <div className="col-0  col-md-2"></div>
        <div className="col-12 col-md-3 left-side position-relative">
          <Introduction />
          {sections.map((section) => (
            <div
              key={section.id}
              className={` left-item-wrapper-parent sidebar-item d-none d-md-block ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="left-item-wrapper">
                <hr />
                {section.name}
              </div>
            </div>
          ))}
          <SocialLinks />
        </div>
        <div className="col-0 col-md-1"></div>

        <div className="col-12 col-md-5">
          <div className="right-side">
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
        <div className="col-0 col-md-1"></div>
      </div>
    </div>
  );
};

export default App;
