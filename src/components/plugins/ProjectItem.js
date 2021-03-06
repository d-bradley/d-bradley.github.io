import React from 'react';
import '../Cards.css';
import './ProjectCard.css';

export default function CardItem(props) {
  return (
    <>
      <div className='projectcard'>
        <div className='projectcard_link'>
          <div className='projectcard_title'>
              <h2 className='projectcard_title_info'>{props.title}</h2>
          </div>
          <div className='projectcard_body'>
            <div className='projectcard_chunk'>
              <img
                className='projectcard-image'
                alt='Project'
                src={props.src}
              />
              <div className='projectcard_info'>
                <h5 className='projectcard_text'>{props.text}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}