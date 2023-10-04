import React, { useEffect, useState } from "react";
import "../../../assets/scss/Hero.scss";
import { useNavigate } from "react-router";
import { APILoadMovies } from "../../../API/movie";

import "../../../assets/scss/Movies.scss";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const loadMovies = async () => {
    const res = await APILoadMovies();
    setMovies(res.data.movies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="movieList-section">
      <div className="movieList">
        <div className="movie-head">YIFY Movies</div>

        <div className="movieList-content">
          {movies.map((v, key) => (
            <div
              className="movie-box"
              key={key}
              onClick={() => navigate("/movie/" + v.id)}
            >
              <div className="image-box">
                <div className="image">
                  <img src={v.medium_cover_image} alt="" />
                </div>
              </div>
              <div className="text-box">
                <div>{v.title}</div>
                <div>{v.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
