import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <Link
          to={{
            pathname: "/movie-view/" + movie.title,
            state: {
              movie
            }
          }}
        >
          <div style={{ margin: "30px" }} className="card">
            <div className="card-image" style={{ height: 400 }}>
              <figure className="image is-4by3" style={{ height: 380 }}>
                <img src={movie.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">{movie.title}</p>
                  <p className="subtitle is-6">
                    Predicted Roten Tomatoes Rating: {movie.rotten}
                  </p>
                  <p className="subtitle is-6">
                    Predicted Metacritic Rating: {movie.metacritic}
                  </p>
                </div>
              </div>

              <div className="content">
                {/* {movie.description} */}
                <br />
                <time>{movie.date}</time>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
