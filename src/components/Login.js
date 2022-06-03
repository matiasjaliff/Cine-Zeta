import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../index";

const Login = () => {
  const useInput = (name) => {
    const [value, setValue] = useState("");
    const onChange = ({ target: { value } }) => setValue(value);
    return { value, onChange, name };
  };

  const { user, setUser } = useContext(UserContext);
  const email = useInput("email");
  const password = useInput("password");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("LOGUEAR...");
    console.log("EMAIL: ", email.value);
    console.log("PASSWORD: ", password.value);
    axios
      .post("/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((user) => {
        console.log("USUARIO LOGUEADO");
        console.log(user.data);
        setUser(user.data);
        navigate("/");
      })
      .catch((err) => console.log("ERROR: ", err));
  };

  return (
    <div className="column auto">
      <h3 className="px-5">Log In</h3>
      <form onSubmit={handleSubmit}>
        <div class="field px-5">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="email"
              placeholder="Tu email"
              required
              {...email}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field px-5">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              required
              {...password}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field px-5">
          <p class="control">
            <button class="button is-success">Log In</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
