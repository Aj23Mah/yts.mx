import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../assets/scss/Search.scss";
// import MovieList from "../components/modules/Landing/MovieList";
import '../assets/scss/Movies.scss'
import '../assets/scss/Hero.scss'
import { APISearchMovies } from "../API/movie";

const Search = () => {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const loadMovies = async () => {
    const res = await APISearchMovies(keyword ?? "");
    setMovies(res.data.movies ?? []);
  };

  useEffect(() => {
    loadMovies();
  }, [keyword]);

  return (
    <div className="search-section">
      <div>
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
      </div>
    </div>
  );
};

export default Search;
