import React from 'react';

export default function ContactCard(props) {
  return (
    <>
      <li className='cards__item__contact'>
        <div className='cards__item__box__contact' to={props.path}>
            <div className='cards__item__info'>
                <h2 className='cards__item__title'>{props.title}</h2>
            </div>
            <div className='cards__item__body'>
                <div className='cards__item__chunk'>   
                    <div className='cards__link'>
                    <a className='contact_links' href='mailto: d.bradley6@outlook.com'>
                        <i class="fa-solid fa-envelope fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='cards__item__desc'>{props.emaildesc}</h3>
                    </div>
                </div>
                <div className='cards__item__chunk'>
                    <div className='cards__link'>
                        <a className='contact_links' href='https://www.linkedin.com/in/danbradley6/' target={'_blank'} rel="noreferrer">
                            <i class="fa-brands fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='cards__item__desc'>{props.linkeddesc}</h3>
                    </div>
                </div>
                <div className='cards__item__chunk'>  
                    <div className='cards__link'>
                        <a className='contact_links' href='https://github.com/d-bradley' target={'_blank'} rel="noreferrer">
                            <i class="fa-brands fa-github fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='cards__item__desc'>{props.githubdesc}</h3>
                    </div>
                </div>
            </div>
        </div>
      </li>
    </>
  );
}