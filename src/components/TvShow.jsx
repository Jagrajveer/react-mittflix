import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AltImage from "../images/image-not-available.jpg";

import "./TvShow.css";

const TvShow = ({ tvShow, toggleWatchlist }) => {
  const [inWatchList, setInWatchList] = useState(false);

  useEffect(() => {
    let watchlist = JSON.parse(localStorage.getItem("watchList")) || [];
    if (watchlist.map((item) => item.id).includes(tvShow.id)) {
      setInWatchList(true);
    }
  }, [tvShow.id]);

  const handleClick = () => {
    setInWatchList(!inWatchList);
    toggleWatchlist(tvShow);
  };

  return (
    <div className="tvShow">
      <Link to={`/details/${tvShow.id}`}>
        <img
          src={
            tvShow.poster_path
              ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`
              : AltImage
          }
          alt="tvShow poster"
        />
        <div className="overlay">
          <div className="title">{tvShow.title}</div>
          <div className="rating">{tvShow.vote_average}/10</div>
          <div className="plot">{tvShow.overview}</div>
        </div>
      </Link>
      <div
        data-toggled={inWatchList}
        className="listToggle"
        onClick={handleClick}
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
