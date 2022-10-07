import { Component } from "react";
import "../styles/App.css";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";

import Container from "../components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
} from "../components/Button";
import { Card, Heroes } from "../components/Card";
import { data } from "autoprefixer";

class DetailMovie extends Component {
  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => {
        const { data } = res;
        this.setState({ data });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <div className="w-full flex items-center justify-center my-16">
          <Heroes
            key={this.state.data.id}
            image={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
            title={this.state.data.title}
            releaseDate={this.state.data.release_date}
            duration={this.state.data.runtime}
            genre={this.state.data.genre}
            overview={this.state.data.overview}
          />
        </div>
      </Container>
    );
  }
}

export default WithRouter(DetailMovie);
