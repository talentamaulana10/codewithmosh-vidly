import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
export default class movie extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
      const {length:count}=this.state.movies
    if (count === 0)
      return <p>tidak ada movie di database</p>;
    return (
      
       <React.Fragment>
            <p>terdapat {count} movie di database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Title</th>
              <th>Title</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </React.Fragment>
     
    );
  }
}
