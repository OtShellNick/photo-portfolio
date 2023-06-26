import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';

import ReviewForm from './ReviewForm';

import IconMen from '@assets/user.svg?jsx';
import CloseIcon from '@assets/popup_close.svg?jsx';

import './Reviews.scss';

const REVIEWS = [
    {
        name: 'Test1',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        name: 'Test2',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip temp dolor sit amet'
    },
    {
        name: 'Test3',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        name: 'Test4',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip temp dolor sit am commodo, Lorem ipsum dolor sit amet, consectetur adip temp dolor sit am commodo'
    },
    {
        name: 'Test5',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        name: 'Test1',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        name: 'Test2',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip temp dolor sit amet'
    },
    {
        name: 'Test3',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
        name: 'Test4',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip temp dolor sit am commodo'
    },
    {
        name: 'Test5',
        avatar: <IconMen className='reviews__card_avatar' />,
        review: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
]

const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const swiper = useRef(null);

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

        Object.assign(swiper.current, swiperParams);
        swiper.current.initialize();
    }, [])

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        content: {
            position: 'absolute',
            maxWidth: 440,
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            overflow: 'auto',
            borderRadius: '10px',
            outline: 'none',
            border: 'none',
            padding: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#7D6F66',
            color: '#FFFFFF',
        },
    };

    return <div className='reviews container'>
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {
                setIsOpen(false);
            }}
            closeTimeoutMS={500}
            contentLabel="Example Modal"
            style={modalStyles}
        >
            <div className='reviews__modal'>
                <CloseIcon className='packets__modal_close' onClick={() => setIsOpen(false)} />
                <h1 className="packets__modal_heading">Оставить отзыв</h1>
                <ReviewForm closeForm={() => setIsOpen(false)} />
            </div>
        </Modal>
        <h1 className='reviews__heading'>Отзывы</h1>
        <swiper-container
            ref={swiper}
            init="false"
            navigation="true"
            css-mode="true"
            speed="500"
            loop="true"
            style={{ width: '96%' }}>
            {REVIEWS.map(({ name, avatar, review }, index) => {
                return <swiper-slide key={name + index}>
                    <div className='reviews__card'>
                        <div className='reviews__card_bio'>
                            {avatar}
                            <div className='reviews__card_name'>{name}</div>
                        </div>
                        <p className='reviews__card_text'>{review}</p>
                    </div>
                </swiper-slide>
            })}
        </swiper-container>
        <button className='reviews__btn' onClick={() => setIsOpen(true)}>Оставить отзыв</button>
    </div>
};

export default Reviews;