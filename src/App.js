import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";

import "./App.css";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsView/MovieDetailsView" /* webpackChunkName: "movie-details-view" */
  )
);
const MoviesPageView = lazy(() =>
  import(
    "./views/MoviesPageView/MoviesPageView" /* webpackChunkName: "movies-view" */
  )
);

const App = () => {
    return (
    <>
      <Navigation />
        <div className="App">
          <h1 className="App">Top movies for today</h1>
        <Suspense fallback={<h1>Load..</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route
              path={routes.movieDetails}
              component={MovieDetailsView}
            />
            <Route path={routes.movies} component={MoviesPageView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
