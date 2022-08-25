import "./App.css";
import Header from "./components/Header";
import RecommendedMovies from "./components/RecommendedMovies";
import SliderImages from "./components/SliderImages";
import Entertainment from "./components/Entertainment";
import Premier from "./components/Premier";
import Footer from "./components/Footer";
// import AllMovies from "./components/AllMovies";
import AllMoviesFetch from "./components/AllMoviesFetch";
import SingleMovieFetch from "./components/SingleMovieFetch";
import Registration from "./components/Registration";
// import SingleMovie from "./components/SingleMovie";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ background: "#F5B7B1 " }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <SliderImages />
            <RecommendedMovies />
            <Premier />
            <Entertainment />
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
