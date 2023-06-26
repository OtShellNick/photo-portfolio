import React, { useEffect, useRef } from 'react';

import FirstPortrait from '@assets/first_portrait.webp';
import SecondPortrait from '@assets/second_portrait.webp';
import ThirdPortrait from '@assets/third_portrait.webp';

import './Examples.scss';

const PHOTOS = [
    {
        photo: FirstPortrait,
        alt: 'first',
        text: 'Женский портрет'
    },
    {
        photo: SecondPortrait,
        alt: 'second',
        text: 'Контент-съемка'
    },
    {
        photo: ThirdPortrait,
        alt: 'third',
        text: 'Прогулка'
    },
    {
        photo: FirstPortrait,
        alt: 'first',
        text: 'Женский портрет'
    },
    {
        photo: SecondPortrait,
        alt: 'second',
        text: 'Контент-съемка'
    },
    {
        photo: ThirdPortrait,
        alt: 'third',
        text: 'Прогулка'
    },
    {
        photo: FirstPortrait,
        alt: 'first',
        text: 'Женский портрет'
    },
    {
        photo: SecondPortrait,
        alt: 'second',
        text: 'Контент-съемка'
    },
    {
        photo: ThirdPortrait,
        alt: 'third',
        text: 'Прогулка'
    },
];

const Examples = () => {
    const swiperEl = useRef(null);
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