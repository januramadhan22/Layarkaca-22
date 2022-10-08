import React, { Component } from "react";
import {
  FavoriteButton,
  HomeButton,
  AddToFavorite,
  Play,
  RemoveButton,
} from "components/Button";

export class Card extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-auto h-auto p-5 flex flex-col items-center justify-between text-center gap-5 border-4 border-slate-700 rounded-md p-5 bg-slate-200 shadow-lg shadow-slate-400 hover:shadow-sm hover:bg-amber-100 hover:bg-opacity-50 hover:border-amber-600 cursor-pointer">
          <img
            onClick={this.props.onNavigate}
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
            className=" rounded-md"
          />
          <p className="font-semibold text-md text-alta-primary">
            {this.props.title}
          </p>
          <AddToFavorite onClick={this.props.addFavorite} />
        </div>
      </div>
    );
  }
}
export class FavoriteCard extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div
          onClick={this.props.onNavigate}
          className="w-auto h-auto p-5 flex flex-col items-center justify-between text-center gap-5 border-4 border-slate-700 rounded-md p-5 bg-slate-200 shadow-lg shadow-slate-400 hover:shadow-sm hover:bg-amber-100 hover:bg-opacity-50 hover:border-amber-600 cursor-pointer"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
            className="rounded-md"
          />
          <p className="font-semibold text-md text-alta-primary">
            {this.props.title}
          </p>
          <RemoveButton onClick={this.props.removeButton} />
        </div>
      </div>
    );
  }
}
