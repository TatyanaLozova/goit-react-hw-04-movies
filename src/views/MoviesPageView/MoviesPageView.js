import React, { Component } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import s from "./MoviesPageView.module.css";
import x from "../../services/API";
const { getSearch } = x;

class MoviesPageView extends Component {
  state = {
    query: "",
    searchMovies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      getSearch(this.props.location.search.slice(7)).then((result) =>
        this.setState({ searchMovies: result })
      );
    }
  }

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const history = this.props.history;

    getSearch(this.state.query)
      .then((result) => {
        if (result.length === 0) {
          alert(`Sorry! This movie is not found`);
        }
        this.setState({ searchMovies: result });
      })
      .catch((error) => console.log(error));

    // записывает в url наш запрос из search (при submit формы)
    history.push({
      pathname: history.location.pathname,
      search: `?query=${this.state.query}`,
      key: history.location.key,
    });

    this.setState({ query: "" });
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <div className={s.search}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            placeholder="Search movies..."
          />
          <button className={s.searchBtn} type="submit">
           
          </button>
        </form>
        <MoviesGallery movies={searchMovies} />
      </div>
    );
  }
}

export default MoviesPageView;
