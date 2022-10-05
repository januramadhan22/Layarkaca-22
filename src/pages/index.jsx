import { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import axios from "axios";

import Container from "../components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
  LoadMore,
} from "../components/Button";
import { Card } from "../components/Card";
import Loading from "../components/Loading";
import { data } from "autoprefixer";

class Home extends Component {
  state = {
    title: "BRAND NAME",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data;
        // console.log(results);
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <div className="flex flex-col items-center my-5">
          <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800">
            Now Playing Movies
            {/* {this.state.title} */}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center gap-8 mx-8 mb-8">
            {this.state.loading
              ? this.state.skeleton.map(
                  (item) => <Loading key={item} /> // Self Closing tag
                )
              : this.state.datas.map((data) => (
                  <Card
                    key={data.id}
                    image={data.poster_path}
                    title={data.title}
                  />
                ))}
          </div>
          <LoadMore
            label="Load More"
            onClick={() => this.fetchData()}
            className="text-center"
          />
        </div>
      </Container>
    );
  }
}

export default Home;
