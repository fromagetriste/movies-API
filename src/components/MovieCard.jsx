import React from "react";

const MovieCard = () => {
  return (
    <div className="container-for-all-cards">
      <div className="card-container">
        <img
          className="movie-picture"
          src="../../public/img/poster.jpg"
          alt="movie title"
        />
        <div className="texts-container">
          <h3>Movie title</h3>
          <p className="released-date">Released Date : 01/01/1999</p>
          <p className="rating">
            8.5/10&nbsp;
            <img src="../../public/img/star.svg" alt="star" />
          </p>
          <span className="genre">Aventure</span>
          <p className="synopsis">Synopsis</p>
          <p className="story-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            quos corrupti debitis rerum eveniet odit doloremque itaque beatae
            magnam esse molestiae culpa! Architecto, aliquam. Cum modi et
            eligendi dolore in! Ducimus, sed quia exercitationem similique vero
            quidem aspernatur officiis placeat cum consectetur quos mollitia
            quaerat ratione tempore omnis maxime accusantium? Esse a rem,
            molestias ipsa temporibus magnam odit magni est. Ipsa hic explicabo
            eveniet minima vitae fugit? Ipsam nam similique repellendus amet
            explicabo aut! Fugit ut dolorem veniam. Modi nemo numquam sequi ipsa
            tempore aut enim autem natus excepturi laborum. Reprehenderit,
            quidem soluta, assumenda adipisci dolor, ratione laborum temporibus
            sint quos cupiditate ipsum enim molestias dicta. Voluptatum,
            quibusdam fuga in id corporis, mollitia quod cupiditate tenetur
            ducimus, nam ex necessitatibus! Ex mollitia praesentium
            necessitatibus molestias inventore aliquid molestiae, iure labore!
            Quibusdam pariatur, architecto excepturi debitis dolor error quod
            qui aliquam ratione? Fugiat hic aspernatur esse adipisci
            perspiciatis rem sapiente consequatur? Id recusandae aliquid omnis
            commodi ipsam error quibusdam tempora repellat amet veritatis! Totam
            repudiandae aspernatur omnis ea magnam, vero odit ducimus.
            Assumenda, voluptate accusantium voluptatem possimus doloremque
            necessitatibus maxime iste?
          </p>
        </div>
        <button className="favorites-button">Add to Favorites</button>
      </div>

      <div className="card-container">
        <img
          className="movie-picture"
          src="../../public/img/poster.jpg"
          alt="movie title"
        />
        <div className="texts-container">
          <h3>Movie title</h3>
          <p className="released-date">Released Date : 01/01/1999</p>
          <p className="rating">
            8.5/10&nbsp;
            <img src="../../public/img/star.svg" alt="star" />
          </p>
          <span className="genre">Aventure</span>
          <p className="synopsis">Synopsis</p>
          <p className="story-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            quos corrupti debitis rerum eveniet odit doloremque itaque beatae
            magnam esse molestiae culpa! Architecto, aliquam. Cum modi et
            eligendi dolore in! Ducimus, sed quia exercitationem similique vero
            quidem aspernatur officiis placeat cum consectetur quos mollitia
            quaerat ratione tempore omnis maxime accusantium? Esse a rem,
            molestias ipsa temporibus magnam odit magni est. Ipsa hic explicabo
            eveniet minima vitae fugit? Ipsam nam similique repellendus amet
            explicabo aut! Fugit ut dolorem veniam. Modi nemo numquam sequi ipsa
            tempore aut enim autem natus excepturi laborum. Reprehenderit,
            quidem soluta, assumenda adipisci dolor, ratione laborum temporibus
            sint quos cupiditate ipsum enim molestias dicta. Voluptatum,
            quibusdam fuga in id corporis, mollitia quod cupiditate tenetur
            ducimus, nam ex necessitatibus! Ex mollitia praesentium
            necessitatibus molestias inventore aliquid molestiae, iure labore!
            Quibusdam pariatur, architecto excepturi debitis dolor error quod
            qui aliquam ratione? Fugiat hic aspernatur esse adipisci
            perspiciatis rem sapiente consequatur? Id recusandae aliquid omnis
            commodi ipsam error quibusdam tempora repellat amet veritatis! Totam
            repudiandae aspernatur omnis ea magnam, vero odit ducimus.
            Assumenda, voluptate accusantium voluptatem possimus doloremque
            necessitatibus maxime iste?
          </p>
        </div>
        <button className="favorites-button">Add to Favorites</button>
      </div>
    </div>
  );
};

export default MovieCard;
