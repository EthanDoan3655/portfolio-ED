import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import TLAMB from '../../assets/thomaslamb.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: TLAMB,
    name:'Thomas Lamb',
    review:'insert tommys comment',
  },
  {
    avatar: AVTR1,
    name:'Tommy Lamb',
    review:'ethan is the diesal fr',
  },
  {
    avatar: AVTR1,
    name:'Tommy Lamb',
    review:'ethan is the diesal fr',
  },
  {
    avatar: AVTR1,
    name:'Tommy Lamb',
    review:'ethan is the diesal fr',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Comments from Peers</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials