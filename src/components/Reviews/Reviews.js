import React, { Component } from "react";
import s from "./Reviews.module.css";
import movi from "../../services/API";
const { getReviews } = movi;

class Reviews extends Component {
  state = {
    rewies: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    getReviews(movieId).then((result) => {
      this.setState({ rewies: result.results });
    });
  }

  render() {
    const { rewies } = this.state;

    return (
      <>
        <h1 className={s.title}>Reviews</h1>
        {rewies.length > 0 ? (
          <ul className={s.list}>
            {rewies.map(({ id, author, content }) => {
              return (
                <li className={s.post} key={id}>
                  <p className={s.author}>{author}</p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p> no reviews </p>
        )}
      </>
    );
  }
}

export default Reviews;
