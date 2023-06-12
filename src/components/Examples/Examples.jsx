import React from 'react';

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
]

const Examples = () => {

    return <div className='examples container'>
        <swiper-container
            slides-per-view="3"
            navigation="true"
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