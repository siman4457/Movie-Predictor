import React, { Component } from "react";
import data from "../../data.json";
import MovieList from "../movies/MovieList.js";
import { findElement } from "../helpers";

export default class Home extends Component {
  state = { query: "", isSubmitted: false, response: null };

  handleChange = e => {
    this.setState({
      query: e.target.value,
      isSubmitted: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var input_query = this.state.query;
    var movies_arr = data["movies"];
    var response = findElement(movies_arr, "title", input_query);
    this.setState({
      isSubmitted: true,
      response: response
    });
    return response;
  };

  render() {
    const movies = data.movies;
    const isSubmitted = this.state.isSubmitted;
    const response = this.state.response;

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
            {isSubmitted ? (
              <MovieList movies={[response]} />
            ) : (
              <MovieList movies={movies} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
