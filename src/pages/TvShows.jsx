import NetflixGallery from "../components/NetflixGallery";
import NetflixHeader from "../components/NetflixHeader";

const TvShows = () => {
  return (
    <>
      <NetflixHeader title="Tv Shows" />
      <NetflixGallery search="Horror" tv={true} />
      <NetflixGallery search="Comedy" tv={true} />
      <NetflixGallery search="Action" tv={true} />
    </>
  );
};

export default TvShows;
