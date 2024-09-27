import React from "react";
import genreSwitcher from "./genreSwitcher";

const addStorage = (keyMovie) => {
  let storedData = window.localStorage.movies
    ? window.localStorage.movies.split(",")
    : [];
  if (!storedData.includes(keyMovie.toString())) {
    storedData.push(keyMovie);
    window.localStorage.movies = storedData;
  }
};

const deleteStorage = (keyMovie) => {
  let storedData = window.localStorage.movies.split(",");
  let newData = storedData.filter((id) => id != keyMovie);
  window.localStorage.movies = newData;
};

function changeStyle(index) {
  const favButton = document.getElementsByClassName(`button-number-${index}`);
  let i;
  for (i = 0; i < favButton.length; i++) {
    favButton[i].style.backgroundColor = "#005b00";
    favButton[i].style.transition = "0.5s";
    console.log(favButton[i]);
    favButton[i].innerHTML = "Added";
  }
}

const MovieCard = ({
  title,
  release_date,
  description,
  rating,
  image,
  genre,
  keyMovie,
  isHomePage,
  index,
}) => {
  return (
    <div className="card-container">
      <img className="movie-picture" src={image} alt="movie title" />
      <div className="texts-container">
        <h3>{title}</h3>
        <p className="released-date">Released Date : {release_date}</p>
        <p className="rating">
          {rating}&nbsp;
          <img src="./img/star.svg" alt="star" />
        </p>
        <ul>
          {genre ? (
            genre.map((g, index) => (
              <li key={index} className="genre">
                {genreSwitcher(g)}
              </li>
            ))
          ) : (
            <li></li>
          )}
        </ul>
        <p className="synopsis">Synopsis</p>
        <p className="story-text">{description}</p>
      </div>
      {isHomePage ? (
        <button
          className={`favorites-button button-number-${index}`}
          type="button"
          onClick={() => {
            addStorage(keyMovie);
            changeStyle(index);
          }}
        >
          Add to Favorites
        </button>
      ) : (
        <button
          className="favorites-button"
          type="button"
          onClick={() => {
            deleteStorage(keyMovie);
            document.location.reload();
          }}
        >
          Delete from Favorites
        </button>
      )}
    </div>
  );
};

export default MovieCard;
