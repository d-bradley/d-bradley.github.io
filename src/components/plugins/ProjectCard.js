import React from 'react';
import '../Cards.css';
import './ProjectCard.css';
import ProjectItem from './ProjectItem';
import Image1 from '../images/wframe.PNG';

export default function ProjectCard2() {
  return (
    <div className='projectcard_object'>
      <div className='projectcard_container'>
        <div className='cards__wrapper'>
          <ul className='projectcard_item_arduino'>
            <ProjectItem
              title='WFrame, a Content Management Tool'
              text='Designed and developed a user-friendly content management tool for individuals lacking web development experience using Webiny, an open source framework built on-top of the AWS cloud infrastructure. The design was approached with a hierarchical workspaces in mind to help improve business security and workflow. Security was achieved with the use of authentication and authorization using AWS cognito and was split into four workspaces including; Super User, Admin, Developer, and Editor. A notification center and custom forms were added to help facilitate the needs of creating and maintaining content. Technologies: React, Typescript, GraphQL, AWS'              
              path='/about'
              src={Image1}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}