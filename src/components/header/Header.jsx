import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/person.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header id="home" >
     <div className="container header__container">
       <h5>Hello I'am</h5>
       <h1>Md. Mahmudul Islam</h1>
       <h5 className='text-light'>Chief Technical Officer at Prottoy | Full Stack Developer | Flutter | Django | Reactjs | Android | iOS | Web | Windows | MacOS</h5>
       <CTA />

       <HeaderSocials />

       <div className='me'>
         <img src={ME} alt='me'/>
       </div>

       <div className='scroll__down'>
         <a href='#contact'>Scroll Down</a>
       </div>
     </div>
   </header>
  )
}

export default Header