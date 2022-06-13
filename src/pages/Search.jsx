import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TitleList from "../components/TitleList";

import { querySearch } from "../services/tmdbAPI";

const Search = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    querySearch(query).then((results) => {
      setSearchResults(results.results);
    });
  }, [query]);

  return <TitleList name="Results" title={searchResults} />;
};

export default Search;
