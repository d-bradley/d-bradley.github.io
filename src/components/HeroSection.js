import React from 'react';
import '../App.css';
import './HeroSection.css';
import Headshot from './images/Headshot.PNG';

function HeroSection() {
  return (
    <div className='hero-container' id='hero'>
      <h1><img className='main-headshot' src={Headshot} alt='Headshot' /></h1>
      <div className='info-text'>
        <p>Software Engineer | Web Developer</p>
      </div>
      <div className='hero-btns'>
        <a href='https://github.com/d-bradley' target={'_blank'} rel="noreferrer">
          <i class="fa-brands fa-github fa-3x"></i>
        </a>
        <a href='https://www.linkedin.com/in/danbradley6/' target={'_blank'} rel="noreferrer">
          <i class="fa-brands fa-linkedin fa-3x"></i>
        </a>
        <a href='mailto: d.bradley6@outlook.com'>
          <i class="fa-solid fa-envelope fa-3x"></i>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;