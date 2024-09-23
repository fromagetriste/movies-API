import React from "react";

const MovieCard = ({ title, release_date, description, rating, image }) => {
  return (
    <div className="card-container">
      <img className="movie-picture" src={image} alt="movie title" />
      <div className="texts-container">
        <h3>{title}</h3>
        <p className="released-date">Released Date : {release_date}</p>
        <p className="rating">
          {rating} / 10&nbsp;
          <img src="../../public/img/star.svg" alt="star" />
        </p>
        <span className="genre">Aventure</span>
        <p className="synopsis">Synopsis</p>
        <p className="story-text">{description}</p>
      </div>
      <button className="favorites-button">Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
