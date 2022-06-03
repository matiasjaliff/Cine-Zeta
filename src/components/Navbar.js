import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ setMovies, setTvShows, setType }) => {
  const [searchType, setSearchType] = useState("movie");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleType = (event) => {
    setSearchType(event.target.value);
  };

  // console.log("SEARCH TYPE: ", searchType);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // console.log("QUERY: ", query);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("BUSCAMOS...");
    axios
      .get(`/api/tmdb/search/${searchType}?query=${query}`)
      .then((res) => res.data.results)
      .then((results) => {
        // console.log("SEARCH TYPE: ", searchType);
        setType(searchType);
        if (searchType === "movie") {
          // console.log("FOUND MOVIES: ", results);
          setMovies(results);
          navigate("/");
        } else {
          // console.log("FOUND TV SHOWS: ", results);
          setTvShows(results);
          navigate("/");
        }
      })
      .catch((err) => console.log("Error: ", err.code));
  };

  const handleSelection = (selection) => {
    if (selection === "movie") {
      axios
        .get("/api/tmdb/in-theaters")
        .then((res) => res.data.results)
        .then((foundMovies) => {
          console.log("RES MOVIES:", foundMovies);
          setMovies(foundMovies);
          setType(selection);
        })
        .catch((err) => console.log("Error: ", err.code));
    } else {
      axios
        .get("/api/tmdb/on-tv")
        .then((res) => res.data.results)
        .then((foundtvShows) => {
          console.log("RES TV SHOWS:", foundtvShows);
          setTvShows(foundtvShows);
          setType(selection);
        })
        .catch((err) => console.log("Error: ", err.code));
    }
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3000">
          <img src="logo-zeta.png"></img>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link
            class="navbar-item"
            to="/"
            onClick={() => handleSelection("movie")}
          >
            Hot in theaters
          </Link>
          <Link
            class="navbar-item"
            to="/"
            onClick={() => handleSelection("tv")}
          >
            Hot on TV
          </Link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div>
              <form onSubmit={handleSearch}>
                <div className="field has-addons">
                  <p className="control">
                    <span className="select is-small">
                      <select name="type" onChange={handleType}>
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input
                      className="input is-small"
                      name="query"
                      type="text"
                      placeholder="Search on Cine Zeta"
                      onChange={handleChange}
                    />
                  </p>
                  <p className="control">
                    <button className="button is-small">Search</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
