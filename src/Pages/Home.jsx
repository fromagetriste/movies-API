import React from "react";
import Navbar from "../components/Navbar";
import SearchMovies from "../components/SearchMovies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchMovies />
      <MovieCard />
    </>
  );
};

export default Home;
