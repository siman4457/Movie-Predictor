import React, { Component } from "react";
import data from "../../data.json";
import MovieList from "../movies/MovieList.js";
import { findElement } from "../helpers";

export default class Home extends Component {
  state = { query: "", isSubmitted: false };

  handleChange = e => {
    this.setState({
      query: e.target.value,
      isSubmitted: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var input_query = this.state.query;
    this.setState({
      isSubmitted: true
    });
    var movies_arr = data["movies"];
    var response = findElement(movies_arr, "title", input_query);

    return response;
  };

  render() {
    const movies = data.movies;
    const isSubmitted = this.state.isSubmitted;
    // showMovie = () => {
    //   movies;
    // };

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
            <h1 className="title has-text-centered">
              Search for an upcoming movie:
            </h1>
            <div className="field">
              <div className="control has-text-centered">
                <form onSubmit={this.handleSubmit}>
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Search for a movie..."
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <button className="button is-info">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="notification">
            <h1 className="title has-text-centered">Upcoming Movies</h1>
            {/* <MovieList movies={movies}></MovieList> */}
            {isSubmitted ? null : <MovieList movies={movies}></MovieList>}
          </div>
        </div>
      </div>
    );
  }
}
