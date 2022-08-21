import React from 'react'
import './about.css'
import ME from '../../assets/mahmud-min.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="me" /> 
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>30+ completed</small>
              </article>
          </div>
          <p>
            I'm a graduate Engineer in Computer Science & Engineering ( from <a href="http://www.kuet.ac.bd/" target="_blank" rel="noreferrer" > Khulna University of Engineering and Technology</a>). Now, I(we) am fully dedicated to establishing an ed-tech company<a href="https://prottoy.com.bd" target="_blank" rel="noreferrer" > Prottoy </a>in Bangladesh.
            <br/><br/>
            I'm fully passionate to develop something new with the latest technology. I have experience developing 20+ Mobile apps and 4+ websites as well as working as a team member and lead the team.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


      
    </section>
  )
}

export default About