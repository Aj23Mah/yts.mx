import React, { useEffect, useState } from "react";
import "../../../assets/scss/Hero.scss";

import twitter_logo from "../../../assets/images/twitter.png";
import telegram_logo from "../../../assets/images/telegram.png";
import Warning from "./Warning";

import MovieList from "./MovieList";
import UpcomingMovies from "./UpcomingMovies";
import PopularMovies from "./PopularMovies";

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="hero_text-area">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <div className="paragraph">
            <p>
              Welcome to the official YTS.MX website. Here you can browse and
              download YIFY movies in excellent{" "}
            </p>{" "}
            <p>
              {" "}
              720p, 1080p, 2160p 4k and 3D quality, all at the smallest file
              size. YTS Movies Torrents.
            </p>
            <div className="important">
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </div>
          </div>
          <div className="flex align-center justify-center">
            <div>
              <img src={telegram_logo} alt="telegram logo" />
              YTSMX_UPDATES &nbsp;
            </div>
            <div>
              <img src={twitter_logo} alt="twitter logo" />
              Upcoming: THE EQUALIZER 3 on 3 October 2023.
            </div>
          </div>
          <div className="popular flex align-center">
            <span class="material-symbols-outlined">star</span>
            Popular Downloads
          </div>
        </div>

        <>
          <PopularMovies />
        </>

        <>
          <Warning />
        </>
      </div>

      <>
        <UpcomingMovies />
      </>

      <>
        <MovieList />
      </>
    </section>
  );
};

export default Hero;
