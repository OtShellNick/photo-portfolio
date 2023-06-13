import React from 'react';

import LogoIcon from '@assets/logo.svg?jsx';
import VKIcon from '@assets/social/vk.svg?jsx';
import FIcon from '@assets/social/facebook.svg?jsx';
import IIcon from '@assets/social/instagram.svg?jsx';
import OKIcon from '@assets/social/ok.svg?jsx';
import YIcon from '@assets/social/youtube.svg?jsx';
import MailIcon from '@assets/social/mail.svg?jsx';
import PhoneIcon from '@assets/social/phone.svg?jsx';

import './Footer.scss';

const Footer = ({ scrollTo, feedbackRef, previewRef }) => {

    return <footer className='footer'>
        <div className="footer__wrapper container">
            <div className="footer__logo">
                <div className="footer__logo_wrapper">
                    <LogoIcon className='footer__logo_icon' onClick={() => scrollTo(previewRef)} />
                    <div>
                        <h1 className="footer__logo_name">ария Леонидова</h1>
                        <p style={{ fontSize: 10 }}>фотограф в Санкт- Петербурге</p>
                    </div>
                </div>

            </div>
            <ul className='footer__list'>
                <li className='footer__list_item'>
                    <a href="#">
                        <VKIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <FIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <IIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <OKIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <YIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <MailIcon />
                    </a>
                </li>
                <li className='footer__list_item'>
                    <a href="#">
                        <PhoneIcon />
                    </a>
                </li>
            </ul>
            <button className='footer__callback' onClick={() => scrollTo(feedbackRef)}>Обратная связь</button>
        </div>
    </footer>
};

export default Footer;