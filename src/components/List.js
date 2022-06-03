import MoviesList from "../commons/MoviesList";
import TvShowsList from "../commons/TvShowsList";

const List = ({ movies, tvShows, type }) => {
  return (
    <div className="subcontent">
      {/* <p className="center">
        These are the most popular
        {type === "movie" ? " movies in theaters " : " shows on TV "}right now
      </p> */}
      {type === "movie" ? (
        <MoviesList movies={movies} />
      ) : (
        <TvShowsList tvShows={tvShows} />
      )}
    </div>
  );
};

export default List;
