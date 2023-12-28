import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/moviesApiKey";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    // const fecthMovies = async () => {
    // const response = await movieApi
    //   .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    //   .catch((error) => {
    //     console.log("error :", error);
    //   });
    // dispatch(addMovies(response.data));
    // console.log(response.data);
    // console.log(addMovies(response.data));
    // };
    // fecthMovies();
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
