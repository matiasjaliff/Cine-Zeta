import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../index";
import axios from "axios";

const TvShowItem = ({ tvShow, i }) => {
  const { user } = useContext(UserContext);

  const handleFav = () => {
    axios
      .post("/api/users/tv-shows", {
        userId: user.id,
        tmdbTvShowId: tvShow.id,
      })
      .then((res) => console.log("FAVORITOS: ", res))
      .catch((err) => console.log("ERROR: ", err));
  };
  
  return (
    <tr>
      {user.id ? <td onClick={() => handleFav()}>+</td> : <></>}
      <td>{tvShow.popularity}</td>
      <td><Link to={`/tv/${tvShow.id}`}>{tvShow.name}</Link></td>
      <td>{tvShow.vote_average}</td>
      <td>{tvShow.first_air_date}</td>
    </tr>
  );
};

export default TvShowItem;
