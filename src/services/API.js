
import axios from "axios";

const baseURL = `https://api.themoviedb.org/3/`;
const myAPIkey = "72466121c9676fc22348299f38033287";


// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
async function getTrending() {
  try {
    const response = await axios.get(
      `${baseURL}trending/movie/day?api_key=${myAPIkey}`
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}
// поиск кинофильма по ключевому слову на странице фильмов.
async function getSearch(searchQuery) {
  try {
    const response = await axios.get(
      `${baseURL}search/movie?api_key=${myAPIkey}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

// запрос полной информации о фильме для страницы кинофильма.
async function getDetails(movieId) {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}?api_key=${myAPIkey}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

// запрос информации о актёрском составе для страницы кинофильма.
async function getActor(movieId) {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}/credits?api_key=${myAPIkey}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
async function getReviews (movieId) {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}/reviews?api_key=${myAPIkey}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTrending,
  getSearch,
  getDetails,
  getActor,
  getReviews,
};
