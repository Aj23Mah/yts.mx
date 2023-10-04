import React, { useEffect, useState } from "react";
import { APIPopularMovies } from "../../../API/popularMovies";
import { useNavigate } from "react-router";

import "../../../assets/scss/Movies.scss";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const loadPopularMovies = async () => {
    const res = await APIPopularMovies();
    setMovies(res.data.movies);
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <div className="popularMovies">
      <div className="movie-head">Popular YIFY Movies</div>

      <div className="popularMovies-content">
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
  );
};

export default PopularMovies;
