import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../index";

const Register = () => {
  const navigate = useNavigate();

  const useInput = (name) => {
    const [value, setValue] = useState("");
    const onChange = ({ target: { value } }) => setValue(value);
    return { value, onChange, name };
  };

  const { user } = useContext(UserContext);

  const firstName = useInput("firstName");
  const lastName = useInput("lastName");
  const email = useInput("email");
  const password = useInput("password");

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("REGISTRAR");
    axios
      .post("/api/users/register", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then((user) => {
        console.log(user);
        navigate("/users/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="column auto">
      <h3 className="px-5">Sign In</h3>
      <form onSubmit={handleRegister}>
        <div className="field px-5">
          <label className="label">Nombres</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Tus nombres"
              required
              {...firstName}
            />
          </div>
        </div>
        <div className="field px-5">
          <label className="label">Apellidos</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Tus apellidos"
              required
              {...lastName}
            />
          </div>
        </div>
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
            <button class="button is-success">Sign In</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
