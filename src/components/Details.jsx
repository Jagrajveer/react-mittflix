import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTvShow } from "../services/tmdbAPI";

import AltImage from "../images/image-not-available.jpg";

import "./Details.css";

const Details = ({ toggleWatchlist }) => {
  const { id } = useParams();

  const [tvShow, setTvShow] = useState({});

  const [inWatchList, setInWatchList] = useState(false);

  useEffect(() => {
    let watchlist = JSON.parse(localStorage.getItem("watchList")) || [];
    if (watchlist.map((item) => item.id).includes(tvShow.id)) {
      setInWatchList(true);
    }
    if (inWatchList) {
      document.getElementsByClassName("add-to-watchlist")[0].innerHTML =
        "- Remove from Watchlist";
    } else {
      document.getElementsByClassName("add-to-watchlist")[0].innerHTML =
        "+ Add to Watchlist";
    }
  }, [tvShow.id, inWatchList]);

  const handleClick = () => {
    setInWatchList(!inWatchList);
    toggleWatchlist(tvShow);
  };

  useEffect(() => {
    getTvShow(id).then((data) => {
      setTvShow(data);
    });
  }, [id]);

  return (
    <div className="show-details">
      <img
        src={
          tvShow.backdrop_path
            ? `https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`
            : AltImage
        }
        alt=""
      />
      <div className="show-details-inner">
        <h1>{tvShow.name}</h1>
        <div className="description">{tvShow.overview}</div>
        <button onClick={handleClick} className="add-to-watchlist">
          + Add to watch list
        </button>
      </div>
    </div>
  );
};

export default Details;
