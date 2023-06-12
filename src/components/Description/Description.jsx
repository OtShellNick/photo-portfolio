import React from "react";

import SelfPhoto from '@assets/3.webp';
import MarkIcon from '@assets/mark.svg?jsx';

import './Description.scss';

const Description = () => {

    return <div className="description container">
        <img className="description__img" src={SelfPhoto} alt="me" />
        <div className="description__content">
            <h2 className="description__content_heading">Привет!</h2>
            <p className="description__content_text">
                Меня зовут Мария Леонидова. Я фотограф. Живу и работаю в Санкт-Петербурге. Выезжаю в Москву и Ленинградскую область к постоянным и новым клиентам. Снимаю контент для брендов и блогеров, женский портрет и love story. Стремлюсь к чистым искренним эмоциям на своих кадрах. Так как занимаюсь фотографией уже около 10 лет, могу точно показать и раскрыть текущий момент в кадре и сделать любую съёмку яркой и индивидуальной. Каждая моя работа - это индивидуальный проект, который я создам для Вас от идеи до результата. Поэтому мне важно знать, для чего Вам эта съёмка и какой Вы ждете результат.
            </p>
            <h2 className="description__content_heading">Что снимаю</h2>
            <ul className="description__content_list">
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> Контент для Instagram
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> Женский портрет
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> LoveStory
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> Короткие видео для Instagram и TicTok
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> Каталог
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> LookBook
                </li>
                <li className="description__content_item">
                    <MarkIcon className='description__content_item_mark' /> Модельные тесты
                </li>
            </ul>
        </div>
    </div>
};

export default Description;