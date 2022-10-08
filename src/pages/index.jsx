import { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";

import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
  LoadMore,
  Favorite,
} from "components/Button";
import { Card } from "components/Card";
import Loading from "components/Loading";

function App(props) {
  // CONSTRUCTOR START
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useTitle("Layar Kaca 12");
  // CONSTRUCTOR END

  useEffect(() => {
    fetchData();
    fetchPopular();
  }, []);

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      )
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function fetchPopular() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      )
      .then((res) => {
        const { results } = res.data;
        // console.log(results);
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      /*
      cek film yang diinputkan ada di local storage, jika sudah ada kasih alert, jika belum tambahkan ke parsedMovies
      */
      const parsedMovies = JSON.parse(getMovies);
      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  return (
    <Container>
      <div className="flex flex-col items-center my-5">
        <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800">
          Now Playing Movies
          {/* {this.state.title} */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center gap-8 mx-8 mb-8">
          {loading
            ? skeleton.map(
                (item) => <Loading key={item} /> // Self Closing tag
              )
            : datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => handleFav(data)}
                />
              ))}
        </div>
        <LoadMore
          label="Load More"
          onClick={() => fetchData()}
          className="text-center"
        />
      </div>
    </Container>
  );
}

export default WithRouter(App);
