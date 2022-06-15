import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* App Development */}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Online Education System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ecommerce Applicaiton</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>All Kind of Customized App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>VOIP Incomming/Outgoing Video/Audio Call App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>API integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Full Stack App Development with Firebase</p>
            </li>
          </ul>
        </article>


        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ecommerce Application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Online Education System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Blog/Porfolio Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>All Kind of Website as Required</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Customized Admin Panel</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Backend/Server Site Application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Customized Frontend Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Database Design</p>
            </li>
          </ul>
        </article>

        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Website Application Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Mobile Application Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Customized Widget Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Meaningful Logo Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Can Support Photo Editing by Photoshop & Illustrator</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Can Support Video Editing by Premiere Pro & After Effects</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services