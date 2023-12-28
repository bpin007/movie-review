import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesOrShows,
  removeSelectedMoviesOrShows,
} from "../../features/movies/movieSlice";
import "./MoviesDetail.scss";
import { Icon } from "@iconify/react";

const MoviesDetail = (data = {}) => {
  console.log(data);
  // debugger;
  const { imdbID } = useParams();
  const disptach = useDispatch();
  const { selectedMOvieOrShow } = useSelector((state) => state.movies || {});
  // debugger;
  console.log(selectedMOvieOrShow);
  useEffect(() => {
    disptach(fetchAsyncMoviesOrShows(imdbID));
    return () => {
      disptach(removeSelectedMoviesOrShows());
    };
  }, [disptach, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{selectedMOvieOrShow.Title}</div>
        <div className="movie-rating">
          <span>
            IMBD Rating <Icon icon="fluent-emoji-flat:star" /> :
            {selectedMOvieOrShow.imdbRating}
          </span>
          <span>
            IMBD Votes <Icon icon="fluent-emoji:thumbs-up" /> :
            {selectedMOvieOrShow.imdbVotes}
          </span>
          <span>
            Run Time <Icon icon="fluent-emoji:film-projector" /> :
            {selectedMOvieOrShow.Runtime}
          </span>
          <span>
            Year <Icon icon="fluent-emoji-flat:calendar" />:
            {selectedMOvieOrShow.Year}
          </span>
        </div>
        <div className="moive-plot">{selectedMOvieOrShow.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{selectedMOvieOrShow.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{selectedMOvieOrShow.Actors}</span>
          </div>
          <div>
            <span>Genre</span>
            <span>{selectedMOvieOrShow.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{selectedMOvieOrShow.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{selectedMOvieOrShow.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={selectedMOvieOrShow.Poster} alt="heyy" />
      </div>
    </div>
  );
};

export default MoviesDetail;
