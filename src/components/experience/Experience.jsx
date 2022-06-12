import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__app">
          <h3>Mobile App Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Flutter</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Android</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>iOS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Google Map</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Custom Design</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Firebase</h4>
            </article>
          </div>
        </div>

        <div className="experience__web">
          <h3>Website Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Django</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Reactjs</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Javascripts</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Rest API</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Custom Design</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='check-iocn'/>
              <h4>Database Design</h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience