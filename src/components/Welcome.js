import { useState, useEffect } from "react";
import axios from "axios";

const Welcome = () => {
  // const [inTheatres, setInTheatres] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tmdb/in-theaters")
      .then((movies) => console.log(movies.data.results));
  }, []);

  return <p>¡Bienvenidos!</p>;
};

export default Welcome;
