import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";

const NetflixNav = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar expand="lg" className="bg-body-invisible mb-3">
      <Container>
        <NavLink to={"/"}>
          <img id="netflix-logo" src="./assets/img/netflix_logo.png" alt="netflix-logo" style={{ width: "150px" }} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/tv-shows"} className="nav-link">
              Tv Shows
            </NavLink>
          </Nav>
          <div className="d-flex gap-2 align-items-center">
            <Search /> <input placeholder={location.pathname === "/tv-shows" ? "Search Tv Shows" : "Search"} />
            <Nav.Link href="#link">KIDS</Nav.Link>
            <BellFill />
            <DropdownButton
              drop={"down-centered"}
              variant="outline-light"
              title={<img src="./assets/img/kids_icon.png" alt="kids-logo" style={{ width: "30px" }} />}
              flip={true}
            >
              <Dropdown.Item eventKey="1">
                My Profile{" "}
                <span>
                  <PersonFill />
                </span>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                Settings{" "}
                <span>
                  <GearFill />
                </span>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNav;
