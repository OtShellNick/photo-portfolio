import React, { useEffect, useRef } from 'react';

import './Preview.scss';

const Preview = () => {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);

    useEffect(() => {
        if (first) first.current.style.transform = 'translateX(0)';
        if (second) setTimeout(() => second.current.style.transform = 'translateX(0)', 1000);
        if (third) setTimeout(() => third.current.style.transform = 'translateX(0)', 2000);
    }, [])

    return <div className='preview'>
        <div className='container preview__content'>
            <div>
                <p ref={first} className='preview__content_text-first'>Красивые фото.</p>
                <p ref={second} className='preview__content_text-second'>Настоящие эмоции.</p>
                <p ref={third} className='preview__content_text-third'>Сейчас.</p>
            </div>
        </div>
    </div>
};

export default Preview;