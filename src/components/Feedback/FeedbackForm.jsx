import React from 'react';
import { useFormik } from 'formik';
import DatePicker from "react-datepicker";

const FeedbackForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            packet: '',
            date: Date.now(),
            message: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return <form className='feedback__form' onSubmit={formik.handleSubmit}>
        <input
            id='name'
            name='name'
            type="text"
            placeholder='Ваше имя'
            onChange={formik.handleChange} />
        <input
            id='phone'
            name='phone'
            type="text"
            placeholder='+79999999999'
            onChange={formik.handleChange} />
        <input
            id='email'
            name='email'
            type="text"
            placeholder='Ваш e-mail'
            onChange={formik.handleChange} />
        <select
            name="packet"
            onChange={formik.handleChange}
        >
            <option value="light" label="Легкий">
                Легкий
            </option>
            <option value="medium" label="Стандарт">
                Стандарт
            </option>
            <option value="hight" label="Комфорт">
                Комфорт
            </option>
        </select>
        <DatePicker
            name="date"
            dateFormat='dd.MM.yyyy'
            selected={formik.values.date}
            onChange={(e) => formik.setFieldValue('date', Date.parse(e))}
            inline
        />
        <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder='Ваше сообщение' />
        <button className='feedback__form_btn' type='submit'>Отправить</button>
    </form>
};

export default FeedbackForm;