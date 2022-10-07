import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorite } from "../components/Button";

import Home from "../pages";
import Detail from "../pages/DetailMovie";
import Favorites from "../pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id_movie" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
