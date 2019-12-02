import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        
        <Link to={"/movie-view/" + movie.title} style={{textDecorationLine: 'none'}}>
          <div style={{ margin: "30px", height: 700 }} className="card movie-card">
            <div className="card-image" style={{ height: 500 }}>
              <figure className="image is-4by3" style={{ height: 500 }}>
                <img src={movie.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <div
                    className="content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center"
                    }}
                  >
                    <h3 style={{ alignSelf: "center" }}>{movie.date}</h3>
                    <div
                      className="rating-images"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <div
                        className="rotten"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margins: 20
                        }}
                      >
                        <img
                          src="/rotten_tomato-01.png"
                          alt="Placeholder image"
                        />
                        <h1 style={{ fontSize: 30, margin: 0 }}>
                          {movie.rotten}
                        </h1>
                      </div>
                      <div
                        className="meta"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: 20
                        }}
                      >
                        <img src="/metacritic-01.png" alt="Placeholder image" />
                        <h1 style={{ fontSize: 30, margin: 0 }}>
                          {movie.metacritic}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
