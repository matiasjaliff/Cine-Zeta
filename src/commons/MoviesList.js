import MovieItem from "./MovieItem";
import { useContext } from "react";

import { UserContext } from "../index";

const List = ({ movies }) => {
  const { user } = useContext(UserContext);
  
  return (
    <section className="center">
      <table className="table">
        <thead>
          <tr>
            {user.id ? (<th>Add to favs</th>) : (<></>)}
            <th>Popularity</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Release date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => (
            <MovieItem movie={movie} key={i} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default List;
