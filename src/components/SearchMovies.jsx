import React from "react";

const SearchMovies = () => {
  return (
    <section>
      <form action="">
        <div className="form-container">
          <div className="search-container">
            <input
              type="text"
              name="search-movies"
              placeholder="Type a movie title"
            ></input>
            <button className="search-button">Search</button>
          </div>
          <div className="top-flop-container">
            <button className="top-button">Top rated &#11014;</button>
            <button className="flop-button">Low rated &#11015;</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchMovies;
