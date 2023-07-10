import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Main } from "@components/Main";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [location])


    return <Routes>
        <Route path="/">
            <Route index element={<Main />} />
            <Route path="*" element={<div>404</div>} />
        </Route>
    </Routes>
};

export default App;