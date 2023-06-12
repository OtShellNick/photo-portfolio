import React from "react";

import './Header.scss';

import LogoIcon from '@assets/logo.svg?jsx';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();

    return <header className="header">
        <div className="container header__content">
            <div className="header__logo" onClick={() => nav('/')}>
                <div className="header__logo_wrapper">
                    <LogoIcon className='header__logo_icon' />
                    <div>
                        <h1 className="header__logo_name">ария Леонидова</h1>
                        <p style={{ fontSize: 20 }}>фотограф в Санкт- Петербурге</p>
                    </div>
                </div>

            </div>
            <ul className="header__menu">
                <li className="header__menu_item">Обо мне</li>
                <li className="header__menu_item">Портфолио</li>
                <li className="header__menu_item">Услуги</li>
                <li className="header__menu_item">Заказ</li>
            </ul>
        </div>
    </header>
};

export default Header;