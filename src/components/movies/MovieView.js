import React, { Component } from "react";

export default class MovieView extends Component {
  state = {
    movie: null
  };
  componentDidMount = () => {
    const movie = this.props.location.state.movie;
    this.setState({
      movie
    });
  };
  render() {
    const { movie } = this.state;
    if (movie) {
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
            </div>
          </div>
        </div>
      );
    }
  }
}
