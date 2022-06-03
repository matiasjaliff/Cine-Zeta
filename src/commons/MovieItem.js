import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../index";
import axios from "axios";

const MovieItem = ({ movie, i }) => {
  const { user } = useContext(UserContext);

  const handleFav = () => {
    axios
      .post("/api/users/movies", {
        userId: user.id,
        tmdbMovieId: movie.id,
      })
      .then((res) => console.log("FAVORITOS: ", res))
      .catch((err) => console.log("ERROR: ", err));
  };

  return (
    <tr>
      {user.id ? <td onClick={() => handleFav()}>+</td> : <></>}
      <td>{movie.popularity}</td>
      <td>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </td>
      <td>{movie.vote_average}</td>
      <td>{movie.release_date}</td>
    </tr>
  );
};

export default MovieItem;
