import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  async function fetchMoviesHandler() {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch("https://swapi.dev/api/films/");

      if (!res.ok) {
        throw new error("something wrong");
      }
      const data = await res.json();
      const transformdedMovies = data.results.map((data) => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });
      setMovies(transformdedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
