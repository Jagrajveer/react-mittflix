import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AltImage from "../images/image-not-available.jpg";

import "./TvShow.css";

const TvShow = ({ tvShow }) => {
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
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
