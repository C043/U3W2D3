import { Facebook, Instagram, TwitterX, X, Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => {
  return (
    <footer>
      <div className="container mt-5">
        <div className="icons d-flex">
          <Facebook className="text-secondary me-3" />
          <Instagram className="text-secondary me-3" />
          <TwitterX className="text-secondary me-3" />
          <Youtube className="text-secondary" />
        </div>
        <div className="row mb-4">
          <div className="col-6 col-md-3 gy-3">
            <a href="#" className="nav-link mb-3 text-secondary">
              Audio and Subtitles
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Media Center
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Privacy
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Contact Us
            </a>
          </div>
          <div className="col-6 col-md-3 gy-3">
            <a href="#" className="nav-link mb-3 text-secondary">
              Audio Description
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Investor Relatios
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Legal Notices
            </a>
          </div>
          <div className="col-6 col-md-3 gy-3">
            <a href="#" className="nav-link mb-3 text-secondary">
              Help Center
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Jobs
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Cookie Preferences
            </a>
          </div>
          <div className="col-6 col-md-3 gy-3">
            <a href="#" className="nav-link mb-3 text-secondary">
              Gift Cards
            </a>
            <a href="#" className="nav-link mb-3 text-secondary">
              Terms of Use
            </a>
            <a href="#" className="nav-link text-secondary">
              Corporate Information
            </a>
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary mb-3">
          Service Code
        </button>
        <p className="text-secondary">&copy 1997-2024 Netflix, Inc. `i-0dOOfcda2fdf9c0de`</p>
      </div>
    </footer>
  );
};

export default NetflixFooter;
