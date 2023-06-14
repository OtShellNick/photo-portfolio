import React, { useState } from 'react';
import { useFormik } from 'formik';

import UploadIcon from '@assets/upload.svg?jsx';

const ReviewForm = ({ closeForm }) => {
    const [image, setImage] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            avatar: '',
            text: '',
        },
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            closeForm();
        },
    });

    return <form className="reviews__modal_form" onSubmit={formik.handleSubmit}>
        <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            placeholder='Ваше имя'
        />
        <textarea
            id="text"
            name="text"
            type="textarea"
            rows={5}
            onChange={formik.handleChange}
            placeholder='Ваше сообщение'
        />
        <div className="img-preview">
            {!image && <div />}
            {image && <img src={image} alt="image" />}
            <label htmlFor="avatar">
                <UploadIcon />
                <span>Ваш аватар</span>
            </label>
            <input
                id="avatar"
                name="avatar"
                type="file"
                onChange={(event) => {
                    formik.setFieldValue("avatar", event);
                    onChange(event);
                }}
                placeholder='Ваш аватар'
            />
        </div>
        <button className="reviews__modal_form_btn" type="submit">Отправить</button>
    </form>
};

export default ReviewForm;