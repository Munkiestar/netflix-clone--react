import React from "react";
import "./App.css";

import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>netflix clone</h1>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
