import { Link } from "react-router-dom";
import axios from "axios";
import React, { useContext } from "react";

import { UserContext } from "../index";

const Sidebar = ({ setMovies, setTvShows, setType }) => {
  const { user, setUser } = useContext(UserContext);

  console.log("USER SIDEBAR: ", user);

  const handleLogout = () => {
    console.log("TRYING LOGOUT...");
    axios
      .post("/api/users/logout")
      .then((res) => {
        setUser({});
        console.log("LOGOUT DONE");
      })
      .catch((err) => console.log("ERROR: ", err));
  };

  return (
    <aside className="sidebar column is-2">
      {user.id ? (
        <div className="center">
          <h4 className="title is-3">{user.firstName}</h4>
          <h4 className="button is-primary" onClick={() => handleLogout()}>Log Out</h4>
        </div>
      ) : (
        <div className="center">
          <Link className="button is-medium is-primary" to="/users/login">
            Log In
          </Link>
          <Link className="button is-medium is-primary" to="/users/register">
            Sign In
          </Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
