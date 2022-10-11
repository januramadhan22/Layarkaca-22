import React, { useState, useEffect } from "react";
import "styles/App.css";

import { useFetchGet } from "utils/hooks/useFetchGet";
import { useTitle } from "utils/hooks/useTitle";
import { WithRouter } from "utils/Navigation";

import Container from "components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
  Play,
} from "components/Button";

const DetailMovie = (props) => {
  const { id_movie } = props.params;
  const [data] = useFetchGet(
    `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  useTitle(`${data.title} - Layar Kaca 22`);

  return (
    <Container key={data.id}>
      <div className="w-full flex justify-center my-10 ">
        <div className="w-9/12 h-auto p-5 flex flex-col md:flex-row items-center justify-center text-center gap-3 md:gap-8 border-4 border-slate-700 rounded-md p-5 shadow-lg shadow-slate-400 bg-cover bg-opacity-10 bg-gradient-to-r from-slate-200 to-white dark:bg-gradient-to-r dark:from-transparent dark:to-transparent dark:border-amber-500 dark:shadow-amber-300">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            className="w-72 rounded-md"
          />
          <div className="text-center md:text-left dark:text-amber-400">
            <p className="font-bold text-3xl md:text-6xl mb-3 md:mb-0">
              {data.title}
            </p>
            <p className="my-2">
              <strong>Durasi:</strong> {data.runtime} min
            </p>
            <p className="my-2">
              <strong>Release:</strong> {data.release_date}
            </p>
            <p className="my-2">
              <strong>Genre:</strong> {data.genre}
            </p>
            <p className="my-2">
              <strong>Overview:</strong>
              <br /> {data.overview}
            </p>
            <Play />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WithRouter(DetailMovie);
