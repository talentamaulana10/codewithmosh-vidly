import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./component/movie";

class App extends Component {
  render() {
    return (
      <main className="container  ">
        <Movie />
      </main>
    );
  }
}

export default App;
