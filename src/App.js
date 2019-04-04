import React, { Component } from "react";
import Movie from "./component/movie";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Movie />
        </main>
      </div>
    );
  }
}

export default App;
