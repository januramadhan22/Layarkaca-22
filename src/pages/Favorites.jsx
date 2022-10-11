import React from "react";
import "styles/App.css";
import { useSelector, useDispatch } from "react-redux";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Container";
import { FavoriteCard } from "components/Card";

function Favorites() {
  const favorites = useSelector((state) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("My Favorite Movies - Layar Kaca 22");

  function handleRemove() {
    // const list = [...datas];
    // const newList = list.filter((l) => l.data.id !== data.id);
    // setDatas(newList);
    // localStorage.setItem("favMovies", newList);
  }

  return (
    <Container>
      <div className="flex flex-col items-center my-5">
        <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800 dark:text-amber-400">
          My Favorites Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center gap-2 md:gap-8 mx-2 md:mx-8 mb-8">
          {favorites.map((data) => (
            <FavoriteCard
              key={data.id}
              image={data.poster_path}
              title={data.title}
              onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
              removeButton={() => handleRemove(data.id)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default WithRouter(Favorites);
