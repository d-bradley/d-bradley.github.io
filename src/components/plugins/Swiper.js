import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import './Swiper.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';

export default function SwiperObject(props) {


     return (
        <>
        <Swiper
            loop={true}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        <div class="swiper_container">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <SwiperSlide>
                            <ProjectCard />
                        </SwiperSlide>
                    </div>
                    <div class="swiper-slide">
                        <SwiperSlide>
                            <ProjectCard2 />
                        </SwiperSlide>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        </Swiper>
        </>
     );   
}