import { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";

class Profile extends Component {
  state = {
    form: {
      checked1: true,
      checked2: true,
    },
  };
  render() {
    return (
      <>
        <div className="con">
          <div className="row border-bottom pb-4 mb-5 align-items-start justify-content-center justify-content-lg-start">
            <h1 className="col-12 text-center text-lg-start border-bottom pb-2 mb-4">Edit Profile</h1>
            <div className="col-8 col-lg-3 position-relative mb-4">
              <img src="./assets/img/avatar.png" alt="profile-image" className="profile-image" />
              <i className="fa-solid fa-pen position-absolute"></i>
              <PencilFill className="icon position-absolute fs-2" />
            </div>
            <div className="col-12 col-lg-8">
              <form action="">
                <input type="text" placeholder="Strive Student" className="name-input p-2 mb-4 bg-secondary" />
                <label htmlFor="lang" className="mb-2 text-secondary h5">
                  Language:
                </label>
                <div className="dropdown me-auto pb-4 mb-4 border-bottom" id="lang">
                  <DropdownButton drop={"down"} variant="outline-light" title={"English"} flip={true}>
                    <Dropdown.Item eventKey="1">English</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Italian</Dropdown.Item>
                    <Dropdown.Item eventKey="2">French</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Deutsch</Dropdown.Item>
                  </DropdownButton>
                </div>
                <label htmlFor="maturity" className="text-secondary h5 mb-3">
                  Maturity Settings:
                </label>
                <div className="dropdown mb-2" id="maturity">
                  <button className="btn btn-secondary" type="button" data-bs-toggle="" aria-expanded="false">
                    ALL MATURITY RATINGS
                  </button>
                </div>
                <p className="fs-6">Show titles of all maturiry ratings for this profile</p>
                <div className="border-bottom pb-4 mb-4">
                  <button type="button" className="btn btn-outline-secondary px-4">
                    EDIT
                  </button>
                </div>
                <label htmlFor="controls" className="text-secondary h5">
                  Autoplay controls
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    role="button"
                    type="checkbox"
                    value=""
                    id="contorl-1"
                    checked={this.state.form.checked1 && true}
                    onChange={() => {
                      this.setState(prevState => ({
                        form: { ...this.state.form, checked1: !prevState.form.checked1 },
                      }));
                    }}
                  />
                  <label className="form-check-label" htmlFor="control-1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    role="button"
                    type="checkbox"
                    value=""
                    id="control-2"
                    checked={this.state.form.checked2 && true}
                    onChange={() => {
                      this.setState(prevState => ({
                        form: { ...this.state.form, checked2: !prevState.form.checked2 },
                      }));
                    }}
                  />
                  <label className="form-check-label" htmlFor="control-2">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-5">
            <button type="button" className="btn btn-outline-secondary px-4">
              SAVE
            </button>
            <button type="button" className="btn btn-outline-secondary px-4">
              CANCEL
            </button>
            <button type="button" className="btn btn-outline-danger px-4">
              DELETE PROFILE
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
