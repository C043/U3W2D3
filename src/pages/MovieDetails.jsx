import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const id = useParams().movieId;

  const fetchMovieDetails = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=bcfdeef7&i=" + id + "&plot=full");
      if (resp.ok) {
        const data = await resp.json();
        setMovie(await data);
        setIsLoading(false);
      } else {
        console.log(resp);
        throw resp.status;
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <>
      {isLoading && !hasError ? (
        <Spinner />
      ) : (
        <Row>
          <Col xs={12} className="mb-4">
            <h1>{movie.Title}</h1>
          </Col>
          <div className="d-flex gap-5">
            <img src={movie.Poster} alt="" />
            <div className="d-flex flex-column">
              <h2 className="h3">Plot:</h2>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default MovieDetails;
