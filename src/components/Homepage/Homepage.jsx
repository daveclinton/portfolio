import React, {useEffect, useRef} from 'react'
import './Homepage.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-web';
import instagram from '../../Assets/Instagram-1.png'
import linkedin from '../../Assets/LinkedIn.png'
import twitter from '../../Assets/Twitter-1.png'
import resume from '../../Assets/resume-vaibhav.pdf'
// import homeImage from '../../Assets/undraw_programming_re_kg9v.svg'

function Homepage(props) {

  const container = useRef(null);

  useEffect(() => {
      Aos.init({ duration: 1500 });
  }, []);
  

  useEffect(() => {
   Lottie.loadAnimation({
    container: container.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../../Assets/lf30_editor_ixjnsq85.json')
   })
  }, [])


  return (
    <>
    <section className= "home-section p-5 pt-lg-5 text-center text-sm-start" id='home' style={{color: props.mode ==='light'? 'black': 'whitesmoke', backgroundColor: props.mode ==='light'? 'white': '#181a1c'}}>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className='left ' style={{color: props.mode ==='light'? 'black': 'whitesmoke'}}>
            <h2 data-aos="fade-up" data-aos-delay="100">Hey there, <span className="myName">I'm Vaibhav!</span></h2>
            <p data-aos="fade-up" data-aos-delay="300" className="lead my-4">
              I am a Frontend Developer based in India who design appealing and fast user interfaces!
            </p>
            <div className="buttonsHome">
            <a href={resume} download data-aos="fade-up" data-aos-delay="400" className="btn sIcons downloadCvBtn btn-md" style={{width: '143px', fontSize: '1.2rem'}}>Download CV</a>
            <div className="btn socialIcons btn-md" style={{width: '185px', backgroundColor: 'transparent'}}>
             <a className='instaIcon' href="https://www.instagram.com/vaybhav77/?hl=en" target="#"> <img data-aos="fade-up" data-aos-delay="600" className='instaIcon' src={instagram} alt="" /> </a>
             <a className='instaIcon' href="https://www.linkedin.com/in/vaibhav-prasad-495451166/" target="#"> <img data-aos="fade-up" data-aos-delay="650" className='instaIcon' src={linkedin} alt="" /> </a>
             <a className='instaIcon' href="https://twitter.com/webdev_07" target="#"> <img data-aos="fade-up" data-aos-delay="700" className='instaIcon' src={twitter} alt="" /> </a>
            </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="400" className="container " ref={container} style={{paddingBottom: '10px'}}></div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Homepage