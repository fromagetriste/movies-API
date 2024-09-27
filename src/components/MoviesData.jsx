import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MoviesData = () => {
  const [title, setTitle] = useState("Lord of the Ring");
  const [movies, setMovies] = useState([]);
  const [sortRanking, setSortRanking] = useState("");
  const imagePreLink = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${title}&language=en-US`
      )
      .then((res) => setMovies(res.data.results));
  }, [title]);

  const optionsForDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {/* redenring the form for searching movies by title : */}
      <section>
        <form action="">
          <div className="form-container">
            <div className="search-container">
              <input
                className="type-your-movies"
                type="search"
                name="search-movies"
                placeholder="Type a movie title"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <input
                type="submit"
                value="Search"
                className="search-button"
              ></input>
            </div>
            <div className="top-flop-container">
              <button
                className="top-button"
                //   prevents page from reloading on click :
                type="button"
                onClick={() => setSortRanking("goodFirst")}
              >
                Top rated &#11014;
              </button>
              <button
                className="flop-button"
                //   prevents page from reloading on click :
                type="button"
                onClick={() => setSortRanking("badFirst")}
              >
                Low rated &#11015;
              </button>
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
        {movies
          .slice(0, 12)
          .sort((a, b) => {
            if (sortRanking === "goodFirst") {
              return b.vote_average - a.vote_average;
            } else if (sortRanking === "badFirst") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movies, index) => (
            <li key={movies.id}>
              <MovieCard
                title={movies.original_title}
                release_date={new Date(movies.release_date).toLocaleDateString(
                  "en-UK",
                  optionsForDate
                )}
                description={
                  movies.overview
                    ? movies.overview
                    : "This movie has no synopsis"
                }
                rating={
                  movies.vote_average
                    ? Math.round(movies.vote_average * 100) / 100 + " / 10"
                    : "No ranking"
                }
                image={
                  movies.backdrop_path === null
                    ? "../../public/img/poster.jpg"
                    : imagePreLink + movies.backdrop_path
                }
                genre={movies.genre_ids}
                keyMovie={movies.id}
                isHomePage={true}
                index={index}
              />
            </li>
          ))}
      </div>
    </>
  );
};

export default MoviesData;
