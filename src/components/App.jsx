import React, { useRef } from "react";
import { register } from 'swiper/element/bundle';

import Header from "@components/Header/Header";
import Preview from "@components/Preview/Preview";
import Description from "@components/Description/Description";
import Examples from "@components/Examples/Examples";
import Packets from "@components/Packets/Packets";
import Reviews from "@components/Reviews/Reviews";
import Feedback from "@components/Feedback/Feedback";
import Footer from "@components/Footer/Footer";

register();

const App = () => {
    const previewRef = useRef(null);
    const descRef = useRef(null);
    const exampleRef = useRef(null);
    const packetsRef = useRef(null);
    const reviewsRef = useRef(null);
    const feedbackRef = useRef(null);

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }

    return <>
        <Header scrollTo={scrollTo} links={{
            previewRef,
            descRef,
            exampleRef,
            packetsRef,
            reviewsRef,
            feedbackRef
        }} />
        <main className="main" dir="ltr">
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
        <Footer scrollTo={scrollTo} previewRef={previewRef} feedbackRef={feedbackRef} />
    </>
};

export default App;