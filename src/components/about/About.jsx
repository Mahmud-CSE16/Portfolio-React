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
                <small>5+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>13+ Worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>40+ completed</small>
              </article>
          </div>
          <p>
            I’m a Full Stack Engineer with a passion for building modern and user-friendly solutions. I have experience developing 20+ mobile apps and 20+ websites. I'm skilled in multiple programming languages and have worked both as a team member and a team lead on various projects.
            <br/><br/>
            I'm a graduate Engineer in Computer Science & Engineering ( from <a href="http://www.kuet.ac.bd/" target="_blank" rel="noreferrer" > Khulna University of Engineering and Technology</a>).
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


      
    </section>
  )
}

export default About