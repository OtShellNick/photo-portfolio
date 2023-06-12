import React, { useState } from "react";
import Modal from 'react-modal';

import LightPacket from '@assets/light.webp';
import NormalPacket from '@assets/normal.webp';
import ComfortPacket from '@assets/comfort.webp';
import MailIcon from '@assets/social/mail.svg?jsx';
import CloseIcon from '@assets/popup_close.svg?jsx';

import './Packets.scss';

const PACKETS = [
    {
        name: 'Легкий',
        price: '12000',
        photo: LightPacket,
        icon: <MailIcon className='packets__preview_icon' />,
        description: [
            'консультация перед съемкой (анкетирование для понимания Вашего запроса)',
            'организация съемочного процесса (поиск локации, команды, референсы, тайминг)',
            'смена до 5 образов на съемке',
            'съемка в течение 2-х часов',
            'возможность выбрать фото для обработки',
            '40 кадров в обработке через 7 дней'
        ]
    },
    {
        name: 'Стандарт',
        price: '16000',
        photo: NormalPacket,
        icon: <MailIcon className='packets__preview_icon' />,
        description: [
            'консультация перед съемкой (анкетирование для понимания Вашего запроса)',
            'организация съемочного процесса (поиск локации, команды, референсы, тайминг)',
            'смена до 7 образов на съемке',
            'съемка в течение 3-х часов',
            'возможность выбрать фото для обработки',
            '60 кадров в обработке через 7 дней'
        ]
    },
    {
        name: 'Комфорт',
        price: '22000',
        photo: ComfortPacket,
        icon: <MailIcon className='packets__preview_icon' />,
        description: [
            'консультация перед съемкой (анкетирование для понимания Вашего запроса)',
            'организация съемочного процесса (поиск локации, команды, референсы, тайминг)',
            'смена до 12 образов на съемке',
            'съемка до 5 часов вместе с передвижениями',
            'возможность выбрать фото для обработки',
            '100 кадров в обработке через 7 дней'
        ]
    },
    {
        name: 'Ретушь',
        price: 'от 150',
        photo: ComfortPacket,
        icon: <MailIcon className='packets__preview_icon' />,
        description: [
            'Если фото требует более глубокой ретуши (крупные портреты, возрастные портреты, разглаживание одежды без потери текстуры, чистка фона/циклорамы от грязи и пятен), то ретушь оплачивается отдельно - от 150р/кадр. '
        ]
    },
    {
        name: 'Видео',
        price: '4 000',
        photo: LightPacket,
        icon: <MailIcon className='packets__preview_icon' />,
        description: [
            'съемка видео на iPhone (короткие видеозарисовки для stories) в процессе фотосессии (разные образы или разные сюжеты)',
            'цветокоррекция всех видео',
            ' Монтаж НЕ входит в стоимость.',
        ]
    },
];

Modal.setAppElement('#root');

const Packets = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalData, setData] = useState({});

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

    return <div className="packets container">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {
                setIsOpen(false);
                setData({})
            }}
            closeTimeoutMS={500}
            contentLabel="Example Modal"
            style={modalStyles}
        >
            <div className="packets__modal">
                <CloseIcon className='packets__modal_close' onClick={() => setIsOpen(false)} />
                <h1 className="packets__modal_heading">{modalData.name}</h1>
                <p className="packets__modal_price">{`${modalData.price} р.`}</p>
                {modalData.photo && <div className="packets__modal_photo" style={{ backgroundImage: `url('${modalData.photo}')` }} />}
                <ul>
                    {modalData.description && modalData.description.map((item, index) => {
                        return <li className="packets__modal_item" key={'desc' + index}>
                            - {item}
                        </li>
                    })}
                </ul>
            </div>
        </Modal>
        <h1 className="packets__heading">Пакеты съемок</h1>
        <div className="packets__wrapper">
            {PACKETS.map(({ name, icon }, index) => {
                return <div className="packets__preview" key={name + index} onClick={() => {
                    setIsOpen(true);
                    setData(PACKETS[index]);
                }}>
                    {icon}
                    {name}
                </div>
            })}
        </div>
    </div>
};

export default Packets;