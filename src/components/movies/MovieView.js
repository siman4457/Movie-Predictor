import React, { Component } from "react";
import { findElement } from "../helpers";
import data from "../../data.json";

export default class MovieView extends Component {
  render() {
    const input_query = this.props.match.params.id
    var movies_arr = data["movies"];
    var movie = findElement(movies_arr, "title", input_query);
    
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Movie Predictor</h1>
              <h2 className="subtitle">Find your next favorite movie</h2>
            </div>
          </div>
        </section>
        <br />
        <br />
        <div className="container">
          <div className="notification">
            <h1 className="title has-text-centered">{movie.title}</h1>
            <img src={movie.image} alt="Placeholder image"/>
            <h3 style={{ alignSelf: "center" }}>{movie.date}</h3>
            <h1 style={{ fontSize: 30, margin: 0 }}>
                          {movie.rotten}
                        </h1>
            <h1 style={{ fontSize: 30, margin: 0 }}>
                          {movie.metacritic}
                        </h1>

          </div>
        </div>
      </div>
    );
  }
}
