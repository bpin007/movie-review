import React, { lazy } from "react";
import { useSelector } from "react-redux";
import "./MovieListing.scss";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import { Settings } from "../../common/setting";
// import { Settings } from "../../common/setting";
// const MovieCard = lazy(() => "../MovieCard/MovieCard.jsx");

const MovieListing = () => {
  //what does it mean and how it works
  const { movies } = useSelector((state) => state.movies);
  const { shows } = useSelector((state) => state.movies || {});
  console.log(shows);
  console.log(movies);

  console.log(movies);

  const renderMovies = movies?.Search?.map((movie) => (
    <MovieCard data={movie} />
  ));

  const renderShows = shows?.Search?.map((show) => <MovieCard data={show} />);
  // console.log(renderMovies);

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          {/* <div className="movie-container">
            {movies?.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div> */}
          <div className="movie-container">
            <Slider {...Settings}>{renderMovies} </Slider>
          </div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          {/* <div className="movie-container">
            {movies?.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div> */}
          <div className="show-container">
            <Slider {...Settings}>{renderShows}</Slider>
          </div>
        </div>
      </div>
      {/* <div className="movie-cards">{JSON.stringify(movies)}</div> */}
    </>
  );
};

export default MovieListing;

//const movies = useSelector(getAllMovies);
