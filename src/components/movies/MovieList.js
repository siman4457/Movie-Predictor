import React, { Component } from "react";
// import { movies } from "../../data";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <div className="movie-list section">
          <div style = {{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {movies &&
              movies.map(movie => {
                return (
                  <div class="column is-one-third">
                    <MovieCard movie={movie} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
