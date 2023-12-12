import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I am currently pursuing Bachelors's degree in Computer Science and Engineering at National Institute of Technology, Silchar",
    highlights: {
      bullets: [
        "Developer",
        "Interactive Front End ",
        "React Developer",
        "Learner",
        "Problem Solving Skills",
        "Creative Thinking",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Introduction..."} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description"> {SCREEN_CONSTSANTS.description}</span>
              <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="https://drive.google.com/file/d/1HPyYn7WKPr8IOZZF8LysJ0AXYWRgEk1g/view?usp=drive_link">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
}