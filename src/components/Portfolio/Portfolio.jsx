import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

function Portfolio(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="waveBg">
        <svg
          className="waveUpper"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a9792b"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,165.3C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="portfolio" id="portfolio">
        <h2 className="portfolioHeading">COMMITS</h2>
        <div className="row">
          <div className="cardContainer">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
              className="card"
              style={{
                width: "17.5rem",
                color: props.mode === "light" ? "black" : "whitesmoke",
                backgroundColor: props.mode === "light" ? "#f4f4f4" : "#313131",
                border: props.mode === "light" ? "whitesmoke" : "#404040",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#a9792b" }}>
                  Paperspace
                </h5>
                <p className="card-text">
                  Here, I share my paid paperspace articles. Paperspace is the
                  platform for AI developers providing the speed and scale
                  needed to take AI models from concept to production.
                </p>
                <a
                  href="https://blog.paperspace.com/author/david-clinton/"
                  className="btn cardBtn"
                  target="#"
                >
                  Read Articles
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
              className="card"
              style={{
                width: "17.5rem",
                color: props.mode === "light" ? "black" : "whitesmoke",
                backgroundColor: props.mode === "light" ? "#f4f4f4" : "#313131",
                border: props.mode === "light" ? "whitesmoke" : "#404040",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#a9792b" }}>
                  Medium Artcles
                </h5>
                <p className="card-text">
                  Here, I share my insights on Frontend Development with a focus
                  on React and TypeScript. Join me as I delve into the latest
                  trends and best practices in this exciting field.
                </p>
                <a
                  href="https://medium.com/@clintondavid46"
                  className="btn cardBtn"
                  target="#"
                >
                  Read Articles
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="700"
              className="card"
              style={{
                width: "17.5rem",
                color: props.mode === "light" ? "black" : "whitesmoke",
                backgroundColor: props.mode === "light" ? "#f4f4f4" : "#313131",
                border: props.mode === "light" ? "whitesmoke" : "#404040",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#a9792b" }}>
                  My Personal Blog
                </h5>
                <p className="card-text">
                  To improve your experience, I am currently working on the
                  backend of this application to provide a seamless experience.
                  I am utilizing Node Express and MongoDB.
                </p>
                <a
                  href="https://github.com/daveclinton/blog-backend"
                  className="btn cardBtn"
                  target="#"
                >
                  {" "}
                  <i class="fa-brands fa-github"></i> Github
                </a>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="700"
              className="card"
              style={{
                width: "17.5rem",
                color: props.mode === "light" ? "black" : "whitesmoke",
                backgroundColor: props.mode === "light" ? "#f4f4f4" : "#313131",
                border: props.mode === "light" ? "whitesmoke" : "#404040",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#a9792b" }}>
                  Dev.to Articles
                </h5>
                <p className="card-text">
                  Welcome to my Dev.to world! Here, I share my journey as a
                  self-taught developer. This is to help keep tabs with my
                  progress this far
                </p>
                <a
                  href="https://dev.to/kuchotony"
                  className="btn cardBtn"
                  target="#"
                >
                  Read Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerWave">
        <svg
          className="waveLower"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a9792b"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,165.3C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Portfolio;
