import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MoviesData = () => {
  const [movies, setMovies] = useState([]);
  const inputValue = "potter";
  const API_Link = `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${inputValue}&language=en-US`;
  const imagePreLink = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios.get(API_Link).then((res) => setMovies(res.data.results));
  }, []);

  const optionsForDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //   movies.sort((a, b) => {
  //     return b.vote_average - a.vote_average;
  //   });

  return (
    <>
      {/* redenring the form for searching movies by title : */}
      <section>
        <form action="">
          <div className="form-container">
            <div className="search-container">
              <input
                className="type-your-movies"
                type="text"
                name="search-movies"
                placeholder="Type a movie title"
              ></input>
              <input
                type="submit"
                value="Search"
                className="search-button"
              ></input>
            </div>
            <div className="top-flop-container">
              <button className="top-button">Top rated &#11014;</button>
              <button className="flop-button">Low rated &#11015;</button>
            </div>
          </div>
        </form>
      </section>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Returning MovieCard component, mapping through data */}
        {movies.map((movies) => (
          <li key={movies.id}>
            <MovieCard
              title={movies.original_title}
              release_date={new Date(movies.release_date).toLocaleDateString(
                "en-UK",
                optionsForDate
              )}
              description={movies.overview}
              rating={Math.round(movies.vote_average * 100) / 100}
              image={
                movies.backdrop_path === null
                  ? "../../public/img/poster.jpg"
                  : imagePreLink + movies.backdrop_path
              }
            />
          </li>
        ))}
      </div>
    </>
  );
};

export default MoviesData;
