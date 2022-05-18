import React from 'react';
import '../Cards.css';
import './ProjectCard.css';
import ProjectItem from './ProjectItem';
import Image1 from '../images/arduino_image.jpg';

export default function ProjectCard2() {
  return (
    <div className='projectcard_object'>
      <div className='projectcard_container'>
        <div className='cards__wrapper'>
          <ul className='projectcard_item_arduino'>
            <ProjectItem
              title='Temperature and Humidity Sensor'
              text='Built using the Arduino Uno microcontroller in combination with a DHT11 sensor and a LCD Screen. 
              This sensor is to be implemented in a greenhouse setting to monitor a crop such as tomatoes. Every 
              plant has a specific temperature and humidity range that they thrive in. By changing the backlight 
              color of the LCD screen the user can easily distinguish if the greenhouse conditions are within the 
              optimal range. For this sensor, if either temperature or humidity drops below a certain threshold the 
              backlight will change color to blue. Going above either threshold value will change the backlight to 
              red and being in the optimal bounds the backlight remains green. This is just one of many projects 
              I’ve worked on using this microcontroller; others include light sensors, alarms, electric motors, 
              custom 8-bit LCD text and more!'
              path='/about'
              src={Image1}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}