import React, { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router";
// import Search from "../../pages/Search";
// import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", path: "" },
    { label: "4k", path: "" },
    { label: "Tranding", path: "" },
    { label: "Browser Movies", path: "" },
  ];

  const [searchKeyword, setSearchKeyword] = useState("");

  const searchMovie = (e) => {
    e.preventDefault();
    if (searchKeyword !== "") {
      navigate("/search/" + searchKeyword);
      setSearchKeyword("");
    }
  };
  return (
    <nav>
      <div className="logo">
        <img
          src="https://repository-images.githubusercontent.com/580417416/68b872ed-fb38-4fa9-bb3a-2e8c3450d3a8"
          alt="logo"
        />
      </div>

      <div className="nav_items">
        <div className="search_box">
          <form onSubmit={searchMovie}>
            <input
              type="text"
              placeholder="Quick Search"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </form>
        </div>
        <div className="nav_list">
          {navItems.map((v, key) => (
            <div className="list" key={key}>
              <div>{v.label}</div>
            </div>
          ))}
        </div>
        <div className="btn">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
