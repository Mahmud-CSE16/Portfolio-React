import React from 'react'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import {FaGlobeAsia} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href='https://mahmud.prottoy.com.bd' rel="noreferrer" target="_blank"> <FaGlobeAsia /> </a>
        <a href='https://www.linkedin.com/in/mahmudul7959/' rel="noreferrer" target="_blank"> <BsLinkedin /> </a>
        <a href='https://github.com/Mahmud-CSE16' rel="noreferrer" target="_blank"> <BsGithub /> </a>
        <a href='https://www.facebook.com/mahmudul7959' rel="noreferrer" target="_blank"> <BsFacebook /> </a>

    </div>
  )
}

export default HeaderSocials