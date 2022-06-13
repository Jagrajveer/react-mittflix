import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header";
import Details from "./components/Details";

// pages
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import Search from "./pages/Search";

const App = () => {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );

  const toggleWatchlist = (tvShow) => {
    let newWatchlist = [];
    if (watchlist.map((item) => item.id).includes(tvShow.id)) {
      newWatchlist = watchlist.filter((_tvShow) => _tvShow.id !== tvShow.id);
    } else {
      newWatchlist = [...watchlist, tvShow];
    }

    setWatchlist(newWatchlist);
    localStorage.setItem("watchList", JSON.stringify(newWatchlist));
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home toggleWatchlist={toggleWatchlist} />}
          />
          <Route
            path="/details/:id"
            element={<Details toggleWatchlist={toggleWatchlist} />}
          />
          <Route
            path="/search/:query"
            element={<Search toggleWatchlist={toggleWatchlist} />}
          />
          <Route
            path="/my-watch-list"
            element={
              <WatchList
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
