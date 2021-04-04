import React, { Component } from "react";

import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

import x from "../services/API";
const { getTrending } = x;

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    getTrending()
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default HomeView;
