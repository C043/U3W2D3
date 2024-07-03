import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NetflixNav from "./components/NetflixNav";
import NetflixFooter from "./components/NetflixFooter";
import TvShows from "./pages/TvShows";
import { Container } from "react-bootstrap";
import MovieDetails from "./pages/MovieDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <NetflixNav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <NetflixFooter />
    </BrowserRouter>
  );
}

export default App;
