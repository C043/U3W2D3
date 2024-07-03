import { Dropdown, DropdownButton } from "react-bootstrap";
import { Microsoft, TextLeft } from "react-bootstrap-icons";

const NetflixHeader = () => {
  return (
    <div className="d-flex align-items-center">
      <h1 className="me-5">TV Shows</h1>
      <DropdownButton className="me-auto" drop={"down"} variant="outline-light" title={" Genres "}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
        <Dropdown.Item eventKey="3">Comedy</Dropdown.Item>
      </DropdownButton>
      <TextLeft type="button" className="btn btn-outline-light my-3 fs-1 p-1" />
      <Microsoft type="button" className="btn btn-outline-light my-3 fs-1 p-2" />
    </div>
  );
};

export default NetflixHeader;
