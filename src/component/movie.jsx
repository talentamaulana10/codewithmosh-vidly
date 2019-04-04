import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return <h1 className="body1">Tidak ada film dalam database!!!!!!!!!!</h1>;
    return (
      <React.Fragment>
        <h3 className="body">
          {" "}
          semuanya ada di sini {count} film bollywood dalam database.
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Movies</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
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
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    klik Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          onPageChange={this.handlePageChange}
          itemsCount={count}
          pageSize={this.state.pageSize}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
