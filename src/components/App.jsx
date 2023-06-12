import React from "react";
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

    return <>
        <Header />
        <main className="main" dir="ltr">
            <Preview />
            <Description />
            <Examples />
            <Packets />
            <Reviews />
            <Feedback />
        </main>
        <Footer />
    </>
};

export default App;