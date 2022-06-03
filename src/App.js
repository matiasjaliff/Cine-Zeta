import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import MovieContent from "./components/MovieContent";
import TvShowContent from "./components/TvShowContent";
import Register from "./components/Register";
import Login from "./components/Login";

import { UserContext } from "./index";

const App = () => {
  const { user, setUser } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [type, setType] = useState("movie");

  useEffect(() => {
    // console.log("INICIA PEDIDO A API...");
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        // console.log("USER: ", user);
        setUser(user);
      })
      .catch((err) => console.log("ERROR: ", err));
    axios
      .get("/api/tmdb/in-theaters")
      .then((res) => res.data.results)
      .then((foundMovies) => {
        // console.log("RES MOVIES:", foundMovies);
        setMovies(foundMovies);
      })
      .catch((err) => console.log("Error: ", err.code));
    axios
      .get("/api/tmdb/on-tv")
      .then((res) => res.data.results)
      .then((foundtvShows) => {
        // console.log("RES TV SHOWS:", foundtvShows);
        setTvShows(foundtvShows);
      })
      .catch((err) => console.log("Error: ", err.code));
  }, []);

  console.log("USER: ", user);

  return (
    <div className="main-container">
      <Navbar setMovies={setMovies} setTvShows={setTvShows} setType={setType} />
      <div className="content">
        <Sidebar
          setMovies={setMovies}
          setTvShows={setTvShows}
          setType={setType}
        />
        <Routes>
          <Route
            path="/"
            element={<List movies={movies} tvShows={tvShows} type={type} />}
          />
          <Route path="/movie/:id" element={<MovieContent />} />
          <Route path="/tv/:id" element={<TvShowContent />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/*" element={<h3>Not found</h3>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
