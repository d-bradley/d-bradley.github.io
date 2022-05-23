import React from 'react';
import '../Cards.css';
import './ProjectCard.css';
import ProjectItem from './ProjectItem';
import Image1 from '../images/remote-backup-photo.PNG';

export default function ProjectCard3() {
  return (
    <div className='projectcard_object'>
      <div className='projectcard_container'>
        <div className='cards__wrapper'>
          <ul className='projectcard_item_arduino'>
            <ProjectItem
              title='Remote Backup'
              text='Programmed in C, this remote backup was designed to allow multiple client side applications to 
              access the same remote server simultaneously. The client has the ability to PUSH, PULL and QUIT text 
              files over the designated port. The server also has response features to update the client on the 
              current action being taken as well as error messages. File info is collected such as filename 
              and file size to ensure the file maintains integrity when being saved to the server.'
              path='/about'
              src={Image1}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}