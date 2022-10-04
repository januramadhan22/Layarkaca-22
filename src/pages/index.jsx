import { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";

import Container from "../components/Container";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
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
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    let dataTemp = [];
    for (let i = 0; i < 8; i++) {
      const temp = {
        id: i + 1,
        title: `FILM TITLE #${i + 1}`,
        image:
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
      };
      dataTemp.push(temp);
    }
    setTimeout(() => {
      this.setState({
        loading: false,
        datas: dataTemp,
        title: "WELCOME GUYS!",
      });
    }, 3000);
  }

  render() {
    return (
      <Container>
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
                <Card key={data.id} image={data.image} title={data.title} />
              ))}
        </div>
      </Container>
    );
  }
}

export default Home;
