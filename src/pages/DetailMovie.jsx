import { Component } from "react";
import "../styles/App.css";

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
    title: "BRAND NAME",
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    let dataTemp = [];
    for (let i = 0; i < 1; i++) {
      const temp = {
        id: i + 1,
        title: `FILM TITLE #${i + 1}`,
        releaseDate: "06 Agustus 2022",
        duration: "115 min",
        genre: "Animation, Adventure, Action, Fantasy, etc.",
        overview:
          "Uta — penyanyi paling dicintai di dunia. Suaranya, yang dia nyanyikan sambil menyembunyikan identitas aslinya, telah digambarkan sebagai dunia lain. Dia akan tampil di depan umum untuk pertama kalinya di konser live. Saat venue dipenuhi dengan semua jenis penggemar Uta — bajak laut yang bersemangat, Angkatan Laut yang mengawasi dengan cermat, dan Topi Jerami yang dipimpin oleh Luffy yang hanya datang untuk menikmati penampilannya yang nyaring — suara yang telah ditunggu-tunggu oleh seluruh dunia akan segera bergema. Cerita dimulai dengan fakta mengejutkan bahwa dia adalah putri Shanks.",
        image:
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
      };
      dataTemp.push(temp);
    }
    this.setState({ datas: dataTemp });
  }

  render() {
    return (
      <Container>
        <div className="w-full flex items-center justify-center my-16">
          {this.state.datas.map((data) => (
            <Heroes
              key={data.id}
              image={data.image}
              title={data.title}
              releaseDate={data.releaseDate}
              duration={data.duration}
              genre={data.genre}
              overview={data.overview}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default DetailMovie;
