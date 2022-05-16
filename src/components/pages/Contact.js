import React from 'react';
import ContactCard from '../plugins/ContactCard';
import '../../App.css';
import "../plugins/ContactCard.css";

export default function Contact() {
  return (
  <>
  <div className='contact'>
    <div className='contact_cards'>
      <div className='cards__container__contact'>
        <div className='cards__wrapper'>
          <ul className='contact_card_item'>
            <ContactCard
              title= 'Contact Info'
              linkeddesc='LinkedIn'
              emaildesc='Email'
              githubdesc='GitHub'
              info='link'
              label='About'
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}