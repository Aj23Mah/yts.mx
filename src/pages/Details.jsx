import React, { useState, useEffect } from "react";
import "../assets/scss/Details.scss";
import popcorn from "../assets/images/popcorn-remove.png";
import tomatoes from "../assets/images/rotten-tomatoes.png";
import { useNavigate, useParams } from "react-router";
import { APIMoviesDetails,APIMoviesDetailsSuggestions } from "./../API/moviesDetails";
import { APISearchMoviesParams } from "./../API/movie";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [suggestionMovies, setSuggestionMovies] = useState([]);
  const {id}= useParams();
  const navigate = useNavigate();
  
  const loadMoviesDetails = async () => {
    const res = await APIMoviesDetails(id ?? '');
    setMovie(res.data.movie);
  };

  const loadMoviesSuggestions = async () => {
    const res = await APIMoviesDetailsSuggestions(id ?? '');
    const res2 = await APISearchMoviesParams('avenger');
    setSuggestionMovies(res.data.movies);
  };

  useEffect(() => {
    loadMoviesDetails();
    loadMoviesSuggestions();
  }, [id]);

  return (
    <div className="details-section">
        <div className="flex justify-center border">
          <div className="image-area mb-5">
            <div className="movie_img">
              <img src={movie.medium_cover_image} alt="" />
              {/* <img
                src="https://img.yts.mx/assets/images/movies/battle_for_haditha_2007/medium-cover.jpg"
                alt=""
              /> */}
            </div>
            <button className="mb-2 green p br">Download</button>
            <button className="mb-2 blue p br">Watch Now</button>
          </div>

          <div className="details-area mb-2">
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
              <div className="flex align-center">
                <i class="fa-solid fa-heart"></i>
                <p className="ml-2">1</p>
              </div>
              <div className="mb-1 flex align-center">
                <img src={tomatoes} alt="" height="24px" className="mr-2" />
                70% TOMATOMETER{" "}
              </div>
              <div className="mb-1 flex align-center">
                <img src={popcorn} alt="" height="24px" className="mr-2" />
                72% AUDIENCE{" "}
              </div>
              <div className="flex align-center">
                <i class="fa-brands fa-imdb"></i>
                <p className="ml-2 mr-2">7.0/10</p>{" "}
                <i class="fa-solid fa-star"></i>
                7.5K
              </div>
            </div>
          </div>
        </div>

      <div className="similarMovies">
        <div className="mb-2 text-xl">Similar Movies</div>
        {suggestionMovies.map((v, key) => (
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

        {/* <div className="flex flex-wrap width-full">
          <div className="m-2 border-white">
            <img
              src="https://img.yts.mx/assets/images/movies/shiv_shastri_balboa_2022/medium-cover.jpg"
              alt=""
              height="140px"
            />
          </div>
          <div className="m-2 border-white">
            <img
              src="https://img.yts.mx/assets/images/movies/shiv_shastri_balboa_2022/medium-cover.jpg"
              alt=""
              height="140px"
            />
          </div>
          <div className="m-2 border-white">
            <img
              src="https://img.yts.mx/assets/images/movies/shiv_shastri_balboa_2022/medium-cover.jpg"
              alt=""
              height="140px"
            />
          </div>
          <div className="m-2 border-white">
            <img
              src="https://img.yts.mx/assets/images/movies/shiv_shastri_balboa_2022/medium-cover.jpg"
              alt=""
              height="140px"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
