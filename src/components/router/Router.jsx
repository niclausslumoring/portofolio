import React from "react";
import Index from "../page/Index";
import Detail from "../page/Detail";
import Datascience from "../page/DataScience";
import Timedoor from "../page/Timedoor";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/datascience"
          element={<Datascience></Datascience>}
        ></Route>
        <Route path="/timedoor" element={<Timedoor></Timedoor>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
