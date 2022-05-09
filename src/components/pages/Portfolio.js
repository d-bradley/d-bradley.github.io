import React from 'react';
import '../../App.css';
import SwiperObject from '../plugins/Swiper';

export default function Portfolio(props) {
  return (
    <>
    <h1 className='portfolio'>Projects I've worked on...</h1>
    <div className='swiper_container'>
      <ul className='swiper-object'>
        <SwiperObject
        />
      </ul>
    </div>
    </>
  )
}