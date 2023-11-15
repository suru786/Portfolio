import React from "react";
import Typical from "react-typical";
import './Main.css';
export default function Main() {
  return (
    <div className="main-container">
      <div className="main-parent">
        <div className="main-details">
          <div className="col">
            <div className="col-icon"> 
            
            <a href="https://www.facebook.com/profile.php?id=100076344001067">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/suru786">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/suraiya-parween-805715228/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/home?lang=en">
              <i class="fa-brands fa-twitter"></i>
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
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer ",
                    2000,
                    "Passionate Designer ",
                    2000,
                    "Coder ",
                    2000,
                    "React Developer ",
                    2000,
                    "Problem Solver",
                    2000,
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
            <button className="btn primary-btn">
                Hire Me
            </button>
            <a href="https://drive.google.com/file/d/1SYV5KfYJH5sgt9tdgryadV_nPjjxBHuP/view?usp=sharing">
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
