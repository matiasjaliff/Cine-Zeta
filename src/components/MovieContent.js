import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieContent = () => {
  const { id } = useParams();
  const [movieContent, setMovieContent] = useState({});

  useEffect(() => {
    axios
      .get(`/api/tmdb/movie/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovieContent(data);
      })
      .catch((err) => console.log("Error: ", err.code));
  }, []);

  return (
    <section className="section subcontent">
      <h3 className="title">{movieContent.title}</h3>
      <h4 className="subtitle">Release Date: {movieContent.release_date}</h4>
      <h4 className="subtitle">Overview:</h4>
      <p>{movieContent.overview}</p>
    </section>
  );
};

export default MovieContent;
