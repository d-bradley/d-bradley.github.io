import React from 'react';
import '../Cards.css';
import './ProjectCard.css';

export default function CardItem(props) {
  return (
    <>
    <div className='projectcard'>
      <li className='projectcard_item'>
        <div className='projectcard_link'>
          <div className='projectcard_title'>
              <h2 className='projectcard_title_info'>{props.title}</h2>
          </div>
          <div className='projectcard_body'>
            <div className='projectcard_chunk'>
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={props.src}
              />
            </div>
            <div className='projectcard_chunk'>
              <div className='projectcard_info'>
                <h5 className='projectcard_text'>{props.text}</h5>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
    </>
  );
}