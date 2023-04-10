import React from "react";
import Index from '../page/Index';
import Detail from '../page/Detail'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router