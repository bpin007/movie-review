import React, { Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./component/Header/Header";
// import Home from "./component/Home/Home";
// import MovieListing from "./component/MovieListing/MovieListing";
// import PageNotFound from "./component/PageNotFound/PageNotFound";
// import Footer from "./component/Footer/Footer";
// import MoviesDetail from "./component/MoovieDetail/MoviesDetail";
// import MoviesDetail from "./component/MoviesDetail";

const Header = lazy(() => import("./component/Header/Header.jsx"));
const Home = lazy(() => import("./component/Home/Home.jsx"));
const MovieListing = lazy(() =>
  import("./component/MovieListing/MovieListing.jsx")
);
const PageNotFound = lazy(() =>
  import("./component/PageNotFound/PageNotFound.jsx")
);
const Footer = lazy(() => import("./component/Footer/Footer.jsx"));
const MoviesDetail = lazy(() =>
  import("./component/MoovieDetail/MoviesDetail.jsx")
);

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white",
          }}
        >
          loading...
        </div>
      }
    >
      <Router>
        <div>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MoviesDetail />} />
              <Route path="/movies" element={<MovieListing />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
