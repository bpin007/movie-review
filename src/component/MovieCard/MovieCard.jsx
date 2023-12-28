import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data = {} }) => {
  const { Title = "", Year = "", Poster = "" } = data;
  // debugger;
  // console.log(data);
  // eslint-disable-next-line react/prop-types
  return (
    //  <div>{data?.Title}</div>;
    <>
      <div className="card-item">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card-inner">
            <div className="card-top">
              <img
                src={data?.Poster}
                alt={Title}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
