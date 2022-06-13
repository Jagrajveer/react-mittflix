// react
import React from "react";

// components
import TvShow from "./TvShow";

// css
import "./TitleList.css";

const TitleList = ({ name, title }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{name}</h1>
        <div className="titles-wrapper">
          {title.map((tvShow) => {
            return <TvShow key={tvShow.id} tvShow={tvShow} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TitleList;
