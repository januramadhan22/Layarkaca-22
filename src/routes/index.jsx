import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "pages";
import Detail from "pages/DetailMovie";
import Favorites from "pages/Favorites";

import { ThemeContext } from "utils/context";
import { setFavorites } from "utils/redux/reducer/reducer";

function App() {
  const dispatch = useDispatch();
  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(setFavorites(JSON.parse(getMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
