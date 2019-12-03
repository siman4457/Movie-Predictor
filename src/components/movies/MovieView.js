import React, { Component } from "react";
import { findElement } from "../helpers";
import data from "../../data.json";
import Footer from "../layout/Footer.js";
// import { Footer } from "react-bulma-components";

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
            <br></br>
            <h1 className="title has-text-centered" style={{fontSize: 75}}>{movie.title}</h1>
            <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <div style = {{paddingRight: 20, paddingLeft: 20, marginBottom: 100, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                  <div style = {{display: "flex", flexDirection: "column"}}>
                    <img src={movie.image} alt="Placeholder image" style ={{height: 400, width: 300, margin: 50}}/>
                  </div>
                  <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <img src="/metacritic-01.png" alt="Placeholder image" style={{ width: 200, height: 100, marginRight: 50 }}/>
                      <h1 style={{ fontSize: 70, margin: 0, textColor: "black" }}>{movie.metacritic}</h1> 
                    </div>
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <img src="/rotten_tomato-01.png" alt="Placeholder image" style={{ width: 200, height: 100, marginRight: 50 }}/>
                      <h1 style={{ fontSize: 70, margin: 0, textColor: "black" }}>{movie.rotten}</h1> 
                    </div>
                    <br></br>
                  </div>
                </div>
            </div>
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: 200}}>

              <div style = {{display: "flex", flexDirection: "row"}}>
                <div style = {{display: "flex", flexDirection: "row", marginRight: 50, width: 50, justifyContent: "flex-end"}}>Rating</div>
                <div style = {{display: "flex", flexDirection: "column", width: 500}}>{movie.rating}</div>
              </div>

              <br></br>

              <div style = {{display: "flex", flexDirection: "row"}}>
              <div style = {{display: "flex", flexDirection: "row", marginRight: 50, width: 50, justifyContent: "flex-end"}}>Cast</div>
                <div style = {{display: "flex", flexDirection: "column", width: 500}}>{movie.cast}</div>
              </div>

              <br></br>

              <div style = {{display: "flex", flexDirection: "row"}}>
              <div style = {{display: "flex", flexDirection: "row", marginRight: 50, width: 50, justifyContent: "flex-end"}}>Description</div>
                <div style = {{display: "flex", flexDirection: "column", width: 500}}>{movie.description}</div>
              </div>

              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
