import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const [listData, setListData] = useState([]);

  const imagePreLink = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    let movieArray = [];
    // en faisant .split() on obtient une Array
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
      // .then((res) => movieArray.push(res.data))
      // .then(() => setListData(movieArray));
    }
  }, []);

  const optionsForDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        {listData.length > 0 ? (
          listData.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              title={movie.title}
              release_date={new Date(movie.release_date).toLocaleDateString(
                "en-UK",
                optionsForDate
              )}
              description={movie.overview}
              rating={
                movie.vote_average
                  ? Math.round(movie.vote_average * 100) / 100 + " / 10"
                  : "No ranking"
              }
              image={
                movie.backdrop_path === null
                  ? "../../public/img/poster.jpg"
                  : imagePreLink + movie.backdrop_path
              }
              keyMovie={movie.id}
            />
          ))
        ) : (
          <h2>No movies saved as Favorites</h2>
        )}
      </div>
    </>
  );
};

export default Favorites;

//   ,
//   ,
//   genre,
//   keyMovie,
