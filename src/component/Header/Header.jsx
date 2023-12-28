import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import "./Header.scss";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncMoviesOrShows,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "")
      return alert("bruh are you mad,give movie names to search");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">Movie App </Link>{" "}
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="search for movies details"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <Icon icon="flat-color-icons:search" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} />
      </div>
    </div>
  );
};

export default Header;
