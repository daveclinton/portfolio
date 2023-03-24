import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="about">
        <div className="aboutContainer">
          <div data-aos="slide-right" className="aboutLeft">
            <div className="aboutLeftHeading">
              <h2 style={{ color: "white" }}> My Tech Stack </h2>
            </div>
            <div className="skills">
              <div className={`btn cardBtn call-Btn`}>
                Javascript/TypeScript
              </div>
              <div className={`btn cardBtn call-Btn`}>HTML&CSS</div>
              <div className={`btn cardBtn call-Btn`}>Python</div>
              <div className={`btn cardBtn call-Btn`}>React js</div>
              <div className={`btn cardBtn call-Btn`}>Django</div>
              <div className={`btn cardBtn call-Btn`}>
                Node Js & The Express Framework
              </div>
              <div className={`btn cardBtn call-Btn`}>
                MongoDB & Mongoose Library
              </div>
            </div>
          </div>
          <div
            className="aboutRight"
            style={{ color: props.mode === "light" ? "black" : "whitesmoke" }}
          >
            <div className="top">
              <h2 data-aos="fade-left" data-aos-delay="100">
                About Me
              </h2>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="middle">
              <p>
                I am a Software Developer with over 2 years of experience in
                developing impactful web applications. A team collaborator
                aiming at working with teams to efficiently handle building of
                systems from ideation to production. Check out my professional
                experience:{" "}
                <a href="https://www.linkedin.com/in/clintondavid46" target="_">
                  @LinkedIn!{" "}
                </a>
                Feel free to tweet me{" "}
                <a href="https://twitter.com/daveclintonn" target="_">
                  {" "}
                  @daveclinton{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
