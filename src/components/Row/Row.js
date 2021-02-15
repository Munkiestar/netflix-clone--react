import React, { useState, useEffect } from "react";
import axios from "../../axios"; // import axios from our file aka instance

import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], => run once when the Row loads and don't run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  // console.log(movies);

  return (
    <div className="row">
      {/*  title  */}
      <h2>{title}</h2>

      {/*   container => posters  */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
