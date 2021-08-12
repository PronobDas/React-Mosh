// Mosh's solution.

import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies2 extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    //console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    //this.setState({movies:movies});
    this.setState({ movies }); // key value same, no need to write movie twice.
  };

  render() {
    const movieCount = this.state.movies.length;
    if (movieCount === 0) return <p>There is no movie in the database.</p>;

    return (
      <React.Fragment>
        <p>There are {movieCount} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <th>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies2;
