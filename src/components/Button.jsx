import React, { Component } from "react";

export class FavoriteButton extends Component {
  render() {
    return (
      <div>
        <a
          href="#"
          className="text-lg text-white hover:underline hover:underline-offset-4 decoration-sky-400"
        >
          Favorite
        </a>
      </div>
    );
  }
}

export class HomeButton extends Component {
  render() {
    return (
      <div>
        <a
          href="#"
          className="text-lg text-white hover:underline hover:underline-offset-4 decoration-sky-400"
        >
          Home
        </a>
      </div>
    );
  }
}

// export { favoriteButton, searchButton };
