import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";

import "./Hero.css";

function Hero() {
  //  random movie banner
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      const randomMovie = request.data.results[randomNumber];
      setMovie(randomMovie);

      return request;
    }

    fetchData();
  }, []);

  // some movies has different properties
  const movieTitle = movie?.title || movie?.name || movie?.original_name;

  // truncate the description
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero_contents">
        {/*  title  */}
        <h1 className="hero_title">{movieTitle}</h1>

        {/*buttons*/}
        <div className="hero__buttons">
          <button className="hero__button">Play</button>
          <button className="hero__button">My List</button>
        </div>

        {/* description*/}
        <h1 className="hero__description">{truncate(movie?.overview, 160)}</h1>
      </div>
      <div className="hero--fadeBottom" />
    </header>
  );
}

export default Hero;
