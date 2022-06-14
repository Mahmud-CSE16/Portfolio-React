import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nw4rtst', 'template_3e15qg4', form.current, 'uMI9HP1Bm_qQ6yKP-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mahmudul7959@gmail.com</h5>
            <a className='btn' href="mailto:mahmudul7959@gmail.com" target="_blank" rel="noreferrer">Email me</a>
          </article>

          <article className="contact__option" >
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801521404361</h5>
            <a className='btn' href="https://wa.me/+8801521404361" target="_blank" rel="noreferrer">Send a message</a>
          </article> 

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mahmudul Islam</h5>
            <a className='btn' href="https://m.me/mahmudul7959" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* Email Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email Address' required/>
          <textarea name="message" rows="9" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact