import React from "react";
import "./App.sass";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import MovieView from "./components/movies/MovieView";

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="App">
        <header className="App-header">
          <Switch>
            {/* PUBLIC PAGES */}
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/movie/:id" component={MovieView} /> */}
          </Switch>
        </header>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
