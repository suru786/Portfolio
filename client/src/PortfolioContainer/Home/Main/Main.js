import React from "react";
import { ReactTyped } from "react-typed";
import ScrollService from "../../../utilities/ScrollService";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-parent">
        <div className="main-details">
          <div className="col">
            <div className="col-icon">
              <a href="https://www.facebook.com/profile.php?id=100076344001067">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/suru786">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/suraiya-parween-805715228/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/home?lang=en">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="details-name">
            <span className="main-text">
              Hello, this is <span className="highlighted-text">Suraiya</span>
            </span>
          </div>
          <div className="role-details">
            <span className="main-text">
              <h1>
                {" "}
                <ReactTyped
                  loop
                  typeSpeed={50}
                  backSpeed={30}
                  strings={[
                    "Web Developer ",
                    "Passionate Designer ",
                    "Coder ",
                    "React Developer ",
                    "Problem Solver",
                  ]}
                />
              </h1>
              <span className="role-details-sub">
                Turning Vision into Functionality: Crafting Software Solutions
                that Inspire.
              </span>
            </span>
          </div>
          <div className="main-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="https://drive.google.com/file/d/1HPyYn7WKPr8IOZZF8LysJ0AXYWRgEk1g/view?usp=drive_link">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="picture-background"></div>
        </div>
      </div>
    </div>
  );
}
