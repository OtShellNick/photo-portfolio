import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { register } from 'swiper/element/bundle';

import { setLink } from "@store/linksStore";

import Preview from "@components/Preview/Preview";
import Description from "@components/Description/Description";
import Examples from "@components/Examples/Examples";
import Packets from "@components/Packets/Packets";
import Reviews from "@components/Reviews/Reviews";
import Feedback from "@components/Feedback/Feedback";

register();

export const Main = () => {
    const dispatch = useDispatch();

    const previewRef = useRef(null);
    const descRef = useRef(null);
    const exampleRef = useRef(null);
    const packetsRef = useRef(null);
    const reviewsRef = useRef(null);
    const feedbackRef = useRef(null);

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {

    }, [])

    return <main className="main" dir="ltr">
        <div ref={previewRef}>
            <Preview />
        </div>
        <div ref={descRef}>
            <Description />
        </div>
        <div ref={exampleRef}>
            <Examples />
        </div>
        <div ref={packetsRef}>
            <Packets />
        </div>
        <div ref={reviewsRef}>
            <Reviews />
        </div>
        <div ref={feedbackRef}>
            <Feedback />
        </div>
    </main>
};