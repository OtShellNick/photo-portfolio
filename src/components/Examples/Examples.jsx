import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Examples.scss';

const Examples = () => {
    const PHOTOS = useSelector(({ examples }) => examples.photos);

    const swiperEl = useRef(null);
    const nav = useNavigate();
    useEffect(() => {

        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        };

        Object.assign(swiperEl.current, swiperParams);
        swiperEl.current.initialize();
    }, [])

    return <div className='examples container'>
        <swiper-container
            ref={swiperEl}
            init="false"
            navigation="true"
            touch='true'
            pagination='true'
            css-mode="true"
            speed="500"
            loop="true">
            {PHOTOS.map(({ photo, alt, text }, index) => {
                return <swiper-slide key={alt + index}>
                    <div className='examples__slide' style={{ backgroundImage: `url('${photo}')` }}>
                        <span className='examples__slide_text'>{text}</span>
                    </div>
                </swiper-slide>
            })}
        </swiper-container>
    </div>
};

export default Examples;