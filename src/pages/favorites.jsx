import { useState, useEffect } from "react";
import "styles/App.css";

import Container from "components/Container";
import { FavoriteButton, HomeButton, AddToFavorite } from "components/Button";
import { FavoriteCard } from "components/Card";
import Loading from "components/Loading";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import { list } from "postcss";
import { data } from "autoprefixer";

function Favorites() {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);

  useTitle("My Favorite Movies - Layar Kaca 12");

  useEffect(() => {
    fetchData();
    handleRemove();
  }, []);

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      setDatas(parsedMovies);
      setLoading(false);
    }
  }

  function handleRemove() {
    const list = [...datas];
    if (list.length > 0) {
      const lastIndex = list.length - 1;
      setDatas(list.filter((data, index) => index !== lastIndex));
    }
  }
  // Fungsi buat menghapus film dari list favorite, use method filter

  return (
    <Container>
      <div className="flex flex-col items-center my-5">
        <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800">
          My Favorites Movies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center gap-8 mx-8 mb-8">
          {loading
            ? skeleton.map(
                (item) => <Loading key={item} /> // Self Closing tag
              )
            : datas.map((data) => (
                <FavoriteCard
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                  removeButton={() => handleRemove()}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}

export default WithRouter(Favorites);
