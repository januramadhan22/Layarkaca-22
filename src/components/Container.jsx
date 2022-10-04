import React, { Component } from "react";
import search from "../assets/search-blue.svg";
import { FavoriteButton, HomeButton } from "./Button";
import { buildQueries } from "@testing-library/react";

class Container extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full h-16 px-12 flex items-center justify-between bg-slate-700 sticky top-0">
          <h1 className="text-white text-3xl font-semibold font-sans">
            Brand Name
          </h1>
          <label
            htmlFor=""
            className="px-2 flex items-center gap-2 rounded-md bg-white focus:outline-2 focus:border-sky-500 focus:ring-sky-500 focus:ring-2 placeholder-slate-400"
          >
            <input
              type="text"
              placeholder="Cari film.."
              className="w-80  py-2 px-3 focus:outline-none focus:border-none"
            />
            <button className="opacity-50 hover:opacity-100">
              <img src={search} alt="Search" />
            </button>
          </label>

          <FavoriteButton />
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
