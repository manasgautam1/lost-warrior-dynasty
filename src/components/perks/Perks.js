import React from 'react';
import perkImg from './perks-img.png'
// import Swiper core and required modules
import SwiperCore, {Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const Perks = () => {
  return (
    <div id='perks' className="perks-section">
      <div className='container-xxl px-xxl-0 px-3'>
        <div className='border-cont py-5'>
            <Swiper
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                // when window width is >= 0px
                0: {
                    slidesPerView: 1,
                },
                }}
            >
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-5">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minimveniam. </p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                    <div>
                        <img src={perkImg} alt="" />
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-5">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minimveniam. </p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                    <div>
                        <img src={perkImg} alt="" />
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="left mb-md-0 mb-5">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minimveniam. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                        <div>
                        <img src={perkImg} alt="" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-5">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minimveniam. </p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                    <div>
                        <img src={perkImg} alt="" />
                    </div>
                    </div>
                </div>  
                </SwiperSlide>
            </Swiper>
        </div>       
    </div>
    </div>
  )
}

export default Perks