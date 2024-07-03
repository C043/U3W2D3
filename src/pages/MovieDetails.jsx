import { useEffect, useState } from "react";
import { Badge, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [movie, setMovie] = useState("null");
  const [reviews, setReviews] = useState([]);
  const [isLoadingRev, setLoadingRev] = useState(true);

  const id = useParams().movieId;
  const navigate = useNavigate();

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
      navigate("/error");
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MjAwMTYwOTksImV4cCI6MTcyMTIyNTY5OX0.VzkI4lsPoksrZYuJzBYITgfVHRjSyBLp9ylJS0pLTgA",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setReviews(await data);
        setLoadingRev(false);
      } else {
        console.log(resp);
        throw resp.status;
      }
    } catch (error) {
      setError(true);
      setLoadingRev(false);
      navigate("/error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchComments();
  }, []);

  return (
    <>
      {isLoading || isLoadingRev ? (
        <Spinner />
      ) : (
        <Row>
          <Col xs={12} className="mb-4">
            <h1>{movie.Title}</h1>
          </Col>
          <div className="d-flex flex-column flex-md-row gap-5">
            <img src={movie.Poster} alt="" />
            <div className="d-flex flex-column align-items-start">
              <h2 className="h3">Plot:</h2>
              <p>{movie.Plot}</p>
              <h2 className="h3">Reviews:</h2>
              {reviews.length < 1 ? (
                <Badge bg="danger">No reviews here.</Badge>
              ) : (
                <ul>
                  {reviews.map(review => {
                    return (
                      <li key={review._id}>
                        <b>{review.author}</b> said {review.comment} <b>{review.rate}/5</b>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default MovieDetails;
