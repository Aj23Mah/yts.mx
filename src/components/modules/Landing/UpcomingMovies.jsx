import React, { useEffect, useState } from "react";
import { APIUpcomingMovies } from "../../../API/latestMovies";
import { useNavigate } from "react-router";

import "../../../assets/scss/Movies.scss";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const loadUpcomingMovies = async () => {
    const res = await APIUpcomingMovies();
    setMovies(res.data.movies);
  };

  useEffect(() => {
    loadUpcomingMovies();
  }, []);

  return (
    <div className="upComingMovies-section">
      <div className="upComingMovies">
        <div className="movie-head">Upcoming YIFY Movies</div>

        <div className="upcomingMovies-content">
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

export default UpcomingMovies;
