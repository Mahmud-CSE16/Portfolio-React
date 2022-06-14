import React from 'react'
import './testimonials.css'

import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AnjanPic from "../../assets/anjan.webp"
import SwajanPic from "../../assets/swajan.webp"


const testimonialData =[
  {
    id: 1,
    name: "Shahjahan Md Swajan",
    review: "I met Mahmud at Prottoy. Working with him as a team is really amazing. He holds a strong knowledge of database designing. He also has very strong expertise in developing mobile apps.",
    userPic: SwajanPic,
    profileUrl:"https://www.linkedin.com/in/smswajan/",
  },
  {
    id: 2,
    name: "Anjan Kundu",
    review: "A very talented, Persistent and hardworking guy who is always sinceere about this project work. I feel so blessed having a team partner like him.",
    userPic: AnjanPic,
    profileUrl: "https://www.linkedin.com/in/anjan-kundu-1603/"
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
       {
        testimonialData.map(({name,review,userPic,profileUrl})=>{
          return  <SwiperSlide className='testimonial'>
            <div className="client__avater">
              <a href={profileUrl} target='_blank' rel="noreferrer"><img src={userPic} alt="Swajan" /></a>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        })
       }
       
      </Swiper>
    </section>
  )
}

export default Testimonials