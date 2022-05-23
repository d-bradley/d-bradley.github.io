import React from 'react';
import CardItem from '../CardItem';
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
              text1='Hi there, welcome to my personal webpage :)'
              text2='My name is Dan, I’m a recent graduate of 
              SUNY at Albany where I completed a Bachelor’s of Science in Computer Science. Since graduation 
              I’ve been working as a freelance web developer creating webpages for local artists and businesses 
              using the React framework. I’m also continuing development of my own Java finance application 
              utilizing JavaFX and MySQL.'
              text3='When I’m not programming I have a multitude of different interests
              that include; playing guitar, hiking, rock climbing, painting, and growing tomatoes. Before finishing
              my degree I worked in a management position at Greenpeace and Guitar Center. I believe this experience
              along with my passion for creating has given me a unique insight on the needs of a business and how to
              help facilitate progress within an organization or company.'
 
              text4='I’d love to share my passion for creating and work ethic with you so feel free to reach out!'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}