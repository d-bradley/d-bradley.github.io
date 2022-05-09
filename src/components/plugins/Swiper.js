import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper/bundle';
// import Swiper and modules styles
import './Swiper.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';

export default function SwiperObject(props) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        Pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        Navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });

     return (
        <div class="swiper_container">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ProjectCard 
                            Navigation
                            Pagination
                            swiper
                        />
                    </div>
                    <div class="swiper-slide">
                        <ProjectCard2 
                            Navigation
                            Pagination
                            swiper
                        />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
     )   
}