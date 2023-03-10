import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { CookiesProvider } from "react-cookie";
import { SetToken } from "../../middleware/token/setToken";

const Ads = () => {
  category.movies.map((element, key) => {
    <div key={key} className="grid grid-rows-3">
      <span>Id du film : {element.id}</span>
      <h1>Titre du film : {element.title}</h1>
      <img src={element.img} alt={element.alt} />
    </div>;
  });
};

const category = {
  movies: [
    {
      id: 1,
      title: "Spider-man",
      img: "",
      alt: "lorem",
    },
    {
      id: 2,
      title: "Batman",
      img: "",
      alt: "lorem",
    },
  ],
  books: [
    {
      id: 11,
      title: "Da vinci code",
      img: "",
    },
    {
      id: 22,
      title: "???",
      img: "",
    },
  ],
  foods: [
    {
      id: 31,
      title: "Asiat",
      img: "",
    },
    {
      id: 32,
      title: "Français",
      img: "",
    },
  ],
};

const Home = () => {
  const [show, setShow] = useState({
    movies: false,
    books: false,
    foods: false,
  });

  const showMovies = () => {
    setShow({ ...show, movies: true });
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  SetToken();
  return (
    <CookiesProvider>
      <Navbar />
      <p onClick={showMovies} className="mt-20">
        movies
      </p>
      <p onClick={handleClick} className="mt-20">
        movies
      </p>

      {isShown ? (
        <div>
          <h2>Hide</h2>
        </div>
      ) : null}

      {show.movies === true
        ? category.movies.map((element, key) => {
            return (
              <div key={key}>
                <span>Id du film : {element.id}</span>
                <h1>Titre du film : {element.title}</h1>
                <img src={element.img} alt={element.alt} />
              </div>
            );
          })
        : console.error(false)}
    </CookiesProvider>
  );
};

export default Home;
