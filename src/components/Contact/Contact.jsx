import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-web';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = (props) => {

  const form = useRef();

  const container = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q15zjhj', 'template_qlzqleo', form.current, '92WgRZ8zIxke95Qe4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  useEffect(() => {
    Lottie.loadAnimation({
     container: container.current,
     renderer: 'svg',
     loop: true,
     autoplay: true,
     animationData: require('../../Assets/lf30_editor_ogkfwzml.json')
    })
   }, [])

  return (
    <>
    <div className="footer" id='contact'>
      <p>What's Next ?</p>
      <h2 className='contactHeading'>Contact Me!</h2>
        <div className="footerCard container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-7 form-group mx-auto">
                <input type="text" className='form-control' placeholder='Name' name='name' style={{ border: 'none', color: props.mode ==='light'? 'black': 'whitesmoke', backgroundColor: props.mode ==='light'? 'white': '#181a1c'}}/>
              </div>
              <div className="col-7 form-group mx-auto pt-2">
                <input type="email" className='form-control' placeholder='Email Address' name='email' style={{ border: 'none', color: props.mode ==='light'? 'black': 'whitesmoke', backgroundColor: props.mode ==='light'? 'white': '#181a1c'}}/>
              </div>
              <div className="col-7 form-group mx-auto pt-2">
                <input type="text" className='form-control' placeholder='Subject' name='subject' style={{ border: 'none', color: props.mode ==='light'? 'black': 'whitesmoke', backgroundColor: props.mode ==='light'? 'white': '#181a1c'}}/>
              </div>
              <div className="col-7 form-group mx-auto pt-2">
                <textarea className='form-control' id="" cols="30" rows="8" placeholder='Your Message' name='message' style={{ border: 'none', color: props.mode ==='light'? 'black': 'whitesmoke', backgroundColor: props.mode ==='light'? 'white': '#181a1c'}}></textarea>
              </div>
              <div className="col-7 mx-auto pt-3">
                <input type="submit" className=' btn sendEmailBtn' value='Send Email'></input>
              </div>
            </div>

            </form>
        </div>
            {/* <p className='copyRight'>Crafted with Love by Vaibhav</p> */}
    </div>
    </>
  )
}

export default Contact