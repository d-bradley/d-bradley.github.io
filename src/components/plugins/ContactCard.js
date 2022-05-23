import React from 'react';

export default function ContactCard(props) {
  return (
    <>
      <div className='contact-card'>
        <div className='contact-card-container' to={props.path}>
            <div className='contact-card-info'>
                <h2 className='cards__item__title'>{props.title}</h2>
            </div>
            <div className='cards__item__body'>
                <div className='card-chunk'>   
                    <div className='cards__link'>
                    <a className='contact-links' href='mailto: d.bradley6@outlook.com'>
                        <i class="fa-solid fa-envelope fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='card-link-name'>{props.emaildesc}</h3>
                    </div>
                </div>
                <div className='card-chunk'>
                    <div className='cards__link'>
                        <a className='contact-links' href='https://www.linkedin.com/in/danbradley6/' target={'_blank'} rel="noreferrer">
                            <i class="fa-brands fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='card-link-name'>{props.linkeddesc}</h3>
                    </div>
                </div>
                <div className='card-chunk'>  
                    <div className='cards__link'>
                        <a className='contact-links' href='https://github.com/d-bradley' target={'_blank'} rel="noreferrer">
                            <i class="fa-brands fa-github fa-3x"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='card-link-name'>{props.githubdesc}</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}