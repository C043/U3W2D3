import NetflixHeader from "../components/NetflixHeader";
import NetflixGallery from "../components/NetflixGallery";

const Home = () => {
  /* Cambiare per vedere le altre due pagine */
  /*   state = {
    home: true,
    profile: false,
    settings: false,
  };
 */
  return (
    <>
      <NetflixHeader title="Home" />
      <NetflixGallery search="Harry Potter" />
      <NetflixGallery search="Star Wars" />
      <NetflixGallery search="Marvel" />
    </>
  );
};

export default Home;
