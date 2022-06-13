// react
import React, { useState, useEffect } from "react";

// components
import TitleList from "../components/TitleList";

// API calls
import { getTvShows } from "../services/tmdbAPI";

const Home = ({ toggleWatchlist }) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getTvShows().then((data) => {
      const extraDetails = [
        {
          id: 1,
          name: "Netflix",
        },
        {
          id: 2,
          name: "Crave",
        },
        {
          id: 3,
          name: "Disney",
        },
        {
          id: 4,
          name: "ApplePlus",
        },
      ];

      let i = 0;
      const titles = data.map((_title) => {
        const title = {
          ..._title,
          ...extraDetails[i],
        };
        i++;
        return title;
      });

      setTitles(titles);
    });
  }, []);

  return (
    <>
      {titles.map((title) => {
        return (
          <TitleList
            key={title.id}
            name={title.name}
            title={title.results}
            toggleWatchlist={toggleWatchlist}
          />
        );
      })}
    </>
  );
};

export default Home;
