import React from 'react';

import './Preview.scss';

const Preview = () => {

    return <div className='preview'>
        <div className='container preview__content'>
            <div>
                <p className='preview__content_text-first'>Красивые фото.</p>
                <p className='preview__content_text-second'>Настоящие эмоции.</p>
                <p className='preview__content_text-third'>Сейчас.</p>
            </div>
        </div>
    </div>
};

export default Preview;