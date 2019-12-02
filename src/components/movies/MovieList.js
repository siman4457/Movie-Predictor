import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log('find key of each movie',movies)
    return (
      <div>
        <div className="movie-list section">
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {movies &&
              movies.map(movie => {
                return (
                  <div className="column is-one-third">
                    <MovieCard key={movie.title} movie={movie} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
