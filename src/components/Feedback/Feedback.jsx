import React from 'react';

import FeedbackForm from './FeedbackForm';

import './Feedback.scss';

const Feedback = () => {

    return <div className='feedback'>
        <div className="feedback__wrapper container">
            <div className='feedback__content'>
                <p>
                    Для связи вы можете выбрать удобный для вас способ: запрос в личку, телеграм, ватсап или эту анкетную форму.
                </p>
                <p>
                    Получив Ваше письмо, я свяжусь с Вами в течение рабочего дня. Время ответа может быть дольше в выходные дни, когда я нахожусь на съемках или путешествую.
                </p>
            </div>
            <FeedbackForm />
        </div>
    </div>
};

export default Feedback;