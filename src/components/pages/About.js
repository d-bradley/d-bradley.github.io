import React from 'react';
import CardItem from '../CardItem';
import './About.css'
import '../../App.css';

export default function About() {
  return (
    <>
    <h1 className='about'>A little about who I am...</h1>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Hi there, welcome to my personal webpage :) My name is Dan, I’m a recent graduate of SUNY at Albany where I completed a Bachelor’s of Science in Computer Science. Since graduation I’ve been working as a freelance web developer creating webpages for local artists and businesses using the React framework. I’m also continuing development of my own Java finance application utilizing JavaFX and MySQL. When I’m not programming I have a multitude of different interests that include; playing guitar, hiking, rock climbing, painting, and growing tomatoes. I have worked in multiple roles over the years in a management position and I believe this has given me a unique incite on the needs of a business and how to best help deliver them. I’d love to share my passion for creating and work ethic with you so feel free to reach out!'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}