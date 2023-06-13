import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import Cropper, { ReactCropperElement } from "react-cropper";

import "cropperjs/dist/cropper.css";

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const ReviewForm = () => {
    const cropperRef = useRef(null);
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("#");

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
    };

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
            avatar: [],
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            placeholder='Ваше имя'
        />
        <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
        />
        {/* <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
        /> */}
        <input
            id="avatar"
            name="avatar"
            type="file"
            onChange={(event) => {
                formik.setFieldValue("avatar", event.currentTarget.files[0]);
            }}
            placeholder='Ваш аватар'
        />
        <input
            id="text"
            name="text"
            type="textarea"
            onChange={formik.handleChange}
            placeholder='Ваше сообщение'
        />
        <button type="submit">Submit</button>
    </form>
};

export default ReviewForm;