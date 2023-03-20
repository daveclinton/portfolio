import React, { useEffect, useRef } from "react";
import "./Homepage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-web";

function Homepage(props) {
  const container = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/lf30_editor_ixjnsq85.json"),
    });
  }, []);

  return (
    <>
      <section
        className="home-section p-5 pt-lg-5 text-center text-sm-start"
        id="home"
        style={{
          color: props.mode === "light" ? "black" : "whitesmoke",
          backgroundColor: props.mode === "light" ? "white" : "#181a1c",
        }}
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div
              className="left "
              style={{ color: props.mode === "light" ? "black" : "whitesmoke" }}
            >
              <h2 data-aos="fade-up" data-aos-delay="100">
                Hey there, <span className="myName">I'm David</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="300" className="lead my-4">
                I am a Frontend Developer and Technical Writer based in Nairobi
                Kenya
              </p>
              <div className="buttonsHome">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/clintondavid46/"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="btn sIcons downloadCvBtn btn-md"
                  style={{ width: "300px", fontSize: "1.2rem" }}
                  rel="noreferrer"
                >
                  www.linkedin.com
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="container "
              ref={container}
              style={{ paddingBottom: "10px" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
