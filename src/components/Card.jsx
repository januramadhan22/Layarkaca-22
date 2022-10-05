import React, { Component } from "react";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
  Play,
} from "../components/Button";

export class Card extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-auto h-auto p-5 flex flex-col items-center justify-between text-center gap-5 border-4 border-slate-700 rounded-md p-5 bg-slate-200 shadow-lg shadow-slate-400 hover:shadow-sm hover:bg-amber-100 hover:bg-opacity-50 hover:border-amber-600 cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
            className="rounded-md"
          />
          <p className="font-semibold">{this.props.title}</p>
          <AddToFavorite />
        </div>
      </div>
    );
  }
}

export class Heroes extends Component {
  render() {
    return (
      <div className="w-full flex justify-center">
        <div className="w-9/12 h-auto p-5 flex items-center justify-center text-center gap-5 border-4 border-slate-700 rounded-md p-5 bg- shadow-lg shadow-slate-400 bg-cover bg-opacity-10 bg-gradient-to-r from-slate-200 to-white">
          <img
            src={this.props.image}
            alt={this.props.title}
            className="rounded-md"
          />
          <div className="text-left">
            <p className="font-bold text-4xl">{this.props.title}</p>
            <p className="my-2">
              <strong>Durasi:</strong> {this.props.duration}
            </p>
            <p className="my-2">
              <strong>Release:</strong> {this.props.releaseDate}
            </p>
            <p className="my-2">
              <strong>Genre:</strong> {this.props.genre}
            </p>
            <p className="my-2">
              <strong>Overview:</strong>
              <br /> {this.props.overview}
            </p>
            <Play />
          </div>
        </div>
      </div>
    );
  }
}
