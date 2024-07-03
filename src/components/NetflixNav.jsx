import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search } from "react-bootstrap-icons";

const NetflixNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-invisible mb-3">
      <Container>
        <Navbar.Brand href="#home">
          <img id="netflix-logo" src="./assets/img/netflix_logo.png" alt="netflix-logo" style={{ width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex gap-2 align-items-center">
            <Search />
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
