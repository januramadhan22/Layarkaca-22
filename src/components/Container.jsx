import React, { Component } from "react";

import search from "../assets/search-blue.svg";
import { FavoriteButton, HomeButton } from "./Button";
import { buildQueries } from "@testing-library/react";

class Container extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full h-16 px-4 md:px-12 flex items-center justify-between bg-slate-700 shadow-md shadow-slate-400 sticky top-0">
          <h1 className="text-white text-xl md:text-3xl font-semibold font-sans">
            Brand Name
          </h1>
          <div className="flex gap-5">
            <label className="px-2 flex items-center gap-2 rounded-md bg-white  placeholder-slate-400">
              <input
                type="text"
                placeholder="Cari film.."
                className="w-11/12  py-2 px-3 focus:outline-none focus:border-none"
              />
              <button className="opacity-50 hover:opacity-100">
                <img src={search} alt="Search" />
              </button>
            </label>

            <FavoriteButton />
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
