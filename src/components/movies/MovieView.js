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
          <div className="details">
            <h1 className="title has-text-centered" style={{fontSize: 75}}>{movie.title}</h1>
            
              <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                <div style = {{display: "flex", flexDirection: "column"}}>
                  <img src={movie.image} alt="Placeholder image" style ={{height: 600, width: 400}}/>
                </div>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <h2 className="title has-text-centered"> Coming {movie.date}</h2>
                  <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src="/metacritic-01.png" alt="Placeholder image" style={{ width: 200, height: 100, marginRight: 50 }}/>
                    <h1 style={{ fontSize: 70, margin: 0, textColor: "black" }}>{movie.metacritic}</h1> 
                  </div>
                  <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src="/rotten_tomato-01.png" alt="Placeholder image" style={{ width: 200, height: 100, marginRight: 50 }}/>
                    <h1 style={{ fontSize: 70, margin: 0, textColor: "black" }}>{movie.rotten}</h1> 
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
