import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css'
import textEditorImage from '../../Assets/TextEditor.png'
import weatherAppImage from '../../Assets/WeatherApp.png'
// import QuotesGenImage from '../../Assets/QuotesGen.png'
import githubSearch from '../../Assets/githubSearch.png'
import rating from '../../Assets/rating.png'
import NewsApp from '../../Assets/NewsApp.png'



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
            fill="#6c63ff"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,165.3C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="portfolio" id="portfolio">
        <h2 className="portfolioHeading">Portfolio</h2>
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
              <a href="https://github.com/vaibhavprasad54/around-the-globe">
                <img className="portfolioImg" src={NewsApp} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#6c63ff" }}>
                  News App
                </h5>
                <p className="card-text">
                  This news app keeps you updated with the news of different
                  trending categories from all over the world!
                </p>
                <a
                  href="https://github.com/vaibhavprasad54/around-the-globe"
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
              <a href="https://vaibhavprasad54.github.io/Github-User-Search/">
                <img className="portfolioImg" src={githubSearch} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#6c63ff" }}>
                  Github User Search
                </h5>
                <p className="card-text">
                  This app displays the github user we search for by fetching it
                  from the Github API.
                </p>
                <a
                  href="https://github.com/vaibhavprasad54/Github-User-Search"
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
              <a href="https://vaibhavprasad54.github.io/Text-Editor/">
                <img className="portfolioImg" src={textEditorImage} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#6c63ff" }}>
                  Text Editor
                </h5>
                <p className="card-text">
                  This dark mode enabled text editor app edits your text the way
                  you want and copies it for you!
                </p>
                <a
                  href="https://github.com/vaibhavprasad54/Text-Editor"
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
              <a href="https://vaibhavprasad54.github.io/rating-component/">
                <img className="portfolioImg" src={rating} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#6c63ff" }}>
                  Rating Component
                </h5>
                <p className="card-text">
                  A rating component made using Javascript similar to the ones
                  on food delivery apps.
                </p>
                <a
                  href="https://github.com/vaibhavprasad54/rating-component"
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
              data-aos-delay="400"
              data-aos-duration="700"
              className="card"
              style={{
                width: "17.5rem",
                color: props.mode === "light" ? "black" : "whitesmoke",
                backgroundColor: props.mode === "light" ? "#f4f4f4" : "#313131",
                border: props.mode === "light" ? "whitesmoke" : "#404040",
              }}
            >
              <a href="https://vaibhavprasad54.github.io/Weather_App">
                <img className="portfolioImg" src={weatherAppImage} alt="" />
              </a>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#6c63ff" }}>
                  Weather App
                </h5>
                <p className="card-text">
                  This weather app displays the weather along with different
                  climate variables of any city you search for.
                </p>
                <a
                  href="https://github.com/vaibhavprasad54/Weather_App"
                  className="btn cardBtn"
                  target="#"
                >
                  {" "}
                  <i class="fa-brands fa-github"></i> Github
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
            fill="#6c63ff"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,165.3C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Portfolio