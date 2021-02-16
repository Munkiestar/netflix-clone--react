import React from "react";
import "./App.css";

import Row from "./components/Row/Row";
import Hero from "./components/Hero/Hero";
import requests from "./requests";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Genre */}
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
