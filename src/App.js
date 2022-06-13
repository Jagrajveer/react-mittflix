import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
