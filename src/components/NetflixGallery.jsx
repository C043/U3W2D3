import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
const NetflixGallery = props => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  const [hasError, setError] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const resp = await fetch(
        props.tv
          ? "http://www.omdbapi.com/?apikey=bcfdeef7&s=" + props.search + "&type=series&page=2"
          : "http://www.omdbapi.com/?apikey=bcfdeef7&s=" + props.search
      );
      if (resp.ok) {
        const data = await resp.json();
        setMovies(await data.Search);
        setIsLoaded(true);
      } else {
        console.log(resp);
        throw resp.status;
      }
    } catch (error) {
      setError(true);
      setIsLoaded(true);
      setErrorCode(error);
      console.log(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mb-3">
      <h2 className="h4">{props.search}</h2>
      {hasError && (
        <Alert className="d-flex justify-content-center" variant="danger">
          <p className="m-0">
            <span>Error</span> <b>{errorCode}</b>
          </p>
        </Alert>
      )}
      {isLoaded ? (
        <Slider {...settings}>
          {movies.map(movie => {
            return (
              <div className="slick-item" key={movie.imdbID}>
                <img src={movie.Poster} alt="movie-poster" onClick={() => navigate("/movie-details/" + movie.imdbID)} />
              </div>
            );
          })}
        </Slider>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </div>
  );
};

export default NetflixGallery;
