import React from 'react'

import {BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href='https://mahmud.prottoy.com.bd/' rel="noreferrer" target="_blank"> <BsLinkedin /> </a>
        <a href='https://mahmud.prottoy.com.bd/' rel="noreferrer" target="_blank"> <BsGithub /> </a>
        <a href='https://mahmud.prottoy.com.bd/' rel="noreferrer" target="_blank"> <BsFacebook /> </a>

    </div>
  )
}

export default HeaderSocials