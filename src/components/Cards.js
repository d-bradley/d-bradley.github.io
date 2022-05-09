import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from './images/arduino_image.jpg';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Whether you have a job interview in person or online, you can expect a few standard questions. 
              When you first meet, many hiring managers will ask you to introduce yourself. 
              By giving a thoughtful answer, you can make a good first impression on any potential employer. 
              In this article, we discuss how to respond to a “Tell me about yourself" prompt during 
              a software developer interview and we provide a self-introduction sample for every career level.Whether you have a job interview in person or online, you can expect a few standard questions. 
              When you first meet, many hiring managers will ask you to introduce yourself. 
              By giving a thoughtful answer, you can make a good first impression on any potential employer. 
              In this article, we discuss how to respond to a “Tell me about yourself" prompt during 
              a software developer interview and we provide a self-introduction sample for every career level.'
              label='About'
              path='/about'
              src={Image1}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;