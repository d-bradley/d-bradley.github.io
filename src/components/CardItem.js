import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__box' to={props.path}>
          <div className='cards__item__info'>
            <h3 className='about-text'>{props.text1}</h3>
            <p className='about-text'>{props.text2}</p>
            <p className='about-text'>{props.text3}</p>
            <p className='about-text'>{props.text4}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;