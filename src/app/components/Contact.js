"use client"
import React, { useRef ,useState } from 'react';
import { Toast } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [email,setEmail] = useState();
  const [name,setName] = useState();
  const [subject,setSubject] = useState();
  const [message,setMessage] = useState();
  const [nameErr,setNameErr] = useState(false);
  const [mailErr,setMailErr] = useState(false);
  const [subErr,setSubErr] = useState(false);
  const [msgErr,setMsgErr] = useState(false);
  const [show, setShow] = useState(false);
  const form = useRef();


  const validateForm = () =>{
    if(email.length > 8 ){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail = emailRegex.test(email);
      if(validEmail==false){
      console.log("please enter valid email")
        setMailErr(true);
        return false;
      }else{
        setMailErr(false);
      }
    }
    if(name.length < 3){
      setNameErr(true);
      console.log("please enter valid name")
      return false;
    }
    if(subject.length < 3){
      setSubErr(true);
      console.log("please enter valid subject")
      return false;
    }
    if(message.length < 10){
      setMsgErr(true);
      console.log("please enter valid msg")
      return false;
    }
    setNameErr(false);
    setMailErr(false);
    setSubErr(false);
    setMsgErr(false);
    return true;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if(isValid){
      emailjs.sendForm('service_61j6chy', 'template_7v9vnzs', form.current, 'PRAXSq1OmhmFNnaw5')
      .then((result) => {
          console.log(result.text);
          setShow(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    }else{
      alert("enter valid information");
    }
  };

  return (
    <div className="contact-main-div">
      <div className="contact-main-div">
        <div className="contact-head">Contact</div>
        <div className="contact-para">
            Feel free to reach out to me for any questions or opportunities!
        </div>
        
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
          <Toast.Header style={{display:"flex",justifyContent:"space-between"}}>
            <strong className="mr-auto">Email Sent Successfully !</strong>
          </Toast.Header>
        </Toast>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form-head">Email Me 🚀</div>
            <input placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} type="email" name="user_email" className="contact-input" required/>
            {mailErr? <span className="errMsg">Enter a valid email address.</span>: null}
            <input placeholder="Your Name" onChange={(e)=>setName(e.target.value)} type="text" name="user_name" className="contact-input" required/>
            {nameErr? <span className="errMsg">Name must have more than 3 characters.</span>: null}
            <input placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} name="subject" className="contact-input" required/>
            {subErr? <span className="errMsg">subject must have more than 3 characters.</span>: null}
            <textarea placeholder="Message" name="message" onChange={(e)=>setMessage(e.target.value)} rows="4" className="contact-textarea" required></textarea>
            {msgErr? <span className="errMsg">Message is too Short.</span>: null}
            <input type="submit" className="contact-submit-btn" value="Send"/>
        </form>
      </div>
    </div>
  )
};

export default Contact;
