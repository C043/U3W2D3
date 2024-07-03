import { Component } from "react";
import { Paypal } from "react-bootstrap-icons";

class Settings extends Component {
  render() {
    return (
      <body data-bs-theme="light">
        <div data-bs-theme="light" className="con mt-5">
          <h1 className="mb-4 pb-2 border-bottom border-black">Account</h1>
          <div className="row border-bottom border-black pb-4 mb-3 align-items-start">
            <div className="col-8 col-lg-4 mb-4">
              <h2 className="h5 text-secondary">MEMBERSHIP & BILLING</h2>
              <button type="button" className="btn btn-secondary">
                Cancel Membership
              </button>
            </div>
            <div className="col-12 col-lg-8">
              <div>
                <div className="row justify-content-between">
                  <p className="col-6 text-secondary">
                    <b>student@strive.school</b>
                  </p>
                  <a href="" className="col-6 text-end">
                    Change account email
                  </a>
                </div>
                <div className="row justify-content-between">
                  <p className="col-6 text-secondary">Password: ***********</p>
                  <a href="" className="col-6 text-end">
                    Change password
                  </a>
                </div>
                <div className="row justify-content-between border-bottom border-black mb-2">
                  <p className="col-6 text-secondary">Phone: 321 044 1279</p>
                  <a href="" className="col-6 text-end">
                    Change account email
                  </a>
                </div>
                <div className="row justify-content-between">
                  <div className="col-6 text-secondary">
                    <Paypal />{" "}
                    <span>
                      <b>admin@strive.school</b>
                    </span>
                  </div>
                  <a href="" className="col-6 text-end">
                    Update payment info
                  </a>
                </div>
                <div className="row justify-content-between pb-2 border-bottom border-black mb-2">
                  <a href="" className="col-12 text-end">
                    Billing details
                  </a>
                </div>
                <div className="row justify-content-between">
                  <a href="" className="col-12 text-end">
                    Redeem gift cards or promo code
                  </a>
                </div>
                <div className="row justify-content-between">
                  <a href="" className="col-12 text-end">
                    Where to buy gift cards
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-black mb-3">
            <div className="col-8 col-lg-4 mb-4">
              <h2 className="h5 text-secondary">PLAN DETAILS</h2>
            </div>
            <div className="col-12">
              <div className="row justify-content-between">
                <p className="col-6 text-secondary">
                  <b>Premium ULTRA HD</b>
                </p>
                <a href="" className="col-6 text-end">
                  Change plan
                </a>
              </div>
            </div>
          </div>
          <div className="row border-bottom border-black pb-3 mb-3 align-items-start">
            <div className="col-8 col-lg-4 mb-4">
              <h2 className="h5 text-secondary">SETTINGS</h2>
            </div>
            <div className="col-8">
              <a href="" className="d-block">
                Parental controls
              </a>
              <a href="" className="d-block">
                Test participation
              </a>
              <a href="" className="d-block">
                Manage download devices
              </a>
              <a href="" className="d-block">
                Active a device
              </a>
              <a href="" className="d-block">
                Recent device streaming activity
              </a>
              <a href="" className="d-block">
                Sign out of all devices
              </a>
            </div>
          </div>
          <div className="row pb-3 mb-3 align-items-start">
            <div className="col-8 col-lg-4 mb-4">
              <h2 className="h5 text-secondary">MY PROFILE</h2>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row justify-content-between g-1 align-items-center mb-2">
                <img src="./assets/img/avatar.png" alt="profile-image" className="col-1" />
                <span className="col-5">
                  <b>Strive Student</b>
                </span>
                <div className="col-6">
                  <a href="" className="d-block text-end">
                    Manage profiles
                  </a>
                  <a href="" className="d-block text-end">
                    Add profile email
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <a href="" className="d-block">
                    Language
                  </a>
                  <a href="" className="d-block">
                    Playback settings
                  </a>
                  <a href="" className="d-block">
                    Subtitle appearance
                  </a>
                </div>
                <div className="col-6">
                  <a href="" className="d-block">
                    Viewing activity
                  </a>
                  <a href="" className="d-block">
                    Ratings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Settings;
