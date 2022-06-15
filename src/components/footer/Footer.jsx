import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import {FaGlobeAsia} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <a href="#home" className='footer__logo'>MAHMUD</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://mahmud.prottoy.com.bd' rel="noreferrer" target="_blank"> <FaGlobeAsia /> </a>
        <a href='https://www.linkedin.com/in/mahmudul7959/' rel="noreferrer" target="_blank"> <BsLinkedin /> </a>
        <a href='https://github.com/Mahmud-CSE16' rel="noreferrer" target="_blank"> <BsGithub /> </a>
        <a href='https://www.facebook.com/mahmudul7959' rel="noreferrer" target="_blank"> <BsFacebook /> </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Md. Mahmudul Islam | All rights reserved & credit goes to EGATOR Youtube Channel</small>
      </div>
    </footer>
  )
}

export default Footer