import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>404 - Not Found</h1>
      <p className="lead mb-">Seems like the page you're looking for is not here!</p>
      <NavLink to={"/"} className="btn btn-success">
        Go back home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
