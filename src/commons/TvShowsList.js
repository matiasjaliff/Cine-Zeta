import TvShowItem from "./TvShowItem";
import { useContext } from "react";

import { UserContext } from "../index";

const TvShowList = ({ tvShows }) => {
  const { user } = useContext(UserContext);

  return (
    <section className="center">
      <table className="table">
        <thead>
          <tr>
            {user.id ? (<th>Add to favs</th>) : (<></>)}
            <th>Popularity</th>
            <th>Name</th>
            <th>Rating</th>
            <th>First air date</th>
          </tr>
        </thead>
        <tbody>
          {tvShows.map((tvShow, i) => (
            <TvShowItem tvShow={tvShow} key={i} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TvShowList;
