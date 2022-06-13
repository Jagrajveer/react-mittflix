import { React } from "react";

// components
import TvShow from "./TvShow";

import "./TitleList.css";

const TitleList = ({ name, title, toggleWatchlist }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{name}</h1>
        <div className="titles-wrapper">
          {title.map((tvShow) => {
            return (
              <TvShow
                key={tvShow.id}
                tvShow={tvShow}
                toggleWatchlist={toggleWatchlist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TitleList;
