import React, { useEffect, useRef, useState } from 'react';
import './connect.css';
import  emailjs  from '@emailjs/browser';
// import Form_popup from '../form_popup/Form_popup'
const Connect = () => {
  const form = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwOOex6eJWyjroDWlmndNa5P4Onb567y44VPUmPHPQsYVrEpwRYHEbaBGXqhxMdc9x_/exec"
  const [loading, setloading] = useState(false)
  const sendEmail = (e)=>{
    SendEmail(e);
    handlesubmit(e);
  }



// this is sendint mail
  const SendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_802jkxl', 'template_9cw1lhi', form.current, 'pPb4pgxSbaRK-Q94w')
      .then((result) => {
          console.log(result.text);
          // toggleModal();
          // alert("message sent successfuly");
      }, (error) => {
          console.log(error.text);
    });
  };



/// sending data to google sheet
  const handlesubmit = (e)=>{
    e.preventDefault();
    setloading(true);

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(form.current),
      credentials: 'include',
    headers: {'Authorization': 'Basic' }
    }).then(res =>{
      console.log("form successfully submited");
      setloading(false);
      toggleModal();
    })
    .catch(err => console.log(err))
  }

  
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };

      if(modal) {
        document.body.classList.add('active-modal');
      } else {
          document.body.classList.remove('active-modal');
      }

  
  return (
    <section id="lets-connect">
      <div className="text-connect">
        <h1 className="lable-connect reveal">LET'S CONNECT</h1>
        <p className="side-lable reveal">I'M ALWAYS INTERESTED ABOUT</p>
      </div>
      <div className="skills reveal">
        <span className="skill-show">WEB DEVELOPMENT</span>
        <span className="skill-show">NEW BUSINESSES</span>
        <span className="skill-show">STARTUPS</span>
        <span className="skill-show">PIZZA</span>
        <span className="skill-show">ADVANTURE</span>
      </div>
      <div className="inqury reveal">
        <p className="">
          I'm always INTERESTED about cool stuff. Are you minding a project?
          <button onClick={toggleModal} id = "lets_talk" className="lets-talk">let's talk</button>
        </p>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className={modal ? "modal-content-forward" : "modal-content-backward"}  id='modal-content'>
            <form id='connect_form' ref={form} onSubmit={sendEmail}>
              <label>
                <input type="text" name='from_name' placeholder = "Name" required/>
                <input type="email" name='user_email' placeholder = "e-mail" required />
                <textarea  type="textarea" name='message' placeholder = "Message" required/>
                <input type="submit" ></input>
              </label>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
export default Connect
