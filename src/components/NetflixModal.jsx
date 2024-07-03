import { Component } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

class NetflixModal extends Component {
  state = {
    show: true,
    movie: {},
    isLoading: true,
  };

  handleClose = () => this.setState(prevState => ({ show: !prevState.show }));

  componentDidMount = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=bcfdeef7&i=" + this.props.imdbID);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ movie: data, isLoading: false });
      } else {
        throw new Error("Errore nella fetch del dato");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.isLoading) {
      console.log("RENDER");
      return (
        <div
          className={this.state.show ? "modal show position-absolute top-0 " : "d-none"}
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={this.state.show} onHide={() => this.handleClose()}>
            <Modal.Header>
              <Modal.Title>{this.state.movie.Title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex gap-1 justify-content-center align-items-center">
              {this.state.isLoading ? (
                <Spinner animation="border" variant="secondary" />
              ) : (
                <>
                  <img className="flex-shrink-1" src={this.state.movie.Poster} alt="movie-poster" />
                  <p>{this.state.movie.Plot}</p>
                </>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    } else {
      console.log("NO RENDER");
      return <Spinner />;
    }
  }
}

export default NetflixModal;
