import { Component } from "react";
import "../styles/App.css";

import Container from "../components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
} from "../components/Button";
import { FavoriteCard } from "../components/Card";
import Loading from "../components/Loading";
import { data } from "autoprefixer";

import { WithRouter } from "../utils/Navigation";
import { list } from "postcss";

class Favorites extends Component {
  state = {
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
    this.handleRemove();
  }

  fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      this.setState({ datas: parsedMovies, loading: false });
    }
  }

  handleRemove(parsedMovies) {
    // this.setState({datas.filter(e=>e!==parsedMovies)})
  }
  // Fungsi buat menghapus film dari list favorite, use method filter

  render() {
    return (
      <Container>
        <div className="flex flex-col items-center my-5">
          <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800">
            Now Playing Movies
            {/* {this.state.title} */}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center gap-8 mx-8 mb-8">
            {this.state.loading
              ? this.state.skeleton.map(
                  (item) => <Loading key={item} /> // Self Closing tag
                )
              : this.state.datas.map((data) => (
                  <FavoriteCard
                    key={data.id}
                    image={data.poster_path}
                    title={data.title}
                    onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                    removeButton={() => this.handleRemove()}
                  />
                ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default WithRouter(Favorites);
