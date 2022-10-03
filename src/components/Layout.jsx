import React, { Component } from "react";

import { FavoriteButton, HomeButton } from "./Button";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen ">
        <nav className="w-full h-16 px-12 flex items-center justify-between bg-slate-700 sticky top-0">
          <h1 className="text-white text-xl font-semibold font-sans">
            Logo Brand
          </h1>
          <input
            type="text"
            placeholder="Cari film . . ."
            className="w-80 rounded-lg py-1 px-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 placeholder-slate-400"
          />
          <FavoriteButton />
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
