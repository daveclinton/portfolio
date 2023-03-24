import * as React from "react";
import "./Homepage.css";
import "aos/dist/aos.css";

function Homepage(props) {
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
                I am a Frontend Developer and Technical Author based in Nairobi
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
            <div className={`card-body container box-style`}>
              <h5 className="card-title" style={{ color: "#a9792b" }}>
                In development
              </h5>
              <p className="card-text">
                To improve your experience, I am currently working on the
                backend of this application to provide a seamless experience. I
                am utilizing Node Express and MongoDB.
              </p>
              <a
                href="https://github.com/daveclinton/blog-backend"
                className={`btn cardBtn call-Btn`}
                target="#"
              >
                <i class="fa-brands fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
