import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
export const Layout = () => {

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
        <Outlet />
        <Footer scrollTo={scrollTo} previewRef={previewRef} feedbackRef={feedbackRef} />
    </>
}