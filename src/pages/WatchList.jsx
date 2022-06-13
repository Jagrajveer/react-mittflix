import { React } from "react";
import TitleList from "../components/TitleList";

const WatchList = ({ watchlist, toggleWatchlist }) => {
  return (
    <TitleList
      name="My Watch List"
      title={watchlist}
      toggleWatchlist={toggleWatchlist}
    />
  );
};

export default WatchList;
