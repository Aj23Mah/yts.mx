import React, { useState, useEffect } from "react";
import "../assets/scss/Details.scss";
import popcorn from "../assets/images/popcorn-remove.png";
import tomatoes from "../assets/images/rotten-tomatoes.png";
import { useNavigate, useParams } from "react-router";
import {
  APIMoviesDetails,
  APIMoviesDetailsSuggestions,
} from "./../API/moviesDetails";
import { APISearchMoviesParams } from "./../API/movie";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [suggestionMovies, setSuggestionMovies] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const loadMoviesDetails = async () => {
    const res = await APIMoviesDetails(id ?? "");
    setMovie(res.data.movie);
  };

  const loadMoviesSuggestions = async () => {
    const res = await APIMoviesDetailsSuggestions(id ?? "");
    const res2 = await APISearchMoviesParams("avenger");
    setSuggestionMovies(res.data.movies);
  };

  useEffect(() => {
    loadMoviesDetails();
    loadMoviesSuggestions();
  }, [id]);

  return (
    <div className="details-section">
      <div className="flex">
        <div className="image-area">
          <div className="movie_img">
            <img src={movie.medium_cover_image} alt="" />
          </div>
          <div className="flex flex-col">
            <button className="mb-2 green p br">Download</button>
            <button className="mb-2 blue p br">Watch Now</button>
          </div>
        </div>

        <div className="details-area">
          <div className="text-3xl mb-2">{movie.title}</div>
          <div className="text-2xl">{movie.year}</div>
          <div className="text-2xl mb-2">Drama / History / War</div>
          <div className="mb-2 text-lg font-italic">
            Available in: <button className="p border br"> 480p.WEB</button>{" "}
            <button className="p border br">720p.WEB</button>
            <button className="p border br">1080p.WEB</button>
          </div>
          <div>
            <button className="p border br mb-2 flex align-center">
              <span class="material-symbols-outlined">download</span>Request
              Subtitles
            </button>
          </div>
          <div>
            <div className="flex align-center ml-2">
              <i class="fa-solid fa-heart"></i>
              <p className="ml-2">1</p>
            </div>
            <div className="mb-2 flex align-center">
              <img src={tomatoes} alt="" height="24px" />
              70% TOMATOMETER{" "}
            </div>
            <div className="mb-2 flex align-center">
              <img src={popcorn} alt="" height="24px" />
              72% AUDIENCE{" "}
            </div>
            <div className="flex align-center ml-2">
              <i class="fa-brands fa-imdb"></i>
              <p className="ml-2 mr-2">7.0/10</p>{" "}
              <i class="fa-solid fa-star"></i>
              7.5K
            </div>
          </div>
        </div>
      </div>

      <div className="similarMovies">
        <div className="text-xl ml-3">Similar Movies</div>
        <div className="similar_movies-box">
          {suggestionMovies.map((v, key) => (
            <div
              className="movie-box"
              key={key}
              onClick={() => navigate("/movie/" + v.id)}
            >
                <img src={v.medium_cover_image} alt="" />
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Details;
