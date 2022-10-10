import React, { Component } from "react";
import favorites from "../assets/favorites.png";

export class FavoriteButton extends Component {
  render() {
    return (
      <div>
        <button
          href="#"
          className="p-2 box-border border-2 border-transparent hover:border-2 hover:border-white rounded-full"
        >
          <img src={favorites} alt="Favorites" />
        </button>
      </div>
    );
  }
}

export class AddToFavorite extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onClick}
          className="px-8 py-1 md:px-16 md:py-2 rounded text-xs sm:text-base bg-slate-800 text-white font-semibold border-2 hover:bg-white hover:border-2 hover:border-slate-800 hover:text-slate-800 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-black "
        >
          Add to favorite
        </button>
      </div>
    );
  }
}
export class Play extends Component {
  render() {
    return (
      <div>
        <button
          href="#"
          className="px-10 py-1 rounded-full bg-slate-800 text-white dark:text-amber-400 dark:border-amber-400 font-semibold border-2 hover:bg-white hover:border-2 hover:border-slate-800 hover:text-slate-800 hover:dark:bg-black mt-5"
        >
          Play Now
        </button>
      </div>
    );
  }
}

export class LoadMore extends Component {
  render() {
    return (
      <div>
        <button
          className="px-10 py-2 rounded-md bg-slate-800 text-white font-semibold border-2 hover:bg-white hover:border-2 hover:border-slate-800 hover:text-slate-800  dark:border-amber-400 dark:text-amber-400 dark:hover:bg-black mt-5"
          onClick={this.props.onClick}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export class RemoveButton extends Component {
  render() {
    return (
      <div>
        <button
          className="px-8 py-1 md:px-16 md:py-2 rounded text-xs sm:text-base rounded-md bg-slate-800 text-white font-semibold border-2 hover:bg-white hover:border-2 hover:border-slate-800 hover:text-slate-800  dark:border-amber-400 dark:text-amber-400 dark:hover:bg-black"
          onClick={this.props.onClick}
        >
          Remove
        </button>
      </div>
    );
  }
}
export class DarkMode extends Component {
  render() {
    return (
      <div>
        <button
          className="px-10 py-2 rounded-md bg-slate-800 text-white font-semibold border-2 hover:bg-white hover:border-2 hover:border-slate-800 hover:text-slate-800 mt-5"
          onClick={this.props.onClick}
        >
          Dark Mode
        </button>
      </div>
    );
  }
}

// export { favoriteButton, searchButton };
