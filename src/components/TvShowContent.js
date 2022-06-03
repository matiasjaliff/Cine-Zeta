import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TvShowContent = () => {
  const { id } = useParams();
  const [tvShowContent, setTvShowContent] = useState({});

  useEffect(() => {
    axios
      .get(`/api/tmdb/tv/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setTvShowContent(data);
      })
      .catch((err) => console.log("Error: ", err.code));
  }, []);

  return (
    <section className="section subcontent">
      <h3 className="title">{tvShowContent.name}</h3>
      <h4 className="subtitle">First air date: {tvShowContent.first_air_date}</h4>
      <h4 className="subtitle">Overview:</h4>
      <p>{tvShowContent.overview}</p>
    </section>
  );
};

export default TvShowContent;
