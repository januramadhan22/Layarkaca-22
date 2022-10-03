import { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";

import Layout from "../components/Layout";
import { FavoriteButton, HomeButton } from "../components/Button";

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="w-full p-12 text-center text-5xl font-semibold text-slate-800">
          Now Playing Movie
        </h1>
        <div className="w-full h-screen  flex flex-wrap justify-center gap-10">
          <div className="w-72 h-5/6 flex flex-col items-center justify-between text-center gap-y-4 border-2 border-slate-700 rounded-md p-5 bg-slate-100">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg"
              alt=""
              className="w-60 rounded-md shadow-md shadow-slate-500"
            />
            <a
              href="#"
              className="text-xl font-bold text-slate-800 hover:underline hover:underline-offset-4 hover: decoration-slate-800"
            >
              One Piece Film: RED
            </a>
            <button className="w-11/12 p-2 rounded bg-slate-800 text-white font-semibold border-2 hover:bg-transparent hover:border-2 hover:border-slate-800 hover:text-slate-800">
              Add to Favorite
            </button>
          </div>
          <div className="w-72 h-5/6 flex flex-col items-center justify-between text-center gap-y-4 border-2 border-slate-700 rounded-md p-5 bg-slate-100">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
              alt=""
              className="w-60 rounded-md shadow-md shadow-slate-500"
            />
            <a
              href="#"
              className="text-xl font-bold text-slate-800 hover:underline hover:underline-offset-4 hover: decoration-slate-800"
            >
              Thor: Love and Thunder
            </a>
            <button className="w-11/12 p-2 rounded bg-slate-800 text-white font-semibold border-2 hover:bg-transparent hover:border-2 hover:border-slate-800 hover:text-slate-800">
              Add to Favorite
            </button>
          </div>
          <div className="w-72 h-5/6 flex flex-col items-center justify-between text-center gap-y-4 border-2 border-slate-700 rounded-md p-5 bg-slate-100">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oP568qNH1LLEsoqGiZmf8deTOWc.jpg"
              alt=""
              className="w-60 rounded-md shadow-md shadow-slate-500"
            />
            <a
              href="#"
              className="text-xl font-bold text-slate-800 hover:underline hover:underline-offset-4 hover: decoration-slate-800"
            >
              One Piece Film: Z
            </a>
            <button className="w-11/12 p-2 rounded bg-slate-800 text-white font-semibold border-2 hover:bg-transparent hover:border-2 hover:border-slate-800 hover:text-slate-800">
              Add to Favorite
            </button>
          </div>
          <div className="w-72 h-5/6 flex flex-col items-center justify-between text-center gap-y-4 border-2 border-slate-700 rounded-md p-5 bg-slate-100">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg"
              alt=""
              className="w-60 rounded-md shadow-md shadow-slate-500"
            />
            <a
              href="#"
              className="text-xl font-bold text-slate-800 hover:underline hover:underline-offset-4 hover: decoration-slate-800"
            >
              One Piece Film: Stampede
            </a>
            <button className="w-11/12 p-2 rounded bg-slate-800 text-white font-semibold border-2 hover:bg-transparent hover:border-2 hover:border-slate-800 hover:text-slate-800">
              Add to Favorite
            </button>
          </div>
          <div className="w-72 h-5/6 flex flex-col items-center justify-between text-center gap-y-4 border-2 border-slate-700 rounded-md p-5 bg-slate-100">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wowJzvF1KqEFSZoArkgngRy1r4L.jpg"
              alt=""
              className="w-60 rounded-md shadow-md shadow-slate-500"
            />
            <a
              href="#"
              className="text-xl font-bold text-slate-800 hover:underline hover:underline-offset-4 hover: decoration-slate-800"
            >
              Detective Conan: The Scarlet Bullet
            </a>
            <button className="w-11/12 p-2 rounded bg-slate-800 text-white font-semibold border-2 hover:bg-transparent hover:border-2 hover:border-slate-800 hover:text-slate-800">
              Add to Favorite
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
