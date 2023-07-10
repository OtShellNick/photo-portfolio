import React from "react";
import { useParams } from "react-router-dom";

import './Example.scss';

export const Example = () => {
    const props = useParams();
    console.log(props)
    return <div>Example</div>
};