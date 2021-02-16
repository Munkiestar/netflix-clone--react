import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./Row.css";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  // Youtube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // movieTrailer doesn't work anymore to show trailers for selected movie

  // const handleMovieClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <div className="row">
      {/*  title  */}
      <h2>{title}</h2>

      {/*   container => posters  */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            // onClick={handleMovieClick(movie)}
          />
        ))}
      </div>
      {/*  show trailer video IF only there is a trailer  */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
