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
              text='Hi there, my name is Dan, welcome to my personal webpage. I recently graduated from SUNY at Albany this past December and currently do freelance web development. When I’m not programming I have a multitude of different interests including playing guitar, hiking, rock climbing, painting, and growing fresh vegetables every summer. I have worked numerous roles before going back to finish my degree in Computer Science which has given me a unique insight on numerous topics ranging from environmental protection to audio studio equipment. I believe this has helped to make me a more well rounded individual and I’d love to share my creativity and work ethic to you!'
              label='About'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}